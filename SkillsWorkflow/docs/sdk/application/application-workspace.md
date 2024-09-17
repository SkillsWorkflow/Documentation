---
id: application-workspace
title: " "
sidebar_label: Workspace
---


## refresh

#### Description

This method can be used inside any workspace. Refresh a workspace

#### Method(s)

```javascript
1   declare function refresh(): void;
```



#### Basic Usage

```javascript
SW.Application.Workspace.refresh();
```


## setFilter

#### Description

This method can be used inside any workspace. Create a new assignment

#### Method(s)

```javascript
1  declare function setFilter(filter: string, value: any, 
2   params: {senderId?: string} = {senderId: ""}): void;
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
            <td><code>filter</code></td>
            <td>String</td>
            <td>true</td>
            <td></td>
            <td></td>
        </tr>
        <tr className="selected">
            <td><code>value</code></td>
            <td>Any</td>
            <td>true</td>
            <td></td>
            <td></td>
        </tr>
        <tr className="selected">
            <td><code>senderId</code></td>
            <td>String</td>
            <td>false</td>
            <td>""</td>
            <td>Sender's id</td>
        </tr>
    </tbody>
</table>

#### Basic Usage

```javascript
SW.Application.Workspace.setFilter(filter, 20);
```

## setFilters

#### Description

This method can be used inside any workspace. Set multiple filters

#### Method(s)

```javascript
1  declare function setFilters(filtersWithValues: DashboardFilter[], 
2   params: {senderId?: string} = {senderId: ""}): void;
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
            <td><code>filtersWithValues</code></td>
            <td>DashboardFilter</td>
            <td>true</td>
            <td></td>
            <td>Array of filters</td>
        </tr>
        <tr className="selected">
            <td><code>senderId</code></td>
            <td>String</td>
            <td>false</td>
            <td></td>
            <td></td>
        </tr>
    </tbody>
</table>

#### Basic Usage

```javascript
SW.Application.Workspace.setFilters([filters], "98226093-09B6-4E12-B9C6-2AEED2963C31");
```

<h3>Example</h3>

```javascript {12}
{
    name: "apply",
    itemType: "button",
    buttonOptions: {
        width: 100,
        text: "Apply",
        onClick: function () {
            var from = workspaceContext.get("From").option("value");
            var to = workspaceContext.get("To").option("value");
            var includeNew = workspaceContext.get("IncludeNew").option("value");
            workspaceContext.set("Loading", Date.now());
            SW.Application.Workspace.setFilters([{ Name: "From", Value: Date.now() }, { Name: "To", Value: Date.now() }]);
            SW.Application.Workspace.setFilters([{ Name: "From", Value: from }, { Name: "To", Value: to }, { Name: "IncludeNew", Value: includeNew }]);
        }
    }
},
```
![img-box-shadow](/img/sdk/setFilters/apply-button.png)

![img-box-shadow](/img/sdk/setFilters/setFilters-example.png)



## setPanels

#### Description

This method can be used inside any workspace. Set workspace's panels
#### Method(s)

```javascript
1  declare function setPanels(items: IUpdatedLayoutItems, 
2   options: ILayoutEditOptions): void;
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
            <td><code>items</code></td>
            <td>IUpdatedLayoutItems[]</td>
            <td>true</td>
            <td></td>
            <td>Layout items to be updated. Pass the name or id of the item.<ul><li>x: Moves the panel horizontally</li><li>y: Moves the panel vertically</li><li>cols: Sets the number of columns</li><li>rows: Sets the number of rows</li></ul></td>
        </tr>
        <tr className="selected">
            <td><code>options</code></td>
            <td>ILayoutEditOptions</td>
            <td>true</td>
            <td></td>
            <td>A boolean to set save option to true or false</td>
        </tr>
    </tbody>
</table>

#### Basic Usage

```javascript
SW.Application.Workspace.setPanels({ 
    GridName1: { x: 0, y: 0, cols: 10, rows: 10 }, 
    'Grid Name 2': { x: 10, y: 2, cols: 10, rows: 10 } 
    })
```

## getParameter

#### Description

Retrieves the value of a specified parameter from the workspace.
#### Method(s)

```javascript
1  declare function getParameter(name: string): any;
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
            <td>string[]</td>
            <td>true</td>
            <td></td>
            <td>The name of the parameter to fetch the value from.</td>
        </tr>
    </tbody>
</table>

#### Basic Usage

```javascript
SW.Application.Workspace.getParameter('parameterName')
```
