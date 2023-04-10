---
id:  ui-selectBox
title: ' '
sidebar_label: Select Box
---

# Select Box

A sub namespace of UI, exclusive for select box operations

```javascript
//accessing to ui.selectBox methods
SW.UI.SelectBox.{methodName}
```

---

## getLookupByEndpoint

#### Description

This method can be used to get a SelectBox's datasource.

#### Method(s)

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
            <td>SearchValue, skip and take</td>
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

#### Basic Usage

```javascript
SW.UI.selectBox.getLookupByEndpoint({searchValue: '', skip: 0, take: 20}, "departments/lookup");
```

---

## setListWidth

#### Description

This method can be used to set a SelectBox's list width according to the largest item passed in element's datasource.

#### Method(s)

```js {3}
1 function setListWidth(selectBox: {component: dxSelectBox, element: HTMLElement}): void
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
            <td><code>component</code></td>
            <td>dxSelectBox</td>
            <td>true</td>
            <td></td>
            <td>Target select box</td>
        </tr>
        <tr className="selected">
            <td><code>element</code></td>
            <td>HTMLElement</td>
            <td>true</td>
            <td></td>
            <td></td>
        </tr>
    </tbody>
</table>

#### Basic Usage

```javascript
SW.UI.selectBox.setListWidth(selectBox);
```