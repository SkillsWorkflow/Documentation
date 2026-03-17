---
id: de-countries
title: DE-Countries
sidebar_label: Countries
sidebar_position: 1
---

Extracts the list of countries.

## Endpoint

```
POST /api/v3/analytics/named-query/DE-Countries/dynamic-execute
```

## Parameters

This query has no parameters.

## Output Columns

| Column | Source Table | Source Column |
|--------|-------------|---------------|
| CountryId | cou | Oid |
| Country | cou | Name |

## Source Tables

| Table | Alias | Join |
|-------|-------|------|
| Country | cou | FROM |

*Version: 3 · Category: Data Extraction · System: No*
