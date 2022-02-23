---
id: transition
title: Transition
sidebar_label: Transition
---

On this page you will find how to create an action of the type Transition based in Data Source.

## 1. Block / Unblock

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
            <td><code>Document Id</code></td>
            <td>Uniqueidentifier</td>
            <td>true</td>
            <td>Id of the document (id do documento currente sobre o qual estamos a mudar o estado</td> 
        </tr>
    </tbody>
</table>

### Example


## 2. Change Documents Stage​

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
            <td><code>Document Id</code></td>
            <td>Uniqueidentifier</td>
            <td>true</td>
            <td>Id of the document</td> 
        </tr>
    </tbody>
</table>

### Example

## 3. Assign Team​

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

### Example

<figure>

![img-box-shadow](/img/craft/configuration/action/assignTeam_example.png)
</figure>

## 4. Create Tasks from Job Type

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
            <td><code>Document Id</code></td>
            <td>Uniqueidentifier</td>
            <td>true</td>
            <td>job Id</td> 
        </tr>
    </tbody>
</table>


### Example

:::note
- Only works for job
- The tasks are first created in draft, then passed to the stage defined in the query  
:::

## 5. Custom Table Write

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
            <td><code>Document Id</code></td>
            <td>Uniqueidentifier</td>
            <td>true</td>
            <td>Id of the document</td> 
        </tr>
    </tbody>
</table>

### Example

