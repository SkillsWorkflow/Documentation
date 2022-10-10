---
id:  utilpro-integration
title: UtilPro integration
sidebar_label: UtilPro integration
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## File Transfer Technology

The CSV files are transferred via an SFTP server. The server must be set up by the Agency and credentials must be given to Skills Workflow. Files pertaining to data transfers should be placed in the Data directory on the SFTP server. Files pertaining to process requests should be placed in the Process directory on the SFTP server.

## File Naming Conventions

Each CSV filename will have a body and suffix. The name will convey information to both Agency and Skills Workflow as to the intent and content of the file as described below. The file name format will be as follows: body_suffix.csv

### Body

The body of the filename is simply used to give a friendly name or to designate specific content.

### Suffix

The filename suffix is used to ensure a unique file name and implies a process order when multiple files with the same prefix and body exist. The suffix is simply the date and time relevant to the content of the file in the following format: YYYYMMDDHHmmss.

YYYY – The four character year
MM – The two character month, left padded with a zero when necessary (01-12)
DD – The two character day of the month, left padded with zero when necessary (01-31)
HH – The two character hour, in 24 hour format, left padded with zero when necessary (00-23)
mm – The two character minute, left padded with zero when necessary (00-59)
ss – The two character second, left padded with zero when necessary (00-59)

### File Naming Examples

The following are examples of file names. 

- Users_20180815090119.csv – File originated by Agency, containing Users data to be consumed by Skills Workflow.

## CSV Templates

This section will describe the CSV templates for the currently known exchange processes. The consumer of the CSV files will move the file to the "Success" folder from the SFTP server when it has been processed successfully and to "Failure" folder when the process result fails.

## Users

### User File

This will contain the user information requested by Skills Workflow. The frequency will be at least once per day. The user data is based on UltiPro information.

### File Name

The file name that will always be used for this file: Users_YYYYMMDDHHmmss.csv where the YYYYMMDDHHmmss suffix indicates the as of date. This overrides any previous files information.

### File Directory

This file is to be placed in the Data directory on the SFTP server.

Template

````
Please add here the template.
```



Template Description

- UserName  - The user's username - FirstName.LastName - John.Doe
- ExternalId  - The unique identifier to identify the users between systems
- ExternalNumber  - The ERP users number
- CompanyCode  - The code that identifies the company/agency
- CompanyName  - The name of the company/agency
- EmployeeExternalId  - The unique identifier to identify the users from ERP system
- DepartmentExternalId  - The unique identifier to identify the user's department between systems
- DepartmentName  - The user's department name
- DivisionName  - The division where the user's department belong
- TypologyName  - The user's typology e.g. Creative, Account, Manager, others...
- TypoloyExternalId - The unique identifier to identify the user's typology between systems
- TypologyGroupName  - The name of the group that the user's typology is included
- UserTypeId  - The current user type of the user - Full-Time, Part-Time, other
- SsoUserName  - The user's AD SAM Account Name
- Mail  - The user's e-mail for communication
- IsActive  - Users state, if it is active (1) or inactive(0)
- MaximumHours  - The maximum of hours that users can work per day
- HireDate  - The user's hire date
- StartDate  - The user's start date to fill in timesheets in Skills Workflow
- ExpirationDate  - The user's expiration date
- RequiredHours  - The Minimum Hours required per day
- RequiredWeeklyHours  - The Minimum Hours required per week
- WeeklyOvertimeThresholdHours  -
- PaidOvertime  -
- Phone  - The user's phone number
- ResponsibleId  - The responsible's external id of the user