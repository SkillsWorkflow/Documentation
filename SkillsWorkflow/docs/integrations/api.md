---
id: api
title: API
description: "Every other integration in this section is, underneath, this API being used."
sidebar_label: API
sidebar_position: 1
---

## Description

This article describes the **Skills Workflow API**.

Every other integration in this section is, underneath, this API being used. It is the interface any external system uses to read and write Skills Workflow data directly — clients, suppliers, users, jobs, projects, estimates, expenses, files and more — without a person entering it by hand.

It exists for the cases the packaged integrations do not cover. When an agency runs a system nobody has built a connector for, or wants to automate something specific to how they work, the API is what makes that possible without waiting for a product change. It is also how an implementation partner loads data during onboarding, and how a client's own systems can be wired into the platform.

Two collections are published:

- **Integration API** — the endpoints for provisioning and maintaining master data, such as users and employees.
- **Client API** — the broader day-to-day object model: jobs, projects, contracts, requests, estimates, expenses, assignments, comments, files and workflow.

The API is versioned and additive: it keeps growing, but without breaking what already works — so an integration built against it does not need revisiting every release.

---

## Authentication

API URLs:

- API: https://integration-api-we.skillsworkflow.com/
- Docs: https://integration-api-we.skillsworkflow.com/swagger/ui/index

You can try the API directly from the documentation, or you can use other application (e.g. PostMan)

To use the API you will need to send 3 Headers in the request, as required in the documentation: X-AppTenant, X-AppId and X-AppSecret

You can also check our open source site and check some examples of using the API: https://github.com/SkillsWorkflow/api-demos

If you need to, please request the test (UAT) environment credentials for your Agency:

- X-AppTenant
- X-AppId
- X-AppSecret

Example on how to get all companies:

<figure>

![img-box-shadow](/img/integrations/technical1.png)

<figcaption>GET call for all companies </figcaption>
</figure>

The API is constantly evolving (but never having breaking changes):

- If you need something that you do not find in the API, do not hesitate to ask and we will analyze the feasibility of adding to the API

<figure>

![img-box-shadow](/img/integrations/technical2.png)

<figcaption>API Documentation</figcaption>
</figure>

## Billing Client

### Adding new billing client

To add a new Billing Client, you must specify the following properties:
- ExternalId
- CompanyCode
- Name

The External Id should match the unique identifier of the Billing Client in the external system. If the client already exists, it will be updated using the External Id and Company Code as the key.

``` json
Method: POST
Endpoint: /api/billingclients
Payload:
{
    "name": "string",
    "companyId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "companyCode": "string",
    "externalId": "string",
    "code": "string",
    "number": "string",
    "street": "string",
    "street2": "string",
    "stateProvince": "string",
    "city": "string",
    "cityId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "zipPostal": "string",
    "country": "string",
    "countryId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "active": true,
    "taxpayerNumber": "string",
    "paymentConditionExternalId": "string",
    "setFirstPaymentConditionIfExternalIdIsNull": true,
    "applyDefaultPaymentCondition": true,
    "currencyExternalId": "string",
    "applyDefaultCurrency": true,
    "otherDebtor": true
}
```

## Commercial Client

### Adding new commercial client

:::caution 
A Commercial Client should be created after all Billing Clients for a given company have been created. 
:::

Billing Clients are grouped and created based on their Company Code. Once all Billing Clients and the Commercial Client have been created, the Commercial Client must be associated with each corresponding Billing Client (one-to-one mapping based on Company Code). 

To create a Commercial Client, you must specify the following properties
- Name
- ExternalId.

The External Id used for the Commercial Client should match the unique identifier of the Billing Client in the external system (the same External Id used when creating the Billing Client).

``` json
Method: POST
Endpoint: /api/commercialclients
Payload:
{
    "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "name": "string",
    "externalId": "string",
    "nameAndExternalId": "string",
    "code": "string",
    "number": "string",
    "street": "string",
    "street2": "string",
    "stateProvince": "string",
    "blocked": true,
    "taxpayerNumber": "string",
    "country": "string",
    "countryId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "zipPostal": "string",
    "city": "string",
    "cityId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "commercialPaymentConditionExternalId": "string",
    "clientGroupExternalId": "string",
    "projectOwnerExternalId": "string",
    "setFirstPaymentConditionIfExternalIdIsNull": true,
    "applyDefaultPaymentCondition": true,
    "companyId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "timesheetLevelId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "insertUpdateCheckOnlyId": true,
    "_options": {
    "ignoreCode": true,
    "linkDefaultCompany": true
    }
}
```

### Associate with billing client

