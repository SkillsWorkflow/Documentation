---
id: de-history
title: DE-History
sidebar_label: History
sidebar_position: 1
---

Extract history of documents.

## Endpoint

```
POST /api/v3/analytics/named-query/DE-History/dynamic-execute
```

## Parameters

This query has no parameters.

## Output Columns

| Column | Source Table | Source Column |
|--------|-------------|---------------|
| HistoryId | hst | Oid |
| DocumentType | hst | DocumentTypeName |
| DocumentId | hst | DocumentOid |
| Version | — | Version |
| StartDate | hst | StartDate |
| EndDate | hst | EndDate |
| UserId | usr | Id |
| User | usr | Name |
| UserHasImage | usr | HasImage |
| Action | — | Action |
| StageId | wfs | Oid |
| Stage | wfs | Name |
| StageColor | wfs | Color |
| StageTypeId | wst | Oid |
| StageType | wst | Name |
| StageTypeColor | wst | Color |
| CreatedOnUtc | — | CreatedOnUtc |

## Source Tables

| Table | Alias | Join |
|-------|-------|------|
| History | hst | FROM |
| UserLookup | usr | JOIN |
| WorkflowState | wfs | JOIN |
| WorkflowStateType | wst | JOIN |

## Access

| Role | Administrative |
|------|---------------|
| Administrator | Yes |

*Version: 1 · Category: Data Extraction · System: No*
