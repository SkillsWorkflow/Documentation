---
id: assignments
title: " "
sidebar_label: Assignments
---

## create

###Description

This method can be used inside any workspace. Create a new assignment

###Method(s)

```javascript
1   declare function create(newUserId: string, documentId: string, 
2       assignmentType: string, document: string, workload: number = 0, 
3       callback: any = () => {}): 
```

<table className="custom-table">
    <thead>
        <tr>
            <th>Parameter</th>
            <th>Type</th>
            <th>Required</th>
            <th>Defaults</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr className="selected">
            <td><code>newUserId</code></td>
            <td>String</td>
            <td>true</td>
            <td></td>
            <td>New user id</td>
        </tr>
        <tr className="selected">
            <td><code>documentId</code></td>
            <td>String</td>
            <td>true</td>
            <td></td>
            <td>Document's id</td>
        </tr>
        <tr className="selected">
            <td><code>assignmentType</code></td>
            <td>String</td>
            <td>true</td>
            <td></td>
            <td>Holiday end date</td>
        </tr>
        <tr className="selected">
            <td><code>document</code></td>
            <td>String</td>
            <td>true</td>
            <td></td>
            <td>Document's name</td>
        </tr>
        <tr className="selected">
            <td><code>workload</code></td>
            <td>Number</td>
            <td>true</td>
            <td></td>
            <td>Assignment's workload</td>
        </tr>
        <tr className="selected">
            <td><code>callBack</code></td>
            <td>Function</td>
            <td>false</td>
            <td></td>
            <td>Callback function</td>
        </tr>
    </tbody>
</table>

###Basic Usage

```javascript
>    SW.Document.Assignments.create("userId", "documentId", 
        "assignmentType", "document", 2);
```

## update

###Description

This method can be used inside any workspace. Update an assignment

###Method(s)

```js {3}
1   declare function update(assignmentId: string, newValuesModel: any = {}, 
2       documentId: string, document: string, callback: any = () => {});
```

<table className="custom-table">
    <thead>
        <tr>
            <th>Parameter</th>
            <th>Type</th>
            <th>Required</th>
            <th>Defaults</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr className="selected">
            <td><code>assignmentId</code></td>
            <td>String</td>
            <td>true</td>
            <td></td>
            <td>Assignment's id</td>
        </tr>
        <tr className="selected">
            <td><code>newValuesModel</code></td>
            <td>Object</td>
            <td>true</td>
            <td></td>
            <td>New values to update assignment</td>
        </tr>
        <tr className="selected">
            <td><code>documentId</code></td>
            <td>String</td>
            <td>true</td>
            <td></td>
            <td>Document's id</td>
        </tr>
        <tr className="selected">
            <td><code>document</code></td>
            <td>String</td>
            <td>true</td>
            <td></td>
            <td>Document's name</td>
        </tr>
        <tr className="selected">
            <td><code>callBack</code></td>
            <td>Function</td>
            <td>true</td>
            <td></td>
            <td>Callback function</td>
        </tr>
    </tbody>
</table>

###Basic Usage

```javascript
>    SW.Document.Assignments.update("AssignmentId", {}, 
        "documentId", "company");
```

## delete

###Description

This method can be used inside any workspace. Delete an assignment

###Method(s)

```js {3}
1   declare function delete(assignmentId: string, callback: any = () => {}
```

<table className="custom-table">
    <thead>
        <tr>
            <th>Parameter</th>
            <th>Type</th>
            <th>Required</th>
            <th>Defaults</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr className="selected">
            <td><code>assignmentId</code></td>
            <td>String</td>
            <td>true</td>
            <td></td>
            <td>Assignment's id</td>
        </tr>
        <tr className="selected">
            <td><code>callback</code></td>
            <td>Function</td>
            <td>false</td>
            <td></td>
            <td>callBack function</td>
        </tr>
    </tbody>
</table>

###Basic Usage

```javascript
>    SW.Document.Assignments.delete("AssignmentId");
```