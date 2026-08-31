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

This query has no parameters.

## Output Columns

| Column | Source Table | Source Column |
|--------|-------------|---------------|
| Count | — | (expression) |

## Source Tables

| Table | Alias | Join |
|-------|-------|------|
| TimesheetDeleted | tim | FROM |

*Version: 1 · Category: Data Extraction · System: No*
