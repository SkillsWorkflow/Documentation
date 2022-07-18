---
id:  Edit Workspace
title: 'Definition'
sidebar_label: Definition
---

On this page you will find how to edit the workspaces.

:::note
To have access to the these options, you need to click in the Edit workspace to open the workspace configuration.
:::

## Parameters


<figure>

![img-box-shadow](/img/craft/workspace/definition.png)
</figure>

<h3>Example</h3>

1. Choose the parameters tab and insert the parameter name and value.

![img-box-shadow](/img/craft/workspace/parameter.png)

2. Add the created parameter in the query.

![img-box-shadow](/img/craft/workspace/usingParameter.png)


## Translations


In this section you will find how to translate the terms of your workspace that don't exist in the system by default.

<table className="custom-table">
    <thead> 
        <tr>
            <th>Properties</th>
            <th>Type</th>
            <th>Required</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr className="selected">
            <td><code>Language</code></td>
            <td>String</td>
            <td>false</td>
            <td>Select the language you want to translate the field.</td> 
        </tr>
        <tr className="selected">
            <td><code>Term</code></td>
            <td>String</td>
            <td>false</td>
            <td>Expression to translate.</td> 
        </tr>
        <tr className="selected">
            <td><code>Translation</code></td>
            <td>String</td>
            <td>false</td>
            <td>Translated term.</td> 
        </tr>
    </tbody>
</table>

<h3>Example</h3>

<figure>

![img-box-shadow](/img/craft/workspace/Translation.png)
</figure>

<figure>

![img-box-shadow](/img/craft/workspace/Translation-example.png)
</figure>


## About


In this section you will find how to update the workspace to the version that you want.

<table className="custom-table">
    <thead> 
        <tr>
            <th>Properties</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr className="selected">
            <td><code>Days Ago</code></td>
            <td>Days that elapsed since the published of that version..</td> 
        </tr>
        <tr className="selected">
            <td><code>Modified By</code></td>
            <td>The last person that modified the workspace.</td> 
        </tr>
        <tr className="selected">
            <td><code>Description</code></td>
            <td>Description about what was done in the workspace.</td> 
        </tr>
         <tr className="selected">
            <td><code>Actions</code></td>
            <td>Button to update the version of the workspace.</td> 
        </tr>
    </tbody>
</table>

#

:::note
In the Version section you have three colors: 

- Green: Indicates the current version of the workspace, 
- Yellow: Shows a higher version of the current version workspace, 
- Grey: Shows a below version of the workspace.
:::

<h3>Example</h3>

<figure>


![img-box-shadow](/img/craft/workspace/About-example.png)
</figure>


