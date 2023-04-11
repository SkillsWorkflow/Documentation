---
id: markAsSaved
title: Mark as Saved
sidebar_label: Mark as Saved
---

#### Description

After editing a field in a workspace and before saving the changes. 
When you try to navigate to another page, the method will use that information to show a prompt to confirm if you want to navigate without saving the changes.


---

#### Method(s)

```javascript
SW.markAsSaved()
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
            <td><code>dashboardDefinitionId</code></td>
            <td>String</td>
            <td>true</td>
            <td>dashboard definition Id</td>
        </tr>
    </tbody>
</table>

#### Basic Usage

```javascript
SW.markAsSaved(workspaceContext.definition.Id)
```

![img-box-shadow](/img/sdk/markAsSaved/markAsSavedMethod.png)


#### Response 

![img-box-shadow](/img/sdk/markAsSaved/markAsSaved-message.png)


---