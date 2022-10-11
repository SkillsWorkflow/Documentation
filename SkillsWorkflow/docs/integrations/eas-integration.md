---
id:  eas-integration
title: EAS Integration
sidebar_label: EAS Integration
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Cause

There was a need to exchange data between EAS and Skills Workflow

## File Transfer Technology

The JSON files will be transferred via an SFTP server. The server must be set up by the Agency and credentials must be given to Skills Workflow. Files pertaining to data transfers are to be placed in the Data directory on the SFTP server. Files pertaining to process requests are to be placed in the Process directory on the SFTP server.

## File Naming Conventions

Each JSON filename will have a prefix, body and suffix. The name will convey information to both Agency and Skills Workflow as to the intent and content of the file as described below. The file name format will be as follows: prefix_body_suffix.json

Prefix

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
- HH – The two character hour, in 24 hour format, left padded with zero when necessary (00-23)
- mm – The two character minute, left padded with zero when necessary (00-59)
- ss – The two character second, left padded with zero when necessary (00-59)

### File Naming Examples

The following are examples of file names. The JSON template details will follow.

- AD_LeaveBalance_20180815090119.json – File originated by Agency, containing Leave Balance data to be consumed by Skills Workflow.
- AD_LeaveBalance_20180815090119.json – File originated by Skills Workflow, containing the results of the Leave Balance data submitted in the AD_LeaveBalance_20180815090119.json file.
- AD_TimeBatch_20180801000000.json – File originated by Agency, containing Time Batch data to be consumed by Skills Workflow.
- SR_TimeBatch_20180801000000.json – File originated by Skills Workflow, containing the results of the Time Batch data submitted in the AD_TimeBatch_20180801000000.json file.
- SP_CreateJobJacket_20180815144600.json – File originated by Skills Workflow with the process command to create a job jacket.
- AR_CreateJobJacket_20180815144600.json – Results file from Agency in response to the command (SP_CreateJobJacket_20180815144600.json) request to create a job jacket


## JSON Templates

This section will describe the JSON templates for the currently known exchange processes. The consumer of the JSON files will delete the file from the SFTP server when it has been processed regardless of the process results: success, failure or otherwise.


<Tabs
  groupId="actions"
  defaultValue="start"
  values={[
    {label: 'Users', value: 'users'},
    {label: 'Leaves', value: 'leaves'},
    {label: 'Time Sheets', value: 'time sheets'},
    {label: 'Client Group', value: 'client group'},
    {label: 'Client', value: 'client'},
    {label: 'Product', value: 'product'},
    {label: 'Job Jacket', value: 'job jacket'},
    {label: 'Data Result', value: 'data result'},
  ]
}>

<TabItem value="users">

This will contain the user information requested by Skills Workflow. The frequency will be at least once per day but may be a few times per day. The user data is based on a combination of Reach and Active Directory information. Reach data is only captured once per day but Active Directory changes can occur at any time.

The integration does not preclude the creation of users manually.

In order for users not to be inactivated because they are not in the file, there is a field in the Integrator settings, that allows you to set how many days the user will have before be inactivated if it does not come in the file.

- Expiration Days


## File Name

The file name that will always be used for this file: AD_UserAccounts_YYYYMMDDHHmmss.json where the YYYYMMDDHHmmss suffix indicates the as of date. This overrides any previous files information.

File Directory

This file is to be placed in the Data directory on the SFTP server.

### Template

