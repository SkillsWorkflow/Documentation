---
id: de-comments
title: DE-Comments
sidebar_label: Comments
sidebar_position: 1
---

Extracts comments from the feed.

## Endpoint

```
POST /api/v3/analytics/named-query/DE-Comments/dynamic-execute
```

## Parameters

This query has no parameters.

## Output Columns

| Column | Source Table | Source Column |
|--------|-------------|---------------|
| CommentsId | — | Oid |
| DocumentType | — | DocumentTypeName |
| DocumentId | — | DocumentOid |
| CreatedById | cre | Id |
| CreatedBy | cre | Name |
| CreatedByHasImage | cre | HasImage |
| CreatedOnUtc | — | CreatedOnUtc |
| ModifiedOnUtc | — | ModifiedOnUtc |
| Text | — | Text |
| IsVisibleToClient | — | IsVisibleToClient |
| Actions | — | ActionsJson |
| Reactions | — | ReactionsJson |
| HasReplies | — | HasComments |

## Source Tables

| Table | Alias | Join |
|-------|-------|------|
| Post | cmt | FROM |
| UserLookup | cre | JOIN |

## Access

| Role | Administrative |
|------|---------------|
| Administrator | Yes |

*Version: 1 · Category: Data Extraction · System: No*
