---
id: de-timesheetscount
title: DE-TimeSheetsCount
description: "Gets the count of time sheets for the filters provided."
sidebar_label: TimeSheetsCount
sidebar_position: 1
---

Gets the count of time sheets for the filters provided.

## Endpoint

```
POST /api/v3/analytics/named-query/DE-TimeSheetsCount/dynamic-execute
```

## Parameters

Send every parameter below in the `parameters` object of the request body. Use `null` for a parameter you do not want to set.

| Parameter | Used in |
|-----------|---------|
| From | `where (@From is null or tim.Date >= @From) and` |
| To | `(@To is null or tim.Date <= @To) and` |
| ModifiedFrom | `(@ModifiedFrom is null or tim.ModifiedOn >= @ModifiedFrom) and` |
| ProjectId | `(@ProjectId is null or prj.Id = @ProjectId) and` |
| ProjectNumber | `(@ProjectNumber is null or prj.Number = cast(@ProjectNumber as nvarchar))` |

## Output Columns

:::caution
Column metadata could not be extracted — the SQL statement could not be parsed automatically.
:::

## Source Tables

No table metadata detected.

## Access

| Role | Administrative |
|------|---------------|
| TimesheetRead | No |

*Version: 3 · Category: Data Extraction · System: No*
