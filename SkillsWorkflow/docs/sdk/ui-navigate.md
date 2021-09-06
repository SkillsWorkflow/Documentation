---
id: ui-navigate
title: " "
sidebar_label: Navigate
---

# Navigate

A sub namespace of UI, exclusive for navigate operations

```javascript
//accessing to ui.navigate methods
SW.UI.Navigate.{methodName}
```

---

## toDocument

#### Description

This method can be used to navigate do the document's feed.

#### Method(s)

```javascript
1    function toDocument(documentName: DocumentName, documentId: string): void
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
            <td><code>documentName</code></td>
            <td>DocumentName</td>
            <td>true</td>
            <td></td>
            <td>Document type to navigate</td>
        </tr>
        <tr className="selected">
            <td><code>documentId</code></td>
            <td>string</td>
            <td>true</td>
            <td></td>
            <td>Document's id</td>
        </tr>
    </tbody>
</table>

#### Basic Usage

```javascript
>    SW.UI.Navigate.toDocument(SW.DocumentName.Client, 'clientId');
```

#### Response

When called it will navigate to the client's feed with the document id passed.

---

## toNewTab

#### Description

This method can be used to open a page in a new tab.

#### Method(s)

```javascript
1   function navigateToNewTab(url: string, 
2       params?: {
3           useSkillsBaseUrl: boolean
4       } = {
5           useSkillsBaseUrl: true
6       }
7   ): void;
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
            <td>Url Link</td>
        </tr>
        <tr className="selected">
            <td><code>useSkillsBaseUrl</code></td>
            <td>boolean</td>
            <td>false</td>
            <td>true</td>
            <td>Use Skills base url</td>
        </tr>
    </tbody>
</table>

#### Basic Usage

```javascript
>    SW.UI.navigateToNewTab("url");
```

#### Response

It will open a new tab with the url passed.

---

## toWorkspace

#### Description

This method can be used to navigate to a workspace.

#### Method(s)

```javascript
1   function toWorkspace(workspaceId: string, 
2       params: { 
3           documentName?: DocumentName; 
4           documentId?: string 
5       } = {}
6   ): void
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
            <td><code>workspaceId</code></td>
            <td>string</td>
            <td>true</td>
            <td></td>
            <td>Workspace id to navigate</td>
        </tr>
       <tr className="selected">
            <td><code>url</code></td>
            <td>String</td>
            <td>false</td>
            <td>" "</td>
            <td>Url Link</td>
        </tr>
        <tr className="selected">
            <td><code>documentName</code></td>
            <td>DocumentName</td>
            <td>false</td>
            <td></td>
            <td>If the workspace is inside a document</td>
        </tr>
        <tr className="selected">
            <td><code>documentId</code></td>
            <td>string</td>
            <td>false</td>
            <td></td>
            <td>Document id if the workspace is inside a document</td>
        </tr>
    </tbody>
</table>

#### Basic Usage

```javascript
>    SW.UI.navigateTo('workspaceId', {documentName: SW.DocumentName.Job, documentId: 'jobId'});
```

#### Response

It will navigate to a workspace that is inside the job document passed.