---
id: de-assignments
title: DE-Assignments
sidebar_label: Assignments
sidebar_position: 1
---

Extracts the teams of users associated with each document.

## Endpoint

```
POST /api/v3/analytics/named-query/DE-Assignments/dynamic-execute
```

## Parameters

This query has no parameters.

## Output Columns

| Column | Source Table | Source Column |
|--------|-------------|---------------|
| DocumentId | ass | DocumentOid |
| DocumentType | — | [object Object](...) |
| DocumentSubType | ass | BusinessObjectTypeName |
| TeamId | ast | Oid |
| Team | ast | Name |
| UserId | usr | Id |
| User | usr | Name |
| ModifiedOnUtc | ass | ModifiedOnUtc |
| ModifiedById | mod | Id |
| ModifiedBy | mod | Name |

## Source Tables

| Table | Alias | Join |
|-------|-------|------|
| Assignment | ass | FROM |
| AssignmentType | ast | JOIN |
| UserLookup | usr | JOIN |
| UserLookup | mod | JOIN |

*Version: 1 · Category: Data Extraction · System: No*
