---
id: users
title: "Users"
sidebar_label: Users
---

:::note
The same methods that are presented in the Document Introduction but do not take the first param document, 
because you're already in a User document
:::
[Set Custom Fields](document#setcustomfields)

[Get Custom Fields](document#getcustomfields)

[Create](document#create)

[Update](document#update)

[Get Lookup](document#getlookup)

## getImages

<h3>Description</h3>

This method can be used inside any workspace. To return an Estimate's images

<h3>Method(s)</h3>

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

<h3>Basic Usage</h3>

```javascript
>    SW.Document.Estimates.getImages(["f6671567-67b2-430c-bf04-dc7a41e99395"]);
```