```
{
 {
   "useraccounts": {
      "asofdate": "[AS OF DATE]",
      "recordcount": "[RECORD COUNT]",
      "users": [
         {
            "userid": "[SAM ACCOUNT NAME]",
            "personid": "[USER ID]",
            "company": "[COMPANY]",
            "fullname": "[FULL NAME]",
            "divisionid": "[DIVISIONID]",
            "departmentid": "[DEPARTMENTID]",
            "position": "[POSITION]",
            "directmanagerid": "[DIRECT MANAGER SAM ACCOUNT NAME]",
            "timeapproverid": "[TIMESHEET APPROVER SAM ACCOUNT NAME]",
            "workphone": "[WORK PHONE]",
            "email": "[EMAIL]",
            "username": "[SAM ACCOUNT NAME]",
            "scheduledhours": "[REQUIRED WEEKLY HOURS]",
            "contracttype": "[FULL-TIME/PART-TIME/FREELANCER]",
            "hiredate": "[LATEST HIRE DATE/CREATE DATE]",
            "enddate": "[TERM DATE/EXPIRATION DATE]"
         },
         {
            "userid": "[SAM ACCOUNT NAME]",
            "personid": "[USER ID]",
            "company": "[COMPANY]",
            "fullname": "[FULL NAME]",
            "division": "[DIVISION]",
            "position": "[POSITION]",
            "directmanagerid": "[DIRECT MANAGER SAM ACCOUNT NAME]",
            "timeapproverid": "[TIMESHEET APPROVER SAM ACCOUNT NAME]",
            "workphone": "[WORK PHONE]",
            "email": "[EMAIL]",
            "username": "[SAM ACCOUNT NAME]",
            "scheduledhours": "[REQUIRED WEEKLY HOURS]",
            "contracttype": "[FULL-TIME/PART-TIME/FREELANCER]",
            "hiredate": "[LATEST HIRE DATE/CREATE DATE]",
            "enddate": "[TERM DATE/EXPIRATION DATE]"
         }
      ]
   }
}
}
```

### Template Description

useraccounts – Main object

- asofdate – Date from which the data is relevant
- recordcount – The number of user records contained in the users object list
- users – Object that contains a list of user objects.
  - userid – (UID) - Unique string identifier for a user record - In this case is sent to Skills Workflow the SAM Account Name.
  - personalid - (UID) - Unique string identifier for a user record - The personalid of the user in EAS. - 
  - company – The code of the company assigned to the user
  - fullname – The full name of the user
  - divisionid – The divisionid - will be checked with the SW Division Code
  - departmentid – The departmentid - will be checked with the SW Department Code
  - position – The title of the user
  - directmanagerid – The SAM Account Name of the direct manager
  - timeapproverid – The SAM Account Name of the time approver
  - workphone – Work phone number of the user
  - email – Email address of the user
  - username – SamAccountName (login name) of the user
  - scheduledhours – Number of hours the user is scheduled to work in a week
  - contracttype – Full-Time/Part-Time/Freelancer
  - hiredate – Actual Hire date for employees, Active Directory created date for Freelancers
  - enddate – Actual Term date for employees, Active Directory expires date for Freelancers

UserAccount file	Skills Workflow 	Description 

userid	SAM Account Name	User	ExternalId	(UID) - Unique string identifier for a user record
personalid	User Id	User	ExternalNumber	(UID) - Unique string identifier for a user record - it changes everytime that the user change his contract type
company	CompanyCode	Company	CompanyCode	The code of the company assigned to the user
fullname	User full name	Employee	Name	The full name of the user
divisionid	Division Id	Division	DivisionCode	  The value must exist in Skills Workflow
departmentid	Department ID	Department	DepartmentCode	  The value must exist in Skills Workflow
position	User title	User	UserType	 The value must exist in Skills Workflow
directmanagerid	 The SAM Account Name of the Direct Manager	User	 ResponsibleExternalId	 
timeapproverid	 Timesheet Approver	 N/a	 N/a	 
workphone	 Work phone number of the user	 User	 Phone	 
email	 Email address of the user	 User	 E-mail	 
username	 SamAccountName (login name) of the user	 User	 SSOUsername	 
scheduledhours	 Number of hours the user is scheduled to work in a week	 User	 Minimum Weekly Hours	For minimum daily hours we split the value by 5
contracttype	 Full-Time/Part-Time/Freelancer	 User	 UserType	 
hiredate	 Actual Hire date for employees, Active Directory created date for Freelancers	 User	 HireDate	 
enddate	 Actual Term date for employees, Active Directory expires date for Freelancers	 User	 EndDate	 

