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
| IsActive | usl | IsActive |
| DepartmentId | dep | Oid |
| Department | dep | Name |
| DivisionId | div | Oid |
| Division | div | Name |
| CompanyId | com | Oid |
| Company | com | Name |
| TypologyId | utp | Oid |
| Typology | utp | Name |
| TypeId | ust | Oid |
| Type | ust | Name |
| CountryId | cou | Oid |
| Country | cou | Name |
| HireDate | usr | HireDate |
| TerminationDate | usr | ExpirationDate |
| InactivatedOnUtc | usl | InactivatedOnUtc |
| Email | usr | Mail |
| RequiredHours | usr | RequiredHours |
| CompanyRequiredHours | com | RequiredHours |
| HourlyValue | usr | HourlyValue |
| CityId | usr | City |
| ModifiedOn | usr | ModifiedOn |
| TaxPayerNumber | usr | TaxPayerNumber |
| ExternalId | usr | ExternalId |
| IsClient | usr | IsClient |
| ClientIds | cli | ClientIds |
| Clients | cli | Clients |

## Source Tables

| Table | Alias | Join |
|-------|-------|------|
| User | usr | FROM |
| Department | dep | JOIN |
| Division | div | JOIN |
| Company | com | JOIN |
| UserTypology | utp | JOIN |
| UserType | ust | LEFT JOIN |
| UserLookup | usl | JOIN |
| Country | cou | LEFT JOIN |
| cli | — | LEFT JOIN |

## Access

| Role | Administrative |
|------|---------------|
| Administrator | Yes |

*Version: 14 · Category: Data Extraction · System: No*
