---
id: de-paymentconditions
title: DE-PaymentConditions
description: "Extracts payment conditions per company, including days, discount and tax settings."
sidebar_label: PaymentConditions
sidebar_position: 1
---

Extracts payment conditions per company, including days, discount and tax settings.

## Endpoint

```
POST /api/v3/analytics/named-query/DE-PaymentConditions/dynamic-execute
```

## Parameters

This query has no parameters.

## Output Columns

| Column | Source Table | Source Column |
|--------|-------------|---------------|
| PaymentConditionId | pyc | Oid |
| PaymentCondition | pyc | Name |
| Company | com | Name |
| CompanyId | com | Oid |
| CompanyHasImage | com | HasImage |
| IsActive | pyc | Active |
| Days | pyc | Days |
| HasTax | pyc | HasTax |
| ClientDirect | pyc | ClientDirect |
| Discount | pyc | Discount |
| ExternalId | pyc | ExternalId |
| AgencyCommissionHasTax | pyc | AgencyCommissionHasTax |

## Source Tables

| Table | Alias | Join |
|-------|-------|------|
| PaymentCondition | pyc | FROM |
| Company | com | JOIN |

## Access

| Role | Administrative |
|------|---------------|
| PaymentConditionRead | No |

*Version: 3 · Category: Data Extraction · System: No*
