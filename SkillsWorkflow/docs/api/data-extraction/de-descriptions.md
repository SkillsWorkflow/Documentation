---
id: de-descriptions
title: DE-Descriptions
sidebar_label: Descriptions
sidebar_position: 1
---

Extracts the different versions of the descriptions of documents.

## Endpoint

```
POST /api/v3/analytics/named-query/DE-Descriptions/dynamic-execute
```

## Parameters

This query has no parameters.

## Output Columns

| Column | Source Table | Source Column |
|--------|-------------|---------------|
| DescriptionId | — | Oid |
| Description | — | PlainText |
| DescriptionHtml | — | Text |
| Version | — | Version |
| LatestVersion | — | — |
| IsLastVersion | — | [object Object](...) |
| DocumentId | — | DocumentOid |
| Document | — | DocumentTypeName |
| CreatedOn | — | CreatedOn |
| CreatedById | cre | Id |
| CreatedBy | cre | Name |
| ModifiedOn | des | EditedOn |

## Source Tables

| Table | Alias | Join |
|-------|-------|------|
| DocumentBrief | des | FROM |
| UserLookup | cre | JOIN |

*Version: 2 · Category: Data Extraction · System: No*
