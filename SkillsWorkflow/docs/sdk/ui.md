---
id: ui
title: " "
sidebar_label: Introduction
---

# User Inteface

With this namespace, you can quickly provide methods to show UI.

The namespace User Interface provides to developers, methods to easily show or validate data.

```javascript
//accessing to utils methods
SW.UI.{methodName}
```

---

## ShowBulk

<h3>Description</h3>

This method can be used inside any workspace. Generates a pop-up to allow editing in bulk

<h3>Method(s)</h3>

```js {3}
1   function showBulk(documentName: string, dataGrid: dxDataGrid, params?: {
2       height?: number, width?: number} = {height: 500, width: 800}): void;
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
            <td>Document's name</td>
        </tr>
         <tr className="selected">
            <td><code>dataGrid</code></td>
            <td>dxDataGrid</td>
            <td>true</td>
            <td></td>
            <td>DataGrid element</td>
        </tr>
        <tr className="selected">
            <td><code>height</code></td>
            <td>Number</td>
            <td>false</td>
            <td></td>
            <td>It sets the new pop-up's height (pixels)</td>
        </tr>
        <tr className="selected">
            <td><code>width</code></td>
            <td>Number</td>
            <td>false</td>
            <td>800</td>
            <td>It sets the new pop-up's width (pixels)</td>
        </tr>
    </tbody>
</table>

<h3>Basic Usage</h3>

```javascript
>    SW.UI.showBulk("Employee", dataGrid);
```

<h3>Response</h3>


![img](/img/responses/showBulk_response.png)

## ShowCreate

<h3>Description</h3>

This method can be used inside any workspace. Adds an add button on top, which calls a creation pop-up styled by the entity passed as parameter.

<h3>Method(s)</h3>

```javascript
1    function showCreate(documentName: string, params?: { height?: number, 
2       width?: number} = {height: 350, width: 800}): void;
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
            <td>Document's name</td>
        </tr>
        <tr className="selected">
            <td><code>height</code></td>
            <td>Number</td>
            <td>false</td>
            <td>350</td>
            <td>It sets the new pop-up's height (pixels)</td>
        </tr>
        <tr className="selected">
            <td><code>width</code></td>
            <td>Number</td>
            <td>false</td>
            <td>800</td>
            <td>It sets the new pop-up's width (pixels)</td>
        </tr>
    </tbody>
</table>

<h3>Basic Usage</h3>

```javascript
>    SW.UI.showCreate("Company");
```

<h3>Response</h3>

```javascript

1       {
2           "status": 200,
3           "data": [
4               {
5                   "id": "uuid-1",
6                   "name": "John Doe",
7                   "externalId": null,
8                   "profileUrl": null,
9                   "email": "johndoe@pubnub.com",
10                  "custom": null,
11                  "updated": "2019-02-20T23:11:20.893755",
12                  "eTag": "MDcyQ0REOTUtNEVBOC00QkY2LTgwOUUtNDkwQzI4MjgzMTcwCg=="
13              }
14          ]
15      }
```

## ShowPopup

<h3>Description</h3>

This method can be used inside any workspace. Creates a pop-up with the specified entity and data.

<h3>Method(s)</h3>

