---
id: de-estimatesbillingconditions
title: DE-EstimatesBillingConditions
sidebar_label: EstimatesBillingConditions
sidebar_position: 1
---

## Endpoint

```
POST /api/v3/analytics/named-query/DE-EstimatesBillingConditions/dynamic-execute
```

## Parameters

This query has no parameters.

## Output Columns

| Column | Source Table | Source Column |
|--------|-------------|---------------|
| BillingConditionId | bic | Oid |
| EstimateId | est | Oid |
| Estimate | — | — |
| EstimateNumber | est | Number |
| BillingClientId | bic | BillingClient |
| BillingClient | bcl | NameAndExternalId |
| Type | bic | Type |
| Frequency | bic | Frequency |
| PaymentCondition | pmc | Name |
| PaymentConditionId | bic | PaymentCondition |
| AmountType | bic | AmountType |
| Percentage | bic | Percentage |
| Value | bic | Value |
| YourReference | bic | YourReference |
| Date | bic | Date |
| DayOfMonth | bic | DayOfMonth |
| DayOfWeek | bic | DayOfWeek |
| CompanyId | est | Company |
| Company | com | Name |
| ClientId | est | Client |
| Client | cli | Name |

## Source Tables

| Table | Alias | Join |
|-------|-------|------|
| BillingCondition | bic | FROM |
| PaymentCondition | pmc | LEFT JOIN |
| Client | bcl | JOIN |
| Estimate | est | JOIN |
| CommercialClient | cli | JOIN |
| Company | com | JOIN |

*Version: 1 · Category: Data Extraction · System: No*
