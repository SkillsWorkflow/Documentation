---
id:  scheduler-dashboard
title: Scheduler
sidebar_label: 12. Scheduler Dashboard
sidebar_position: 12
---

## Overview

The Scheduler module provides multiple scheduling views tailored to different planning needs:
- **Team Scheduler** – resource-centric planning across teams
- **My Scheduler** – personal workload and task planning
- **Daily Scheduler** – day-level operational scheduling

---

## Scheduler Feature Matrix

**Legend:**  
✅ Supported &nbsp;&nbsp; ❌ Not supported &nbsp;&nbsp; — Not applicable

| Category | Feature | Team Scheduler | My Scheduler | Daily Scheduler |
|--------|--------|---------------|--------------|-----------------|
| **Recurrences** | View Recurrence | ✅ | ✅ | ✅ |
|  | Create Recurrence | ✅ | ✅ | ❌ |
|  | Occurrence Exceptions | ❌ | ❌ | ❌ |
|  | Adjust Task Start / End | ✅ | ✅ | — |
| **Resources** | Side-by-side View | ✅ | ❌ | ✅ |
|  | Assign on Drag | ✅ | — | ✅ |
|  | Unassign on Remove | ❌ | — | ✅ |
|  | Name / Title / Department | ✅ | — | ✅ |
|  | Shift / Location | ✅ | — | ❌ |
|  | Role / Type | ✅ | — | ✅ |
|  | Tags / Skills | ✅ | — | ❌ |
|  | Filtering | ✅ | — | ✅ |
| **Event Types** | Task (Workload) | ✅ | ✅ | ✅ |
|  | Administrative | ✅ | ✅ | ❌ |
|  | Leaves | ✅ | ✅ | ✅ |
|  | Holidays | ✅ | ✅ | ✅ |
| **Timeline View** | Daily / Weekly / Monthly Scale | ✅ | — | ✅ |
|  | Show Task Bars | ❌ | — | ✅ |
|  | Working Time | ✅ | — | ❌ |
|  | Timezone Support | ✅ | — | ❌ |
| **Calendar View** | Work Week / Week Scale | ✅ | ✅ | — |
|  | Timezone Support | ✅ | — | ❌ |
| **Tasks List** | Create Task | ✅ | ❌ | ✅ |
|  | Client / Project / Deliverable | ✅ | ✅ | ✅ |
|  | Brand / Product | ❌ | ❌ | ✅ |
|  | Company / Department | ✅ | ✅ | ✅ |
|  | Additional Information | ✅ | ✅ | ❌ |
| **Workload / Task Card** | Title / Client / Project | ✅ | ✅ | ✅ |
|  | Work Type | ✅ | — | ✅ |
|  | Team | ✅ | ✅ | — |
|  | Priority | ✅ | ✅ | ❌ |
| **Popup Document Access** | Task | ✅ | ✅ | ✅ |
|  | Deliverable | ✅ | ✅ | ❌ |
|  | Project | ✅ | ✅ | ❌ |
| **Indicators** | Capacity | ✅ | ✅ | ✅ |
|  | Effort | ✅ | ✅ | ✅ |
|  | Timesheet | ✅ | ✅ | ❌ |
|  | Accumulated Workload | ✅ | — | ❌ |
| **Coloring** | Project | ✅ | ❌ | ✅ |
|  | Stage | ✅ | ✅ | ✅ |
|  | User | ✅ | — | ❌ |
| **Time Sheet** | Time Entry | — | ✅ | — |

---

## Notes

- **Popup Document Access** enables record drill-down by clicking timeline bars or grid elements.
- **Event Types** represent schedulable time blocks that impact availability and workload.
- Feature availability varies intentionally based on the scheduler context and target user.
