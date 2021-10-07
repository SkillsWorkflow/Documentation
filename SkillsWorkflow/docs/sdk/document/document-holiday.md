---
id: holiday
title: " "
sidebar_label: Holiday

---

# Holiday

A sub namespace of Document, exclusive for holiday operations

---

## get

#### Description

This method can be used to get holidays from a company between two dates.

#### Method(s)

```javascript
1   declare function get(companyId?: string, startDate?: Date, endDate?: Date): Promise<HolidayInfoDto[]>
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
            <td>string</td>
            <td>true</td>
            <td></td>
            <td>Company's id</td>
        </tr>
        <tr className="selected">
            <td><code>startDate</code></td>
            <td>Date</td>
            <td>false</td>
            <td></td>
            <td>Range start date</td>
        </tr>
        <tr className="selected">
            <td><code>endDate</code></td>
            <td>Date</td>
            <td>false</td>
            <td></td>
            <td>Range end date</td>
        </tr>
    </tbody>
</table>

#### Basic Usage

```javascript
SW.Document.Holiday.get("bf54366c-4212-4099-b959-7c969b6c878f");
```