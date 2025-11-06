---
id: data-extraction-api 
title: Data Extraction API
sidebar_label: Data Extraction API
sidebar_position: 1
---

## Overview

The Data Extraction API enables you to export data from Skills Workflow into external tools and systems—such as Excel, Power BI, or custom applications—by dynamically querying named data sets.

### Purpose

The Data Extraction API is intended for reading and exporting data from Skills Workflow in a structured and efficient way. It is ideal for reporting, dashboards, and integration with external BI or analytics tools.

### Use Cases

Export data from Skills Workflow to:
- Excel, Power BI, Google Sheets
- Custom dashboards or internal reporting systems
- Third-party analytics tools
- Automation tools like Zapier or Make (Integromat)
- Data warehouses or ETL pipelines

### Key Limitations
- Read-only: This API does not support creating or updating records.
- Depends on predefined data sets.
- Pagination recommended: Use pagination (skip/take) for large queries to avoid timeouts or incomplete results.
- Rate limits may apply: For high-frequency requests, consider caching or batching.

---

## Getting Started

### Authentication

Before calling any endpoint, you must obtain the following credentials from our Support team:

- **App Key** (`X-AppId`)  
- **App Secret** (`X-AppSecret`)  
- **Tenant ID** (`X-AppTenant`)

> These are provided by the support team upon request.

Include them in each request via HTTP headers:

```http
X-AppTenant:  <X-AppTenant>
X-AppId:      <X-AppId>
X-AppSecret:  <X-AppSecret>
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
{{ApiUrl}}/api/v3/analytics
```

### Postman Collection

To facilitate testing of the available queries, we provide a Postman collection file with all endpoints configured. You can download it from the link below:

[Download Postman Collection - Data Extraction](../../static/templates/data-extraction-postman-collention.json)

After downloading, make sure to configure the variables `{{ApiUrl}}`, `{{TenantId}}`, `{{AppId}}`, `{{AppSecret}}`, and `{{UserId}}` according to the credentials you have been given.

### Rate Limits

:::note
Each request must complete within **30 seconds**.
:::

- **Apply filters** to narrow the data set.  
- **Use pagination** (`skip` / `take`) to retrieve large data sets in chunks.


### Filtering Data

To flexibly extract data, use the **`queryBuilder`** object in your POST body. It supports:

| Property   | Type     | Description                                                                                       |
|------------|----------|---------------------------------------------------------------------------------------------------|
| `skip`     | integer  | Number of records to skip (for pagination).                                                       |
| `take`     | integer  | Maximum number of records to return.                                                              |
| `orderBy`  | array    | List of `{ field, direction }` objects to sort results.                                           |
| `fields`   | array    | List of field names to include in the response.                                                   |
| `filters`  | array    | Complex filters combining expressions, e.g. `[["Status","=","Open"],"and",["Priority",">",2]]`.  |

### Filter Operations
The following table lists available filter operations by data type. 
The Query Builder uses the first operation in each array as the default operation for the specified data type.

| Data Type      | Filter Operations                                                                                 |
|----------------|---------------------------------------------------------------------------------------------------|
| `string`       | `contains`, `notcontains`, `startswith`, `endswith`, `=`, `<>`, `isblank`, `isnotblank`           |
| `numeric`      | `=`, `<>`, `<`, `>`, `<=`, `>=`, `between`, `isblank`, `isnotblank`                                |
| `date`, `datetime` | `=`, `<>`, `<`, `>`, `<=`, `>=`, `between`, `isblank`, `isnotblank`                            |
| `boolean`      | `=`, `<>`, `isblank`, `isnotblank`                                                                 |
| `object`       | `isblank`, `isnotblank`                                                                            |

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

### Discovering Available Fields

To know which fields you can request, perform an initial call with only pagination:

```bash
POST {{ApiUrl}}/api/v3/analytics/named-query/DE-Clients/dynamic-execute
Headers:
  X-AppTenant: <TenantId>
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
### Named Queries and Available Filters

Below is a list of available Named Queries and their applicable filters (if any).

| NamedQuery                         | Filters                                |
|-----------------------------------|----------------------------------------|
| DE-Attendences                    | From, To                               |
| DE-Assignments                    |                                        |
| DE-Brands                         | ModifiedFrom                           |
| DE-Cities                         |                                        |
| DE-Clients                        | ModifiedFrom                           |
| DE-ClientsCompanies               |                                        |
| DE-Contracts                      | ModifiedFrom, ContractNumber, ContractId |
| DE-Companies                      |                                        |
| DE-CompaniesAdditionalInformation| ModifiedFrom                           |
| DE-Countries                      |                                        |
| DE-Currencies                     |                                        |
| DE-Departments                    |                                        |
| DE-Descriptions                   |                                        |
| DE-Divisions                      |                                        |
| DE-Employees                      |                                        |
| DE-EstimatedPlannedActualMonthly |                                        |
| DE-Estimates                      | EstimateId, EstimateNumber             |
| DE-EstimatesCount                 | ModifiedFrom, EstimateId, EstimateNumber |
| DE-EstimatesQuotes                |                                        |
| DE-EstimatesQuotesMonth          |                                        |
| DE-EstimatesQuotesMonthCount     |                                        |
| DE-ExpenseTypes                  |                                        |
| DE-Expenses                       |                                        |
| DE-ExpenseSheets                 |                                        |
| DE-History                        |                                        |
| DE-Holidays                       | ModifiedFrom                           |
| DE-Jobs                           |                                        |
| DE-JobsCount                      | ModifiedFrom, JobId, JobNumber         |
| DE-Leaves                         |                                        |
| DE-LeavesCount                    | ModifiedFrom, To, From                 |
| DE-LeavesDeleted                  | ModifiedFrom                           |
| DE-LeavesDeletedCount            | ModifiedFrom                           |
| DE-Products                       | ModifiedFrom                           |
| DE-Projects                       |                                        |
| DE-ProjectsCount                  |                                        |
| DE-ProjectsAdditionalInformation | ProjectId, ProjectNumber              |
| DE-ProjectsPlannedTime           |                                         |
| DE-ProjectsPlannedTimeCount      | ProjectId, ProjectNumber              |
| DE-RateCardsColumns              |                                        |
| DE-Requests                      |                                        |
| DE-Services                       |                                        |
| DE-ServiceGroups                  |                                        |
| DE-Stages                         |                                        |
| DE-Suppliers                      |                                        |
| DE-TimeSheets                     |                                        |
| DE-TimeSheetsCount                | From, To, ModifiedFrom, ProjectId, ProjectNumber |
| DE-TimeSheetsDeleted             | ModifiedFrom                           |
| DE-TimeSheetsDeletedCount        | ModifiedFrom                           |
| DE-Typologies                     |                                        |
| DE-TypologyGroups                 |                                        |
| DE-UserCosts                      |                                        |
| DE-Users                          |                                        |
| DE-UsersToBlock                   |                                        |
| DE-UsersToUnblock                 |                                        |
| DE-UserTypes                      |                                        |
| DE-UsersAdditionalInformation    |                                        |
| DE-Workloads                      |                                        |
| DE-WorkTypes                      |                                        |

---

## Example Usage

### Retrieve Filtered Assignments

```bash
POST {{ApiUrl}}/api/v3/analytics/named-query/DE-Assignments/dynamic-execute
Headers:
  X-AppTenant: <TenantId>
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

## Scheduled Data Extraction

You can configure **Schedules** in Skills Workflow to automate recurring data exports.

This method is ideal for generating files (e.g., CSV) that can be directly consumed by external tools such as Power BI, Excel, Tableau, and others.

### Overview

Schedules allow you to:

- Define a **Query** to extract data (same data source as the API).
- Choose an export **Format** (e.g., `.csv`).
- Set a **Cron Expression** to determine when the export should occur.

Once scheduled, the system will run the query at the specified time and generate a downloadable file.

### Configuration Example

Here’s a configuration example of a schedule set up to export timesheet data every day at 5:00 AM UTC:
<figure>

![img](/img/api/data-extraction-api/schedule-timesheet.png)
<figcaption>Schedule Configuration Screenshot</figcaption>
</figure>


_The above screenshot shows the “DE-TimeSheets” query being scheduled to export daily._


### Cron Expression

The **Cron Expression (UTC)** field defines when the job should run. For example:

```
5 0 * * *
```

This runs the job daily at 5:00 AM UTC.

:::tip Best Practice
We recommend running schedules outside working hours to minimize system load and ensure the data is complete.
:::
