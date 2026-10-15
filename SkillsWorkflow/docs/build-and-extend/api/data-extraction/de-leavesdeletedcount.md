---
id: de-leavesdeletedcount
title: DE-LeavesDeletedCount
description: "Gets the count of deleted leaves for the filters provided."
sidebar_label: LeavesDeletedCount
sidebar_position: 1
---

Gets the count of deleted leaves for the filters provided.

## Endpoint

```
POST /api/v3/analytics/named-query/DE-LeavesDeletedCount/dynamic-execute
```

## Parameters

Send every parameter below in the `parameters` object of the request body. Use `null` for a parameter you do not want to set.

| Parameter | Used in |
|-----------|---------|
| ModifiedFrom | `where (@ModifiedFrom is null or lev.ModifiedOnUtc >= @ModifiedFrom)` |

## Output Columns

| Column | Source Table | Source Column |
|--------|-------------|---------------|
| Count | — | (expression) |

## Source Tables

| Table | Alias | Join |
|-------|-------|------|
| LeaveDeleted | lev | FROM |

## Access

| Role | Administrative |
|------|---------------|
| LeaveRead | No |

*Version: 3 · Category: Data Extraction · System: No*
