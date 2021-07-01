---
id: customTables
title: " "
sidebar_label: Custom Tables
---


## setCustomFields

<h3>Description</h3>

This method can be used inside any workspace. Retrives a custom table

<h3>Method(s)</h3>

```js {3}
1   declare function get(customTableName: string, 
2       orderByColumnName: string = null): Promise<any>;
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
            <td><code>customTableName</code></td>
            <td>String</td>
            <td>true</td>
            <td></td>
            <td>Table's name</td>
        </tr>
         <tr className="selected">
            <td><code>orderByColumnName</code></td>
            <td>String</td>
            <td>true</td>
            <td>null</td>
            <td>Column to order by table</td>
        </tr>
    </tbody>
</table>

<h3>Basic Usage</h3>

```javascript
>    SW.Document.CustomTable.get("Table");
```