---
id: set-up-notifications
title: Set up notifications
description: "Turn on the Skills Workflow notifications service for a tenant: enable Use Notifications Service, install the notification components and workspaces from the Marketplace, check the webhooks and the automation schedules, and set the users' preferences."
sidebar_label: Set up notifications
sidebar_position: 1
---

Setting up notifications for a tenant means turning on the notifications service, installing the notification types and the automations that send them, and selecting the channels each user receives. The steps below are for Support and agency IT. How people receive notifications is in [Receive and manage notifications](/docs/product/notifications/receive-and-manage-notifications).

## Prerequisites

- Access to **Maintenance**, including **Configuration**, **Marketplace**, **Webhooks**, **Automations** and **Users**.
- Users who should receive email notifications have an email address on their user.

## Turn on the notifications service

1. Go to **Maintenance → Configuration**.
2. Open the **Notification** tab.
3. Turn on **Use Notifications Service** and save.

<figure>

![img-box-shadow](/img/notifications/configuration-use-notifications-service.png)
<figcaption>Use Notifications Service in the Notification tab of Maintenance → Configuration</figcaption>
</figure>

While the setting is off, the tenant uses the [legacy notifications](/docs/product/notifications/notification-types).

## Install the notification components

In **Maintenance → Marketplace**, install:

- every component of the **Notifications** category: notification types, email templates, queries, automations and webhooks;
- the **Notification** workspace, which adds the **NOTIFICATION** tab to users;
- the **Notifications** workspace, the page that lists all notifications;
- the **Notification Types** workspace.

The Marketplace groups components by category and then by module. Install each one with **⊕**. The full procedure, including components that are not approved, is in [Install components from the Marketplace](/docs/administration/system/install-from-marketplace).

<figure>

![img-box-shadow](/img/notifications/marketplace-notification-components.png)
<figcaption>Components of the Notifications category, Leaves module, in Maintenance → Marketplace</figcaption>
</figure>

After the installation, the notification types are listed in **Maintenance → Notification Types**. Each one has a name and a description per language, which you can edit. The description is what users see in their preferences.

## Check the webhooks

Notifications sent by an event start from a webhook. In **Maintenance → Webhooks**, open each notification webhook and check:

- **Active** is on.
- **Event** and **Document** match the event that should send the notification, for example **Updated** on **Leave**.
- **Automation** is on and **Automation Workflow** names the notification automation.

<figure>

![img-box-shadow-popup](/img/notifications/webhook-form.png)
<figcaption>A notification webhook: Updated on Leave runs the Notification-LeaveRejected automation</figcaption>
</figure>

Some webhooks also have **Filters**, which narrow the events that run the automation. A filter combines **Business Object Type Name** with conditions on a **Detail Path Expression**, a **Condition** and a **Value**, joined with **And** or **Or**. **Add filter** adds a condition.

<figure>

![img-box-shadow-popup](/img/notifications/webhook-filters.png)
<figcaption>The Filters section of a webhook</figcaption>
</figure>

Each field of the webhook form is described in [Webhooks](/docs/build-and-extend/api/webhooks).

## Check the automation schedules

Notifications sent by a schedule, such as **Team Birthdays** or **Leaves To Approve**, run only when their automation has an active schedule. In **Maintenance → Automations**, the **Scheduler** column shows the schedule of each automation and **Active** shows whether the automation runs. Schedules are explained in [How automations start](/docs/build-and-extend/automations/triggers).

<figure>

![img-box-shadow](/img/notifications/automations-list.png)
<figcaption>Notification automations in Maintenance → Automations</figcaption>
</figure>

## Set the users' preferences

A user receives a notification type only on the channels selected for it. Until a channel is selected, the user receives nothing of that type.

1. Go to **Maintenance → Users** and open the user.
2. Open the **NOTIFICATION** tab, through **▾** when it is not visible.
3. Select **Email**, **Push** and **Web** for each notification type.

<figure>

![img-box-shadow-popup](/img/notifications/user-notification-preferences.png)
<figcaption>Channels per notification type in the NOTIFICATION tab of a user</figcaption>
</figure>

Setting the preferences of other users needs the `CanManageOthersPreferences` role, and the tab itself needs `NotificationPreferenceWrite`. For **Mentions**, also turn on **Receive documents notifications** on the user.

## Related articles

- [Notifications](/docs/product/notifications)
- [Available notifications](/docs/product/notifications/available-notifications)
- [Monitor and troubleshoot notifications](/docs/administration/notifications/monitor-and-troubleshoot-notifications)
- [Install components from the Marketplace](/docs/administration/system/install-from-marketplace)
- [Webhooks](/docs/build-and-extend/api/webhooks)
- [Automations](/docs/build-and-extend/automations)