```javascript
1    function showPopup(dashboardTabs: DashboardTab[], params?: { 
2       documentName?: string, data?: any, height?: number, width?: number, 
3       enableScroll?: boolean,title?: string, openInFullScreen?: boolean,
4       hideTabContainer?: boolean, hideSubHeader?: boolean,
5       closeOnOutsideClick?: boolean, onClose?: Function, 
6       buttonsConfiguration?: DashboardButtonsConfiguration } = { 
7       height: 500, width: 800, closeOnOutsideClick: true}): void;

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
            <td><code>dashboardTabs</code></td>
            <td>DashboardTab</td>
            <td>true</td>
            <td></td>
            <td>An array of DashboardTabs</td>
        </tr>
        <tr className="selected">
            <td><code>data</code></td>
            <td>any</td>
            <td>true</td>
            <td>null</td>
            <td>Unspecified parameter</td>
        </tr>
        <tr className="selected">
            <td><code>height</code></td>
            <td>Number</td>
            <td>false</td>
            <td>350</td>
            <td>It sets the pop-up's height (pixels)</td>
        </tr>
        <tr className="selected">
            <td><code>width</code></td>
            <td>Number</td>
            <td>false</td>
            <td>800</td>
            <td>It sets the pop-up's width (pixels)</td>
        </tr>
        <tr className="selected">
            <td><code>enableScroll</code></td>
            <td>Boolean</td>
            <td>false</td>
            <td>false</td>
            <td>To enable scrolling in the pop-up</td>
        </tr>
        <tr className="selected">
            <td><code>title</code></td>
            <td>String</td>
            <td>false</td>
            <td>false</td>
            <td>Pop-up's title</td>
        </tr>
        <tr className="selected">
            <td><code>openInFullScreen </code></td>
            <td>Boolean</td>
            <td>false</td>
            <td>false</td>
            <td>Pop-up open in full screen</td>
        </tr>
        <tr className="selected">
            <td><code>hideTabContainer</code></td>
            <td>Boolean</td>
            <td>false</td>
            <td>false</td>
            <td>To hide sub container</td>
        </tr>
        <tr className="selected">
            <td><code>hideSubHeader  </code></td>
            <td>Boolean</td>
            <td>false</td>
            <td>false</td>
            <td>To hide sub header</td>
        </tr>
        <tr className="selected">
            <td><code>closeOnOutsideClick   </code></td>
            <td>Boolean</td>
            <td>false</td>
            <td>true</td>
            <td>Close pop by clicking outside the pop-up area</td>
        </tr>
        <tr className="selected">
            <td><code>callBacks   </code></td>
            <td>Function</td>
            <td>false</td>
            <td></td>
            <td>Action/Behaviour to be implemented on closing the pop-up</td>
        </tr>
        <tr className="selected">
            <td><code>buttonsConfiguration   </code></td>
            <td>DashboardButtonsConfiguration</td>
            <td>false</td>
            <td></td>
            <td>Enable configuration buttons</td>
        </tr>
    </tbody>
</table>

<h3>Basic Usage</h3>

```javascript
>    SW.UI.showPopup("id", "documentName");
```

<h3>Response</h3>

## ShowPreview

<h3>Description</h3>

This method can be used inside any workspace. Creates a preview pop-up styled by the entity passed as parameter.

<h3>Method(s)</h3>

```javascript
1    function showPreview(documentId: string, documentName: string, params?: {
2    dataGrid?: dxDataGrid, fieldName?: string, height?: number, width?: number, 
3    onSave?: Function; onClose?: Function} = {height: 500, width: 800}): void;
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
            <td><code>documentId</code></td>
            <td>String</td>
            <td>true</td>
            <td></td>
            <td>Unique Identifier</td>
        </tr>
        <tr className="selected">
            <td><code>documentName</code></td>
            <td>String</td>
            <td>true</td>
            <td></td>
            <td>Document's name</td>
        </tr>
        <tr className="selected">
            <td><code>dataGrid</code></td>
            <td>dxDataGrid</td>
            <td>false</td>
            <td></td>
            <td>DataGrid element</td>
        </tr>
        <tr className="selected">
            <td><code>fieldName</code></td>
            <td>string</td>
            <td>false</td>
            <td></td>
            <td>Field's name</td>
        </tr>
        <tr className="selected">
            <td><code>height</code></td>
            <td>Number</td>
            <td>false</td>
            <td>350</td>
            <td>It sets the new pop-up's height (pixels)</td>
        </tr>
        <tr className="selected">
            <td><code>width</code></td>
            <td>Number</td>
            <td>false</td>
            <td>800</td>
            <td>It sets the new pop-up's width (pixels)</td>
        </tr>
        <tr className="selected">
            <td><code>onSave</code></td>
            <td>function</td>
            <td>false</td>
            <td></td>
            <td>Action/Behaviour to be implemented on saving the pop-up</td>
        </tr>
        <tr className="selected">
            <td><code>onClose</code></td>
            <td>function</td>
            <td>false</td>
            <td></td>
            <td>Action/Behaviour to be implemented on closing the pop-up</td>
        </tr>
    </tbody>
</table>

<h3>Basic Usage</h3>

```javascript
>    SW.UI.showPreview("12345", "Company");
```

<h3>Response</h3>

## ShowSystemPreview

<h3>Description</h3>

This method can be used inside any workspace. Creates a pop-up preview of the... ?

<h3>Method(s)</h3>

