---
id: resource-scheduler
title: Resource Scheduler
description: "Plan your team on a timeline: assign tasks by dragging them onto a person, book hours per day, read capacity, and see leaves, holidays and reservations alongside the work."
sidebar_label: Resource Scheduler
sidebar_position: 3
---

The Resource Scheduler puts your team on a timeline. Each row is a person, each bar is work booked against them, and the panel on the right holds the tasks still waiting for someone. You assign work by dragging it onto a row, adjust it by dragging or resizing the bar, and read each person's load from the capacity figures beside their name.

![img](/img/product/planning-and-scheduling/resource-scheduler/board.png)
<figcaption>The Resource Scheduler, with the resource column, the timeline and the tasks panel</figcaption>

## Reading the board

The resource column on the left carries each person's photo, name and typology, a utilization bar and a percentage. The board opens grouped by typology; the **Group By** button changes that.

Weekend and non-working columns are shaded, and stay shaded whichever zoom you are on.

A bar is coloured by the stage of its task, dimmed, with the full stage colour down its left edge. The **Color** entry in the ⋮ menu repaints them by user, project owner or creator instead.

What a bar can carry:

| Mark | Meaning |
|---|---|
| Client logo | The client the task belongs to. |
| `NEST0018CR001 - Storyboard` | The task's number and name. |
| A coloured gauge icon | Priority: green low, orange normal, red high. |
| A repeat icon in the header | At least one day on the bar is part of a recurring series. |
| A repeat icon inside a day cell | That day is a recurring occurrence. |
| A layers icon inside a day cell | That day holds more than one booking. |
| `03:00` in a day cell | Hours booked on that day. |
| A thin strip above each day | How full that day is against the person's required hours. |
| A purple pill | The project. |
| A grey pill | The work type. |

Bars also carry state. A **faded** bar is work whose hours are still booked on someone who is no longer assigned to it. A **hatched** bar was filtered out by a work-based filter. A **grey bar with a spinner** is being created, and a dimmed one is being saved.

### Kinds of bar

Not every bar is a task.

**Administrative bars** carry a briefcase icon, a name and a work type, and no task number. They are time booked against a work type rather than against client work, for things like production or training. Create one by dragging across empty space and choosing **Workload** without picking a task.

**Reservations** are flat bars with a bookmark icon, coloured by priority. They hold days for a person without pointing at any task.

**Leave, holidays and non-working days** are drawn alongside the work so absence is visible while you plan.

## Who and what appears

Rows are the active users you are set as Responsible for, plus your own. Someone with no team of their own still sees their own row and their own bookings.

Only deliverables marked **Plannable** can be planned here. That flag is set on the deliverable itself.

Work in the stages the workspace excludes never reaches the board. Out of the box those are `Cancelled`, `Draft` and `Closed`.

## Tasks mode and Workloads mode

The **Mode** entry in the ⋮ menu switches how the bars are drawn.

In **Tasks** mode a bar is a whole task on that person, from its first to its last day, with one cell per day for the hours booked. In **Workloads** mode a bar is a single booking, and moving it moves that booking alone.

Both modes accept the same gestures. Tasks mode is the one to use when you are placing work and shaping its span; Workloads mode when you are rebalancing hours that are already booked.

## Assign a task

1. Open the tasks panel on the right.
2. Find the task in **Unassigned** or **All Tasks**.
3. Drag it onto the person and the day you want.

The **Add Workload** editor opens with the task, the person and the day already filled in. Set the hours and save.

**Unassigned** lists plannable tasks in the visible window that nobody is booked on. **All Tasks** searches the whole plannable pool, including work already assigned to someone. The number beside the toggle counts the rows currently listed, and the search box filters whichever list is showing.

Each row shows the task's number and name, with its project and client underneath.

The list is bucketed by when the work is due:

| Group | Holds |
|---|---|
| **Delayed** | Tasks whose agreed date falls before the visible window. |
| A week's date | Tasks due in that week. |
| **Next** | Tasks due after the visible window. |
| **No Date** | Tasks with no agreed date. |

Double-clicking a row in the panel opens that task's preview rather than assigning it.

![img-box-shadow-sm](/img/product/planning-and-scheduling/resource-scheduler/tasks-panel.png)
<figcaption>The tasks panel</figcaption>

## Move, extend and copy work

Drag a bar sideways to move it to other dates. Drag it onto another row to hand the work to that person. Drag its left or right edge to lengthen or shorten it.

