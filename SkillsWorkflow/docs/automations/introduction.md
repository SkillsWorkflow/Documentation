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
* Split - {{['My/Text'] | Split('Separator Char')}}
---
### Arithmetic Operators
* AddDecimal(value) - {{['MyIntValue'] | AddDecimal(2)}}
* Sum - {{['ArrayOfValues']$ | Sum}}
* Min - {{['ArrayOfValues']$ | Min}}
* Max - {{['ArrayOfValues']$ | Max}}
* Avg - {{['ArrayOfValues']$ | Avg}}

### Date Operators
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

## Templates

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

## JSONPath expressions

JSONPath expressions always refer to a JSON structure and can apply transformations and filtering.

JSONPath expressions can use the dot–notation 
`$.store.book[0].title`
or the bracket–notation 
`$['store']['book'][0]['title']` 
for input path's. 
Internal or output path's will always be converted to the more general bracket–notation.


JSONPath allows the wildcard symbol `*` for member names and array indices. 
It borrows the descendant operator `..` from E4X and the array slice syntax proposal `[start : end : step]` from ECMASCRIPT 4.
Expressions of the underlying scripting language `(<expr>)` can be used as an alternative to explicit names or indices as in `$.store.book[(@.length-1)].title` using the symbol `@` for the current object.
Filter expressions are supported via the syntax `?(<boolean expr>)` as in `$.store.book[?(@.price < 10)].title` .

### Here is a complete overview:

| Syntax               | Description                                                                |
|----------------------|----------------------------------------------------------------------------|
| $                    | the root object/element                                                    |
| @                    | the current object/element                                                 |
| . or [ ]             | child operator                                                             |
| ..                   | recursive descent. JSONPath borrows this syntax from E4X.                  |
| *                    | wildcard. All objects/elements regardless their names.                     |
| [ ]                  | subscript operator. In JSON it is the native array operator.               |
| [ , ]                | Union operator. JSONPath allows alternate names or array indices as a set. |
| [start : end : step] | array slice operator borrowed from ES4.                                    |
| ?()                  | 	applies a filter (script) expression.                                     |
| ()	                  | script expression, using the underlying script engine.                     |



```json title="Json Example"
{
  "documents": {
    "client": [
      {
        "Id": "38ed55ac-cb45-4cbb-b89e-2f3cf480cb11",
        "Name": "Allbirds",
        "Code": "ABD",
        "HasContracts": false,
        "CommercialPaymentConditionId": "00000000-0000-0000-0000-000000000000",
        "FullTimeEmployeeTime": 1800.0,
        "FileSystemRootId": "7ba972ac-afaa-4c86-bb0c-9b564276a109"
      },
      {
        "Id": "3f826c2c-96c1-4d75-82d9-c29b4e50d4ef",
        "Name": "Amazon",
        "Code": "AMZ",
        "HasContracts": false,
        "CommercialPaymentConditionId": "00000000-0000-0000-0000-000000000000",
        "FullTimeEmployeeTime": 0.0,
        "FileSystemRootId": "1160f5d7-062a-4f78-a66b-e678a08052bb"
      },
      {
        "Id": "682823e1-0651-4e8d-a655-ab3f8bcc8f6f",
        "Name": "Americanas",
        "Code": "",
        "HasContracts": false,
        "CommercialPaymentConditionId": "00000000-0000-0000-0000-000000000000",
        "FullTimeEmployeeTime": 0.0,
        "FileSystemRootId": "e56023d9-56db-49c9-97fd-96635e7cb251"
      }
    ]
  }
}
```
### Expression Cheat Sheet:

| Syntax                                          | Result                                                        |
|-------------------------------------------------|---------------------------------------------------------------|
| $.documents.client[*].Name                      | the names of all clients in the documents                     |
| $..name                                         | all names                                                     |
| $.documents.*                                   | all things in documents, which are some clients.              |
| $.documents..code                               | the code of everything in the documents.                      |
| $..client[2]                                    | the third client                                              |
| $..client[(@.length-1)] or $..client[-1:]       | the last client in order.                                     |
| $..client[0,1] or $..client[:2]                 | the first two client                                          |
| $..client[?(@.code)]                            | filter all clients with code Name                             |
| $..client[?(@.FullTimeEmployeeTime>1800)]       | filter all clients with FullTimeEmployeeTime greater than 10  |
| $..client[?(@.Name=='Americanas')]              | filter all clients with name "Americanas"                     |  
| $..client[?(@.Name=='Amazon' && @.code ='AMZ')] | filter all clients with name "Amazon" and Code "AMZ"          |
| $..client[?(@.Name=='Amazon' \|\| @.code ='AMZ')] | filter all clients with name "Amazon" or Code "AMZ"           |
| $..*                                            | All members of JSON structure                                 |

> **note:** #eval() sintax can be included in in JsonPath Expressions ex:  
> `$..client[?(@.code=='#eval(#eval(NewDateUtc(Today) | AddDays(-1)))')`











