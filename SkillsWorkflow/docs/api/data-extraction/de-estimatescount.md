---
id: de-estimatescount
title: DE-EstimatesCount
sidebar_label: EstimatesCount
sidebar_position: 1
---

Gets the count of estimates for the given filters.

## Endpoint

```
POST /api/v3/analytics/named-query/DE-EstimatesCount/dynamic-execute
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
| Estimate | est | FROM |
| WorkflowState | wfs | JOIN |
| WorkflowStateType | wst | JOIN |

*Version: 1 · Category: Data Extraction · System: No*