```javascript
1    function showSystemPreview(id: string, documentName: string, params?: {
2    height?: number, width?: number} = {height: 500, width: 750}): void;
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
            <td><code>id</code></td>
            <td>String</td>
            <td>true</td>
            <td></td>
            <td>Unique Identifier</td>
        </tr>
       <tr className="selected">
            <td><code>documentName</code></td>
            <td>String</td>
            <td>true</td>
            <td></td>
            <td>Document's name</td>
        </tr>
        <tr className="selected">
            <td><code>height</code></td>
            <td>Number</td>
            <td>false</td>
            <td>500</td>
            <td>It sets the new pop-up's height (pixels)</td>
        </tr>
        <tr className="selected">
            <td><code>width</code></td>
            <td>Number</td>
            <td>false</td>
            <td>750</td>
            <td>It sets the new pop-up's width (pixels)</td>
        </tr>
    </tbody>
</table>
<h3>Basic Usage</h3>

```javascript
>    SW.UI.showSystemPreview("f6671567-67b2-430c-bf04-dc7a41e99395", "Company");
```

<h3>Response</h3>

---

## ShowImage

<h3>Description</h3>

This method can be used inside any workspace. Displays and existing or default Image

<h3>Method(s)</h3>

```javascript
1    function showImage(element: HTMLElement, documentName: "user" | "client" 
2    | "company", hasImage: boolean, name: string, params?: {
3    size?: Size, id?: string} = {size: Size.SMALL}): HTMLElement;
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
            <td><code>element</code></td>
            <td>Any</td>
            <td>true</td>
            <td></td>
            <td>HTML tag</td>
        </tr>
        <tr className="selected">
            <td><code>entity</code></td>
            <td>String</td>
            <td>true</td>
            <td></td>
            <td>Refers to a pre-set element of entity list. Has unique atributes and styling</td>
        </tr>
        <tr className="selected">
            <td><code>size</code></td>
            <td>Enum</td>
            <td>true</td>
            <td></td>
            <td>Image's size to be displayed(small, medium, large)</td>
        </tr>
        <tr className="selected">
            <td><code>hasImage</code></td>
            <td>Boolean</td>
            <td>true</td>
            <td></td>
            <td>A flag to specify if target already has an image</td>
        </tr>
        <tr className="selected">
            <td><code>name</code></td>
            <td>String</td>
            <td>true</td>
            <td></td>
            <td>Name of the User, Client or Company whose image belongs or from where default image is generated</td>
        </tr>
    </tbody>
</table>

<h3>Basic Usage</h3>

```javascript
>    SW.UI.showImage(div, "company", Size.small, true, 'SkillsWorkflow');
```

<h3>Response</h3>

---

## ShowImageEditor

<h3>Description</h3>

This method can be used inside any workspace. Displays and existing or default Image

<h3>Method(s)</h3>

```javascript
1    function showImageEditor(element: HTMLElement, documentName: string, documentId: string, params?: {endpoint?: string, size?: Size, imageStyle?: string} = {size: Size.LARGE, height: 100, width: 100}): HTMLElement;

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
            <td><code>element</code></td>
            <td>Any</td>
            <td>true</td>
            <td></td>
            <td>HTML tag</td>
        </tr>
        <tr className="selected">
            <td><code>entity</code></td>
            <td>String</td>
            <td>true</td>
            <td></td>
            <td>Refers to a pre-set element of entity list. Has unique atributes and styling</td>
        </tr>
        <tr className="selected">
            <td><code>entityId</code></td>
            <td>String</td>
            <td>true</td>
            <td></td>
            <td>Entity's Identifier</td>
        </tr>
        <tr className="selected">
            <td><code>endpoint</code></td>
            <td>String</td>
            <td>true</td>
            <td></td>
            <td>Image's endpoint</td>
        </tr>
        <tr className="selected">
            <td><code>size</code></td>
            <td>Enum</td>
            <td>true</td>
            <td></td>
            <td>Image's size to be displayed(small, medium, large)</td>
        </tr>
        <tr className="selected">
            <td><code>imageStyle</code></td>
            <td>String</td>
            <td>false</td>
            <td>"height:100px;width:100px;"</td>
            <td>Setting height & width in string format</td>
        </tr>
    </tbody>
</table>

<h3>Basic Usage</h3>

```javascript
>    SW.UI.showImageEditor(div, "company", "companyId", Size.small,
            "company/id", Size.Large);
