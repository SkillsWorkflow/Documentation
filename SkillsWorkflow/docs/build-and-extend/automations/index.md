---
id: automations
title: Automations
description: "Automation Workflows run a chain of configured actions when an event fires, a webhook is called, or a schedule comes due — calling external systems, transforming data, sending mail and returning responses."
sidebar_label: Overview
sidebar_position: 0
---

import AutomationGraph from '@site/src/components/automations/AutomationGraph';

An Automation Workflow runs a chain of configured actions without anyone pressing a button. Something starts it, an optional condition decides whether it should carry on, and the actions do the work: calling an external API, moving a file over SFTP, building a CSV, sending mail, or returning a response to whoever called.

<AutomationGraph />

Every workflow has the same skeleton. It begins at a mandatory **Start** action and finishes at a **Result**, and each action in between names the one that follows it. That chain is the whole model, and it is what the builder draws.

## What starts a workflow

Three things, covered in [How automations start](./triggers.md):

| Source | Use it for |
|---|---|
| A system event | Reacting to work happening in Skills Workflow, such as a project being created. |
| A webhook | Letting an external system call in, with the request body available to every action. |
| A schedule | Running on a fixed cadence, such as an hourly sync. |

## Where to go next

**New to automations?** [Build your first automation](./getting-started.md) walks from an empty screen to a working workflow that calls an external endpoint.

**Building one now?** [Actions](./actions-reference.md) is the catalogue of every action type, with its required fields, JSON template and examples. [Workflow structure](./workflow-structure.md) covers the rules a workflow must satisfy before it will save.

**Wiring data between actions?** [Expressions](./expressions/index.md) covers the `{{ }}` syntax, the functions and pipe functions available, and JSONPath for reaching into results.

**Want a working starting point?** [Recipes](./recipes/export-to-csv.md) are complete automations you can copy and adapt.

## Related articles

- [Webhooks](../api/webhooks.md)
- [Actions](./actions-reference.md)
- [Expressions](./expressions/index.md)
