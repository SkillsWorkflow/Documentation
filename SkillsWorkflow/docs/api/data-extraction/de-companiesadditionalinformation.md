---
id: de-companiesadditionalinformation
title: DE-CompaniesAdditionalInformation
description: "Extracts the custom fields associated with the companies."
sidebar_label: CompaniesAdditionalInformation
sidebar_position: 1
---

Extracts the custom fields associated with the companies.

## Endpoint

```
POST /api/v3/analytics/named-query/DE-CompaniesAdditionalInformation/dynamic-execute
```

## Parameters

This query has no parameters.

## Output Columns

| Column | Source Table | Source Column |
|--------|-------------|---------------|
| CompanyId | com | Oid |
| Company | com | Name |
| * | cuf | * |

## Source Tables

| Table | Alias | Join |
|-------|-------|------|
| Company | com | FROM |
| Company_UserFields | cuf | LEFT JOIN |

*Version: 3 · Category: Data Extraction · System: No*
