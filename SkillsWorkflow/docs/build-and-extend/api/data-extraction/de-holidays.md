---
id: de-holidays
title: DE-Holidays
description: "Extracts the list of holidays."
sidebar_label: Holidays
sidebar_position: 1
---

Extracts the list of holidays.

## Endpoint

```
POST /api/v3/analytics/named-query/DE-Holidays/dynamic-execute
```

## Parameters

Send every parameter below in the `parameters` object of the request body. Use `null` for a parameter you do not want to set.

| Parameter | Used in |
|-----------|---------|
| ModifiedFrom | `where (@ModifiedFrom is null or hol.ModifiedOn >= @ModifiedFrom)` |

## Output Columns

| Column | Source Table | Source Column |
|--------|-------------|---------------|
| Day | hol | Date |
| CompanyId | com | Oid |
| Company | com | Name |
| HolidayId | hol | Oid |
| Holiday | hol | Name |
| ModifiedOn | hol | ModifiedOn |

## Source Tables

| Table | Alias | Join |
|-------|-------|------|
| Holiday | hol | FROM |
| Company | com | LEFT JOIN |

## Access

| Role | Administrative |
|------|---------------|
| HolidayRead | No |

*Version: 6 · Category: Data Extraction · System: No*
