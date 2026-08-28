---
id: de-clients
title: DE-Clients
sidebar_label: Clients
sidebar_position: 1
---

Extracts the list of clients.

## Endpoint

```
POST /api/v3/analytics/named-query/DE-Clients/dynamic-execute
```

## Parameters

This query has no parameters.

## Output Columns

| Column | Source Table | Source Column |
|--------|-------------|---------------|
| DocumentOid | cli | Oid |
| ClientId | cli | Oid |
| Client | cli | Name |
| ExternalId | cli | ExternalId |
| Code | cli | Code |
| Email | cli | Email |
| Phone | cli | Phone |
| HeadOffice | cli | HeadOffice |
| Street | cli | Street |
| Street2 | cli | Street2 |
| Location | cli | City |
| CreatedOn | cli | CreatedOnUtc |
| ModifiedOn | cli | ModifiedOnUtc |
| AllowsTimesheet | cli | AllowsTimesheet |
| ClientGroupId | clg | Oid |
| ClientGroup | clg | Name |
| TaxPayerNumber | cli | TaxPayerNumber |
| Margin | cli | Margin |
| FullTimeEmployeeTime | cli | FullTimeEmployeeTime |
| SupplierMargin | cli | SupplierMargin |
| StageId | wfs | Oid |
| Stage | wfs | Name |
| StageTypeId | wst | Oid |
| StageType | wst | Name |
| ManagerId | mng | Id |
| ManagerName | mng | Name |
| ManagerHasImage | mng | HasImage |
| OwnerId | own | Id |
| OwnerName | own | Name |
| OwnerHasImage | own | HasImage |

## Source Tables

| Table | Alias | Join |
|-------|-------|------|
| CommercialClient | cli | FROM |
| ClientGroup | clg | LEFT JOIN |
| WorkflowState | wfs | JOIN |
| WorkflowStateType | wst | JOIN |
| UserLookup | mng | LEFT JOIN |
| UserLookup | own | LEFT JOIN |

## Custom Fields

- Module: `Skill.Module.BusinessObjects.CommercialClient`

## Access

| Role | Administrative |
|------|---------------|
| Administrator | Yes |

*Version: 11 · Category: Data Extraction · System: No*
