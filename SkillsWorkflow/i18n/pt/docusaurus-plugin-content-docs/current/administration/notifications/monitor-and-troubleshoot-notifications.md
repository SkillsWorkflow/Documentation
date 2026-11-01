---
id: monitor-and-troubleshoot-notifications
title: Monitorizar e resolver problemas das notificações
description: "Perceber porque é que uma notificação do Skills Workflow foi ou não entregue: o History do webhook, o histórico da automação e os seus logs, e as causas mais comuns de uma notificação em falta."
sidebar_label: Monitorizar e resolver problemas
sidebar_position: 2
---

Quando uma notificação não chega, siga-a pelo caminho por onde foi enviada: as preferências do utilizador, a automação que a enviou e, nas notificações enviadas por evento, o webhook que correu a automação.

## Verificar se o webhook correu

1. Vá a **Manutenção → Webhooks** e abra o webhook.
2. Abra o separador **History** e defina o intervalo de datas.

Cada execução mostra **Date**, **Status**, uma **Message**, o **Event** recebido, o **Request**, a **Response** e a **Duration**. Se não houver linha para o momento do evento, o webhook não correu: verifique que está **Active** e que os seus **Filters** correspondem ao evento.

<figure>

![img-box-shadow-popup](/img/notifications/webhook-history.png)
<figcaption>O separador History de um webhook, com três execuções com sucesso</figcaption>
</figure>

## Verificar o que a automação fez

Em **Manutenção → Automations**, a coluna **Actions** de cada automação tem:

- **▷**, que corre a automação agora;
- **↺**, que abre o seu histórico.

O histórico agrupa os logs por execução, com a hora de início e o número de entradas. Expanda uma execução para ver cada passo, com **Status**, **Logged On**, **Progress** e **Content**, e o passo onde parou quando falhou.

<figure>

![img-box-shadow-popup](/img/notifications/automation-logs.png)
<figcaption>O histórico da automação Notification-LeaveApproved, com os passos de uma execução</figcaption>
</figure>

Os passos são registados de acordo com o nível de **Logging** da automação. Defina-o como **Info** para ver todos os passos. Com **Error**, uma execução com sucesso não deixa entradas.

## Problemas comuns

| O que acontece | O que verificar |
|---|---|
| A notificação está no painel mas não chega email | **Email** não está selecionado para esse tipo de notificação, ou o utilizador não tem endereço de email. |
| O email chega mas a notificação não está no painel | **Web** não está selecionado para esse tipo de notificação. |
| Uma menção não é recebida | **Receber notificações dos documentos** está desligado para a pessoa mencionada, ou **Mentions** não tem nenhum canal selecionado. |
| Uma pessoa não é notificada sobre o seu próprio comentário | Esperado: os autores nunca são notificados sobre os seus próprios comentários. |
| Nada acontece num evento | O webhook está inativo, os seus **Filters** excluem o evento, ou a automação falhou. Veja o **History** do webhook e depois o histórico da automação. |
| Uma notificação agendada nunca chega | A automação não tem um agendamento ativo na coluna **Scheduler**, ou não está **Active**. |
| Nenhum utilizador recebe notificações | **Use Notifications Service** está desligado em **Manutenção → Configuration → Notification**, ou nenhum utilizador tem preferências selecionadas. |

## Artigos relacionados

- [Configurar as notificações](/docs/administration/notifications/set-up-notifications)
- [Notificações disponíveis](/docs/product/notifications/available-notifications)
- [Receber e gerir notificações](/docs/product/notifications/receive-and-manage-notifications)
- [Webhooks](/docs/build-and-extend/api/webhooks)
- [Automações](/docs/build-and-extend/automations)
