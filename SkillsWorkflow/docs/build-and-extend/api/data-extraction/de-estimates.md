---
id: de-estimates
title: DE-Estimates
description: "Extracts the list of estimates."
sidebar_label: Estimates
sidebar_position: 1
---

Extracts the list of estimates.

## Endpoint

```
POST /api/v3/analytics/named-query/DE-Estimates/dynamic-execute
```

## Parameters

This query has no parameters.

## Output Columns

| Column | Source Table | Source Column |
|--------|-------------|---------------|
| Oid | est | Oid |
| DocumentOid | est | Oid |
| EstimateId | est | Oid |
| Estimate | — | (expression) |
| EstimateNumber | est | Number |
| DepartmentId | dep | Id |
| Department | dep | Name |
| ModifiedOn | est | ModifiedOnUtc |
| StageId | wfs | Oid |
| Stage | wfs | Name |
| StageTypeId | wst | Status |
| StageType | wst | Name |
| TypeId | typ | Oid |
| Type | typ | Name |
| ClientId | est | Client |
| Client | cli | Name |
| ContractId | cnt | Id |
| Contract | — | (expression) |
| ProjectId | est | Project |
| Project | — | (expression) |
| JobId | job | Id |
| Job | job | NameAndExternalId |
| BrandId | brd | Oid |
| Brand | brd | Name |
| ProductId | pro | Oid |
| Product | pro | Name |
| CurrencyId | est | Currency |
| Currency | cur | Name |
| Exchange | est | Exchange |
| StartDate | est | Date |
| EndDate | est | Expiration |
| RateCardId | rtc | Oid |
| RateCard | rtc | Name |
| RateCardColumnId | rcc | Oid |
| RateCardColumn | rcc | Name |
| Tags | tag | Tags |
| ValueWithoutTaxCost | t | EstimatedCostWithoutVat |
| TaxValueCost | — | (expression) |
| ValueWithTaxCost | t | EstimatedCostWithVat |
| ValueWithoutTaxSell | t | EstimatedIncomeWithoutVat |
| TaxValueSell | — | (expression) |
| ValueWithTaxSell | t | EstimatedIncomeWithVat |
| BilledWithoutTax | t | BilledWithoutVat |
| CreditedWithoutTax | t | CreditedWithoutVat |
| CreditedWithTax | t | CreditedWithVat |
| RevenueWithTax | t | EstimatedRevenueWithVat |

## Source Tables

| Table | Alias | Join |
|-------|-------|------|
| Estimate | est | FROM |
| JobType | typ | LEFT JOIN |
| WorkflowState | wfs | JOIN |
| WorkflowStateType | wst | JOIN |
| ClientLookup | cli | JOIN |
| ProjectLookup | prj | LEFT JOIN |
| ContractLookup | cnt | LEFT JOIN |
| JobLookup | job | LEFT JOIN |
| CommercialClientProduct | pro | LEFT JOIN |
| Brand | brd | LEFT JOIN |
| Currency | cur | LEFT JOIN |
| RateCard | rtc | LEFT JOIN |
| RateCardColumn | rcc | LEFT JOIN |
| DepartmentLookup | dep | JOIN |
| tag | — | LEFT JOIN |
| t | — | LEFT JOIN |

## Custom Fields

- Module: `Skill.Module.BusinessObjects.Estimate`

## Access

| Role | Administrative |
|------|---------------|
| EstimateRead | No |

*Version: 19 · Category: Data Extraction · System: No*
