---
id: timesheet-access-blocking
title: API de bloqueio de acesso por timesheets
description: Use a API do Skills Workflow para identificar usuários a bloquear ou desbloquear com base no estado das timesheets e informar o resultado.
sidebar_label: Bloqueio por timesheets
sidebar_position: 4
---

O Skills Workflow disponibiliza listas de usuários a bloquear e desbloquear com base no estado das timesheets. Um sistema externo pode consultar essas listas, alterar o acesso no seu sistema de identidade e informar o resultado ao Skills Workflow. Esses endpoints não desativam nem restauram, por si só, o acesso nesse sistema externo.

## Autenticação e URL base

Use as credenciais da Client API fornecidas pelo Suporte do Skills Workflow. Envie `X-AppId` e `X-AppSecret` em cada requisição. Consulte a [autenticação da Client API](/docs/build-and-extend/api/client-api#authentication) para obter as credenciais. Use a URL base da API v2 atribuída ao seu ambiente, representada abaixo por `{ApiUrl}`.

## Processo de bloqueio

1. Chame `GET {ApiUrl}/api/blockedloginrequests/userstoblock` para obter os usuários selecionados para bloqueio.
2. Bloqueie cada conta no seu sistema de identidade externo, identificando-a por `AdUserName`.
3. Chame `POST {ApiUrl}/api/blockedloginrequests/block` com o resultado de cada usuário.

| Método e caminho | Finalidade | Resposta |
| --- | --- | --- |
| `GET /api/blockedloginrequests/userstoblock` | Listar usuários a bloquear. | `200 OK`: lista de objetos de usuário. |
| `POST /api/blockedloginrequests/block` | Informar o resultado de uma tentativa de bloqueio. | `200 OK`: objeto de usuário. `404 Not Found` se `Oid` não identificar um usuário. |

O GET aceita os parâmetros de consulta opcionais `companyId`, `companyName`, `countryId` e `countryName`. Os parâmetros de ID são GUIDs. Cada usuário retornado tem `Oid` (ID do usuário no Skills Workflow), `UserName` e `AdUserName`. O tipo de resposta também define `Name`, mas o mapeamento atual não o preenche.

Envie um corpo JSON para o endpoint POST:

| Campo | Tipo | Significado |
| --- | --- | --- |
| `Oid` | GUID, obrigatório | O `Oid` retornado pelo GET. |
| `Success` | booleano | Indica se o bloqueio externo teve êxito. |
| `AccountExpirationDate` | data/hora ou null | Data de expiração da conta a registrar no Skills Workflow quando `Success` é `true`. |
| `Message` | string | Mensagem de resultado usada quando o bloqueio falha. |

Em caso de êxito, o Skills Workflow registra a data de expiração da conta e limpa o registro de novas tentativas de bloqueio do usuário. Em caso de falha, salva ou atualiza esse registro. As falhas adiam uma nova tentativa; após a terceira falha, o usuário é excluído da lista de bloqueio. A lista também exclui usuários já marcados como bloqueados. O estado de aprovação de timesheets pode afetar a lista quando o bloqueio por aprovação está ativado.

## Processo de desbloqueio

1. Chame `GET {ApiUrl}/api/unblockuserrequests` para obter as solicitações de desbloqueio.
2. Restaure o acesso de cada conta no seu sistema de identidade externo, identificando-a por `AdUserName`.
3. Chame `PUT {ApiUrl}/api/unblockuserrequests` com o resultado de cada solicitação.

| Método e caminho | Finalidade | Resposta |
| --- | --- | --- |
| `GET /api/unblockuserrequests` | Listar solicitações de desbloqueio recentes. | `200 OK`: lista de objetos de solicitação de desbloqueio. |
| `PUT /api/unblockuserrequests` | Informar o resultado de uma tentativa de desbloqueio. | `200 OK`: ID da solicitação. `400 Bad Request` para um ID inválido; `404 Not Found` se a solicitação não existir. |

O GET aceita os mesmos filtros opcionais de empresa e país da lista de bloqueio. Retorna solicitações dos 60 minutos anteriores. Cada solicitação tem `Id`, `AdUserName` e `AccountExpirationDate` (que pode ser null).

Envie um corpo JSON para o endpoint PUT:

| Campo | Tipo | Significado |
| --- | --- | --- |
| `Id` | string com um GUID, obrigatório | O `Id` retornado pelo GET. |
| `RequestResult` | booleano, obrigatório | Indica se o desbloqueio externo teve êxito. |
| `RequestResultMessage` | string | Mensagem de resultado a registrar na solicitação. |

Quando `RequestResult` é `true`, o Skills Workflow exclui a solicitação de desbloqueio e atualiza o estado de desbloqueio do usuário. Quando é `false`, mantém a solicitação com o resultado informado. O cliente é responsável por restaurar o acesso no sistema de identidade externo.

## Artigos relacionados

- [Client API](/docs/build-and-extend/api/client-api)
- [Preencher timesheets](/docs/product/time/timesheets/filling-time-sheets)
