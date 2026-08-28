---
id: index
title: Gantt
description: "Selecting rows in the Skills Workflow Gantt, duplicating jobs, and editing several jobs at once with Bulk action."
sidebar_label: Gantt
sidebar_position: 1
---

# Gantt

The Gantt shows a project's jobs on a timeline, with the job hierarchy in a grid on the left. Rows in that grid can be selected and acted on as a group: duplicated, or edited together with a bulk action.

To build a schedule from scratch, see [Gantt Chart](using-the-gantt.md) in University.

## Availability

The Gantt comes from a workspace, and its toolbar is off unless the workspace turns it on.

Duplicate needs permission to create jobs. Bulk action needs permission to edit jobs, and the job must already be set up for bulk editing, as it is for list views. A button whose requirement is not met is hidden.

## Selecting rows

The first column of the grid holds the selection checkboxes. They appear when you hover a row, and stay while the row is selected.

Tick the checkbox in the column header to select every row. Ticking a parent selects everything under it.

Clicking a row's WBS cell selects the whole row. Ctrl (Cmd on macOS) adds or removes one row. Shift extends from the last row you clicked. Clicking any other cell selects the cell, not the row.

![img-box-shadow](/img/gantt/01-row-selection.png)
<figcaption>Selection column with a parent row and its children selected</figcaption>

## Duplicating jobs

Select the rows and click **Duplicate**. The copies appear next to the originals in Draft, and become jobs when you click **Save**.

A duplicated parent brings its branch with it, so selecting a parent together with its children still produces one copy of the branch.

Duplicate leaves the **Copy row** clipboard untouched.

![img-box-shadow](/img/gantt/02-duplicate.png)
<figcaption>Duplicated rows created in Draft below the originals</figcaption>

## Editing several jobs at once

**Bulk action** opens the bulk editing dialog on the selected rows. It is the same dialog used in list views.

Save the Gantt first. The dialog writes to the jobs directly, and the Gantt reloads when it closes.

![img-box-shadow-popup](/img/gantt/03-bulk-action.png)
<figcaption>Bulk action applied to the rows selected in the Gantt</figcaption>

## Rules and behaviour

With unsaved changes in the Gantt, a bulk action stops and Skills Workflow asks you to save.

Rows you have not saved yet have no job behind them. A bulk action skips them and tells you how it went.

One bulk action covers at most 100 jobs. Selecting more shows a message.

Duplicated rows are lost if you leave the Gantt without saving. Skills Workflow warns you before you navigate away.

Save stays disabled until there is something to save.

## Configuration

On the Gantt component in the workspace:

- `showToolbar` shows the toolbar, including Duplicate and Bulk action.
- `bulkCapLimit` sets how many jobs one bulk action may cover. Without it the limit is 100.
- `allowCreate` and `allowBulk` turn either action off for this Gantt. They otherwise follow the job's own permissions.

## Related articles

- [Gantt Chart](using-the-gantt.md), building a project schedule in the Gantt.
