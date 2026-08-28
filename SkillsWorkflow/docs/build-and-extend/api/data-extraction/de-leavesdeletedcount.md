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

This query has no parameters.

## Output Columns

| Column | Source Table | Source Column |
|--------|-------------|---------------|
| Count | — | (expression) |

## Source Tables

| Table | Alias | Join |
|-------|-------|------|
| LeaveDeleted | lev | FROM |

*Version: 1 · Category: Data Extraction · System: No*
