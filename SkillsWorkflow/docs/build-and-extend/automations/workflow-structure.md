---
id: workflow-structure
title: Workflow structure
description: "The shape of an Automation Workflow: the fields on the workflow itself, how actions chain through next, the rules that must hold before it saves, sub-workflows and error routing."
sidebar_label: Workflow structure
sidebar_position: 2
---

A workflow is a JSON document holding a list of actions. The builder draws it, but knowing the underlying shape is what lets you read an exported workflow or work out why one refuses to save.

## The workflow

```json title="The envelope, with the actions omitted"
{
  "id": "guid",
  "tenantId": "guid",
  "name": "SyncSuppliers",
  "active": true,
  "version": 1,
  "logLevelType": "Info",
  "requiresAuthentication": false,
  "actions": [],
  "subWorkflows": [],
  "scheduler": null
}
```

| Field | Meaning |
|---|---|
| `name` | Required, and cannot be empty. |
| `active` | Whether the workflow is eligible to run. |
| `version` | Incremented as the workflow is edited. |
| `logLevelType` | `Info`, `Warning` or `Error`. Set it against how critical the workflow is. |
| `requiresAuthentication` | Whether an inbound call must be authenticated. |
| `actions` | The chain. See below. |
| `subWorkflows` | Named action chains this workflow can call. |
| `scheduler` | Present only on scheduled workflows. See [How automations start](./triggers.md#schedules). |

## Chaining actions

Every action carries an `actionType` and a `name`, and the `name` is how the rest of the workflow refers to it. Non-terminal actions carry `next`, naming the action that runs after them.

```json
{ "actionType": "Start",  "name": "Start",  "next": "FetchSuppliers" }
{ "actionType": "Rest",   "name": "FetchSuppliers", "next": "Exit", "method": "GET", "url": "..." }
{ "actionType": "Result", "name": "Exit" }
```

Branching works differently: [`Case`](./actions-reference.md#case) replaces `next` with `nextActions`, a list of candidate branches, and one of them may be marked `{ "default": true }`.

## Rules a workflow must satisfy

These are checked when the workflow is saved. A workflow that breaks any of them is rejected.

- Exactly one `Start` action.
- At least one `Result` action.
- Action names are unique within the workflow, and within each sub-workflow.
- Every `next` names an action that exists.
- `Result` must not carry `next`.
- No cycle without a way out.

Scheduled workflows add their own rules, listed under [Schedules](./triggers.md#schedules).

## Sub-workflows

A sub-workflow is a named chain kept beside the main one and called by [`ExecuteSubWorkflow`](./actions-reference.md#executesubworkflow) or run per item by [`Loop`](./actions-reference.md#loop). It follows the same rules as the workflow: its own `Start`, its own `Result`, unique names inside it.

```json title="An empty sub-workflow, ready to fill in"
{
  "name": "CreateProjectIfNotExists",
  "actions": [
    {
      "actionType": "Start",
      "name": "Start",
      "next": "Exit"
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

Reach for one when the same few actions repeat, and whenever you need `Loop`, which runs a sub-workflow per element.

## When an action fails

Some actions accept `nextOnError` alongside `next`. When the action fails, the chain continues at the action `nextOnError` names instead of stopping. Use it for failures you can recover from: fall back to a default, log and carry on, or return a considered error from `Result`.

Without `nextOnError`, a failing action ends the run.

## Practices worth keeping

Keep only the fields an action needs, and drop the ones left null. An exported workflow full of unused properties is hard to read and hides the fields that matter.

Give `Case` a default branch. Without one, an unmatched test is a dead end.

Name actions after what they do rather than what they are. `FetchSuppliers` tells the next reader more than `Rest1`, and the name is what every expression downstream will quote.

## Related articles

- [Actions](./actions-reference.md)
- [Expressions](./expressions/index.md)
- [How automations start](./triggers.md)
