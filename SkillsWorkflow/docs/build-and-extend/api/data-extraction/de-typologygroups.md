---
id: de-typologygroups
title: DE-TypologyGroups
description: "Extracts user typology groups of user typologies."
sidebar_label: TypologyGroups
sidebar_position: 1
---

Extracts user typology groups of user typologies.

## Endpoint

```
POST /api/v3/analytics/named-query/DE-TypologyGroups/dynamic-execute
```

## Parameters

This query has no parameters.

## Output Columns

| Column | Source Table | Source Column |
|--------|-------------|---------------|
| TypologyGroupId | utg | Oid |
| TypologyGroup | utg | Name |
| CompanyId | com | Oid |
| Company | com | Name |

## Source Tables

| Table | Alias | Join |
|-------|-------|------|
| UserTypologyGroup | utg | FROM |
| Company | com | JOIN |

*Version: 3 · Category: Data Extraction · System: No*
