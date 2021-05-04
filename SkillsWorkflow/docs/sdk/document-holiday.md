---
id: holidays
title: " "
sidebar_label: Holidays
---

## SetCustomFields

<h3>Description</h3>

This method can be used inside any workspace. Retrives a custom table

<h3>Method(s)</h3>

```javascript
1   declare function get(companyId: string, startDate?: Date, 
2       endDate?: Date): Promise<any>;
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
            <td><code>companyId</code></td>
            <td>String</td>
            <td>true</td>
            <td></td>
            <td>Company's id</td>
        </tr>
        <tr className="selected">
            <td><code>startDate</code></td>
            <td>Date</td>
            <td>false</td>
            <td></td>
            <td>Holiday start date</td>
        </tr>
        <tr className="selected">
            <td><code>endDate</code></td>
            <td>Date</td>
            <td>false</td>
            <td></td>
            <td>Holiday end date</td>
        </tr>
    </tbody>
</table>

<h3>Basic Usage</h3>

```javascript
>    SW.Document.Holidays.get("SkillsWorkflow");
```