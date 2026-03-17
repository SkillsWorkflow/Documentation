---
id: de-leaves
title: DE-Leaves
sidebar_label: Leaves
sidebar_position: 0
---

#Description
Contains documents with information about vacations from employees
#Fields
- CompanyId: unique identifier for the company (?string)
- Company: name of the company (?string)
- LeaveId: unique identifier for the leave (?string)
- LeaveTypeId: unique identifier for the leave type (?string)
- LeaveType: type of leave (?string - can be: 'Sick Leave', 'Vacation', 'Compensation')
- UserId: unique identifier for the user (?string)
- User: name of the user (?string)
- Day: the date of the leave (?string, format yyyy-mm-ddTHH:MM:SS)
- IsHalfDay: indicates if the leave is for half a day (bool)
- Hours: leave duration in hours (int)
- LeaveTypeYear: the year of the leave type (integer)
- LeaveTypeExpiresOn: the date when the leave type expires (?string, format yyyy-mm-ddTHH:MM:SS)
- ModifiedOn: date and time when the leave was last modified (?string, format yyyy-mm-ddTHH:MM:SS.SSS)
- RequestedApproval: indicates if the leave was requested for approval (bool)
- Status: status of the leave (?string - can be: 'New', 'Approved', 'Rejected')
#Rules
- If the user doesn't mention the year or month, assume the present.
- If the user asks about a specific user, filter by the 'User' field.
- If the user asks about a specific leave type, filter by the 'LeaveType' field.
- If the user asks about a specific company, filter by the 'Company' field.
- If the user asks about half-day leaves, filter by the 'IsHalfDay' field.
- If the user doesn't specify a status, include all statuses.

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
| Hours | — | [object Object](...) |
| LeaveTypeYear | uiv | Year |
| LeaveTypeExpiresOn | uiv | ExpirationDate |
| ModifiedOn | lev | ModifiedOn |
| RequestedApproval | lev | RequestedApproval |
| Status | — | — |
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

*Version: 7 · Category: Data Extraction · System: Yes*