##Conclusion

The contents of this document create the foundation for data and process communication methodology between Skills Workflow and Agency. The current known data and process transfers are contained in this document but more may be created as additional data and process needs are discovered.

</TabItem>

<TabItem value="leaves">

## Leave Entitlement

This will contain the yearly entitlement for the specific leave types for each employee as well as the time taken for each leave type.

## File Name

The file name that will always be used for this file: AD_LeaveEntitlement_YYYYMMDDHHmmss.json where the YYYYMMDDHHmmss suffix indicates the as of date. This overrides any previous files information.

## File Directory

This file is to be placed in the Data directory on the SFTP server.

Template

```
{
   "leaveentitlement": {
      "asofdate": "[LONG DATE VALUE]",
      "recordcount": "[USER RECORD COUNT]",
      "userentitlement": [
         {
            "userid": "[SAMACCOUNTNAME]",
            "personid": "[PERSON ID]",
            "effectivedate": "[EFFECTIVE DATE]",
            "personalleave": {
               "personalhours": "[DECIMAL NUMBER OF HOURS]",
               "personaldays": "[INTEGER NUMBER OF DAYS]",
               "personaltime": [
                  {
                     "dataid": "[LONG UNIQUE ID]",
                     "userid": "[SAMACCOUNTNAME]",
                     "personid": "[PERSONIC]",
                     "jobnumber": "[JOB CODE]",
                     "functioncode": "[FUNCTION CODE]",
                     "itemdate": "[ITEM DATE]",
                     "createdate": "[CREATE DATE]",
                     "hours": "[DECIMAL HOURS TAKEN]",
                     "days": "[DECIMAL DAYS TAKEN]"
                  },
                  {
                     "dataid": "[LONG UNIQUE ID]",
                     "userid": "[SAMACCOUNTNAME]",
                     "personid": "[PERSONIC]",
                     "jobnumber": "[JOB CODE]",
                     "functioncode": "[FUNCTION CODE]",
                     "itemdate": "[ITEM DATE]",
                     "createdate": "[CREATE DATE]",
                     "hours": "[DECIMAL HOURS TAKEN]",
                     "days": "[DECIMAL DAYS TAKEN]"
                  }
               ]
            },
            "sickleave": {
               "sickhours": "[DECIMAL NUMBER OF HOURS]",
               "sickdays": "[INTEGER NUMBER OF DAYS]",
               "sicktime": [
                  {
                     "dataid": "[LONG UNIQUE ID]",
                     "userid": "[SAMACCOUNTNAME]",
                     "personid": "[PERSONIC]",
                     "jobnumber": "[JOB CODE]",
                     "functioncode": "[FUNCTION CODE]",
                     "itemdate": "[ITEM DATE]",
                     "createdate": "[CREATE DATE]",
                     "hours": "[DECIMAL HOURS TAKEN]",
                     "days": "[DECIMAL DAYS TAKEN]"
                  },
                  {
                     "dataid": "[LONG UNIQUE ID]",
                     "userid": "[SAMACCOUNTNAME]",
                     "personid": "[PERSONIC]",
                     "jobnumber": "[JOB CODE]",
                     "functioncode": "[FUNCTION CODE]",
                     "itemdate": "[ITEM DATE]",
                     "createdate": "[CREATE DATE]",
                     "hours": "[DECIMAL HOURS TAKEN]",
                     "days": "[DECIMAL DAYS TAKEN]"
                  }
               ]
            },
            "vacationleave": {
               "vacationhours": "[DECIMAL NUMBER OF HOURS]",
               "vacationdays": "[INTEGER NUMBER OF DAYS]",
               "vacationtime": [
                  {
                     "dataid": "[LONG UNIQUE ID]",
                     "userid": "[SAMACCOUNTNAME]",
                     "personid": "[PERSONIC]",
                     "jobnumber": "[JOB CODE]",
                     "functioncode": "[FUNCTION CODE]",
                     "itemdate": "[ITEM DATE]",
                     "createdate": "[CREATE DATE]",
                     "hours": "[DECIMAL HOURS TAKEN]",
                     "days": "[DECIMAL DAYS TAKEN]"
                  },
                  {
                     "dataid": "[LONG UNIQUE ID]",
                     "userid": "[SAMACCOUNTNAME]",
                     "personid": "[PERSONIC]",
                     "jobnumber": "[JOB CODE]",
                     "functioncode": "[FUNCTION CODE]",
                     "itemdate": "[ITEM DATE]",
                     "createdate": "[CREATE DATE]",
                     "hours": "[DECIMAL HOURS TAKEN]",
                     "days": "[DECIMAL DAYS TAKEN]"
                  }
               ]
            }
         }
      ]
   }
}
```

