---
id: set-up-notifications
title: Configurar las notificaciones
description: "Activar el servicio de notificaciones de Skills Workflow en un tenant: activar Use Notifications Service, instalar desde el Marketplace los componentes y workspaces de las notificaciones, comprobar los webhooks y las programaciones de las automatizaciones, y definir las preferencias de los usuarios."
sidebar_label: Configurar las notificaciones
sidebar_position: 1
---

Configurar las notificaciones en un tenant consiste en activar el servicio de notificaciones, instalar los tipos de notificación y las automatizaciones que los envían, y seleccionar los canales que recibe cada usuario. Los pasos siguientes son para Soporte y el IT de la agencia. Cómo reciben las personas las notificaciones está en [Recibir y gestionar notificaciones](/docs/product/notifications/receive-and-manage-notifications).

## Requisitos previos

- Acceso a **Mantenimiento**, incluidos **Configuration**, **Marketplace**, **Webhooks**, **Automations** y **Users**.
- Los usuarios que deben recibir notificaciones por correo tienen una dirección de correo electrónico en su usuario.

## Activar el servicio de notificaciones

1. Vaya a **Mantenimiento → Configuration**.
2. Abra la pestaña **Notification**.
3. Active **Use Notifications Service** y guarde.

<figure>

![img-box-shadow](/img/notifications/configuration-use-notifications-service.png)
<figcaption>Use Notifications Service en la pestaña Notification de Mantenimiento → Configuration</figcaption>
</figure>

Mientras la opción esté desactivada, el tenant usa las [notificaciones antiguas](/docs/product/notifications/notification-types).

## Instalar los componentes de las notificaciones

En **Mantenimiento → Marketplace**, instale:

- todos los componentes de la categoría **Notifications**: tipos de notificación, plantillas de email, queries, automatizaciones y webhooks;
- el workspace **Notification**, que añade la pestaña **NOTIFICACIÓN** a los usuarios;
- el workspace **Notifications**, la página que lista todas las notificaciones;
- el workspace **Notification Types**.

El Marketplace agrupa los componentes por categoría y después por módulo. Instale cada uno con **⊕**. El procedimiento completo, incluidos los componentes no aprobados, está en [Instalar componentes desde el Marketplace](/docs/administration/system/install-from-marketplace).

<figure>

![img-box-shadow](/img/notifications/marketplace-notification-components.png)
<figcaption>Componentes de la categoría Notifications, módulo Leaves, en Mantenimiento → Marketplace</figcaption>
</figure>

Tras la instalación, los tipos de notificación aparecen en **Mantenimiento → Notification Types**. Cada uno tiene un nombre y una descripción por idioma, que puede editar. La descripción es lo que los usuarios ven en sus preferencias.

## Comprobar los webhooks

Las notificaciones enviadas por un evento empiezan en un webhook. En **Mantenimiento → Webhooks**, abra cada webhook de las notificaciones y compruebe que:

- **Active** está activado.
- **Event** y **Document** corresponden al evento que debe enviar la notificación, por ejemplo **Updated** en **Leave**.
- **Automation** está activado y **Automation Workflow** indica la automatización de la notificación.

<figure>

![img-box-shadow-popup](/img/notifications/webhook-form.png)
<figcaption>Un webhook de notificación: Updated en Leave ejecuta la automatización Notification-LeaveRejected</figcaption>
</figure>

Algunos webhooks tienen también **Filters**, que restringen los eventos que ejecutan la automatización. Un filtro combina **Business Object Type Name** con condiciones sobre una **Detail Path Expression**, una **Condition** y un **Value**, unidas con **And** u **Or**. **Add filter** añade una condición.

<figure>

![img-box-shadow-popup](/img/notifications/webhook-filters.png)
<figcaption>La sección Filters de un webhook</figcaption>
</figure>

Cada campo del formulario del webhook se describe en [Webhooks](/docs/build-and-extend/api/webhooks).

## Comprobar las programaciones de las automatizaciones

Las notificaciones enviadas por programación, como **Team Birthdays** o **Leaves To Approve**, solo se ejecutan cuando su automatización tiene una programación activa. En **Mantenimiento → Automations**, la columna **Scheduler** muestra la programación de cada automatización y **Active** indica si la automatización se ejecuta. Las programaciones se explican en [How automations start](/docs/build-and-extend/automations/triggers).

<figure>

![img-box-shadow](/img/notifications/automations-list.png)
<figcaption>Automatizaciones de las notificaciones en Mantenimiento → Automations</figcaption>
</figure>

## Definir las preferencias de los usuarios

Un usuario solo recibe un tipo de notificación en los canales seleccionados para él. Mientras no haya ningún canal seleccionado, el usuario no recibe nada de ese tipo.

1. Vaya a **Mantenimiento → Users** y abra el usuario.
2. Abra la pestaña **NOTIFICACIÓN**, a través de **▾** si no está visible.
3. Seleccione **Email**, **Push** y **Web** para cada tipo de notificación.

<figure>

![img-box-shadow-popup](/img/notifications/user-notification-preferences.png)
<figcaption>Canales por tipo de notificación en la pestaña NOTIFICACIÓN de un usuario</figcaption>
</figure>

Definir las preferencias de otros usuarios requiere el role `CanManageOthersPreferences`, y la propia pestaña requiere `NotificationPreferenceWrite`. Para las **Mentions**, active también **Recibir notificaciones de documentos** en el usuario.

## Artículos relacionados

- [Notificaciones](/docs/product/notifications)
- [Notificaciones disponibles](/docs/product/notifications/available-notifications)
- [Supervisar y resolver problemas de las notificaciones](/docs/administration/notifications/monitor-and-troubleshoot-notifications)
- [Instalar componentes desde el Marketplace](/docs/administration/system/install-from-marketplace)
- [Webhooks](/docs/build-and-extend/api/webhooks)
- [Automatizaciones](/docs/build-and-extend/automations)
