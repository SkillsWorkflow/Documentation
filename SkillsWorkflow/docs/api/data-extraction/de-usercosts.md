---
id: de-usercosts
title: DE-UserCosts
sidebar_label: UserCosts
sidebar_position: 1
---

Extracts cost of users.

## Endpoint

```
POST /api/v3/analytics/named-query/DE-UserCosts/dynamic-execute
```

## Parameters

This query has no parameters.

## Output Columns

| Column | Source Table | Source Column |
|--------|-------------|---------------|
| UserId | usr | Oid |
| User | usr | Name |
| MonthlyValue | umv | MonthlyValue |
| HourlyValue | umv | HourlyValue |
| StartDate | umv | StartDate |
| EndDate | umv | EndDate |
| CompanyId | com | Oid |
| Company | com | Name |
| CurrencyId | cur | Oid |
| Currency | cur | Name |
| CreatedOn | umv | CreatedOnUtc |
| ModifiedOn | umv | ModifiedOnUtc |

## Source Tables

| Table | Alias | Join |
|-------|-------|------|
| UserMonthlyValue | umv | FROM |
| User | usr | FROM |
| Company | com | FROM |
| Currency | cur | FROM |

*Version: 2 · Category: Data Extraction · System: No*