### Template Description

- actionType – The actionType must be Rest for Rest actions
- name - The name of the action
- next - The action that will be triggered after the current action been completed
- Method - Should be set according to the method to be applied
- url - The URL to be called
- bodyMediaType - Allows you to manage the Request headers and body.


leaveentitlement – Main Object

- asofdate – Date the file was created
- recordcount – Number of user accounts in the data
- userentitlement – array that contains 1 or more user records
  - userid – (SSO Name) Unique identifier for each user
  - personid – Person ID for user
  - effectivedate – Date the entitlements are effective. Any time taken prior to this date should not be used in any calculation against the entitlement amount.
  - personalleave – Person Leave object
  - personaldays – The number of personal days from the effective date to which a user is entitled.
  - personaltime – An array that contains 0 or more personal time taken objects.
  - dataid – Unique identifier for time taken record
  - userid – (SSO Name) – Unique identifier for each user
  - personid – Person ID for user
  - jobnumber – Job number for which the time taken pertains
  - functioncode – Function code for which the time taken pertains
  - itemdate – The date for which the time taken pertains
  - createdate – The create date of the time record
  - hours – The number of hours taken
  - days – The number calculated days taken based on the hours
  - sickleave – Sick Leave object
  - sickdays – The number of sick days from the effective date to which a user is entitled.
  - sicktime – An array that contains 0 or more sick time taken objects.
  - dataid – Unique identifier for time taken record
  - userid – (SSO Name) – Unique identifier for each user
  - personid – Person ID for user
  - jobnumber – Job number for which the time taken pertains
  - functioncode – Function code for which the time taken pertains
  - itemdate – The date for which the time taken pertains
  - createdate – The create date of the time record
  - hours – The number of hours taken
  - days – The number calculated days taken based on the hours
  - vacationleave – Vacation Leave object
  - vacationdays – The number of vacation days from the effective date to which a user is entitled.
  - vacationtime – An array that contains 0 or more vacation time taken objects.
  - dataid – Unique identifier for time taken record
  - userid – (SSO Name) – Unique identifier for each user
  - personid – Person ID for user
  - jobnumber – Job number for which the time taken pertains
  - functioncode – Function code for which the time taken pertains
  - itemdate – The date for which the time taken pertains
  - createdate – The create date of the time record
  - hours – The number of hours taken
  - days – The number calculated days taken based on the hours


## Conclusion

The contents of this document create the foundation for data and process communication methodology between Skills Workflow and Agency. The current known data and process transfers are contained in this document but more may be created as additional data and process needs are discovered.



</TabItem>

<TabItem value="times heets">

## Time Batch

This will contain the time posted as requested by Skills Workflow to facilitate time reconciliation. Each file will contain only the time posted since the last file was consumed by Skills Workflow. The frequency will be at least once per day but may be a few times per day. The user data is based on EAS information which can change any time.

## File Name

