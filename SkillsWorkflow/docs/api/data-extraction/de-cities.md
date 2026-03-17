---
id: de-cities
title: DE-Cities
sidebar_label: Cities
sidebar_position: 1
---

Extracts all cities.

## Endpoint

```
POST /api/v3/analytics/named-query/DE-Cities/dynamic-execute
```

## Parameters

This query has no parameters.

## Output Columns

| Column | Source Table | Source Column |
|--------|-------------|---------------|
| CityId | cit | Oid |
| City | cit | Name |
| CountryId | con | Oid |
| Country | con | Name |

## Source Tables

| Table | Alias | Join |
|-------|-------|------|
| City | cit | FROM |
| Country | con | FROM |

*Version: 1 · Category: Data Extraction · System: No*
