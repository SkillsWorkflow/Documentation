---
id: de-users
title: DE-Users
sidebar_label: Users
sidebar_position: 1
---

Extracts the list of users.

## Endpoint

```
POST /api/v3/analytics/named-query/DE-Users/dynamic-execute
```

## Parameters

This query has no parameters.

## Output Columns

| Column | Source Table | Source Column |
|--------|-------------|---------------|
| DocumentOid | usr | Oid |
| UserId | usr | Oid |
| User | usr | Name |
| UserHasImage | usr | HasImage |
| IsActive | usl | IsActive |
| DepartmentId | dep | Oid |
| Department | dep | Name |
| DivisionId | div | Oid |
| Division | div | Name |
| CompanyId | com | Oid |
| Company | com | Name |
| CompanyHasImage | com | HasImage |
| TypologyId | utp | Oid |
| Typology | utp | Name |
| TypologyGroupId | utg | Oid |
| TypologyGroup | utg | Name |
| TypeId | ust | Oid |
| Type | ust | Name |
| CountryId | cou | Oid |
| Country | cou | Name |
| HireDate | usr | HireDate |
| StartDate | usr | StartDate |
| TerminationDate | usr | ExpirationDate |
| InactivatedOnUtc | usl | InactivatedOnUtc |
| Email | usr | Mail |
| SsoUserName | usr | SsoUserName |
| AdUserName | usr | AdUserName |
| UserName | usl | UserName |
| RequiredHours | usr | RequiredHours |
| CompanyRequiredHours | com | RequiredHours |
| HourlyValue | usr | HourlyValue |
| CityId | usr | City |
| CreatedOn | usr | CreatedOn |
| ModifiedOn | usr | ModifiedOn |
| TaxPayerNumber | usr | TaxPayerNumber |
| ExternalId | usr | ExternalId |
| IsClient | usr | IsClient |
| IsTimesheetRequired | usr | TimesheetRequired |
| SsoOnly | usr | SsoOnly |
| IsApprover | usr | Approver |
| ResponsibleId | res | Id |
| Responsible | res | Name |
| ResponsibleHasImage | res | HasImage |
| ClientIds | cli | ClientIds |
| Clients | cli | Clients |
| DaysUntilBlocked | usr | DaysUntilBlocked |
| IsWorkingOnSaturday | usr | Saturday |
| IsWorkingOnSunday | usr | Sunday |
| IsWorkingOnMonday | usr | Monday |
| IsWorkingOnTuesday | usr | Tuesday |
| IsWorkingOnWednesday | usr | Wednesday |
| IsWorkingOnThursday | usr | Thursday |
| IsWorkingOnFriday | usr | Friday |

## Source Tables

| Table | Alias | Join |
|-------|-------|------|
| User | usr | FROM |
| Department | dep | JOIN |
| Division | div | JOIN |
| Company | com | JOIN |
| UserTypology | utp | JOIN |
| UserTypologyGroup | utg | LEFT JOIN |
| UserType | ust | LEFT JOIN |
| UserLookup | usl | JOIN |
| Country | cou | LEFT JOIN |
| cli | — | LEFT JOIN |
| UserLookup | res | LEFT JOIN |

## Custom Fields

- Module: `Skill.Module.BusinessObjects.User`

## Access

| Role | Administrative |
|------|---------------|
| UserRead | No |

*Version: 25 · Category: Data Extraction · System: No*
