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
## Functions
Functions replace evaluated value with a function that runs a specific Task.
* {{NewGuid}} - Returns a new Guid
* {{NewDateUtc(value[Required])}} - returns a new Utc DateTime
  * value:
    * {{NewDateUtc(Now)}} -returns a new Utc DateTime with current time
    * {{NewDateUtc(Today)}} - returns a new Utc DateTime with time set to MidNight (00:00:00)
    * {{NewDateUtc(Yesterday)}} - returns a new Utc DateTime with time set to Yesterday's MidNight (00:00:00)
    * {{NewDateUtc(FirstDayOfYear)}} - returns a new Utc DateTime with time set to new Years Day at MidNight (00:00:00)
    * {{NewDateUtc(LastDayOfYear)}} - returns a new Utc DateTime with time set to last day of the current Year at MidNight (00:00:00)

---
## Pipe Functions
Pipe Functions enable transformations on evaluated values using '|' modifier after the value and a specific Pipe Function.
Pipe Functions support arguments between parentheses 
### Converters
* ToBase64 - {{['CreateCsv']$ | ToBase64}}
* FromBase64 - {{['CreateCsv']$ | ToBase64}}
* UrlEncode - {{['GetProjectFile']$.Content.Url | UrlEncode}}
* ToJsonString - {{['GetProjectFile']$.Content | ToJsonString}}
* ToDateUtc - {{['GetProjectFile']$.Content.CreatedOn | ToDateUtc}}
* ToJson - {{['CreateCsv']$ | ToJson}}
* ToJsonString - {{['CreateCsv']$ | ToJsonString}}
* FromUnixTimeSeconds - {{['CreateCsv']$ | FromUnixTimeSeconds}}
* FromUnixTimeMilliSeconds - {{['CreateCsv']$ | FromUnixTimeMilliSeconds}}
---
### Boolean Operators
* IsNullOrEmpty - {{['CreateCsv']$ | IsNullOrEmpty}}
* Contains - {{['MyText'] | Contains('Text to check if exists')}}
* Join - {{['MyText'] | Join('Text to append')}}
---
### Arithmetic And Date Operators
* AddDecimal(value) - {{['MyIntValue'] | AddDecimal(2)}}
* AddMonths(value) - {{['StartDate'] | AddMonths(2)}}
* AddDays(value) - {{['StartDate'] | AddDays(-1)}}
* AddHours(value) - {{['StartDate'] | AddHours(12)}}
* AddMinutes(value) - {{['StartDate'] | AddMinutes(2)}}
### String Formatting
* RemoveLeading('value') - {{['MyText'] | RemoveLeading('Text To Remove from start')}}
* RemoveTrailing('value') - {{['MyText'] | RemoveTrailing('Text To Remove from End')}}
* Trim - {{['MyText'] | Trim}}

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

# Templates

Some common used code snipets

``` json title="SubWorkflow Template"
{
   "name":"CreateProjectIfNotExistsSubWorkflow",
   "actions":[
      {
          "actionType": "Start",
          "name": "Start",
          "next": "Exit"
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





