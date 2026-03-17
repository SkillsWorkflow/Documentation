---
id: de-requests
title: DE-Requests
sidebar_label: Requests
sidebar_position: 1
---

Extracts requests data.

## Endpoint

```
POST /api/v3/analytics/named-query/DE-Requests/dynamic-execute
```

## Parameters

This query has no parameters.

## Output Columns

| Column | Source Table | Source Column |
|--------|-------------|---------------|
| DocumentOid | doc | Oid |
| RequestId | doc | Oid |
| Request | doc | Name |
| RequestNumber | doc | Number |
| BeginDateUtc | doc | BeginDateUtc |
| EndDateUtc | doc | EndDateUtc |
| CreatedOnUtc | doc | CreatedOnUtc |
| ModifiedOnUtc | doc | ModifiedOnUtc |
| Days | — | datediff(...) |
| TagsJson | doc | TagsJson |
| IsActivated | doc | IsActivated |
| CreatedBy | usrCb | Name |
| CreatedById | usrCb | Id |
| CreatedByHasImage | usrCb | HasImage |
| CreatedByTags | usrCb | TagsJson |
| Company | c | Name |
| CompanyId | c | Id |
| CompanyHasImage | c | HasImage |
| ClientGroup | clg | Name |
| Client | cclu | Name |
| ClientId | cclu | Id |
| ClientHasImage | cclu | HasImage |
| ClientClassification | ccl | Name |
| Type | jt | Name |
| TypeStyle | jt | StyleJson |
| Product | ccp | Name |
| Brand | brd | Name |
| Contract | con | Name |
| ContractId | con | Id |
| Stage | — | isnull(...) |
| StageColor | — | isnull(...) |
| ModifiedBy | usrMb | Name |
| ModifiedById | usrMb | Id |
| ModifiedByHasImage | usrMb | HasImage |
| IsDraft | doc | IsDraft |
| CreatedByCompanyId | uc | Id |
| CreatedByCompany | uc | Name |
| CreatedByCompanyHasImage | uc | HasImage |
| StageType | wst | Name |
| AlreadyRead | — | iif(...) |
| CurrentUserInTeam | — | iif(...) |
| BaseObjectReadId | bor | Oid |
| FavoriteId | uf | Oid |
| IsFavorite | — | iif(...) |
| Workflow | wkf | Name |
| Priority | doc | Priority |
| Version | doc | Version |
| Department | dep | Name |
| DepartmentId | dep | Id |
| Division | div | Name |
| DivisionId | div | Id |

## Source Tables

| Table | Alias | Join |
|-------|-------|------|
| Request | doc | FROM |
| UserFavorite | uf | LEFT JOIN |
| UserLookup | usrMb | LEFT JOIN |
| CompanyLookup | c | LEFT JOIN |
| Clientlookup | cclu | LEFT JOIN |
| ClientGroup | clg | LEFT JOIN |
| ClientClassification | ccl | LEFT JOIN |
| JobType | jt | LEFT JOIN |
| DepartmentLookup | dep | LEFT JOIN |
| DivisionLookup | div | LEFT JOIN |
| CommercialClientProduct | ccp | LEFT JOIN |
| Brand | brd | LEFT JOIN |
| UserLookup | usrCb | LEFT JOIN |
| CompanyLookup | uc | LEFT JOIN |
| ContractLookup | con | LEFT JOIN |
| WorkflowState | ws | JOIN |
| Configuration | cfg | JOIN |
| UserLookup | usr | LEFT JOIN |
| CompanyLookup | com | LEFT JOIN |
| LocalizationLanguage | lol | LEFT JOIN |
| Localization | loc | LEFT JOIN |
| Currency | curr | LEFT JOIN |
| DocumentType | wkf | JOIN |
| cut | — | LEFT JOIN |
| BaseObjectRead | bor | LEFT JOIN |
| WorkflowStateType | wst | JOIN |

## Custom Fields

- Module: `Skill.Module.BusinessObjects.Request`

*Version: 1 · Category: Data Extraction · System: No*
