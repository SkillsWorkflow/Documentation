---
id:  service-notification
title: Notification
sidebar_label: Notification
---

A sub namespace of Service, exclusive for notification operations

```javascript
//accessing to service.notification methods
SW.Service.Notification.{methodName}
```

---

## get

#### Description

This method can be used to get notifications (paginated). `getAll` remains available as an alias for backward compatibility.

#### Method(s)

```js
1   function get(params: {
2       skip: number,
3       take: number,
4       filter: string,
5       includeRead: boolean
6   } = {
7       skip: 0, 
8       take: 20,
9       filter:  "",
10      includeRead: true
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
            <td>Number of records to skip (pagination offset)</td>
        </tr>
        <tr className="selected">
            <td><code>take</code></td>
            <td>number</td>
            <td>false</td>
            <td>20</td>
            <td>Number of records to return (page size)</td>
        </tr>
        <tr className="selected">
            <td><code>filter</code></td>
            <td>string</td>
            <td>false</td>
            <td>""</td>
            <td>Search text</td>
        </tr>
        <tr className="selected">
            <td><code>includeRead</code></td>
            <td>boolean</td>
            <td>false</td>
            <td>true</td>
            <td>Include already read notifications</td>
        </tr>
    </tbody>
</table>

#### Basic Usage

```javascript
SW.Service.Notification.get();
```

---

## getGroupedByDocument

#### Description

This method can be used to get notifications grouped by document.

#### Method(s)

```js
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
            <td>false</td>
            <td>0</td>
            <td>Number of records to skip (pagination offset)</td>
        </tr>
        <tr className="selected">
            <td><code>take</code></td>
            <td>number</td>
            <td>false</td>
            <td>20</td>
            <td>Number of groups to return</td>
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

```js
1   function getUnreadCounter(): Promise<number> 
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

```js
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
            <td>Mark as read until this date</td>
        </tr>
    </tbody>
</table>

#### Basic Usage

```javascript
SW.Service.Notification.markAsRead(new Date());
```

---

## markAsReadByDocument

#### Description

This method can be used to mark notifications as read from a given document.

#### Method(s)

```js
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

## send

#### Description

This method can be used to send a new notification.

#### Method(s)

```js
1   function send(text: string, documentTypeName: string, documentId: string, userIdsToNotify: string[]): Promise<any>
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
SW.Service.Notification.send('New notification text', 'Deliverable', 'jobId', ['userId', 'userId']);
```

---

## sendToBrowser

#### Description

This method can be used to display a browser notification directly in the UI.

#### Method(s)

```js
1   function sendToBrowser(browserNotification: Interface.BrowserNotification): void
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
            <td><code>browserNotification</code></td>
            <td>Interface.BrowserNotification</td>
            <td>true</td>
            <td></td>
            <td>Browser-compatible notification payload</td>
        </tr>
    </tbody>
</table>

#### Basic Usage

```javascript
SW.Service.Notification.sendToBrowser({
  title: 'Workflow Alert',
  message: 'Your proof is ready for review.'
});
```