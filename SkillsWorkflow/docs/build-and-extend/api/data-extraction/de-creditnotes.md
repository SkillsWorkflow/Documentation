---
id: de-creditnotes
title: DE-CreditNotes
description: "Extracts information on credit notes."
sidebar_label: CreditNotes
sidebar_position: 1
---

Extracts information on credit notes.

## Endpoint

```
POST /api/v3/analytics/named-query/DE-CreditNotes/dynamic-execute
```

## Parameters

This query has no parameters.

## Output Columns

| Column | Source Table | Source Column |
|--------|-------------|---------------|
| Oid | doc | Oid |
| DocumentOid | doc | Oid |
| CreditNoteId | doc | Oid |
| CreditNote | doc | Name |
| CreditNoteNumber | doc | Name |
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
| BillId | bil | Oid |
| Bill | bil | Name |
| BillNumber | bil | Number |
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
| Stage | wfs | Name |
| StageColor | wfs | Color |
| StateType | wst | Name |
| StageType | wst | Name |

## Source Tables

| Table | Alias | Join |
|-------|-------|------|
| ClientCreditNote | doc | FROM |
| Bill | bil | JOIN |
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

## Custom Fields

- Module: `Skill.Module.BusinessObjects.CreditNote`

## Access

| Role | Administrative |
|------|---------------|
| ClientCreditNoteRead | No |

*Version: 3 · Category: Data Extraction · System: No*
