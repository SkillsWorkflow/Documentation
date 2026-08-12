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

This query has no parameters.

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

*Version: 1 · Category: Data Extraction · System: No*
