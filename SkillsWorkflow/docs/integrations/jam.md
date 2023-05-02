---
id:  jam
title: Jam
sidebar_label: Jam
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### Description

There was a need to exchange data between JAM and Skills Workflow

---
### Data Exchange Technology

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

---
### Data Exchange

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

<TabItem value="oauth">

#### Skills Workflow Integration API

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

Clients are managed in Skills Workflow. 

- New clients created in Skills Workflow are automatically created in JAM.
- Any change in the client data is also synched with JAM.
- The client is known as "Anunciante"
- In JAM it is only mandatory the client name

:::note 
It is not possible to edit Client data in JAM since it must be done in Skills Workflow. This module in JAM is disabled when the integration with Skills Workflow is enabled.
:::

#### Client Data Exchanged

Work in Progress

Mappings

```
Work in Progress
```

</TabItem>

<TabItem value="products">

Products are managed in Skills Workflow. 

- New products created in Skills Workflow are automatically created in JAM.
- Any change in the product data is also synched with JAM.
T- he product is known as "Produto"
- To create a new product it is mandatory to send the client code, product name and product code

:::note
It is not possible to edit Product data in JAM since it must be done in Skills Workflow. This module in JAM is disabled when the integration with Skills Workflow is enabled.
:::

#### Product Data Exchanged

Work in Progress

Template

```
Work in Progress
```

</TabItem>

<TabItem value="projects">

Projects are managed in Skills Workflow. 

- New projects created in Skills Workflow are automatically sent to JAM.
- The project is known as "Campanha"
- To create a new job it is mandatory to send the Project

#### Project Data Exchanged

Work in Progress

Template

```
Work in Progress
```
</TabItem>

<TabItem value="jobs">

Jobs are created in Skills Workflow and sent to JAM.

- The jobs will be sent to JAM when a status transition is done in Skills Workflow.
- In Skills Workflow it is possible to configure certain actions when the jobs are moved between status.
- If the action "SendToExternal" is configured in that transition, jobs will be exported to JAM.

#### Change Job Status in Skills Workflow

To change the job status it is necessary to pass:

- UserEmail- The user email that changed the status in JAM
- DocumentTypeName - The document type - "Skill.Module.BusinessObjects.Deliverable"
- JobNumber- The job number
- IsVisibleToClient - Send as "True"
- Text - The post description

- Action - List of actions, in this case, the action to be used is Transition
- Transition - Mandatory to pass the
- ExternalId - The status external code to which the job should go 
- Assignments 
- userEmail - User email to add to team or remove from team
- assign - To add user to team send "true", to remove user from team send "false"
- Files
- fileLink- The link to open the file. 
- fileName - The file name to be shown 
-  Dates
- requestedDate - Date must be with format 2020-03-23T12:03:21

Please check below how to get each field.

#### Steps to change the job's status

1. Change Job Status, Assign users, Add Links

```
POST /api/posts 
Host: integration-api-skills-dev-we.azurewebsites.net
Content-Type: application/json
X-AppId: {{X-AppId}}
X-AppSecret: {{X-AppSecret}}

{
 "companyCode": "{companyCode}",
 "userEmail": "{userEmail}",
 "documentTypeName": "Deliverable",
 "documentNumber": "{jobNumber}",
 "isVisibleToClient": true,
 "Text": "{text}"
 "actions": {
   "transition": {
     "externalId": "{externalId}"
     }
   },
   "assignments": [
     {
       "userEmail": "{userEmail}",
       "assignmentTypeName": "Executor",
       "assign": true
     },
     {
       "userEmail": "{userEmail}",
       "assignmentTypeName": "Executor",
       "assign": false
     }
   ],
   "files": [
     {
       "name": "{fileName}",
       "link": "{fileLink}",
       "isTemp": true,
       "isFlagged": false
     },
     {
       "name": "{fileName}",
       "link": "{fileLink}",
       "isTemp": true,
       "isFlagged": false
     }
  ],
  "Dates":
    {
      "RequestedDateUtc": "{requestedDate}"
    }
 }
}
```

2. Update JobStatusCode

```
PUT /api/documentUserFieldValues 
Host: integration-api-skills-dev-we.azurewebsites.net
Content-Type: application/json
X-AppId: {{X-AppId}}
X-AppSecret: {{X-AppSecret}}

{
   "documentTypeName": "Deliverable",
   "documentId": "{jobId}",
   "documentUserFieldValues": [
     {
       "columnName": "JamStatusCode",
       "value": "{JamStatusCode}"
     }
    ]
}
```

</TabItem>

<TabItem value="files">

#### Files

Work in Progress

#### Files Data Exchange

Work in Progress

#### Template

```
Work in Progress
```
</TabItem>

</Tabs>

#### Conclusion

The contents of this document create the foundation for data and process communication methodology between Skills Workflow and Agencies. The current known data and process transfers are contained in this document but more may be created as additional data and process needs are discovered.