---
id: ui
title: " "
sidebar_label: Introduction
sidebar_position: 1
---

# User Interface

With this namespace, you can quickly provide methods to show UI.

The namespace User Interface provides to developers, methods to easily show or validate data.

```javascript
//accessing to ui methods
SW.UI.{methodName}
```

---

## editComponentsOptionInBulk

#### Description

This method can be used to edit an option in various components.

#### Method(s)

```javascript
1    function editComponentsOptionInBulk(components: any[], option: string, value: any): void
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
            <td><code>components</code></td>
            <td>any[]</td>
            <td>true</td>
            <td></td>
            <td>Components array to edit option</td>
        </tr>
        <tr className="selected">
            <td><code>option</code></td>
            <td>string</td>
            <td>true</td>
            <td></td>
            <td>Option to edit</td>
        </tr>
       <tr className="selected">
            <td><code>value</code></td>
            <td>any</td>
            <td>true</td>
            <td></td>
            <td>New option value</td>
        </tr>
    </tbody>
</table>

#### Basic Usage

```javascript
SW.UI.editComponentsOptionInBulk([dataGrid, chart], 'dataSource', data);
```

#### Response

It will set dataGrid and chart dataSources with the variable data passed. 

---

## getEntityImage

#### Description

This method can be used to get entities image.

#### Method(s)

```javascript
1    function getEntityImage(element: HTMLElement, documentName: string,
2       params?: {
3           size?: Size;
            hideName?: boolean;
            title?: string;
4       } = {
5          size: Size.SMALL,
            hideName: false,
            title: null
6       }
7   ): string;
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
            <td><code>documentName</code></td>
            <td>string</td>
            <td>true</td>
            <td></td>
            <td>Type of document</td>
        </tr>
       <tr className="selected">
            <td><code>size</code></td>
            <td>Size</td>
            <td>false</td>
            <td>"small"</td>
            <td>Image's size to be displayed(small, medium, large)</td>
        </tr>
         <tr className="selected">
            <td><code>hideName</code></td>
            <td>boolean</td>
            <td>false</td>
            <td>false</td>
            <td>Show or hide the name of the field</td>
        </tr>
         <tr className="selected">
            <td><code>Title</code></td>
            <td>string</td>
            <td>false</td>
            <td>false</td>
            <td>The name displayed in the UI</td>
        </tr>
    </tbody>
</table>

#### Basic Usage

```javascript
SW.UI.getEntityImage(element, 'job', { size: 'large' });
```

#### Response

Returns the passed HTML element with the entity job image.

---

## setAttribute

#### Description

This method can be used to set element's attributes.

#### Method(s)

