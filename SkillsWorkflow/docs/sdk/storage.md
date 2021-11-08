---
id: storage
title: " "
sidebar_label: Storage
---

# Storage

With this namespace, you can quickly provide methods to manipulate the storage.

The namespace Storage provides to developers, methods to easily get and import workspaces.

```javascript
//accessing to Storage methods
SW.Storage.{methodName}
```

---

## getWorkspaces

#### Description

This method can be used to get workspaces from a given url.

#### Method(s)

```javascript
1   declare function getWorkspaces(url: string): Promise<WorkspaceDefinitionDto[]>;
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
            <td><code>url</code></td>
            <td>string</td>
            <td>true</td>
            <td></td>
            <td>Url to get workspqces</td>
        </tr>
    </tbody>
</table>

#### Basic Usage

```javascript
SW.Storage.getWorkspaces('workspacesURLExample');
```

---

## importWorkspaces

#### Description

This method can be used to import workspaces from a given urls array to a tenant.

#### Method(s)

```javascript
1   declare function importWorkspaces(urls: string[]): Promise<any>;
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
            <td><code>url</code></td>
            <td>string[]</td>
            <td>true</td>
            <td></td>
            <td>Urls to get workspqces</td>
        </tr>
    </tbody>
</table>

#### Basic Usage

```javascript
SW.Storage.importWorkspaces(['workspacesURL1', 'workspacesURL2']);
```