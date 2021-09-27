---
id: customTable
title: " "
sidebar_label: Custom Table

---

# Custom Table

A sub namespace of Document, exclusive for the custom tables operations

---

## get

#### Description

This method can be used to get custom tables.

#### Method(s)

```js {3}
1   declare function get(
2                           customTableName: string, 
3                           orderByColumnName: string = null
4   ): Promise<CustomTableDto[]>
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
            <td>string</td>
            <td>true</td>
            <td></td>
            <td>Table's name</td>
        </tr>
         <tr className="selected">
            <td><code>orderByColumnName</code></td>
            <td>string</td>
            <td>false</td>
            <td>null</td>
            <td>Column to order by table</td>
        </tr>
    </tbody>
</table>

#### Basic Usage

```javascript
SW.Document.CustomTable.get("Table");
```