---
id: de-types
title: DE-Types
sidebar_label: Types
sidebar_position: 1
---

Extracts job types.

## Endpoint

```
POST /api/v3/analytics/named-query/DE-Types/dynamic-execute
```

## Parameters

This query has no parameters.

## Output Columns

| Column | Source Table | Source Column |
|--------|-------------|---------------|
| TypeId | j | Oid |
| DocumentOid | j | Oid |
| Type | j | Name |
| Code | j | Code |
| DurationDays | j | DurationDays |
| Active | j | Active |
| IsRetainer | j | IsRetainer |
| Plannable | j | Plannable |
| IsDeliverable | j | IsDeliverable |
| AllowAllJobTypes | j | AllowAllJobTypes |
| CreatedOn | j | CreatedOn |
| ModifiedOn | j | ModifiedOn |
| BriefingTemplate | bt | Name |
| BriefingTemplateId | bt | Oid |
| BusinessObjectType | bot | Name |
| BusinessObjectTypeId | bot | Oid |
| Company | c | Name |
| CompanyId | c | Oid |
| Division | v | Name |
| DivisionId | v | Oid |
| Department | d | Name |
| DepartmentId | d | Oid |
| Document | doc | Name |
| DocumentId | doc | Oid |
| Workflow | w | Name |
| WorkflowId | w | Oid |
| CreatedByName | u | Name |
| ModifiedByName | us | Name |
| CreatedById | u | Id |
| ModifiedById | us | Id |
| CreatedByHasImage | u | HasImage |
| ModifiedByHasImage | us | HasImage |
| TypeStyle | j | StyleJson |
| AccessibleToAllDepartments | j | AccessibleToAllDepartments |
| AllowsTimesheet | j | AllowsTimesheet |
| ServiceId | ar | Oid |
| Service | ar | Name |
| WorkType | wt | Name |
| WorkTypeId | wt | Oid |

## Source Tables

| Table | Alias | Join |
|-------|-------|------|
| JobType | j | FROM |
| Department | d | LEFT JOIN |
| Company | c | LEFT JOIN |
| Division | v | LEFT JOIN |
| Document | doc | LEFT JOIN |
| DocumentType | w | LEFT JOIN |
| BusinessObjectType | bot | LEFT JOIN |
| BriefingTemplate | bt | LEFT JOIN |
| UserLookup | u | LEFT JOIN |
| UserLookup | us | LEFT JOIN |
| Article | ar | LEFT JOIN |
| WorkType | wt | LEFT JOIN |

## Custom Fields

- Module: `Skill.Module.BusinessObjects.JobType`

## Access

| Role | Administrative |
|------|---------------|
| Administrator | Yes |

*Version: 1 · Category: Data Extraction · System: No*
