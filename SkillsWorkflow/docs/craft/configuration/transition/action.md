---
id: action
title: Actions
sidebar_label: Actions
---

On this page you will find how to create an action of the type Transition based in Data Source.
## Block / Unblock

This action returns a list of documents that were blocked or unblocked accordingly with the rule of the query.

<table className="custom-table">
    <thead> 
        <tr>
            <th>Parameter</th>
            <th>Type</th>
            <th>Required</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr className="selected">
            <td><code>CurrentDocumentId</code></td>
            <td>Uniqueidentifier</td>
            <td>true</td>
            <td>Id of the document</td> 
        </tr>
    </tbody>
</table>

<h3>Example</h3>

<figure>

![img-box-shadow](/img/craft/configuration/action/blockDocuments_example.png)
</figure>

:::note
- Select: choose the name of the action
- Options: write the name of the query
:::


## Change Documents Stage​

Affects the Stage of the Documents listed.

<table className="custom-table">
    <thead> 
        <tr>
            <th>Parameter</th>
            <th>Type</th>
            <th>Required</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr className="selected">
            <td><code>CurrentDocumentId</code></td>
            <td>Uniqueidentifier</td>
            <td>true</td>
            <td>Id of the document</td> 
        </tr>
    </tbody>
</table>

<h3>Example</h3>

<figure>

![img-box-shadow](/img/craft/configuration/action/changeDocumentStage.png)
</figure>


## Assign Team​

When changing the stage of the document places Users in a set of Teams​.

<table className="custom-table">
    <thead> 
        <tr>
            <th>Parameter</th>
            <th>Type</th>
            <th>Required</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr className="selected">
            <td><code>Document Id</code></td>
            <td>Uniqueidentifier</td>
            <td>true</td>
            <td>Id of the document</td> 
        </tr>
    </tbody>
</table>

<h3>Example</h3>

<figure>

![img-box-shadow](/img/craft/configuration/action/assignTeam_example.png)
</figure>

## Create Tasks from Job Type

When the user change the stage of job, the job automatically generates tasks.
<table className="custom-table">
    <thead> 
        <tr>
            <th>Parameter</th>
            <th>Type</th>
            <th>Required</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr className="selected">
            <td><code>CurrentDocumentId</code></td>
            <td>Uniqueidentifier</td>
            <td>true</td>
            <td>job Id</td> 
        </tr>
    </tbody>
</table>


<h3>Example</h3>

:::note
- Only works for job
- The tasks are first created in draft, then passed to the stage defined in the query  
:::

## Custom Table Write

Adds or Updates entries in a Custom Table
<p>Returns the entries to added in the Table​</p>
<p>Useful to save Additional Information​</p>

<table className="custom-table">
    <thead> 
        <tr>
            <th>Parameter</th>
            <th>Type</th>
            <th>Required</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr className="selected">
            <td><code>CurrentDocumentId</code></td>
            <td>Uniqueidentifier</td>
            <td>true</td>
            <td>Id of the document</td> 
        </tr>
    </tbody>
</table>

<h3>Example</h3>

<figure>

![img-box-shadow](/img/craft/configuration/action/customTable_example.png)
</figure>

:::note
- Options: name of the custom table; name of the query
<!-- - The name of the columns in the custom table and in the query must be equal otherwise this action doesn't work. -->
:::

