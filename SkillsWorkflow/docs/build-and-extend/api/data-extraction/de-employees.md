---
id: de-employees
title: DE-Employees
sidebar_label: Employees
sidebar_position: 1
---

Extracts employees.

## Endpoint

```
POST /api/v3/analytics/named-query/DE-Employees/dynamic-execute
```

## Parameters

This query has no parameters.

## Output Columns

| Column | Source Table | Source Column |
|--------|-------------|---------------|
| EmployeeId | e | Oid |
| Employee | e | Name |
| Company | c | name |
| CompanyId | c | Oid |
| User | u | Name |
| UserId | u | Oid |
| ExternalId | e | ExternalId |
| MaxValue | e | MaxValue |
| Active | e | Active |

## Source Tables

| Table | Alias | Join |
|-------|-------|------|
| Employee | e | FROM |
| User | u | LEFT JOIN |
| Company | c | JOIN |

*Version: 1 · Category: Data Extraction · System: No*
