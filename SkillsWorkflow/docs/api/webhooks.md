---
id: webhooks
title: Webhooks
sidebar_label: Webhooks
sidebar_position: 3
---
import Tabs from '@theme/Tabs'; import TabItem from '@theme/TabItem';


# Webhooks

## Overview

Webhooks in Skills Workflow allow for seamless integration between the platform and external systems by triggering automated actions in response to specific events. When a configured event occurs (e.g., a field is updated or a document is created), the webhook sends a payload to a predefined destination, allowing you to keep systems in sync or trigger automated processes.

### Purpose

The purpose of webhooks is to automate workflows by reacting to changes within the Skills Workflow platform without manual intervention. They eliminate the need for polling and enable real-time communication with other tools such as Azure DevOps, Jira, Slack, or custom endpoints.

### Use Cases

- Create a work item in Azure DevOps when a specific user field is updated.
- Notify a third-party system when a deliverable reaches a certain status.
- Trigger CI/CD pipelines when a task is marked as ready for development.
- Synchronize data between Skills Workflow and external databases or APIs.

### Key Limitations

- Webhooks are only triggered for the selected **Event** and **Document** types.
- The destination system must be able to receive and process the webhook payload.
- Filtering logic must be correctly configured to avoid unintended triggers.
- No retry mechanism is in place if the target system fails to respond.

## Getting Started

To configure a webhook, go to:  
**Maintenance > Webhooks > Create New Webhook**

Fill out the form as follows:
  
<figure>

![img](/img/api/webhooks/webhook.png)
<figcaption>Webhook Configuration</figcaption>
</figure>

### General

- **Name**  
  A descriptive title for the webhook. This is used internally to identify the configuration.  
  _Example_: `Create Work Item when Is Customization is unchecked`

- **Active**  
  Toggle to enable or disable the webhook. Only active webhooks will be triggered.

- **Description**  
  A short explanation of what the webhook does and when it should be triggered.  
  _Example_: `Creates Work Item in Visual Studio when Is Customization is unchecked and the ticket is Under Development.`

- **Created On / Modified By**  
  Automatically filled metadata about who created or last modified the webhook.

---

### Document

- **Event**  
  The type of event that should trigger the webhook.  
  _Example_: `UserFieldValueUpdated` (fires when a user-defined field changes)

- **Document**  
  The document type on which the event will be applied.  
  _Example_: `Deliverable`, `Estimate`, `User Story`, etc.

---

### Destination

- **Automation**  
  Toggle to activate an automation workflow instead of a standard HTTP call.


<Tabs groupId="destination-url"
defaultValue="url"
values={[{label: "Url", value: 'url'}, {label: 'Automation Workflow' , value: 'automation'}]}>

<TabItem value="url">

- **URL**  
  If the webhook triggers an external url.  
  _Example_: `https://example.com/webhooks/my-webhook`

  <figure>

  ![img-box-shadow](/img/api/webhooks/url.png)
  <figcaption>URL</figcaption>
  </figure>

</TabItem>
<TabItem value="automation">

- **Automation Workflow**  
  If the webhook triggers an internal automation (e.g., an Azure DevOps integration), select the appropriate workflow from the list.  
  _Example_: `Azure DevOps – Create Work Item in Visual Studio`

  <figure>

  ![img-box-shadow](/img/api/webhooks/automation.png)
  <figcaption>Automation Workflow</figcaption>
  </figure>

</TabItem>
</Tabs>



- **Secret**  
  A secure key used to authenticate the webhook request with the external system.

---

### Filters

- **Business Object Type Name**  
  Defines which type of object the webhook should be applied to (e.g., `User Story`, `Estimate`, `Job`, etc.).

- **Filter Logic (AND/OR)**  
  Combine multiple filters using logical operators.  
  _Example_: Use `AND` to ensure multiple conditions must be met.

- **Detail Path Expression**  
  The specific field or column within the business object to evaluate.  
  _Example_: `columnName`

- **Condition**  
  The condition to match.  
  _Options_: `Equal`, `Not Equal`, `Contains`, `Does Not Contain`, `In`, `NotIn`.

- **Value**  
  The expected value that will trigger the webhook when the condition is met.  
  _Example_: `Is Customization`

:::note 
Filters allow fine-tuning of when a webhook should be executed to avoid triggering actions unnecessarily.
:::

### Dynamic Filter Values

You can use **System Parameters** as dynamic values in filters. To reference a system parameter:

- Use the format: `{{SystemPreferenceName/KeyName}}`
- _Example_: `{{MyAutomationPreferences/departments}}`

```json title="MyAutomationPreferences"
{
  "user": "skills-user",
  "password": "my-strong-password",
  "departments": [
    "6f51b21e-2dcc-4f5e-aebb-491b54800bf1",
    "a733e914-18ea-4c92-94b4-59491badc974",
    "ecc30504-1f5c-4b3b-a864-da85d04ebabe",
    "d42168e4-f690-4546-8197-54ba344a1806"
  ]
}
```

* Example Usage:
  ![img-box-shadow](/img/api/webhooks/dynamic-filter.png)

