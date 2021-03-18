---
id:  ui-selectBox
title: ' '
sidebar_label: SelectBox
---

## _SetListWidth_

<h3>Description</h3>

This method can be used inside any workspace. Set SelectBox's list width

<h3>Method(s)</h3>

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
            <td>Refers to a pre-set element of entity list. Has unique atributes and styling</td>
        </tr>
    </tbody>
</table>

<h3>Basic Usage</h3>

```javascript
>    SW.ui.selectBox.setListWidth(500);
```
<h3>Response</h3>

## _GetLookupByEndpoint_

<h3>Description</h3>

This method can be used inside any workspace. Generates a pop-up to allow editing in bulk
<h3>Method(s)</h3>

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

<h3>Basic Usage</h3>

```javascript
>    SW.ui.selectBox.getLookupByEndpoint("options", "companies/all");
```
<h3>Response</h3>
