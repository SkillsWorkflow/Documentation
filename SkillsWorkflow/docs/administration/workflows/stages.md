---
id: stages
title: Stages
description: "A stage represents a state that a document can be in at any point during its lifecycle."
sidebar_label: Stages
sidebar_position: 2
---

## What is a Stage?

A **stage** represents a state that a document can be in at any point during its lifecycle. For example, a Deliverable might pass through stages like *Draft*, *In Review*, *Approved*, and *Closed*.

Every workflow is built from a sequence of stages connected by [transitions](transitions.md).

---

## Properties

| Property | Description |
|----------|-------------|
| **Name** | The display name of the stage (e.g. "In Review"). |
| **Color** | A hex color used to visually distinguish the stage in the UI. |
| **Order** | Determines the display order. Must be unique within the document type. |
| **Stage Type** | Classifies the stage — see [Stage Types](stage-types.md). |
| **Delayed** | Marks the stage as a delay indicator for reporting. |
| **Visible to Client** | Whether external client users can see documents in this stage. |
| **Allows Timesheet** | Whether users can log time against documents in this stage. |
| **Percentage** | A completion percentage (0–100) associated with this stage. |
| **Suggest Percentage** | If enabled, the system auto-suggests the stage percentage when a transition fires. |

---

## Stage Teams

Each stage can have **team assignments** that control who can interact with documents at that stage.

A stage team links an **assignment type** (e.g. Requester, Executor, Reviewer) to a set of permissions:

| Permission | Description |
|------------|-------------|
| **Allow Read** | The team can view the document. |
| **Allow Write** | The team can edit the document. |
| **Allow Pending** | The team receives pending/task notifications. |
| **Must Send Notification** | A notification is sent to team members when a document enters this stage. |

:::tip
Use stage teams to enforce that only the right people can see and edit documents at each step. For example, only the *Executor* team might have write access during the "In Production" stage.
:::

---

## Translations

Stage names can be **translated** so they appear in each user's interface language. The system stores localized names per language code (e.g. `en`, `pt`, `es`).

For example, a stage named "Approved" might have:
- **EN**: Approved
- **PT**: Aprovado
- **ES**: Aprobado

---

## Tips

- The **initial stage** is the stage where new documents are created (e.g. "Draft").
- The **final stage** is the terminal state (e.g. "Closed" or "Completed").
- Stages referenced by [transitions](transitions.md) cannot be deleted until those transitions are removed first.
- Use [stage types](stage-types.md) to group stages for reporting and automation rules.
