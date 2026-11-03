---
id: available-notifications
title: Notificações disponíveis
description: "Os tipos de notificação disponíveis no Marketplace do Skills Workflow para o serviço de notificações: o que cada um notifica, se é enviado por um evento ou por um agendamento, e quem o recebe."
sidebar_label: Notificações disponíveis
sidebar_position: 2
---

Os tipos de notificação abaixo estão disponíveis no Marketplace para os tenants que usam o serviço de notificações. Cada tipo é enviado por um evento, no momento em que algo acontece num documento, ou por um agendamento, como uma verificação que corre regularmente. Os nomes são os mostrados em **Manutenção → Notification Types**; as descrições são as que as pessoas veem nas suas preferências.

## Tipos de notificação

| Tipo de notificação | Descrição nas preferências | Enviado por | Quem recebe |
|---|---|---|---|
| Mentions | Receber comentários em que é mencionado | Evento: é publicado um comentário num documento | A pessoa mencionada |
| Comments and Mentions | Receber todos os comentários, menções e ações do feed | Evento: é publicado um comentário ou outra ação no feed do documento | As pessoas da equipa do documento |
| Replies | Receber respostas a comentários | Evento: é publicada uma resposta a um comentário | As pessoas da equipa do documento |
| Leaves Approved | Receber um aviso quando o seu pedido de ausência for aprovado | Evento: um pedido de ausência é aprovado | A pessoa que pediu a ausência |
| Leaves Rejected | Receber um aviso quando o seu pedido de ausência for rejeitado | Evento: um pedido de ausência é rejeitado | A pessoa que pediu a ausência |
| Leaves To Approve | Receber um resumo dos pedidos de ausência a aguardar a sua aprovação | Agendamento | As pessoas que aprovam ausências |
| Contract Usage Alert | Contracts that crossed a usage threshold | Agendamento | Os destinatários definidos na sua automação |
| Team Birthdays | Receber um lembrete dos aniversários da sua equipa no dia anterior | Agendamento | As pessoas com um aniversário na equipa no dia seguinte |
| Users Will Be Blocked | Receber um resumo dos membros da equipa prestes a ser bloqueados | Agendamento | Os responsáveis por esses membros da equipa |
| You Will Be Blocked | Receber um aviso antes de a sua conta ser bloqueada | Agendamento | A pessoa prestes a ser bloqueada |
| Inative Responsables | Inactive users who are still responsible for other users | Agendamento | Os destinatários definidos na sua automação |
| Supplier Created | Receber um aviso quando for criado um fornecedor com número de contribuinte duplicado | Evento: é criado um fornecedor com um número de contribuinte que já existe | Utilizadores com a role `SupplierRead` |

<figure>

![img-box-shadow](/img/notifications/notification-types-maintenance.png)
<figcaption>Manutenção → Notification Types, com o nome e a descrição de cada tipo por língua</figcaption>
</figure>

## Regras e comportamento

- Ninguém recebe um tipo enquanto as suas preferências não selecionarem pelo menos um canal para ele. Ver [Escolher as notificações que recebe](/docs/product/notifications/receive-and-manage-notifications#escolher-as-notificações-que-recebe).
- O autor de um comentário nunca é notificado sobre ele.
- As **Mentions** só são entregues enquanto **Receber notificações dos documentos** estiver ligado para a pessoa mencionada.
- Um tipo instalado do Marketplace não faz nada sozinho. A sua automação, e nos tipos enviados por evento o seu webhook, têm de estar instalados e ativos. Ver [Configurar as notificações](/docs/administration/notifications/set-up-notifications).

## Configuração

Os tipos de notificação são geridos em **Manutenção → Notification Types**. Cada tipo tem um nome e uma descrição por língua; a descrição é o texto mostrado nas preferências de cada utilizador. Os tipos são instalados do Marketplace juntamente com as automações que os enviam.

## Artigos relacionados

- [Notificações](/docs/product/notifications)
- [Receber e gerir notificações](/docs/product/notifications/receive-and-manage-notifications)
- [Configurar as notificações](/docs/administration/notifications/set-up-notifications)
- [Instalar componentes do Marketplace](/docs/administration/system/install-from-marketplace)
