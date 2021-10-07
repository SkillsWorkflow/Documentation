---
id: actions
title: Actions
sidebar_label: Actions
---
import Tabs from '@theme/Tabs'; import TabItem from '@theme/TabItem';

This section will describe the group of action types available to be set in the Automation Workflow.

## Start

The Start action must be the first action set in the Automation Workflow.

Without this action, the Automation Workflow will not be saved nor started, since this is the action that indicates that
the workflow should begin.

When this action is triggered, the payload will be loaded into the {{['#HttpRequest']$.Body}}.

#### Configurations

To configure this action, the fields required to be filled are:

* actionType - Set as "Start"
* name
* next

#### Template

```json {2}
{  
    "actionType": "Start",  
    "name": "Starting",  
    "next": "GetJobBrief"  
}
```

#### Template Description

* actionType – The type of action that will be triggered
* name - The name of the action
* next - The action that will be triggered after the current action been completed

## Result

The Result action is the action responsible to finish the Automation Workflow.

Once the Result action is triggered, it will end the automation workflow.

It is also possible to return a custom response, by managing the action httpResponse field.

#### Configuration

The default Result action does not require any additional field other than actionType and the name.

To have a custom Response you must configure the httpResponse.

* httpResponse
  * statusCode
  * headers
  * body

#### Template

```json {2,4-10}
{
    "actionType": "Result",
    "name": "Exit",
    "httpResponse": {
        "statusCode": 200,
        "headers": {
            "content-type": "application/json"
            },
        "body": "{{['SendExpenseFile']}}"
    }
}     
```

#### Template Description

* actionType - The action type is Result
* name - The action name is custom
* httpResponse - Optional
  * statusCode - The value to be sent in the HttpResponse statusCode
  * headers - The headers to be sent in the HttpResponse headers
  * body - The body to be sent in the HttpResponse body

---

## Rest
The Rest action allows doing Rest calls by setting in the Method parameter:

* GET
* POST
* PUT
* PATCH
* DELETE

#### Configuration

To configure this action, the fields available are:

* actionType - Rest
* Method - GET/POST/PUT/PATCH/DELETE
* bodyMediaType - Json/Raw/UrlEncodedFormData/MultipartFormData/File
* url
* body
* requestHeaders - Key-Value array - [{"name": "","value": ""}]
* bodyFormData

#### Template

```json {2,5-15}
{  
    "actionType": "Rest",  
    "name": "",  
    "next": "",  
    "Method": "GET/POST/PUT/PATCH/DELETE",  
    "bodyMediaType": "Json/Raw/UrlEncodedFormData/MultipartFormData/File",  
    "url": "",  
    "body": "",  
    "requestHeaders": [  
        {  
            "name": "",  
            "value": ""  
        }  
    ],  
    "bodyFormData": []  
}
```

#### Template Description

* actionType – The actionType must be Rest for Rest actions
* name - The name of the action
* next - The action that will be triggered after the current action been completed
* Method - Should be set according to the method to be applied
* url - The URL to be called
* bodyMediaType - Allows you to manage the Request headers and body.
  * Please see on the tabs below the bodyMediaType available:

<Tabs groupId="rest-actions"
defaultValue="json"
values={[
{label: 'JSON', value: 'json'},
{label: 'Raw', value: 'raw'},
{label: 'Url Encoded Form Data', value: 'urlencodedformdata'},
{label: 'File', value: 'file'}
]
}>


<TabItem value="json">
By setting the bodyMediaType as Json, it will automatically assume:

* Body Media Type - "Json"
* Content-Type - Set by default as "application/json"
* Body - The request body should be set in JSON format and escaped

```json
{
  "bodyMediaType": "Json",
  "body": "{\"parameter\":\"value\"}"
}
```

</TabItem>
<TabItem value="raw">
By setting the bodyMediaType as Raw:

* Body Media Type - "Raw"
* Content-Type - It is required to set it manually by passing the requestHeaders
* Request Headers - Use this field to manually set the request headers

```json {2}
{
    "bodyMediaType":"Raw",  
    "body":"{\"parameter\":\"value\"}",  
    "requestHeaders": [  
        {  
            "name":"Content-Type",   
            "value":"application/json-patch+json"  
        },   
        {  
            "name":"Authorization",  
            "value":"Bearer {Token}"  
        }  
    ]
}
```

