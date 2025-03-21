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

When this action is triggered, the payload will be loaded into the `"{{['#HttpRequest']$.Body}}"`.

#### Configurations

To configure this action, the fields required to be filled are:

* actionType - Set as "Start"
* name
* next

```json title="Template"
{  
    "actionType": "Start",  
    "name": "Starting",  
    "next": "GetJobBrief"  
},
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

```json title="Template"
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
},
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
* requestHeaders - Key-Value array - `[{"name": "","value": ""}]`
* bodyFormData
* IsApiCall - Default False
* EnsureSuccessStatusCode - Default False
* responseHeaders - Array - `["date","x-api-version"]`

```json title="Template"
{  
    "actionType": "Rest",  
    "name": "",  
    "next": "",  
    "Method": "GET/POST/PUT/PATCH/DELETE",  
    "bodyMediaType": "Json/Raw/UrlEncodedFormData/MultipartFormData/File",  
    "url": "",  
    "body": "",
    "isApiCall":true,
    "ensureSuccessStatusCode":false,
    "requestHeaders": [  
        {  
            "name": "",  
            "value": ""  
        }  
    ],  
    "bodyFormData": [],
    "responseHeaders":[]
},
```

#### Template Description

* actionType – The actionType must be Rest for Rest actions
* name - The name of the action
* next - The action that will be triggered after the current action been completed
* Method - Should be set according to the method to be applied
* url - The URL to be called
* isApiCall - If set, will append tenant Api Authority to request and add authentication Headers. Defaults to `true`
* ensureSuccessStatusCode - If set, ensures that the response is a success Status Code (200 - 299). If not will throw an error and stop execution. Defaults to `False`
* responseHeaders - If set, returns the response will bring the headers values for the keys defined.
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

```json title="JSON"
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

```json title="Raw"
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
},
```

</TabItem>
<TabItem value="urlencodedformdata">

By setting the bodyMediaType as UrlEncodedFormData:

* Content-Type - Set by default as "application/x-www-form-urlencoded"
* bodyFormData - The request body should be sent in the bodyFormData parameter as an Array of Key -
  Values: `[{"key":"value"}]`

```json title="Url Encoded FormData"
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
},
```

</TabItem>
<TabItem value="file">

By setting the bodyMediaType as File:

* The file action allows you to add to the Content a StreamContent
* The file's content will be sent as a sequence of bytes
* Body - The body parameter must contain the file content
* You can combine the Download action to obtain a file content from any URL

```json json title="File"
[
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
]
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

```json title="Template"
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
 },
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

```json title="Sftp List Files"
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
},
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

```json title="Sftp Download"
{  
   "actionType": "SftpDownload",  
   "name": "SftpDownload",  
   "next": "ReadFileData",  
   "ftpHostIp": "sftp.skillsworkflow.com",  
   "ftpUsername": "SkillsWorkflow.Sftp.QA",  
   "ftpPassword": "",  
   "ftpPath": "/path",  
   "fileName": "{{['#ImportFile']}}"  
},
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

```json title="Sftp Upload"
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
},
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

```json title="Sftp Move To"
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
},
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

```json title="Template"
{
    "actionType": "Email",
    "name": "SendEmail",
    "next": "Exit",
    "body": "This body can also be HTML.",
    "subject": "This is the e-mail subject",
    "fromDisplayName": "Notification | Skills Workflow",
    "toAddress": "user@skillsworkflow.com",
    "attachments": ["document.pdf"]
},
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

```json title="Template"
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
},
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

```json title="Template"
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

```json title="Template"
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

```json title="Template"
{   
    "actionType": "Download",  
    "name": "DownloadFile",  
    "next": "UploadFile",  
    "url": "{{['GetProjectFile']$.Content.Uri}}"  
},
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

```json title="Template"
{  
  "actionType": "Map",  
  "name": "Map",  
  "next": "Exit",  
  "values": {
     "SubJobs":"{{['GetCompanies']$.Content[:1].SubJobs | ToJson}}",
     "Tasks":"{{['GetCompanies']$.Content[:1].Tasks | ToJson}}"
  }
},
```

## Merge

Merge action allows you to Merge a Json Result from a previous to a property List of key/values. This Action allows to update properties from the Json Body.

