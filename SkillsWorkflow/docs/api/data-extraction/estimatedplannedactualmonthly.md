---
id: estimatedplannedactualmonthly
title: EstimatedPlannedActualMonthly
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
| FromMonth | — | [object Object](...) |
| ToMonth | — | [object Object](...) |
| Month | — | [object Object](...) |
| ContractedTime | — | — |
| PlannedContractedTime | — | — |
| PlannedTime | — | — |
| ActualTime | — | — |
| ContractedCost | — | — |
| PlannedCost | — | — |
| ActualCost | — | — |
| ContractedIncome | — | — |
| PlannedIncome | — | — |
| ActualIncome | — | — |
| ContractedProfit | — | — |
| PlannedProfit | — | — |
| ActualProfit | — | — |
| CompanyContractedCost | — | — |
| CompanyPlannedCost | — | — |
| CompanyActualCost | — | — |
| CompanyContractedIncome | — | — |
| CompanyPlannedIncome | — | — |
| CompanyActualIncome | — | — |
| CompanyContractedProfit | — | — |
| CompanyPlannedProfit | — | — |
| CompanyActualProfit | — | — |
| Exchange | — | — |
| CurrencySymbol | — | — |
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
