---
id: de-projectsplannedtime
title: DE-ProjectsPlannedTime
sidebar_label: ProjectsPlannedTime
sidebar_position: 1
---

Extract projects.

## Endpoint

```
POST /api/v3/analytics/named-query/DE-ProjectsPlannedTime/dynamic-execute
```

## Parameters

This query has no parameters.

## Output Columns

| Column | Source Table | Source Column |
|--------|-------------|---------------|
| ClientId | cli | Oid |
| Client | cli | Name |
| ProjectId | prj | Oid |
| Project | — | (expression) |
| ProjectNumber | prj | Number |
| ProductId | pro | Oid |
| Product | pro | Name |
| ClassificationId | cls | Oid |
| Classification | cls | Name |
| NatureId | nat | Oid |
| Nature | nat | Name |
| DepartmentId | eid | Department |
| Department | dep | Name |
| ProjectPlannedUserTypologyGroupId | phd | UserTypologyGroup |
| ProjectPlannedUserTypologyGroup | utg | Name |
| ProjectPlannedUserId | phd | User |
| ProjectPlannedUser | usr | Name |
| EstimateItemDetailId | eid | Oid |
| ProjectPlannedContractedTime | — | (expression) |
| ProjectPlannedTime | — | (expression) |
| ProjectPlannedIncome | — | (expression) |
| Month | phd | Date |
| ActualSellRate | pnh | SellRate |
| ContractedSellRate | eid | TableRateSell |
| RateCardSellRate | eid | TableRate |
| Comments | pnh | Comments |
| Description | pnh | Description |

## Source Tables

| Table | Alias | Join |
|-------|-------|------|
| Project | prj | FROM |
| CommercialClient | cli | JOIN |
| CommercialClientProduct | pro | LEFT JOIN |
| ProjectClassification | cls | JOIN |
| ProjectNature | nat | JOIN |
| WorkflowState | wfs | JOIN |
| WorkflowStateType | wst | JOIN |
| PlannedHoursDeliverableTotal | pnh | JOIN |
| PlannedHoursDeliverableAdjustment | phd | JOIN |
| UserTypologyGroup | utg | JOIN |
| User | usr | JOIN |
| EstimateItemDetail | eid | JOIN |
| EstimateItem | eit | JOIN |
| Estimate | est | JOIN |
| Department | dep | JOIN |
| Division | div | JOIN |
| Company | com | JOIN |

*Version: 6 · Category: Data Extraction · System: No*
