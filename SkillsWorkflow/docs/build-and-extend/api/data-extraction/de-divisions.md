---
id: de-divisions
title: DE-Divisions
description: "Extracts the list of divisions."
sidebar_label: Divisions
sidebar_position: 1
---

Extracts the list of divisions.

## Endpoint

```
POST /api/v3/analytics/named-query/DE-Divisions/dynamic-execute
```

## Parameters

This query has no parameters.

## Output Columns

| Column | Source Table | Source Column |
|--------|-------------|---------------|
| Oid | div | Oid |
| DocumentOid | div | Oid |
| CompanyId | com | Oid |
| Company | com | Name |
| DivisionId | div | Oid |
| Division | div | Name |
| ExternalId | div | ExternalId |
| Code | div | Code |

## Source Tables

| Table | Alias | Join |
|-------|-------|------|
| Division | div | FROM |
| Company | com | JOIN |

## Custom Fields

- Module: `Skill.Module.BusinessObjects.Division`

## Access

| Role | Administrative |
|------|---------------|
| DivisionRead | No |

*Version: 5 · Category: Data Extraction · System: No*