</TabItem>
<TabItem value="urlencodedformdata">

By setting the bodyMediaType as UrlEncodedFormData:

* Content-Type - Set by default as "application/x-www-form-urlencoded"
* bodyFormData - The request body should be sent in the bodyFormData parameter as an Array of Key -
  Values: [{"key":"value"}]

```json {2}
{
    "bodyMediaType":"UrlEncodedFormData",  
    "bodyFormData": [  
        {  
            "key": "grant_type",  
            "value": "client_credentials"  
        },  
        {  
            "key": "client_id",  
            "value": "fb3ccf6c-b672-45af-8389-51bfba06"  
        },  
        {  
            "key": "client_secret",  
            "value": "5eKItuYeV3iZ1mxY8ktNWYY1bbKOgTO+POIR123/g="  
        }  
    ]
}
```

</TabItem>
<TabItem value="file">

By setting the bodyMediaType as File:

* The file action allows you to add to the Content a StreamContent
* The file's content will be sent as a sequence of bytes
* Body - The body parameter must contain the file content
* You can combine the Download action to obtain a file content from any URL

```json {2}
{
    "actionType": "Download",
    "name": "DownloadFile",
    "next": "UploadFile",
    "url": "{{['GetProjectFile']$.Content.Uri}}"
},
{
    "actionType": "Rest",
    "name": "UploadFile",
    "next": "Exit",
    "Method": "Post",
    "url": "https://skillsworkflow.com/sites/Coca-Cola/_api/UploadFile?name=Summer Campaign 2019",
    "body": "{{['DownloadFile']$.Content}}",
    "bodyMediaType": "File",
    "RequestHeaders": [
        {
            "name": "Accept",
            "value": "application/json; odata=verbose"
        },
        {
            "name": "Authorization",
            "value": "Bearer {Token}"
        }
    ]
}
```

</TabItem>

</Tabs>

---

## Sftp

There are actions available to do actions related to SFTP:

* SftpListFiles - Returns a list of files
* SftpDownload - Download files
* SftpUpload - Upload files
* SftpMoveTo - Move files between folders

#### Configuration

There are configurations that need to be applied in the automation workflow in order to perform the actions properly.

Please check the template description to know which parameters must be sent for each action.

#### Template

```json {2,5-14}
{  
   "actionType": "SftpListFiles" or "SftpDownload" or"SftpUpload" or "SftpMoveTo",  
   "name": "SftpListFiles",  
   "next": "Exit",  
   "ftpHostIp": "sftp.skillsworkflow.com",  
   "ftpUsername": "SkillsWorkflow",  
   "ftpPassword": "*",
   "ftpPrivateKeyFile": "PrivateKeyFile"
   "ftpPath":"",  
   "ftpToPath":"",  
   "filePath": "",  
   "fileNameContains": "",  
   "fileNameEndsWith": "",  
   "fileName": "",  
   "fileType": "Csv"  
 }
```

#### Template Description

<Tabs groupId="rest-actions"
defaultValue="sftplistfiles"
values={[
{
label: 'Sftp List Files', value: 'sftplistfiles'}, 
{label: 'Sftp Download', value: 'sftpdownload'}, 
{label: 'Sftp Upload', value: 'sftpupload'}, 
{label: 'Sftp Move To', value: 'sftpmoveto'}
]
}>

<TabItem value="sftplistfiles">

```json {2,5-10}
{  
   "actionType": "SftpListFiles",  
   "name": "SftpListFiles",  
   "next": "Loop",  
   "ftpHostIp": "sftp.skillsworkflow.com",  
   "ftpUsername": "SkillsWorkflow.Sftp.QA",  
   "ftpPassword": "",  
   "filePath": "/path",  
   "fileNameContains": "",  
   "fileNameEndsWith": ""  
}
```

* actionType – The action type must be one of the following: SftpListFiles,
* name - The name of the action
* next - The action that will be triggered after the current action been completed
* ftpHostIp – The host to be connected (ex: IP address or URL)
* ftpUsername – The username that will be used to connect to the SFTP
* ftpPassword – The user's password that will be used to connect to the SFTP
* ftpPath - It is used to identify the directory where the file should be searched
* fileNameContains – The action will filter the list of files by only showing the files that contain this parameter
  value
