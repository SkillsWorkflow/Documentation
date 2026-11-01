---
title: Notifications
description: "How Skills Workflow notifies people on the Web, by Email and by Push, how each person chooses the channels per notification type, and where to read about receiving and configuring notifications."
sidebar_label: Overview
sidebar_position: 0
---

# Notifications

Skills Workflow notifies people when something concerns them: a comment on a job they work on, a mention, an answer to their leave request, a team birthday tomorrow. Every notification has a notification type, and each person chooses, per type, the channels it reaches them on.

## Availability

The notifications described in this area apply to tenants with **Use Notifications Service** turned on in **Maintenance → Configuration → Notification**. Tenants without it use the [legacy notifications](/docs/product/notifications/notification-types). Turning it on, and installing what it needs, is covered in [Set up notifications](/docs/administration/notifications/set-up-notifications).

## Channels

| Channel | Where the notification arrives |
|---|---|
| Web | The **Notifications** panel, opened from the bell icon in the top bar, and the **Notifications** page. |
| Email | The email address on the user, sent from notifications@skillsworkflow.com. |
| Push | The Skills Workflow mobile app. |

A person receives a notification type only on the channels selected for it in their preferences. A channel with nothing selected stays off.

## How a notification is sent

1. Something happens. It is either an event on a document, such as a new comment or an approved leave, or a schedule, such as the daily check for tomorrow's birthdays.
2. The event or the schedule runs an automation. Events reach the automation through a webhook.
3. The automation works out who to notify and sends the notification with its notification type.
4. The preferences of each recipient for that type decide the channels.
5. Emails are built with the notification email template.

## Where to go next

- People receiving notifications: [Receive and manage notifications](/docs/product/notifications/receive-and-manage-notifications).
- The notification types and what triggers each one: [Available notifications](/docs/product/notifications/available-notifications).
- Support and agency IT turning the system on: [Set up notifications](/docs/administration/notifications/set-up-notifications), then [Monitor and troubleshoot notifications](/docs/administration/notifications/monitor-and-troubleshoot-notifications).

## Related articles

- [Receive and manage notifications](/docs/product/notifications/receive-and-manage-notifications)
- [Available notifications](/docs/product/notifications/available-notifications)
- [Set up notifications](/docs/administration/notifications/set-up-notifications)
- [Monitor and troubleshoot notifications](/docs/administration/notifications/monitor-and-troubleshoot-notifications)
- [Legacy notifications](/docs/product/notifications/notification-types)
