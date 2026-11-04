---
id: gantt
title: Gantt
description: "The Gantt shows jobs on a timeline, for a whole project or for one job and the jobs under it: building the schedule, copying rows, duplicating jobs and editing several at once."
sidebar_label: Gantt
sidebar_position: 1
---
The Gantt shows jobs on a timeline, with the job hierarchy in a grid on the left and the bars on the right. Open it from the **GANTT** tab of a project to plan the whole project, or from the **GANTT** tab of a job to plan that job and the jobs under it.

![img-box-shadow](/img/product/planning-and-scheduling/gantt/gantt-project.png)
<figcaption>The Gantt of a project</figcaption>

## Availability

The Gantt comes from a workspace. The **GANTT** tab appears on projects and on jobs where that workspace is installed, and its toolbar is off unless the workspace turns it on.

Duplicate needs permission to create jobs. Bulk action needs permission to edit jobs, and the job must already be set up for bulk editing, as it is for list views. A button whose requirement is not met is hidden.

## The toolbar

![img-box-shadow-sm](/img/product/planning-and-scheduling/gantt/gantt-toolbar.png)
<figcaption>The Gantt toolbar</figcaption>

From left to right:

| Control | What it does |
|---|---|
| **Select job type...** | The department and job type of the next job you add. |
| **Add** and **Remove** | Add a job, or remove the selected one. |
| **Outdent selected** and **Indent selected** | Move the selected rows one level up or down the hierarchy. |
| **Duplicate** and **Bulk action** | Act on the selected rows. See the sections below. |
| **Undo** and **Redo** | Step back or forward through your unsaved changes. |
| **Save** | Saves every change. It stays disabled until there is something to save. |
| **Column chooser** | Shows or hides columns. |
| **Filters** | Shows a filter field under each column header. |
| **Expand tasks** and **Collapse tasks** | Open or close every parent row. |
| **Critical path** | Highlights the critical path. |
| **Previous period**, **Today** and **Next period** | Move the timeline. |
| **Zoom out**, **Zoom in** and **Zoom to fit** | Change the timeline scale. **Zoom to fit** shows every job at once. |
| **Reset layout** | Restores the default columns and widths. |

## Adding jobs

1. Pick the department and job type in **Select job type...**.
2. Click **Add**.
3. Rename the new row and set its dates in the grid, or drag its bar.
4. Click **Save**.

New rows are saved as jobs in Draft.

To add a job under a specific row, right-click the row and choose **Add...** > **Subtask**.

## Planning the jobs

Change dates in the grid, or drag a bar along the timeline to move it and drag its ends to make it longer or shorter. A parent row spans the jobs under it.

The bar colour follows the job's stage. Fill in **Predecessor** or **Successor** to link jobs that depend on each other.

Clicking a row's WBS cell opens the job preview.

## Selecting rows

The first column of the grid holds the selection checkboxes. They appear when you hover a row, and stay while the row is selected.

Tick the checkbox in the column header to select every row. Ticking a parent selects everything under it.

Clicking a row's WBS cell also selects the whole row. Ctrl (Cmd on macOS) adds or removes one row. Shift extends from the last row you clicked. Clicking any other cell selects the cell, not the row.

![img-box-shadow](/img/product/planning-and-scheduling/gantt/01-row-selection.png)
<figcaption>A parent row ticked, with the rows under it selected too</figcaption>

## Copying and pasting

Right-click a selected row to get **Copy row** and **Paste row**. **Paste row** inserts the copied rows after the row you right-clicked, at the same level, as drafts. Click **Save** to create them.

![img-box-shadow-sm](/img/product/planning-and-scheduling/gantt/gantt-row-menu.png)
<figcaption>Copy row and Paste row on a selected row</figcaption>

Right-click a cell outside a row selection to get **Copy** and **Paste**, which copy the cell's value.

## Duplicating jobs

Select the rows and click **Duplicate**. The copies appear next to the originals in Draft, and become jobs when you click **Save**.

A duplicated parent brings its branch with it, so selecting a parent together with its children still produces one copy of the branch.

Duplicate leaves the **Copy row** clipboard untouched.

![img-box-shadow](/img/product/planning-and-scheduling/gantt/02-duplicate.png)
<figcaption>A duplicated row created in Draft below the original</figcaption>

## Editing several jobs at once

**Bulk action** opens the bulk editing dialog on the selected rows. It is the same dialog used in list views.

Save the Gantt first. The dialog writes to the jobs directly, and the Gantt reloads when it closes.

![img-box-shadow-popup](/img/product/planning-and-scheduling/gantt/03-bulk-action.png)
<figcaption>Bulk action applied to the rows selected in the Gantt</figcaption>

## Filtering

Click **Filters** and type in the field under a column header. The grid keeps the matching rows and the parents above them.

![img-box-shadow](/img/product/planning-and-scheduling/gantt/gantt-filter-bar.png)
<figcaption>The Name filter showing only the matching job</figcaption>

## The Gantt of a job

The **GANTT** tab of a job shows that job at the top, with every job under it. It has the same toolbar, menus and columns as the Gantt of a project.

![img-box-shadow](/img/product/planning-and-scheduling/gantt/gantt-job.png)
<figcaption>The Gantt opened on a job</figcaption>

Jobs you add or paste here go inside that job. The job at the top stays in place:

- It cannot be deleted or indented from its own Gantt.
- The rows directly under it cannot be outdented. Trying it shows *Tasks directly under this job cannot be outdented.*

Saved changes also appear in the project's Gantt.

## Rules and behaviour

With unsaved changes in the Gantt, a bulk action stops and Skills Workflow asks you to save.

Rows you have not saved yet have no job behind them. A bulk action skips them and tells you how it went.

One bulk action covers at most 100 jobs. Selecting more shows a message.

Unsaved rows are lost if you leave the Gantt without saving. Skills Workflow warns you before you navigate away.

## Configuration

On the Gantt component in the workspace:

- `showToolbar` shows the toolbar, including Duplicate and Bulk action.
- `bulkCapLimit` sets how many jobs one bulk action may cover. Without it the limit is 100.
- `allowCreate` and `allowBulk` turn either action off for this Gantt. They otherwise follow the job's own permissions.

## Related articles

- [Create a Project](/docs/product/projects-and-jobs/create-projects)
- [Create Jobs](/docs/product/projects-and-jobs/create-jobs)
- [Planned Time](/docs/product/planning-and-scheduling/resourcing/planned-hours)
