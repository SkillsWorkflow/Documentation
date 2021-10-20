---
id: application-panel
title: " "
sidebar_label: Panel
---

## refresh

#### Description

This method can be used inside any workspace. Refresh the panel

#### Method(s)

```javascript
1   declare function refresh(senderId: string): void;
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
            <td><code>senderId</code></td>
            <td>String</td>
            <td>true</td>
            <td></td>
            <td>Sender's id</td>
        </tr>
    </tbody>
</table>


#### Basic Usage

```javascript
SW.Application.Panel.refresh('BAF13A4B-B0EE-4F64-B9F7-0543778CE383');
```


## refreshDataSource

#### Description

This method can be used inside any workspace. Refresh the datasource

#### Method(s)

```javascript
1  declare function refreshDataSource(filters: Array<{ name: string; value: string }>, 
2   params: {senderId: string, refreshSelf: boolean, callBacks?: { afterRefresh: Function }}): void;

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
            <td><code>filters</code></td>
            <td>Array</td>
            <td>true</td>
            <td></td>
            <td>Filters for refresh query action</td>
        </tr>
        <tr className="selected">
            <td><code>senderId</code></td>
            <td>String</td>
            <td>true</td>
            <td></td>
            <td>Sender's id</td>
        </tr>
        <tr className="selected">
            <td><code>refreshSelf</code></td>
            <td>Boolean</td>
            <td>true</td>
            <td></td>
            <td>Flag for self refresh</td>
        </tr>
        <tr className="selected">
            <td><code>afterRefresh</code></td>
            <td>Function</td>
            <td>false</td>
            <td></td>
            <td>Callback function triggered after the refresh</td>
        </tr>
    </tbody>
</table>

#### Basic Usage

```javascript
SW.Application.Panel.refreshDataSource([filters], "98226093-09B6-4E12-B9C6-2AEED2963C31");
```