Hold **Shift** while dragging onto a second person to copy the booking to them and keep the original.

If a move or resize takes work outside the task's current dates, you are asked *Do you want to add the Task to the dragged date?* before those dates are stretched.

Narrowing a task's span asks before it clears hours that other people have booked outside the new range, and names them.

Moving a workload that several people share asks whether to apply the move to that one person or to everyone in the group.

## Book hours per day

Every task bar carries one cell per day it covers. Click a cell to open the workload editor for that day, then enter the hours. Days with hours booked show them as `hh:mm`.

A cell marked with a layers icon already holds more than one booking that day. The number shown is their total, and hovering lists each one with its hours, work type and start time.

## Create work on the board

Drag across empty space on a person's row. Where more than one kind is available, you are asked which to create:

![img](/img/product/planning-and-scheduling/resource-scheduler/new-event.png)
<figcaption>Choosing what to create</figcaption>

**Workload** opens the Add Workload editor on the dragged day, with that person already on it. Pick a task to book time against client work. Leave the task empty and pick a work type instead to book administrative time, which is what draws the briefcase bars.

**Task** opens the job create form with the dragged dates already filled in. Once the task is created the workload editor opens on it, and it is there that the hours are booked and the person is assigned. Cancel at that second step and the task still exists, waiting in the Unassigned list.

**Reservation** asks for a description, then for a priority of **Low**, **Medium** or **High**. It blocks the dragged days for that person without pointing at any task.

With only one kind available the drag goes straight to it and nothing is asked. Which kinds are offered depends on the workspace parameters and on your roles.

## The Add Workload editor

Every path that books time opens the same editor: the drop from the tasks panel, a click on a day cell, and the **Workload** drag-create.

![img](/img/product/planning-and-scheduling/resource-scheduler/add-workload.png)
<figcaption>Assign workloads</figcaption>

It does more than take a number of hours:

| It can | Effect |
|---|---|
| Book several people at once | The booking becomes a shared group. Moving it later asks whether the change applies to one person or to everyone in the group. |
| Book a range of days | The hours are spread across every day in the range rather than the single day you started from. |
| Repeat the booking | A recurring series with its own end date. Days in a series carry a repeat icon, and are edited and deleted as a series. |
| Set a work type | Required when there is no task. Optional on a task, where it appears as a grey pill on the bar. |
| Set hours per day, or a start and an end time | Start and end times only apply in Day view. Elsewhere the booking is hours against the day. |
| Carry a description | Shown when hovering the booking. |
| Move the task to another stage | The transition runs when you save, and the bar is repainted in the new stage's colour. |

When you edit a booking that covers several days, **Apply changes to** decides whether the edit hits the day you opened or every day on the bar.

## Right-click a bar

Right-clicking offers the actions that apply to what you clicked.

| Action | Effect |
|---|---|
| **Open** | Opens the task preview. |
| **Delete this day** | Removes the hours booked on the day under the pointer. |
| **Delete all days** | Removes every booking on the bar. |
| **Delete** | Removes the workload, or the whole series when it recurs. |
| **Unassign** | Removes the person from the task. |

Unassigning someone who has hours booked from today onwards asks whether to remove them. Answer **No** and the hours stay on the board, drawn faded with nobody assigned.

Double-click a bar to open the task preview. A reservation opens its own menu instead, where you can change its description or priority, or delete it.

## The toolbar

![img-box-shadow](/img/product/planning-and-scheduling/resource-scheduler/toolbar.png)
<figcaption>The scheduler toolbar</figcaption>

**Filter resources...** narrows the board. Its options are grouped by category. Resource, Company, Department, Typology, Responsible and Tags come from the people. Deliverable Tags, Stage, Project, Client and Task come from the work. A person-based filter hides rows; a work-based filter keeps the row and hatches the bars that do not match.

The funnel button filters by load: **All Users**, **Overbooked Only** (above 100%) or **Available Only** (100% or below).

**Group By** stacks rows under headings. The choices are None, Company, Department, Typology, Project, Task (by Date), Client, Stage, Agreed Date and Task (by Priority).

The date box sets the anchor of the visible window. Its arrows step one period back or forward, and its calendar picks any single day at any zoom.

Four buttons set the span:

| Zoom | Window |
|---|---|
| **Day** | One day, on an hour axis. |
| **Week** | Seven days from the first day of the week. |
| **Work week** | The same week with its weekend off the axis. |
| **Month** | 28 days, starting a week before the picked date. |

