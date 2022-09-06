---
id:  Jobs
title: Jobs data export
sidebar_label: Jobs data export
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Cause

There was a need to export job data from the system to any other platform.

## Data Exchange

The scope of this article includes an explanation of how to export jobs from the system.

Skills Workflow has available an API, so you can use it to get the data out from the system. You can get the data using REST calls. 

Regarding job data, for each job you will have available the following information:

- Id
- Department
- ClientNameAndExternalId
- Client
- ClientExternalId
- ClientClassification
- ProductNameAndExternalId
- Product
- ProductExternalId
- ProjectNameAndExternalId
- Project
- ProjectExternalId
- Estimates
- EntryDate
- EntryTime
- EntryYear
- EntryMonth
- RequestedDate
- RequestedTime
- RequestedYear
- RequestedMonth
- AgreedDate
- AgreedTime
- AgreedYear
- AgreedMonth
- JobType
- JobNameAndExternalId
- JobName
- JobNumber
- CreatedBy
- Requesters
- Responsibles
- Executors
- Stage
- Version
- ApprovedOn
- ApprovedBy
- UserCost
- ValueWithVatIncome
- ValueWithoutVatIncome
- Company
- LastStageChange
- CommercialClientGroup
- CommercialClientClassification
- Configuration

To use the API there are mandatory request headers and body.

Method - POST
Request headers - To authenticate you on the API
Request body - To set the period to be extracted
Year
Month
Please see below how to export the jobs using the API.


<Tabs
  groupId="actions"
  defaultValue="authentication"
  values={[
    {label: 'Authentication', value: 'authentication'},
    {label: 'Request', value: 'request'},
  ]
}>

<TabItem value="authentication">

## Skills Workflow Integration API

To use any endpoint from the Skills Workflow Integration API, it is necessary to set the following Request Headers:

- X-AppTenant - Provided by Skills Workflow team
- X-AppId - Provided by Skills Workflow team
- X-AppSecret - Provided by Skills Workflow team
- X-AppUser 
- Not mandatory
- Use this parameter to impersonate, by setting the Skills Workflow's UserId
- It will have in consideration user permissions

</TabItem>

<TabItem value="request">

## Data

To extract the data from the system using the API, the system will do a query to the analytics data:

- endpoint - https://demo.skillsworkflow.com/api/analytics/query/execute
- body - Json
- Query - String
- Parameters - Object

Please see below an example of using the API to export the data.

## Example

### Execute query

```
POST /api/analytics/query/execute 
Host: demo.skillsworkflow.com
Content-Type: application/json
X-AppTenant: {{X-AppTenant}}
X-AppId: {{X-AppId}}
X-AppSecret: {{X-AppSecret}}
Body: {
         "Query": "select 
                           j.Number,
                           j.Client,
                           j.Product,
                           j.Project
                   from    Analytics.DatamartJob j 
                   where   j.EndDate between @FromDate and @ToDate
                   order by j.EndDate desc",
         "Parameters": {
                 "FromDate": "2020-07-29T10:47:52.869Z",
                 "ToDate": "2020-07-29T10:47:52.872Z"
         }
      }

Result
 - The data available will be jobs where its end date is between From and To dates
 - On the response, the "Data" field will provide the Array[] of jobs
 ```

</TabItem>


</Tabs>

## Conclusion

The contents of this document create the foundation for data and process communication methodology between Skills Workflow and Agencies. The current known data and process transfers are contained in this document but more may be created as additional data and process needs are discovered.