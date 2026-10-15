---
id: de-expensetypes
title: DE-ExpenseTypes
sidebar_label: ExpenseTypes
sidebar_position: 1
---

Extracts expense items types.

## Endpoint

```
POST /api/v3/analytics/named-query/DE-ExpenseTypes/dynamic-execute
```

## Parameters

This query has no parameters.

## Output Columns

| Column | Source Table | Source Column |
|--------|-------------|---------------|
| ExpenseTypeId | eit | Oid |
| ExpenseType | eit | Name |
| Company | com | Name |
| CompanyId | com | Id |
| Vat | vat | Name |
| ExternalId | eit | ExternalId |
| VatDeductiblePercentage | eit | VatDeductiblePercentage |
| Value | eit | Value |
| Active | eit | Active |
| CreatedOnUtc | eit | CreatedOnUtc |
| ModifiedOnUtc | eit | ModifiedOnUtc |
| CreatedByName | cre | Name |
| ModifiedByName | mod | Name |
| CreatedById | cre | Id |
| ModifiedById | mod | Id |

## Source Tables

| Table | Alias | Join |
|-------|-------|------|
| ExpenseItemType | eit | FROM |
| CompanyLookup | com | JOIN |
| Vat | vat | LEFT JOIN |
| UserLookup | cre | LEFT JOIN |
| UserLookup | mod | LEFT JOIN |

## Access

| Role | Administrative |
|------|---------------|
| ExpenseItemTypeRead | No |

*Version: 3 · Category: Data Extraction · System: No*
