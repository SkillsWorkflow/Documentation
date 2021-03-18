---
id:  ui-tooltip
title: ' '
sidebar_label: Tooltip
---
## _Usage_
When you hover the target, it shows the implemented tooltip

<!-- ![img](/img/responses/tooltip_usage.png) -->

:::important

For this example the tooltip methods were set on 2 events 

:::

![img](/img/responses/tooltip_set_show_usage.png)


![img](/img/responses/tooltip_hide_usage.png)


## _Set_

<h3>Description</h3>

This method can be used inside any workspace. Create a new tooltip
<h3>Method(s)</h3>

```js {3}
1 function set(reference: HTMLElement, entity: string, data: object, 
2   tooltipHTML?: string);
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
            <td></td>
        </tr>
        <tr className="selected">
            <td><code>entity</code></td>
            <td>String</td>
            <td>true</td>
            <td></td>
            <td>Refers to a pre-set element of entity list. Has unique atributes and styling</td>
        </tr>
        <tr className="selected">
            <td><code>data</code></td>
            <td>object</td>
            <td>true</td>
            <td></td>
            <td></td>
        </tr>
        <tr className="selected">
            <td><code>tooltipHTML</code></td>
            <td>string</td>
            <td>false</td>
            <td></td>
            <td></td>
        </tr>
    </tbody>
</table>

<h3>Basic Usage</h3>

```javascript 
>    SW.ui.tooltip.set(div, "company", { Name: "SkillsWorkflow"});
```

## _Show_

<h3>Description</h3>

This method can be used inside any workspace. Show existing tooptip
<h3>Method(s)</h3>

```js {3}
1 function show(reference: HTMLElement);
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
            <td></td>
        </tr>
    </tbody>
</table>

<h3>Basic Usage</h3>

```javascript 
>    SW.ui.tooltip.show(element);
```

## _Hide_

<h3>Description</h3>

This method can be used inside any workspace. Hide specified tooltip
<h3>Method(s)</h3>

```js {3}
1 function hide(reference: HTMLElement);
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
            <td></td>
        </tr>
    </tbody>
</table>

<h3>Basic Usage</h3>

```javascript 
>    SW.ui.tooltip.hide(element);
```