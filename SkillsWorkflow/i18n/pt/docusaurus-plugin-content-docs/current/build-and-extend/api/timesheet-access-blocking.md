---
id: timesheet-access-blocking
title: API de bloqueio de acesso por timesheets
description: Use a API do Skills Workflow para identificar utilizadores a bloquear ou desbloquear com base no estado das timesheets e comunicar o resultado.
sidebar_label: Bloqueio por timesheets
sidebar_position: 4
---

O Skills Workflow disponibiliza listas de utilizadores a bloquear e desbloquear com base no estado das timesheets. Um sistema externo pode consultar essas listas, alterar o acesso no seu sistema de identidade e comunicar o resultado ao Skills Workflow. Estes endpoints não desativam nem repõem, por si só, o acesso nesse sistema externo.

## Autenticação e URL de base

Use as credenciais da Client API fornecidas pelo Suporte do Skills Workflow. Envie `X-AppId` e `X-AppSecret` em cada pedido. Consulte a [autenticação da Client API](/docs/build-and-extend/api/client-api#authentication) para obter as credenciais. Use a URL de base da API v2 atribuída ao seu ambiente, representada abaixo por `{ApiUrl}`.

## Processo de bloqueio

1. Chame `GET {ApiUrl}/api/blockedloginrequests/userstoblock` para obter os utilizadores selecionados para bloqueio.
2. Bloqueie cada conta no seu sistema de identidade externo, identificando-a por `AdUserName`.
3. Chame `POST {ApiUrl}/api/blockedloginrequests/block` com o resultado de cada utilizador.

| Método e caminho | Finalidade | Resposta |
| --- | --- | --- |
| `GET /api/blockedloginrequests/userstoblock` | Listar utilizadores a bloquear. | `200 OK`: lista de objetos de utilizador. |
| `POST /api/blockedloginrequests/block` | Comunicar o resultado de uma tentativa de bloqueio. | `200 OK`: objeto de utilizador. `404 Not Found` se `Oid` não identificar um utilizador. |

O GET aceita os parâmetros de consulta opcionais `companyId`, `companyName`, `countryId` e `countryName`. Os parâmetros de ID são GUIDs. Cada utilizador devolvido tem `Oid` (ID do utilizador no Skills Workflow), `UserName` e `AdUserName`. O tipo de resposta também define `Name`, mas o mapeamento atual não o preenche.

Envie um corpo JSON para o endpoint POST:

| Campo | Tipo | Significado |
| --- | --- | --- |
| `Oid` | GUID, obrigatório | O `Oid` devolvido pelo GET. |
| `Success` | booleano | Indica se o bloqueio externo teve êxito. |
| `AccountExpirationDate` | data/hora ou null | Data de expiração da conta a registar no Skills Workflow quando `Success` é `true`. |
| `Message` | string | Mensagem de resultado usada quando o bloqueio falha. |

Em caso de êxito, o Skills Workflow regista a data de expiração da conta e limpa o registo de novas tentativas de bloqueio do utilizador. Em caso de falha, guarda ou atualiza esse registo. As falhas adiam uma nova tentativa; após a terceira falha, o utilizador é excluído da lista de bloqueio. A lista também exclui utilizadores já marcados como bloqueados. O estado de aprovação de timesheets pode afetar a lista quando o bloqueio por aprovação está ativo.

## Processo de desbloqueio

1. Chame `GET {ApiUrl}/api/unblockuserrequests` para obter os pedidos de desbloqueio.
2. Reponha o acesso de cada conta no seu sistema de identidade externo, identificando-a por `AdUserName`.
3. Chame `PUT {ApiUrl}/api/unblockuserrequests` com o resultado de cada pedido.

| Método e caminho | Finalidade | Resposta |
| --- | --- | --- |
| `GET /api/unblockuserrequests` | Listar pedidos de desbloqueio recentes. | `200 OK`: lista de objetos de pedido de desbloqueio. |
| `PUT /api/unblockuserrequests` | Comunicar o resultado de uma tentativa de desbloqueio. | `200 OK`: ID do pedido. `400 Bad Request` para um ID inválido; `404 Not Found` se o pedido não existir. |

O GET aceita os mesmos filtros opcionais de empresa e país da lista de bloqueio. Devolve pedidos dos 60 minutos anteriores. Cada pedido tem `Id`, `AdUserName` e `AccountExpirationDate` (que pode ser null).

Envie um corpo JSON para o endpoint PUT:

| Campo | Tipo | Significado |
| --- | --- | --- |
| `Id` | string com um GUID, obrigatório | O `Id` devolvido pelo GET. |
| `RequestResult` | booleano, obrigatório | Indica se o desbloqueio externo teve êxito. |
| `RequestResultMessage` | string | Mensagem de resultado a registar no pedido. |

Quando `RequestResult` é `true`, o Skills Workflow elimina o pedido de desbloqueio e atualiza o estado de desbloqueio do utilizador. Quando é `false`, mantém o pedido com o resultado comunicado. O cliente é responsável por repor o acesso no sistema de identidade externo.

## Artigos relacionados

- [Client API](/docs/build-and-extend/api/client-api)
- [Preencher timesheets](/docs/product/time/timesheets/filling-time-sheets)