* fileNameEndsWith – The action will filter the list of files by only showing the files that end with this parameter
  value

</TabItem>

<TabItem value="sftpdownload">

```json {2,5-9}
{  
   "actionType": "SftpDownload",  
   "name": "SftpDownload",  
   "next": "ReadFileData",  
   "ftpHostIp": "sftp.skillsworkflow.com",  
   "ftpUsername": "SkillsWorkflow.Sftp.QA",  
   "ftpPassword": "",  
   "ftpPath": "/path",  
   "fileName": "{{['#ImportFile']}}"  
}
```

* actionType – The action type must be one of the following: SftpDownload,
* name - The name of the action
* next - The action that will be triggered after the current action been completed
* ftpHostIp – The host to be connected (ex: IP address or URL)
* ftpUsername – The username that will be used to connect to the SFTP
* ftpPassword – The user's password that will be used to connect to the SFTP
* ftpPath - It is used to identify in which directory is the file
* fileName - The file name that will be downloaded

</TabItem>

<TabItem value="sftpupload">

```json {2,5-10}
{  
   "actionType": "SftpUpload",  
   "name": "SftpUpload",  
   "next": "Exit",  
   "ftpHostIp": "sftp.skillsworkflow.com",  
   "ftpUsername": "SkillsWorkflow.Sftp.QA",  
   "ftpPassword": "",  
   "ftpPath": "/path",
   "filePath": "C:\\TempFolder\test.png",  
   "fileName": "NewFilename.csv"  
}
```

* actionType – The action type must be one of the following: SftpUpload
* name - The name of the action
* next - The action that will be triggered after the current action been completed
* ftpHostIp – The host to be connected (ex: IP address or URL)
* ftpUsername – The username that will be used to connect to the SFTP
* ftpPassword – The user's password that will be used to connect to the SFTP
* ftpPath - It is used to identify the directory where the file should be placed
* filePath

* It is used to identify the full path of the file in case it is in a temp folder (Download action result)
* The value must have the whole path including the filename and extension
    * e.g. "C:\Folder\test.png"
    * fileName - The name that the file will have when uploaded into the SFTP including the file extension

</TabItem>

<TabItem value="sftpmoveto">

```json {2,5-10} 
{  
   "actionType": "SftpMoveTo",  
   "name": "MoveSftpFileSuccess",  
   "next": "Exit",  
   "ftpHostIp": "sftp.skillsworkflow.com",  
   "ftpUsername": "SkillsWorkflow.Sftp.QA",  
   "ftpPassword": "*",  
   "ftpPath": "/path",  
   "ftpToPath": "/toPath",  
   "fileName": "{{['#ImportFile']}}"  
}
```

* actionType – The action type must be one of the following: SftpMoveTo
* name - The name of the action
* next - The action that will be triggered after the current action been completed
* ftpHostIp – The host to be connected (ex: IP address or URL)
* ftpUsername – The username that will be used to connect to the SFTP
* ftpPassword – The user's password that will be used to connect to the SFTP
* ftpPath - It is used to identify the origin directory
* ftpToPath - It is used to identify the destination directory where the file should be placed
* fileName- The file name that will be moved between paths

</TabItem>

</Tabs>

---

## E-mail

Email action allows you to send e-mails.

#### Configurations

To do so, it is required some parameters to be filled:

* body - The e-mail's body
* subject - The email's subject
* fromDisplayName - The display name that will appear on the sender
* toAddress - The email address to whom the email should be sent

#### Template

```json {2,5-8}
{
    "actionType": "Email",
    "name": "SendEmail",
    "next": "Exit",
    "body": "This body can also be HTML.",
    "subject": "This is the e-mail subject",
    "fromDisplayName": "Notification | Skills Workflow",
    "toAddress": "user@skillsworkflow.com",
    "attachment": "document.pdf"
}
```

#### Template Description