```

<h3>Response</h3>

---

## ShowStage

<h3>Description</h3>

This method can be used inside any workspace. Displays a stage

<h3>Method(s)</h3>

```javascript
1    function function showStage(element: HTMLElement, color: string = null, name: string = null, params?: {grouping?: boolean, groupCount?: number} = {}): void;
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
            <td><code>element</code></td>
            <td>Any</td>
            <td>true</td>
            <td></td>
            <td>HTML tag</td>
        </tr>
        <tr className="selected">
            <td><code>color</code></td>
            <td>String</td>
            <td>true</td>
            <td></td>
            <td>Element's color</td>
        </tr>
        <tr className="selected">
            <td><code>text</code></td>
            <td>String</td>
            <td>true</td>
            <td></td>
            <td>Element's inner text</td>
        </tr>
        <tr className="selected">
            <td><code>grouping</code></td>
            <td>Boolean</td>
            <td>true</td>
            <td></td>
            <td>A flag to define if target is grouped</td>
        </tr>
        <tr className="selected">
            <td><code>groupCount</code></td>
            <td>Number</td>
            <td>false</td>
            <td></td>
            <td>Set the number of elements to group</td>
        </tr>
    </tbody>
</table>

<h3>Basic Usage</h3>

```javascript
>    SW.UI.showStage(div, "red", "example");
```

<h3>Response</h3>

---

## ShowPriority

<h3>Description</h3>

This method can be used inside any workspace. To define an element priority

<h3>Method(s)</h3>

```javascript
1    function showPriority(element: HTMLElement, priorityValue: number): void;
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
            <td><code>element</code></td>
            <td>HTMLElement</td>
            <td>true</td>
            <td></td>
            <td>HTML tag</td>
        </tr>
        <tr className="selected">
            <td><code>priorityValue</code></td>
            <td>number</td>
            <td>true</td>
            <td></td>
            <td>Define element's priority</td>
        </tr>
    </tbody>
</table>

<h3>Basic Usage</h3>

```javascript
>    SW.UI.showPrioruty("div", 1);
```

<h3>Response</h3>

---

## ShowTags

<h3>Description</h3>

This method can be used inside any workspace. Displays tags

<h3>Method(s)</h3>

```javascript
1    function showTags(element: HTMLElement, tags: string = null): void;
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
            <td><code>element</code></td>
            <td>HTMLElement</td>
            <td>true</td>
            <td></td>
            <td>HTML element to which tag will be appended</td>
        </tr>
        <tr className="selected">
            <td><code>tags</code></td>
            <td>Tag</td>
            <td>true</td>
            <td>null</td>
            <td>Element of type Tag</td>
        </tr>
    </tbody>
</table>

<h3>Basic Usage</h3>

```javascript
>    SW.UI.showTags({ Label: "Skills", Color: "#333"}, 'div');
```

<h3>Response</h3>

---

## ShowTeam

<h3>Description</h3>

This method can be used inside any workspace. Displays teams

<h3>Method(s)</h3>

```javascript
1    function showTeam(element: HTMLElement, data: any, idsFieldName: string, 
2       namesFieldName: string, hasImageFieldName: string, params?: {
3       size?: Size} = {size: Size.SMALL}): void;
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
            <td><code>element</code></td>
            <td>HTMLElement</td>
            <td>true</td>
            <td></td>
            <td>HTML element</td>
        </tr>
        <tr className="selected">
            <td><code>data</code></td>
            <td>Any</td>
            <td>true</td>
            <td></td>
            <td>A set of data</td>
        </tr>
        <tr className="selected">
            <td><code>idsFieldName</code></td>
            <td>String</td>
            <td>true</td>
            <td></td>
            <td>Executers's identifier</td>
        </tr>
        <tr className="selected">
            <td><code>namesFieldName</code></td>
            <td>String</td>
            <td>true</td>
            <td></td>
            <td>Executors's name</td>
        </tr>
        <tr className="selected">
            <td><code>hasImageFieldName</code></td>
            <td>Boolean</td>
            <td>true</td>
            <td></td>
            <td>Flag if executers have images</td>
        </tr>
        <tr className="selected">
            <td><code>size</code></td>
            <td>Size</td>
            <td>false</td>
            <td></td>
            <td>Element's size</td>
        </tr>
    </tbody>
</table>

<h3>Basic Usage</h3>

```javascript
>    SW.UI.showTeam("div", data, [ IDs ], [Executers names],
            [Executors Images], Size.Large);
