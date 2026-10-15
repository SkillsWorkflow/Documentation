---
id: de-creditnotesitems
title: DE-CreditNotesItems
description: "Extracts information about client credit notes items."
sidebar_label: CreditNotesItems
sidebar_position: 1
---

Extracts information about client credit notes items.

## Endpoint

```
POST /api/v3/analytics/named-query/DE-CreditNotesItems/dynamic-execute
```

## Parameters

This query has no parameters.

## Output Columns

| Column | Source Table | Source Column |
|--------|-------------|---------------|
| ClientCreditNoteId | ccn | Oid |
| ClientCreditNote | ccn | Name |
| ClientCreditNoteNumber | ccn | Name |
| ClientCreditNoteItemId | ccni | Oid |
| ClientCreditNoteItem | — | concat(...) |
| ValueWithoutVat | ccni | ValueWithoutVat |
| VatValue | ccni | VatValue |
| ValueWithVat | ccni | ValueWithVat |
| UnitPrice | ccni | UnitPrice |
| Discount | ccni | Discount |
| Description | ccni | Description |
| Order | ccni | Order |
| Quantity | ccni | Quantity |
| ReversalReasonId | rr | Oid |
| ReversalReasonName | rr | Name |
| VatId | vat | Oid |
| VatName | vat | Name |
| VatPercentage | vat | Percentage |

## Source Tables

| Table | Alias | Join |
|-------|-------|------|
| ClientCreditNoteItem | ccni | FROM |
| Article | art | JOIN |
| ClientCreditNote | ccn | JOIN |
| Vat | vat | LEFT JOIN |
| ReversalReason | rr | LEFT JOIN |

## Access

| Role | Administrative |
|------|---------------|
| ClientCreditNoteRead | No |

*Version: 3 · Category: Data Extraction · System: No*
