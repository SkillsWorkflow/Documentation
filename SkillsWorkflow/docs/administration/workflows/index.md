---
id: workflow-entities
title: Workflow
description: "Workflows define how documents move through their lifecycle in Skills Workflow."
sidebar_label: Workflow
sidebar_position: 1
---

import WorkflowGraph from '@site/src/components/workflowentities/WorkflowGraph';

## Overview

Workflows define how documents move through their lifecycle in Skills Workflow. Every document type — Projects, Deliverables, Estimates, and others — has its own workflow that controls which stages it passes through and what happens at each step.

### Purpose

A workflow lets you model the approval and processing steps for any document type. You decide:

- What **stages** exist (e.g. Draft, In Review, Approved, Closed)
- Which **transitions** connect those stages (e.g. “Submit for Review” moves from Draft → In Review)
- What **actions** run automatically when a transition fires (send emails, update fields, create child documents)
- Who is **allowed** to execute each transition (role-based permissions)
- Whether a **reason** (motive) must be provided

### Use Cases

- Design approval flows for creative deliverables
- Set up multi-step review and sign-off processes
- Automate notifications and field updates when documents change stage
- Restrict stage transitions to specific security roles
- Require motives for rejections or cancellations
- Map stages across related workflows (e.g. a Project and its Deliverables)

---

## Entity Map

The interactive diagram below shows how workflow entities relate to each other. Use the dropdown to focus on a specific entity, or click any node to learn more about it.

<WorkflowGraph />

---

## Key Concepts

### Workflow

The top-level container. Each document type has exactly one workflow with an initial and final stage.

### [Stages](stages.md)

The states a document passes through (e.g. Draft, In Review, Approved). Includes team permissions, translations, and visibility settings. [Read more →](stages.md)

### [Stage Types](stage-types.md)

Classify stages so reporting, automation, and visual rules stay consistent across the workflow. [Read more →](stage-types.md)

### [Transitions](transitions.md)

Paths between stages. Configure actions, role restrictions, motives, validations, custom actions, and over 100 built-in action types. [Read more →](transitions.md)

### [Stage Mappings](stage-mappings.md)

Automatic stage links across workflows for parent–child document relationships. [Read more →](stage-mappings.md)

:::tip
Click any node in the diagram above to see a summary and a link to the detailed page.
:::
