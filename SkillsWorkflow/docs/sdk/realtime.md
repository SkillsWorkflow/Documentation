---
id: realtime
title: " "
sidebar_label: Realtime
---

# Realtime

With this namespace, you can quickly provide methods to manipulate live updates.

The namespace Realtime provides to developers, methods to easily subscribe, unsubscribe, save subscriptions and get subscriptions from documents.

```javascript
//accessing to Realtime methods
SW.Realtime.{methodName}
```

---

## getCurrentSubscriptions

#### Description

This method can be used to get the all current subscriptions.

#### Method(s)

```javascript
1   declare function getCurrentSubscriptions(): {[key: string]: DocumentSubscription[]};
```

#### Basic Usage

```javascript
SW.Realtime.getCurrentSubscriptions();
```

---

## getDocumentComponentSubscription

#### Description

This method can be used to get a document subscription and the component.

#### Method(s)

```javascript
1   declare function getDocumentComponentSubscription(documentType: string, documentId: string, component: any)): DocumentComponentSubscription;
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
            <td><code>documentType</code></td>
            <td>string</td>
            <td>true</td>
            <td></td>
            <td>Document type</td>
        </tr>
         <tr className="selected">
            <td><code>documentId</code></td>
            <td>string</td>
            <td>true</td>
            <td></td>
            <td>Document id</td>
        </tr>
        <tr className="selected">
            <td><code>component</code></td>
            <td>any</td>
            <td>true</td>
            <td></td>
            <td>Component where was subscribed</td>
        </tr>
    </tbody>
</table>

#### Basic Usage

```javascript
SW.Realtime.getDocumentComponentSubscription('job', 'jobId', e.component);
```

---

## saveDocumentComponentSubscription

#### Description

This method can be used to save a document subscription and the component.

#### Method(s)

```javascript
1   declare function saveDocumentComponentSubscription(documentType: string, documentId: string, component: any, documentSubscription: DocumentSubscription)): void;
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
            <td><code>documentType</code></td>
            <td>string</td>
            <td>true</td>
            <td></td>
            <td>Document type</td>
        </tr>
         <tr className="selected">
            <td><code>documentId</code></td>
            <td>string</td>
            <td>true</td>
            <td></td>
            <td>Document id</td>
        </tr>
        <tr className="selected">
            <td><code>component</code></td>
            <td>any</td>
            <td>true</td>
            <td></td>
            <td>Component where was subscribed</td>
        </tr>
        <tr className="selected">
            <td><code>documentSubscription</code></td>
            <td>DocumentSubscription</td>
            <td>true</td>
            <td></td>
            <td>The document subscription</td>
        </tr>
    </tbody>
</table>

#### Basic Usage

```javascript
SW.Realtime.saveDocumentComponentSubscription('job', 'jobId', e.component, 
    {
        documentInfo: {
            DocumentId: 'jobId',
            DocumentTypeName: 'job'
        },
        eventsCallbacks: {
            onDocumentUpdated: () => {}
        },
        component: e.component
    }
);
```

---

## subscribeDocuments

#### Description

This method can be used to subscribe documents.

#### Method(s)

```javascript
1   declare function subscribeDocuments(documents: DocumentInfoModel[], eventsCallbacks: EventsCallbacks, component: any): Promise<DocumentSubscription[]>;
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
            <td><code>documents</code></td>
            <td>DocumentInfoModel</td>
            <td>true</td>
            <td></td>
            <td>Documents to subscribe</td>
        </tr>
         <tr className="selected">
            <td><code>eventsCallbacks</code></td>
            <td>EventsCallbacks</td>
            <td>true</td>
            <td></td>
            <td>Callbacks after some events</td>
        </tr>
        <tr className="selected">
            <td><code>component</code></td>
            <td>any</td>
            <td>true</td>
            <td></td>
            <td>Component where is subscribed</td>
        </tr>
    </tbody>
</table>

#### Basic Usage

```javascript
SW.Realtime.subscribeDocuments(
    [{
        DocumentId: 'jobId', 
        DocumentTypeName: 'job'
    }],
    {
        onDocumentUpdated: () => {}
    },
    e.component
);
```

---

## unsubscribeDocuments

#### Description

This method can be used to unsubscribe Documents.

#### Method(s)

```javascript
1   declare function unsubscribeDocuments(documentSubscriptions: DocumentSubscription[]): Promise<any>;
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
            <td><code>documentSubscriptions</code></td>
            <td>DocumentSubscription[]</td>
            <td>true</td>
            <td></td>
            <td>Documents subscriptions</td>
        </tr>
    </tbody>
</table>

#### Basic Usage

```javascript
SW.Realtime.unsubscribeDocuments(
    [{
        documentInfo: {
            DocumentId: 'jobId',
            DocumentTypeName: 'job'
        },
        eventsCallbacks: {
            onDocumentUpdated: () => {}
        },
        component: e.component
    }]
);
```