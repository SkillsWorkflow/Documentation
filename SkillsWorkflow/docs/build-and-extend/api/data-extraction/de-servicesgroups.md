---
id: de-servicesgroups
title: DE-ServicesGroups
sidebar_label: ServicesGroups
sidebar_position: 1
---

Extracts the services groups.

## Endpoint

```
POST /api/v3/analytics/named-query/DE-ServicesGroups/dynamic-execute
```

## Parameters

This query has no parameters.

## Output Columns

| Column | Source Table | Source Column |
|--------|-------------|---------------|
| Oid | ag | Oid |
| ServiceGroupId | ag | Oid |
| ServiceGroup | ag | Name |
| Company | c | Name |
| CompanyId | c | Oid |
| CompanyHasImage | c | HasImage |

## Source Tables

| Table | Alias | Join |
|-------|-------|------|
| ArticleGroup | ag | FROM |
| Company | c | JOIN |

*Version: 2 · Category: Data Extraction · System: Yes*
