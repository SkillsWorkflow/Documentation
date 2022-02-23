---
id: validation
title: Validation
sidebar_label: Validation
---

On this page you will find how to create an action of the type Validation based in Data Source.

## 1.Transition

This method validate if the Transition can be performed.

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


### Example

<figure>

![img-box-shadow](/img/craft/configuration/action/validation_example.png)
</figure>

:::note
- To use this action you need to write the name of the query in the field Validate Query Name
- Returns 1 if the Transition can be performed​
- Could show a Message when the Transition fails

:::



