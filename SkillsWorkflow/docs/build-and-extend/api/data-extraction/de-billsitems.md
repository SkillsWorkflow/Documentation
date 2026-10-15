---
id: de-billsitems
title: DE-BillsItems
description: "Extracts Bill Items information."
sidebar_label: BillsItems
sidebar_position: 1
---

Extracts Bill Items information.

## Endpoint

```
POST /api/v3/analytics/named-query/DE-BillsItems/dynamic-execute
```

## Parameters

This query has no parameters.

## Output Columns

| Column | Source Table | Source Column |
|--------|-------------|---------------|
| BillId | bi | Oid |
| BillNumber | bi | Number |
| Service | art | Name |
| Description | bi | Description |
| UserId | ssu | Id |
| User | ssu | Name |
| UserHasImage | ssu | HasImage |
| VatId | vat | Oid |
| Vat | vat | Name |
| VatPercentage | vat | Percentage |
| UnitPrice | bi | UnitPrice |
| Discount | bi | Discount |
| Quantity | bi | Quantity |
| ValueWithoutVat | bi | ValueWithoutVat |
| VatValue | bi | VatValue |
| ValueWithVat | bi | ValueWithVat |
| EstimateItemValueWithoutVat | eit | ValueWithoutVatIncome |
| EstimateItemVatValue | eit | VatValueIncome |
| EstimateItemValueWithVat | eit | ValueWithVatIncome |
| EstimateItemDiscount | eit | Discount |
| EstimateItemQuantity | eit | QuantityIncome |

## Source Tables

| Table | Alias | Join |
|-------|-------|------|
| BillItem | bi | FROM |
| Article | art | LEFT JOIN |
| UserLookup | ssu | LEFT JOIN |
| Vat | vat | LEFT JOIN |
| EstimateItem | eit | LEFT JOIN |

## Access

| Role | Administrative |
|------|---------------|
| BillRead | No |

*Version: 3 · Category: Data Extraction · System: No*