```javascript
1    function setAttribute(element: HTMLElement, attribute: string, attributeValue: string,
2       params: { 
3           text?: string; 
4           createContainer?: boolean 
5       } = { 
6           createContainer: true 
7       }
8   ): HTMLElement
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
            <td><code>attribute</code></td>
            <td>string</td>
            <td>true</td>
            <td></td>
            <td>Attribute to update</td>
        </tr>
        <tr className="selected">
            <td><code>attributeValue</code></td>
            <td>string</td>
            <td>true</td>
            <td></td>
            <td>Value to update attribute</td>
        </tr>
        <tr className="selected">
            <td><code>text</code></td>
            <td>string</td>
            <td>false</td>
            <td></td>
            <td>Inner HTML</td>
        </tr>
        <tr className="selected">
            <td><code>createContainer</code></td>
            <td>boolean</td>
            <td>false</td>
            <td></td>
            <td>Create a new div container</td>
        </tr>
    </tbody>
</table>

#### Basic Usage

```javascript
SW.UI.setAttribute(element, 'style', 'display: contents');
```

#### Response

It will add the attribute value to the given attribute.

---

## setConditionalColor

#### Description

This method can be used to set element's attributes.

#### Method(s)

```javascript
1   function setConditionalColor(element: HTMLElement, value: string, conditions: boolean[], colors: string[],
2       params: { 
3           createContainer?: boolean; 
4           bold?: boolean; 
5           italic?: boolean 
6       } = { 
7           createContainer: true 
8       }
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
            <td><code>element</code></td>
            <td>HTMLElement</td>
            <td>true</td>
            <td></td>
            <td>HTML element</td>
        </tr>
        <tr className="selected">
            <td><code>value</code></td>
            <td>string</td>
            <td>true</td>
            <td></td>
            <td>Value to show</td>
        </tr>
        <tr className="selected">
            <td><code>conditions</code></td>
            <td>boolean[]</td>
            <td>true</td>
            <td></td>
            <td>Conditions to check</td>
        </tr>
        <tr className="selected">
            <td><code>colors</code></td>
            <td>string[]</td>
            <td>true</td>
            <td></td>
            <td>Colors for conditions</td>
        </tr>
        <tr className="selected">
            <td><code>createContainer</code></td>
            <td>boolean</td>
            <td>false</td>
            <td>true</td>
            <td>Create a new div container</td>
        </tr>
        <tr className="selected">
            <td><code>bold</code></td>
            <td>boolean</td>
            <td>false</td>
            <td></td>
            <td>Bold font</td>
        </tr>
        <tr className="selected">
            <td><code>italic</code></td>
            <td>boolean</td>
            <td>false</td>
            <td></td>
            <td>Italic font</td>
        </tr>
    </tbody>
</table>

#### Basic Usage

```javascript
SW.UI.setConditionalColor(element, 'Value', [1>0, 1=0, 1<0], ['Red', 'Green', 'Blue']);
```

#### Response

It will add the value text to the element with the background color corresponding to the condition that is true.

---

## setRag

#### Description

This method allows you to set an element as Red, Ambar or Green according to its value.

#### Method(s)

```javascript
1   function setRag(element: any, value: string, 
2           condition1: boolean,
3           condition2: boolean, 
4           condition3: boolean,
5           params: { createContainer?: boolean } = { createContainer: true }
6   ): string;
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
            <td>string</td>
            <td>true</td>
            <td></td>
            <td>Value to show</td>
        </tr>
        <tr className="selected">
            <td><code>red</code></td>
            <td>boolean</td>
            <td>true</td>
            <td></td>
            <td>return the value with background color in red</td>
        </tr>
        <tr className="selected">
            <td><code>ambar</code></td>
            <td>boolean</td>
            <td>true</td>
            <td></td>
            <td>return the value with the background color in ambar</td>
        </tr>
        <tr className="selected">
            <td><code>green</code></td>
            <td>boolean</td>
            <td>true</td>
            <td></td>
            <td>return the value with the background color in green</td>
        </tr>
        <tr className="selected">
            <td><code>createContainer</code></td>
            <td>boolean</td>
            <td>false</td>
            <td>true</td>
            <td>Create a new div container</td>
        </tr>
    </tbody>
</table>

#### Basic Usage

```javascript
SW.setRAG(e, value, i.value > 15, (i.value >= 5 && i.value < 15), i.value < 5);
```

#### Response

It will add the value text to the element with the background color corresponding to the condition that is true. 

### Example

```javascript {7}
{
    dataField: "MarginPercentage",
    dataType: "number",
    alignment: "center",
    format: "percent",
    width: 120,
    cellTemplate: function(e, i) {
        SW.UI.setRag(e, i.text, i.value < 0.01, i.value >= 0.01 && i.value < 0.99, i.value >= 0.99);
    }
},
```
<figure>

![img-box-shadow](/img/responses/rag_example.png)

</figure>

---

## setVersionRag

#### Description

This method can be used to set rag considering two given versions.

#### Method(s)

```javascript
1   function setVersionRag(element: HTMLElement, version1: number, version2: number,
2       params: { 
3           createContainer?: boolean 
4       } = { 
5           createContainer: true 
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
            <td><code>element</code></td>
            <td>HTMLElement</td>
            <td>true</td>
            <td></td>
            <td>HTML element</td>
        </tr>
        <tr className="selected">
            <td><code>version1</code></td>
            <td>number</td>
            <td>true</td>
            <td></td>
            <td>Version number</td>
        </tr>
        <tr className="selected">
            <td><code>version2</code></td>
            <td>number</td>
            <td>true</td>
            <td></td>
            <td>Version number</td>
        </tr>
        <tr className="selected">
            <td><code>createContainer</code></td>
            <td>boolean</td>
            <td>false</td>
            <td>true</td>
            <td>Create a new div container</td>
        </tr>
    </tbody>
</table>

#### Basic Usage

```javascript
SW.UI.setVersionRag(element, 1, 2);
```

#### Response

---

## showComponent

#### Description

This method can be used to create a new component.

#### Method(s)

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
            <td>HTML tag</td>
        </tr>
        <tr className="selected">
            <td><code>type</code></td>
            <td>string</td>
            <td>true</td>
            <td></td>
            <td>Component's type</td>
        </tr>
       <tr className="selected">
            <td><code>properties</code></td>
            <td>object</td>
            <td>true</td>
            <td></td>
            <td>Component's properties</td>
        </tr>
    </tbody>
</table>

#### Basic Usage

```javascript
SW.UI.showComponent(element, "List", properties);
```

#### Example

In the following example you can find a template for an item that will present a List of items:

```javascript
function itemTemplate(itemData, itemIndex, itemElement, workspaceContext) {
   var properties = {
       items: [{"id":1, "value":"Blue"}, {"id":2, "value":"Red"}]
   };
   SW.UI.showComponent(itemElement, 'List', properties);
}
```

---

## showImage

#### Description

This method can be used to display an existing or default Image.

#### Method(s)

```javascript
1   function showImage(element: HTMLElement, documentName: "user" | "client" | "company", name: string,
2       params: { 
3           hasImage?: boolean; 
4           size?: Size; 
5           id?: string; 
6           showName: boolean
7       } = {
8           hasImage: false,
9           size: Size.SMALL,
10          showName: false
11      }
12   ): HTMLElement
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
            <td><code>documentName</code></td>
            <td>string</td>
            <td>true</td>
            <td></td>
            <td>Document type ("user", "client", "company")</td>
        </tr>
        <tr className="selected">
            <td><code>name</code></td>
            <td>string</td>
            <td>true</td>
            <td></td>
            <td>Document name</td>
        </tr>
        <tr className="selected">
            <td><code>hasImage</code></td>
            <td>boolean</td>
            <td>false</td>
            <td></td>
            <td>A flag to specify if target already has an image</td>
        </tr>
        <tr className="selected">
            <td><code>size</code></td>
            <td>Size</td>
            <td>false</td>
            <td></td>
            <td>Image size</td>
        </tr>
        <tr className="selected">
            <td><code>id</code></td>
            <td>string</td>
            <td>false</td>
            <td></td>
            <td>Document id</td>
        </tr>
        <tr className="selected">
            <td><code>showName</code></td>
            <td>boolean</td>
            <td>false</td>
            <td></td>
            <td>Show document name</td>
        </tr>
    </tbody>
</table>

#### Basic Usage

```javascript
SW.UI.showImage(element, "company", "Skills Workflow", {hasImage: true, id: "companyId"});
```

#### Response

---

## showImageEditor

#### Description

This method can be used to update a user, client or company image.

#### Method(s)

```javascript
1    function showImageEditor(element: HTMLElement, documentName: "user" | "client" | "company", documentId: string,
2       params: {
3           endpoint?: string;
4           size?: Size;
5           width?: number;
6           height?: number;
7           imageStyle?: string;
8       } = {
9           size: Size.LARGE,
10          width: 100,
11          height: 100
12      }
13  ): HTMLElement

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
            <td><code>documentName</code></td>
            <td>string</td>
            <td>true</td>
            <td></td>
            <td>Image from document user, client or company</td>
        </tr>
        <tr className="selected">
            <td><code>documentId</code></td>
            <td>string</td>
            <td>true</td>
            <td></td>
            <td>Document id</td>
        </tr>
        <tr className="selected">
            <td><code>endpoint</code></td>
            <td>string</td>
            <td>false</td>
            <td></td>
            <td>Image's endpoint</td>
        </tr>
        <tr className="selected">
            <td><code>size</code></td>
            <td>Size</td>
            <td>false</td>
            <td>large</td>
            <td>Image's size to be displayed(small, medium, large)</td>
        </tr>
        <tr className="selected">
            <td><code>width</code></td>
            <td>number</td>
            <td>false</td>
            <td>100</td>
            <td>Container width in pixels</td>
        </tr>
        <tr className="selected">
            <td><code>height</code></td>
            <td>number</td>
            <td>false</td>
            <td>100</td>
            <td>Container height in pixels</td>
        </tr>
        <tr className="selected">
            <td><code>imageStyle</code></td>
            <td>string</td>
            <td>false</td>
            <td></td>
            <td>Setting height & width in string format</td>
        </tr>
    </tbody>
</table>

#### Basic Usage

```javascript
SW.UI.showImageEditor(element, "company", "companyId");
```

#### Response

It will add the document image with an event listener 'change' to change it.

---

## showPriority

#### Description

This method can be used to define an element priority.

#### Method(s)

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
            <td>HTML element</td>
        </tr>
        <tr className="selected">
            <td><code>priorityValue</code></td>
            <td>number</td>
            <td>false</td>
            <td></td>
            <td>Define element's priority</td>
        </tr>
    </tbody>
</table>

#### Basic Usage

```javascript
SW.UI.showPrioruty(element, 1);
```

#### Response

---

## showStage

#### Description

This method can be used to display a stage.

#### Method(s)

```javascript
1   function showStage(element: HTMLElement, name: string, color: string,
2       params: { 
3           grouping?: boolean; 
4           groupCount?: number 
5       } = {}
6   ): void
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
            <td><code>name</code></td>
            <td>string</td>
            <td>false</td>
            <td></td>
            <td>Stage name</td>
        </tr>
        <tr className="selected">
            <td><code>color</code></td>
            <td>string</td>
            <td>false</td>
            <td></td>
            <td>Element's color</td>
        </tr>
        <tr className="selected">
            <td><code>grouping</code></td>
            <td>boolean</td>
            <td>false</td>
            <td></td>
            <td>A flag to define if target is grouped</td>
        </tr>
        <tr className="selected">
            <td><code>groupCount</code></td>
            <td>number</td>
            <td>false</td>
            <td></td>
            <td>Set the number of elements to group</td>
        </tr>
    </tbody>
</table>

#### Basic Usage

```javascript
SW.UI.showStage(element, "Test", "blue");
```

#### Response

---

## showTags

#### Description

This method can be used to display tags.

#### Method(s)

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
            <td>HTML element</td>
        </tr>
        <tr className="selected">
            <td><code>tags</code></td>
            <td>string</td>
            <td>false</td>
            <td></td>
            <td>Tags to show</td>
        </tr>
    </tbody>
</table>

#### Basic Usage

```javascript
SW.UI.showTags(element, "{Label: Skills, Color: #333}");
```

#### Response

---

## showTeam

#### Description

This method can be used to display teams.

#### Method(s)

```javascript
1   function showTeam(
2       element: HTMLElement, 
3       data: any, 
4       idsFieldName: string, 
5       namesFieldName: string, 
6       hasImageFieldName: string,
7       params: { 
8           size?: Size 
9       } = { 
10          size: Size.SMALL 
11      }
12  ): void
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
            <td>any</td>
            <td>true</td>
            <td></td>
            <td>A set of data</td>
        </tr>
        <tr className="selected">
            <td><code>idsFieldName</code></td>
            <td>string</td>
            <td>true</td>
            <td></td>
            <td>Users identifier</td>
        </tr>
        <tr className="selected">
            <td><code>namesFieldName</code></td>
            <td>string</td>
            <td>true</td>
            <td></td>
            <td>Users name</td>
        </tr>
        <tr className="selected">
            <td><code>hasImageFieldName</code></td>
            <td>string</td>
            <td>true</td>
            <td></td>
            <td>Flag if executers have images</td>
        </tr>
        <tr className="selected">
            <td><code>size</code></td>
            <td>Size</td>
            <td>false</td>
            <td>small</td>
            <td>Image's size</td>
        </tr>
    </tbody>
</table>

### Basic Usage

```javascript
SW.UI.showTeam(element, data, "UserIds", "UserNames", "UserHasImages", {size: "large"});
```

### Response

This method will add the user images to the given element..

### Example

```javascript {9}
{
        dataField: "ExecutorNames",
        caption: "Assignee",
        dataType: "string",
        allowEditing: false,
        visible: true,
        cellTemplate: function cellTemplate(e, i) { 
            if (i.data && i.data.ExecutorNames) { 
                SW.UI.showTeam(e, i, 'ExecutorIds', 'ExecutorNames', 'ExecutorHasImages', { size: 'small' }) 
             } 
        }
},
```
<figure>

![img-box-shadow](/img/responses/showTeam_example.png)

</figure>


---

## showWorkload

#### Description

This method can be used to display assignments workload.

#### Method(s)

```javascript
1    function showWorkload(element: string | HTMLElement, assignmentId: string): Promise<void>
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
            <td>string | HTMLElement</td>
            <td>true</td>
            <td></td>
            <td>HTML element or string</td>
        </tr>
        <tr className="selected">
            <td><code>assignmentId</code></td>
            <td>string</td>
            <td>true</td>
            <td></td>
            <td>Assignment id</td>
        </tr>
    </tbody>
</table>

#### Basic Usage

```javascript
SW.UI.showWorkload(element, 'assignmentId');
```

#### Response
