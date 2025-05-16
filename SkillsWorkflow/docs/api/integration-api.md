---
id: integration-api
title: Integration API
sidebar_label: Integration API
sidebar_position: 2
---

# Integration API

## Overview

The Integration API allows you to integrate documents and entities in Skills Workflow from external systems by linking them via an External ID. It is not intended for data extraction—use it to push or synchronize data (e.g. from financial systems, project-management tools, ERPs, attendance systems, etc.) into Skills Workflow.

### Purpose

The Integration API is designed to enable seamless synchronization of data between Skills Workflow and external systems. It facilitates the creation, updating, and linking of entities in Skills Workflow with external applications through the use of unique External IDs.

### Use Cases

Integrate Skills Workflow with external systems such as:
- Financial systems (e.g., QuickBooks, Xero)
- Project management tools (e.g., Asana, Jira, Trello)
- ERPs and CRMs
- Attendance or time-tracking systems
- Custom data synchronization or push solutions

### Key Limitations
- External ID linkage required: Entities in Skills Workflow must be linked to external systems using an External ID.
- Not for data extraction: Use the Data Extraction API for querying or extracting data.
- No direct reporting or analysis: This API is for synchronization and data pushing, not for reporting purposes.
- Rate limits may apply: High-frequency synchronization should be managed to avoid hitting API rate limits.
- Data consistency: Ensure the external systems are correctly mapped to prevent data mismatches during synchronization.
  
:::note
If you need to _read_ or _query_ Skills Workflow data, or replicate parts of its behavior inside your own application, please use the **Client API** instead.
:::

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

Your subscription plan determines which environments are available:

| Environment   | Hostname                                      |
| ------------- | --------------------------------------------- |
| Development   | `integration-api-dev.skillsworkflow.com`       |
| Test          | `integration-api-test.skillsworkflow.com`      |
| UAT           | `integration-api-uat.skillsworkflow.com`       |
| Production    | `integration-api.skillsworkflow.com`           |

Use the appropriate `{{Environment}}` variable in your URLs.

### Postman Collection

To facilitate testing of the available queries, we provide a Postman collection file with all endpoints configured. You can download it from the link below:

[Download Postman Collection - Integration API](../../static/templates/integration-api-postman-collention.json)

After downloading, make sure to configure the variables `{{Environment}}`, `{{TenantId}}`, `{{AppId}}`, `{{AppSecret}}`, and `{{UserId}}` according to the credentials you have been given.

### Rate Limits

All calls to the Integration API are capped at **30 seconds** execution time. To avoid timeouts:

- Use **filters** on query endpoints  
- Implement **pagination** via `skip` and `take` query parameters  

---

## Endpoints

### Users

#### Create or Update a User

- **Method**: `POST`  
- **URL**:  
  ```
  https://integration-api-{{Environment}}.skillsworkflow.com/api/users
  ```
- **Headers**: see _Common Request Headers_  
- **Body Parameters**:

  | Parameter                   | Type      | Required | Description                                              |
  | --------------------------- | --------- | -------- | -------------------------------------------------------- |
  | `Id`                        | Guid      | No       | Not required; server will generate if omitted           |
  | `UserName`                  | string    | Yes      | Login name                                              |
  | `Name`                      | string    | No       | Full name                                               |
  | `ExternalId`                | string    | Yes      | Unique external identifier                              |
  | `EmployeeId`                | Guid      | No       | Corresponding employee record ID in Skills Workflow     |
  | `CompanyCode`               | string    | Yes      | Company code used in Skills Workflow                     |
  | `DepartmentExternalId`      | string    | Yes      | External ID of the department                             |
  | `TypologyExternalId`        | string    | Yes      | External ID of the user typology                          |
  | `Mail`                      | string    | No       | Email address                                            |
  | `IsActive`                  | bool      | Yes      | `true` = active, `false` = inactive                     |
  | `HireDate`                  | DateTime  | No       | ISO-8601 date of hire                                    |
  | `SsoUserName`               | string    | No       | SSO username                                             |
  | `ExpirationDate`            | DateTime  | No       | ISO-8601 account expiration date                         |
  | `RequiredWeeklyHours`       | double    | No       | Weekly required hours                                    |
  | `RequiredHours`             | double    | No       | Daily required hours                                     |
  | `LeaveDayHours`             | double    | No       | Leave-day hours                                          |
  | `ResponsibleId`             | Guid      | No       | ID of the responsible user                               |
  | `UserTypeId`                | Guid      | No       | User-type identifier                                     |
  | `WeeklyOvertimeThresholdHours` | double | No       | Weekly overtime threshold                                |
  | `Phone`                     | string    | No       | Telephone number                                         |
  | `SsoOnly`                   | bool      | No       | `true` = SSO-only login                                  |
  | `AdUserName`                | string    | No       | Active Directory username                                |
  | `Tolerance`                 | int       | No       | Tolerance in minutes                                     |
  | `ChangePasswordOnFirstLogon`| bool      | No       | Force password change on first login                     |
  | `TaxPayerNumber`            | string    | No       | Taxpayer identification number                           |
  | `StartDate`                 | DateTime  | No       | ISO-8601 user start date                                 |

