---
id: de-typologies
title: DE-Typologies
description: "Extracts the list of typologies of users."
sidebar_label: Typologies
sidebar_position: 1
---

Extracts the list of typologies of users.

## Endpoint

```
POST /api/v3/analytics/named-query/DE-Typologies/dynamic-execute
```

## Parameters

This query has no parameters.

## Output Columns

| Column | Source Table | Source Column |
|--------|-------------|---------------|
| DocumentOid | utp | Oid |
| TypologyId | utp | Oid |
| Typology | utp | Name |
| TypologyGroupId | utg | Oid |
| TypologyGroup | utg | Name |
| CompanyId | com | Id |
| Company | com | Name |
| CompanyHasImage | com | HasImage |
| DivisionId | div | Id |
| Division | div | Name |
| DepartmentId | dep | Id |
| Department | dep | Name |
| Plannable | utp | Plannable |
| IsActive | utp | Active |
| HourlyValue | utp | HourlyValue |

## Source Tables

| Table | Alias | Join |
|-------|-------|------|
| UserTypology | utp | FROM |
| UserTypologyGroup | utg | LEFT JOIN |
| CompanyLookup | com | LEFT JOIN |
| DepartmentLookup | dep | LEFT JOIN |
| DivisionLookup | div | LEFT JOIN |

## Custom Fields

- Module: `Skill.Module.BusinessObjects.UserTypology`

*Version: 4 · Category: Data Extraction · System: Yes*
