---
id: index
title: Gantt
description: "Selecting rows in the Skills Workflow Gantt, duplicating jobs, and editing several jobs at once with Bulk action."
sidebar_label: Gantt
sidebar_position: 1
---

# Gantt

The Gantt shows a project's jobs on a timeline, with the job hierarchy in a grid on the left. This page covers how to work with the rows of that grid: selecting them, duplicating jobs, and changing several jobs in one operation.

For the end-to-end walkthrough of building a schedule — creating parent and child jobs, dependencies, dates and % done — see [Gantt Chart](../../university/projects%20management/gantt-chart.md) in University.

## Availability

The Gantt is provided by a workspace. What is described here applies to the Gantt view configured in a workspace, and the toolbar buttons are shown only when that workspace enables the Gantt toolbar.

The two row actions have their own requirements:

- **Duplicate** requires permission to create jobs.
- **Bulk action** requires permission to edit jobs, and the job must be configured for bulk editing — the same configuration that provides the Bulk action button in list views.

When a requirement is not met, the button is not shown at all rather than shown disabled.

## Selecting rows

The first column of the Gantt grid is a selection column, matching the selection column used in Skills Workflow lists. Its checkboxes appear when you hover a row and stay visible while a row is selected.

- Tick a row's checkbox to select it.
- Tick the checkbox in the column header to select every row.
- Ticking a parent row also selects everything underneath it.
- Clicking a row's WBS cell selects the whole row. Hold **Ctrl** (**Cmd** on macOS) to add or remove a row from the selection, or **Shift** to extend the selection from the last row you clicked.

Clicking any other cell selects that cell instead of the row, so copying and pasting values between cells keeps working as it does in a spreadsheet.

![img-box-shadow](/img/gantt/01-row-selection.png)
<figcaption>Selection column with a parent row and its children selected</figcaption>

## Duplicating jobs

**Duplicate** creates a copy of every selected row.

1. Select the rows you want to copy.
2. Click **Duplicate** in the toolbar.
3. Review the copies, then click **Save**.

The copies are placed next to the rows they were copied from and start in Draft. They exist only in the view until you save: clicking **Save** is what creates them as jobs.

A duplicated parent brings its whole structure with it, so selecting a parent together with its children still produces one copy of that branch, not one copy per row.

Duplicate does not affect what you have copied with **Copy row**, so you can duplicate rows without losing the clipboard.

![img-box-shadow](/img/gantt/02-duplicate.png)
<figcaption>Duplicated rows created in Draft below the originals</figcaption>

## Editing several jobs at once

**Bulk action** opens the same bulk editing dialog used in list views, applied to the rows selected in the Gantt.

1. Save any pending changes in the Gantt.
2. Select the rows you want to change.
3. Click **Bulk action** in the toolbar.
4. Choose the field and the value to apply, then run the operation.

Bulk action writes directly to the selected jobs. When it finishes, the Gantt reloads so the grid shows the saved result.

![img-box-shadow-popup](/img/gantt/03-bulk-action.png)
<figcaption>Bulk action applied to the rows selected in the Gantt</figcaption>

## Rules and behaviour

- **Save your work before a bulk action.** Because a bulk action reloads the Gantt when it closes, it cannot run while there are unsaved changes. Skills Workflow shows a message asking you to save first.
- **Only saved jobs can be bulk edited.** Rows created in the Gantt but not yet saved have no job behind them yet, so they are left out of the operation and a message tells you they were skipped. Save first if you want to include them.
- **Bulk actions are limited to a maximum number of jobs at a time.** Selecting more than the configured limit shows a message instead of running the operation.
- **Duplicated rows are not jobs until you save.** Leaving the Gantt before saving discards them, and Skills Workflow warns you when you navigate away with unsaved changes.
- **Save is enabled only when there is something to save**, so it cannot be pressed with no effect.

## Configuration

The Gantt toolbar and its row actions are configured on the Gantt component in the workspace:

- The toolbar, including **Duplicate** and **Bulk action**, is shown only when the Gantt component is configured to show it.
- The maximum number of jobs a single bulk action may cover is configurable on the component. When it is not set, the limit is 100 jobs.
- Permission to create and to bulk edit follows the job's own configuration, and each can also be turned off for a specific Gantt through the component's parameters.

## Related articles

- [Gantt Chart](../../university/projects%20management/gantt-chart.md) — building a project schedule in the Gantt.
