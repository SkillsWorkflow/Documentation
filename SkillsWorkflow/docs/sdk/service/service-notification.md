---
id:  service-notification
title: ' '
sidebar_label: Notification
---

# Notification

A sub namespace of Service, exclusive for notification operations

```javascript
//accessing to service.notification methods
SW.UI.Notification.{methodName}
```

---

## getAll

#### Description

This method can be used to get all notifications.

#### Method(s)

```js {3}
1   function getAll(params: {
2       skip: number,
3       take: number,
4       filter: string,
5       withAlreadyReadAlso: boolean
6   } = {
7       skip: 0, 
8       take: 20,
9       filter:  "",
10      withAlreadyReadAlso: true
11  }): Promise<NotificationPagedList>
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
            <td><code>skip</code></td>
            <td>number</td>
            <td>false</td>
            <td>0</td>
            <td></td>
        </tr>
        <tr className="selected">
            <td><code>take</code></td>
            <td>number</td>
            <td>false</td>
            <td>20</td>
            <td></td>
        </tr>
        <tr className="selected">
            <td><code>filter</code></td>
            <td>string</td>
            <td>false</td>
            <td>""</td>
            <td>Search name</td>
        </tr>
        <tr className="selected">
            <td><code>withAlreadyReadAlso</code></td>
            <td>boolean</td>
            <td>false</td>
            <td>true</td>
            <td>Get allready read notifications</td>
        </tr>
    </tbody>
</table>

#### Basic Usage

```javascript
SW.Service.Notification.getAll();
```

---

## getGroupedByDocument

#### Description

This method can be used to get all notifications grouped by document.

#### Method(s)

```js {3}
1   function getGroupedByDocument(params: {
2       skip: number,
3       take: number
4   } = {
5       skip: 0, 
6       take: 20
7   }): Promise<Notification[]>
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
            <td><code>skip</code></td>
            <td>number</td>
            <td>true</td>
            <td>0</td>
            <td></td>
        </tr>
        <tr className="selected">
            <td><code>take</code></td>
            <td>number</td>
            <td>true</td>
            <td>20</td>
            <td></td>
        </tr>
    </tbody>
</table>

#### Basic Usage

```javascript
SW.Service.Notification.getGroupedByDocument();
```

---

## getUnreadCounter

#### Description

This method can be used to get the number of unread notifications.

#### Method(s)

```js {3}
1   function getUnreadCounter(): Promise<NotificationPagedList> 
```

#### Basic Usage

```javascript
SW.Service.Notification.getUnreadCounter();
```

---

## markAsRead

#### Description

This method can be used to mark notifications as read until a given date.

#### Method(s)

```js {3}
1   function markAsRead(untilDate: Date): Promise<any>
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
            <td><code>untilDate</code></td>
            <td>Date</td>
            <td>true</td>
            <td></td>
            <td>Mark as read until this date.</td>
        </tr>
    </tbody>
</table>

#### Basic Usage

```javascript
SW.Service.Notification.markAsRead('Mon Feb 21 2022 10:00:00 GMT+0000 (Western European Standard Time)');
```

---

## markAsReadByDocument

#### Description

This method can be used to mark notifications as read from a given document.

#### Method(s)

```js {3}
1   function markAsReadByDocument(objectId: string, objectType: string): Promise<any>
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
            <td><code>objectId</code></td>
            <td>string</td>
            <td>true</td>
            <td></td>
            <td>Document id</td>
        </tr>
        <tr className="selected">
            <td><code>objectType</code></td>
            <td>string</td>
            <td>true</td>
            <td></td>
            <td>Document name</td>
        </tr>
    </tbody>
</table>

#### Basic Usage

```javascript
SW.Service.Notification.markAsReadByDocument('jobId', 'job');
```

---

## post

#### Description

This method can be used to send a new notification.

#### Method(s)

```js {3}
1   function post(text: string, documentTypeName: string, documentId: string, userIdsToNotify: string[]): Promise<any>
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
            <td><code>text</code></td>
            <td>string</td>
            <td>true</td>
            <td></td>
            <td>Notification text</td>
        </tr>
        <tr className="selected">
            <td><code>documentTypeName</code></td>
            <td>string</td>
            <td>true</td>
            <td></td>
            <td>Document name</td>
        </tr>
        <tr className="selected">
            <td><code>documentId</code></td>
            <td>string</td>
            <td>true</td>
            <td></td>
            <td>Document id</td>
        </tr>
        <tr className="selected">
            <td><code>userIdsToNotify</code></td>
            <td>string[]</td>
            <td>true</td>
            <td></td>
            <td>Users to receive the notification</td>
        </tr>
    </tbody>
</table>

#### Basic Usage

```javascript
SW.Service.Notification.post('New notification text', 'Deliverable', 'jobId', ['userId, userId']);
```