---
id: de-worktypes
title: DE-WorkTypes
sidebar_label: WorkTypes
sidebar_position: 1
---

Extracts the work types list.

## Endpoint

```
POST /api/v3/analytics/named-query/DE-WorkTypes/dynamic-execute
```

## Parameters

This query has no parameters.

## Output Columns

| Column | Source Table | Source Column |
|--------|-------------|---------------|
| WorkTypeId | wrk | Oid |
| WorkType | wrk | Name |
| CompanyId | com | Oid |
| Company | com | Name |

## Source Tables

| Table | Alias | Join |
|-------|-------|------|
| WorkType | wrk | FROM |
| Company | com | LEFT JOIN |

*Version: 4 · Category: Data Extraction · System: No*
