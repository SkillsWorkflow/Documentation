---
id:  ceta
title: CETA
sidebar_label: CETA
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### Description

There was a need to exchange data between CETA and Skills Workflow

---

### Data Exchange Technology

Service REST.

The scope of data exchanged on this integration includes:

- Master data
- Clients & Products
- From Skills Workflow to CETA

- Projects & Jobs
- Projects are imported into Skills Workflow when in "Pencil" and "Confirmed" status on CETA
- All Jobs are imported into Skills Workflow
- However, only approved jobs are timesheet suggestion
- From CETA to Skills Workflow

- Timesheets
- Approved Timesheets
- From Skills Workflow into CETA

---

### Data Exchange

This section describes the Data exchanged between systems. Please see below the data exchanged.


<Tabs
  groupId="actions"
  defaultValue="clients"
  values={[
    {label: 'Clients', value: 'clients'},
    {label: 'Products', value: 'products'},
    {label: 'Projects', value: 'projects'},
    {label: 'Jobs', value: 'jobs'},
    {label: 'Timesheets', value: 'timesheets'},
  ]
}>

<TabItem value="clients">

Clients are managed in Skills Workflow. 

- New clients created in Skills Workflow are automatically created in CETA.
- Any change in the client data is also synched with CETA.


#### Client Data Exchanged

Fields that are populated in CETA are:

- Name
- External Id
- Status
- Address
- Zip Code
- Country
- Client Manager

#### Mappings

```
Name - Client Name - Name
External Id - Client External Id - A/c Code
Status - Client Status - Status
Address - Client Address - Address
Zip Code - Client Zip Code - Postal Code
Country - Client Country - Country
Client Manager - Client Manager -  (?)
```

</TabItem>

<TabItem value="products">

Products are managed in Skills Workflow. 

New products created in Skills Workflow are automatically created in CETA.
Any change in the client data is also synched with CETA.


#### Product Data Exchanged

Fields that are populated in CETA:

- Name
- External Id
- Status


#### Template

```
Client Name - Client Name - Company Name (?)
Name - Product Name - Name
External Id - Product External Id - (?)
Status - Product Status - Status
```

</TabItem>

<TabItem value="projects">

Projects are created in CETA and sent to Skills Workflow when in New state.

- The project gets Confirmed as soon as the first Bid/Job is confirmed
- As soon as the project status changes, it will be updated in Skills Workflow

#### Project Data Exchanged

Fields that are populated into Skills:

- Title
- Status
- Number
- Type
- Client
- Product
- Project Owner
- Start Date
- End Date

#### Template

```
Title - Project Title - Title
Status - Project Status - Status
Number - Project Number - Project #
Type - Project type - Project Type
Client - Project's Client - Client
Product - Project's Product - Product
Project Owner - Project Owner - 'executiveproducer' Post Producer (Unique external id)
Start Date - Project Start Date - Start Date
End Date - Project End Date - End Date
```

</TabItem>

<TabItem value="jobs">

Jobs are created in CETA and sent to Skills Workflow.

- All non-confirmed status jobs are imported
- Only confirmed jobs prepopulate the user's timesheet

#### Jobs Data Exchanged

The fields that are populated into Skills Workflow:

- Id
- Project Type
- Product
- Project #
- Client Name
- Title
- Start Date
- End Date
- Job Type
- Resources
- Status


#### Template

```
Number - Job Number - Id
?? - Quote Id
Project Type - Job's Project Type - Project Type
Product - Job's Product - Product
Project Number - Job's Project Number- Project #
Client - Job's Client
Title - Job Title
Start Date - Job Start Date
End Date - Job End Date
```
</TabItem>

<TabItem value="timesheets">

Timesheets are inputted in Skills Workflow and sent to CETA.

- Only approved hours are sent to CETA

#### Time Sheet Data Exchanged

The fields that will be populated into CETA:

- Id
- Company
- Department
- Client
- Product
- Project
- Job
- Time type
- Work type
- User
- Status
- Timesheet date
- Create date
- Approval date
- Hours


#### Template

```
Id - Unique Id
Company - Company Code
Department - Department External Id
Client - Client External Id
Product - Product External Id
Project - Project Number
Job - Job Number
Time type - 1 - Billable, 2 - Admin, 3 - Not Billable
Work type - Work Type External Id
User - User External ID
Status - Approved Status
Timesheet date - Timesheet Date
Create date - Created On Date
Approval date - Approval On Date
Hours - Amount of hours
```
</TabItem>

</Tabs>

#### Conclusion

The contents of this document create the foundation for data and process communication methodology between Skills Workflow and Agencies. The current known data and process transfers are contained in this document but more may be created as additional data and process needs are discovered.
