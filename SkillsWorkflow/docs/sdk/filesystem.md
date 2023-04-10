---
id: filesystem
title: " "
sidebar_label: File System
---

# File System

The namespace FileSystem provides to developers a method to easily upload files to a folder.

```javascript
//accessing to FileSystem methods
SW.FileSystem.{methodName}
```

---

## uploadFilesToFolder

#### Description

This method can be used to upload files to a folder.

#### Method(s)

```javascript
1   declare function uploadFilesToFolder(folderId: string, files: any[], documentId: string = null, documentType: string = null) : Promise<ProgressReport>;
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
            <td><code>folderId</code></td>
            <td>string</td>
            <td>true</td>
            <td></td>
            <td>Folder id</td>
        </tr>
         <tr className="selected">
            <td><code>files</code></td>
            <td>any[]</td>
            <td>true</td>
            <td></td>
            <td>Files to upload</td>
        </tr>
        <tr className="selected">
            <td><code>documentId</code></td>
            <td>string</td>
            <td>false</td>
            <td>null</td>
            <td>Document id</td>
        </tr>
        <tr className="selected">
            <td><code>documentType</code></td>
            <td>string</td>
            <td>false</td>
            <td>null</td>
            <td>Document type</td>
        </tr>
    </tbody>
</table>

#### Basic Usage

```javascript
SW.FileSystem.uploadFilesToFolder('folderId', [example.xlsx, example.png]);
```