```

<h3>Response</h3>

---

## SetRag

<h3>Description</h3>

This method can be used inside any workspace. Displays a rag

<h3>Method(s)</h3>

```javascript
1    function setRag(element: any, value: string, condition1: boolean,
2           condition2: boolean, condition3: boolean,
3           createContainer = true): string;
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
            <td><code>element</code></td>
            <td>HTMLElement</td>
            <td>true</td>
            <td></td>
            <td>HTML element</td>
        </tr>
        <tr className="selected">
            <td><code>value</code></td>
            <td>String</td>
            <td>true</td>
            <td></td>
            <td>A set of data</td>
        </tr>
        <tr className="selected">
            <td><code>condition1</code></td>
            <td>Boolean</td>
            <td>true</td>
            <td></td>
            <td></td>
        </tr>
        <tr className="selected">
            <td><code>condition2</code></td>
            <td>Boolean</td>
            <td>true</td>
            <td></td>
            <td></td>
        </tr>
        <tr className="selected">
            <td><code>condition3</code></td>
            <td>Boolean</td>
            <td>true</td>
            <td></td>
            <td></td>
        </tr>
    </tbody>
</table>

<h3>Basic Usage</h3>

```javascript
>    SW.UI.setRag("div", "value", true, false, false);
```

<h3>Response</h3>

---

## SetVersionRag

<h3>Description</h3>

This method can be used inside any workspace. Set rag with version

<h3>Method(s)</h3>

```javascript
1   function setVersionRag(element: HTMLElement, version1: number, version2: number, 
2       params?: {createContainer?: boolean} = {createContainer: true}): string;
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
            <td><code>element</code></td>
            <td>HTMLElement</td>
            <td>true</td>
            <td></td>
            <td>HTML element</td>
        </tr>
        <tr className="selected">
            <td><code>version1</code></td>
            <td>Number</td>
            <td>true</td>
            <td></td>
            <td>A set of data</td>
        </tr>
        <tr className="selected">
            <td><code>version2</code></td>
            <td>Number</td>
            <td>true</td>
            <td></td>
            <td>A set of data</td>
        </tr>
        <tr className="selected">
            <td><code>createContainer</code></td>
            <td>Boolean</td>
            <td>false</td>
            <td>true</td>
            <td>Flag to create a container</td>
        </tr>
    </tbody>
</table>

<h3>Basic Usage</h3>

```javascript
>    SW.UI.setVersionRag({ Label: "Skills", Color: "#333"}, 'div');
```

<h3>Response</h3>

---

## SetAttribute

<h3>Description</h3>

This method can be used inside any workspace. Set element's attributes

<h3>Method(s)</h3>

```javascript
1    function setAttribute(element: HTMLElement, attribute: string, 
2      attributeValue: string, params?: {text?: string, createContainer?: boolean} = 
3      { createContainer: true}): HTMLElement;
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
            <td><code>element</code></td>
            <td>String</td>
            <td>true</td>
            <td></td>
            <td>HTML element</td>
        </tr>
        <tr className="selected">
            <td><code>text</code></td>
            <td>Number</td>
            <td>true</td>
            <td></td>
            <td>A set of data</td>
        </tr>
        <tr className="selected">
            <td><code>attribute</code></td>
            <td>String</td>
            <td>false</td>
            <td>" "</td>
            <td></td>
        </tr>
        <tr className="selected">
            <td><code>attributeValue</code></td>
            <td>String</td>
            <td>false</td>
            <td>" "</td>
            <td></td>
        </tr>
        <tr className="selected">
            <td><code>createContainer</code></td>
            <td>String</td>
            <td>false</td>
            <td>true</td>
            <td></td>
        </tr>
    </tbody>
</table>

<h3>Basic Usage</h3>

```javascript
>    SW.UI.setAttribute('div', 'text', ));
```

<h3>Response</h3>

---

## GetDocumentImage

<h3>Description</h3>

This method can be used inside any workspace. Get entity's image

<h3>Method(s)</h3>

