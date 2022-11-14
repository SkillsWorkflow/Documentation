---
id:  context
title: 'WorkspaceContext'
sidebar_label: WorkspaceContext
---


Most of the workspaces have the possibility to access to his context. <!-- falta mais texto introdutório>

Can have access in two ways:

1- clicking on the button "set default value", and shows the default parameteres of the functions, that includes the workspaceContext

2- If already exists a function and doesn't has the this parameter, it could be add manually.



WorkspaceContext is a function and has three main properties:

- Set
- Get
- Subscribe

:::note
It allows you to set a context variable in a workspace and access that variable in another workspace under the same routing scope.
:::

![img-box-shadow-popup](/img/responses/workspaces_info_usage.png) <!-- pôr imagem com o set default>


```js
function onPointClick(e, context){ }
```

### Set

Used to set the the value in a variable to use posteriorly

![img-box-shadow](/img/responses/context_set_usage.png)

:::note

Variable ExecutorName set on workspace A
:::


```js
    WorkspaceContext.set('name', value);
```
<table className="custom-table">
    <thead>
        <tr>
            <th>Parameter</th>
            <th>Type</th>
            <th>Required</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr className="selected">
            <td><code>name</code></td>
            <td>String</td>
            <td>true</td>
            <td>Name to reference the valued passed</td>
        </tr>
         <tr className="selected">
            <td><code>value</code></td>
            <td>Any</td>
            <td>true</td>
            <td>Any type of value can be passed</td>
        </tr>
    </tbody>
</table>

### Get

Used to get the value saved previously


![img](/img/responses/context_get_usage.png)

:::note
Get used on workspace B to access variable ExecutorName previously set on Workspace A
:::

```js
WorkspaceContext.get('name');
```
<table className="custom-table">
    <thead>
        <tr>
            <th>Parameter</th>
            <th>Type</th>
            <th>Required</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr className="selected">
            <td><code>name</code></td>
            <td>String</td>
            <td>true</td>
            <td>Name of the reference passed previously</td>
        </tr>
    </tbody>
</table>


### Subscribe

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
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr className="selected">
            <td><code>name</code></td>
            <td>String</td>
            <td>true</td>
            <td>Name to reference the passed value</td>
        </tr>
    </tbody>
    <tbody>
        <tr className="selected">
            <td><code>callBack</code></td>
            <td>String</td>
            <td>true</td>
            <td>A callBack function</td>
        </tr>
    </tbody>
</table>


### Basic Usage


![img](/img/responses/context_subscribe_usage.png)

:::note

Subscribe the variable previously set on worskpace A. Use the new value to make the necessary changes everytime the variable value is updated.
:::

<!-- falta fazer ligação com a página do método do sdk -->