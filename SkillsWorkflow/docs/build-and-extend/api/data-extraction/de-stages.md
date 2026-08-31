---
id: de-stages
title: DE-Stages
description: "Extracts the list of stages of the workflows."
sidebar_label: Stages
sidebar_position: 1
---

Extracts the list of stages of the workflows.

## Endpoint

```
POST /api/v3/analytics/named-query/DE-Stages/dynamic-execute
```

## Parameters

This query has no parameters.

## Output Columns

| Column | Source Table | Source Column |
|--------|-------------|---------------|
| StageId | wfs | Oid |
| Stage | wfs | Name |
| TypeId | wst | Oid |
| Type | wst | Name |

## Source Tables

| Table | Alias | Join |
|-------|-------|------|
| WorkflowState | wfs | FROM |
| WorkflowStateType | wst | JOIN |

*Version: 2 · Category: Data Extraction · System: No*
