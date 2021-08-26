---
id: currentUser
title: " "
sidebar_label: Current User

---

# Current User

A sub namespace of Document, exclusive for the current logged user operations

---

## getClients

#### Description

This method can be used to get current logged user clients.

#### Method(s)

```js {3}
1   declare function getClients(
2                               params: {
3                                   name?: string, 
4                                   skip?: number, 
5                                   take?: number
6                               } = {
7                                   name: "", 
8                                   skip: 0, 
9                                   take: 0
10                              }
11  ): Promise<CommercialClientLookupDto[]>;
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
            <td>string</td>
            <td>false</td>
            <td></td>
            <td>Name to filter the search</td>
        </tr>
        <tr className="selected">
            <td><code>skip</code></td>
            <td>number</td>
            <td>false</td>
            <td>0</td>
            <td>Allows you skip the first results returned by the method</td>
        </tr>
        <tr className="selected">
            <td><code>take</code></td>
            <td>number</td>
            <td>false</td>
            <td>0</td>
            <td>Set a maximum number of result you want to return</td>
        </tr>
    </tbody>
</table>

#### Basic Usage

```javascript
>    SW.Document.CurrentUser.getClients({ name:"SkillsWorkflow", skip: 0, take: 20});
```

---

## getCompanies

#### Description

This method can be used to get current logged user companies.

#### Method(s)

```js {3}
1   declare function getCompanies(
2                               params: {
3                                   name?: string, 
4                                   skip?: number, 
5                                   take?: number
6                               } = {
7                                   name: "", 
8                                   skip: 0, 
9                                   take: 0
10                              }
11  ): Promise<CompanyLookupDto[]>;
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
            <td>string</td>
            <td>false</td>
            <td></td>
            <td>Name to filter the search</td>
        </tr>
        <tr className="selected">
            <td><code>skip</code></td>
            <td>number</td>
            <td>false</td>
            <td>0</td>
            <td>Allows you skip the first results returned by the method</td>
        </tr>
        <tr className="selected">
            <td><code>take</code></td>
            <td>number</td>
            <td>false</td>
            <td>0</td>
            <td>Set a maximum number of result you want to return</td>
        </tr>
    </tbody>
</table>

#### Basic Usage

```javascript
>    SW.Document.CurrentUser.getCompanies({ name:"SkillsWorkflow", skip: 0, take: 20});
```

---

## getDivisons

#### Description

This method can be used to get current logged user divisions.

#### Method(s)

```js {3}
1   declare function getDivisions(
2                               params: {
3                                   name?: string, 
4                                   skip?: number, 
5                                   take?: number
6                               } = {
7                                   name: "", 
8                                   skip: 0, 
9                                   take: 0
10                              }
11  ): Promise<DivisionLookupDto[]>;
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
            <td>string</td>
            <td>false</td>
            <td></td>
            <td>Name to filter the search</td>
        </tr>
        <tr className="selected">
            <td><code>skip</code></td>
            <td>number</td>
            <td>false</td>
            <td>0</td>
            <td>Allows you skip the first results returned by the method</td>
        </tr>
        <tr className="selected">
            <td><code>take</code></td>
            <td>number</td>
            <td>false</td>
            <td>0</td>
            <td>Set a maximum number of result you want to return</td>
        </tr>
    </tbody>
</table>

#### Basic Usage

```javascript
>    SW.Document.CurrentUser.getDivisions({ name:"SkillsWorkflow", skip: 0, take: 20});
```

---

## getInfo

#### Description

This method can be used to get current logged user information.

#### Method(s)

```js {3}
1   declare function getInfo(): UserInfo
```

#### Basic Usage

```javascript
>    SW.Document.CurrentUser.getInfo();
```

---

## hasAllRoles

#### Description

This method can be used to check if the current logged user has all given roles.

#### Method(s)

```js {3}
1   declare function hasAllRoles(roles: string[]): boolean;
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
            <td><code>roles</code></td>
            <td>string[]</td>
            <td>true</td>
            <td></td>
            <td>Roles to check</td>
        </tr>
    </tbody>
</table>

#### Basic Usage

```javascript
>    SW.Document.CurrentUser.hasAllRoles(["Admin", "Manager"]);
```

#### Response

```javascript
>   false
```

---

## hasAnyRoles

#### Description

This method can be used to check if the current logged user has any of the given roles.

#### Method(s)

```js {3}
1   declare function hasAnyRoles(roles: string[]): boolean;
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
            <td><code>roles</code></td>
            <td>string[]</td>
            <td>true</td>
            <td></td>
            <td>Roles to check</td>
        </tr>
    </tbody>
</table>

#### Basic Usage

```javascript
>    SW.Document.CurrentUser.hasAnyRoles(["Admin", "Manager"]);
```

#### Response

```javascript
>   true
```

---

## hasRole

#### Description

This method can be used to check if the current logged user has the given role.

#### Method(s)

```js {3}
1   declare function hasRole(roleName: string): boolean;
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
            <td><code>roleName</code></td>
            <td>string</td>
            <td>true</td>
            <td></td>
            <td>Role to check</td>
        </tr>
    </tbody>
</table>

#### Basic Usage

```javascript
>    SW.Document.CurrentUser.hasRole("Admin");
```

#### Response

```javascript
>   false
```

---

## hasRoles

#### Description

This method can be used to check if the current logged user has each of the given roles or not.

#### Method(s)

```js {3}
1   declare function hasRoles(roles: string[]): { [roleName: string]: boolean };
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
            <td><code>roles</code></td>
            <td>string[]</td>
            <td>true</td>
            <td></td>
            <td>Roles to check</td>
        </tr>
    </tbody>
</table>

#### Basic Usage

```javascript
>    SW.Document.CurrentUser.hasRoles(["Admin", "Manager"]);
```

#### Response

```javascript
>   { Admin: false, Manager: true }
```