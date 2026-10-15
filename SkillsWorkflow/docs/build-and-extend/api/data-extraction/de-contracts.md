---
id: de-contracts
title: DE-Contracts
description: "Extracts contracts information."
sidebar_label: Contracts
sidebar_position: 1
---

Extracts contracts information.

## Endpoint

```
POST /api/v3/analytics/named-query/DE-Contracts/dynamic-execute
```

## Parameters

Send every parameter below in the `parameters` object of the request body. Use `null` for a parameter you do not want to set.

| Parameter | Used in |
|-----------|---------|
| ModifiedFrom | `(@ModifiedFrom is null or pjt.ModifiedOnUtc >= @ModifiedFrom) and` |
| ContractId | `(@ContractId is null or cnt.Id = @ContractId) and` |
| ContractNumber | `(@ContractNumber is null or cnt.Number = cast(@ContractNumber as nvarchar))` |

## Output Columns

:::caution
Column metadata could not be extracted — the SQL statement could not be parsed automatically.
:::

## Source Tables

No table metadata detected.

## Custom Fields

- Module: `Skill.Module.BusinessObjects.Contract`

## Access

| Role | Administrative |
|------|---------------|
| ContractRead | No |

*Version: 6 · Category: Data Extraction · System: No*
