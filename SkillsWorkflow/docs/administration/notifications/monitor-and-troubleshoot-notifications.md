---
id: monitor-and-troubleshoot-notifications
title: Monitor and troubleshoot notifications
description: "Find out why a Skills Workflow notification was or was not delivered: the webhook History, the automation history and its logs, and the most common causes of a missing notification."
sidebar_label: Monitor and troubleshoot notifications
sidebar_position: 2
---

When a notification does not arrive, follow it back the way it was sent: the user's preferences, the automation that sent it and, for notifications sent by an event, the webhook that ran the automation.

## Check whether the webhook ran

1. Go to **Maintenance → Webhooks** and open the webhook.
2. Open the **History** tab and set the date range.

Each run shows the **Date**, the **Status**, a **Message**, the **Event** received, the **Request**, the **Response** and the **Duration**. No row for the moment of the event means the webhook did not run: check that it is **Active** and that its **Filters** match the event.

<figure>

![img-box-shadow-popup](/img/notifications/webhook-history.png)
<figcaption>The History tab of a webhook, with three successful runs</figcaption>
</figure>

## Check what the automation did

In **Maintenance → Automations**, the **Actions** column of each automation has:

- **▷**, which runs the automation now;
- **↺**, which opens its history.

The history groups the logs by execution, with the start time and the number of entries. Expand an execution to see each step, with its **Status**, **Logged On**, **Progress** and **Content**, and the step where it stopped when it failed.

<figure>

![img-box-shadow-popup](/img/notifications/automation-logs.png)
<figcaption>The history of the Notification-LeaveApproved automation, with the steps of one execution</figcaption>
</figure>

The steps are logged according to the **Logging** level of the automation. Set it to **Info** to see every step. At **Error**, a successful execution leaves no entries.

## Common problems

| What happens | What to check |
|---|---|
| The notification is in the panel but no email arrives | **Email** is not selected for that notification type, or the user has no email address. |
| The email arrives but the notification is not in the panel | **Web** is not selected for that notification type. |
| A mention is not received | **Receive documents notifications** is off for the person mentioned, or **Mentions** has no channel selected. |
| A person is not notified about their own comment | Expected: authors are never notified about their own comments. |
| Nothing happens for an event | The webhook is inactive, its **Filters** exclude the event, or the automation failed. Check the webhook **History**, then the automation history. |
| A scheduled notification never arrives | The automation has no active schedule in the **Scheduler** column, or it is not **Active**. |
| No user receives any notification | **Use Notifications Service** is off in **Maintenance → Configuration → Notification**, or no user has preferences selected. |

## Related articles

- [Set up notifications](/docs/administration/notifications/set-up-notifications)
- [Available notifications](/docs/product/notifications/available-notifications)
- [Receive and manage notifications](/docs/product/notifications/receive-and-manage-notifications)
- [Webhooks](/docs/build-and-extend/api/webhooks)
- [Automations](/docs/build-and-extend/automations)
