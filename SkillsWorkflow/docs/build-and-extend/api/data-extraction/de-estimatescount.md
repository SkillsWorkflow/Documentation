---
id: de-estimatescount
title: DE-EstimatesCount
description: "Gets the count of estimates for the given filters."
sidebar_label: EstimatesCount
sidebar_position: 1
---

Gets the count of estimates for the given filters.

## Endpoint

```
POST /api/v3/analytics/named-query/DE-EstimatesCount/dynamic-execute
```

## Parameters

Send every parameter below in the `parameters` object of the request body. Use `null` for a parameter you do not want to set.

| Parameter | Used in |
|-----------|---------|
| ModifiedFrom | `(@ModifiedFrom is null or est.ModifiedOnUtc >= @ModifiedFrom) and` |
| EstimateId | `(@EstimateId is null or est.Oid = @EstimateId) and` |
| EstimateNumber | `(@EstimateNumber is null or est.Number = @EstimateNumber)` |

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

## Access

| Role | Administrative |
|------|---------------|
| EstimateRead | No |

*Version: 3 · Category: Data Extraction · System: No*