* actionType – The action type is Email
* name - The name of the action
* next - The action that will be triggered after the current action been completed
* body - The body that should be sent in the e-mail's body. It also supports HTML
* subject - The email's subject
* fromDisplayName - The display name that will appear on the sender
* toAddress - The email address to whom the email should be sent
* attachment - Name of the File to attach in email 

---

## Case

Case action works as a validator.

It allows you to choose the path to follow according to a comparison of values.

#### Configuration

There are fields required to be filled to have this action working properly:

* actionType - Case
* test - The value that will be evaluated
* nextActions - The next actions include the value to be compared, and the path forward (action name) if the values that
  are compared are the same

  * Default - The default indicates the path forward if none of the actions has a match

#### Template

```json {2,4-16}
{
    "actionType": "Case",
    "name": "ExistsGetSharepointSiteUrl",
    "test": "{{['PreviousActionName']$.field}}",
    "nextActions": [
        {
            "default": false,
            "value": "200",
            "name": "GetConfigFile"
        },
        {
            "default": true,
            "value": "",
            "name": "Exit"
        }
    ]
}
```

#### Template Description

* actionType - The action type is Case
* name - The action name is custom
* test - The value that will be evaluated. Usually, it is the result/value of a previous action
* nextActions - It is possible to have more than 2 nextAction to evaluate the test
  * default - True/false field and it is mandatory to have one nextAction with the default set as true
  * value - The value that will be compared against the value that is being in the test field
  * name - The name of the action to be triggered

---

## Csv

The CreateCsv action allows you to export data as a CSV file.

To do so, it is required 2 parameters to be filled:

* Data
* DataColumns

#### Configuration

To configure this action, there are parameters that can be set:

* Data  
  This field should be populated with a data array  
  "Data" field usually comes from the previous action result

  * i.e. the Automation Workflow has an action to get the data from the Execute Global Query

* DataColumns  
  This field should contain a list of Headers to be considered from the action with the data  
  This field works as a filter to select which columns should be populated into the .CSV file
* Delimiter  
  The delimiter that will be used to separate the data and dataColumns
* HasHeaderRecord  
  True/false field to make the header appear on the first row when exporting the .CSV
* Quote  
  If necessary, you can set the quote that should be used to split the columns values

#### Template

```json {17,21-42}
[
    {
        "actionType": "Start",
        "name": "Starting",
        "next": "GetExpenseFileData"
    },
    {
        "actionType": "Rest",
        "name": "GetExpenseFileData",
        "next": "CreateCsv",
        "Method": "POST",
        "url": "https://apiv2-demo-dev-we.skillsworkflow.com/api/analytics/globalQuery/Expense - Export/execute",
        "body": "{}",
        "bodyMediaType": "Json"
    },
    {
        "actionType": "CreateCsv",
        "name": "CreateCsv",
        "next": "SendExpenseFile",
        "hasHeaderRecord": false,
        "delimiter": ",",
        "quote": "\"",
        "data": "{{['GetExpenseFileData'].Content.Data}}",
        "dataColumns": [
            "CompanyCode",
            "SentDate",
            "SentTime",
            "ExpenseSheetEmission",
            "Employee",
            "CostCenter",
            "CPF",
            "TotalValue",
            "TotalCashAdvance",
            "Filial",
            "Number",
            "ExpenseDate",
            "Client",
            "Job",
            "Motive",
            "ValueWithVat",
            "EncryptedString"
        ]
    },
    {
        "actionType": "Rest",
        "name": "SendExpenseFile",
        "next": "Exit",
        "Method": "Post",
        "url": "https://e09905cd.ngrok.io/WS_DataTransfer.asmx?wsdl",
        "body": "<soap:Envelope xmlns:soap=\"http://www.w3.org/2003/05/soap-envelope\" xmlns:tem=\"https://tempuri.org/\"><soap:Header/><soap:Body><tem:CreateNewTicket><!--Optional:--><tem:Params> {\"IdCompania\":\"4\", \"IDCategora\":\"6\", \"IDSubcategoria\":\"143\",\"Descripcion\":\"Skills Workflow test3\", \"solicitanteEmail\":\"bruno.moscao@wmccann.com\"}</tem:Params><!--Optional:--><tem:adjuntos>[{\"nombre\":\"teste.xlsx\", \"contenido\":\"{{['CreateCsv']$|ToBase64}}\"}]</tem:adjuntos></tem:CreateNewTicket></soap:Body></soap:Envelope>",
        "bodyMediaType": "Raw",
        "requestHeaders": [
            {
                "name": "Content-Type",
                "value": "text/xml"
            }
        ]
    },
    {
        "actionType": "Result",
        "name": "Exit",
        "httpResponse": {
            "statusCode": 200,
            "headers": {},
            "body": "{{['SendExpenseFile']}}"
        }
    }
]
```

