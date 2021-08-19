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

Please see the example below to see how to access to the action GetProjectFile and get the Uri:

```json {5} title="Accessing GetProjectFile action's content to use the Uri"
{   
    "actionType": "Download",  
    "name": "DownloadFile",  
    "next": "UploadFile",  
    "url": "{{['GetProjectFile']$.Content.Uri}}"  
}
```

It is also possible to access the full HttpRequest that triggered the Automation Workflow.

To do so, you must use the following statement: {{['#HttpRequest']}}

## Converters

It is possible to convert values in order to be able to export files (convert to base 64) or just to encode the URL.

To use these converters you will need to add a Pipe | after the field name.

* ToBase64 - {{['CreateCsv']$ | ToBase64}}
* UrlEncode - {{['GetProjectFile']$.Content.Url | UrlEncode}}
* ToJsonString - {{['GetProjectFile']$.Content | ToJsonString}}
* ToDateUtc - {{['GetProjectFile']$.Content.CreatedOn | ToDateUtc}}