#### Configuration
To do so it is required a parameter to be filled:

* Payload - A Json Body
* values - The mapped values will be available on the Merge action result (Content)

```json title="Template"
{  
   "actionType": "Merge",  
   "name": "Merge",  
   "next": "Exit",
   "payload": "{\"User\": \"string\",\"DocumentType\": \"string\", \"DocumentOid\": \"string\", \"AssignmentType\": \"string\", \"Workload\": 0,  \"Priority\": 0}",
   "values": {
       "DocumentType":"{{['GetDocumentTypes']$.Content[:1].DocumentType | ToJson}}",
       "AssignmentType":"{{['GetAssignments']$.Content[:1].AssignmentType | ToJson}}"
   }
},
```

## AzureAdAuthentication

AzureAdAuthentication action allows you to obtain an Authentication Token from the Azure Active Directory 
for a specified Resource using Credentials.

#### Configuration

The Azure Active Directory permissions assigned to the token are defined on the Azure Active Diretory application.

There are configurations that need to be applied in the automation workflow in order to perform the actions properly.

Please check the template description to know which parameters must be sent for each action.

```json title="Template"
{  
   "actionType": "AzureAdAuthentication",  
   "name": "GetAzureAdToken",  
   "next": "Exit",  
   "tenantId": "cdda9984-9095-443c-b0bf-131c1e6bdc76",  
   "clientId": "aad39603-3954-4bf7-8128-b41f535ff211",  
   "clientSecret": "*",
   "resource": "https://graph.microsoft.com"   
 },
```

#### Template Description

* actionType – The action type is AzureAdAuthentication
* name - The name of the action
* next - The action that will be triggered after the current action been completed
* tenantId - Microsoft Active Directory Tenant Id
* clientId - Microsoft App Registration Id In Azure AD
* clientSecret - Microsoft App Registration Secret
* resource - The scope for authorization. Defaults to Microsoft Graph

## AzureAdCertificateAuthentication

AzureAdCertificateAuthentication action allows you to obtain an Authentication Token from the Azure Active Directory
for a specified Resource using a certificate.

#### Configuration

The Azure Active Directory permissions assigned to the token are defined on the Azure Active Diretory application.

There are configurations that need to be applied in the automation workflow in order to perform the actions properly.

Please check the template description to know which parameters must be sent for each action.

```json title="Template"
{  
   "actionType": "AzureAdAuthentication",  
   "name": "GetAzureAdToken",  
   "next": "Exit",  
   "tenantId": "cdda9984-9095-443c-b0bf-131c1e6bdc76",  
   "clientId": "aad39603-3954-4bf7-8128-b41f535ff211",  
   "CertificatePfx": "file.pfx",
   "CertificatePfxPassword": "MyfilePfxPassword",
   "resource": "https://graph.microsoft.com"   
 },
```

#### Template Description

* actionType – The action type is AzureAdAuthentication
* name - The name of the action
* next - The action that will be triggered after the current action been completed
* tenantId - Microsoft Active Directory Tenant Id
* clientId - Microsoft App Registration Id In Azure AD
* CertificatePfx - name of the pfx certificate to use.
* CertificatePfxPassword - password for the pfx certificate.
* resource - The scope for authorization. Defaults to Microsoft Graph

## CreatePdfFromDocument

CreatPdfFromDocument action allows you to download a pdf from a existing document using a pre-existing layout

#### Configuration

To do so it is required a parameter to be filled:

* documentType - The type of the document to create a Pdf
* documentId - The id of the document
* layoutId - The Id of the layout to use to create Pdf


```json title="Template"
{
    "actionType": "CreatePdfFromDocument",
    "name": "GetPdfFromDocument",
    "next": "SendEmail",
    "documentType":"Expense",
    "documentId":"8b0412b4-37bc-47c9-9269-fa570f1f1f60",
    "layoutId":"20"
},
```

#### Template Description

* actionType – The action type is CreatePdfFromDocument
* name - The name of the action
* next - The action that will be triggered after the current action been completed
* documentType - Type of Document. ex: "Expense", "Project", "Deliverable"
* documentId - The Id of the desired Document
* layoutId - The layout id used to create pdf

## ExecuteSubWorkflow

ExecuteSubWorkFlow action allows you to run a SubWorkflow with a specific Payload. This Action receives a Return action Result from the SubWorkflow.

