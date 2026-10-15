---
id: de-estimatesquotesmonthcount
title: DE-EstimatesQuotesMonthCount
description: "Gets the count of estimate quotes for the given filters."
sidebar_label: EstimatesQuotesMonthCount
sidebar_position: 1
---

Gets the count of estimate quotes for the given filters.

## Endpoint

```
POST /api/v3/analytics/named-query/DE-EstimatesQuotesMonthCount/dynamic-execute
```

## Parameters

Send every parameter below in the `parameters` object of the request body. Use `null` for a parameter you do not want to set.

| Parameter | Used in |
|-----------|---------|
| EstimateId | `(@EstimateId is null or est.Oid = @EstimateId) and` |
| EstimateNumber | `(@EstimateNumber is null or est.Number = cast(@EstimateNumber as nvarchar))` |

## Output Columns

:::caution
Column metadata could not be extracted — the SQL statement could not be parsed automatically.
:::

## Source Tables

No table metadata detected.

## Access

| Role | Administrative |
|------|---------------|
| EstimateRead | No |

*Version: 4 · Category: Data Extraction · System: No*
