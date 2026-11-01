---
title: Notificaciones
description: "Cómo Skills Workflow notifica a las personas en la Web, por Email y por Push, cómo cada persona elige los canales por tipo de notificación y dónde leer sobre recibir y configurar notificaciones."
sidebar_label: Overview
sidebar_position: 0
---

# Notificaciones

Skills Workflow notifica a las personas cuando algo les concierne: un comentario en un job en el que trabajan, una mención, la respuesta a su solicitud de permiso, un cumpleaños en el equipo mañana. Cada notificación tiene un tipo de notificación, y cada persona elige, por tipo, los canales en los que la recibe.

## Disponibilidad

Las notificaciones descritas en esta área se aplican a los tenants con **Use Notifications Service** activado en **Mantenimiento → Configuration → Notification**. Los tenants sin esta opción usan las [notificaciones antiguas](/docs/product/notifications/notification-types). Cómo activarla, e instalar lo que necesita, está en [Configurar las notificaciones](/docs/administration/notifications/set-up-notifications).

## Canales

| Canal | Dónde llega la notificación |
|---|---|
| Web | El panel **Notificaciones**, que se abre con el icono de la campana en la barra superior, y la página **Notifications**. |
| Email | La dirección de correo electrónico del usuario, enviada desde notifications@skillsworkflow.com. |
| Push | La aplicación móvil de Skills Workflow. |

Una persona solo recibe un tipo de notificación en los canales seleccionados para ese tipo en sus preferencias. Un canal sin selección queda desactivado.

## Cómo se envía una notificación

1. Algo sucede. Es un evento en un documento, como un nuevo comentario o un permiso aprobado, o una programación, como la comprobación diaria de los cumpleaños de mañana.
2. El evento o la programación ejecuta una automatización. Los eventos llegan a la automatización a través de un webhook.
3. La automatización determina a quién notificar y envía la notificación con su tipo de notificación.
4. Las preferencias de cada destinatario para ese tipo deciden los canales.
5. Los correos electrónicos se construyen con la plantilla de email de las notificaciones.

## Próximos pasos

- Quien recibe notificaciones: [Recibir y gestionar notificaciones](/docs/product/notifications/receive-and-manage-notifications).
- Los tipos de notificación y lo que dispara cada uno: [Notificaciones disponibles](/docs/product/notifications/available-notifications).
- Soporte e IT de la agencia activando el sistema: [Configurar las notificaciones](/docs/administration/notifications/set-up-notifications) y después [Supervisar y resolver problemas de las notificaciones](/docs/administration/notifications/monitor-and-troubleshoot-notifications).

## Artículos relacionados

- [Recibir y gestionar notificaciones](/docs/product/notifications/receive-and-manage-notifications)
- [Notificaciones disponibles](/docs/product/notifications/available-notifications)
- [Configurar las notificaciones](/docs/administration/notifications/set-up-notifications)
- [Supervisar y resolver problemas de las notificaciones](/docs/administration/notifications/monitor-and-troubleshoot-notifications)
- [Notificaciones antiguas](/docs/product/notifications/notification-types)
