---
id: getting-started
title: Build your first automation
description: "This walkthrough takes you from an empty screen to a working automation."
sidebar_label: Build your first automation
sidebar_position: 1
---

import AutomationGraph from '@site/src/components/automations/AutomationGraph';

This walkthrough takes you from an empty screen to a working automation. We'll build a common one: **when a project is created, notify an external system**. By the end you'll recognise the shape every automation shares, and know how to wire actions together.

:::info What you'll build
An automation that fires on *project created*, calls an external endpoint with the new project's details, and returns a success response. Here's the chain we're aiming for — click any step to see what it does:
:::

<AutomationGraph preset="notify" height={300} />

If you haven't yet, skim the [Overview](./index.md) to see how **Trigger → Condition → Actions** fit together. Every automation is built between a mandatory **Start** and **Result** action.

## Step 1: Open the Automation Workflows builder

From **Customization → Automations**, choose **New workflow**. A new Automation Workflow always begins with two actions already in place — a `Start` and a `Result` — because both are mandatory. Everything you add goes *between* them.

Give the workflow a name, for example `NotifyOnProjectCreated`.

## Step 2: Choose the event that triggers it

Select the system event that should start the automation — in our case, a **project being created**. This is the automation's **Trigger**.

:::tip
The data carried by the trigger is always available through the `{{['#HttpRequest']}}` parameter. For a project-created event, the new project's fields arrive in `{{['#HttpRequest'].Body}}` — we'll use that in the next step.
:::

## Step 3: Add your first action

Add a `Rest` action between `Start` and `Result`, and name it `NotifyChannel`. Point `Start` at it by setting `Start`'s `next` to `NotifyChannel`, and point `NotifyChannel`'s `next` at the `Result` action.

This is the core pattern: **each action names the next one via `next`**, forming the chain.

```json title="The NotifyChannel action"
{
  "actionType": "Rest",
  "name": "NotifyChannel",
  "next": "Exit",
  "Method": "POST",
  "bodyMediaType": "Json",
  "url": "https://hooks.example.com/projects",
  "body": "{\"text\":\"New project created: {{['#HttpRequest'].Body.Name}}\"}",
  "isApiCall": false,
  "ensureSuccessStatusCode": true
}
```

Notice `{{['#HttpRequest'].Body.Name}}` inside the body — that pulls the project's name straight from the trigger. Any earlier action's result can be referenced the same way, using `{{['ActionName']}}`. See [Configurations](./index.md#configurations) for the full syntax.

## Step 4: Confirm the Result

The `Result` action returns the response the caller receives once the chain finishes. The default is fine for our case — a `200` with an empty JSON body.

```json title="The Result action"
{
  "actionType": "Result",
  "name": "Exit",
  "httpResponse": {
    "statusCode": 200,
    "headers": { "content-type": "application/json" },
    "body": ""
  }
}
```

## Step 5: Review the whole automation

Put together, the three actions form one complete automation. This is exactly what gets saved:

```json title="NotifyOnProjectCreated"
{
  "name": "NotifyOnProjectCreated",
  "actions": [
    {
      "actionType": "Start",
      "name": "Start",
      "next": "NotifyChannel"
    },
    {
      "actionType": "Rest",
      "name": "NotifyChannel",
      "next": "Exit",
      "Method": "POST",
      "bodyMediaType": "Json",
      "url": "https://hooks.example.com/projects",
      "body": "{\"text\":\"New project created: {{['#HttpRequest'].Body.Name}}\"}",
      "isApiCall": false,
      "ensureSuccessStatusCode": true
    },
    {
      "actionType": "Result",
      "name": "Exit",
      "httpResponse": {
        "statusCode": 200,
        "headers": { "content-type": "application/json" },
        "body": ""
      }
    }
  ]
}
```

## Step 6: Test and save

Run the automation once to check each action's result inline, then save. From now on it fires automatically every time a project is created.

:::tip Add a condition
Want it to run only for some projects? Add a **Condition** so the automation proceeds only when your filter is met — for example, only for projects above a certain budget. See the [Overview](./index.md) for where conditions sit in the flow.
:::

## Where to go next

- **[Actions reference](actions-reference.md)** — every action type you can add to the chain, with templates and examples.
- **[Configurations & expressions](./index.md#configurations)** — how actions share data, plus functions, pipe functions and JSONPath.
- **[Recipes](./recipes/export-to-csv.md)** — complete, copy-paste automations for common scenarios.
