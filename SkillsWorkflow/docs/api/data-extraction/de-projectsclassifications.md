---
id: de-projectsclassifications
title: DE-ProjectsClassifications
sidebar_label: ProjectsClassifications
sidebar_position: 1
---

Extract project classifications.

## Endpoint

```
POST /api/v3/analytics/named-query/DE-ProjectsClassifications/dynamic-execute
```

## Parameters

This query has no parameters.

## Output Columns

| Column | Source Table | Source Column |
|--------|-------------|---------------|
| ProjectClassificationId | pcl | Oid |
| ProjectClassification | pcl | Name |
| Active | pcl | Active |
| Billable | pcl | Billable |
| Code | pcl | Code |
| Default | pcl | Default |
| Company | c | Name |
| CompanyHasImage | c | HasImage |
| CompanyId | c | Oid |

## Source Tables

| Table | Alias | Join |
|-------|-------|------|
| ProjectClassification | pcl | FROM |
| Company | c | LEFT JOIN |

## Access

| Role | Administrative |
|------|---------------|
| Administrator | Yes |

*Version: 1 · Category: Data Extraction · System: No*
