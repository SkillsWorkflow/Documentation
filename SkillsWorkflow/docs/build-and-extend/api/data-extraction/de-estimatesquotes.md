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
| Oid | est | Oid |
| DocumentOid | est | Oid |
| EstimateId | est | Oid |
| Estimate | — | (expression) |
| EstimateNumber | est | Number |
| StartDate | est | Date |
| EndDate | est | Expiration |
| DepartmentId | dep | Id |
| Department | dep | Name |
| ModifiedOn | est | ModifiedOnUtc |
| StageId | wfs | Oid |
| Stage | wfs | Name |
| StageTypeId | wst | Status |
| StageType | wst | Name |
| ClientId | cli | Id |
| Client | cli | Name |
| Contract | — | (expression) |
| ContractId | cnt | Id |
| ProjectId | prj | Id |
| Project | — | (expression) |
| EstimateItemId | eit | Oid |
| EstimateItem | eit | Name |
| EstimateItemDescription | — | replace(...) |
| EstimateItemDetailDescription | — | replace(...) |
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
| EstimateItemDiscountPercentage | eit | DiscountPercentage |
| EstimateItemDetailHours | eid | Hours |
| EstimateItemDetailCost | — | (expression) |
| EstimateItemDetailIncome | — | (expression) |
| EstimateItemDetailTableRate | eid | TableRate |
| EstimateItemDetailUnitPriceCost | eid | UnitPriceCost |
| EstimateItemDetailUnitPriceIncome | eid | UnitPriceIncome |
| DiscountCost | — | (expression) |
| QuantityCost | eid | QuantityCost |
| ValueWithoutVatCost | — | (expression) |
| VatValueCost | — | (expression) |
| ValueWithVatCost | — | (expression) |
| DiscountIncome | — | (expression) |
| DiscountIncomePercentage | eid | DiscountIncomePercentage |
| QuantityIncome | eid | QuantityIncome |
| AgencyCommissionValue | eid | AgencyCommissionValue |
| ValueWithoutVatIncome | — | (expression) |
| ValueWithVatIncome | — | (expression) |
| Margin | — | (expression) |
| MarginPercentage | eid | MarginPercentage |
| RevenueWithVat | — | (expression) |
| RevenueWithoutVat | — | (expression) |

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

## Custom Fields

- Module: `Skill.Module.BusinessObjects.Estimate`

## Access

| Role | Administrative |
|------|---------------|
| EstimateRead | No |

*Version: 17 · Category: Data Extraction · System: No*
