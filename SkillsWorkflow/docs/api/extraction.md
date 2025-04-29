---
id: data-extraction-api 
title: Data Extraction API
sidebar_label: Data Extraction API
sidebar_position: 1
---

# Data Extraction API

## Overview

The Data Extraction API enables you to export data from Skills Workflow into external tools and systems—such as Excel, Power BI, or custom applications—by dynamically querying named data sets.

---

## Getting Started

### Authentication

Before calling any endpoint, you must obtain three credentials:

- **AppKey**  
- **AppSecret**  
- **TenantID**  

> These are provided by the support team upon request.

Include them in each request via HTTP headers:

```http
X-AppTenant:  <TenantID>
X-AppId:      <AppKey>
X-AppSecret:  <AppSecret>
X-AppUser:    <UserId>     # Optional, if user-scoped filtering is required
Content-Type: application/json
```

### Environments

The API is available in four environments, depending on your subscription plan:

- **Development**  
- **Test**  
- **UAT**  
- **Production**  

Each environment has its own base URL:

```
https://apiv2-<Tenant>.skillsworkflow.com/api/v3/analytics
```

---

## Shaping Your Query: the `queryBuilder` Parameter

To flexibly extract data, use the **`queryBuilder`** object in your POST body. It supports:

| Property   | Type     | Description                                                                                       |
|------------|----------|---------------------------------------------------------------------------------------------------|
| `skip`     | integer  | Number of records to skip (for pagination).                                                       |
| `take`     | integer  | Maximum number of records to return.                                                              |
| `orderBy`  | array    | List of `{ field, direction }` objects to sort results.                                           |
| `fields`   | array    | List of field names to include in the response.                                                   |
| `filters`  | array    | Complex filters combining expressions, e.g. `[["Status","=","Open"],"and",["Priority",">",2]]`.  |

```json
{
  "queryBuilder": {
    "skip": 0,
    "take": 100,
    "orderBy": [
      { "field": "UserId", "direction": "asc" }
    ],
    "fields": ["Team", "UserId"],
    "filters": [
      ["Team", "=", "Executor"],
      "or",
      ["Team", "=", "Requester"]
    ]
  }
}
```

---

## Rate Limiting & Performance

> **Note:** Each request must complete within **30 seconds**.

- **Apply filters** to narrow the data set.  
- **Use pagination** (`skip` / `take`) to retrieve large data sets in chunks.

---

## Discovering Available Fields

To know which fields you can request, perform an initial call with only pagination:

```bash
POST https://apiv2-<Tenant>.skillsworkflow.com/api/v3/analytics/named-query/DE-Clients/dynamic-execute
Headers:
  X-AppTenant: <TenantID>
  X-AppId:     <AppKey>
  X-AppSecret: <AppSecret>
Body:
{
  "queryBuilder": {
    "skip": 0,
    "take": 100
  }
}
```

This returns up to 100 records and reveals all available properties in the response schema, which you can then reference in subsequent `queryBuilder.fields` and `queryBuilder.filters`.

---

## Endpoints

The collection includes several `dynamic-execute` endpoints, each under:

```
POST /api/v3/analytics/named-query/{NamedQuery}/dynamic-execute
```

Where `{NamedQuery}` is one of:

- `DE-Attendences`  
- `DE-Assignments`  
- `DE-Brands`  
- `DE-Cities`  
- `DE-Clients`  
- `DE-ClientsCompanies`  
- `DE-Contracts`  
- `DE-Companies`  
- `DE-CompaniesAdditionalInformation`  
- `DE-Countries`  
- `DE-Currencies`  
- `DE-Departments`  
- `DE-Descriptions`  
- `DE-Divisions`  
- `DE-Employees`  
- `DE-EstimatedPlannedActualMonthly`  
- `DE-Estimates`  
- `DE-EstimatesCount`  
- `DE-EstimatesQuotes`  
- `DE-EstimatesQuotesMonth`  
- `DE-EstimatesQuotesMonthCount`  
- `DE-ExpenseTypes`  
- `DE-Expenses`  
- `DE-ExpenseSheets`  
- `DE-Holidays`  
- `DE-Jobs`  
- `DE-JobsCount`  
- `DE-Leaves`  
- `DE-LeavesCount`  
- `DE-LeavesDeleted`  
- `DE-LeavesDeletedCount`  
- `DE-Products`  
- `DE-Projects`  
- `DE-ProjectsCount`  
- `DE-ProjectsAdditionalInformation`  
- `DE-ProjectsPlannedTime`  
- `DE-ProjectsPlannedTimeCount`  
- `DE-RateCardsColumns`  
- `DE-Stages`  
- `DE-Suppliers`  
- `DE-TimeSheets`  
- `DE-TimeSheetsCount`  
- `DE-TimeSheetsDeleted`  
- `DE-TimeSheetsDeletedCount`  
- `DE-Typologies`  
- `DE-TypologyGroups`  
- `DE-UserCosts`  
- `DE-Users`  
- `DE-UsersToBlock`  
- `DE-UsersToUnblock`  
- `DE-UserTypes`  
- `DE-UsersAdditionalInformation`  
- `DE-WorkTypes`  

---

## Example Usage

### Retrieve Filtered Assignments

```bash
POST https://apiv2-<Tenant>.skillsworkflow.com/api/v3/analytics/named-query/DE-Assignments/dynamic-execute
Headers:
  X-AppTenant: <TenantID>
  X-AppId:     <AppKey>
  X-AppSecret: <AppSecret>
  X-AppUser:   <UserId>
Body:
{
  "queryBuilder": {
    "skip": 0,
    "take": 50,
    "orderBy": [
      { "field": "User", "direction": "asc" }
    ],
    "fields": ["Team", "UserId", "AssignmentDate"],
    "filters": [
      ["Team", "=", "Executor"],
      "or",
      ["Team", "=", "Requester"]
    ]
  }
}
```

#### Sample Response

```json
{
  "data": [
    { "Team": "Executor",  "UserId": "U123", "AssignmentDate": "2025-04-01T09:30:00Z" },
    { "Team": "Requester", "UserId": "U456", "AssignmentDate": "2025-04-02T14:45:00Z" }
    // …
  ],
  "totalCount": 124
}
```