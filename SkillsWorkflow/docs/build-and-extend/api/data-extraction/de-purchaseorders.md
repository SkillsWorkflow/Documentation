---
id: de-purchaseorders
title: DE-PurchaseOrders
description: "Extracts purchase orders data from the system."
sidebar_label: PurchaseOrders
sidebar_position: 1
---

Extracts purchase orders data from the system.

## Endpoint

```
POST /api/v3/analytics/named-query/DE-PurchaseOrders/dynamic-execute
```

## Parameters

This query has no parameters.

## Output Columns

| Column | Source Table | Source Column |
|--------|-------------|---------------|
| Oid | doc | Oid |
| DocumentOid | doc | Oid |
| Name | doc | Number |
| Number | doc | Number |
| Status | doc | Status |
| FinancialStatus | doc | FinancialStatus |
| CreatedOnUtc | doc | CreatedOnUtc |
| CreatedById | doc | CreatedBy |
| CreatedBy | usrCb | Name |
| CreatedByHasImage | usrCb | HasImage |
| ModifiedOnUtc | doc | ModifiedOnUtc |
| ModifiedById | doc | ModifiedBy |
| ModifiedBy | usrMb | Name |
| ModifiedByHasImage | usrMb | HasImage |
| StartDate | doc | Date |
| DeliveryDate | doc | DeliveryDate |
| Client | cc | Name |
| ClientId | cc | Id |
| ClientHasImage | cc | HasImage |
| Department | d | Name |
| ContractId | cnt | Id |
| Contract | cnt | Name |
| Project | — | (expression) |
| ProjectId | p | Id |
| Estimate | e | Name |
| EstimateId | e | Oid |
| Company | c | Name |
| CompanyId | c | Id |
| CompanyHasImage | c | HasImage |
| Supplier | s | NameAndExternalId |
| ValueWithoutVat | doc | ValueWithoutVat |
| ValueWithVat | doc | ValueWithVat |
| VatValue | doc | VatValue |
| Invoiced | doc | Invoiced |
| InvoicedValue | doc | InvoicedValue |
| ControlledValue | doc | ControlledValue |
| External | doc | External |
| ExternalId | doc | ExternalId |
| ExternalError | doc | ExternalError |
| StageType | wst | Name |
| Stage | — | isnull(...) |
| Color | — | isnull(...) |
| AlreadyRead | — | iif(...) |
| CurrentUserInTeam | — | iif(...) |
| CurrentUserPending | — | iif(...) |
| CurrentUserInDepartment | — | iif(...) |
| CurrencyIsoCode | curr | IsoCode |
| Currency | curr | Name |
| Articles | art | Articles |

## Source Tables

| Table | Alias | Join |
|-------|-------|------|
| PurchaseOrder | doc | FROM |
| ProjectLookup | p | LEFT JOIN |
| ContractLookup | cnt | LEFT JOIN |
| CompanyLookup | c | LEFT JOIN |
| Estimate | e | LEFT JOIN |
| DepartmentLookup | d | LEFT JOIN |
| Currency | curr | LEFT JOIN |
| ClientLookup | cc | LEFT JOIN |
| Supplier | s | LEFT JOIN |
| UserLookup | usrCb | LEFT JOIN |
| UserLookup | usrMb | LEFT JOIN |
| BaseObjectRead | bor | LEFT JOIN |
| WorkflowState | ws | JOIN |
| Configuration | cfg | JOIN |
| UserLookup | usr | LEFT JOIN |
| CompanyLookup | com | LEFT JOIN |
| LocalizationLanguage | lol | LEFT JOIN |
| Localization | loc | LEFT JOIN |
| cut | — | LEFT JOIN |
| WorkflowStateType | wst | JOIN |
| art | — | LEFT JOIN |

## Custom Fields

- Module: `Skill.Module.BusinessObjects.PurchaseOrder`

## Access

| Role | Administrative |
|------|---------------|
| Administrator | Yes |

*Version: 1 · Category: Data Extraction · System: No*
