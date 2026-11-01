---
id: available-notifications
title: Notificações disponíveis
description: "Os tipos de notificação disponíveis no Marketplace do Skills Workflow para o serviço de notificações: o que cada um notifica, se é enviado por um evento ou por um agendamento, e quem o recebe."
sidebar_label: Notificações disponíveis
sidebar_position: 2
---

Os tipos de notificação abaixo estão disponíveis no Marketplace para os tenants que usam o serviço de notificações. Cada tipo é enviado por um evento, no momento em que algo acontece em um documento, ou por um agendamento, como uma verificação que é executada regularmente. Os nomes são os mostrados em **Manutenção → Notification Types**; as descrições são as que as pessoas veem nas suas preferências.

## Tipos de notificação

| Tipo de notificação | Descrição nas preferências | Enviado por | Quem recebe |
|---|---|---|---|
| Mentions | Receber comentários em que você é mencionado | Evento: é publicado um comentário em um documento | A pessoa mencionada |
| Comments and Mentions | Receber todos os comentários, menções e ações do feed | Evento: é publicado um comentário ou outra ação no feed do documento | As pessoas da equipe do documento |
| Replies | Receber respostas a comentários | Evento: é publicada uma resposta a um comentário | As pessoas da equipe do documento |
| Leaves Approved | Receber um aviso quando seu pedido de ausência for aprovado | Evento: um pedido de ausência é aprovado | A pessoa que pediu a ausência |
| Leaves Rejected | Receber um aviso quando seu pedido de ausência for rejeitado | Evento: um pedido de ausência é rejeitado | A pessoa que pediu a ausência |
| Leaves To Approve | Receber um resumo dos pedidos de ausência aguardando sua aprovação | Agendamento | As pessoas que aprovam ausências |
| Contract Usage Alert | Contracts that crossed a usage threshold | Agendamento | Os destinatários definidos na sua automação |
| Team Birthdays | Receber um lembrete dos aniversários da sua equipe no dia anterior | Agendamento | As pessoas com um aniversário na equipe no dia seguinte |
| Users Will Be Blocked | Receber um resumo dos membros da equipe prestes a serem bloqueados | Agendamento | Os responsáveis por esses membros da equipe |
| You Will Be Blocked | Receber um aviso antes de sua conta ser bloqueada | Agendamento | A pessoa prestes a ser bloqueada |
| Inative Responsables | Inactive users who are still responsible for other users | Agendamento | Os destinatários definidos na sua automação |
| Supplier Created | Receber um aviso quando um fornecedor for criado com CNPJ duplicado | Evento: é criado um fornecedor com um CNPJ que já existe | Usuários com a role `SupplierRead` |

<figure>

![img-box-shadow](/img/notifications/notification-types-maintenance.png)
<figcaption>Manutenção → Notification Types, com o nome e a descrição de cada tipo por língua</figcaption>
</figure>

## Regras e comportamento

- Ninguém recebe um tipo enquanto suas preferências não selecionarem pelo menos um canal para ele. Veja [Escolher as notificações que recebe](/docs/product/notifications/receive-and-manage-notifications#escolher-as-notificações-que-recebe).
- O autor de um comentário nunca é notificado sobre ele.
- As **Mentions** só são entregues enquanto **Receber notificações dos documentos** estiver ativado para a pessoa mencionada.
- Um tipo instalado do Marketplace não faz nada sozinho. Sua automação, e nos tipos enviados por evento seu webhook, têm de estar instalados e ativos. Veja [Configurar as notificações](/docs/administration/notifications/set-up-notifications).

## Configuração

Os tipos de notificação são geridos em **Manutenção → Notification Types**. Cada tipo tem um nome e uma descrição por língua; a descrição é o texto mostrado nas preferências de cada usuário. Os tipos são instalados do Marketplace juntamente com as automações que os enviam.

## Artigos relacionados

- [Notificações](/docs/product/notifications)
- [Receber e gerenciar notificações](/docs/product/notifications/receive-and-manage-notifications)
- [Configurar as notificações](/docs/administration/notifications/set-up-notifications)
- [Instalar componentes do Marketplace](/docs/administration/system/install-from-marketplace)
