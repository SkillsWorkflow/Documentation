---
id: available-notifications
title: Notificaciones disponibles
description: "Los tipos de notificación disponibles en el Marketplace de Skills Workflow para el servicio de notificaciones: qué notifica cada uno, si lo envía un evento o una programación, y quién lo recibe."
sidebar_label: Notificaciones disponibles
sidebar_position: 2
---

Los tipos de notificación siguientes están disponibles en el Marketplace para los tenants que usan el servicio de notificaciones. Cada tipo lo envía un evento, en el momento en que algo sucede en un documento, o una programación, como una comprobación que se ejecuta regularmente. Los nombres son los que se muestran en **Mantenimiento → Notification Types**; las descripciones son las que las personas ven en sus preferencias.

## Tipos de notificación

| Tipo de notificación | Descripción en las preferencias | Enviado por | Quién lo recibe |
|---|---|---|---|
| Mentions | Recibir comentarios en los que se le menciona | Evento: se publica un comentario en un documento | La persona mencionada |
| Comments and Mentions | Recibir todos los comentarios, menciones y acciones del feed | Evento: se publica un comentario u otra acción en el feed del documento | Las personas del equipo del documento |
| Replies | Recibir respuestas a comentarios | Evento: se publica una respuesta a un comentario | Las personas del equipo del documento |
| Leaves Approved | Recibir un aviso cuando se apruebe su solicitud de permiso | Evento: se aprueba una solicitud de permiso | La persona que solicitó el permiso |
| Leaves Rejected | Recibir un aviso cuando se rechace su solicitud de permiso | Evento: se rechaza una solicitud de permiso | La persona que solicitó el permiso |
| Leaves To Approve | Recibir un resumen de las solicitudes de permiso pendientes de su aprobación | Programación | Las personas que aprueban permisos |
| Contract Usage Alert | Contracts that crossed a usage threshold | Programación | Los destinatarios definidos en su automatización |
| Team Birthdays | Recibir un recordatorio de los cumpleaños de su equipo el día anterior | Programación | Las personas con un cumpleaños en su equipo al día siguiente |
| Users Will Be Blocked | Recibir un resumen de los miembros del equipo a punto de ser bloqueados | Programación | Los responsables de esos miembros del equipo |
| You Will Be Blocked | Recibir un aviso antes de que su cuenta sea bloqueada | Programación | La persona a punto de ser bloqueada |
| Inative Responsables | Inactive users who are still responsible for other users | Programación | Los destinatarios definidos en su automatización |
| Supplier Created | Recibir un aviso cuando se cree un proveedor con número de contribuyente duplicado | Evento: se crea un proveedor con un número de contribuyente que ya existe | Usuarios con el role `SupplierRead` |

<figure>

![img-box-shadow](/img/notifications/notification-types-maintenance.png)
<figcaption>Mantenimiento → Notification Types, con el nombre y la descripción de cada tipo por idioma</figcaption>
</figure>

## Reglas y comportamiento

- Nadie recibe un tipo mientras sus preferencias no seleccionen al menos un canal para él. Consulte [Elegir las notificaciones que recibe](/docs/product/notifications/receive-and-manage-notifications#elegir-las-notificaciones-que-recibe).
- El autor de un comentario nunca recibe notificación sobre él.
- Las **Mentions** solo se entregan mientras **Recibir notificaciones de documentos** esté activado para la persona mencionada.
- Un tipo instalado desde el Marketplace no hace nada por sí solo. Su automatización, y en los tipos enviados por evento su webhook, deben estar instalados y activos. Consulte [Configurar las notificaciones](/docs/administration/notifications/set-up-notifications).

## Configuración

Los tipos de notificación se gestionan en **Mantenimiento → Notification Types**. Cada tipo tiene un nombre y una descripción por idioma; la descripción es el texto que se muestra en las preferencias de cada usuario. Los tipos se instalan desde el Marketplace junto con las automatizaciones que los envían.

## Artículos relacionados

- [Notificaciones](/docs/product/notifications)
- [Recibir y gestionar notificaciones](/docs/product/notifications/receive-and-manage-notifications)
- [Configurar las notificaciones](/docs/administration/notifications/set-up-notifications)
- [Instalar componentes desde el Marketplace](/docs/administration/system/install-from-marketplace)
