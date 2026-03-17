---
id: de-projects
title: DE-Projects
sidebar_label: Projects
sidebar_position: 1
---

Extracts a list of projects.

## Endpoint

```
POST /api/v3/analytics/named-query/DE-Projects/dynamic-execute
```

## Parameters

This query has no parameters.

## Output Columns

| Column | Source Table | Source Column |
|--------|-------------|---------------|
| DocumentOid | prj | Oid |
| CompanyId | com | Id |
| Company | com | Name |
| CompanyHasImage | com | HasImage |
| ClientId | cli | Id |
| Client | cli | Name |
| ClientHasImage | cli | HasImage |
| ContractId | cnt | Id |
| Contract | cnt | Name |
| ContractNumber | cnt | Number |
| ProjectId | prj | Oid |
| Project | prj | Name |
| ProjectNumber | prj | Number |
| StartDate | prj | BeginDate |
| EndDate | prj | EndDate |
| ModifiedOn | prj | ModifiedOnUtc |
| BrandId | brd | Oid |
| Brand | brd | Name |
| ProductId | pro | Oid |
| Product | pro | Name |
| ClassificationId | cls | Oid |
| Classification | cls | Name |
| NatureId | nat | Oid |
| Nature | nat | Name |
| StageId | wfs | Oid |
| Stage | wfs | Name |
| StageColor | wfs | Color |
| StageTypeId | wst | Oid |
| StageType | wst | Name |
| StageTypeColor | wst | Color |
| CurrencyId | cur | Oid |
| Currency | cur | Name |
| Investment | prj | Investment |
| ProjectType | — | [object Object](...) |
| RateCard | rtc | Name |
| RateCardColumn | rcc | Name |
| EstimatedWithoutTaxCost | — | [object Object](...) |
| EstimatedTaxCost | — | [object Object](...) |
| EstimatedWithTaxCost | — | [object Object](...) |
| EstimatedWithoutTaxSell | — | [object Object](...) |
| EstimatedTaxSell | — | [object Object](...) |
| EstimatedWithTaxSell | — | [object Object](...) |
| CreatedById | cre | Id |
| CreatedBy | cre | Name |
| CreatedByHasImage | cre | HasImage |
| ModifiedId | mod | Id |
| ModifiedBy | mod | Name |
| ModifiedHasImage | mod | HasImage |
| AlreadyRead | — | [object Object](...) |
| CurrentUserInTeam | — | [object Object](...) |
| CurrentUserPending | — | [object Object](...) |
| IsDelayed | — | [object Object](...) |
| Delayed | dld | Delayed |

## Source Tables

| Table | Alias | Join |
|-------|-------|------|
| Project | prj | FROM |
| UserLookup | cre | JOIN |
| UserLookup | mod | JOIN |
| ContractLookup | cnt | LEFT JOIN |
| CompanyLookup | com | JOIN |
| ClientLookup | cli | JOIN |
| CommercialClientProduct | pro | LEFT JOIN |
| Brand | brd | LEFT JOIN |
| ProjectClassification | cls | LEFT JOIN |
| ProjectNature | nat | JOIN |
| WorkflowState | wfs | JOIN |
| WorkflowStateType | wst | JOIN |
| Currency | cur | LEFT JOIN |
| est | — | LEFT JOIN |
| RateCard | rtc | LEFT JOIN |
| RateCardColumn | rcc | LEFT JOIN |
| cut | — | LEFT JOIN |
| BaseObjectRead | bor | LEFT JOIN |
| dld | — | LEFT JOIN |

## Custom Fields

- Module: `Skill.Module.BusinessObjects.Project`

## Access

| Role | Administrative |
|------|---------------|
| Administrator | Yes |

*Version: 14 · Category: Data Extraction · System: No*
