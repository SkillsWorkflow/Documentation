---
id:  ui-alert
title: ' '
sidebar_label: Alert
---

## info

###Description

This method can be used inside any workspace. Shows a Info toastr and also in the console

###Method(s)

```js {3}
1 function info(message: string, type: SystemNames = null,
2   userName: string = null, userId: string = null, callbackClick: any = null);
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
            <td><code>type</code></td>
            <td>SystemNames</td>
            <td>true</td>
            <td>null</td>
            <td>To style the alert according to the system name passed</td>
        </tr>
        <tr className="selected">
            <td><code>userName</code></td>
            <td>string</td>
            <td>true</td>
            <td>null</td>
            <td>User's name</td>
        </tr>
        <tr className="selected">
            <td><code>userId</code></td>
            <td>string</td>
            <td>true</td>
            <td>null</td>
            <td>User's id to get image</td>
        </tr>
        <tr className="selected">
            <td><code>callbackClick</code></td>
            <td>any</td>
            <td>false</td>
            <td>null</td>
            <td>callback function</td>
        </tr>
    </tbody>
</table>

###Basic Usage

```javascript
>    SW.UI.alert.info("Toast info");
```
###Response

![img](/img/responses/alertInfo_response.png)

---

## warning

###Description

This method can be used inside any workspace. Shows a Warning toastr and also in the console
###Method(s)

```js {3}
1 function warning(message: string, type: SystemNames = null, 
2   userName: string = null, userId: string = null, callbackClick: any = null, 
3   timeOut: number = 5500);
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
            <td><code>type</code></td>
            <td>SystemNames</td>
            <td>true</td>
            <td>null</td>
            <td>To style the alert according to the system name passed</td>
        </tr>
        <tr className="selected">
            <td><code>userName</code></td>
            <td>string</td>
            <td>true</td>
            <td>null</td>
            <td>User's name</td>
        </tr>
        <tr className="selected">
            <td><code>userId</code></td>
            <td>string</td>
            <td>true</td>
            <td>null</td>
            <td>User's id to get image</td>
        </tr>
        <tr className="selected">
            <td><code>callbackClick</code></td>
            <td>any</td>
            <td>false</td>
            <td>null</td>
            <td>callback function</td>
        </tr>
        <tr className="selected">
            <td><code>timeOut</code></td>
            <td>number</td>
            <td>false</td>
            <td>5500</td>
            <td></td>
        </tr>
    </tbody>
</table>

###Basic Usage

```javascript
>    SW.UI.alert.warning("User fields is required");
```
###Response

![img](/img/responses/alertWarning_response.png)

---

## success

###Description

This method can be used inside any workspace. Shows a Success toastr and also in the console
###Method(s)

```js {3}
1 function success(message: string, type: SystemNames = null,
2       userName: string = null, userId: string = null,
3       callbackClick: any = null, timeOut: number = 5500);
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
            <td><code>type</code></td>
            <td>SystemNames</td>
            <td>true</td>
            <td>null</td>
            <td>To style the alert according to the system name passed</td>
        </tr>
        <tr className="selected">
            <td><code>userName</code></td>
            <td>string</td>
            <td>true</td>
            <td>null</td>
            <td>User's name</td>
        </tr>
        <tr className="selected">
            <td><code>userId</code></td>
            <td>string</td>
            <td>true</td>
            <td>null</td>
            <td>User's id to get image</td>
        </tr>
        <tr className="selected">
            <td><code>callbackClick</code></td>
            <td>any</td>
            <td>false</td>
            <td>null</td>
            <td>callback function</td>
        </tr>
    </tbody>
</table>

###Basic Usage

```javascript
>    SW.UI.alert.success("Toast success");
```
###Response

![img](/img/responses/alertSuccess_response.png)

---

## error

###Description

This method can be used inside any workspace. Shows a Error toastr and also in the console
###Method(s)

```js {3}
1 function error(message: string, type: SystemNames = null, 
2   userName: string = null, userId: string = null, callbackClick: any = null, 
3   timeOut: number = 5500);
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
            <td></td>
        </tr>
        <tr className="selected">
            <td><code>type</code></td>
            <td>SystemNames</td>
            <td>true</td>
            <td>null</td>
            <td>To style the alert according to the system name passed</td>
        </tr>
        <tr className="selected">
            <td><code>userName</code></td>
            <td>string</td>
            <td>true</td>
            <td>null</td>
            <td>User's name</td>
        </tr>
        <tr className="selected">
            <td><code>userId</code></td>
            <td>string</td>
            <td>true</td>
            <td>null</td>
            <td>User's id to get image</td>
        </tr>
        <tr className="selected">
            <td><code>callbackClick</code></td>
            <td>any</td>
            <td>false</td>
            <td>null</td>
            <td>callback function</td>
        </tr>
    </tbody>
</table>

###Basic Usage

```javascript
>    SW.UI.alert.error("Toast error");
```
###Response

![img](/img/responses/alertError_response.png)

---

## clear

###Description

This method can be used inside any workspace. Clear specific toastr
###Method(s)

```js {3}
1 function clear(message: string, type: SystemNames = null, 
2   userName: string = null, userId: string = null, callbackClick: any = null);
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
            <td><code>type</code></td>
            <td>SystemNames</td>
            <td>true</td>
            <td>null</td>
            <td>To style the alert according to the system name passed</td>
        </tr>
        <tr className="selected">
            <td><code>userName</code></td>
            <td>string</td>
            <td>true</td>
            <td>null</td>
            <td>User's name</td>
        </tr>
        <tr className="selected">
            <td><code>userId</code></td>
            <td>string</td>
            <td>true</td>
            <td>null</td>
            <td>User's id to get image</td>
        </tr>
        <tr className="selected">
            <td><code>callbackClick</code></td>
            <td>any</td>
            <td>false</td>
            <td>null</td>
            <td>callback function</td>
        </tr>
    </tbody>
</table>

###Basic Usage

```javascript
>    SW.UI.alert.clear("Toast clear"),
```