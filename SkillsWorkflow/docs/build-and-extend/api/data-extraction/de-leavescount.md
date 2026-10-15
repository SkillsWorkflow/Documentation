---
id: de-leavescount
title: DE-LeavesCount
description: "Send every parameter below in the parameters object of the request body."
sidebar_label: LeavesCount
sidebar_position: 1
---

## Endpoint

```
POST /api/v3/analytics/named-query/DE-LeavesCount/dynamic-execute
```

## Parameters

Send every parameter below in the `parameters` object of the request body. Use `null` for a parameter you do not want to set.

| Parameter | Used in |
|-----------|---------|
| From | `(@From is null or lev.Day >= @From) and` |
| To | `(@To is null or lev.Day <= @To) and` |
| ModifiedFrom | `(@ModifiedFrom is null or lev.ModifiedOn >= @ModifiedFrom)` |

## Output Columns

| Column | Source Table | Source Column |
|--------|-------------|---------------|
| Count | — | (expression) |

## Source Tables

| Table | Alias | Join |
|-------|-------|------|
| UserVacation | lev | FROM |

## Access

| Role | Administrative |
|------|---------------|
| LeaveRead | No |

*Version: 3 · Category: Data Extraction · System: No*
