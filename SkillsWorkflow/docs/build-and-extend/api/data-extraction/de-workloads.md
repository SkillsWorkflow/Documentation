---
id: de-workloads
title: DE-Workloads
sidebar_label: Workloads
sidebar_position: 1
---

Extracts data from Workloads.

## Endpoint

```
POST /api/v3/analytics/named-query/DE-Workloads/dynamic-execute
```

## Parameters

This query has no parameters.

## Output Columns

| Column | Source Table | Source Column |
|--------|-------------|---------------|
| WorkloadId | dw | Oid |
| DayUtc | dw | DayUtc |
| Workload | dw | Workload |
| TimesheetId | dwt | Timesheet |
| UserId | usr | Id |
| User | usr | Name |
| ClientId | cli | Oid |
| Client | cli | Name |
| ProjectId | prj | Oid |
| Project | — | (expression) |
| JobId | job | Oid |
| Job | job | NameAndExternalId |

## Source Tables

| Table | Alias | Join |
|-------|-------|------|
| DailyWorkload | dw | FROM |
| DailyWorkloadTimesheet | dwt | LEFT JOIN |
| AssignmentType | ast | JOIN |
| UserLookup | usr | JOIN |
| Deliverable | job | JOIN |
| Project | prj | JOIN |
| CommercialClient | cli | JOIN |

## Access

| Role | Administrative |
|------|---------------|
| PlannedHoursRead | No |

*Version: 3 · Category: Data Extraction · System: No*
