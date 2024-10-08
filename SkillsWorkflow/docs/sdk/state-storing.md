---
id: state-storing
title: " "
sidebar_label: State Storing
---

# State Storing

This documentation describes the StateStoring namespace and its methods for storing and retrieving application state.

The StateStoring namespace provides functionalities for managing application state using browser local storage. 

The namespace provides two main methods:

- set(key: string, value: any, useWorkspaceId?: boolean): void
- get(key: string, useWorkspaceId?: boolean): string | object | Array

```javascript
//accessing to State Storing methods
SW.StateStoring.{methodName}
```

---

## set

#### Description

This method stores a key-value pair in local storage.

#### Method(s)

```javascript
    declare function set(key: string, value: any, useWorkspaceId?: boolean) : void;
```

<table className="custom-table">
    <thead>
        <tr>
            <th>Parameter</th>
            <th>Type</th>
            <th>Required</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
         <tr className="selected">
            <td><code>key</code></td>
            <td>string</td>
            <td>true</td>
            <td>The key used to store the data.</td>
        </tr>
         <tr className="selected">
            <td><code>value</code></td>
            <td>any</td>
            <td>Required</td>
            <td>The data to be stored. Can be a string, object, or array.</td>
        </tr>
         <tr className="selected">
            <td><code>useWorkspaceId</code></td>
            <td>boolean</td>
            <td>optional</td>
            <td>Defaults to true. If false, the current workspace ID will not be prepend in the key.</td>
        </tr>
    </tbody>
</table>

## get

#### Description

This method retrieves data from local storage based on the provided key.

#### Method(s)

```javascript
    declare function get(key: string, useWorkspaceId?: boolean) : string | object | Array;
```

<table className="custom-table">
    <thead>
        <tr>
            <th>Parameter</th>
            <th>Type</th>
            <th>Required</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
         <tr className="selected">
            <td><code>key</code></td>
            <td>string</td>
            <td>true</td>
            <td>The key used to store the data.</td>
        </tr>
         <tr className="selected">
            <td><code>useWorkspaceId</code></td>
            <td>boolean</td>
            <td>optional</td>
            <td>Defaults to true. If false, attempts to retrieve data without the workspace ID prepended to the key.</td>
        </tr>
    </tbody>
</table>


## Basic Usage

:::caution
The useWorkspaceId parameter helps isolate application data for different workspaces.

You can set useWorkspaceId to false when you want to access data outside of a specific workspace context.
:::

```javascript
    // Set a string value
    SW.StateStoring.set('userLanguage', 'en');

    // Get the string value
    const userLanguage = SW.StateStoring.get('userLanguage');
    console.log(userLanguage); // Output: 'en'

    // Set a boolean value
    SW.StateStoring.set('isDarkModeEnabled', true);

    // Get the boolean value
    const isDarkModeEnabled = SW.StateStoring.get('isDarkModeEnabled');
    console.log(isDarkModeEnabled); // Output: true

    // Set an object value
    const userProfile = {
        name: 'Alice',
        email: 'alice@example.com',
        preferences: {
            theme: 'dark',
            notifications: true,
        },
    };
    SW.StateStoring.set('userProfile', userProfile);

    // Get the object value
    const retrievedUserProfile = SW.StateStoring.get('userProfile');
    console.log(retrievedUserProfile); // Output: { name: 'Alice', email: 'alice@example.com', preferences: { theme: 'dark', notifications: true } }

    // Set an array value
    const favoriteColors = ['blue', 'red', 'green'];
    SW.StateStoring.set('favoriteColors', favoriteColors);

    // Get the array value
    const retrievedFavoriteColors = SW.StateStoring.get('favoriteColors');
    console.log(retrievedFavoriteColors); // Output: ['blue', 'red', 'green']

    // Set a value without workspace ID
    SW.StateStoring.set('currentProject', 'project1', false);

    // Get the value with workspace ID
    const currentProject = SW.StateStoring.get('currentProject', false);
    console.log(currentProject); // Output: 'project1' (assuming the current workspace ID is associated with 'project1')

    // Set a value as Department ID
    SW.StateStoring.set('DepartmentId', '917e716e-08a8-43fa-931b-a45e00301751', false);

    // Get the value for Department ID
    const storedDepartmentId = SW.StateStoring.get('DepartmentId', false);
    console.log(storedDepartmentId); // Output: '917e716e-08a8-43fa-931b-a45e00301751'
```