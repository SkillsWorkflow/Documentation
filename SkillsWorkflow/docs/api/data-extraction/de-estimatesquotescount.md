---
id: de-estimatesquotescount
title: DE-EstimatesQuotesCount
sidebar_label: EstimatesQuotesCount
sidebar_position: 1
---

Counts the occurrences of quotes.

## Endpoint

```
POST /api/v3/analytics/named-query/DE-EstimatesQuotesCount/dynamic-execute
```

## Parameters

This query has no parameters.

## Output Columns

| Column | Source Table | Source Column |
|--------|-------------|---------------|
| Count | — | (expression) |

## Source Tables

| Table | Alias | Join |
|-------|-------|------|
| Estimate | est | FROM |
| EstimateItem | eit | JOIN |
| EstimateItemDetail | eid | JOIN |
| JobType | typ | JOIN |
| WorkflowState | wfs | JOIN |
| WorkflowStateType | wst | JOIN |
| ClientLookup | cli | JOIN |
| ProjectLookup | prj | LEFT JOIN |
| ContractLookup | cnt | LEFT JOIN |
| CommercialClientProduct | pro | LEFT JOIN |
| Brand | brd | LEFT JOIN |
| UserTypologyGroup | utg | LEFT JOIN |
| Currency | cur | LEFT JOIN |
| Department | dep | LEFT JOIN |
| UserLookup | usr | LEFT JOIN |
| Supplier | sup | LEFT JOIN |
| Article | art | LEFT JOIN |
| Article | ari | LEFT JOIN |

## Access

| Role | Administrative |
|------|---------------|
| Administrator | Yes |

*Version: 1 · Category: Data Extraction · System: No*
