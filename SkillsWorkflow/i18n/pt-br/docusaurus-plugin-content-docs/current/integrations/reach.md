---
id:  reach
title: Reach
sidebar_label: Reach
---

This article describes how to exchange data between Reach (SAP SuccessFactors) and Skills Workflow.

## File Transfer Technology

- The .csv files will be transferred via an SFTP server.
- The server must be set up by the Agency and credentials must be given to Skills Workflow.
- Files pertaining to data transfers are to be placed in the Data directory on the SFTP server.
- Files pertaining to process requests are to be placed in the Process directory on the SFTP server.

## File Naming Conventions

Each filename will have a prefix, body, and suffix. The name will convey information to both Agency and Skills Workflow as to the intent and content of the file as described below. The file name format will be as follows: prefix_body_suffix.csv

### Prefix

The filename prefix will consist of two characters. The first character indicates the originator of the file. The second character indicates the type of information contained in the file.

First Character

- A – Originated by Agency
- S – Originated by Skills Workflow

Second Character

- D – Data
- P – Process Command
- R – Data/Process Results

### Body

The body of the filename is simply used to give a friendly name or to designate specific content.

### Suffix

The filename suffix is used to ensure a unique file name and implies a process order when multiple files with the same prefix and body exist. The suffix is simply the date and time relevant to the content of the file in the following format: YYYYMMDDHHmmss.

- YYYY – The four character year
- MM – The two character month, left padded with a zero when necessary (01-12)
- DD – The two character day of the month, left padded with zero when necessary (01-31)
- HH – The two character hour, in 24-hour format, left padded with zero when necessary (00-23)
- mm – The two character minute, left padded with zero when necessary (00-59)
- ss – The two character second, left padded with zero when necessary (00-59)

### File Naming Examples

The following are examples of file names. The CSV template details will follow.

- AD_UserAccounts_20180815090119.csv – File originated by Agency, containing Users Accounts data to be consumed by Skills Workflow

## CSV Templates

This section will describe the CSV templates for the currently known exchange processes. The consumer of the CSV files will delete the file from the SFTP server when it has been processed regardless of the process results: success, failure or otherwise.


### User Accounts

This will contain the user information requested by Skills Workflow. The frequency will be at least once per day but may be a few times per day. The user data is based on a combination of Reach information. Reach data is only captured once per day. The file will contain the list of users whose data has changed.

### File Name

The file name that will always be used for this file: AD_UserAccounts_YYYYMMDDHHmmss.csv where the YYYYMMDDHHmmss suffix indicates the as of date. This overrides any previous files information.

### File Directory

This file is to be placed in the Data directory on the SFTP server.

### Template

```
{ 
 "users": 
   [
    { 
      "companyCode": "[AGENCY CODE]",
      "divisionid": "[DIVISION CODE]", 
      "departmentid": "[DEPARTMENT CODE]",
      "userTypologyGroup" : "[JOB CLASSIFICATION DESCRIPTION]",
      "resourceType":"[BUSINESS TITLE]",
      "userType":"[Regular/Permananet or Temporary]",
      "name": "[FIRST NAME] [LAST NAME]",
      "externalId": "[USER ID]", 
      "externalNumber": "[ADP FILE NUMBER]",
      "responsible" : "[AX INTEGRATION - TIME APPROVER]",
      "administrativeResponsible" :"[AX INTEGRATION - TIME APPROVER]",
      "planningResponsible": "[REPORTS TO USER ID]",
      "leavesResponsible" : "[AX INTEGRATION - TIME APPROVER]",
      "workphone": "[WORK PHONE]",
      "email": "[EMAIL]",
      "ssoUsername" :"[EMAIL]",
      "username": "[BUSINESS MAIL ADDRESS BEFORE @]",
      "weeklyRequiredHours": "[CONTRACTED HOURS]",
      "hireDate": "[AGENCY ADJUSTED SERVICE DATE]",
      "expirationDate": "[TERMINATE DATE]",
      "workLocation" : "[USER'S CITY]",
      "fslaStatus" : "[OVERTIME - TRUE/FALSE]",
      "isActive" : "[IS ACTIVE],
      "employeeClass" : "[Freelancer/Intern]"
    }
  ]
}
```

## Template Description

users – Object that contains a list of users' data, where only the users, where it only contains users who have changed (delta files)

- companyCode - The agency's code
- divisionid - The user division's code
- departmentid - The user department's code
- userTypologyGroup - The user's job description (not the code) - Case the group typology does not exist in the system, it will be created.
- resourceType - User's business title - Case the resourceType/typology does not exist for the corresponding department in the system, it will be created associated with the typology group
- userType - This field should be populated with the value of Regular/Permanent or Temporary field from Reach. The userType must exist in the system so the user can be created with the corresponding userType
- name - This field should be populated with the user's first and last name
- externalId - The user id from Reach 
- externalNumber - This field should be populated with the user's ADP file number 
- responsible - This field should be populated with the userId of "Reports To" user
- administrativeResponsible - This field should be populated with the userId of "Reports To" user
- planningResponsible - This field should be populated with the userId of the user's resource manager (need to find a field in Reach to fill with this enter this information)
- leavesResponsible - This field should be populated with the userId of the user that will approve the leaves (need to find a field in Reach to fill with this enter this information if different from administrativeResponsible)
- workphone - The user's work phone
- email - The user's e-mail
- ssoUsername - The user's e-mail
- username - The first part of the user's e-mail (Business mail address before "@")
- weeklyRequiredHours - The user's contracted hours
- hireDate - This field should be populated with the user hire date (agency adjusted service date)
- expirationDate - The termination date on the user's contract
- workLocation - Indicates where is the Agency city location where the user is working
- fslaStatus - Indicates if the user has the flag Overtime enabled or not
- isActive - Indicates if the user is active or inactive
- employeeClass - To identify the type of Temporary employee being concatenated with userType
- Temporary - Freelancer
- Temporary - Intern
Additionally to the above, there is another field being managed:

- Timesheet Required
- Set as True - When the userType is Regular/Permanent
- Set as False - When the userType is Temporary

## Conclusion

The contents of this document create the foundation for data and process communication methodology between Skills Workflow and Agency. The current known data and process transfers are contained in this document but more may be created as additional data and process needs are discovered.