---
id: de-currencies
title: DE-Currencies
sidebar_label: Currencies
sidebar_position: 1
---

Extracts the list of currencies.

## Endpoint

```
POST /api/v3/analytics/named-query/DE-Currencies/dynamic-execute
```

## Parameters

This query has no parameters.

## Output Columns

| Column | Source Table | Source Column |
|--------|-------------|---------------|
| CurrencyId | cur | Oid |
| Currency | cur | Name |
| IsoCode | cur | IsoCode |
| Symbol | cur | Symbol |
| ModifiedOn | cur | ModifiedOnUtc |

## Source Tables

| Table | Alias | Join |
|-------|-------|------|
| Currency | cur | FROM |

*Version: 3 · Category: Data Extraction · System: No*
