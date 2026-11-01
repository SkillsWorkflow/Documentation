---
title: Notificações
description: "Como o Skills Workflow notifica as pessoas na Web, por Email e por Push, como cada pessoa escolhe os canais por tipo de notificação e onde ler sobre receber e configurar notificações."
sidebar_label: Overview
sidebar_position: 0
---

# Notificações

O Skills Workflow notifica as pessoas quando algo lhes diz respeito: um comentário em um job em que trabalham, uma menção, a resposta a um pedido de ausência, um aniversário na equipe amanhã. Cada notificação tem um tipo de notificação, e cada pessoa escolhe, por tipo, os canais em que a recebe.

## Disponibilidade

As notificações descritas nesta área aplicam-se aos tenants com **Use Notifications Service** ativado em **Manutenção → Configuration → Notification**. Os tenants sem esta opção usam as [notificações antigas](/docs/product/notifications/notification-types). Como ativá-la, e instalar o que ela precisa, está em [Configurar as notificações](/docs/administration/notifications/set-up-notifications).

## Canais

| Canal | Onde chega a notificação |
|---|---|
| Web | O painel **Notificações**, aberto pelo ícone do sino na barra de topo, e a página **Notifications**. |
| Email | O endereço de email do usuário, enviado de notifications@skillsworkflow.com. |
| Push | O aplicativo móvel do Skills Workflow. |

Uma pessoa só recebe um tipo de notificação nos canais selecionados para ele nas suas preferências. Um canal sem seleção fica desativado.

## Como é enviada uma notificação

1. Algo acontece. É um evento em um documento, como um novo comentário ou uma ausência aprovada, ou um agendamento, como a verificação diária dos aniversários de amanhã.
2. O evento ou o agendamento executa uma automação. Os eventos chegam à automação através de um webhook.
3. A automação determina quem notificar e envia a notificação com seu tipo de notificação.
4. As preferências de cada destinatário para esse tipo decidem os canais.
5. Os emails são construídos com o template de email das notificações.

## Próximos passos

- Quem recebe notificações: [Receber e gerenciar notificações](/docs/product/notifications/receive-and-manage-notifications).
- Os tipos de notificação e o que dispara cada um: [Notificações disponíveis](/docs/product/notifications/available-notifications).
- Suporte e IT da agência ativando o sistema: [Configurar as notificações](/docs/administration/notifications/set-up-notifications) e depois [Monitorar e resolver problemas das notificações](/docs/administration/notifications/monitor-and-troubleshoot-notifications).

## Artigos relacionados

- [Receber e gerenciar notificações](/docs/product/notifications/receive-and-manage-notifications)
- [Notificações disponíveis](/docs/product/notifications/available-notifications)
- [Configurar as notificações](/docs/administration/notifications/set-up-notifications)
- [Monitorar e resolver problemas das notificações](/docs/administration/notifications/monitor-and-troubleshoot-notifications)
- [Notificações antigas](/docs/product/notifications/notification-types)
