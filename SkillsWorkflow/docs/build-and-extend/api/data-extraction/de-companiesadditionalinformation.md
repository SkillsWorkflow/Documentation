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

Send every parameter below in the `parameters` object of the request body. Use `null` for a parameter you do not want to set.

| Parameter | Used in |
|-----------|---------|
| ModifiedFrom | `where (@ModifiedFrom is null or cuf.ModifiedOn >= @ModifiedFrom)` |

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

## Access

| Role | Administrative |
|------|---------------|
| CompanyRead | No |

*Version: 5 · Category: Data Extraction · System: No*
