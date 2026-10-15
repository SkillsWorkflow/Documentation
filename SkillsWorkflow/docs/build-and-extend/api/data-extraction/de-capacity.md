---
id: de-capacity
title: DE-Capacity
description: "Extracts capacity of the users considering their working days, holidays, vacations, and time per day they have to input."
sidebar_label: Capacity
sidebar_position: 1
---

Extracts capacity of the users considering their working days, holidays, vacations, and time per day they have to input. It also considers if the user is inactive.

## Endpoint

```
POST /api/v3/analytics/named-query/DE-Capacity/dynamic-execute
```

## Parameters

This query has no parameters.

## Output Columns

| Column | Source Table | Source Column |
|--------|-------------|---------------|
| DocumentOid | — | DocumentOid |
| UserId | — | UserId |
| User | — | User |
| UserHasImage | — | UserHasImage |
| IsActive | — | IsActive |
| ResponsibleIds | — | ResponsibleIds |
| Responsibles | — | Responsibles |
| ResponsibleHasImages | — | ResponsibleHasImages |
| DepartmentId | — | DepartmentId |
| Department | — | Department |
| DivisionId | — | DivisionId |
| Division | — | Division |
| CompanyId | — | CompanyId |
| Company | — | Company |
| CompanyHasImage | — | CompanyHasImage |
| Day | — | Day |
| RequiredHours | — | RequiredHours |
| IsPlannable | — | IsPlannable |
| TypologyId | — | TypologyId |
| Typology | — | Typology |
| TypologyGroupId | — | TypologyGroupId |
| TypologyGroup | — | TypologyGroup |
| IsWorkingDay | — | IsWorkingDay |
| IsHoliday | — | IsHoliday |
| Holiday | — | Holiday |
| LeaveHours | — | LeaveHours |
| WorkloadHours | — | WorkloadHours |
| WorkingCapacityHours | — | iif(...) |
| CapacityHours | — | iif(...) |
| OverAllocatedHours | — | iif(...) |

## Source Tables

| Table | Alias | Join |
|-------|-------|------|
| dat | — | FROM |

## Access

| Role | Administrative |
|------|---------------|
| UserRead | No |

*Version: 4 · Category: Data Extraction · System: No*
