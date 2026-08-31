---
id: de-estimatesquotesmonth
title: DE-EstimatesQuotesMonth
description: "Extracts all data from estimates."
sidebar_label: EstimatesQuotesMonth
sidebar_position: 2
---

Extracts all data from estimates.

## Endpoint

```
POST /api/v3/analytics/named-query/DE-EstimatesQuotesMonth/dynamic-execute
```

## Parameters

This query has no parameters.

## Output Columns

| Column | Source Table | Source Column |
|--------|-------------|---------------|
| EstimateId | est | Oid |
| Estimate | — | (expression) |
| EstimateNumber | est | Number |
| DepartmentId | dep | Id |
| Department | dep | Name |
| StageId | wfs | Oid |
| Stage | wfs | Name |
| ClientId | est | Client |
| Client | cli | Name |
| ProjectId | est | Project |
| Project | — | (expression) |
| EstimateItem | eit | Name |
| EstimateItemDescription | eit | Description |
| EstimateItemDetailDepartmentId | ddp | Id |
| EstimateItemDetailDepartment | ddp | Name |
| EstimateItemDetailTypologyGroupId | eid | UserTypologyGroup |
| EstimateItemDetailTypologyGroup | utg | Name |
| EstimateItemDetailUserId | eid | User |
| EstimateItemDetailUser | usr | Name |
| EstimateItemDetailDescription | eid | Description |
| ProductId | est | Product |
| Product | pro | Name |
| EstimateItemDetailId | eid | Oid |
| CurrencyId | est | Currency |
| Currency | cur | Name |
| Exchange | est | Exchange |
| EstimateItemDetailTime | edm | Hours |
| EstimateItemDetailCost | — | (expression) |
| EstimateItemDetailIncome | — | (expression) |
| EstimateItemDetailMonth | edm | DateUtc |
| EstimateItemDetailTableRate | eid | TableRate |
| EstimateItemDetailUnitPriceCost | eid | UnitPriceCost |

## Source Tables

| Table | Alias | Join |
|-------|-------|------|
| Estimate | est | FROM |
| EstimateItem | eit | JOIN |
| EstimateItemDetail | eid | JOIN |
| EstimateItemDetailMonth | edm | LEFT JOIN |
| JobType | typ | JOIN |
| WorkflowState | wfs | JOIN |
| WorkflowStateType | wst | JOIN |
| CommercialClient | cli | JOIN |
| Project | prj | LEFT JOIN |
| CommercialClientProduct | pro | LEFT JOIN |
| UserTypologyGroup | utg | JOIN |
| Currency | cur | JOIN |
| DepartmentLookup | dep | JOIN |
| DepartmentLookup | ddp | LEFT JOIN |
| User | usr | LEFT JOIN |

## Access

| Role | Administrative |
|------|---------------|
| Administrator | Yes |

*Version: 11 · Category: Data Extraction · System: No*
