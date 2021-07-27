---
id: clients
title: "Clients"
sidebar_label: Clients
---

:::note
The same methods that are presented in the Document Introduction but do not take the first param document, 
because you're already in a Client document
:::
[Set Custom Fields](document#setcustomfields)

[Get Custom Fields](document#getcustomfields)

[Create](document#create)

[Update](document#update)

[Get Lookup](document#getlookup)

## getImages

### Description

This method can be used inside any workspace. To return an Estimate's images

### Method(s)

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
            <td>String []</td>
            <td>true</td>
            <td></td>
            <td>Array of document's ids</td> 
        </tr>
    </tbody>
</table>

### Basic Usage

```javascript
>    SW.Document.Estimates.getImages(["f6671567-67b2-430c-bf04-dc7a41e99395"]);
```