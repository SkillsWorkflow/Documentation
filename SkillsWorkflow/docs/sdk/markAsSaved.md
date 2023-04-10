---
id: markAsSaved
title: Mark as Saved
sidebar_label: Mark as Saved
---

## markAsSaved

#### Description

This method indicates that the data was not saved yet.

e.g. if you edit a field in a Workspace, and you haven't saved, when you try to to navigate to the other page, it will use the information that you passed previously, to show you a "prompt" asking if you want to navigate even without saving.


#### Method(s)

```javascript
1    public markAsSaved(dashboardDefinitionId: string): void {
        const eventData: IMarkAsSaved = {
            Name: DashboardEventName.MarkAsSaved,
            DashboardDefinitionId: dashboardDefinitionId
        };
        this.eventHubService.triggerApplicationEvent(new ApplicationEvent(ApplicationEventType.MarkAsSaved, eventData));
    }
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