The file name that will always be used for this file: AD_TimeBatch_YYYYMMDDHHmmss.json where the YYYYMMDDHHmmss suffix indicates the start date/time for this batch of posted time. Each file is unique and does not overwrite any previous data.

File Directory

This file is to be placed in the Data directory on the SFTP server.

## Template

```
{
  {
  "timebatch": {
     "batchid": "[BATCH ID]",
     "batchstart": "[BATCH START DATE]",
     "batchend": "[BATCH END DATE]",
     "batchrecordcount": "[RECORD COUNT]",
     "batchdata": [
    {
     "dataid": "[TIME UNIT ID]",
     "userid": "[SAM ACCOUNT NAME]",
     "jobnumber": "[JOB NUMBER]",
     "functioncode": "[FUNCTION CODE]",
     "itemdate": "[ITEM DATE]",
     "createdate": "[CREATE DATE]",
     "hours": "[HOURS]"
    },
    {
     "dataid": "[TIME UNIT ID]",
     "userid": "[SAM ACCOUNT NAME]",
     "jobnumber": "[JOB NUMBER]",
     "functioncode": "[FUNCTION CODE]",
     "itemdate": "[ITEM DATE]",
     "createdate": "[CREATE DATE]",
     "hours": "[HOURS]"
    }]
  }
}
 }
```

#Template Description

timebatch – Main object

- batchid – Unique integer id for each batch
- batchstart – Represents the start date and time of data contained in the file
- batchend – Represents the end date and time of data contained in the file
- batchrecordcount – The number of time records contained in the batchdata object list
- batchdata – Object that contains a list of time objects.
  - dataid – (UID) - Unique long value for the time record.
  - userid – Unique string identifier for a user record, the SAM Account Name
  - jobnumber – The Job Number for which the time was posted
  - functioncode – The Function Code for which the time was posted
  - itemdate – The specific date for which the time was posted
  - createdate – The specific date/time the time record was created
  - hours – The number of hours (quarter hour increments) that was posted


## Conclusion

The contents of this document create the foundation for data and process communication methodology between Skills Workflow and Agency. The current known data and process transfers are contained in this document but more may be created as additional data and process needs are discovered.

</TabItem>

<TabItem value="client group">

## Client Group

To be added to the documentation according to the new definition.

## Conclusion

The contents of this document create the foundation for data and process communication methodology between Skills Workflow and Agency. The current known data and process transfers are contained in this document but more may be created as additional data and process needs are discovered.


</TabItem>

<TabItem value="client">

## Client

The first batch should contain all active clients. All other batches must contain new clients or changes to existing clients only.

Note: This file must be consumed before the Product Batch file because the data in the Product Batch file depends on the data from the Client Batch file.

## File Name

The file name that will always be used for this file: AD_ClientBatch_YYYYMMDDHHmmss.json where the YYYYMMDDHHmmss suffix indicates the start date/time for this batch of clients. Each file is unique and does not overwrite any previous data.

## File Directory

This file is to be placed in the Data directory on the SFTP server.

## Template

```
{
  "clientbatch": {
    "batchid": "[BATCH ID]",
    "batchstart": "[BATCH START DATE]",
    "batchend": "[BATCH END DATE]",
    "batchrecordcount": "[RECORD COUNT]",
    "batchdata": [
      {
        "type": "[NEW/UPDATE]",
        "company": "[COMPANY]",
        "clientid": "[UNIQUE IDENTIFIER]",
        "clientgroup": "[CLIENT GROUP]",
        "clientcode": "[CLIENT CODE]",
        "clientname": "[CLIENT NAME]",
        "clientdescription": "[CLIENT DESCRIPTION]",
        "clientstatus": "[0 - Active, 1 - Inactive]",
        "clientcreatedate": "[CLIENT CREATE DATE]",
        "clientmodifydate": "[CLIENT MODIFY DATE]"
      },
      {
        "type": "[NEW/UPDATE]",
        "company": "[COMPANY]",
        "clientid": "[UNIQUE IDENTIFIER]",
        "clientgroup": "[CLIENT GROUP]",
        "clientcode": "[CLIENT CODE]",
        "clientname": "[CLIENT NAME]",
        "clientdescription": "[CLIENT DESCRIPTION]",
        "clientstatus": "[0 - Active, 1 - Inactive]",
        "clientcreatedate": "[CLIENT CREATE DATE]",
        "clientmodifydate": "[CLIENT MODIFY DATE]"
      }
    ]
  }
}     
 ```


