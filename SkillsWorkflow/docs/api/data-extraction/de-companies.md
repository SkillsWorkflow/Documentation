---
id: de-companies
title: DE-Companies
sidebar_label: Companies
sidebar_position: 1
---

Extracts the list of companies.

## Endpoint

```
POST /api/v3/analytics/named-query/DE-Companies/dynamic-execute
```

## Parameters

This query has no parameters.

## Output Columns

| Column | Source Table | Source Column |
|--------|-------------|---------------|
| Name | com | Name |
| Code | com | Code |
| Oid | com | Oid |
| Company | com | Name |
| CompanyId | com | Oid |
| CompanyHasImage | com | HasImage |
| Currency | cur | Name |
| CurrencyId | cur | Oid |
| TimesheetStart | com | TimesheetStart |
| ResourceType | com | GanttChartResourceType |
| ProjectArticle | com | ProjectArticle |
| HoursType | com | HoursType |
| RequiredHours | com | RequiredHours |
| MarginType | com | MarginType |
| Article | art | Name |
| ArticleId | art | Oid |
| CreatedOnUtc | com | CreatedOnUtc |
| CreatedById | cre | Id |
| CreatedBy | cre | Name |
| CreatedByHasImage | cre | HasImage |
| ModifiedOnUtc | com | ModifiedOnUtc |
| ModifiedOn | com | ModifiedOnUtc |
| ModifiedById | mod | Id |
| ModifiedBy | mod | Name |
| ModifiedByHasImage | mod | HasImage |

## Source Tables

| Table | Alias | Join |
|-------|-------|------|
| Company | com | FROM |
| UserLookup | cre | JOIN |
| UserLookup | mod | LEFT JOIN |
| Article | art | LEFT JOIN |
| Currency | cur | LEFT JOIN |

*Version: 5 · Category: Data Extraction · System: Yes*
