---
id: markAsSaved
title: Mark as Saved
sidebar_label: Mark as Saved
---

#### Description

This method can be used to mark changes as saved, so when navigating, the prompt will not be shown saying that are changes that were not saved

#### Method(s)

```javascript
function markAsSaved(dashboardDefinitionId: string): void
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
SW.markAsSaved(workspaceContext.definition.Id);
```

![img-box-shadow](/img/sdk/markAsSaved/markAsSavedMethod.png)

#### Response

![img-box-shadow](/img/sdk/markAsSaved/markAsSaved-message.png)

---
