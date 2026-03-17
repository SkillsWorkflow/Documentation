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
| JobId | dw | DocumentOid |
| TimesheetId | dwt | Timesheet |
| UserIs | usr | Id |
| User | usr | Name |
| ClientId | cli | Oid |
| Client | cli | Name |
| ProjectId | prj | Oid |
| Project | — | — |
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

*Version: 1 · Category: Data Extraction · System: No*
