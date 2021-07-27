---
id:  ui-selectBox
title: ' '
sidebar_label: SelectBox
---

## setListWidth

### Description

This method can be used inside any workspace. Set SelectBox's list width according to the largest item passed in element's datasource

### Method(s)

```js {3}
1 function setListWidth(e: any): void;
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
            <td><code>e</code></td>
            <td>any</td>
            <td>true</td>
            <td></td>
            <td>This parameter refers to a selectBox</td>
        </tr>
    </tbody>
</table>

### Basic Usage

```javascript
>    SW.UI.selectBox.setListWidth(selectBox);
```
### Response

---

## getLookupByEndpoint

### Description

This method can be used inside any workspace. Generates a pop-up to allow editing in bulk
### Method(s)

```js {3}
1 function getLookupByEndpoint(options: any, endpoint: string): Promise<any>;
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
            <td>any</td>
            <td>true</td>
            <td></td>
            <td>Refers to a pre-set element of entity list. Has unique atributes and styling</td>
        </tr>
        <tr className="selected">
            <td><code>endpoint</code></td>
            <td>string</td>
            <td>true</td>
            <td></td>
            <td>Endpoint to retrieve the data</td>
        </tr>
    </tbody>
</table>

### Basic Usage

```javascript
>    SW.UI.selectBox.getLookupByEndpoint("options", "companies/all");
```
### Response
