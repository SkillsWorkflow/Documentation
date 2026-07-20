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

| Item (Marketplace name) | Description |
|---|---|
| System Parameters | Store the tenant-specific values used by the integration |
| Named Query | Loads the Deliverable number, project, title, created date, and latest brief text |
| Automation Workflow | Receives the webhook payload, loads the Deliverable details, and posts to Teams |
| Webhook | Triggers the automation when a Deliverable moves to the configured stage |

The **Item** column lists the exact name each component uses in the Marketplace. Since the Marketplace is available in every tenant, these names can be used to locate a component regardless of whether you're searching in your own tenant or guiding a client to find it in theirs — no tenant-specific link needed.

---

## 3. Installation

Search for **Microsoft Teams Deliverable Notifications** in the **Marketplace** and install it. This is the exact package name, so it resolves the same way in any tenant.

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
- A valid Microsoft Teams incoming webhook URL for that channel (see [Section 7](#7-configuring-the-incoming-webhook-in-microsoft-teams) to create one)
- The tenant values required by the imported Configuration Keys or System Parameters

<!-- image: Teams channel connector or incoming webhook configuration -->

---

## 7. Configuring the Incoming Webhook in Microsoft Teams

:::note
Classic Office 365 Connectors (the original "Incoming Webhook" connector type) are being retired by Microsoft. Teams now generates webhook URLs through the **Workflows** app, which is powered by Power Automate. The steps below reflect this current approach. See [Microsoft's official documentation](https://learn.microsoft.com/en-us/microsoftteams/platform/webhooks-and-connectors/how-to/add-incoming-webhook) for the most up-to-date instructions.
:::

To generate the webhook URL required by the package's Configuration Keys or System Parameters (see [Section 4](#4-configuration)):

1. In **Microsoft Teams**, go to the team and channel that should receive the Deliverable notifications.
2. Select **More options (...)** next to the channel name.
3. Select **Workflows**.
4. In the search box, type `Send webhook alerts to a channel` and select it from the **Templates** list.

   <figure>

   ![img-box-shadow](/img/integrations/microsoft-teams/workflow-template-select.png)
   <figcaption>Selecting the Send webhook alerts to a channel template</figcaption>
   </figure>

5. Under **Parameters**, confirm the **Team the channel is in** and the **Channel**, then select **Save**.

   <figure>

   ![img-box-shadow](/img/integrations/microsoft-teams/workflow-parameters.png)
   <figcaption>Setting the team and channel for the workflow</figcaption>
   </figure>

   The workflow is named automatically, for example `Send webhook alerts to Announcements` based on the channel. You can rename it later using the pencil icon next to the title.

6. The workflow opens showing it as **Active**. Select **Copy webhook link** to copy the generated webhook URL.

   <figure>

   ![img-box-shadow](/img/integrations/microsoft-teams/workflow-copy-link.png)
   <figcaption>Copying the webhook link from the created workflow</figcaption>
   </figure>

7. Paste this URL into the Skills Workflow **Configuration Keys** or **System Parameters** value for the Microsoft Teams incoming webhook.

### Permissions

- Creating a workflow requires access to the **Workflows** app in Teams and, depending on tenant Power Automate licensing and policies, may require admin approval.
- Team owners can control who is allowed to create, update, or remove connectors and workflows for a channel under **Team settings > Member permissions > Allow members to create, update, and remove connectors**.

### Managing the webhook later

To disable or remove the integration on the Teams side, open the workflow itself (as shown in the screenshot above) and select **Turn off** to pause it or **Delete** to remove it permanently. You can also reach the same workflow from the **Workflows** app, under **Your workflows**, by selecting **More actions (...)** next to it.

Turning off or deleting the workflow stops new Teams notifications but does not change the Skills Workflow package configuration. If you create a replacement workflow, update the stored webhook URL in the Configuration Keys or System Parameters accordingly.

---

## 8. Summary

This integration should be documented and used as a **Marketplace package**:

- Import the four items from the package
- Configure the required Configuration Keys or System Parameters
- Test the Deliverable stage transition
- Confirm the notification arrives in Microsoft Teams

There is no need to create the query, automation workflow, webhook, or configuration entries manually when the package is imported correctly.