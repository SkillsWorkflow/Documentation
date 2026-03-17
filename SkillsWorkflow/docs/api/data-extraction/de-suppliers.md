---
id: de-suppliers
title: DE-Suppliers
sidebar_label: Suppliers
sidebar_position: 1
---

Extracts suppliers for integration purposes.

## Endpoint

```
POST /api/v3/analytics/named-query/DE-Suppliers/dynamic-execute
```

## Parameters

This query has no parameters.

## Output Columns

| Column | Source Table | Source Column |
|--------|-------------|---------------|
| DocumentOid | s | Oid |
| SupplierId | s | Oid |
| Supplier | s | Name |
| Company | com | Name |
| CompanyId | com | Id |
| Division | d | Name |
| DivisionId | d | Oid |
| Department | dp | Name |
| DepartmentId | dp | Oid |
| Currency | cr | Name |
| CurrencyId | cr | Oid |
| VatId | v | Oid |
| Vat | v | Name |
| ExternalId | s | ExternalId |
| IsActive | s | Active |
| PaymentConditionId | pc | Oid |
| PaymentCondition | pc | Name |
| Category | s | Category |
| CreatedById | createdBy | Id |
| CreatedBy | createdBy | Name |
| ModifiedById | modifiedBy | Id |
| ModifiedBy | modifiedBy | Name |
| CreatedOnUtc | s | CreatedOnUtc |
| ModifiedOnUtc | s | ModifiedOnUtc |
| Mail | s | Mail |
| Remarks | s | Remarks |
| DiscountPercentage | s | DiscountPercentage |
| VolumeDiscountPercentage | s | VolumeDiscountPercentage |
| OtherCreditor | s | OtherCreditor |
| Street | s | Street |
| TaxPayerNumber | s | TaxPayerNumber |
| RelatedDepartment | depRelated | Name |
| RelatedDepartmentId | depRelated | Oid |
| RelatedCompany | companyRelated | Name |
| RelatedCompanyId | companyRelated | Oid |
| Country | country | Name |
| City | city | Name |

## Source Tables

| Table | Alias | Join |
|-------|-------|------|
| Supplier | s | FROM |
| CompanyLookup | com | JOIN |
| Division | d | LEFT JOIN |
| Department | dp | LEFT JOIN |
| Department | depRelated | LEFT JOIN |
| Company | companyRelated | LEFT JOIN |
| Currency | cr | LEFT JOIN |
| Vat | v | LEFT JOIN |
| PaymentCondition | pc | LEFT JOIN |
| UserLookup | createdBy | LEFT JOIN |
| UserLookup | modifiedBy | LEFT JOIN |
| Country | country | LEFT JOIN |
| City | city | LEFT JOIN |

## Custom Fields

- Module: `Skill.Module.BusinessObjects.Supplier`

## Access

| Role | Administrative |
|------|---------------|
| Administrator | Yes |
| SupplierRead | No |
| Base | No |

*Version: 2 · Category: Data Extraction · System: No*
