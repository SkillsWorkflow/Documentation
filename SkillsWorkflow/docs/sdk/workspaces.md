---
id:  ui-workspaces
title: 'Workspaces'
sidebar_label: Workspaces
---

## Info

All settings directly regarding workspaces configuration properties (advanced)

![img](/img/responses/workspaces_info_usage.png)


## Context Parameter

<h3>Description</h3>

All the workspaces configuration functions have context as last parameter. Context is of type function and has 3 properties.
Set, Get and Subscribe. It allows you set a context variable in workspace and access that variable in another workspace under the same routing scope.

<h3>Typical function</h3>

```js {3}
1 function onPointClick(e, context){ }
```

<h3>Set</h3>

```js {3}
1 context.set('name', value);
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
            <td><code>name</code></td>
            <td>String</td>
            <td>true</td>
            <td></td>
            <td>Name to reference the passed value</td>
        </tr>
         <tr className="selected">
            <td><code>value</code></td>
            <td>any</td>
            <td>true</td>
            <td></td>
            <td>Any type of value can be passed</td>
        </tr>
    </tbody>
</table>


<h3>Basic Usage</h3>


![img](/img/responses/context_set_usage.png)

:::note

Variable ExecutorName set on workspace A
:::

<h3>Get</h3>

```js {3}
1 context.get('name');
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
            <td><code>name</code></td>
            <td>String</td>
            <td>true</td>
            <td></td>
            <td>Name to reference the passed value</td>
        </tr>
    </tbody>
</table>


<h3>Basic Usage</h3>


![img](/img/responses/context_get_usage.png)

:::note

Get used on workspace B to access variable ExecutorName previously set on Workspace A
:::

<h3>Subscribe</h3>

Subscribe context's variable you want to listen

```js {3}
1 context.get('name', callBack function);
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
            <td><code>name</code></td>
            <td>String</td>
            <td>true</td>
            <td></td>
            <td>Name to reference the passed value</td>
        </tr>
    </tbody>
    <tbody>
        <tr className="selected">
            <td><code>callBack</code></td>
            <td>String</td>
            <td>true</td>
            <td></td>
            <td>A callBack function</td>
        </tr>
    </tbody>
</table>


<h3>Basic Usage</h3>


![img](/img/responses/context_subscribe_usage.png)

:::note

Subscribe to variable previously set on worspace A. Use the new value to make the necessary changes everytime the variable value is updated.
:::