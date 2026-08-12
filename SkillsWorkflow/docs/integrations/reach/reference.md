---
title: "Reach — Technical Reference"
description: "--- Source: [Reach] [Integrations] Users v1 (Automation) {Active}."
sidebar_label: Technical Reference
sidebar_position: 2
---


:::info Technical reference
This page is the interface specification for the Reach integration — file formats, naming conventions and field-by-field mappings. It is written for the team implementing the exchange.

For what this integration does and how it is configured, see **[Reach](./)**.
:::


### Description

This article describes how to exchange data between Reach (SAP SuccessFactors) and Skills Workflow.

---
### Components

| Name | Type | Version | Stage | Role |
| --- | --- | --- | --- | --- |
| Reach users integration | Automation | 1 | Active | Scheduled job that reads the AD_UserAccounts CSV from SFTP and provisions/updates/deactivates users |

Source: `[Reach] [Integrations] Users v1 (Automation) {Active}.json`.

---
### File Transfer Technology

- The .csv files will be transferred via an SFTP server.
- The server must be set up by the Agency and credentials must be given to Skills Workflow.
- Files pertaining to data transfers are to be placed in the Data directory on the SFTP server.
- Files pertaining to process requests are to be placed in the Process directory on the SFTP server.

---
### File Naming Conventions

Each filename will have a prefix, body, and suffix. The name will convey information to both Agency and Skills Workflow as to the intent and content of the file as described below. The file name format will be as follows: prefix_body_suffix.csv

#### Prefix

The filename prefix will consist of two characters. The first character indicates the originator of the file. The second character indicates the type of information contained in the file.

First Character

- A – Originated by Agency
- S – Originated by Skills Workflow

Second Character

- D – Data
- P – Process Command
- R – Data/Process Results

#### Body

The body of the filename is simply used to give a friendly name or to designate specific content.

#### Suffix

The filename suffix is used to ensure a unique file name and implies a process order when multiple files with the same prefix and body exist. The suffix is simply the date and time relevant to the content of the file in the following format: YYYYMMDDHHmmss.

- YYYY – The four character year
- MM – The two character month, left padded with a zero when necessary (01-12)
- DD – The two character day of the month, left padded with zero when necessary (01-31)
- HH – The two character hour, in 24-hour format, left padded with zero when necessary (00-23)
- mm – The two character minute, left padded with zero when necessary (00-59)
- ss – The two character second, left padded with zero when necessary (00-59)

#### File Naming Examples

The following are examples of file names. The CSV template details will follow.

- AD_UserAccounts_20180815090119.csv – File originated by Agency, containing Users Accounts data to be consumed by Skills Workflow

---
### CSV Templates

This section will describe the CSV templates for the currently known exchange processes. The consumer of the CSV files will delete the file from the SFTP server when it has been processed regardless of the process results: success, failure or otherwise.


#### User Accounts

This will contain the user information requested by Skills Workflow. The frequency will be at least once per day but may be a few times per day. The user data is based on a combination of Reach information. Reach data is only captured once per day. The file will contain the list of users whose data has changed.

#### File Name

The file name that will always be used for this file: AD_UserAccounts_YYYYMMDDHHmmss.csv where the YYYYMMDDHHmmss suffix indicates the as of date. This overrides any previous files information.

#### File Directory

This file is to be placed in the Data directory on the SFTP server.

#### Template

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

---
### Template Description

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

---
### How It Works (Automation Logic)

The `Reach users integration` automation (`[Reach] [Integrations] Users v1 (Automation) {Active}.json`) runs daily at 04:00 UTC and drives the whole exchange:

1. Reads the SFTP connection details from the configuration key `SFTP-GSPSF` (`GET /api/configuration-keys/SFTP-GSPSF`).
2. Lists files on the SFTP Data directory and loops over each one found.
3. For each file: downloads it over SFTP, reads it as a header CSV, then loops over every row.
4. For each row (a user record):
   - Looks the user up in Skills Workflow by `externalId` (`GET /api/users/external?externalId=...`).
   - If not found and `isActive` is `false`, the row is skipped (no user created for an inactive new hire).
   - If found and `isActive` is `false`, the user is patched with the expiration date and then deactivated (`PATCH /api/users/{id}`, setting `isActive: false` and renaming `userName`/`SsoUserName` with the `externalId` suffix so the login frees up).
   - Otherwise the user is created or updated: the department is looked up by `externalId` (`GET /api/companies/{companyId}/departments/external?externalId=...`) and the job typology group/typology are created if missing (`POST /api/usertypologygroups`, `POST /api/usertypologies`) — freelancers (`employeeClass = Freelancer`) get a group name prefixed `FREELANCE `.
   - The user is created via `POST /api/users`; freelancers are created inactive first and then activated in a second pass.
   - If `responsible` (manager external ID) is present, the manager is looked up (`GET /api/users/external?externalId=...`) and patched onto the user as `ResponsibleId`, together with `PaidOvertime` from `fslaStatus` and, when present, `CityId` from `workLocation`.
   - If the manager lookup fails, the user is still created, and the automation result payload notes that it was created without a manager.
5. Once a file's rows are all processed, the file is moved to the SFTP success or failure subfolder (`ftpToPathSuccess` / `ftpToPathFailure`, both read from the same `SFTP-GSPSF` configuration key).

The automation only sends error notifications (`sonia@skillsworkflow.com`); it does not notify on success.

---
### External System Contact Points

- **SFTP** — host, credentials and paths are not hard-coded; they are all resolved at runtime from the Skills Workflow configuration key `SFTP-GSPSF`.
- **Skills Workflow Integration API** (`integration-api-eastus.skillsworkflow.com`) — the automation calls it to read and write user, department and typology data:
  - `GET /api/users/external?externalId=`
  - `POST /api/users`
  - `PATCH /api/users/{id}`
  - `GET /api/companies/{companyId}/departments/external?externalId=`
  - `POST /api/usertypologygroups`
  - `POST /api/usertypologies`
  - `GET /api/usertypes/name?name=`

### Configuration

- Configuration key **`SFTP-GSPSF`** — holds `ftpHostIp`, `ftpUsername`, `ftpPassword`, `ftpPath`, `ftpToPathSuccess`, `ftpToPathFailure` and `fileNameContains`. Its values are not part of the export.
- Scheduler — daily, starting 2023-11-16 04:00 UTC; error notifications go to `sonia@skillsworkflow.com`.

### Open Questions

- The CSV template above documents `divisionid`, `administrativeResponsible`, `planningResponsible` and `leavesResponsible`, but none of these fields are read anywhere in the exported automation — not determinable from the export whether they are still produced by Reach or simply unused.
- The exact matching rule Skills Workflow uses to decide create vs. update (beyond the `externalId` lookup) is not determinable from the export.