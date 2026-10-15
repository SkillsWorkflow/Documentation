---
id: de-leavesdeleted
title: DE-LeavesDeleted
description: "Extracts deleted leaves using the parameter ModifiedFrom to filter data on the ModifiedOn field."
sidebar_label: LeavesDeleted
sidebar_position: 1
---

Extracts deleted leaves using the parameter ModifiedFrom to filter data on the ModifiedOn field.

## Endpoint

```
POST /api/v3/analytics/named-query/DE-LeavesDeleted/dynamic-execute
```

## Parameters

Send every parameter below in the `parameters` object of the request body. Use `null` for a parameter you do not want to set.

| Parameter | Used in |
|-----------|---------|
| ModifiedFrom | `where (@ModifiedFrom is null or lev.ModifiedOnUtc >= @ModifiedFrom)` |

## Output Columns

| Column | Source Table | Source Column |
|--------|-------------|---------------|
| LeaveId | — | Oid |
| ModifiedOnUtc | — | ModifiedOnUtc |

## Source Tables

| Table | Alias | Join |
|-------|-------|------|
| LeaveDeleted | lev | FROM |

## Access

| Role | Administrative |
|------|---------------|
| LeaveRead | No |

*Version: 3 · Category: Data Extraction · System: No*
