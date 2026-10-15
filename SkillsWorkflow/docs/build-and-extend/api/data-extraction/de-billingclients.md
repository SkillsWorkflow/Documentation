---
id: de-billingclients
title: DE-BillingClients
description: "Extracts billing clients with their company, payment condition, rate card, price table and address."
sidebar_label: BillingClients
sidebar_position: 1
---

Extracts billing clients with their company, payment condition, rate card, price table and address.

## Endpoint

```
POST /api/v3/analytics/named-query/DE-BillingClients/dynamic-execute
```

## Parameters

This query has no parameters.

## Output Columns

| Column | Source Table | Source Column |
|--------|-------------|---------------|
| BillingClientId | cl | Oid |
| BillingClient | cl | Name |
| IsActive | cl | Active |
| CompanyId | c | Oid |
| Company | c | Name |
| CompanyHasImage | c | HasImage |
| PaymentConditionId | p | Oid |
| PaymentCondition | p | Name |
| Code | cl | Code |
| NameAndExternalId | cl | NameAndExternalId |
| ExternalId | cl | ExternalId |
| RateCard | rc | Name |
| RateCardId | rc | Oid |
| RateCardColumn | rcc | Name |
| PriceTable | pt | Name |
| PriceTableId | pt | Oid |
| PriceTableColumn | ptc | Name |
| CreatedBy | u | Name |
| ModifiedBy | us | Name |
| CreatedById | u | Id |
| ModifiedById | us | Id |
| CreatedByHasImage | u | HasImage |
| ModifiedByHasImage | us | HasImage |
| CreatedOn | cl | CreatedOnUtc |
| ModifiedOn | cl | ModifiedOnUtc |
| Street | cl | Street |
| Street2 | cl | Street2 |
| StateProvince | cl | StateProvince |
| ZipPostal | cl | ZipPostal |
| TaxPayerNumber | cl | TaxPayerNumber |
| Contact | cl | Contact |
| Country | cou | Name |
| City | ct | Name |

## Source Tables

| Table | Alias | Join |
|-------|-------|------|
| Client | cl | FROM |
| Company | c | JOIN |
| PaymentCondition | p | LEFT JOIN |
| UserLookup | u | LEFT JOIN |
| UserLookup | us | LEFT JOIN |
| RateCard | rc | LEFT JOIN |
| RateCardColumn | rcc | LEFT JOIN |
| PriceTable | pt | LEFT JOIN |
| PriceTableColumn | ptc | LEFT JOIN |
| Country | cou | LEFT JOIN |
| City | ct | LEFT JOIN |

## Access

| Role | Administrative |
|------|---------------|
| BillingClientRead | No |

*Version: 3 · Category: Data Extraction · System: No*
