---
id: monitor-and-troubleshoot-notifications
title: Supervisar y resolver problemas de las notificaciones
description: "Averiguar por qué una notificación de Skills Workflow se entregó o no: el History del webhook, el historial de la automatización y sus logs, y las causas más comunes de una notificación que falta."
sidebar_label: Supervisar y resolver problemas
sidebar_position: 2
---

Cuando una notificación no llega, sígala por el camino por el que se envió: las preferencias del usuario, la automatización que la envió y, en las notificaciones enviadas por evento, el webhook que ejecutó la automatización.

## Comprobar si el webhook se ejecutó

1. Vaya a **Mantenimiento → Webhooks** y abra el webhook.
2. Abra la pestaña **History** y defina el intervalo de fechas.

Cada ejecución muestra **Date**, **Status**, un **Message**, el **Event** recibido, el **Request**, la **Response** y la **Duration**. Si no hay ninguna fila para el momento del evento, el webhook no se ejecutó: compruebe que está **Active** y que sus **Filters** corresponden al evento.

<figure>

![img-box-shadow-popup](/img/notifications/webhook-history.png)
<figcaption>La pestaña History de un webhook, con tres ejecuciones correctas</figcaption>
</figure>

## Comprobar lo que hizo la automatización

En **Mantenimiento → Automations**, la columna **Actions** de cada automatización tiene:

- **▷**, que ejecuta la automatización ahora;
- **↺**, que abre su historial.

El historial agrupa los logs por ejecución, con la hora de inicio y el número de entradas. Expanda una ejecución para ver cada paso, con **Status**, **Logged On**, **Progress** y **Content**, y el paso en el que se detuvo cuando falló.

<figure>

![img-box-shadow-popup](/img/notifications/automation-logs.png)
<figcaption>El historial de la automatización Notification-LeaveApproved, con los pasos de una ejecución</figcaption>
</figure>

Los pasos se registran según el nivel de **Logging** de la automatización. Defínalo como **Info** para ver todos los pasos. Con **Error**, una ejecución correcta no deja entradas.

## Problemas comunes

| Qué sucede | Qué comprobar |
|---|---|
| La notificación está en el panel pero no llega el correo | **Email** no está seleccionado para ese tipo de notificación, o el usuario no tiene dirección de correo electrónico. |
| El correo llega pero la notificación no está en el panel | **Web** no está seleccionado para ese tipo de notificación. |
| No se recibe una mención | **Recibir notificaciones de documentos** está desactivado para la persona mencionada, o **Mentions** no tiene ningún canal seleccionado. |
| Una persona no recibe notificación sobre su propio comentario | Es lo esperado: los autores nunca reciben notificación sobre sus propios comentarios. |
| No sucede nada con un evento | El webhook está inactivo, sus **Filters** excluyen el evento, o la automatización falló. Revise el **History** del webhook y después el historial de la automatización. |
| Una notificación programada nunca llega | La automatización no tiene una programación activa en la columna **Scheduler**, o no está **Active**. |
| Ningún usuario recibe notificaciones | **Use Notifications Service** está desactivado en **Mantenimiento → Configuration → Notification**, o ningún usuario tiene preferencias seleccionadas. |

## Artículos relacionados

- [Configurar las notificaciones](/docs/administration/notifications/set-up-notifications)
- [Notificaciones disponibles](/docs/product/notifications/available-notifications)
- [Recibir y gestionar notificaciones](/docs/product/notifications/receive-and-manage-notifications)
- [Webhooks](/docs/build-and-extend/api/webhooks)
- [Automatizaciones](/docs/build-and-extend/automations)
