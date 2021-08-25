---
id: utils-export
title: " "
sidebar_label: Export
---

# Export

A sub namespace of Utils, exclusive for export operations

---

## toWorksheet

#### Description

This method can be used to export data into an excel sheet.

#### Method(s)

```javascript
1    function toWorksheet(data: object[], fileName: string, sheetName: string = undefined)
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
            <td><code>data</code></td>
            <td>object[]</td>
            <td>true</td>
            <td></td>
            <td>Data to export</td>
        </tr>
        <tr className="selected">
            <td><code>fileName</code></td>
            <td>string</td>
            <td>true</td>
            <td></td>
            <td>Name for the exported file</td>
        </tr>
        <tr className="selected">
            <td><code>sheetName</code></td>
            <td>string</td>
            <td>false</td>
            <td></td>
            <td>Name for the sheet</td>
        </tr>
    </tbody>
</table>

#### Basic Usage

```javascript
>    SW.Utils.Export.toWorksheet(['One', 'Two'], 'TestName', 'SheetTestName');
```

#### Response

This method will download a xlsx file named "TestName" with the data given in a sheet with the name "SheetTestName".

---

## toCsv

#### Description

This method can be used to export data into an excel sheet.

#### Method(s)

```javascript
1    function toCsv(options: ExportOption, data: any): void
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
            <td><code>options</code></td>
            <td>ExportOption</td>
            <td>false</td>
            <td></td>
            <td>Export options</td>
        </tr>
        <tr className="selected">
            <td><code>data</code></td>
            <td>any</td>
            <td>false</td>
            <td></td>
            <td>Data to export</td>
        </tr>
    </tbody>
</table>

#### Basic Usage

```javascript
>    SW.Utils.Export.toCsv({filename: 'TestName'}, ['One', 'Two'])
```

#### Response

This method will download a csv file named "TestName" with the data given.