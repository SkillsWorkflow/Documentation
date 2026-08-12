---
id: estimatedplannedactualmonthly
title: EstimatedPlannedActualMonthly
description: "System generic extraction of estimated, planned and actual, per currency, including time, costs, income, profit."
sidebar_label: EstimatedPlannedActualMonthly
sidebar_position: 1
---

System generic extraction of estimated, planned and actual, per currency, including time, costs, income, profit.

## Endpoint

```
POST /api/v3/analytics/named-query/EstimatedPlannedActualMonthly/dynamic-execute
```

## Parameters

This query has no parameters.

## Output Columns

| Column | Source Table | Source Column |
|--------|-------------|---------------|
| CompanyId | com | Oid |
| Company | com | Name |
| CompanyHasImage | com | HasImage |
| Division | div | Name |
| Department | dep | Name |
| TypologyGroup | utg | Name |
| ClientId | cli | Oid |
| Client | cli | Name |
| ClientHasImage | cli | HasImage |
| Product | pro | Name |
| ProjectId | prj | Oid |
| Project | prj | Name |
| UserId | usl | Id |
| User | usl | Name |
| UserHasImage | usl | HasImage |
| UserType | ust | Name |
| FromMonth | — | datefromparts(...) |
| ToMonth | — | datefromparts(...) |
| Month | — | datefromparts(...) |
| ContractedTime | — | (expression) |
| PlannedContractedTime | — | (expression) |
| PlannedTime | — | (expression) |
| ActualTime | — | (expression) |
| ContractedCost | — | (expression) |
| PlannedCost | — | (expression) |
| ActualCost | — | (expression) |
| ContractedIncome | — | (expression) |
| PlannedIncome | — | (expression) |
| ActualIncome | — | (expression) |
| ContractedProfit | — | (expression) |
| PlannedProfit | — | (expression) |
| ActualProfit | — | (expression) |
| CompanyContractedCost | — | (expression) |
| CompanyPlannedCost | — | (expression) |
| CompanyActualCost | — | (expression) |
| CompanyContractedIncome | — | (expression) |
| CompanyPlannedIncome | — | (expression) |
| CompanyActualIncome | — | (expression) |
| CompanyContractedProfit | — | (expression) |
| CompanyPlannedProfit | — | (expression) |
| CompanyActualProfit | — | (expression) |
| Exchange | — | (expression) |
| CurrencySymbol | — | (expression) |
| CurrencyCompany | prc | Name |
| CurrencyCompanySymbol | ccr | Symbol |

## Source Tables

| Table | Alias | Join |
|-------|-------|------|
| Company | com | FROM |
| Division | div | FROM |
| Department | dep | FROM |
| UserTypologyGroup | utg | FROM |
| Currency | cur | FROM |
| Currency | ccr | FROM |
| Project | prj | FROM |
| Company | prc | FROM |
| CommercialClient | cli | LEFT JOIN |
| CommercialClientProduct | pro | LEFT JOIN |
| UserLookUp | usl | LEFT JOIN |
| UserType | ust | LEFT JOIN |

*Version: 1 · Category: Scheduler · System: No*
