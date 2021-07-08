---
id: currentUser
title: " "
sidebar_label: Current User
---

## getCompanies

<h3>Description</h3>

This method can be used inside any workspace. Retrives a list of Companies

<h3>Method(s)</h3>

```js {3}
1   declare function getCompanies(params: {name?:string, skip: number,
2    take: number} = {name: "", skip: 0, take: 0}): Promise<CompanyLookupDto>;
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
            <td><code>name</code></td>
            <td>String</td>
            <td>false</td>
            <td>Empty String</td>
            <td>Parameter Company name</td>
        </tr>
        <tr className="selected">
            <td><code>skip</code></td>
            <td>number</td>
            <td>false</td>
            <td>0</td>
            <td>Allows you skip the first results retrieved by the method</td>
        </tr>
        <tr className="selected">
            <td><code>take</code></td>
            <td>number</td>
            <td>false</td>
            <td>0</td>
            <td>Set a maximum number of result you want to see return</td>
        </tr>
    </tbody>
</table>

<h3>Basic Usage</h3>

```javascript
>    SW.Document.CurrentUser.getCompanies("Skillsworkflow", 0, 20);
```
## getClients

<h3>Description</h3>

This method can be used inside any workspace. Retrives a list of Clients

<h3>Method(s)</h3>

```js {3}
1   declare function getClients(params: {name?:string, skip: number,
2    take: number} = {name: "", skip: 0, take: 0}): Promise<CommercialClientLookupDto>;
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
            <td><code>name</code></td>
            <td>String</td>
            <td>false</td>
            <td>Empty String</td>
            <td>Parameter name to filter the search</td>
        </tr>
        <tr className="selected">
            <td><code>skip</code></td>
            <td>number</td>
            <td>false</td>
            <td>0</td>
            <td>Allows you skip the first results retrieved by the method</td>
        </tr>
        <tr className="selected">
            <td><code>take</code></td>
            <td>number</td>
            <td>false</td>
            <td>0</td>
            <td>Set a maximum number of result you want to see return</td>
        </tr>
    </tbody>
</table>

<h3>Basic Usage</h3>

```javascript
>    SW.Document.CurrentUser.getClients("Skillsworkflow", 0, 20);
```
## getDivisons

<h3>Description</h3>

This method can be used inside any workspace. Retrives a list of Divisions

<h3>Method(s)</h3>

```js {3}
1   declare function getDivisions(params: {name?:string, skip: number,
2    take: number} = {name: "", skip: 0, take: 0}): Promise<CompanyLookupDto>;
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
            <td><code>name</code></td>
            <td>String</td>
            <td>false</td>
            <td>Empty String</td>
            <td>Parameter name to filter the search</td>
        </tr>
        <tr className="selected">
            <td><code>skip</code></td>
            <td>number</td>
            <td>false</td>
            <td>0</td>
            <td>Allows you skip the first results retrieved by the method</td>
        </tr>
        <tr className="selected">
            <td><code>take</code></td>
            <td>number</td>
            <td>false</td>
            <td>0</td>
            <td>Set a maximum number of result you want to see return</td>
        </tr>
    </tbody>
</table>

<h3>Basic Usage</h3>

```javascript
>    SW.Document.CurrentUser.getDivisions("Consulting", 0, 20);
```