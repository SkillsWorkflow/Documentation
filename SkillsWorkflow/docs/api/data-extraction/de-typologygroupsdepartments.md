---
id: de-typologygroupsdepartments
title: DE-TypologyGroupsDepartments
description: "Extracts typology groups associated to departments."
sidebar_label: TypologyGroupsDepartments
sidebar_position: 1
---

Extracts typology groups associated to departments.

## Endpoint

```
POST /api/v3/analytics/named-query/DE-TypologyGroupsDepartments/dynamic-execute
```

## Parameters

This query has no parameters.

## Output Columns

| Column | Source Table | Source Column |
|--------|-------------|---------------|
| Id | tgd | Oid |
| TypologyGroupId | utg | Oid |
| TypologyGroup | utg | Name |
| DepartmentId | dep | Id |
| Department | dep | Name |

## Source Tables

| Table | Alias | Join |
|-------|-------|------|
| UserTypologyGroupDepartment | tgd | FROM |
| DepartmentLookup | dep | JOIN |
| UserTypologyGroup | utg | JOIN |

*Version: 1 · Category: Data Extraction · System: Yes*