#### Template Description

* actionType - The action type is CreateCsv
* name - The action name is custom
* next - The next action
* hasHeaderRecord - The field to indicate if when exporting the headers should be included
* data - The data in JSON to be considered to be exported
* dataColumns - The columns that should be exported
* delimiter - The columns delimiter e.g. "," , "\t" , ";", etc
* quote - The value of the column will be within the character set in the quote e.g. "\"" to make the column values
  between "
  
---

## Loop

The Loop action allows you to trigger a Sub-Workflow.

To do so, it is required 2 parameters to be filled:

* body
* subWorkflow

#### Configuration

To configure this action, there are parameters that can be set:

* body  
  This field is at the Action level and must be populated with the data that should be used in the subWorkflow
* subWorkflows  
  This field is at the Automation Workflow level and can be accessed from any Loop action  
  subWorkflows are like the principal automation workflow, where it is required to have:
  * Start action
  * Result action
* When the subWorkflows ends, the next action set up in the Loop action will be triggered

#### Template

```json {2,27,30-31,56-85}
{
    "name": "ImportUsers",
    "actions": [
        {
            "actionType": "Start",
            "name": "Starting",
            "next": "SftpDownload"
        },
        {
            "actionType": "SftpDownload",
            "name": "SftpDownload",
            "next": "ReadFileData",
            "ftpHostIp": "sftp.skillsworkflow.com",
            "ftpUsername": "*",
            "ftpPassword": "",
            "filePath": "/Users",
            "fileName": "Users.csv",
            "fileType": "Csv"
        },
        {
            "actionType": "ReadFileData",
            "name": "ReadFileData",
            "next": "LoopFileData",
            "fileName": "{{['SftpDownload']}}"
        },
        {
            "actionType": "Loop",
            "name": "LoopFileData",
            "next": "MoveSftpFileSuccess",
            "body": "{{['ReadFileData']}}",
            "subWorkflow": "ImportFileData"
        },
        {
            "actionType": "SftpMoveTo",
            "name": "MoveSftpFileSuccess",
            "next": "ExitSftpSucess",
            "ftpHostIp": "sftp.skillsworkflow.com",
            "ftpUsername": "",
            "ftpPassword": "*",
            "filePath": "/Users",
            "toFilePath": "/Users/Success",
            "fileName": "{{['#ImportFile']}}",
            "fileType": "Csv",
            "hasHeaderRecord": false
        },
        {
            "actionType": "Result",
            "name": "ExitSftpSucess",
            "httpResponse": {
                "statusCode": 200,
                "headers": {},
                "body": "File moved to Success folder."
            }
        }
    ],
    "subWorkflow": [
        {
            "name": "ImportFileData",
            "actions": [
                {
                    "actionType": "Start",
                    "name": "Starting",
                    "next": "ImportUser"
                },
                {
                    "actionType": "Rest",
                    "name": "ImportUser",
                    "next": "CheckUserCreated",
                    "Method": "Post",
                    "url": "https://integration-api-skills-dev-we.azurewebsites.net/api/users",
                    "body": "{\"userName\":\"{{['#ImportFileData'].username}}\",\"name\":\"{{['#ImportFileData'].Name}}\",\"externalId\":\"{{['#ImportFileData'].externalId}}\",\"companyCode\":\"{{['#ImportFileData'].CompanyCode}}\",\"departmentExternalId\":\"{{['#ImportFileData'].departmentid}}\",\"mail\":\"{{['#ImportFileData'].email}}\",\"isActive\":true,\"hireDate\":\"{{['#ImportFileData'].hiredate}}\",\"ssoUserName\":\"{{['#ImportFileData'].ssoUsername}}\",\"ssoUserNameUpdatable\":true,\"expirationDate\":\"{{['#ImportFileData'].expirationDate}}\",\"requiredWeeklyHours\":\"{{['#ImportFileData'].weeklyRequiredHours}}\",\"externalNumberUpdatable\":true,\"externalNumber\":\"{{['#ImportFileData'].externalNumber}}\",\"phone\":\"{{['#ImportFileData'].workphone}}\",\"isActive\":\"{{['#ImportFileData'].isActive}}\"}",
                    "bodyMediaType": "Json"
                },
                {
                    "actionType": "Result",
                    "name": "ExitUserNotCreated",
                    "httpResponse": {
                        "statusCode": 200,
                        "headers": {},
                        "body": "User {{['ImportUser'].Content.userName}} imported.."
                    }
                }
            ]
        }
    ]
}
```