```javascript
1    function getDocumentImage(element: HTMLElement, type: string, params?: 
2       {size?: Size} = {size: Size.SMALL}): string;
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
            <td><code>element</code></td>
            <td>HTMLElement</td>
            <td>true</td>
            <td></td>
            <td>HTML element</td>
        </tr>
        <tr className="selected">
            <td><code>type</code></td>
            <td>String</td>
            <td>true</td>
            <td></td>
            <td>Type of document</td>
        </tr>
       <tr className="selected">
            <td><code>size</code></td>
            <td>Enum</td>
            <td>true</td>
            <td></td>
            <td>Image's size to be displayed(small, medium, large)</td>
        </tr>
    </tbody>
</table>

<h3>Basic Usage</h3>

```javascript
>    SW.UI.getDocumentImage('div', 'type', Size.Large);
```

<h3>Response</h3>

---

## NavigateToNewTab

<h3>Description</h3>

This method can be used inside any workspace. Navigate to a new tab

<h3>Method(s)</h3>

```javascript
1    function navigateToNewTab(url: string, params?: {useSkillsBaseUrl: boolean} = 
2       {useSkillsBaseUrl: true}): void;
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
            <td><code>url</code></td>
            <td>String</td>
            <td>false</td>
            <td>" "</td>
            <td>Url Link</td>
        </tr>
        <tr className="selected">
            <td><code>useSkillsBaseUrl</code></td>
            <td>Boolean</td>
            <td>true</td>
            <td>true</td>
            <td>Flag to Skills Base url</td>
        </tr>
    </tbody>
</table>

<h3>Basic Usage</h3>

```javascript
>    SW.UI.navigateToNewTab("url");
```

<h3>Response</h3>

---

## NavigateTo

<h3>Description</h3>

This method can be used inside any workspace. Navigate to workspace

<h3>Method(s)</h3>

```javascript
1    function navigateTo(workspaceId: string, entity: string = null,
2           entityId: string = null): void;
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
            <td><code>workspaceId</code></td>
            <td>String</td>
            <td>true</td>
            <td></td>
            <td></td>
        </tr>
       <tr className="selected">
            <td><code>url</code></td>
            <td>String</td>
            <td>false</td>
            <td>" "</td>
            <td>Url Link</td>
        </tr>
        <tr className="selected">
            <td><code>entity</code></td>
            <td>String</td>
            <td>true</td>
            <td>null</td>
            <td>Refers to a pre-set element of entity list. Has unique atributes and styling</td>
        </tr>
        <tr className="selected">
            <td><code>entityId</code></td>
            <td>String</td>
            <td>true</td>
            <td>null</td>
            <td>Entity's identifier</td>
        </tr>
    </tbody>
</table>

<h3>Basic Usage</h3>

```javascript
>    SW.UI.navigateTo('workspaceId', 'company', 'companyId');
```

<h3>Response</h3>

---

## ShowWorkload

<h3>Description</h3>

This method can be used inside any workspace. Displays assignment's workload

<h3>Method(s)</h3>

```javascript
1    function showWorkload(element: string | HTMLElement, assignmentId: string)
2           :Promise<void>;
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
            <td><code>element</code></td>
            <td>String | HTMLElement</td>
            <td>true</td>
            <td></td>
            <td></td>
        </tr>
        <tr className="selected">
            <td><code>assignmentId</code></td>
            <td>String</td>
            <td>true</td>
            <td></td>
            <td>Assignment Identifier</td>
        </tr>
    </tbody>
</table>

<h3>Basic Usage</h3>

```javascript
>    SW.UI.showWorkload(target, 'assignmentId');
```

<h3>Response</h3>

---

## ShowComponent

<h3>Description</h3>

This method can be used inside any workspace. Show component's properties

<h3>Method(s)</h3>

```javascript
1    function showComponent(element: HTMLElement, type: string, properties: object): void;
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
            <td><code>element</code></td>
            <td>HTMLElement</td>
            <td>true</td>
            <td></td>
            <td></td>
        </tr>
        <tr className="selected">
            <td><code>type</code></td>
            <td>String</td>
            <td>true</td>
            <td></td>
            <td></td>
        </tr>
       <tr className="selected">
            <td><code>properties</code></td>
            <td>Object</td>
            <td>true</td>
            <td></td>
            <td></td>
        </tr>
    </tbody>
</table>

<h3>Basic Usage</h3>

```javascript
>    SW.UI.showComponent("div", "type", { properties });
```
