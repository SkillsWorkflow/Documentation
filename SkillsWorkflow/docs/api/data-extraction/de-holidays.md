---
id: de-holidays
title: DE-Holidays
sidebar_label: Holidays
sidebar_position: 1
---

Extracts the list of holidays.

## Endpoint

```
POST /api/v3/analytics/named-query/DE-Holidays/dynamic-execute
```

## Parameters

This query has no parameters.

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

*Version: 4 · Category: Data Extraction · System: No*