#### Template Description

* actionType - The action type is Loop
* name - The action name is custom
* next - The next action to be executed after the subWorkflow execution reach its Result action
* body - The data to be available in the Loop action
* subWorkflow - The set of actions (e.g. import a list of files) to be performed

## Download

Download action allows you to download the content of a file from a specific URL.

#### Configurations

To do so it is required a parameter to be filled:

* url - The URL to download the file

#### Template

```json {3,5}
{   
    "actionType": "Download",  
    "name": "DownloadFile",  
    "next": "UploadFile",  
    "url": "{{['GetProjectFile']$.Content.Uri}}"  
}
```

#### Template Description

* actionType – The action type is Download
* name - The name of the action
* next - The action that will be triggered after the current action been completed
* url - The URL to download the file

## Map

Map action allows you to Map previous actions Result to a property List of key/values.

#### Configuration
To do so it is required a parameter to be filled:

* values - The mapped values will be available on the Map action result (Content)

#### Template

```json {3,5-8}
{  
   "actionType": "Map",  
   "name": "Map",  
   "next": "Exit",  
   "values": {
       "SubJobs":"{{['GetCompanies']$.Content[:1].SubJobs | ToJson}}",
       "Tasks":"{{['GetCompanies']$.Content[:1].Tasks | ToJson}}"
   }
 }
```

## AzureAdAuthentication

AzureAdAuthentication action allows you to obtain an Authentication Token from the Azure Active Directory 
using Microsoft Graph API.

#### Configuration

The Azure Active Directory permissions assigned to the token are defined on the Azure Active Diretory application.

There are configurations that need to be applied in the automation workflow in order to perform the actions properly.

Please check the template description to know which parameters must be sent for each action.

#### Template

```json {3,5-7}
{  
   "actionType": "AzureAdAuthentication",  
   "name": "GetAzureAdToken",  
   "next": "Exit",  
   "tenantId": "cdda9984-9095-443c-b0bf-131c1e6bdc76",  
   "clientId": "aad39603-3954-4bf7-8128-b41f535ff211",  
   "clientSecret": "*",   
 }
```

#### Template Description

* actionType – The action type is AzureAdAuthentication
* name - The name of the action
* next - The action that will be triggered after the current action been completed
* tenantId - Microsoft Active Directory Tenant Id
* clientId - Microsoft App Registration Id In Azure AD
* clientSecret - Microsoft App Registration Secret


## CreatPdfFromDocument

CreatPdfFromDocument action allows you to download a pdf from a existing document using a pre-existing layout

#### Configuration

To do so it is required a parameter to be filled:

* documentType - The type of the document to create a Pdf
* documentId - The id of the document
* layoutId - The Id of the layout to use to create Pdf


#### Template

```json {3,5-7}
{
    "actionType": "CreatePdfFromDocument",
    "name": "GetPdfFromDocument",
    "next": "SendEmail",
    "documentType":"Expense",
    "documentId":"8b0412b4-37bc-47c9-9269-fa570f1f1f60",
    "layoutId":"20"
}
```

#### Template Description

* actionType – The action type is CreatePdfFromDocument
* name - The name of the action
* next - The action that will be triggered after the current action been completed
* documentType - Type of Document. ex: "Expense", "Project", "Deliverable"
* documentId - The Id of the desired Document
* layoutId - The layout id used to create pdf

