---
id: de-timesheets
title: DE-TimeSheets
description: "Extracts the time entered in time sheets."
sidebar_label: TimeSheets
sidebar_position: 1
---

Extracts the time entered in time sheets.

## Endpoint

```
POST /api/v3/analytics/named-query/DE-TimeSheets/dynamic-execute
```

## Parameters

This query has no parameters.

## Output Columns

| Column | Source Table | Source Column |
|--------|-------------|---------------|
| TimesheetId | tim | oid |
| UserId | usl | Id |
| User | usl | Name |
| UserCompanyId | ucm | Id |
| UserCompany | ucm | Name |
| UserDepartmentId | dep | Id |
| UserDepartment | dep | Name |
| UserEmail | usl | Mail |
| TypologyId | utg | Oid |
| Typology | utg | Name |
| Day | tim | Date |
| Hours | — | (expression) |
| ClientId | cli | Id |
| Client | cli | Name |
| ProjectId | prj | Id |
| Project | prj | Name |
| ProjectNumber | prj | Number |
| JobId | job | Id |
| Job | job | Name |
| JobNumber | job | Number |
| JobType | typ | Name |
| IsBillable | — | iif(...) |
| CompanyId | com | Id |
| Company | com | Name |
| ProductId | prd | Oid |
| Product | prd | Name |
| ProductCode | prd | Code |
| ProductExternalId | prd | ExternalId |
| BrandId | brd | Oid |
| Brand | brd | Name |
| WorkTypeId | wrk | Oid |
| WorkType | wrk | Name |
| Status | — | CASE(...) |
| Approvers | — | isnull(...) |
| ModifiedOn | tim | ModifiedOn |
| RequestedApproval | tim | RequestedApproval |
| HourlyUserCost | — | HourlyUserCost |
| TotalUserCost | — | TotalUserCost |

## Source Tables

| Table | Alias | Join |
|-------|-------|------|
| Timesheet | tim | FROM |
| JobLookup | job | LEFT JOIN |
| ProjectLookup | prj | LEFT JOIN |
| UserLookup | usl | JOIN |
| CompanyLookup | com | JOIN |
| CompanyLookup | ucm | JOIN |
| WorkType | wrk | LEFT JOIN |
| ClientLookup | cli | LEFT JOIN |
| CommercialClientProduct | prd | LEFT JOIN |
| Brand | brd | LEFT JOIN |
| DepartmentLookup | dep | JOIN |
| UserTypology | utg | JOIN |
| JobType | typ | LEFT JOIN |
| tap | — | LEFT JOIN |
| UserLookup | apr | LEFT JOIN |

*Version: 19 · Category: Data Extraction · System: No*
