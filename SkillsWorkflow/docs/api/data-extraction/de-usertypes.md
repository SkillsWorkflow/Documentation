---
id: de-usertypes
title: DE-UserTypes
sidebar_label: UserTypes
sidebar_position: 1
---

Extracts the user types.

## Endpoint

```
POST /api/v3/analytics/named-query/DE-UserTypes/dynamic-execute
```

## Parameters

This query has no parameters.

## Output Columns

| Column | Source Table | Source Column |
|--------|-------------|---------------|
| UserTypeId | ust | Oid |
| UserType | ust | Name |

## Source Tables

| Table | Alias | Join |
|-------|-------|------|
| UserType | ust | FROM |

*Version: 1 · Category: Data Extraction · System: No*
