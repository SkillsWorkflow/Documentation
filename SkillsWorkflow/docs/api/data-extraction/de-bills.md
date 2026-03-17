---
id: de-bills
title: DE-Bills
sidebar_label: Bills
sidebar_position: 0
---

Extracts data for bills.

## Endpoint

```
POST /api/v3/analytics/named-query/DE-Bills/dynamic-execute
```

## Parameters

This query has no parameters.

## Output Columns

| Column | Source Table | Source Column |
|--------|-------------|---------------|
| Oid | doc | Oid |
| DocumentOid | doc | Oid |
| BillId | doc | Oid |
| Bill | doc | Name |
| BillNumber | doc | Number |
| Due | doc | Due |
| Date | doc | Date |
| ManagementDate | doc | ManagementDate |
| Company | com | Name |
| CompanyId | com | Id |
| CompanyHasImage | com | HasImage |
| ClientGroup | clg | Name |
| Client | cli | Name |
| ClientId | cli | Id |
| ClientHasImage | cli | HasImage |
| BillingClient | bcl | Name |
| CreatedOnUtc | doc | CreatedOnUtc |
| CreatedBy | cre | Name |
| CreatedById | cre | Id |
| CreatedByHasImage | cre | HasImage |
| ModifiedOnUtc | doc | ModifiedOnUtc |
| ModifiedBy | mod | Name |
| ModifiedById | mod | Id |
| ModifiedByHasImage | mod | HasImage |
| ProjectId | prj | Oid |
| Project | prj | NameAndExternalId |
| ContractId | cnt | Oid |
| Contract | cnt | NameAndExternalId |
| EstimateId | est | Oid |
| Estimate | est | NumberAndName |
| Department | dep | Name |
| Currency | cur | Name |
| CurrencyIsoCode | cur | IsoCode |
| CurrencySymbol | cur | Symbol |
| PaymentCondition | pcn | Name |
| YourReference | doc | YourReference |
| ValueWithoutVat | doc | ValueWithoutVat |
| VatValue | doc | VatValue |
| ValueWithVat | doc | ValueWithVat |
| External | doc | External |
| ExternalId | doc | ExternalId |
| ExternalError | doc | ExternalError |
| Paid | doc | Paid |
| PaidValue | doc | PaidValue |
| Remarks | doc | Remarks |
| Stage | wfs | Name |
| StageColor | wfs | Color |
| StateType | wst | Name |
| StageType | wst | Name |
| AlreadyRead | — | [object Object](...) |
| CurrentUserInTeam | — | [object Object](...) |
| BaseObjectReadId | bor | Oid |
| FavoriteId | uf | Oid |
| IsFavorite | — | [object Object](...) |

## Source Tables

| Table | Alias | Join |
|-------|-------|------|
| Bill | doc | FROM |
| Client | bcl | JOIN |
| ClientLookup | cli | JOIN |
| ClientGroup | clg | LEFT JOIN |
| WorkflowState | wfs | JOIN |
| WorkflowStateType | wst | JOIN |
| UserLookup | cre | JOIN |
| UserLookup | mod | JOIN |
| CompanyLookup | com | JOIN |
| Currency | cur | JOIN |
| PaymentCondition | pcn | JOIN |
| DocumentType | dt | JOIN |
| UserFavorite | uf | LEFT JOIN |
| Project | prj | LEFT JOIN |
| Contract | cnt | LEFT JOIN |
| Estimate | est | LEFT JOIN |
| Department | dep | LEFT JOIN |
| BaseObjectRead | bor | LEFT JOIN |
| cut | — | LEFT JOIN |

## Custom Fields

- Module: `Skill.Module.BusinessObjects.Bill`

*Version: 1 · Category: Data Extraction · System: No*
