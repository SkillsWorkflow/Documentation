---
id: install-from-marketplace
title: Instalar componentes desde el Marketplace
description: "Encontrar e instalar componentes de Skills Workflow, como workspaces, automatizaciones, webhooks, queries y tipos de notificación, en Mantenimiento → Marketplace, incluidos los componentes cuya versión no está aprobada."
sidebar_label: Instalar desde el Marketplace
---

El Marketplace reúne los componentes listos que un tenant puede instalar: workspaces, automatizaciones, webhooks, queries, plantillas, tipos de notificación y otros. Está en **Mantenimiento → Marketplace**. Los ejemplos de esta página usan los componentes del servicio de notificaciones.

## Vista general del Marketplace

Las tarjetas de la parte superior resumen el catálogo para este tenant:

| Tarjeta | Muestra |
|---|---|
| **Total** | Components in the Marketplace |
| **Installed** | Installed in this environment |
| **Defaults** | Marked as default |
| **Not updated** | Newer version available |

Debajo de las tarjetas, la lista agrupa los componentes por **Category** y después por **Module**. Cada fila muestra el **Name** del componente, los **Changes** de su versión, el **Ticket**, **Days Ago**, el **Stage**, la **Version** y las **Actions**. Use el cuadro de búsqueda para encontrar un componente por su nombre.

<figure>

![img-box-shadow](/img/notifications/marketplace-notification-components.png)
<figcaption>Mantenimiento → Marketplace, con la categoría Notifications y su módulo Leaves</figcaption>
</figure>

## Instalar un componente

1. Vaya a **Mantenimiento → Marketplace**.
2. Busque el componente por su nombre, o abra su categoría y su módulo.
3. En **Actions**, haga clic en **⊕** para instalarlo.

<figure>

![img-box-shadow](/img/notifications/marketplace-install-button.png)
<figcaption>Un componente sin instalar, con ⊕ en Actions</figcaption>
</figure>

Cuando la versión de un componente no está aprobada, el Marketplace pide confirmación antes de instalarlo. Elija **Yes, install unapproved version** para instalarlo, o **No** para cancelar.

<figure>

![img-box-shadow-popup](/img/notifications/marketplace-unapproved-warning.png)
<figcaption>Confirmación antes de instalar una versión no aprobada</figcaption>
</figure>

## Reglas y comportamiento

- Un componente instalado muestra su versión en verde y no tiene acción de instalación.
- **Not updated** cuenta los componentes instalados que tienen una versión más reciente en el Marketplace.
- Una funcionalidad puede necesitar varios componentes. El servicio de notificaciones, por ejemplo, necesita todos los componentes de la categoría **Notifications** y tres workspaces. Consulte [Configurar las notificaciones](/docs/administration/notifications/set-up-notifications).

## Artículos relacionados

- [Maintenance](/docs/administration/maintenance)
- [Configurar las notificaciones](/docs/administration/notifications/set-up-notifications)
- [Workspaces](/docs/build-and-extend/workspaces)
- [Automatizaciones](/docs/build-and-extend/automations)
