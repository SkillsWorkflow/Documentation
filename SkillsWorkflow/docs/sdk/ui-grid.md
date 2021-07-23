---
id:  ui-grid
title: ' '
sidebar_label: Grid
---

# Grid

A sub namespace of UI, exclusive for grid properties

## expandCollapseRows

### Description

This method can be used inside any workspace. To expand or collapse specified Grid rows.

### Method(s)

```javascript
1 function expandCollapseRows(dataGrid: dxDataGrid, params?: 
2   {expandPriority?: boolean} = {expandPriority: true}): void;
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
            <td><code>dataGrid</code></td>
            <td>dxDataGrid</td>
            <td>true</td>
            <td></td>
            <td>The target dataGrid whose rows are going to be expanded or collapsed</td> 
        </tr>
         <tr className="selected">
            <td><code>expandPriority</code></td>
            <td>Boolean</td>
            <td>false</td>
            <td>true</td>
            <td>Flag to set if the rows are to expanded or collapsed instead</td> 
        </tr>
    </tbody>
</table>

### Basic Usage

```javascript
>    SW.UI.grid.expandCollapseRow("dataGrid");
```
### Response

---

## calculatePercentageSummary

### Description

This method can be used inside any workspace. To expand or collapse specified Grid rows.

### Method(s)

```js {3}
1 function calculatePercentageSummary(options: any, dividend: number[], 
2       diviser[]: number[]): void;
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
            <td><code>options</code></td>
            <td>Any</td>
            <td>true</td>
            <td></td>
            <td>The target dataGrid whose rows are going to be expanded or collapsed</td> 
        </tr>
         <tr className="selected">
            <td><code>dividend</code></td>
            <td>Number</td>
            <td>true</td>
            <td></td>
            <td>Flag to set if the rows are to expanded or collapsed instead</td> 
        </tr>
         <tr className="selected">
            <td><code>divisor</code></td>
            <td>Number</td>
            <td>true</td>
            <td></td>
            <td>Flag to set if the rows are to expanded or collapsed instead</td> 
        </tr>
    </tbody>
</table>

### Basic Usage

```javascript
>    SW.UI.grid.calculatePercentageSummary(options: any, dividend: number[], 
        diviser[]: number[]): void;
```
### Response

<!-- <img alt="Show Bulk" src="/img/responses/showBulk_response.png"> -->
![img-with-border](/img/responses/showBulk_response.png)

---

## addToolbarButtons

### Description

This method can be used inside any workspace. To expand or collapse specified Grid rows.
### Method(s)

```js {3}
1 function addToolbarButtons(toolbarEvent: any, buttonsList: Button[]): void;
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
            <td><code>toolbarEvent</code></td>
            <td>Any</td>
            <td>true</td>
            <td></td>
            <td>The target dataGrid whose rows are going to be expanded or collapsed</td> 
        </tr>
         <tr className="selected">
            <td><code>buttonsList</code></td>
            <td>Button</td>
            <td>true</td>
            <td></td>
            <td>Flag to set if the rows are to expanded or collapsed instead</td> 
        </tr>
    </tbody>
</table>

### Basic Usage

```javascript
>    SW.UI.grid.addToolbarButtons(toolbarEvent, buttonsList);
```
### Response

---

## importExcel

### Description

This method can be used inside any workspace. To expand or collapse specified Grid rows.

### Method(s)

```js {3}
1 function importExcel(fileUpload: any, grid: DxDataGridComponent): void;
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
            <td><code>fileUpload</code></td>
            <td>Any</td>
            <td>true</td>
            <td></td>
            <td>The target dataGrid whose rows are going to be expanded or collapsed</td> 
        </tr>
         <tr className="selected">
            <td><code>grid</code></td>
            <td>DxDataGridComponent</td>
            <td>true</td>
            <td></td>
            <td>Flag to set if the rows are to expanded or collapsed instead</td> 
        </tr>
    </tbody>
</table>

### Basic Usage

```javascript
>    SW.UI.grid.importExcel(file, grid);
```
### Response

---




## delete

### Description

This method can be used inside any workspace. To expand or collapse specified Grid rows.

### Method(s)

```js {3}
1 function delete(documentName: string, dataGrid: dxDataGrid, params?: 
2   {idField?: string} = {}): void;
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
            <td><code>documentName</code></td>
            <td>String</td>
            <td>true</td>
            <td></td>
            <td>The target dataGrid whose rows are going to be expanded or collapsed</td> 
        </tr>
         <tr className="selected">
            <td><code>dataGrid</code></td>
            <td>dxDataGrid</td>
            <td>true</td>
            <td></td>
            <td>Deveextreme dataGrid</td> 
        </tr>
         <tr className="selected">
            <td><code>idField</code></td>
            <td>DxDataGridComponent</td>
            <td>false</td>
            <td></td>
            <td>field id</td> 
        </tr>
    </tbody>
</table>

### Basic Usage

```javascript
>    SW.UI.grid.delete("company", dataGrid);
```
### Response