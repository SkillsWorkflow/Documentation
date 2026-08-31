---
id: workspace-agent
title: Workspace Agent
description: "Build and change workspaces and dashboards by describing what you want — components, layout, filters and data sources — and edit the files behind them when a change needs code."
sidebar_label: Workspace Agent
sidebar_position: 4
---

The Workspace Agent builds and changes workspaces and dashboards. Describe the view you want and it produces a change you review before it is applied — a new panel, a different filter, a chart reading from somewhere else, a whole workspace from scratch.

It works at two levels, and moves between them on its own:

- **The workspace definition** — components, layout, data sources, filters, and how components react to each other. This is most work.
- **The files behind a workspace** — the individual JavaScript functions and JSON configuration a workspace is built from. This is where a change goes when no setting expresses it: a custom column formatter, a function that filters by status, a bug in a component's setup.

## What it can do

- Create a workspace, or add a component to one — grids, forms, charts, indicators, boards
- Change a component's configuration, its filters and its layout
- Wire a component to a data source, and wire components to react to one another
- Read a custom table's schema or an integration workflow, and validate a change to either
- Read and edit the JavaScript and JSON files behind a workspace
- Show you exactly what changed before you save

## How to use it

1. Open the workspace you want to change, so the agent has it in context.
2. Open the [AI Assistant](/docs/ai/ai-assistant), select **Workspace Agent**, and leave the **Workspace** context switch on.
3. Describe one change.
4. Review the proposal, then apply it. You can revert a preview that is not what you meant.

Keep requests to one panel, widget or layout area at a time. A broad request comes back as a suggestion to start somewhere specific.

```
Add a kanban panel of this week's deliverables, grouped by stage.
```

```
Change this grid to show a filter row, and default it to my department.
```

For a change in code, name the component and the behaviour:

```
Fix the column setup in the estimates grid — the total column shows blank for rows with no lines.
```

The agent reads the relevant files first, tells you what it plans to change, and then changes it.

## Rules and behaviour

- Nothing is saved until you apply it. A proposal can be reverted while you are looking at it.
- The agent validates a workspace change before applying it and reports a rejection rather than half-applying it.
- Editing the files behind a workspace is close to the code. It suits studio leads and technical administrators; for layout, filters and widget settings, stay with the plain-language route above.
- The agent works with your permissions, so it can only reach workspaces you can already open.

## Related articles

- [AI Assistant](/docs/ai/ai-assistant)
- [Tools](/docs/ai/ai-tools)
- [Workspaces](/docs/build-and-extend/workspaces)
