---
id: monitor-and-troubleshoot-notifications
title: Monitorar e resolver problemas das notificações
description: "Entender por que uma notificação do Skills Workflow foi ou não entregue: o History do webhook, o histórico da automação e seus logs, e as causas mais comuns de uma notificação em falta."
sidebar_label: Monitorar e resolver problemas
sidebar_position: 2
---

Quando uma notificação não chega, siga-a pelo caminho por onde foi enviada: as preferências do usuário, a automação que a enviou e, nas notificações enviadas por evento, o webhook que executou a automação.

## Verificar se o webhook foi executado

1. Acesse **Manutenção → Webhooks** e abra o webhook.
2. Abra a aba **History** e defina o intervalo de datas.

Cada execução mostra **Date**, **Status**, uma **Message**, o **Event** recebido, o **Request**, a **Response** e a **Duration**. Se não houver linha para o momento do evento, o webhook não foi executado: verifique que está **Active** e que seus **Filters** correspondem ao evento.

<figure>

![img-box-shadow-popup](/img/notifications/webhook-history.png)
<figcaption>A aba History de um webhook, com três execuções com sucesso</figcaption>
</figure>

## Verificar o que a automação fez

Em **Manutenção → Automations**, a coluna **Actions** de cada automação tem:

- **▷**, que executa a automação agora;
- **↺**, que abre seu histórico.

O histórico agrupa os logs por execução, com a hora de início e o número de entradas. Expanda uma execução para ver cada passo, com **Status**, **Logged On**, **Progress** e **Content**, e o passo onde parou quando falhou.

<figure>

![img-box-shadow-popup](/img/notifications/automation-logs.png)
<figcaption>O histórico da automação Notification-LeaveApproved, com os passos de uma execução</figcaption>
</figure>

Os passos são registados de acordo com o nível de **Logging** da automação. Defina como **Info** para ver todos os passos. Com **Error**, uma execução com sucesso não deixa entradas.

## Problemas comuns

| O que acontece | O que verificar |
|---|---|
| A notificação está no painel mas não chega email | **Email** não está selecionado para esse tipo de notificação, ou o usuário não tem endereço de email. |
| O email chega mas a notificação não está no painel | **Web** não está selecionado para esse tipo de notificação. |
| Uma menção não é recebida | **Receber notificações dos documentos** está desativado para a pessoa mencionada, ou **Mentions** não tem nenhum canal selecionado. |
| Uma pessoa não é notificada sobre seu próprio comentário | Esperado: os autores nunca são notificados sobre seus próprios comentários. |
| Nada acontece em um evento | O webhook está inativo, seus **Filters** excluem o evento, ou a automação falhou. Veja o **History** do webhook e depois o histórico da automação. |
| Uma notificação agendada nunca chega | A automação não tem um agendamento ativo na coluna **Scheduler**, ou não está **Active**. |
| Nenhum usuário recebe notificações | **Use Notifications Service** está desativado em **Manutenção → Configuration → Notification**, ou nenhum usuário tem preferências selecionadas. |

## Artigos relacionados

- [Configurar as notificações](/docs/administration/notifications/set-up-notifications)
- [Notificações disponíveis](/docs/product/notifications/available-notifications)
- [Receber e gerenciar notificações](/docs/product/notifications/receive-and-manage-notifications)
- [Webhooks](/docs/build-and-extend/api/webhooks)
- [Automações](/docs/build-and-extend/automations)