#### Configuration

To configure this action, there are parameters that can be set:

* subWorkflows -  The SubWorkflow Name that is intended to run
* body(optional) - This field is at the Action level and can be populated with the data that should be used in the subWorkflow


```json title="Template"
{
    "actionType": "ExecuteSubWorkflow",
    "name": "RunSubWorkflow",
    "next": "Exit",
    "body": "{\"data\":\"value\"}",
    "subWorkflow": "MySubWorkflow"
},
```

#### Template Description

* actionType - The action type is ExecuteSubWorkflow
* name - The action name is custom
* next - The next action to be executed after the subWorkflow execution reach its Result action
* body - The data to be available in the ExecuteSubWorkflow action
* subWorkflow - The set of actions (e.g. import a list of files) to be performed

## EnqueueBackgroundWork

Enqueue action allows you to run a Workflow with a specific Payload. This Action invokes a Workflow and continues, it does not wait for the workflow to finish.

#### Configuration

To configure this action, there are parameters that can be set:

* targetWorkflowId -  The Workflow Id that is intended to run
* body(optional) - This field is at the Action level and can be populated with the data that should be used in the subWorkflow. The body must be JSON.
* sessionId (optional) - 60 Characters Maximum. When set will execute synchronously the workflow. In other words, it will wait for the previous to finish before starting the next one.
* ExecuteOnUtc (Optional) - DateTime (YYYY-MM-ddTHH:mm:ss) Schedules execution for specific date and time.
* Wait (Optional) - TimeSpan (dd:HH:mm:ss) Countdown Timer to execution.

```json title="Template"
{
    "actionType": "EnqueueBackgroundWork",
    "name": "RunWorkflow",
    "next": "Exit",
    "targetWorkflowId": "0243dbd0-8c4b-4af1-a8fc-a26ae2ffa3e6",
    "body": "{\"documentType\":\"Skill.Module.BusinessObjects.CommercialClient\"}",
    "sessionId": "MySessionId",
    "executeOnUtc":"2024-09-18T18:30",
    "wait":"00:00:30"
},
```

#### Template Description

* actionType - The action type is Enqueue
* name - The action name is custom
* next - The next action to be executed after the subWorkflow execution reach its Result action
* body - The data to be available in the ExecuteSubWorkflow action
* targetWorkflowId - The Id of the workflow Intended to run.
* sessionId - The Id of the session so that it can execute synchronously.

## XmlMap

XmlMap action allows you to parse a XML string to a property List of key/values using XPath. 

#### Configuration

To configure this action, there are some required parameters that need to be set:

* xmldata -  A Xml String representing a Xml Document
* Values - The mapped values will be available on the Map action result (Content)


```json title="Template"
{
    "actionType": "XmlMap",
    "name": "XmlMap",
    "next": "Exit",
    "xmldata": "",
    "namespaces": {
        "cac": "urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2",
        "cbc": "urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2",
        "ubl": "urn:oasis:names:specification:ubl:schema:xsd:Invoice-2"
    },
    "values": {
        "Id": "/cbc:ID",
        "AccountingSupplierName": "/cac:AccountingSupplierParty/cac:Party/cac:PartyName/cbc:Name",
        "StreetName": "/cac:AccountingSupplierParty/cac:Party/cac:PostalAddress/cbc:StreetName",
        "PostalCode": "/cac:AccountingCustomerParty/cac:Party/cac:PostalAddress/cbc:PostalZone",
        "Name":"/sender/name",
        "VatNumber":"/sender/id",
        "Address":"/sender/addressInformation/address",
        "City":"/sender/addressInformation/city" 
    }
},
```

#### Template Description

* actionType - The action type is Enqueue
* name - The action name is custom
* next - The next action to be executed after the subWorkflow execution reach its Result action
* namespaces - Xml Namespaces used on Xml Document
* xmlData -  A Xml String representing a Xml Document
* Values - The mapped values will be available on the Map action result (Content)

## CreateList

CreateList action allows to create a list (Array) of values stored as a parameter on the context.
This parameter can be used globally as it is stored in the parent context.

#### Configuration

To configure this action, there are some required parameters that need to be set:
* listName - The list name.
* listValues - The mapped values will be available on the context parameter.

