---
id: de-typologygroupscompanies
title: DE-TypologyGroupsCompanies
sidebar_label: TypologyGroupsCompanies
sidebar_position: 1
---

Extracts typology grous associated to companies

## Endpoint

```
POST /api/v3/analytics/named-query/DE-TypologyGroupsCompanies/dynamic-execute
```

## Parameters

This query has no parameters.

## Output Columns

| Column | Source Table | Source Column |
|--------|-------------|---------------|
| Id | tgd | Oid |
| TypologyGroupId | utg | Oid |
| TypologyGroup | utg | Name |
| CompanyId | com | Id |
| Company | com | Name |

## Source Tables

| Table | Alias | Join |
|-------|-------|------|
| UserTypologyGroupCompany | tgd | FROM |
| CompanyLookup | com | JOIN |
| UserTypologyGroup | utg | JOIN |

*Version: 1 · Category: Data Extraction · System: No*
