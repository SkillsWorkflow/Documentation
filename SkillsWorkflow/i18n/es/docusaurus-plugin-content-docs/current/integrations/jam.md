---
id:  jam
title: Jam
sidebar_label: Jam
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Cause

There was a need to exchange data between JAM and Skills Workflow

## Data Exchange Technology

Service REST.

The scope of data exchanged on this integration includes:

- OAuth
- Master data
- Clients & Products
- From Skills Workflow to JAM
- Projects & Jobs
- From Skills Workflow to JAM
- From JAM to Skills Workflow
- Files
- From Skills Workflow to JAM
- From JAM to Skills Workflow
- Uploaded into Skills Workflow's job feed

## Data Exchange

This section describes the Data exchanged between systems. Please see below the data exchanged.


<Tabs
  groupId="actions"
  defaultValue="oauth"
  values={[
    {label: 'OAuth', value: 'oauth'},
    {label: 'Clients', value: 'clients'},
    {label: 'Products', value: 'products'},
    {label: 'Projects', value: 'projects'},
    {label: 'Jobs', value: 'jobs'},
    {label: 'Files', value: 'files'},
  ]
}>


<TabItem value="oath">

### Skills Workflow Integration API

To use any endpoint from the Skills Workflow Integration API, it is necessary to pass the following Headers:

- X-AppSecret -Provided by Skills Workflow team
- X-AppId -Provided by Skills Workflow team
- X-AppUser 
- Not mandatory
- Use this parameter to impersonate by passing the Skills Workflow's UserId
- See how to get UserId by User's ExternalId on the Jobs tab, step 1.
- It will have in consideration user permissions and post as being the user

</TabItem>

<TabItem value="clients">

### Clients

Clients are managed in Skills Workflow. 

- New clients created in Skills Workflow are automatically created in JAM.
- Any change in the client data is also synched with JAM.
- The client is known as "Anunciante"
- In JAM it is only mandatory the client name
::: It is not possible to edit Client data in JAM since it must be done in Skills Workflow. This module in JAM is disabled when the integration with Skills Workflow is enabled.
:::

###Client Data Exchanged

Work in Progress

Mappings

```
Work in Progress
```

</TabItem>

<TabItem value="products">



* Oid
* Name
owStateId
* KeepOnError

</TabItem>
<TabItem value="supplierinvoiceitem">

#### Supplier Invoice Item

Supplier Invoices are sent by Skills Workflow.

* New Supplier Invoices created in Skills Workflow are automatically created in SAGE.
* Any change in the Supplier Invoices data is also synched with SAGE.

#### Supplier Invoices Data Exchanged

The fields that will be populated into SAGE:

* Oid
* Name

* PreviousWorkflowStateId
* KeepOnError

</TabItem>

</Tabs>

### Conclusion

The contents of this document create the foundation for data and process communication methodology between Skills Workflow and Agencies. The current known data and process transfers are contained in this document but more may be created as additional data and process needs are discovered.
