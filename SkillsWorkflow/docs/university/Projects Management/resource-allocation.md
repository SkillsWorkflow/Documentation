---
id:  resource-allocation
title: Resource Allocation
sidebar_label: 4. Resource Allocation
sidebar_position: 4
---

## Overview

The Resource Allocation module provides multiple scheduling views tailored to different planning needs:
- **Team Scheduler** – resource-centric planning across teams
- **My Scheduler** – personal workload and task planning
- **Daily Scheduler** – day-level operational scheduling

---

## Feature Matrix

**Legend:**  
<i class="fas fa-check"></i> Supported &nbsp;&nbsp; <i class="fas fa-times"></i> Not supported &nbsp;&nbsp; <i class="fas fa-minus"></i> Not applicable

| Category | Feature | Team Scheduler | My Scheduler | Daily Scheduler |
|--------|--------|---------------|--------------|-----------------|
| **Recurrences** | View Recurrence | <i class="fas fa-check"></i> | <i class="fas fa-check"></i> | <i class="fas fa-check"></i> |
|  | Create Recurrence | <i class="fas fa-check"></i> | <i class="fas fa-check"></i> | <i class="fas fa-times"></i> |
|  | Occurrence Exceptions | <i class="fas fa-times"></i> | <i class="fas fa-times"></i> | <i class="fas fa-times"></i> |
|  | Adjust Task Start / End | <i class="fas fa-check"></i> | <i class="fas fa-check"></i> | <i class="fas fa-minus"></i> |
| **Resources** | Side-by-side View | <i class="fas fa-check"></i> | <i class="fas fa-times"></i> | <i class="fas fa-check"></i> |
|  | Assign on Drag | <i class="fas fa-check"></i> | <i class="fas fa-minus"></i> | <i class="fas fa-check"></i> |
|  | Unassign on Remove | <i class="fas fa-times"></i> | <i class="fas fa-minus"></i> | <i class="fas fa-check"></i> |
|  | Name / Title / Department | <i class="fas fa-check"></i> | <i class="fas fa-minus"></i> | <i class="fas fa-check"></i> |
|  | Shift / Location | <i class="fas fa-check"></i> | <i class="fas fa-minus"></i> | <i class="fas fa-times"></i> |
|  | Role / Type | <i class="fas fa-check"></i> | <i class="fas fa-minus"></i> | <i class="fas fa-check"></i> |
|  | Tags / Skills | <i class="fas fa-check"></i> | <i class="fas fa-minus"></i> | <i class="fas fa-times"></i> |
|  | Filtering | <i class="fas fa-check"></i> | <i class="fas fa-minus"></i> | <i class="fas fa-check"></i> |
| **Event Types** | Task (Workload) | <i class="fas fa-check"></i> | <i class="fas fa-check"></i> | <i class="fas fa-check"></i> |
|  | Administrative | <i class="fas fa-check"></i> | <i class="fas fa-check"></i> | <i class="fas fa-times"></i> |
|  | Leaves | <i class="fas fa-check"></i> | <i class="fas fa-check"></i> | <i class="fas fa-check"></i> |
|  | Holidays | <i class="fas fa-check"></i> | <i class="fas fa-check"></i> | <i class="fas fa-check"></i> |
| **Timeline View** | Daily / Weekly / Monthly Scale | <i class="fas fa-check"></i> | <i class="fas fa-minus"></i> | <i class="fas fa-check"></i> |
|  | Show Task Bars | <i class="fas fa-times"></i> | <i class="fas fa-minus"></i> | <i class="fas fa-check"></i> |
|  | Working Time | <i class="fas fa-check"></i> | <i class="fas fa-minus"></i> | <i class="fas fa-times"></i> |
|  | Timezone Support | <i class="fas fa-check"></i> | <i class="fas fa-minus"></i> | <i class="fas fa-times"></i> |
| **Calendar View** | Work Week / Week Scale | <i class="fas fa-check"></i> | <i class="fas fa-check"></i> | <i class="fas fa-minus"></i> |
|  | Timezone Support | <i class="fas fa-check"></i> | <i class="fas fa-minus"></i> | <i class="fas fa-times"></i> |
| **Tasks List** | Create Task | <i class="fas fa-check"></i> | <i class="fas fa-times"></i> | <i class="fas fa-check"></i> |
|  | Client / Project / Deliverable | <i class="fas fa-check"></i> | <i class="fas fa-check"></i> | <i class="fas fa-check"></i> |
|  | Brand / Product | <i class="fas fa-times"></i> | <i class="fas fa-times"></i> | <i class="fas fa-check"></i> |
|  | Company / Department | <i class="fas fa-check"></i> | <i class="fas fa-check"></i> | <i class="fas fa-check"></i> |
|  | Additional Information | <i class="fas fa-check"></i> | <i class="fas fa-check"></i> | <i class="fas fa-times"></i> |
| **Workload / Task Card** | Title / Client / Project | <i class="fas fa-check"></i> | <i class="fas fa-check"></i> | <i class="fas fa-check"></i> |
|  | Work Type | <i class="fas fa-check"></i> | <i class="fas fa-minus"></i> | <i class="fas fa-check"></i> |
|  | Team | <i class="fas fa-check"></i> | <i class="fas fa-check"></i> | <i class="fas fa-minus"></i> |
|  | Priority | <i class="fas fa-check"></i> | <i class="fas fa-check"></i> | <i class="fas fa-times"></i> |
| **Popup Document Access** | Task | <i class="fas fa-check"></i> | <i class="fas fa-check"></i> | <i class="fas fa-check"></i> |
|  | Deliverable | <i class="fas fa-check"></i> | <i class="fas fa-check"></i> | <i class="fas fa-times"></i> |
|  | Project | <i class="fas fa-check"></i> | <i class="fas fa-check"></i> | <i class="fas fa-times"></i> |
| **Indicators** | Capacity | <i class="fas fa-check"></i> | <i class="fas fa-check"></i> | <i class="fas fa-check"></i> |
|  | Effort | <i class="fas fa-check"></i> | <i class="fas fa-check"></i> | <i class="fas fa-check"></i> |
|  | Timesheet | <i class="fas fa-check"></i> | <i class="fas fa-check"></i> | <i class="fas fa-times"></i> |
|  | Accumulated Workload | <i class="fas fa-check"></i> | <i class="fas fa-minus"></i> | <i class="fas fa-times"></i> |
| **Coloring** | Project | <i class="fas fa-check"></i> | <i class="fas fa-times"></i> | <i class="fas fa-check"></i> |
|  | Stage | <i class="fas fa-check"></i> | <i class="fas fa-check"></i> | <i class="fas fa-check"></i> |
|  | User | <i class="fas fa-check"></i> | <i class="fas fa-minus"></i> | <i class="fas fa-times"></i> |
| **Time Sheet** | Time Entry | <i class="fas fa-minus"></i> | <i class="fas fa-check"></i> | <i class="fas fa-minus"></i> |

---

## Notes

- **Popup Document Access** enables record drill-down by clicking timeline bars or grid elements.
- **Event Types** represent schedulable time blocks that impact availability and workload.
- Feature availability varies intentionally based on the scheduler context and target user.