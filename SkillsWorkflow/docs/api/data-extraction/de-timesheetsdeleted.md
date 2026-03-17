---
id: de-timesheetsdeleted
title: DE-TimeSheetsDeleted
sidebar_label: TimeSheetsDeleted
sidebar_position: 1
---

Extracts time sheets that have been deleted.

## Endpoint

```
POST /api/v3/analytics/named-query/DE-TimeSheetsDeleted/dynamic-execute
```

## Parameters

This query has no parameters.

## Output Columns

| Column | Source Table | Source Column |
|--------|-------------|---------------|
| TimesheetId | — | Oid |
| ModifiedOnUtc | — | ModifiedOnUtc |

## Source Tables

| Table | Alias | Join |
|-------|-------|------|
| TimesheetDeleted | tim | FROM |

*Version: 1 · Category: Data Extraction · System: No*
