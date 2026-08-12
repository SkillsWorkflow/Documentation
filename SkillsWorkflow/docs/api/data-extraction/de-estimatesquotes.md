---
id: de-estimatesquotes
title: DE-EstimatesQuotes
description: "Extracts the estimate details."
sidebar_label: EstimatesQuotes
sidebar_position: 1
---

Extracts the estimate details.

## Endpoint

```
POST /api/v3/analytics/named-query/DE-EstimatesQuotes/dynamic-execute
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
| ModifiedOn | est | ModifiedOnUtc |
| StageId | wfs | Oid |
| Stage | wfs | Name |
| ClientId | cli | Id |
| Client | cli | Name |
| Contract | — | (expression) |
| ContractId | cnt | Id |
| ProjectId | prj | Id |
| Project | — | (expression) |
| EstimateItemId | eit | Oid |
| EstimateItem | eit | Name |
| EstimateItemDescription | eit | Description |
| EstimateItemDetailDescription | eid | Description |
| SupplierId | sup | Oid |
| Supplier | sup | Name |
| ServiceId | art | Oid |
| Service | art | Name |
| EstimateItemDetailType | eid | Type |
| EstimateItemDetailDepartmentId | ddp | Id |
| EstimateItemDetailDepartment | ddp | Name |
| EstimateItemDetailTypologyGroupId | eid | UserTypologyGroup |
| EstimateItemDetailTypologyGroup | utg | Name |
| EstimateItemDetailUserId | eid | User |
| EstimateItemDetailUser | usr | Name |
| ProductId | pro | Oid |
| Product | pro | Name |
| BrandId | brd | Oid |
| Brand | brd | Name |
| EstimateItemDetailId | eid | Oid |
| CurrencyId | est | Currency |
| Currency | cur | Name |
| Exchange | est | Exchange |
| EstimateItemServiceId | ari | Oid |
| EstimateItemService | ari | Name |
| EstimateItemRetainer | eit | Retainer |
| EstimateItemQuantityIncome | eit | QuantityIncome |
| EstimateItemValueWithoutVatIncome | eit | ValueWithoutVatIncome |
| EstimateItemVatValueIncome | eit | VatValueIncome |
| EstimateItemValueWithVatIncome | eit | ValueWithVatIncome |
| EstimateItemClientDirectTotal | eit | ClientDirectTotal |
| EstimateItemValueWithVatIncomeWithClientDirect | eit | ValueWithVatIncomeWithClientDirect |
| EstimateItemDetailCost | — | (expression) |
| EstimateItemDetailIncome | — | (expression) |
| EstimateItemDetailTableRate | eid | TableRate |
| EstimateItemDetailUnitPriceCost | eid | UnitPriceCost |
| EstimateItemDetailUnitPriceIncome | — | (expression) |
| DiscountCost | eid | DiscountCost |
| QuantityCost | eid | QuantityCost |
| ValueWithoutVatCost | eid | ValueWithoutVatCost |
| VatValueCost | eid | VatValueCost |
| ValueWithVatCost | eid | ValueWithVatCost |
| DiscountIncome | eid | DiscountIncome |
| QuantityIncome | eid | QuantityIncome |
| AgencyCommissionValue | eid | AgencyCommissionValue |
| ValueWithoutVatIncome | eid | ValueWithoutVatIncome |
| Margin | eid | Margin |
| MarginPercentage | eid | MarginPercentage |

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
| DepartmentLookup | dep | JOIN |
| DepartmentLookup | ddp | LEFT JOIN |
| UserLookup | usr | LEFT JOIN |
| Supplier | sup | LEFT JOIN |
| Article | art | LEFT JOIN |
| Article | ari | LEFT JOIN |

## Access

| Role | Administrative |
|------|---------------|
| Administrator | Yes |

*Version: 8 · Category: Data Extraction · System: No*
