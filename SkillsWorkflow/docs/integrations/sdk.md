---
id:  sdk
title: SDK Skills Workflow
sidebar_label: SDK Skills Worklfow
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Cause

There was a need to have a set of tools to be used on the system.

This SDK can be used anywhere on the system, but it is mostly used on Dashboards.

## Technology

Skills Workflow SDK - Software Development Kit - is a technology that allows you to use a set of methods developed to easily manage the system:

- preview
- genericPreview
- genericNew
- export - allows you to export data to any format
- setAttribute - allows you to set an attribute to an element
- setRAG - allows you to set an element as Red, Amber or Green according to its value
- setDashboardFilter - allows you to set a filter on a Dashboard
- setComponentProperty
- getComponentProperty 
- getMyCompanies - returns the companies that the user has access
- getMyClients - returns the clients that the user has access 
- showImage - returns the image URL for clients, users
- executeAPI - allows you to call the API endpoints
- setDashboardFilter - Adds a filter condition to the dashboard
- AzureDevops - Has available methods to interact with Microsoft's Azure DevOps


## Configurations

You will be able to invoke the SDK using the namespace:

- Skillsworkflow
- SW 

## Tools

This section will describe the tools available on the SDK:

<Tabs
  groupId="actions"
  defaultValue="preview"
  values={[
    {label: 'preview', value: 'preview'},
    {label: 'genericPreview', value: 'genericpreview'},
    {label: 'genericNew', value: 'genericnew'},
    {label: 'export', value: 'export'},
    {label: 'setAttribute', value: 'setattribute'},
    {label: 'setRAG', value: 'setrag'},
    {label: 'setDashboardFilter', value: 'setdashboardfilter'},
    {label: 'componentProperty', value: 'componentproperty'},
    {label: 'getMyCompanies', value: 'getmycompanies'},
    {label: 'getMyClients', value: 'getmyclients'},
    {label: 'showImage', value: 'showimage'},
    {label: 'executeAPI', value: 'executeapi'},
    {label: 'AzureDevops', value: 'azuredevops'},
  ]
}>

<TabItem value="preview">

```
This documentation is still under construction

```

</TabItem>

<TabItem value="genericpreview">

```
This documentation is still under construction

```

</TabItem>

<TabItem value="genericnew">

```
This documentation is still under construction

```

</TabItem>

<TabItem value="export">

```
This documentation is still under construction

```

</TabItem>

<TabItem value="setattritube">

## Method

setAttribute tool allows setting a Class or Style to an element. 

## Syntax

Please see below how to use this tool.

- setAttribute(element: any, text: string, attribute: string = "", attributeValue: string = "", createContainer: boolean = true) 

## Example

```
SW.setAttribute(e, null,'style', 'display: flex; align-items: baseline', false);
SW.setAttribute(e, 'Hello', 'style', 'background-color:red; color:white', true)
SW.setAttribute(e, null, 'class', 'skillsSquare', false)

```

</TabItem>

<TabItem value="setrag">

## Method

setRAG tool allows setting conditions to set the element color as Red, Ambar or Green.


## Syntax

Please see below how to use this method.

- setRAG(element: any, value: string, condition1: boolean, condition2: boolean, condition3: boolean, createContainer: boolean = true) 

## Example

```
SW.setRAG(e, value, i.value>15, (i.value>=5 && i.value<15), i.value<5);

```

## Arguments

Explaining the result from the template above:

- When i.value is greater than 15 then the color of element e will be Red
- When i.value is between 5 and 15 then the color of element e will be Ambar
- When i.value is less than 5 then the element e will be Green

</TabItem>

<TabItem value="setdashboardfilter">

## Method

The setDashboardFilter adds a filter condition to the dashboard.

## Syntax

When using this tool, you will have available:

- setDashboardFilter(name: string, value: string)

## Example

```
SW.setDashboardFilter('Department', 'Creative')

```

## Arguments

- name: string - The name of the filter
- value: string - The filter value to set

</TabItem>


<TabItem value="componentproperty">

```
This documentation is still under construction

```

</TabItem>

<TabItem value="getmycompanies">

```
This documentation is still under construction

```

</TabItem>

<TabItem value="getmyclients">

## Method

GetMyClients method gets the clients the user has access to.

## Syntax

Please see below how to use this method.

- getMyClients()

## Example

```
SW.clientMyClients().then(result => result)

```

## Arguments

This method takes no arguments. Implicitly, it uses the logged on user as the user that will be checked for accesses to the clients.

</TabItem>


<TabItem value="showimage">

## Method

- showImage method allows you to add the client's or user's image to the component.

## Syntax

Please see below how to use this method.

- showImage(element: any, entity: 'user' | 'client' | 'company', size?: 'small' | 'medium' | 'large', hasImage: boolean, name: string, id?: string)

## Example

```
SW.showImage(e, 'client', 'medium', i.data.hasImage, i.data.Client, i.data.ClientId)

```

## Arguments

- element: any - The Html element that will serve as the parent in the Dom for the image Html template.
- entity: string - Takes one of the following values: client | user | company.
- size: Size - To set the size of the image
  - small - 16x16 pixels
  - medium - 32x32 pixels
  - large - 64x64 pixels
- hasImage: boolean - When set to true, it shows the image of the entity. Otherwise, it shows the default representation for an entity with no image.
- name: string - Name of the entity to be shown in the tooltip and in the default representation when hasImage is false.
- id: string - To indicate the id of the entity to be shown.

</TabItem>

<TabItem value="executeapi">

## Method

The executeAPI tool allows you to execute any endpoint from API.

## Syntax

When using this method, you will have available:

- executeAPI(method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH", relativePath: string, params?: { [name: string]: string }, body?: object )

## Example

```
SW.executeAPI('GET','blockedloginrequests/userstoblock', null, null).then(result => result)

```

## Arguments

- method - GET / POST / PUT / DELETE / PATCH
- relativePath - The endpoint that should be called
- parameters - The parameters that should be added after the relativePath
- body - JSON that should be sent in the HTTP Request Body

</TabItem>

<TabItem value="azuredevops">

## Method

The AzureDevops tool allows you to interact with Microsoft's AzureDevops.

You can invoke the following methods:

- AzureDevOps.getAzureWorkItemByDocumentId

The AzureDevops.getAzureWorkItemByDocumentId  will return the details regarding the work item in Azure Devops, accordring to the work item number for the corresponding document.

## Syntax

When using this, you will have available:

- AzureDevOps.getAzureWorkItemByDocumentId(documentOid, documentTypeName, columnName, valueType, authorization, errorNotification)

## Example

```
SW.AzureDevOps.getAzureWorkItemByDocumentId('701cdcc5-7304-4b85-886f-8ab53b4118af', 'Deliverable', 'Work Item', '6', 'Basic AzureAuthKeyHere', false).then(x => alert(JSON.stringify(x)))

```

## Arguments

- documentOid - The documentId from where you want to get the userfield information
- documentTypeName - To obtain the document userfield value, you will need to pass the document type name
- columnName - To obtain the document userfield value, you will need to inform the name of the userfield to get the value
- valueType - The value type from the userfield
- authorization - The AzureDevops authorization
- errorNotification - When is setting as true throw a toast with the error message case there is an error while executing the method

</TabItem>

</Tabs>




