---
id: store
title: " "
sidebar_label: Store
---

# Store

With this namespace, you can quickly provide methods to manipulate the data store.

The namespace Store provides to developers, methods to easily batch, delete, filter, get, insert, load, refresh and update data from the store.

```javascript
//accessing to Store methods
SW.Store.{methodName}
```

---

## batch

#### Description

This method can be used to insert, delete or update a data source in the store.

#### Method(s)

```javascript
1   declare function batch(dataSourceName: string, data: IDashboardStoreBatchUpdate, senderId: any): Promise<any>;
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
            <td><code>dataSourceName</code></td>
            <td>string</td>
            <td>true</td>
            <td></td>
            <td>Data source name</td>
        </tr>
         <tr className="selected">
            <td><code>data</code></td>
            <td>IDashboardStoreBatchUpdate</td>
            <td>true</td>
            <td></td>
            <td>Operation and data to be modified</td>
        </tr>
        <tr className="selected">
            <td><code>senderId</code></td>
            <td>any</td>
            <td>false</td>
            <td></td>
            <td>Sender id</td>
        </tr>
    </tbody>
</table>

#### Basic Usage

```javascript
SW.Store.batch('dataSourceName', {insert: ['newRow']});
SW.Store.batch('dataSourceName', {update: [{ row:{id: 'rowId', value: 'rowValue'}, data: 'rowData'}]});
SW.Store.batch('dataSourceName', {delete: [{id: 'rowId', value: 'rowValue'}]});
```

---

## delete

#### Description

This method can be used to delete a row in a data source.

#### Method(s)

```javascript
1   declare function delete(dataSourceName: string, rowId: IDashboardStoreRow, senderId): Promise<any>;
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
            <td><code>dataSourceName</code></td>
            <td>string</td>
            <td>true</td>
            <td></td>
            <td>Data source name</td>
        </tr>
         <tr className="selected">
            <td><code>rowId</code></td>
            <td>IDashboardStoreRow</td>
            <td>true</td>
            <td></td>
            <td>Row to delete</td>
        </tr>
        <tr className="selected">
            <td><code>senderId</code></td>
            <td>any</td>
            <td>false</td>
            <td></td>
            <td>Sender id</td>
        </tr>
    </tbody>
</table>

#### Basic Usage

```javascript
SW.Store.delete('dataSourceName', {id: 'rowId', value: 'rowValue'});
```

---

## filter

#### Description

This method can be used to filter a data source from the store.

#### Method(s)

```javascript
1   declare function filter(filters: DashboardStoreFilters, senderId = ""): void;
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
            <td><code>filters</code></td>
            <td>DashboardStoreFilters</td>
            <td>true</td>
            <td></td>
            <td>Filters to apply</td>
        </tr>
        <tr className="selected">
            <td><code>senderId</code></td>
            <td>any</td>
            <td>false</td>
            <td></td>
            <td>Sender id</td>
        </tr>
    </tbody>
</table>

#### Basic Usage

```javascript
SW.Store.filter({'dataSourceName': [{id: 'rowsId' , value: 'rowsValue'}]});
```

---

## get

#### Description

This method can be used to get a row in a data source.

#### Method(s)

```javascript
1   declare function get(dataSourceName: string, rowId: IDashboardStoreRow, dashboardDefinitionId: string): Promise<any>;
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
            <td><code>dataSourceName</code></td>
            <td>string</td>
            <td>true</td>
            <td></td>
            <td>Data source name</td>
        </tr>
         <tr className="selected">
            <td><code>rowId</code></td>
            <td>IDashboardStoreRow</td>
            <td>true</td>
            <td></td>
            <td>Row to get</td>
        </tr>
        <tr className="selected">
            <td><code>dashboardDefinitionId</code></td>
            <td>string</td>
            <td>false</td>
            <td></td>
            <td>Workspace id</td>
        </tr>
    </tbody>
