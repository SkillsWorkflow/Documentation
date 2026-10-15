---
id: de-timesheetsdeleted
title: DE-TimeSheetsDeleted
description: "Extracts time sheets that have been deleted."
sidebar_label: TimeSheetsDeleted
sidebar_position: 1
---

Extracts time sheets that have been deleted.

## Endpoint

```
POST /api/v3/analytics/named-query/DE-TimeSheetsDeleted/dynamic-execute
```

## Parameters

Send every parameter below in the `parameters` object of the request body. Use `null` for a parameter you do not want to set.

| Parameter | Used in |
|-----------|---------|
| ModifiedFrom | `where (@ModifiedFrom is null or tim.ModifiedOnUtc >= @ModifiedFrom)` |

## Output Columns

| Column | Source Table | Source Column |
|--------|-------------|---------------|
| TimesheetId | — | Oid |
| ModifiedOnUtc | — | ModifiedOnUtc |

## Source Tables

| Table | Alias | Join |
|-------|-------|------|
| TimesheetDeleted | tim | FROM |

## Access

| Role | Administrative |
|------|---------------|
| TimesheetRead | No |

*Version: 3 · Category: Data Extraction · System: No*
