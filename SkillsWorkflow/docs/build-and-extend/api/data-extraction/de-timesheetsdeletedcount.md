---
id: de-timesheetsdeletedcount
title: DE-TimeSheetsDeletedCount
description: "Gets the count of deleted time sheet for the provided filters."
sidebar_label: TimeSheetsDeletedCount
sidebar_position: 1
---

Gets the count of deleted time sheet for the provided filters.

## Endpoint

```
POST /api/v3/analytics/named-query/DE-TimeSheetsDeletedCount/dynamic-execute
```

## Parameters

Send every parameter below in the `parameters` object of the request body. Use `null` for a parameter you do not want to set.

| Parameter | Used in |
|-----------|---------|
| ModifiedFrom | `where (@ModifiedFrom is null or tim.ModifiedOnUtc >= @ModifiedFrom)` |

## Output Columns

| Column | Source Table | Source Column |
|--------|-------------|---------------|
| Count | — | (expression) |

## Source Tables

| Table | Alias | Join |
|-------|-------|------|
| TimesheetDeleted | tim | FROM |

## Access

| Role | Administrative |
|------|---------------|
| TimesheetRead | No |

*Version: 3 · Category: Data Extraction · System: No*
