---
id:  ui-grid
title: ' '
sidebar_label: Grid
---

# Grid

A sub namespace of UI, exclusive for grid operations

```javascript
//accessing to ui.grid methods
SW.UI.Grid.{methodName}
```

---

## addToolbarButtons

#### Description

This method can be to add buttons in the grid toolbar.

#### Method(s)

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
            <td>any</td>
            <td>true</td>
            <td></td>
            <td>The target dataGrid</td> 
        </tr>
         <tr className="selected">
            <td><code>buttonsList</code></td>
            <td>Button</td>
            <td>true</td>
            <td></td>
            <td>Buttons to add</td> 
        </tr>
    </tbody>
</table>

#### Basic Usage

```javascript
>    SW.UI.Grid.addToolbarButtons(toolbarEvent, buttonsList);
```

---

## calculatePercentageSummary

#### Description

This method can be used to calculate summaries with percentages.

#### Method(s)

```js {3}
1 function calculatePercentageSummary(options: any, dividend: number[], divisor: number[]): void
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
            <td>any</td>
            <td>true</td>
            <td></td>
            <td>Summary options</td> 
        </tr>
         <tr className="selected">
            <td><code>dividend</code></td>
            <td>number[]</td>
            <td>true</td>
            <td></td>
            <td>Array of dividends</td> 
        </tr>
         <tr className="selected">
            <td><code>divisor</code></td>
            <td>number[]</td>
            <td>true</td>
            <td></td>
            <td>Array of divisors</td> 
        </tr>
    </tbody>
</table>

#### Basic Usage

```javascript
>    SW.UI.Grid.calculatePercentageSummary(options, [1,2,3], [4,5,6]);
```
#### Response

---

## delete

#### Description

This method can be used to delete grid rows.

#### Method(s)

```js {3}
1 function delete(documentName: string, dataGrid: dxDataGrid, params: { idField?: string } = {}): void 
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
            <td>string</td>
            <td>true</td>
            <td></td>
            <td>Document name</td> 
        </tr>
         <tr className="selected">
            <td><code>dataGrid</code></td>
            <td>dxDataGrid</td>
            <td>true</td>
            <td></td>
            <td>Target datagrid</td> 
        </tr>
         <tr className="selected">
            <td><code>idField</code></td>
            <td>string</td>
            <td>false</td>
            <td></td>
            <td>Field to delete</td> 
        </tr>
    </tbody>
</table>

#### Basic Usage

```javascript
>    SW.UI.Grid.delete("company", dataGrid);
```

---

## expandCollapseRows

#### Description

This method can be used inside any workspace. To expand or collapse specified Grid rows.

#### Method(s)

```javascript
1   function expandCollapseRows(dataGrid: dxDataGrid,
2       params: { 
3           expandPriority?: boolean 
4       } = { 
5           expandPriority: true 
6       }
7   ): void 
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
            <td>Target datagrid</td> 
        </tr>
         <tr className="selected">
            <td><code>expandPriority</code></td>
            <td>boolean</td>
            <td>false</td>
            <td>true</td>
            <td>Flag to set if the rows are to expanded or collapsed instead</td> 
        </tr>
    </tbody>
</table>

#### Basic Usage

```javascript
>    SW.UI.grid.expandCollapseRow(dataGrid.component);
```

#### Response

---

## importExcel

#### Description

This method can be used to import a xlsx file into a datagrid.

#### Method(s)

```js {3}
1 function importExcel(fileUpload: any, grid: dxDataGrid): void;
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
            <td>any</td>
            <td>true</td>
            <td></td>
            <td>File to be uploaded</td> 
        </tr>
         <tr className="selected">
            <td><code>dataGrid</code></td>
            <td>dxDataGrid</td>
            <td>true</td>
            <td></td>
            <td>Target datagrid</td> 
        </tr>
    </tbody>
</table>

#### Basic Usage

```javascript
>    SW.UI.grid.importExcel(file, grid);
```