## Template Description

clientbatch – Main object

- batchid – Unique integer id for batch
- batchstart – Represents the start date and time of data contained in the file
- batchend – Represents the end date and time of data contained in the file
- batchrecordcount – The number of time records contained in the batchdata object list
- batchdata – Object that contains a list of client objects.
  - type – Indicates if the record is a new client or an attribute for an existing client has changed (NEW – new record, UPDATE – changed record)
  - company - The code of the company assigned to the client - Company Code
  - clientid – (UID) – Unique long value for the client record - External Id
  - clientgroup – The name of the client group assigned in External Source. - Client Group External Id
  - clientcode – Unique 3-character alpha-numeric code. - Code
  - clientname – The name of the client - Name
  - clientdescription – Description for the client, if it exists. - N/a
  - clientstatus – 0 = Active, 1 = Inactive - Billing Client Status
  - clientcreatedate – Date client record was created in External Source. - N/a
  - clientmodifydate – Date of last change recorded for the client record in External Source - N/a

## Conclusion

The contents of this document create the foundation for data and process communication methodology between Skills Workflow and Agency. The current known data and process transfers are contained in this document but more may be created as additional data and process needs are discovered.


</TabItem>

<TabItem value="product">

## Product

The first batch will contain all active products for all active clients. All other batches will contain new products or changes to existing products only.

Note: This file must be consumed after the Client Batch file because the data in the Product Batch file depends on the data from the Client Batch file.

## File Name

The file name that will always be used for this file: AD_ProductBatch_YYYYMMDDHHmmss.json where the YYYYMMDDHHmmss suffix indicates the start date/time for this batch of products. Each file is unique and does not overwrite any previous data.

## File Directory

This file is to be placed in the Data directory on the SFTP server.

## Template

```
{
  "productbatch": {
    "batchid": "[BATCH ID]",
    "batchstart": "[BATCH START DATE]",
    "batchend": "[BATCH END DATE]",
    "batchrecordcount": "[RECORD COUNT]",
    "batchdata": [
      {
        "type": "[NEW/UPDATE]",
        "company": "[COMPANY]",
        "productid": "[UNIQUE IDENTIFIER]",
        "productcode": "[PRODUCT CODE]",
        "productname": "[PRODUCT NAME]",
        "productdescription": "[PRODUCT DESCRIPTION]",
        "productstatus": "[0 - Active, 1 - Inactive]",
        "productcreatedate": "[PRODUCT CREATE DATE]",
        "productmodifydate": "[PRODUCT MODIFY DATE]",
        "clientid": "[CLIENT ID]",
        "clientgroup": "[CLIENT GROUP]",
        "clientcode": "[CLIENT CODE]",
        "clientname": "[CLIENT NAME]",
        "clientdescription": "[CLIENT DESCRIPTION]",
        "clientstatus": "[0 - Active, 1 - Inactive]",
        "clientcreatedate": "[CLIENT CREATE DATE]",
        "clientmodifydate": "[CLIENT MODIFY DATE]"
      },
      {
        "type": "[NEW/UPDATE]",
        "company": "[COMPANY]",
        "productid": "[UNIQUE IDENTIFIER]",
        "productcode": "[PRODUCT CODE]",
        "productname": "[PRODUCT NAME]",
        "productdescription": "[PRODUCT DESCRIPTION]",
        "productstatus": "[0 - Active, 1 - Inactive]",
        "productcreatedate": "[PRODUCT CREATE DATE]",
        "productmodifydate": "[PRODUCT MODIFY DATE]",
        "clientid": "[CLIENT ID]",
        "clientgroup": "[CLIENT GROUP]",
        "clientcode": "[CLIENT CODE]",
        "clientname": "[CLIENT NAME]",
        "clientdescription": "[CLIENT DESCRIPTION]",
        "clientstatus": "[0 - Active, 1 - Inactive]",
        "clientcreatedate": "[CLIENT CREATE DATE]",
        "clientmodifydate": "[CLIENT MODIFY DATE]"
      }
    ]
  }
}
 ```


