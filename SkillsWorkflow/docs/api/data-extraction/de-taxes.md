---
id: de-taxes
title: DE-Taxes
sidebar_label: Taxes
sidebar_position: 1
---

Extracts information about taxes.

## Endpoint

```
POST /api/v3/analytics/named-query/DE-Taxes/dynamic-execute
```

## Parameters

This query has no parameters.

## Output Columns

| Column | Source Table | Source Column |
|--------|-------------|---------------|
| CompanyId | com | Id |
| Company | com | Name |
| CompanyHasImage | com | HasImage |
| TaxId | vat | Oid |
| Tax | vat | Name |
| Percentage | vat | Percentage |
| IsActive | vat | Active |
| ExternalId | vat | ExternalId |
| Default | vat | Default |

## Source Tables

| Table | Alias | Join |
|-------|-------|------|
| vat | — | FROM |
| CompanyLookup | com | JOIN |

## Access

| Role | Administrative |
|------|---------------|
| Administrator | Yes |

*Version: 1 · Category: Data Extraction · System: No*
