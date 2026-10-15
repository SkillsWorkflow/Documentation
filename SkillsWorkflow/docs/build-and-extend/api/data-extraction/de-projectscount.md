---
id: de-projectscount
title: DE-ProjectsCount
description: "Gets the count of projects for the provided filters."
sidebar_label: ProjectsCount
sidebar_position: 1
---

Gets the count of projects for the provided filters.

## Endpoint

```
POST /api/v3/analytics/named-query/DE-ProjectsCount/dynamic-execute
```

## Parameters

Send every parameter below in the `parameters` object of the request body. Use `null` for a parameter you do not want to set.

| Parameter | Used in |
|-----------|---------|
| ModifiedFrom | `(@ModifiedFrom is null or pjt.ModifiedOn >= @ModifiedFrom) and` |
| ProjectId | `(@ProjectId is null or prj.Id = @ProjectId) and` |
| ProjectNumber | `(@ProjectNumber is null or prj.Number = cast(@ProjectNumber as nvarchar))` |

## Output Columns

:::caution
Column metadata could not be extracted — the SQL statement could not be parsed automatically.
:::

## Source Tables

No table metadata detected.

## Access

| Role | Administrative |
|------|---------------|
| ProjectRead | No |

*Version: 3 · Category: Data Extraction · System: No*