Optional Parameters:
* distinct - Set to 'true' the list will only store distinct values (remove duplicates).
* ignoreEmpty - Set to 'true' the list will only store non empty values.


```json title="Template"
{
  "actionType": "CreateList",
  "name": "CreateList",
  "next": "UpdateList",
  "listName": "Mylist",
  "listValues": [
    "{{['#HttpRequest'].Host}}",
    "{{['#HttpRequest'].Body}}",
    "",
    "b",
    "b",
    "c"
  ],
  "distinct": true,
  "ignoreEmpty": true
},
```
#### Template Description

* actionType - The action type is Enqueue
* name - The action name is custom
* next - The next action to be executed after the subWorkflow execution reach its Result action

#### Usage

The list can be used calling the context parameter by name: `{{['MyList']}}`

## AddToList

AddToList action allows to update an existing list (Array) of values stored as a parameter on the context adding new values to the end.

#### Configuration

```json title="Template"
{
  "actionType": "AddToList",
  "name": "UpdateList",
  "next": "RemoveFromList",
  "listName": "Mylist",
  "listValues": [
    "{{['#HttpRequest'].Method}}",
    "",
    "e",
    "e"
  ],
  "distinct": true,
  "ignoreEmpty": true
},
```
#### Template Description

* actionType - The action type is Enqueue.
* name - The action name is custom.
* next - The next action to be executed after the subWorkflow execution reach its Result action.
* listName - The Name of the list.
* listValues - Mapped values to the list result.
* distinct - optional parameter to remove duplicates.
* ignoreValues - optional parameter to remove empty values.

## RemoveFromList

RemoveFromList action allows to remove values from an existing list (Array) of values stored as a parameter on the context.

#### Configuration

```json title="Template"
{
  "actionType": "removeFromList",
  "name": "RemoveFromList",
  "next": "Exit",
  "listName": "Mylist",
  "RemoveValues": [
    "{{['#HttpRequest'].Method}}",
    "b",
    "e"
  ]
},
```
#### Template Description

* actionType - The action type is Enqueue.
* name - The action name is custom.
* next - The next action to be executed after the subWorkflow execution reach its Result action.
* listName - The Name of the list.
* removeValues - Values to be removed from list result.


## SetParameter

SetParameter creates parameter on the context with the value as result (variable).
This parameter can be used globally as it is stored in the parent context.

#### Configuration

```json title="Template"
{
  "actionType": "SetParameter",
  "name": "MyParameter",
  "next": "Exit",
  "parameterName":"MyParameter",
  "value":"{{['#HttpRequest'].Host}}"
},
```
#### Template Description

* actionType - The action type is Enqueue
* name - The action name is custom
* next - The next action to be executed after the subWorkflow execution reach its Result action
* parameterName - The Name of the parameter.
* value - Value of the parameter.

#### Usage

The list can be used calling the context parameter by name: `{{['MyParameter']}}`

## MapFromObject

MapfromObject allows to Map form names to properties. Passing a object Template with the 
mapped values from body will generate a new json object similar to data but with the values 
mapped by name from body.

#### Configuration

To configure this action, there are some required parameters that need to be set:
* Data - Data Template with values as the body property names.
* Body - The body with the content.

```json title="Template"
{
    "actionType": "MapFromObject",
    "name": "MapFromObject",
    "next": "Exit",
    "data":"{\"name\":\"firstName\",\"years\":\"age\"}",
    "body":"{\"firstName\":\"John\",\"lastName\":\"Doe\",\"age\":\"30\"}"
},
```
#### Template Description

* actionType - The action type is Enqueue
* name - The action name is custom
* next - The next action to be executed after the subWorkflow execution reach its Result action
* data - The Template Data from witch to map property name
* body - The body payload with data to fetch

#### Usage

The result will be in Data format with the values replaced from Body:

```json title="Example"
{
  "name": "John",
  "years": "30" 
}
```

## ConfigurationKeys
ConfigurationKeys allows to retrieve a Skills Workflow Configuration Key and store the value as a parameter. 

#### Configuration

To configure this action, there is a required parameter that need to be set:
* value - Key name of the configuration key

