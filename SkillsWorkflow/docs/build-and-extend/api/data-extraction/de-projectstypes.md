---
id: de-projectstypes
title: DE-ProjectsTypes
sidebar_label: ProjectsTypes
sidebar_position: 1
---

Extract projects types.

## Endpoint

```
POST /api/v3/analytics/named-query/DE-ProjectsTypes/dynamic-execute
```

## Parameters

This query has no parameters.

## Output Columns

| Column | Source Table | Source Column |
|--------|-------------|---------------|
| DocumentOid | prt | Oid |
| ProjectTypeId | prt | Oid |
| ProjectType | prt | Name |
| Company | com | name |
| CompanyId | com | Oid |
| CompanyHasImage | com | HasImage |
| DocumentType | dct | Name |
| TemplateFileName | prt | TemplateFileName |
| AllowsTimesheet | prt | AllowsTimesheet |
| IsDeliverable | prt | IsDeliverable |
| Active | prt | Active |

## Source Tables

| Table | Alias | Join |
|-------|-------|------|
| ProjectNature | prt | FROM |
| Company | com | FROM |
| DocumentType | dct | FROM |

## Access

| Role | Administrative |
|------|---------------|
| Administrator | Yes |

*Version: 1 · Category: Data Extraction · System: No*
