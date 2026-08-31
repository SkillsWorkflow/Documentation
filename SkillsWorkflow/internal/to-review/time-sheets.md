---
id:  time-sheets
title: Time sheets
sidebar_label: Time sheets
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Cause

There was a need to export timesheet data from the system to any other platform.

## Data Exchange

The scope of this article includes an explanation of how to export time sheets from the system.

Skills Workflow has available an API, so you can use it to get the data out from the system. You can get the data using REST calls. 

Regarding timesheet data, for each timesheet you will have available the following information:

- Id
- Company
- Department
- DepartmentCode
- DepartmentExternalId
- ClientGroup
- ClientGroupExternalId
- ClientGroupNameAndExternalId
- Client
- ClientCode
- ClientNameAndExternalId
- ClientExternalId
- Project
- ProjectExternalId
- ProjectNameAndExternalId
- Job
- JobNameAndExternalId
- JobType
- User
- UserTypologyGroup
- Date
- Year
- Month
- ActualTime
- StateTypeCode
- IsWeekend
- IsHoliday
- ModifiedAt

## Configuration

To use the API there are mandatory request headers and body.

- Method - POST
- Request headers - To authenticate you on the API
- Request body - To set the period to be extracted
- Year
- Month

Please see below how to export the time sheets using the API.


<Tabs
  groupId="actions"
  defaultValue="authentication"
  values={[
    {label: 'Authenticaton', value: 'authentication'},
    {label: 'Time Sheets', value: 'time sheets'},
  ]
}>

<TabItem value="authentication">

## Skills Workflow Integration API

To use any endpoint from the Skills Workflow Integration API, it is necessary to set the following Request Headers:

- X-AppTenant - Provided by Skills Workflow team
- X-AppSecret - Provided by Skills Workflow team
- X-AppId - Provided by Skills Workflow team
- X-AppUser 
- Not mandatory
- Use this parameter to impersonate, by setting the Skills Workflow's UserId
- It will have in consideration user permissions

</TabItem>

<TabItem value="time sheets">

## Time Sheets

Time Sheets are created in Skills Workflow.

To extract the data from the system using the API, the system will do a query to the analytics data:

- endpoint - https://demo.skillsworkflow.com/api/analytics/globalQuery/{queryName}/execute
- queryName - analytics_timesheets
- body - Json
- Year - yyyy
- Month - MM

Please see below an example of using the API to export the data.

## Export timesheets

1. Execute analytics_timesheets query

```
POST /api/analytics/globalQuery/analytics_timesheets/execute 
Host: demo.skillsworkflow.com
Content-Type: application/json
X-AppTenant: {{X-AppTenant}}
X-AppId: {{X-AppId}}
X-AppSecret: {{X-AppSecret}}
Body: {
        "Year": "2019",
        "Month": "09"
      }

Result
 - The timesheet data available will be from September 2019
 - On the "Data" field you have available the Array[] of time sheets

 ```

</TabItem>

</Tabs>

## Conclusion

The contents of this document create the foundation for data and process communication methodology between Skills Workflow and Agencies. The current known data and process transfers are contained in this document but more may be created as additional data and process needs are discovered.

