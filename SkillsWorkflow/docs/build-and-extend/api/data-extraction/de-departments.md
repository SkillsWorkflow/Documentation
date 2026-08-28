---
id: de-departments
title: DE-Departments
description: "Extracts the list of departments."
sidebar_label: Departments
sidebar_position: 1
---

Extracts the list of departments.

## Endpoint

```
POST /api/v3/analytics/named-query/DE-Departments/dynamic-execute
```

## Parameters

This query has no parameters.

## Output Columns

| Column | Source Table | Source Column |
|--------|-------------|---------------|
| CompanyId | com | Oid |
| Company | com | Name |
| DivisionId | div | Oid |
| Division | div | Name |
| DepartmentId | dep | Oid |
| Department | dep | Name |
| ModifiedOn | dep | ModifiedOnUtc |

## Source Tables

| Table | Alias | Join |
|-------|-------|------|
| Department | dep | FROM |
| Division | div | JOIN |
| Company | com | JOIN |

*Version: 3 · Category: Data Extraction · System: No*
