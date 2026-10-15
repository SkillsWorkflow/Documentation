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

Send every parameter below in the `parameters` object of the request body. Use `null` for a parameter you do not want to set.

| Parameter | Used in |
|-----------|---------|
| ModifiedFrom | `where (@ModifiedFrom is null or brd.ModifiedOn >= @ModifiedFrom)` |

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

## Access

| Role | Administrative |
|------|---------------|
| BrandRead | No |

*Version: 6 · Category: Data Extraction · System: No*
