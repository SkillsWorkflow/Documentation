---
id: api
title: API
sidebar_label: API
sidebar_position: 1
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