## Template Description

- actionType - The action type is CreateCsv
- name - The action name is custom
- next - The next action 
- hasHeaderRecord - The field to indicate if when exporting the headers should be included
- data - The data in JSON to be considered to be exported
- dataColumns - The columns that should be exported
- delimiter - The columns delimiter e.g. "," , "\t" , ";", etc
- quote - The value of the column will be within the character set in the quote e.g. "\"" to make the column values between "

productbatch – Main object

- batchid – Unique integer id for batch
- batchstart – Represents the start date and time of data contained in the file
- batchend – Represents the end date and time of data contained in the file
- batchrecordcount – The number of time records contained in the batchdata object list
- batchdata – Object that contains a list of client objects.
  - Type – Indicates if the record is a new client or an attribute for an existing client has changed (NEW – new record, UPDATE – changed record)
  - company - The code of the company assigned to the product - Company Code
  - productid – (UID) – Unique long value for the product record - External Id
  - productcode – Unique 3-character alpha-numeric code. - Code
  - productname – The name assigned to the product record. - Name
  - productdescription – Description for the product, if it exists. - N/a
  - productstatus – 0 = Active, 1 = Inactive - Billing Product Status
  - productcreatedate – Date product record was created in in External Source. - N/a
  - productmodifydate – Date of last change recorded for the product record in External Source. - N/a
  - clientid – Unique long value for the client record - Commercial Client External Id
  - clientgroup – The name of the client group assigned in External Source. - N/a
  - clientcode – Unique 3-character alpha-numeric code. - N/a
  - clientname – The name assigned to the client record. - N/a
  - clientdescription – Description for the client, if it exists. - N/a
  - clientstatus – 0 = Active, 1 = Inactive - N/a
  - clientcreatedate – Date client record was created in External Source. - N/a
  - clientmodifydate – Date of last change recorded for the client record in External Source. - N/a

## Conclusion

The contents of this document create the foundation for data and process communication methodology between Skills Workflow and Agency. The current known data and process transfers are contained in this document but more may be created as additional data and process needs are discovered.

</TabItem>

<TabItem value="job jacket">

## Request

### Create a Job Jacket Request

This will contain instructions that Agency will use to create a job jacket in Nuxeo. This file will be generated when a work order request workflow is in the approved stage in Skills Workflow.

### File Name

The file name that will always be used for this file: SP_[JOBNUMBER]_YYYYMMDDHHmmss.json where the placeholder [JOBNUMBER] is replaced by the Job Number indicated in the workflow and the YYYYMMDDHHmmss suffix indicates the date/time that the request was made.

File Directory

This file is to be placed in the Process directory on the SFTP server.


### Template

```
{
   "process": {
      "name": "CreateJobJacket",
      "instructions": [
         {
            "name": "CreateJobJacket",
            "parameters": [
               {
                  "name": "jobcode",
                  "value": "[Project Number]"
               },
               {
                  "name": "jobjackettype",
                  "value": "[Project Classification Code]"
               }
            ]
         }
      ],
      "emailaddresses": [
         {
            "displayname": "[Approver’s Name]",
            "email": "[Approver’s Email Address]"
         }
      ]
   }
}
 ```


### Template Description

process – Main object

