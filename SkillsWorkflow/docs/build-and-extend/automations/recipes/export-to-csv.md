---
id: recipe-export-to-csv
title: Export data to a CSV file and deliver it
description: "A common automation: fetch a set of records, turn them into a CSV file, and send that file to another system."
sidebar_label: Export data to CSV
sidebar_position: 1
---

import AutomationGraph from '@site/src/components/automations/AutomationGraph';

A common automation: fetch a set of records, turn them into a CSV file, and send that file to another system. The chain looks like this — click any step for what it does:

<AutomationGraph preset="csvDelivery" height={520} />

## How it works

1. **[Start](../actions-reference.md#start)** hands off to the first action.
2. **[Rest](../actions-reference.md#rest)** (`GetData`) fetches the rows to export — here, from a named analytics query.
3. **[Csv](../actions-reference.md#csv)** (`CreateCsv`) turns those rows into a CSV, choosing which columns to include with `dataColumns`.
4. **[Rest](../actions-reference.md#rest)** (`DeliverFile`) sends the file on, attaching it as Base64 with the `ToBase64` pipe: `{{['CreateCsv']$ | ToBase64}}`.
5. **[Result](../actions-reference.md#result)** returns the outcome.

## The full automation

```json title="ExportExpensesToCsv"
[
  {
    "actionType": "Start",
    "name": "Start",
    "next": "GetData"
  },
  {
    "actionType": "Rest",
    "name": "GetData",
    "next": "CreateCsv",
    "Method": "POST",
    "bodyMediaType": "Json",
    "url": "https://apiv2.example.com/api/analytics/globalQuery/Expense - Export/execute",
    "body": "{}"
  },
  {
    "actionType": "CreateCsv",
    "name": "CreateCsv",
    "next": "DeliverFile",
    "hasHeaderRecord": true,
    "delimiter": ",",
    "quote": "\"",
    "data": "{{['GetData'].Content.Data}}",
    "dataColumns": [
      "Employee",
      "CostCenter",
      "TotalValue",
      "ExpenseDate"
    ]
  },
  {
    "actionType": "Rest",
    "name": "DeliverFile",
    "next": "Exit",
    "Method": "POST",
    "bodyMediaType": "Raw",
    "url": "https://intake.example.com/api/files",
    "body": "{\"fileName\":\"expenses.csv\",\"content\":\"{{['CreateCsv']$ | ToBase64}}\"}",
    "requestHeaders": [
      {
        "name": "Content-Type",
        "value": "application/json"
      }
    ]
  },
  {
    "actionType": "Result",
    "name": "Exit",
    "httpResponse": {
      "statusCode": 200,
      "headers": {},
      "body": "{{['DeliverFile']}}"
    }
  }
]
```

:::tip Adapt it
Change the query URL and `dataColumns` to your data, and point `DeliverFile` at wherever the file should go. To email the file instead, swap `DeliverFile` for an [E-mail](../actions-reference.md#e-mail) action — see [Send an email notification](./email-notification.md).
:::