To associate a commercial client with a billing client, you must indicate the id of the commercial client creation response, the id and the companyId of the billing client creation response, so as to be unique per company.

``` json
Method: POST
Endpoint: /api/commercial-client-companies
Payload:
{
    "companyId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "commercialClientId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "billingClientId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "externalId": "string",
    "vatExternalId": "string"
}
```

## Supplier

### Adding new supplier

To create a supplier, you must specify the follwing properties:
- ExternalId
- CompanyCode
- Name
 
The externalId should match the unique identifier of the supplier in the external system. If the supplier already exists, it will be updated using the externalId and companyCode as the key.

``` json
Method: POST
Endpoint: /api/suppliers
Payload:
{
    "name": "string",
    "externalId": "string",
    "companyId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "companyCode": "string",
    "taxpayerNumber": "string",
    "active": true,
    "street": "string",
    "street2": "string",
    "countryId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "city": "string",
    "cityId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "zipPostal": "string",
    "stateProvince": "string",
    "otherCreditor": true,
    "paymentConditionExternalId": "string",
    "applyDefaultPaymentCondition": true,
    "currencyExternalId": "string",
    "applyDefaultCurrency": true,
    "vatExternalId": "string",
    "applyDefaultVat": true,
    "_options": {
    "disableVatUpdate": true
    }
}
```

---

## Marketplace Export Reference

Two Postman collections are published in the Marketplace under `API`: `Client API` (v15) and `Integration API` (v2). Source: `[API] [Integrations] Client API v15 (Postman) {Active}.json`, `[API] [Integrations] Integration API v2 (Postman) {Active}.json`.

### Integration API (v2)

As exported, this collection has three requests — narrower than the Billing/Commercial Client and Supplier endpoints documented above, which are not part of this particular export (not determinable whether they've moved elsewhere or simply weren't included when this collection was exported):

| Request | Method & Endpoint | Notes |
| --- | --- | --- |
| User | `PATCH /api/users/{id}` | Partial update; only send fields you want changed |
| User | `POST /api/users` | Create-or-update — send `Id` or `ExternalId` to decide which; `UserName`, `Name`, `ExternalId`, `CompanyCode`, `DepartmentExternalId`, `TypologyExternalId`, `IsActive` are required |
| Employee | `POST /api/employees` | Create-or-update — send `Id` or `ExternalId`; `Name`, `ExternalId`, `CompanyId` required |

Host: `https://integration-api-{Environment}.skillsworkflow.com`.

### Client API (v15)

A much larger collection covering the day-to-day object model (host `https://apiv2-{Tenant}.skillsworkflow.com`, one request per folder shown; some environment-specific examples use a fixed tenant such as `chronicle`):

| Area | Endpoints |
| --- | --- |
| Additional Information | `PUT /api/v3/documentUserFieldValues` |
| Assignments | `POST /api/assignments/batch` |
| Comment | `POST /api/posts` (comment), `POST /api/posts` (link file) |
| Commercial Client | `POST /api/v3/commercial-clients` |
| Description | `POST /api/documentBriefs` |
| Estimate | `POST /api/v3/estimates`, `PUT /api/estimates/{id}/items`, `POST /api/estimates/details/thirdparty`, `POST /api/estimates/details/resources`, `POST /api/estimates/details/expenses`, `POST /api/billing-conditions` |
| Expense / Expense Sheet | `POST /api/expenses`, `POST /api/expenses/{ExpenseSheetId}/items` |
| File | `POST /api/v3/file-system/folders/{folderId}/links` |
| Job | `PATCH /api/jobs/{jobId}`, `POST /api/v3/jobs` |
| Project | `PATCH /api/projects/{id}` (and additional-information variant), `GET /api/contracts/{id}/projects/new`, `POST /api/posts` |
| Contract | `PATCH /api/contracts/{id}` (and additional-information variant), `POST /api/posts` |
| Typology | `POST /api/v3/user-typology-histories`, `PATCH /api/v3/user-typology-histories/{id}` |
| Request | `POST /api/v3/requests`, `GET /api/v3/requests/{id}` |
| User | `POST /api/v3/users` (create/duplicate), `PATCH /api/users/{id}`, `POST /api/v3/commercial-client-users` |
| Workflow | `GET /api/v3/document-types/{id}/workflows?expandTransitions=true` |

### Open Questions

- The Integration API export (v2) has far fewer endpoints than this page already documented (Billing Client, Supplier, Commercial Client association) — not determinable from the export whether those moved to a different collection, a different version, or are simply outdated; they're left in place above since nothing here contradicts them.