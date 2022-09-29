---
id: introduction 
title: Introduction
sidebar_label: Introduction
sidebar_position: 0
---

import Tabs from '@theme/Tabs'; import TabItem from '@theme/TabItem';

## Cause

There was a need to:

* Exchange data between Skills Workflow and any other platforms
* Automate internally tasks in the system

---

## Technology

Automation Workflows is a technology that allows you to create actions:

* Rests API calls
* SFTP connection to download, upload and move files
* Convert data into CSV files
* Send e-mails with actions results
* Logical actions
* HTTP response for the automation workflow result

---

## Configurations

An Automation Workflow is made of actions.

* There are two actions that must exist and be properly configured in order to save an Automation Workflow successfully
    * Start
    * Result

Everytime an action is executed, it will produce a result, made available in the action's content.

It is possible to access an action result by invocating its "Content".

To invoke the action content use the following statement: {{['actionName']}}

* It can be evaluated using JsonPath syntax

Please see the example below to see  access to the action GetProjectFile and get the Uri:

```json title="Accessing GetProjectFile action's content to use the Uri"
{   
    "actionType": "Download",  
    "name": "DownloadFile",  
    "next": "UploadFile",  
    "url": "{{['GetProjectFile']$.Content.Uri}}"  
}
```
## Parameters

### {{['#HttpRequest']}} 
Full HttpRequest that triggered the Automation Workflow.

```json title="Full Http Request Example"
{
  "Scheme": "https",
  "Host": "integrationworkflow-skills-dev-we.azurewebsites.net",
  "Path": "/api/tenants/<tenantId>/integration-workflows/<AutomationId>/execute",
  "Method": "POST",
  "Query": {
    "TenantName": [
      "playground-dev"
    ]
  },
  "Headers": {
    "Accept": [
      "application/json"
      ]
  },
  "Body": {
    "parameter": "value"
  }
}
```
 

---

## Converters

It is possible to convert values in order to be able to export files (convert to base 64) or just to encode the URL.

To use these converters you will need to add a Pipe | after the field name.

* ToBase64 - {{['CreateCsv']$ | ToBase64}}
* FromBase64 - {{['CreateCsv']$ | ToBase64}}
* UrlEncode - {{['GetProjectFile']$.Content.Url | UrlEncode}}
* ToJsonString - {{['GetProjectFile']$.Content | ToJsonString}}
* ToDateUtc - {{['GetProjectFile']$.Content.CreatedOn | ToDateUtc}}
* ToJson - {{['CreateCsv']$ | ToJson}}
* ToJsonString - {{['CreateCsv']$ | ToJsonString}}
* FromUnixTimeSeconds - {{['CreateCsv']$ | FromUnixTimeSeconds}}
* IsNullOrEmpty - {{['CreateCsv']$ | IsNullOrEmpty}}

---

## Preprocessors

Preprocessors are used to apply transformations on part of a expression.

* #eval(< expression >) - Pre-evaluates an expression and replaces the tag with it's value.
  * Can be used in any part of the expression.
  ``` json title="Examples"
  {
    "example1": "{{['#eval(['MapCustomDatabaseForm'].Name)'].Content}}",
    "example2": "{{['RecordsList'].Content..#eval(['MapCustomDatabaseForm'].Id)}}",
    "example3": "{{['RecordsList'].Content..#eval(['MapCustomDatabaseForm'].name).#eval(['MapCustomDatabaseForm'].Id)}}"
  }
  ```

## Templates

Some common used code snipets

``` json title="SubWorkflow Template"
{
   "name":"CreateProjectIfNotExistsSubWorkflow",
   "actions":[
      {
          "actionType": "Start",
          "name": "Starting",
          "next": "GetJobBrief"
      },
      {
          "actionType": "Result",
          "name": "Exit",
          "httpResponse": {
              "statusCode": 200,
              "headers": {
                  "content-type": "application/json"
              },
              "body": ""
          }
      }
   ]
 }
```





