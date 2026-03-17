---
id: de-leavesdeleted
title: DE-LeavesDeleted
sidebar_label: LeavesDeleted
sidebar_position: 1
---

Extracts deleted leaves using the parameter ModifiedFrom to filter data on the ModifiedOn field.

## Endpoint

```
POST /api/v3/analytics/named-query/DE-LeavesDeleted/dynamic-execute
```

## Parameters

This query has no parameters.

## Output Columns

| Column | Source Table | Source Column |
|--------|-------------|---------------|
| LeaveId | — | Oid |
| ModifiedOnUtc | — | ModifiedOnUtc |

## Source Tables

| Table | Alias | Join |
|-------|-------|------|
| LeaveDeleted | lev | FROM |

*Version: 1 · Category: Data Extraction · System: No*
