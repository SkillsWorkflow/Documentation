---
id: recipe-email-notification
title: Send an email notification
description: "When something happens in Skills Workflow, let people know by email — optionally pulling in extra detail first."
sidebar_label: Email notification
sidebar_position: 2
---

import AutomationGraph from '@site/src/components/automations/AutomationGraph';

When something happens in Skills Workflow, let people know by email — optionally pulling in extra detail first. Click any step to see what it does:

<AutomationGraph preset="emailNotify" height={300} />

## How it works

1. **[Start](../actions.md#start)** hands off to the first action.
2. **[Rest](../actions.md#rest)** (`GetDetails`) is optional — use it to fetch extra information to include in the message. Drop this step if the trigger already carries everything you need via `{{['#HttpRequest']}}`.
3. **[E-mail](../actions.md#e-mail)** (`SendEmail`) sends the notification. The `body` supports HTML and can reference earlier results with `{{['ActionName']}}`.
4. **[Result](../actions.md#result)** returns once the email is sent.

## The full automation

```json title="NotifyByEmail"
[
  {
    "actionType": "Start",
    "name": "Start",
    "next": "GetDetails"
  },
  {
    "actionType": "Rest",
    "name": "GetDetails",
    "next": "SendEmail",
    "Method": "GET",
    "url": "https://apiv2.example.com/api/projects/{{['#HttpRequest'].Body.Id}}"
  },
  {
    "actionType": "Email",
    "name": "SendEmail",
    "next": "Exit",
    "subject": "New project created",
    "body": "<p>Project <strong>{{['GetDetails'].Content.Name}}</strong> was just created.</p>",
    "fromDisplayName": "Notifications | Skills Workflow",
    "toAddress": "team@example.com"
  },
  {
    "actionType": "Result",
    "name": "Exit",
    "httpResponse": {
      "statusCode": 200,
      "headers": {},
      "body": ""
    }
  }
]
```

:::tip Adapt it
Set `toAddress`, `subject` and `body` to your case. To attach a file — for example a generated CSV — see [Export data to a CSV file](./export-to-csv.md) and add the file to the E-mail action's `attachments`.
:::
