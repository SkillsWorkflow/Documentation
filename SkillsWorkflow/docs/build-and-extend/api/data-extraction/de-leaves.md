---
id: de-leaves
title: DE-Leaves
description: "Extracts employee leaves (such as vacation, sick leave or compensation) with the leave type, day, hours, approval status and approvers."
sidebar_label: Leaves
sidebar_position: 1
---

Extracts employee leaves (such as vacation, sick leave or compensation) with the leave type, day, hours, approval status and approvers.

## Endpoint

```
POST /api/v3/analytics/named-query/DE-Leaves/dynamic-execute
```

## Parameters

This query has no parameters.

## Output Columns

| Column | Source Table | Source Column |
|--------|-------------|---------------|
| CompanyId | com | Id |
| Company | com | Name |
| LeaveId | lev | Oid |
| LeaveTypeId | lvt | Oid |
| LeaveType | lvt | Name |
| UserId | usl | Id |
| User | usl | Name |
| Day | lev | Day |
| IsHalfDay | lev | HalfDay |
| Hours | — | iif(...) |
| TotalMinutes | lev | TotalMinutes |
| LeaveTypeYear | uiv | Year |
| LeaveTypeExpiresOn | uiv | ExpirationDate |
| ModifiedOn | lev | ModifiedOn |
| RequestedApproval | lev | RequestedApproval |
| Status | — | CASE(...) |
| Approvers | apr | Approvers |
| HRApprovers | hra | Approvers |

## Source Tables

| Table | Alias | Join |
|-------|-------|------|
| UserVacation | lev | FROM |
| UserInfoVacation | uiv | JOIN |
| UserVacationType | lvt | JOIN |
| UserLookup | usl | JOIN |
| CompanyLookup | com | JOIN |
| User | usr | JOIN |
| apr | — | LEFT JOIN |
| apr | hra | LEFT JOIN |

## Access

| Role | Administrative |
|------|---------------|
| LeaveRead | No |

*Version: 10 · Category: Data Extraction · System: Yes*
