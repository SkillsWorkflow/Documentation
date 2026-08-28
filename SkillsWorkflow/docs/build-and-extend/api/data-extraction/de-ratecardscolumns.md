---
id: de-ratecardscolumns
title: DE-RateCardsColumns
description: "Extraction of rate cards' columns."
sidebar_label: RateCardsColumns
sidebar_position: 1
---

Extraction of rate cards' columns.

## Endpoint

```
POST /api/v3/analytics/named-query/DE-RateCardsColumns/dynamic-execute
```

## Parameters

This query has no parameters.

## Output Columns

| Column | Source Table | Source Column |
|--------|-------------|---------------|
| RateCardId | rtc | Oid |
| RateCard | rtc | Name |
| RateCardColumnId | rcc | Oid |
| RateCardColumn | rcc | Name |
| RateCardItemId | rci | Oid |
| RateCardItemValueId | riv | Oid |
| Active | rtc | Active |
| StartDate | rtc | BeginDate |
| EndDate | rtc | EndDate |
| CurrencyId | cur | Oid |
| Currency | cur | Name |
| CompanyId | com | Oid |
| Company | com | Name |
| RateCardItemDepartmentId | dep | Oid |
| RateCardItemDepartment | dep | Name |
| RateCardItemTypologyGroupId | utg | Oid |
| RateCardItemTypologyGroup | utg | Name |
| RateCardItemUserId | usr | Oid |
| RateCardItemUser | usr | Name |
| Cost | riv | Cost |

## Source Tables

| Table | Alias | Join |
|-------|-------|------|
| RateCard | rtc | FROM |
| RateCardItem | rci | JOIN |
| RateCardItemValue | riv | JOIN |
| RateCardColumn | rcc | JOIN |
| UserTypologyGroup | utg | JOIN |
| User | usr | LEFT JOIN |
| Department | dep | LEFT JOIN |
| Company | com | LEFT JOIN |
| Currency | cur | LEFT JOIN |

*Version: 1 · Category: Data Extraction · System: No*
