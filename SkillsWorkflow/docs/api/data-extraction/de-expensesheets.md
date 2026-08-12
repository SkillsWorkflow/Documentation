---
id: de-expensesheets
title: DE-ExpenseSheets
description: "Extracts expense sheets for integration purposes."
sidebar_label: ExpenseSheets
sidebar_position: 1
---

Extracts expense sheets for integration purposes.

## Endpoint

```
POST /api/v3/analytics/named-query/DE-ExpenseSheets/dynamic-execute
```

## Parameters

This query has no parameters.

## Output Columns

| Column | Source Table | Source Column |
|--------|-------------|---------------|
| ExpenseSheetId | exp | Oid |
| ExpenseSheet | exp | DocumentNumber |
| ExpenseSheetNumber | exp | Number |
| ExternalName | exp | ExternalName |
| ExternalError | exp | ExternalError |
| Emission | exp | Emission |
| Due | exp | Due |
| Exchange | exp | Exchange |
| Blocked | exp | Blocked |
| Paid | exp | Paid |
| PaidValue | exp | PaidValue |
| ValueWithVat | exp | ValueWithVat |
| ValueWithoutVat | exp | ValueWithoutVat |
| VatValue | exp | VatValue |
| Company | com | Name |
| CompanyId | com | Id |
| CreatedOnUtc | exp | CreatedOnUtc |
| ModifiedOnUtc | exp | ModifiedOnUtc |
| CreatedByName | cre | Name |
| ModifiedByName | mod | Name |
| CreatedById | cre | Id |
| ModifiedById | mod | Id |

## Source Tables

| Table | Alias | Join |
|-------|-------|------|
| Expense | exp | FROM |
| CompanyLookup | com | JOIN |
| UserLookup | cre | LEFT JOIN |
| UserLookup | mod | LEFT JOIN |

*Version: 1 · Category: Data Extraction · System: No*
