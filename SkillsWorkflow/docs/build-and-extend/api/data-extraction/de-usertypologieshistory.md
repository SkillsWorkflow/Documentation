---
id: de-usertypologieshistory
title: DE-UserTypologiesHistory
description: "Extracts the historical data of the typologies where the user has been inside the company."
sidebar_label: UserTypologiesHistory
sidebar_position: 1
---

Extracts the historical data of the typologies where the user has been inside the company.

## Endpoint

```
POST /api/v3/analytics/named-query/DE-UserTypologiesHistory/dynamic-execute
```

## Parameters

This query has no parameters.

## Output Columns

| Column | Source Table | Source Column |
|--------|-------------|---------------|
| UserTypologyHistoryId | uth | Oid |
| StartDate | uth | StartDate |
| EndDate | uth | EndDate |
| CreatedById | cre | Id |
| CreatedBy | cre | Name |
| CreatedByHasImage | cre | HasImage |
| ModifiedById | mod | Id |
| ModifiedBy | mod | Name |
| ModifiedByHasImage | mod | HasImage |
| UserId | usr | Id |
| User | usr | Name |
| UserHasImage | usr | HasImage |
| TypologyId | typ | Oid |
| Typology | typ | Name |
| TypologyGroupId | tgp | Oid |
| TypologyGroup | tgp | Name |
| UserTypeId | ust | Oid |
| UserType | ust | Name |
| DepartmentId | dep | Id |
| Department | dep | Name |

## Source Tables

| Table | Alias | Join |
|-------|-------|------|
| UserTypologyHistory | uth | FROM |
| UserLookup | usr | JOIN |
| UserTypology | typ | JOIN |
| UserTypologyGroup | tgp | LEFT JOIN |
| DepartmentLookup | dep | JOIN |
| UserType | ust | LEFT JOIN |
| UserLookup | cre | JOIN |
| UserLookup | mod | JOIN |

## Access

| Role | Administrative |
|------|---------------|
| UserTypologyHistoryRead | No |

*Version: 3 · Category: Data Extraction · System: No*
