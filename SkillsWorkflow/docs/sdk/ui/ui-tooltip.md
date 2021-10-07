---
id:  ui-tooltip
title: ' '
sidebar_label: Tooltip
---

# Tooltip

A sub namespace of UI, exclusive for tooltip operations

```javascript
//accessing to ui.tooltip methods
SW.UI.Tooltip.{methodName}
```

---

## set

#### Description

This method can be used to set a new tooltip to a html element.

#### Method(s)

```js {3}
1   function set(reference: HTMLElement, data: object | string,
2       params: {
3           documentName?: DocumentName,
4           tooltipOptions?: PopperContentOptions
5       } = {}
6   ): void
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
            <td><code>reference</code></td>
            <td>HTMLElement</td>
            <td>true</td>
            <td></td>
            <td>Element's reference</td>
        </tr>
        <tr className="selected">
            <td><code>data</code></td>
            <td>object | string</td>
            <td>true</td>
            <td></td>
            <td>Data to be displayed</td>
        </tr>
        <tr className="selected">
            <td><code>documentName</code></td>
            <td>DocumentName</td>
            <td>false</td>
            <td></td>
            <td>Document name</td>
        </tr>
        <tr className="selected">
            <td><code>tooltipOptions</code></td>
            <td>PopperContentOptions</td>
            <td>false</td>
            <td></td>
            <td>Tooltip options</td>
        </tr>
    </tbody>
</table>

#### Basic Usage

```javascript 
SW.UI.Tooltip.set(element, jobData, { documentName: SW.DocumentName.Job });
```

---

## show

#### Description

This method can be used to show a tooptip in a html element. (When used, to hide the tooltip use SW.UI.Tooltip.hide())

#### Method(s)

```js {3}
1   function show(reference: HTMLElement, data: object | string,
2       params: {
3           documentName?: DocumentName,
4           tooltipOptions?: PopperContentOptions
5       } = {}
6   ): void
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
            <td><code>reference</code></td>
            <td>HTMLElement</td>
            <td>true</td>
            <td></td>
            <td>Element's reference</td>
        </tr>
        <tr className="selected">
            <td><code>data</code></td>
            <td>object | string</td>
            <td>true</td>
            <td></td>
            <td>Data to be displayed</td>
        </tr>
        <tr className="selected">
            <td><code>documentName</code></td>
            <td>DocumentName</td>
            <td>false</td>
            <td></td>
            <td>Document name</td>
        </tr>
        <tr className="selected">
            <td><code>tooltipOptions</code></td>
            <td>PopperContentOptions</td>
            <td>false</td>
            <td></td>
            <td>Tooltip options</td>
        </tr>
    </tbody>
</table>

#### Basic Usage

```javascript 
SW.UI.Tooltip.(element, jobData, { documentName: SW.DocumentName.Job });
```

---

## hide

#### Description

This method can be used to hide a tooltip. (Only used when using SW.UI.Tooltip.show())

#### Method(s)

```js {3}
1 function hide(reference: HTMLElement): void
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
            <td><code>reference</code></td>
            <td>HTMLElement</td>
            <td>true</td>
            <td></td>
            <td>Element's reference</td>
        </tr>
    </tbody>
</table>

#### Basic Usage

```javascript 
SW.UI.tooltip.hide(element);
```