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


## Assign Team

When changing the stage of the document places Users in a set of Teams.

Below are the parameters available to execute the query:
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
            <td>The Id of the document that is executing the action</td> 
        </tr>
        <tr className="selected">
            <td><code>CurrentUserId</code></td>
            <td>Uniqueidentifier</td>
            <td>false</td>
            <td>The Id of the current user that trigger the action execution</td> 
        </tr>
    </tbody>
</table>

The query result must return the following columns:
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
            <td><code>UserId</code></td>
            <td>Uniqueidentifier</td>
            <td>true</td>
            <td>The Id of the user to be added to the document</td> 
        </tr>
        <tr className="selected">
            <td><code>TeamId</code></td>
            <td>Uniqueidentifier</td>
            <td>true</td>
            <td>The Assigment Type Id which the user will be added</td> 
        </tr>
    </tbody>
</table>


<h3>Example</h3>

<figure>

![img-box-shadow](/img/craft/configuration/action/assignTeam_example.png)
</figure>

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

```sql
select  @CurrentUserId as UserId,
        t.oid as TeamId
from	Deliverable d, AssignmentType t
where	d.Oid = @CurrentDocumentId and
        t.Name = 'Executor'
```

:::note
- Options: name of the custom table; name of the query
<!-- - The name of the columns in the custom table and in the query must be equal otherwise this action doesn't work. -->
:::

