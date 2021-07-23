---
id: document
title: " "
sidebar_label: Introduction
---

# document

With this namespace, you can quickly provide methods to manipulate documents.

The namespace Document provides to developers, methods to easily create, update, retrieve document data.

```javascript
//accessing to utils methods
SW.Document.{methodName}
```

## setCustomFields

###Description

This method can be used inside any workspace. Used to set custom user fields

###Method(s)

```js {3}
1   declare function setCustomFields(document: string, documentIds: string[], 
2       documentUserFieldsValue: any[]): Promise<any>;
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
            <td>String</td>
            <td>true</td>
            <td></td>
            <td>Document's type name</td>
        </tr>
         <tr className="selected">
            <td><code>documentIds</code></td>
            <td>String []</td>
            <td>true</td>
            <td></td>
            <td>An array of document's Ids</td>
        </tr>
        <tr className="selected">
            <td><code>documentUserFieldsValue</code></td>
            <td>Any</td>
            <td>true</td>
            <td></td>
            <td>User fields to set into the passed documents</td>
        </tr>
    </tbody>
</table>

###Basic Usage

```javascript
>   SW.Document.setCustomFields("Employee","b983e9b5-b2b8-485f-8ff8-794463771bcc", 
        { Name: "Default"});
```

## getCustomFields

###Description

This method can be used inside any workspace. Return custom user fields
###Method(s)

```js {3}
1   declare function getCustomFields(documentIds: string[], userFieldName: string, 
2       valueType: string): Promise<any>;
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
            <td><code>documentIds</code></td>
            <td>String []</td>
            <td>true</td>
            <td></td>
            <td>An array of document's Ids</td>
        </tr>
        <tr className="selected">
            <td><code>userFieldName</code></td>
            <td>String</td>
            <td>true</td>
            <td></td>
            <td>User field name</td>
        </tr>
        <tr className="selected">
            <td><code>valueType</code></td>
            <td>String</td>
            <td>true</td>
            <td></td>
            <td>Specify the value type of the document user field</td>
        </tr>
    </tbody>
</table>

###Basic Usage

```javascript
>    SW.Document.getCustomFields("b983e9b5-b2b8-485f-8ff8-794463771bcc", "Default", 
        "string");
```
## create

###Description

This method can be used inside any workspace. Create a new document
###Method(s)

```js {3}
1   declare function create(document: string, 
2       draftData: IDraftDocument = null): Promise<any>;
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
            <td>String</td>
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

###Basic Usage

```javascript
>    SW.Document.create("company", data);
```

## update

###Description

This method can be used inside any workspace. Update a document
###Method(s)

```javascript
1   declare function update(document: string, documentId: string, 
2       fields: string[], values: string[], callback: Function = () => {},
3       callbackError: Function = () => {: Promise<any>;
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
            <td>String</td>
            <td>true</td>
            <td></td>
            <td>Document's type name</td>
        </tr>
         <tr className="selected">
            <td><code>documentId</code></td>
            <td>String</td>
            <td>true</td>
            <td></td>
            <td>Document's Ids</td>
        </tr>
        <tr className="selected">
            <td><code>fields</code></td>
            <td>String []</td>
            <td>true</td>
            <td></td>
            <td>Fields to update</td>
        </tr>
        <tr className="selected">
            <td><code>values</code></td>
            <td>String []</td>
            <td>true</td>
            <td></td>
            <td>Values to update the fields</td>
        </tr>
        <tr className="selected">
            <td><code>callBack</code></td>
            <td>Function</td>
            <td>false</td>
            <td>null</td>
            <td>Callback function</td>
        </tr>
        <tr className="selected">
            <td><code>callBackError</code></td>
            <td>Function</td>
            <td>false</td>
            <td>null</td>
            <td>Callback function</td>
        </tr>
    </tbody>
</table>

###Basic Usage

```javascript
>    SW.Document.update("employee", "b983e9b5-b2b8-485f-8ff8-794463771bcc", 
        "Default", "true");
```

## GetLookup

###Description

This method can be used inside any workspace. Get document lookup
###Method(s)

```js {3}
1   declare function getLookup(document: string, 
2       options: any): Promise<any>;
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
            <td>String</td>
            <td>true</td>
            <td></td>
            <td>Document's type name</td>
        </tr>
        <tr className="selected">
            <td><code>options</code></td>
            <td>any</td>
            <td>false</td>
            <td></td>
            <td></td>
        </tr>
    </tbody>
</table>

###Basic Usage

```javascript
>    SW.Document.create("company", options);
```