#### Partially Update a User

- **Method**: `PATCH`  
- **URL**:  
  ```
  https://integration-api-{{Environment}}.skillsworkflow.com/api/users/{id}
  ```
- **Headers**: see _Common Request Headers_  
- **Body**: only include the fields you want to update, each wrapped in a `{ "value": ... }` object. Do _not_ send fields you’re not changing.

  | Field                                 | Type      | Description                                      |
  | ------------------------------------- | --------- | ------------------------------------------------ |
  | `Password.value`                      | string    | New password (omit if not changing)              |
  | `EntryTimeTotalMinutes.value`         | int       | Daily entry time in minutes                      |
  | `ExitTimeTotalMinutes.value`          | int       | Daily exit time in minutes                       |
  | `EntryTimeToleranceTotalMinutes.value`| int       | Entry tolerance minutes                          |
  | `ExitTimeToleranceTotalMinutes.value` | int       | Exit tolerance minutes                           |
  | `OffsetTotalMinutes.value`            | int       | Time offset                                      |
  | `PaidUndertime.value`                 | bool      | Pay undertime                                     |
  | `PaidOvertime.value`                  | bool      | Pay overtime                                      |
  | `StartDate.value`                     | DateTime  | New start date                                    |
  | `ExpirationDate.value`                | DateTime  | New expiration date                               |
  | `UserName.value`                      | string    | New login name                                    |
  | `Name.value`                          | string    | New full name                                     |
  | `ExternalId.value`                    | string    | New external ID                                   |
  | `CompanyId.value`                     | Guid      | New company ID                                    |
  | `EmployeeId.value`                    | Guid      | New employee ID                                   |
  | `DepartmentId.value`                  | Guid      | New department ID                                 |
  | `TypologyId.value`                    | Guid      | New typology ID                                   |
  | `IsActive.value`                      | bool      | Activate/deactivate                               |
  | `HireDate.value`                      | DateTime  | New hire date                                     |
  | `SsoUserName.value`                   | string    | New SSO username                                  |
  | `RequiredHours.value`                 | double    | New required daily hours                          |
  | `LeaveDayHours.value`                 | double    | New leave-day hours                               |
  | `RequiredWeeklyHours.value`           | double    | New required weekly hours                         |
  | `ResponsibleId.value`                 | Guid      | New responsible user ID                           |
  | `UserTypeId.value`                    | Guid      | New user-type ID                                  |
  | `WeeklyOvertimeThresholdHours.value`  | double    | New weekly overtime threshold                     |
  | `ExternalNumber.value`                | string    | New external number                               |
  | `Phone.value`                         | string    | New phone number                                  |
  | `CityId.value`                        | Guid      | New city ID                                       |
  | `SsoOnly.value`                       | bool      | Toggle SSO-only                                    |
  | `AdUserName.value`                    | string    | New AD username                                   |
  | `Tolerance.value`                     | int       | New tolerance                                    |
  | `ChangePasswordOnFirstLogon.value`    | bool      | Toggle first-logon password change                |
  | `TaxPayerNumber.value`                | string    | New taxpayer number                               |

---

### Employees

#### Create or Update an Employee

- **Method**: `POST`  
- **URL**:  

```
  https://integration-api-{{Environment}}.skillsworkflow.com/api/employees
```

- **Headers**: see _Common Request Headers_  
- **Body Parameters**:

  | Parameter     | Type    | Required | Description                             |
  | ------------- | ------- | -------- | --------------------------------------- |
  | `Id`          | Guid    | No       | Not required; server will generate if omitted |
  | `Name`        | string  | Yes      | Employee’s full name                    |
  | `ExternalId`  | string  | Yes      | Unique external identifier              |
  | `CompanyId`   | Guid    | Yes      | Company ID in Skills Workflow           |
  | `IsActive`    | bool    | Yes      | `true` = active, `false` = inactive     |

---

## Example Usage

Create a new user in the **Development** environment:

```bash
curl -X POST "https://integration-api-dev.skillsworkflow.com/api/users"   -H "X-AppTenant: "   -H "X-AppId: "   -H "X-AppSecret: "   -H "Content-Type: application/json"   -d '{
        "UserName": "jdoe",
        "Name": "John Doe",
        "ExternalId": "EXT-USER-001",
        "CompanyCode": "COMPX",
        "DepartmentExternalId": "DEPT-100",
        "TypologyExternalId": "TYP-STD",
        "IsActive": true,
        "HireDate": "2025-04-29T00:00:00Z"
      }'
```
