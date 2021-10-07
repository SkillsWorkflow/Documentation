---
id: document
title: " "
sidebar_label: Introduction
sidebar_position: 1
---

# Document

With this namespace, you can quickly provide methods to manipulate documents.

The namespace Document provides to developers, methods to easily create, update, retrieve document data.

```javascript
//accessing to Document methods
SW.Document.{methodName}
```

---

## create

#### Description

This method can be used to create a new document.

#### Method(s)

```javascript
1   declare function create(documentName: DocumentName, params: {draftData?: IDraftDocument} = {}): void;
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
            <td>Document's type name</td>
        </tr>
        <tr className="selected">
            <td><code>draftData</code></td>
            <td>IDraftDocument</td>
            <td>false</td>
            <td></td>
            <td>Document data</td>
        </tr>
    </tbody>
</table>

#### Basic Usage

```javascript
SW.Document.create(SW.DocumentName.Job, {draftData: data});
```

---

## getCustomFields

#### Description

This method can be used to get a custom user field from various documents.

#### Method(s)

```javascript
1   declare function getCustomFields(   
2                                       documentName: DocumentName, 
3                                       documentIds: string[], 
4                                       userFieldName: string, 
5                                       valueType: string
6   ): Promise<any>;
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
            <td>Document's type</td>
        </tr>
         <tr className="selected">
            <td><code>documentIds</code></td>
            <td>string[]</td>
            <td>true</td>
            <td></td>
            <td>An array of document ids</td>
        </tr>
        <tr className="selected">
            <td><code>userFieldName</code></td>
            <td>string</td>
            <td>true</td>
            <td></td>
            <td>User field name</td>
        </tr>
        <tr className="selected">
            <td><code>valueType</code></td>
            <td>string</td>
            <td>true</td>
            <td></td>
            <td>Specify the value type of the document user field</td>
        </tr>
    </tbody>
</table>

#### Basic Usage

```javascript
SW.Document.getCustomFields(
                               SW.DocumentName.Job,
                               ["b983e9b5-b2b8-485f-8ff8-794463771bcc"], 
                               "Default", 
                               "string"
);
```

---

## getLookup

#### Description

This method can be used to execute a document lookup.
#### Method(s)

```javascript
1   declare function getLookup(
2                               documentName: DocumentName, 
3                               options: string | {searchValue?: string, skip?: number, take?: number} = {}
4   ): Promise<any> 
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
            <td><code>document</code></td>
            <td>DocumentName</td>
            <td>true</td>
            <td></td>
            <td>Document type</td>
        </tr>
        <tr className="selected">
            <td><code>options</code></td>
            <td>string</td>
            <td>false</td>
            <td></td>
            <td>Document id or search, skip and take values</td>
        </tr>
    </tbody>
</table>

#### Basic Usage

```javascript
SW.Document.getLookup(SW.DocumentName.Job, options);
```

---

## setCustomFields

#### Description

This method can be used to set custom user fields in documents.

#### Method(s)

```javascript
1   declare function setCustomFields(
2                                       documentName: DocumentName, 
3                                       documentIds: string[], 
4                                       documentUserFieldsValue: DocumentUserFieldValueModel[]
5   ): Promise<DocumentUserFieldValuesModel[]>
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
            <td>Document's type</td>
        </tr>
         <tr className="selected">
            <td><code>documentIds</code></td>
            <td>string[]</td>
            <td>true</td>
            <td></td>
            <td>An array of document ids</td>
        </tr>
        <tr className="selected">
            <td><code>documentUserFieldsValue</code></td>
            <td>DocumentUserFieldValueModel[]</td>
            <td>true</td>
            <td></td>
            <td>User fields to set into the passed documents</td>
        </tr>
    </tbody>
</table>

#### Basic Usage

```javascript
SW.Document.setCustomFields(
                           SW.DocumentName.Job,
                           ["b1dd37dd-4633-4cc4-a418-0830d5e35638"], 
                           [{ ColumnName: 'AddedOn', Value: false, ColumnDataTypeId: 0 }]
);
```

---

## update

#### Description

This method can be used to update fields in a document.

#### Method(s)

```javascript
1   declare function update(
2                           documentName: DocumentName,
3                           documentId: string,
4                           fields: string[],
5                           values: string[]
6   ): Promise<any>
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
            <td>Document type</td>
        </tr>
         <tr className="selected">
            <td><code>documentId</code></td>
            <td>string</td>
            <td>true</td>
            <td></td>
            <td>Document id</td>
        </tr>
        <tr className="selected">
            <td><code>fields</code></td>
            <td>string[]</td>
            <td>true</td>
            <td></td>
            <td>Fields to update</td>
        </tr>
        <tr className="selected">
            <td><code>values</code></td>
            <td>string[]</td>
            <td>true</td>
            <td></td>
            <td>Values to update the fields</td>
        </tr>
    </tbody>
</table>

#### Basic Usage

```javascript
SW.updateDocument(
                   SW.DocumentName.Job, 
                   "b1dd37dd-4633-4cc4-a418-0830d5e35638", 
                   ['AgreedDateUtc'], 
                   ['2021-01-01']
);
```