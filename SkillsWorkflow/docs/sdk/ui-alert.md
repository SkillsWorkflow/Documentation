---
id:  ui-alert
title: ' '
sidebar_label: Alert
---

# Alert

A sub namespace of UI, exclusive for alert operations

```javascript
//accessing to ui.alert methods
SW.UI.Alert.{methodName}
```

---

## clear

#### Description

This method can be used to clear a toastr that is being displayed.

#### Method(s)

```js {3}
1 function clear(): void
```

#### Basic Usage

```javascript
SW.UI.Alert.clear(),
```

---

## error

#### Description

This method can be used to show a Error toastr in the window and also in the console.
#### Method(s)

```js {3}
1   function error(
2       response: string | HttpErrorResponse,
3       params: {
4           documentName?: DocumentName,
5           userName?: string,
6           userId?: string,
7           onClick?: Function
8       } = {}
9   ): void
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
            <td><code>response</code></td>
            <td>string | HttpErrorResponse</td>
            <td>true</td>
            <td></td>
            <td>The message to be displayed in the alert</td>
        </tr>
        <tr className="selected">
            <td><code>documentName</code></td>
            <td>DocumentName</td>
            <td>false</td>
            <td></td>
            <td>Document name</td>
        </tr>
        <tr className="selected">
            <td><code>userName</code></td>
            <td>string</td>
            <td>false</td>
            <td></td>
            <td>User's name</td>
        </tr>
        <tr className="selected">
            <td><code>userId</code></td>
            <td>string</td>
            <td>false</td>
            <td></td>
            <td>User's id</td>
        </tr>
        <tr className="selected">
            <td><code>onClick</code></td>
            <td>Function</td>
            <td>false</td>
            <td></td>
            <td>Function executed when toastr is clicked</td>
        </tr>
    </tbody>
</table>

#### Basic Usage

```javascript
SW.UI.Alert.error("Toast error");
```
#### Response

![img](/img/responses/alertError_response.png)

---

## info

#### Description

This method can be used to show a Info toastr in the window and also in the console.

#### Method(s)

```js {3}
1 function info(message: string,
2       params: {
3           documentName?: DocumentName,
4           userName?: string,
5           userId?: string,
6           onClick?: Function
7       } = {}
8   ): void
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
            <td><code>message</code></td>
            <td>string</td>
            <td>true</td>
            <td></td>
            <td>The message to be displayed in the alert</td>
        </tr>
        <tr className="selected">
            <td><code>documentName</code></td>
            <td>DocumentName</td>
            <td>false</td>
            <td></td>
            <td>Document name</td>
        </tr>
        <tr className="selected">
            <td><code>userName</code></td>
            <td>string</td>
            <td>false</td>
            <td></td>
            <td>User's name</td>
        </tr>
        <tr className="selected">
            <td><code>userId</code></td>
            <td>string</td>
            <td>false</td>
            <td></td>
            <td>User's id</td>
        </tr>
        <tr className="selected">
            <td><code>onClick</code></td>
            <td>Function</td>
            <td>false</td>
            <td></td>
            <td>Function executed when toastr is clicked</td>
        </tr>
    </tbody>
</table>

#### Basic Usage

```javascript
SW.UI.Alert.info("Toast info");
```
#### Response

![img](/img/responses/alertInfo_response.png)

---

## success

#### Description

This method can be used to show a Success toastr in the window and also in the console.

#### Method(s)

```js {3}
1   function success(
2       message: string,
3       params: {
4           documentName?: DocumentName,
5           userName?: string,
6           userId?: string,
7           onClick?: Function
8       } = {}
9   ): void
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
            <td><code>message</code></td>
            <td>string</td>
            <td>true</td>
            <td></td>
            <td>The message to be displayed in the alert</td>
        </tr>
        <tr className="selected">
            <td><code>documentName</code></td>
            <td>DocumentName</td>
            <td>false</td>
            <td></td>
            <td>Document name</td>
        </tr>
        <tr className="selected">
            <td><code>userName</code></td>
            <td>string</td>
            <td>false</td>
            <td></td>
            <td>User's name</td>
        </tr>
        <tr className="selected">
            <td><code>userId</code></td>
            <td>string</td>
            <td>false</td>
            <td></td>
            <td>User's id</td>
        </tr>
        <tr className="selected">
            <td><code>onClick</code></td>
            <td>Function</td>
            <td>false</td>
            <td></td>
            <td>Function executed when toastr is clicked</td>
        </tr>
    </tbody>
</table>

#### Basic Usage

```javascript
SW.UI.Alert.success("Toast success");
```
#### Response

![img](/img/responses/alertSuccess_response.png)

---

## warning

#### Description

This method can be used to show a Warning toastr ine the window and also in the console.
#### Method(s)

```js {3}
1   function warning(message: string,
2       params: {
3           documentName?: DocumentName,
4           userName?: string,
5           userId?: string,
6           onClick?: Function,
7           timeOut?: number
8       } = {
9           timeOut: this.DEFAULT_TIMEOUT
10      }
11  ): void
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
            <td><code>message</code></td>
            <td>string</td>
            <td>true</td>
            <td></td>
            <td>The message to be displayed in the alert</td>
        </tr>
        <tr className="selected">
            <td><code>documentName</code></td>
            <td>DocumentName</td>
            <td>false</td>
            <td></td>
            <td>Document name</td>
        </tr>
        <tr className="selected">
            <td><code>userName</code></td>
            <td>string</td>
            <td>false</td>
            <td></td>
            <td>User's name</td>
        </tr>
        <tr className="selected">
            <td><code>userId</code></td>
            <td>string</td>
            <td>false</td>
            <td></td>
            <td>User's id</td>
        </tr>
        <tr className="selected">
            <td><code>onClick</code></td>
            <td>Function</td>
            <td>false</td>
            <td></td>
            <td>Function executed when toastr is clicked</td>
        </tr>
        <tr className="selected">
            <td><code>timeOut</code></td>
            <td>number</td>
            <td>false</td>
            <td>5500</td>
            <td>Display time of the toastr</td>
        </tr>
    </tbody>
</table>

#### Basic Usage

```javascript
SW.UI.Alert.warning("User field is required");
```
#### Response

![img](/img/responses/alertWarning_response.png)