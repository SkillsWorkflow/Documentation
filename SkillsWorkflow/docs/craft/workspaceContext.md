---
id:  context
title: 'WorkspaceContext'
sidebar_label: WorkspaceContext
---


All of the workspaces have the possibility to access the context, where it is possible to find the info of the components, the workspace and perform operations like get, set and subscribe

Can have access in two ways:

1- clicking on the button "set default value", and shows the default parameters of the functions, that includes the workspaceContext

2- If a function already exists and the context parameter isn't declared, it could be added manually.


WorkspaceContext is a function that has three main properties:

- Set
- Get
- Subscribe
- Definition
- ComponentDefinition

:::note
It allows you to set a context variable in a workspace and access that variable in another workspace under the same routing scope.
:::

### Set

Used to set the the value in a variable to use posteriorly

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

##
```js
    workspaceContext.set('name', value);
```

![img](/img/responses/context_set_usage.png)

:::tip
- Variable updateClient set at function onInitialized, to save the component
:::

### Get

Used to get the value saved previously

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

#
```js
    workspaceContext.get('name');
```

![img](/img/responses/context_get_usage.png)

:::tip
- Getting the value saved at variable updateClient 
:::

### Subscribe

Subscribe the context's variable you want to listen

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

#
```js
 workspaceContext.get('name', callBack function(){});
```

![img](/img/responses/context_subscribe_usage.png)
![img](/img/responses/show-pop-up-confirmation.png)


:::tip

- Subscribe the variable updateClient defined at the beggining. In this case the value was used to show a pop-up if the client exists
- Use the new value to make the necessary changes everytime the variable value is updated.
:::