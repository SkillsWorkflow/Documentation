---
id: client
title: ""
sidebar_label: Client

---

# Client

A sub namespace of Document, exclusive for client operations

---

:::note
The same methods that are presented in the Document Introduction but do not take the first param documentName, 
because you're already in a Client document
:::
[Get Custom Fields](../document#getcustomfields)

[Get Lookup](../document#getlookup)

[Set Custom Fields](../document#setcustomfields)

[Update](../document#update)

---

## getImages

#### Description

This method can be used to get clients image url.

#### Method(s)

```javascript
1   declare function getImages(ids: string[]): string[];
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
            <td><code>ids</code></td>
            <td>string[]</td>
            <td>true</td>
            <td></td>
            <td>Array of client ids</td> 
        </tr>
    </tbody>
</table>

#### Basic Usage

```javascript
SW.Document.Client.getImages(["f6671567-67b2-430c-bf04-dc7a41e99395"]);
```