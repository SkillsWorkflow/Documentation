---
id: holidays
title: " "
sidebar_label: Holidays
---

## setCustomFields

###Description

This method can be used inside any workspace. Retrives a custom table

###Method(s)

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

###Basic Usage

```javascript
>    SW.Document.Holidays.get("SkillsWorkflow");
```