---
id: team
title: Query
sidebar_label: Query
---

On this page you will find how to create an action of the type Team based in Data Source.

## Query

Specifies which Users to show in each Team.
<p>Includes Department and Typology.</p>
<p>Placed as Data Source in the Team.</p>



### Available filters

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
            <td><code>@AssignmentTypeld</code></td>
             <td>Uniqueidentifier</td>
            <td>false</td>
            <td> Id of the assignment type </td>
        </tr>
         <tr className="selected">
            <td><code>@DocumentOid</code></td>
             <td>Uniqueidentifier</td>
            <td>false</td>
            <td> Id of the document </td>
        </tr>
        <tr className="selected">
            <td><code>@DocumentTypeName</code></td>
             <td>String</td>
            <td>false</td>
            <td>Name of the document type </td>
        </tr>
         <tr className="selected">
            <td><code>@SearchValue</code></td>
             <td>string</td>
            <td>false</td>
             <td>Search value </td>
        </tr>
    </tbody>
</table>

### Required fields for Query

- UserId
- UserName
- Name
- UserHasImage
- TypologyName
- DepartmentName


```sql
select u.Oid as UserId,
           u.Name as Username,
           u.[Name] as [Name],
           u.HasImage as UserhasImage, 
           uty.Name as TypologyName,
           dep.Name as DepartmentName
from   [User] u
                left join UserTypology uty on u.Typology = uty. [0id]
                left join Department dep on .Department = dep. [Oid]
where  u.[Name] like concat('%', @SearchValue, '%') or @SearchValue = ''
order bY u.[Name]

```
<figure>

![img-box-shadow](/img/craft/configuration/action/documentAssignmentType_example.png)
</figure>