### More options

The ⋮ menu holds:

- **Mode**, switching between Tasks and Workloads.
- **Color**, painting bars by **Stage**, **User**, **Project Owner** or **Created By**.
- **Time format (12h / 24h)**, which changes the hour axis and the tooltips. Durations are never reformatted: 8.5 hours stays `08:30`.
- **Role**, which picks the assignment type stamped on the assignments and workloads you create here. It does not change what the board shows.
- **Show approved Leaves only.**, hiding leave still waiting for approval.
- **Contracted Time**, overlaying contracted hours from estimates. This entry is only offered to users with the `EstimateRead` role.
- **Show Tasks Panel** / **Hide Tasks Panel**, **Refresh** and **Export to Excel**.

When the window is too narrow for the whole toolbar, the zoom and capacity buttons move into this menu.

## Capacity and availability

Beside each name is a utilization bar and a percentage, green up to 100% and red above it. Daily capacity comes from the hours set on each user.

The capacity buttons choose the overlay drawn across the timeline:

| Overlay | Shows |
|---|---|
| **No capacity overlay** | Bars only. |
| **Capacity bar** | A utilization bar per day. |
| **Heatmap (%)** | Each day shaded by how full it is. |
| **Hours** | The hours booked on each day. |

Heatmap and Hours add a summary row above each person's bars. While either is on, **Expand all users** and **Collapse all users** appear on the toolbar, and clicking one summary row collapses that person alone.

Hovering a capacity cell reports the hours booked and free on that day, and the hours still free that week.

![img](/img/product/planning-and-scheduling/resource-scheduler/capacity.png)
<figcaption>The heatmap overlay, with a capacity tooltip open</figcaption>

## Leaves and holidays

Hovering a leave or a holiday shows its type and date, and its duration as **Half Day**, **Full Day** or as hours when the leave type is recorded in hours. Any description or motive appears underneath.

## Rules and behaviour

Leave, holiday and non-working-day bars cannot be moved or resized.

Recurring workloads cannot be dragged or resized. Edit them through the workload editor.

A workload cannot exceed 24 hours in a day, and a day that has reached the person's maximum daily hours refuses new ones.

You cannot add workloads to a task you are not assigned to.

When your company does not allow planning on weekends, Saturday and Sunday refuse new workloads.

Copying a task onto someone already assigned to it is refused.

Permissions apply to the gestures as well as the screens:

| Action | Role required |
|---|---|
| Change who a task is assigned to | `ExecutorAssignmentSave` |
| Change a task's dates by dragging or resizing | `DeliverableWrite` |
| Create a task from a drag | `DeliverableCreate` |
| Create a reservation | `ReservationCreate` |
| Edit or delete a reservation | `ReservationWrite` |
| See the Contracted Time overlay | `EstimateRead` |

## Configuration

The scheduler is a workspace, and its behaviour is set through the workspace's parameters. Values below are the ones it ships with.

| Parameter | Effect |
|---|---|
| `DefaultMode` | Starting mode, `tasks` or `workloads`. Ships as `workloads`. |
| `DefaultGroupBy` | Grouping applied before the user picks one. Ships as `typologyGroupName`. |
| `DefaultTeam` | Assignment type the Role menu starts on. Ships as `Executor`. |
| `WeekStartDay` | First day of the week, `0` for Sunday. Ships as `1`. |
| `HourFormat` | Starting clock, `12` or `24`. Ships as `24`. |
| `EntryTime` | Time of day stamped on a workload when the editor sends none. Ships as `09:00`. |
| `StagesToExclude` | Stages kept off the board. Ships as `Cancelled,Draft,Closed`. |
| `BusinessObjectTypes` | Types that can be planned from. Ships as `Job,Task,Deliverable`. |
| `ConfirmJobDateExtension` | Set to `0` to stretch task dates without asking. |
| `DragCreateWorkload`, `DragCreateTask`, `DragCreateReservation` | Set one to `0` to drop that option from the drag-create prompt. |
| `WorkloadEditorWorkspaceId` | The workspace opened as the workload editor. |

A user's own toolbar choices are remembered and take precedence over these defaults on their next visit.

## Related articles

- [Planned Time](/docs/product/planning-and-scheduling/resourcing/planned-hours)
- [Gantt](/docs/product/planning-and-scheduling/gantt)
- [Utilization Dashboard](/docs/product/dashboards-and-reporting/utilization-dashboard)
