---
id: de-jobs
title: DE-Jobs
sidebar_label: Jobs
sidebar_position: 1
---

Extracts the list of jobs.

## Endpoint

```
POST /api/v3/analytics/named-query/DE-Jobs/dynamic-execute
```

## Parameters

This query has no parameters.

## Output Columns

| Column | Source Table | Source Column |
|--------|-------------|---------------|
| DocumentOid | job | Oid |
| ClientId | cli | Id |
| Client | cli | Name |
| ClientHasImage | cli | HasImage |
| ProjectId | prj | Id |
| Project | prj | Name |
| ProjectNumber | prj | Number |
| JobId | job | Oid |
| Job | job | Subject |
| JobNumber | job | Number |
| BusinessValue | job | BusinessValue |
| ProductId | pro | Oid |
| Product | pro | Name |
| StageId | wfs | Oid |
| Stage | wfs | Name |
| StageColor | wfs | Color |
| StageTypeId | wst | Oid |
| StageType | wst | Name |
| StageTypeColor | wst | Color |
| TypeId | typ | Oid |
| Type | typ | Name |
| CompanyId | com | Id |
| Company | com | Name |
| CompanyHasImage | com | HasImage |
| DivisionId | div | Id |
| Division | div | Name |
| DepartmentId | dep | Id |
| Department | dep | Name |
| StartDate | job | EntryDateUtc |
| EndDate | job | AgreedDateUtc |
| CreatedById | cre | Id |
| CreatedBy | cre | Name |
| CreatedByHasImage | cre | HasImage |
| ModifiedId | mod | Id |
| ModifiedBy | mod | Name |
| ModifiedHasImage | mod | HasImage |
| ModifiedOn | job | ModifiedOn |
| AlreadyRead | — | iif(...) |
| CurrentUserInTeam | — | iif(...) |
| CurrentUserPending | — | iif(...) |
| IsDelayed | — | iif(...) |
| Delayed | — | iif(...) |
| Version | job | Version |
| Motive | his | Motive |

## Source Tables

| Table | Alias | Join |
|-------|-------|------|
| Deliverable | job | FROM |
| UserLookup | cre | JOIN |
| UserLookup | mod | JOIN |
| ProjectLookup | prj | JOIN |
| ClientLookup | cli | JOIN |
| CommercialClientProduct | pro | LEFT JOIN |
| WorkflowState | wfs | JOIN |
| WorkflowStateType | wst | JOIN |
| JobType | typ | JOIN |
| DepartmentLookup | dep | JOIN |
| DivisionLookup | div | JOIN |
| CompanyLookup | com | JOIN |
| cut | — | LEFT JOIN |
| BaseObjectRead | bor | LEFT JOIN |
| his | — | LEFT JOIN |

## Custom Fields

- Module: `Skill.Module.BusinessObjects.Deliverable`

## Access

| Role | Administrative |
|------|---------------|
| Administrator | Yes |

*Version: 16 · Category: Data Extraction · System: No*