- name – Always “CreateJobJacket”
- instructions – Object that contains a list of instructions for the processor to perform
  - name – Always “CreateJobJacket”
  - parameters – Object that contains a list of parameter objects as name/value pairs
    - First Parameter
      - name – Always “jobcode”
      - value – The actual job code for which the job jacket needs to be created in Nuxeo
    - Second Parameter
      - name – Always “jobjackettype”
      - value – The name of the job jacket type that will be created in Nuxeo
    - emailaddresses – Object that contains a list of email addresses to send the success or failure of the job jacket creation process.
      - displayname – The approvers full name
      - email – The approvers email address


### Conclusion

The contents of this document create the foundation for data and process communication methodology between Skills Workflow and Agency. The current known data and process transfers are contained in this document but more may be created as additional data and process needs are discovered.

## Result

### Create a Job Jacket Result

This will contain results of creating a Job Jacket in Nuxeo for a specific Create Job Jacket Request file.

### File Name

The file name that will always be used for this file: AR_[BODY]_[SUFFIX].json where the [BODY] and [SUFFIX] of the file name will match the Create Job Jacket Request file body and suffix.

### File Directory

This file is to be placed in the Process directory on the SFTP server.

### Template

```
{
   "process_results": {
      "name": "CreateJobJacket",
      "status": "[SUCCEEDED/QUEUED/FAILED]",
      "message": "[MESSAGE ABOUT PROCESS]",
      "process_info": [
         {
            "name": "jobcode",
            "value": "[Project Number]"
         },
         {
            "name": "jobjackettype",
            "value": "[Project Classification Code]"
         },
         {
            "name": "jobjacketurl",
            "value": "[Link to Job Jacket in Nuxeo]"
         }
      ]
   }
}
```

### Template Description

process_results – Main object

- name – Always “CreateJobJacket”
- status – SUCCEEDED/QUEUED/FAILED
- message – Message that will provide more details about the status.
- process_info – Object that contains a list of name/value pairs that are specific to the CreateJobJacket process.
  - First process_info item
    - name – Always “jobcode”
    - value – The Job Code that was submitted in the request
  - Second process_info item
    - name – Always “jobjackettype”
    - value – The Job Jacket Type that was submitted in the request
  - Third process_info item (ONLY if job jacket was successfully created)
    - name – Always “jobjacketurl”
    - value – The url that links to the specific job jacket in Nuxeo


### Conclusion

The contents of this document create the foundation for data and process communication methodology between Skills Workflow and Agency. The current known data and process transfers are contained in this document but more may be created as additional data and process needs are discovered.



</TabItem>

<TabItem value="data result">

## Data Results File

This will contain the results of the data file transaction process. The same format is used for all data file transactions.

File Name

The file name that will always be used for this file: SR_[BODY]_[SUFFIX].json where the [BODY] and [SUFFIX] values are replaced with the respective body and suffix of the data file that was processed.

File Directory

This file is to be placed in the Data directory on the SFTP server.

## Template

```
{
   "data_results": {
      "status": "[SUCCEEDED/FAILED]",
      "message": "[MESSAGE ABOUT RESULTS]",
      "errors": [
         {
            "uid": "[UNIQUE RECORD ID FOR DATA]",
            "error": "[REASON FOR ERROR]"
         },
         {
            "uid": "[UNIQUE RECORD ID FOR DATA]",
            "error": "[REASON FOR ERROR]"
         }
      ]
   }
}
```

## Template Description

data_results – Main object

- status – Status of process SUCCEEDED/FAILED
- message – Message about the results.
- errors – Object that contains a list of error objects (if there are errors).
  - uid – The unique identifier for the data being processed. In this document, this field is designated by the (UID) indicator.
  - error – The error specific to the record indicated by the uid


## Conclusion

The contents of this document create the foundation for data and process communication methodology between Skills Workflow and Agency. The current known data and process transfers are contained in this document but more may be created as additional data and process needs are discovered.

</TabItem>


</Tabs>

