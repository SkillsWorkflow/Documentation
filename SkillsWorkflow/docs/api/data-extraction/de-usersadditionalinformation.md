---
id: de-usersadditionalinformation
title: DE-UsersAdditionalInformation
sidebar_label: UsersAdditionalInformation
sidebar_position: 1
---

## Endpoint

```
POST /api/v3/analytics/named-query/DE-UsersAdditionalInformation/dynamic-execute
```

## Parameters

This query has no parameters.

## Output Columns

| Column | Source Table | Source Column |
|--------|-------------|---------------|
| UserId | usr | Oid |
| User | usr | Name |
| * | puf | * |

## Source Tables

| Table | Alias | Join |
|-------|-------|------|
| User | usr | FROM |
| User_UserFields | puf | LEFT JOIN |

*Version: 2 · Category: Data Extraction · System: No*
