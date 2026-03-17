---
id: de-expenses
title: DE-Expenses
sidebar_label: Expenses
sidebar_position: 1
---

Extracts expenses for integration purposes.

## Endpoint

```
POST /api/v3/analytics/named-query/DE-Expenses/dynamic-execute
```

## Parameters

This query has no parameters.

## Output Columns

| Column | Source Table | Source Column |
|--------|-------------|---------------|
| ExpenseId | eim | Oid |
| ExpenseNumber | eim | Number |
| Billable | eim | Billable |
| Motive | eim | Motive |
| ExpenseTypeId | eit | Oid |
| ExpenseType | eit | Name |
| Company | com | Name |
| CompanyId | com | Id |
| VatId | vat | Oid |
| Vat | vat | Name |
| VatPercentage | vat | Percentage |
| ValueWithVat | eim | ValueWithVat |
| VatValue | eim | VatValue |
| ValueWithVat | eim | ValueWithVat |
| CreatedOnUtc | eim | CreatedOnUtc |
| ModifiedOnUtc | eim | ModifiedOnUtc |
| CreatedByName | cre | Name |
| ModifiedByName | mod | Name |
| CreatedById | cre | Id |
| ModifiedById | mod | Id |

## Source Tables

| Table | Alias | Join |
|-------|-------|------|
| ExpenseItem | eim | FROM |
| Expense | exp | LEFT JOIN |
| ExpenseItemType | eit | JOIN |
| CompanyLookup | com | JOIN |
| Vat | vat | LEFT JOIN |
| UserLookup | cre | LEFT JOIN |
| UserLookup | mod | LEFT JOIN |

*Version: 1 · Category: Data Extraction · System: No*
