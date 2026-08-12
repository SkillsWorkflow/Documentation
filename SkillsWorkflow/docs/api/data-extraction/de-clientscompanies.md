---
id: de-clientscompanies
title: DE-ClientsCompanies
description: "Extracts the information about what companies have access to what clients."
sidebar_label: ClientsCompanies
sidebar_position: 1
---

Extracts the information about what companies have access to what clients.

## Endpoint

```
POST /api/v3/analytics/named-query/DE-ClientsCompanies/dynamic-execute
```

## Parameters

This query has no parameters.

## Output Columns

| Column | Source Table | Source Column |
|--------|-------------|---------------|
| ClientId | cli | Oid |
| Client | cli | Name |
| CompanyId | com | Oid |
| Company | com | Name |

## Source Tables

| Table | Alias | Join |
|-------|-------|------|
| CommercialClient | cli | FROM |
| CommercialClientCompany | ccc | LEFT JOIN |
| Company | com | LEFT JOIN |

*Version: 1 · Category: Data Extraction · System: No*
