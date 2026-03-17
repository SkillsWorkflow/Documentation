---
id: de-businessobjecttypes
title: DE-BusinessObjectTypes
sidebar_label: BusinessObjectTypes
sidebar_position: 1
---

Extracts business object types.

## Endpoint

```
POST /api/v3/analytics/named-query/DE-BusinessObjectTypes/dynamic-execute
```

## Parameters

This query has no parameters.

## Output Columns

| Column | Source Table | Source Column |
|--------|-------------|---------------|
| BusinessObjectTypeId | bot | Oid |
| BusinessObjectType | bot | Name |
| Default | bot | Default |
| Document | doc | Name |
| DocumentId | doc | Oid |
| HasConfiguration | — | iif(...) |

## Source Tables

| Table | Alias | Join |
|-------|-------|------|
| BusinessObjectType | bot | FROM |
| Document | doc | JOIN |

## Access

| Role | Administrative |
|------|---------------|
| Administrator | Yes |

*Version: 1 · Category: Data Extraction · System: No*