</table>

#### Basic Usage

```javascript
SW.Store.get('dataSourceName', {id: 'rowId', value: 'rowValue'});
```

---

## insert

#### Description

This method can be used to insert a row in a data source.

#### Method(s)

```javascript
1   declare function insert(dataSourceName: string, rowData: any, senderId): Promise<any>;
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
            <td><code>dataSourceName</code></td>
            <td>string</td>
            <td>true</td>
            <td></td>
            <td>Data source name</td>
        </tr>
         <tr className="selected">
            <td><code>rowData</code></td>
            <td>any</td>
            <td>true</td>
            <td></td>
            <td>New row data</td>
        </tr>
        <tr className="selected">
            <td><code>senderId</code></td>
            <td>any</td>
            <td>false</td>
            <td></td>
            <td>Sender id</td>
        </tr>
    </tbody>
</table>

#### Basic Usage

```javascript
SW.Store.insert('dataSourceName', {'rowData'});
```

---

## load

#### Description

This method can be used to load more than one data source.

#### Method(s)

```javascript
1   declare function load(dataSourceNames?: string[], filters?: DashboardFilter[], senderId?: string): Promise<any>;
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
            <td><code>dataSourceName</code></td>
            <td>string[]</td>
            <td>false</td>
            <td></td>
            <td>Data sources name</td>
        </tr>
         <tr className="selected">
            <td><code>filters</code></td>
            <td>DashboardFilter[]</td>
            <td>false</td>
            <td></td>
            <td>Filters to apply</td>
        </tr>
        <tr className="selected">
            <td><code>senderId</code></td>
            <td>string</td>
            <td>false</td>
            <td></td>
            <td>Sender id</td>
        </tr>
    </tbody>
</table>

#### Basic Usage

```javascript
SW.Store.load(['dataSourceName'], [{Name: 'FilterName', Value: 'FilterValue'}]);
```

---

## refresh

#### Description

This method can be used to refresh a row from a data source.

#### Method(s)

```javascript
1   declare function refresh(dataSourceName: string, rowId: { id: string; value: any }, senderId): Promise<any>;
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
            <td><code>dataSourceName</code></td>
            <td>string</td>
            <td>true</td>
            <td></td>
            <td>Data source name</td>
        </tr>
         <tr className="selected">
            <td><code>rowId</code></td>
            <td>IDashboardStoreRow</td>
            <td>true</td>
            <td></td>
            <td>Row to refresh</td>
        </tr>
        <tr className="selected">
            <td><code>senderId</code></td>
            <td>any</td>
            <td>false</td>
            <td></td>
            <td>Sender id</td>
        </tr>
    </tbody>
</table>

#### Basic Usage

```javascript
SW.Store.refresh('dataSourceName', {id: 'rowId', value: 'rowValue'});
```

---

## update

#### Description

This method can be used to update a row from a data source.

#### Method(s)

```javascript
1   declare function update(dataSourceName: string, rowId: { id: string; value: any }, rowData: any, senderId): Promise<any>;
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
            <td><code>dataSourceName</code></td>
            <td>string</td>
            <td>true</td>
            <td></td>
            <td>Data source name</td>
        </tr>
         <tr className="selected">
            <td><code>rowId</code></td>
            <td>IDashboardStoreRow</td>
            <td>true</td>
            <td></td>
            <td>Row to update</td>
        </tr>
        <tr className="selected">
            <td><code>rowData</code></td>
            <td>any</td>
            <td>true</td>
            <td></td>
            <td>Row's new data</td>
        </tr>
        <tr className="selected">
            <td><code>senderId</code></td>
            <td>any</td>
            <td>false</td>
            <td></td>
            <td>Sender id</td>
        </tr>
    </tbody>
</table>

#### Basic Usage

```javascript
SW.Store.update('dataSourceName', {id: 'rowId', value: 'rowValue'}, {'newData'});
```