```json title="Template"
{
  "actionType": "ConfigurationKeys",
    "name": "GetConfigurationKeys",
    "next": "Exit",
    "value":"MyServerConfiguration"
},
```

#### Template Description

* actionType - The action type is ConfigurationKeys
* name - The action name is custom
* next - The next action to be executed after the subWorkflow execution reach its Result action
* value - Key name of the configuration key

#### Usage

The result will be the configuration Keys value parameter:

```json title="Template"
{
    "TenantId": "d*******-3***-4***-a***-8***********",
    "ClientId": "3*******-1***-4***-8***-e***********",
    "ClientSecret": "y*******.f****~5*******.6**.n*****",
    "apiUrl": "h****://g*****.c**/S*************/M**********.g**"
},
```

## ConvertFromJsonDataTable
Allows to convert JSON between formats. It converts from the "DataTable" format to standard format.

#### Configuration

To configure this action, there is a required parameter that need to be set:
* columns - Array With Column Definition `[{"name":"Timestamp","type":"string"},{"name":"Timestamp","type":"datetime"}]`
* rows - Array With row values `["SkillsWorkflow","2023-05-02T00:00:00Z"]`

```json title="Template"
{
  "actionType": "ConvertFromJsonDataTable",
  "name": "ConvertFromJsonDatatable",
  "next": "Exit",
  "columns": "{{['GetAppInsightsData'].Content.tables[0].columns}}",
  "rows": "{{['GetAppInsightsData'].Content.tables[0].rows}}"
},
```

#### Template Description

* actionType - The action type is ConvertFromJsonDataTable
* name - The action name is custom
* next - The next action to be executed after the subWorkflow execution reach its Result action
* columns - Array With Column Definition
* rows - Array With row values

#### Usage
```json title="Column Definition Available Types"
["bool", "datetime", "dynamic", "guid", "int", "long", "real", "string", "decimal"]

```

The original JSON:

```json title="DataTable Json"
{
  "tables": [
    {
      "name": "PrimaryResult",
      "columns": [
        {
          "name": "Timestamp",
          "type": "datetime"
        },
        {
          "name": "Id",
          "type": "string"
        },
        {
          "name": "Tenant",
          "type": "string"
        },
        {
          "name": "WorkspaceId",
          "type": "string"
        },
        {
          "name": "Count",
          "type": "long"
        }
      ],
      "rows": [
        [
          "2023-05-02T00:00:00Z",
          "2023-05-02_Zas_1fabe874-e561-4b9e-86a5-4183234e0af6",
          "hogarth",
          "1fabe874-e561-4b9e-86a5-4183234e0af6",
          9
        ]
      ]
    }
  ]
}
```

The result will be the transformed JSON:

```json title="Standard Json"
{
  "Timestamp": "2023-05-02T00: 00: 00+00: 00",
  "Id": "2023-05-02_Zas_1fabe874-e561-4b9e-86a5-4183234e0af6",
  "Tenant": "Zas",
  "WorkspaceId": "1fabe874-e561-4b9e-86a5-4183234e0af6",
  "Count": 9
}
```

