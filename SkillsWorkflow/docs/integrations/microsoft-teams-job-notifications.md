---
id: microsoft-teams-job-notifications
title: Microsoft Teams Deliverable Notifications
sidebar_label: Microsoft Teams
---

## 1. Overview

This integration sends a Microsoft Teams notification when a **Deliverable** moves to a specific workflow stage in Skills Workflow.

The installed package includes the full integration flow:

1. A **Webhook** listens for the `StageUpdated` event on `Deliverable`.
2. The webhook triggers an internal **Automation Workflow**.
3. The automation loads the Deliverable details.
4. The automation applies the package configuration.
5. The automation posts a **MessageCard** to a Microsoft Teams channel.

This is a good fit when you want a support, operations, or production channel to be notified whenever new Deliverables become active in the system.


<!-- image: overview diagram showing Webhook -> Automation -> Query -> Teams channel -->

---

## 2. Package Contents

To enable this integration, import all four package items:

| Item | Description |
|---|---|
| Configuration Keys / System Parameters | Store the tenant-specific values used by the integration |
| Named Query | Loads the Deliverable number, project, title, created date, and latest brief text |
| Automation Workflow | Receives the webhook payload, loads the Deliverable details, and posts to Teams |
| Webhook | Triggers the automation when a Deliverable moves to the configured stage |

---

## 3. Installation

Install the integration from the **Marketplace**.

Import all four items from the package:

1. Configuration Keys or System Parameters
2. Named Query
3. Automation Workflow
4. Webhook

After the import, the items are available in your tenant and do not need to be created manually.

<!-- image: marketplace package installation -->

---

## 4. Configuration

Once the four items are imported, configure the **System Parameters** used by the integration.

The exact keys can vary by package version, but the required values are typically:

- The Microsoft Teams incoming webhook URL
- The Skills Workflow base URL used in the card link
- The target workflow stage name
- The project filter, if the package is configured to post only for one project

If your package includes optional keys, leave them aligned with your tenant requirements.

Do not skip the import of the query, automation, or webhook. The Configuration Keys only provide values to those imported items; they do not replace them.

<!-- image: configuration keys for the Teams package -->

---

## 5. What the Notification Includes

The Teams card typically includes:

- Deliverable title
- Deliverable number
- Workflow stage
- User who triggered the event
- Event timestamp
- Latest brief or description text
- Direct link to the Deliverable in Skills Workflow

:::note
This package posts to Microsoft Teams using an incoming webhook and an Office 365 MessageCard payload. If your Microsoft 365 tenant uses a different approved connector pattern, the package may need an adapted version.
:::

<!-- image: example of Teams card received in the channel -->

---

## 6. Prerequisites

Before installing the package, make sure you have:

- Access to the **Marketplace**
- A Microsoft Teams channel that should receive the notification
- A valid Microsoft Teams incoming webhook URL for that channel
- The tenant values required by the imported Configuration Keys or System Parameters

<!-- image: Teams channel connector or incoming webhook configuration -->

---

## 7. Summary

This integration should be documented and used as a **Marketplace package**:

- Import the four items from the package
- Configure the required Configuration Keys or System Parameters
- Test the Deliverable stage transition
- Confirm the notification arrives in Microsoft Teams

There is no need to create the query, automation workflow, webhook, or configuration entries manually when the package is imported correctly.