---
id: de-brands
title: DE-Brands
sidebar_label: Brands
sidebar_position: 1
---

Extracts the list of brands.

## Endpoint

```
POST /api/v3/analytics/named-query/DE-Brands/dynamic-execute
```

## Parameters

This query has no parameters.

## Output Columns

| Column | Source Table | Source Column |
|--------|-------------|---------------|
| ClientId | cli | Id |
| Client | cli | Name |
| BrandId | brd | Oid |
| Brand | brd | Name |
| ModifiedOn | brd | ModifiedOn |

## Source Tables

| Table | Alias | Join |
|-------|-------|------|
| Brand | brd | FROM |
| ClientLookup | cli | JOIN |

*Version: 4 · Category: Data Extraction · System: No*
