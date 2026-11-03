---
id: receive-and-manage-notifications
title: Recibir y gestionar notificaciones
description: "Leer notificaciones en el panel Notificaciones y en la página Notifications, abrir el documento relacionado, marcar notificaciones como leídas o no leídas, leer los correos de notificación y elegir los canales Email, Push y Web para cada tipo de notificación."
sidebar_label: Recibir y gestionar notificaciones
sidebar_position: 1
---

Las notificaciones le llegan en la Web, por Email y por Push, en los canales que eligió para cada tipo de notificación. En la Web aparecen en el panel **Notificaciones** y en la página **Notifications**, donde cada una abre el documento al que se refiere.

## Requisitos previos

- El tenant usa el servicio de notificaciones. Consulte [Configurar las notificaciones](/docs/administration/notifications/set-up-notifications).
- El canal está seleccionado para ese tipo de notificación en sus preferencias. Consulte [Elegir las notificaciones que recibe](#elegir-las-notificaciones-que-recibe).

## Panel Notificaciones

Haga clic en el icono de la campana de la barra superior para abrir el panel **Notificaciones**.

<figure>

![img-box-shadow-sm](/img/notifications/notifications-panel.png)
<figcaption>El panel Notificaciones, con los filtros Todo y No leído</figcaption>
</figure>

Cada tarjeta muestra quién originó la notificación, cuándo, el documento al que se refiere y lo que sucedió: el comentario, el cambio de etapa o el resumen. Un punto azul marca una notificación no leída.

- **Todo** y **No leído** filtran la lista por estado de lectura.
- **Marcar todos como leídos** marca todas las notificaciones como leídas.
- **Ver todo** abre la [página Notifications](#página-notifications). Aparece cuando la página está instalada y la lista no está vacía.
- **Refrescar** recarga la lista.

## Abrir una notificación o marcarla como leída

- Haga clic en una tarjeta para marcarla como leída y abrir la vista previa del documento.
- Haga doble clic en una tarjeta para abrir el documento.
- Pase el ratón sobre una tarjeta para mostrar **Navegar para**, que abre el documento, y **Marcar como leído** o **Marcar no leído**. Estas acciones cambian el estado de lectura sin abrir nada.

<figure>

![img-box-shadow-sm](/img/notifications/notification-card-actions.png)
<figcaption>Navegar para y Marcar como leído en una tarjeta de notificación</figcaption>
</figure>

## Página Notifications

**Ver todo** en el panel abre la página **Notifications**. Lista todas sus notificaciones, con búsqueda, y abre el documento de la notificación seleccionada en una vista previa a la derecha.

<figure>

![img-box-shadow](/img/notifications/all-notifications.png)
<figcaption>La página Notifications, con el job de la notificación seleccionada en la vista previa</figcaption>
</figure>

## Correos de notificación

Los correos de notificación llegan desde notifications@skillsworkflow.com. Un correo sobre un documento muestra el documento, la persona que actuó y cuándo, lo que sucedió, el comentario y un botón **Open document** que abre el documento en Skills Workflow.

<figure>

![img-box-shadow](/img/notifications/email-mention.png)
<figcaption>Correo de una mención, con el comentario y el botón Open document</figcaption>
</figure>

## Notificaciones push

Las notificaciones push aparecen en el móvil a través de la aplicación móvil de Skills Workflow.

## Elegir las notificaciones que recibe

Sus preferencias están en su registro de usuario.

1. Vaya a **Mantenimiento → Users** y abra el usuario.
2. Abra la pestaña **NOTIFICACIÓN**. Si no está visible, abra la lista de pestañas con **▾**.
3. Cada fila es un tipo de notificación, identificado por su descripción. Seleccione **Email**, **Push** y **Web** en los canales que quiera y desmarque los demás.

<figure>

![img-box-shadow-popup](/img/notifications/user-notification-preferences.png)
<figcaption>La pestaña NOTIFICACIÓN de un usuario, con los canales seleccionados por tipo de notificación</figcaption>
</figure>

La pestaña **NOTIFICACIÓN** aparece cuando el tenant usa el servicio de notificaciones y usted tiene el role `NotificationPreferenceWrite`. Cambiar las preferencias de otro usuario requiere también el role `CanManageOthersPreferences`.

## Reglas y comportamiento

- Un tipo de notificación sin ningún canal seleccionado no se le entrega.
- Una notificación enviada solo por Email o Push no aparece en el panel Notificaciones. Seleccione **Web** para verla también allí.
- Las notificaciones por correo requieren una dirección de correo electrónico en su usuario.
- Nunca se le notifica sobre su propio comentario.
- Cuando alguien comenta un documento, se notifica a las personas del equipo del documento. Una respuesta a un comentario también notifica al equipo.
- Una mención notifica a la persona mencionada. Las menciones solo se entregan mientras **Recibir notificaciones de documentos** esté activado para ese usuario.

## Artículos relacionados

- [Notificaciones](/docs/product/notifications)
- [Notificaciones disponibles](/docs/product/notifications/available-notifications)
- [Uso del Feed](/docs/product/files-and-collaboration/using-feed)
- [Configurar las notificaciones](/docs/administration/notifications/set-up-notifications)
- [Roles y Perfiles](/docs/administration/system-roles-profiles)
