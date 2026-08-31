---
id: de-services
title: DE-Services
description: "Extracts the existing services."
sidebar_label: Services
sidebar_position: 1
---

Extracts the existing services.

## Endpoint

```
POST /api/v3/analytics/named-query/DE-Services/dynamic-execute
```

## Parameters

This query has no parameters.

## Output Columns

| Column | Source Table | Source Column |
|--------|-------------|---------------|
| Oid | a | Oid |
| ServiceId | a | Oid |
| Service | a | Name |
| Company | c | Name |
| CompanyId | c | Oid |
| CompanyHasImage | c | HasImage |
| Active | a | Active |
| InternalService | a | InternalService |
| DepartmentRequired | a | DepartmentRequired |
| UnitHour | a | UnitHour |
| DefaultMargin | a | DefaultMargin |
| ExternalId | a | ExternalId |
| VatDeductiblePercentage | a | VatDeductiblePercentage |
| Unit | a | Unit |
| ServiceGroupId | ag | Oid |
| ServiceGroup | ag | Name |

## Source Tables

| Table | Alias | Join |
|-------|-------|------|
| Article | a | FROM |
| Company | c | JOIN |
| ArticleGroup | ag | LEFT JOIN |

*Version: 2 · Category: Data Extraction · System: Yes*
