---
id: de-commentsreplies
title: DE-CommentsReplies
sidebar_label: CommentsReplies
sidebar_position: 1
---

Extracts replies of comments.

## Endpoint

```
POST /api/v3/analytics/named-query/DE-CommentsReplies/dynamic-execute
```

## Parameters

This query has no parameters.

## Output Columns

| Column | Source Table | Source Column |
|--------|-------------|---------------|
| ReplyId | rpl | Oid |
| CommentsId | cmt | Oid |
| DocumentId | cmt | DocumentOid |
| DocumentType | cmt | DocumentTypeName |
| CreatedById | cre | Id |
| CreatedBy | cre | Name |
| CreatedByHasImage | cre | HasImage |
| Text | rpl | Text |
| CreatedOnUtc | rpl | CreatedOnUtc |
| ModifiedOnUtc | rpl | ModifiedOnUtc |
| Reactions | rpl | ReactionsJson |
| Mentions | rpl | MentionsJson |

## Source Tables

| Table | Alias | Join |
|-------|-------|------|
| PostComment | rpl | FROM |
| Post | cmt | JOIN |
| UserLookup | cre | JOIN |

## Access

| Role | Administrative |
|------|---------------|
| Administrator | Yes |

*Version: 1 · Category: Data Extraction · System: No*
