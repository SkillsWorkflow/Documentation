---
id: de-transitions
title: DE-Transitions
description: "Extracts the list of existing transitions."
sidebar_label: Transitions
sidebar_position: 1
---

Extracts the list of existing transitions.

## Endpoint

```
POST /api/v3/analytics/named-query/DE-Transitions/dynamic-execute
```

## Parameters

This query has no parameters.

## Output Columns

| Column | Source Table | Source Column |
|--------|-------------|---------------|
| Oid | wt | Oid |
| TransitionId | wt | Oid |
| Transition | wt | Name |
| Document | doc | Name |
| DocumentId | doc | Oid |
| Workflow | dty | Name |
| WorkflowId | dty | Oid |
| FromWorkflowState | fws | Name |
| FromWorkflowStateId | fws | Oid |
| ToWorkflowState | tws | Name |
| ToWorkflowStateId | tws | Oid |
| ExternalId | wt | ExternalId |
| Order | wt | Order |
| RequestConfirmation | wt | RequestConfirmation |
| MustSendNotification | wt | MustSendNotification |
| CommentRequired | wt | CommentRequired |
| HoursRequired | wt | HoursRequired |
| FileUploadRequired | wt | FileUploadRequired |
| FileUploadFolder | wt | FileUploadFolder |
| QueryValidation | wt | QueryValidation |
| Motives | mot | Motives |
| Actions | act | Actions |
| FromAllowWriteTeams | fpr | Teams |
| ToAllowWriteTeams | tpr | Teams |
| Roles | rol | Roles |
| TypeIds | typ | TypeIds |
| Types | typ | Types |

## Source Tables

| Table | Alias | Join |
|-------|-------|------|
| WorkflowStateTransition | wt | FROM |
| WorkflowState | fws | LEFT JOIN |
| WorkflowState | tws | LEFT JOIN |
| Document | doc | JOIN |
| DocumentType | dty | JOIN |
| typ | — | LEFT JOIN |
| mot | — | LEFT JOIN |
| act | — | LEFT JOIN |
| pro | fpr | LEFT JOIN |
| pro | tpr | LEFT JOIN |
| rol | — | LEFT JOIN |

## Access

| Role | Administrative |
|------|---------------|
| Administrator | Yes |

*Version: 1 · Category: Data Extraction · System: No*
