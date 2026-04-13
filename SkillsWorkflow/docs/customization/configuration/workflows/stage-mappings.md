---
id: stage-mappings
title: Stage Mappings
sidebar_label: Stage Mappings
sidebar_position: 5
---

## What is a Stage Mapping?

A **stage mapping** creates an automatic link between stages across different workflows. When a document reaches a specific stage, the system can automatically move a related document to a different stage.

This is essential for **parent–child document relationships**. For example:
- When a **Project** reaches "Approved", all its child **Deliverables** should move from "Draft" to "Ready to Start"
- When a **Request** reaches "Cancelled", its linked **Estimates** should move to "Cancelled"

---

## How It Works

A stage mapping defines:

| Property | Description |
|----------|-------------|
| **Workflow** | The workflow this mapping belongs to. |
| **Document In Stage** | The condition — when the related document is in this stage… |
| **Set Stage** | …move the current document to this stage. |
| **Order** | The evaluation order when multiple mappings exist. |

The mapping fires automatically when a document's related document changes stage. No user action is required.

---

## Example

Imagine a Deliverable workflow with this mapping:

> **When** the parent Project is in stage "Cancelled"
> **Then** set the Deliverable to stage "Cancelled"

This ensures child documents stay in sync with their parent's lifecycle without manual intervention.

---

## Tips

- Mappings are evaluated in **order** — the first matching mapping wins.
- A stage mapping only fires when the **related document** changes stage, not the current document.
- Use mappings to enforce business rules across document hierarchies (Project → Deliverable → Task).
- Be careful with circular mappings — if Document A maps to Document B and vice versa, ensure they don't create infinite loops.
