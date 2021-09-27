---
id: assignment
title: " "
sidebar_label: Assignment
---

# Assignment

A sub namespace of Document, exclusive for assignment operations

---

## update

#### Description

This method can be used to update an assignment field/s.

#### Method(s)

```js {3}
1   declare function update(
2                           assignmentId: string,
3                           documentId: string,
4                           documentType: string,
5                           params: { newValuesModel?: any } = {}
6   ): Promise<AssignmentDto>
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
            <td>string</td>
            <td>true</td>
            <td></td>
            <td>Assignment id</td>
        </tr>
        <tr className="selected">
            <td><code>documentId</code></td>
            <td>string</td>
            <td>true</td>
            <td></td>
            <td>DocumentId id</td>
        </tr>
        <tr className="selected">
            <td><code>documentType</code></td>
            <td>string</td>
            <td>true</td>
            <td></td>
            <td>Document type</td>
        </tr>
        <tr className="selected">
            <td><code>newValuesModel</code></td>
            <td>any</td>
            <td>false</td>
            <td></td>
            <td>New values to update assignment</td>
        </tr>
    </tbody>
</table>

#### Basic Usage

```javascript
SW.Document.Assignment.update(
                               "dd54bd31-376f-4fe7-b840-102016759b6b", 
                               "570f95fe-6b41-43a5-830f-cb644e6285e0", 
                               "Skill.Module.BusinessObjects.Deliverable", 
                               { newValuesModel: { User: newExecutorId } }
);
```