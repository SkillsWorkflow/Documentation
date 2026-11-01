---
id: install-from-marketplace
title: Install components from the Marketplace
description: "Find and install Skills Workflow components, such as workspaces, automations, webhooks, queries and notification types, from Maintenance → Marketplace, including components whose version is not approved."
sidebar_label: Install from the Marketplace
---

The Marketplace holds the ready-made components a tenant can install: workspaces, automations, webhooks, queries, templates, notification types and more. It is in **Maintenance → Marketplace**. The examples on this page use the components of the notifications service.

## Marketplace overview

The cards at the top summarise the catalogue for this tenant:

| Card | Shows |
|---|---|
| **Total** | Components in the Marketplace |
| **Installed** | Installed in this environment |
| **Defaults** | Marked as default |
| **Not updated** | Newer version available |

Below the cards, the list groups components by **Category** and then by **Module**. Each row shows the component's **Name**, the **Changes** in its version, the **Ticket**, **Days Ago**, the **Stage**, the **Version** and the **Actions**. Use the search box to find a component by name.

<figure>

![img-box-shadow](/img/notifications/marketplace-notification-components.png)
<figcaption>Maintenance → Marketplace, with the Notifications category and its Leaves module</figcaption>
</figure>

## Install a component

1. Go to **Maintenance → Marketplace**.
2. Find the component by name, or open its category and module.
3. In **Actions**, click **⊕** to install it.

<figure>

![img-box-shadow](/img/notifications/marketplace-install-button.png)
<figcaption>A component that is not installed, with ⊕ in Actions</figcaption>
</figure>

When a component's version is not approved, the Marketplace asks for confirmation before installing it. Choose **Yes, install unapproved version** to install it, or **No** to cancel.

<figure>

![img-box-shadow-popup](/img/notifications/marketplace-unapproved-warning.png)
<figcaption>Confirmation before installing a version that is not approved</figcaption>
</figure>

## Rules and behaviour

- An installed component shows its version in green and has no install action.
- **Not updated** counts the installed components that have a newer version in the Marketplace.
- A feature can need several components. The notifications service, for example, needs every component of the **Notifications** category and three workspaces. See [Set up notifications](/docs/administration/notifications/set-up-notifications).

## Related articles

- [Maintenance](/docs/administration/maintenance)
- [Set up notifications](/docs/administration/notifications/set-up-notifications)
- [Workspaces](/docs/build-and-extend/workspaces)
- [Automations](/docs/build-and-extend/automations)
