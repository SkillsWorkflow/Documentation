---
id: de-projectsadditionalinformation
title: DE-ProjectsAdditionalInformation
sidebar_label: ProjectsAdditionalInformation
sidebar_position: 1
---

Extracts additional information from projects.

## Endpoint

```
POST /api/v3/analytics/named-query/DE-ProjectsAdditionalInformation/dynamic-execute
```

## Parameters

This query has no parameters.

## Output Columns

| Column | Source Table | Source Column |
|--------|-------------|---------------|
| ProjectId | prj | Oid |
| Project | prj | Name |
| ProjectNumber | prj | Number |
| * | puf | * |

## Source Tables

| Table | Alias | Join |
|-------|-------|------|
| Project | prj | FROM |
| Project_UserFields | puf | LEFT JOIN |

*Version: 4 · Category: Data Extraction · System: No*