## OAuth2Authentication
Creates an OAuth2 Authentication based on Authorization Code Flow (defined in [OAuth 2.0 RFC 6749, section 4.1](https://tools.ietf.org/html/rfc6749#section-4.1)) 

<i> Because regular web apps are server-side apps where the source code is not publicly exposed, they can use the Authorization Code Flow, 
which exchanges an Authorization Code for a token. Your app must be server-side because during this exchange, you must also pass along your application's Client Secret, 
which must always be kept secure, and you will have to store it in your client. </i>

#### Configuration

To configure this action, there is a required parameter that need to be set:
* OAuthClientId - Client Id
* OAuthClientSecret - Client Password
* OAuthBaseUrl - Authorization Server Url
* OAuthScope - Application Filter to limit access
* OAuthCallbackUrl - Return Address defined by provider in Authorized redirect URIs 
* OAuthUseStateVerification - If set, enables CSRF attacks Verification - Defaults to `False`
* 
```json title="Template"
{
  "actionType": "OAuth2Authentication",
  "name": "GetToken",
  "next": "Exit",
  "oauthClientId": "MyClientId",
  "oauthClientSecret": "MyClientSecret",
  "oauthBaseUrl": "https://auth.Server/oauth",
  "oauthScope": "commercial",
  "oauthCallbackUrl": "http://127.0.0.1:4080/oauth/callback",
  "OauthUseStateVerification": true
},
```
#### Template Description

* actionType - The action type is OAuth2Authentication
* name - The action name is custom
* next - The next action to be executed after the subWorkflow execution reach its Result action
* oauthClientId - Client Id
* oauthClientSecret - Client Secret
* oauthBaseUrl - Auth Server base Url
* oauthScope - Auth Scope
* oauthCallbackUrl - Return Url
* OauthUseStateVerification - CSRF attacks Verification

#### Usage

The result will be the configuration Keys value parameter:

```json title="Example Result"
{
  "access_token": "c11e9a70ecfc6b9e2197ed42c4a3a68cc8e676ace0d4e28ae9e222fccd32456e",
  "expires_in": 14400,
  "refresh_token": "1160745-2655f33f8219b5b9f5fa50cabea4bade08d956d1485db3247bb323ca9951ea35",
  "token_type": "Bearer"
}
```

## JsonValidation
Validate Required fields on a specific json payload. A list of properties is verified for missing, null or empty.
In this case the action will return a list of errors and will exit on ExitOnError.

#### Configuration

To configure this action, there are required parameters that need to be set:
* payload 
* requiredProperties 
* next 
* nextOnError 

```json title="Template"
{
  "actionType": "ValidateJson",
  "name": "ValidateJson",
  "payload":"{{['Payload']}}",
  "requiredProperties": [
    "name",
    "company",
    ""
  ],
  "next":"Exit",
  "nextOnError":"ExitOnError"
},
```
#### Template Description

* payload - json payload to verify
* requiredProperties - List of property names to verify
* next - next Action in case everything is verified
* nextOnError - Next Action if any of the required properties is missing or is null


## ClearContext
ClearContext Action allows to remove unused Context created properties that are not really necessary anymore.
User can clear all properties or select a list of properties to be removed.

#### Configuration

To configure this action, there are required parameters that need to be set:
* listValues
* clearAll # optional

```json title="Template"
{
  "actionType": "ClearContext",
  "name": "ClearContext",
  "listValues": [
    "property",
    "property1"
  ],
  "clearAll": false,
  "next":"Exit",
},
```
#### Template Description

* actionType - The action type is ClearContext
* name - The action name is custom
* next - The next action to be executed
* listValues - List of properties to bem removed. #Optional
* clearAll - Flag to remove all properties #Defaults to false


## ExecuteIntegrationWorkflow
ExecuteIntegrationWorkflow action allows you to run a Workflow with a specific Payload. This Action invokes a Workflow and waits for the workflow to finish and returns the result.

#### Configuration

To configure this action, there are required parameters that need to be set:
* body # optional
* targetWorkflowId 

```json title="Template"
{
  "actionType": "ExecuteIntegrationWorkflow",
  "name": "ExecuteIntegrationWorkflow",
  "next": "Exit",
  "body": "{\"documentType\":\"Skill.Module.BusinessObjects.CommercialClient\"}",
  "targetWorkflowId": "152e8a13-ea4e-469d-be39-f8d4ad0dd919"
},
```
#### Template Description

* actionType - The action type is ExecuteIntegrationWorkflow
* name - The action name is custom
* next - The next action to be executed
* body - The data to be available in the ExecuteIntegrationWorkflow action
* targetWorkflowId - The Id of the workflow Intended to run.

## ApplyTemplate
ApplyTemplate template is a engine based on the Liquid template language. 
Liquid It's a secure template language that is also very accessible for non-programmer audiences.

>  [Liquid language Documentation](https://shopify.github.io/liquid/basics/introduction/)

#### Configuration

To configure this action, there are required parameters that need to be set:
* body 
* data

```json title="Template"
{
  "actionType": "ApplyTemplate",
  "name": "ApplyTemplate",
  "next": "Exit",
  "body": "{\"documentType\":\"Skill.Module.BusinessObjects.CommercialClient\"}",
  "data": "<p>Document Type: {{documentType}}</p>"
},
```
#### Template Description

* actionType - The action type is ApplyTemplate
* name - The action name is custom
* next - The next action to be executed
* body - The data to be available in the ApplyTemplate action
* data - The Template to Render.