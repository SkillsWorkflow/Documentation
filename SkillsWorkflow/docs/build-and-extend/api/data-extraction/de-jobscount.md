---
id: de-jobscount
title: DE-JobsCount
description: "Gets the count of jobs for the given filters."
sidebar_label: JobsCount
sidebar_position: 1
---

Gets the count of jobs for the given filters.

## Endpoint

```
POST /api/v3/analytics/named-query/DE-JobsCount/dynamic-execute
```

## Parameters

Send every parameter below in the `parameters` object of the request body. Use `null` for a parameter you do not want to set.

| Parameter | Used in |
|-----------|---------|
| ModifiedFrom | `(@ModifiedFrom is null or del.ModifiedOn >= @ModifiedFrom) and` |
| JobId | `(@JobId is null or job.Id = @JobId) and` |
| JobNumber | `(@JobNumber is null or job.Number = @JobNumber)` |

## Output Columns

| Column | Source Table | Source Column |
|--------|-------------|---------------|
| Count | — | (expression) |

## Source Tables

| Table | Alias | Join |
|-------|-------|------|
| JobLookup | job | FROM |
| Deliverable | del | LEFT JOIN |
| WorkflowState | wfs | JOIN |
| WorkflowStateType | wst | JOIN |

## Access

| Role | Administrative |
|------|---------------|
| DeliverableRead | No |

*Version: 3 · Category: Data Extraction · System: No*
