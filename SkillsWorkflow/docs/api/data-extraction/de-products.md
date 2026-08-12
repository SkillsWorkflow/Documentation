---
id: de-products
title: DE-Products
description: "Extracts the list of products."
sidebar_label: Products
sidebar_position: 1
---

Extracts the list of products.

## Endpoint

```
POST /api/v3/analytics/named-query/DE-Products/dynamic-execute
```

## Parameters

This query has no parameters.

## Output Columns

| Column | Source Table | Source Column |
|--------|-------------|---------------|
| ClientId | cli | Id |
| Client | cli | Name |
| ProductId | pro | Oid |
| Product | pro | Name |
| BrandId | brd | Oid |
| Brand | brd | Name |
| ModifiedOn | pro | ModifiedOnUtc |

## Source Tables

| Table | Alias | Join |
|-------|-------|------|
| CommercialClientProduct | pro | FROM |
| ClientLookup | cli | JOIN |
| Brand | brd | LEFT JOIN |

*Version: 6 · Category: Data Extraction · System: No*
