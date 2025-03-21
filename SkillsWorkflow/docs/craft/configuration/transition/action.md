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
- Select: choose the name of the action - **BlockDocuments**
- Options: write the name of the query
:::


## Change Documents Stage

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
            <td><code>DocumentTypeName</code></td>
            <td>String</td>
            <td>true</td>
            <td>The document type name: Estimate, Project, Deliverable...</td> 
        </tr>
	<tr className="selected">
            <td><code>DocumentId</code></td>
             <td>Uniqueidentifier</td>
            <td>true</td>
            <td>Id of the document</td> 
        </tr>
	<tr className="selected">
            <td><code>WorkflowStageId</code></td>
             <td>Uniqueidentifier</td>
            <td>true</td>
            <td>Id of the stage</td> 
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
            <td><code>DocumentTypeName</code></td>
            <td>String</td>
            <td>true</td>
            <td>The Name of the Document to be updated</td> 
        </tr>
        <tr className="selected">
            <td><code>DocumentId</code></td>
            <td>Uniqueidentifier</td>
            <td>true</td>
            <td>The Id of the document to be updated</td> 
        </tr>
        <tr className="selected">
            <td><code>WorkflowStageId</code></td>
            <td>Uniqueidentifier</td>
            <td>true</td>
            <td>The Workflow Stage Id to move the given document</td> 
        </tr>
    </tbody>
</table>

<h3>Example</h3>

<figure>

![img-box-shadow](/img/craft/configuration/action/changeDocumentStage.png)
</figure>

:::note
- Select: choose the name of the action - **ChangeDocumentsStage**
- Options: write the name of the query
:::

```sql title="Query to return the list of Deliverable children of a given Deliverable to be updated to Cancelled"
select	'Deliverable' as DocumentTypeName,
	sd.oid as DocumentId,
	ws.Oid as WorkflowStageId
from    Deliverable d, WorkflowState dws, Deliverable sd, Document doc, WorkflowState ws, WorkflowState sdws
where   d.Oid = @CurrentDocumentId
	and dws.Oid = d.WorkflowState
        and sd.Parent = d.Oid
	and sd.WorkflowState = sdws.Oid
	and sdws.Name not in ('Delivered', 'Completed', 'Cancelled')
	and doc.TypeName = 'Skill.Module.BusinessObjects.Deliverable'
        and ws.Document = doc.Oid
        and ws.Name = 'Cancelled'
```

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
            <td>The Id of the current user that triggers the action execution</td> 
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
            <td>The Assignment Type Id which the user will be added</td> 
        </tr>
    </tbody>
</table>

<h3>Example</h3>

<figure>

![img-box-shadow](/img/craft/configuration/action/assignTeam_example.png)
</figure>

:::note
- Select: choose the name of the action - **AssignTeam**
- Options: write the name of the query
:::

```sql title="Query to add the current user to the Executor team"
select  
        @CurrentUserId as UserId,
        t.oid as TeamId
from	Deliverable d, AssignmentType t
where	
        d.Oid = @CurrentDocumentId and
        t.Name = 'Executor'
```

## Custom Table Write

Adds or Updates entries in a Custom Table
<p>Returns the entries to add in the Table​</p>
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
- Select: choose the name of the action - **CustomTableWrite**
- Options: name of the custom table; name of the query
<!-- - The name of the columns in the custom table and in the query must be equal otherwise this action doesn't work. -->
:::

## UpdateFieldValues

When the transition is executed, userfields will be updated accordingly.

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
            <td><code>DocumentTypeName</code></td>
            <td>Uniqueidentifier</td>
            <td>true</td>
            <td>The Document Type Name to be updated</td> 
        </tr>
        <tr className="selected">
            <td><code>DocumentId</code></td>
            <td>Uniqueidentifier</td>
            <td>true</td>
            <td>The Id of the document to be updated</td> 
        </tr>
        <tr className="selected">
            <td><code>FieldName</code></td>
            <td>Uniqueidentifier</td>
            <td>true</td>
            <td>The userfield column name</td> 
        </tr>
        <tr className="selected">
            <td><code>Value</code></td>
            <td>string</td>
            <td>true</td>
            <td>The value to update the userfield</td> 
        </tr>
    </tbody>
</table>

<h3>Example</h3>

```sql title="Query to update the Version of a specific Deliverable"
select 'Deliverable' as DocumentTypeName,
		j.Oid as DocumentId,
		'PreviousVersion' as FieldName,
		[Version] as Value
from	Deliverable_UserFields j 
where	ProofID is null 
		and [Version] is not null
		and j.Oid = @CurrentDocumentId
		and charindex('.', [Version], 0) > 0
```
