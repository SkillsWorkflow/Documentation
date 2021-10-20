---
id: application-popup
title: " "
sidebar_label: Popup
---

# Popup

A sub namespace of Application, exclusive for popup operations

```javascript
//accessing to application.popup methods
SW.Application.Popup.{methodName}
```

---

## show

#### Description

This method can be used to create a popup with the specified entity and data.

#### Method(s)

```javascript
1   function show(
2       dashboardTabs: DashboardTab[],
3       params: {
4            documentName?: DocumentName;
5            data?: any;
6            container?: DOMComponent;
7            width?: number;
8            height?: number;
9            enableScroll?: boolean;
10          title?: string;
11          openInFullScreen?: boolean;
12          hideTabContainer?: boolean;
13          hideSubHeader?: boolean;
14          closeOnOutsideClick?: boolean;
15          onClose?: Function;
16          buttonsConfiguration?: DashboardButtonsConfiguration;
17      } = {
18          width: 800,
19          height: 500,
20          closeOnOutsideClick: true
21      }
22  ): void
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
            <td><code>documentName</code></td>
            <td>DocumentName</td>
            <td>false</td>
            <td></td>
            <td>Document's name</td>
        </tr>
        <tr className="selected">
            <td><code>data</code></td>
            <td>any</td>
            <td>false</td>
            <td></td>
            <td>Data to pass to the popup</td>
        </tr>
        <tr className="selected">
            <td><code>container</code></td>
            <td>DOMComponent</td>
            <td>false</td>
            <td></td>
            <td>Container component</td>
        </tr>
        <tr className="selected">
            <td><code>width</code></td>
            <td>number</td>
            <td>false</td>
            <td>800</td>
            <td>It sets the pop-up's width (pixels)</td>
        </tr>
        <tr className="selected">
            <td><code>height</code></td>
            <td>number</td>
            <td>false</td>
            <td>350</td>
            <td>It sets the pop-up's height (pixels)</td>
        </tr>
        <tr className="selected">
            <td><code>enableScroll</code></td>
            <td>boolean</td>
            <td>false</td>
            <td></td>
            <td>To enable scrolling in the pop-up</td>
        </tr>
        <tr className="selected">
            <td><code>title</code></td>
            <td>string</td>
            <td>false</td>
            <td></td>
            <td>Pop-up's title</td>
        </tr>
        <tr className="selected">
            <td><code>openInFullScreen</code></td>
            <td>boolean</td>
            <td>false</td>
            <td></td>
            <td>Pop-up open in full screen</td>
        </tr>
        <tr className="selected">
            <td><code>hideTabContainer</code></td>
            <td>boolean</td>
            <td>false</td>
            <td></td>
            <td>To hide sub container</td>
        </tr>
        <tr className="selected">
            <td><code>hideSubHeader</code></td>
            <td>boolean</td>
            <td>false</td>
            <td></td>
            <td>To hide sub header</td>
        </tr>
        <tr className="selected">
            <td><code>closeOnOutsideClick</code></td>
            <td>boolean</td>
            <td>false</td>
            <td>true</td>
            <td>Close pop by clicking outside the pop-up area</td>
        </tr>
        <tr className="selected">
            <td><code>onClose</code></td>
            <td>Function</td>
            <td>false</td>
            <td></td>
            <td>Action/Behaviour to be implemented on closing the pop-up</td>
        </tr>
        <tr className="selected">
            <td><code>buttonsConfiguration</code></td>
            <td>DashboardButtonsConfiguration</td>
            <td>false</td>
            <td></td>
            <td>Enable configuration buttons</td>
        </tr>
    </tbody>
</table>

#### Basic Usage

```javascript
SW.Application.show(['info'], 
   {
       documentName: SW.DocumentName.Job,
       width: 500,
       height: 200,
       enableScroll: false,
       title: 'Popup exemple',
       openInFullScreen: false,
       hideTabContainer: false,
       hideSubHeader: true,
       closeOnOutsideClick: false   
   }
);
```

#### Response

It will open a popup with the passed configuration.

---

## showBulk

#### Description

This method can be used to generate a pop-up to allow editing in bulk.

#### Method(s)

```js {3}
1   function showBulk(documentName: DocumentName, dataGrid: dxDataGrid,
2       params: {
3           width?: number;
4           height?: number;
5       } = {
6           width: 800,
7           height: 500
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
            <td><code>documentName</code></td>
            <td>DocumentName</td>
            <td>true</td>
            <td></td>
            <td>Document's name</td>
        </tr>
         <tr className="selected">
            <td><code>dataGrid</code></td>
            <td>dxDataGrid</td>
            <td>true</td>
            <td></td>
            <td>DataGrid component</td>
        </tr>
        <tr className="selected">
            <td><code>width</code></td>
            <td>number</td>
            <td>false</td>
            <td>800</td>
            <td>It sets the new pop-up's width (pixels)</td>
        </tr>
        <tr className="selected">
            <td><code>height</code></td>
            <td>number</td>
            <td>false</td>
            <td>500</td>
            <td>It sets the new pop-up's height (pixels)</td>
        </tr>
    </tbody>
</table>

#### Basic Usage

```javascript
SW.Application.showBulk(SW.DocumentName.Employee, dataGrid);
```

#### Response

![img](/img/responses/showBulk_response.png)

---

## showCreate

#### Description

This method can be used to add an add button on top, which calls a creation pop-up styled by the entity passed as parameter.

#### Method(s)

```javascript
1    function showCreate(documentName: DocumentName,
2       params: {
3           width?: number;
4           height?: number;
5           container?: HTMLElement;
6       } = {
7           width: 800,
8           height: 350
9       }
10  ): void
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
            <td>DocumentName</td>
            <td>true</td>
            <td></td>
            <td>Document's name</td>
        </tr>
        <tr className="selected">
            <td><code>width</code></td>
            <td>number</td>
            <td>false</td>
            <td>800</td>
            <td>It sets the new pop-up's width (pixels)</td>
        </tr>
        <tr className="selected">
            <td><code>height</code></td>
            <td>number</td>
            <td>false</td>
            <td>350</td>
            <td>It sets the new pop-up's height (pixels)</td>
        </tr>
        <tr className="selected">
            <td><code>container</code></td>
            <td>HTMLElement</td>
            <td>false</td>
            <td></td>
            <td>Container component</td>
        </tr>
    </tbody>
</table>

#### Basic Usage

```javascript
SW.Application.showCreate(SW.DocumentName.Company);
```

#### Response

It will open a popup with the required field to create the document type passed.

---

## showConfirmation

#### Description

This method can be used to create a new popup with Yes and No buttons. If Yes button is pressed it will return true, else, it will return false.

#### Method(s)

```javascript
1   function showConfirmation(
2       params: {
3           title?: string;
4           text?: string;
5           trueButtonText?: string;
6           falseButtonText?: string;
7           width?: number;
8           height?: number;
9       } = {
10           width: 400,
11          height: 150
12      }
13  ): Promise<boolean>
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
            <td><code>title</code></td>
            <td>string</td>
            <td>false</td>
            <td></td>
            <td>Popup title</td>
        </tr>
       <tr className="selected">
            <td><code>text</code></td>
            <td>string</td>
            <td>false</td>
            <td></td>
            <td>Popup text</td>
        </tr>
       <tr className="selected">
            <td><code>trueButtonText</code></td>
            <td>string</td>
            <td>false</td>
            <td></td>
            <td>True button text</td>
        </tr>
       <tr className="selected">
            <td><code>falseButtonText</code></td>
            <td>string</td>
            <td>false</td>
            <td></td>
            <td>False button text</td>
        </tr>
        <tr className="selected">
            <td><code>width</code></td>
            <td>number</td>
            <td>false</td>
            <td>400</td>
            <td>It sets the new pop-up's width (pixels)</td>
        </tr>
        <tr className="selected">
            <td><code>height</code></td>
            <td>number</td>
            <td>false</td>
            <td>150</td>
            <td>It sets the new pop-up's height (pixels)</td>
        </tr>
    </tbody>
</table>

#### Basic Usage

```javascript
SW.Application.showConfirmPopup(
   params: {
       title: 'Popup title', 
       text: 'Click one button', 
       trueButtonText: 'Yes button', 
       falseButtonText: 'No button', 
       width: 400, 
       height: 150
   }
);
```

#### Response

![img](/img/responses/showConfirmPopup.png)

---

## showPreview

#### Description

This method can be used to create a preview popup styled by the entity passed as parameter.

#### Method(s)

```javascript
1    function showPreview(documentName: DocumentName, documentId: string,
2       params: {
3           dataGrid?: dxDataGrid;
4           fieldName?: string;
5           width?: number;
6           height?: number;
7           onSave?: Function;
8           onClose?: Function;
9       } = {
10           width: 800,
11          height: 500
12      }
13  ): void
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
            <td>DocumentName</td>
            <td>true</td>
            <td></td>
            <td>Document's name</td>
        </tr>
        <tr className="selected">
            <td><code>documentId</code></td>
            <td>string</td>
            <td>true</td>
            <td></td>
            <td>Document's id</td>
        </tr>
        <tr className="selected">
            <td><code>dataGrid</code></td>
            <td>dxDataGrid</td>
            <td>false</td>
            <td></td>
            <td>DataGrid component</td>
        </tr>
        <tr className="selected">
            <td><code>fieldName</code></td>
            <td>string</td>
            <td>false</td>
            <td></td>
            <td>Field's name</td>
        </tr>
        <tr className="selected">
            <td><code>width</code></td>
            <td>number</td>
            <td>false</td>
            <td>800</td>
            <td>It sets the new pop-up's width (pixels)</td>
        </tr>
        <tr className="selected">
            <td><code>height</code></td>
            <td>number</td>
            <td>false</td>
            <td>500</td>
            <td>It sets the new pop-up's height (pixels)</td>
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

#### Basic Usage

```javascript
SW.Application.showPreview(SW.DocumentName.Client, "ClientId");
```

#### Response

It will open a preview popup styled by the documentName passed as parameter.

---

## showPrompt

#### Description

This method can be used to create a new popup with Yes and No buttons and a textBox. If Yes button is pressed it will return the text written in the textBox, else, it will return null.

#### Method(s)

```javascript
1   function showPromptPopup(
        params: {
            title?: string, 
            text?: string, 
            trueButtonText?: string, 
            falseButtonText?: string, 
            width?: number, 
            height?: number
        } = {
            width: 400, 
            height: 150
        }
    ): Promise<string>;
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
            <td><code>title</code></td>
            <td>string</td>
            <td>false</td>
            <td></td>
            <td>Popup title</td>
        </tr>
       <tr className="selected">
            <td><code>text</code></td>
            <td>string</td>
            <td>false</td>
            <td></td>
            <td>Popup text</td>
        </tr>
       <tr className="selected">
            <td><code>trueButtonText</code></td>
            <td>string</td>
            <td>false</td>
            <td></td>
            <td>True button text</td>
        </tr>
       <tr className="selected">
            <td><code>falseButtonText</code></td>
            <td>string</td>
            <td>false</td>
            <td></td>
            <td>False button text</td>
        </tr>
        <tr className="selected">
            <td><code>width</code></td>
            <td>number</td>
            <td>false</td>
            <td>400</td>
            <td>It sets the new pop-up's width (pixels)</td>
        </tr>
        <tr className="selected">
            <td><code>height</code></td>
            <td>number</td>
            <td>false</td>
            <td>150</td>
            <td>It sets the new pop-up's height (pixels)</td>
        </tr>
    </tbody>
</table>

#### Basic Usage

```javascript
SW.Application.showPromptPopup(
        params: {
            title: 'Popup title', 
            text: 'Click one button', 
            trueButtonText: 'Yes button', 
            falseButtonText: 'No button', 
            width: 400, 
            height: 150
        }
    );
```

#### Response

![img](/img/responses/showPromptPopup.png)

---

## showSystemPreview

#### Description

This method can be used to open a preview popup styled by the documentName passed as parameter.

#### Method(s)

```javascript
1    function showSystemPreview(documentName: DocumentName, documentId: string,
2       params: {
3           width?: number;
4           height?: number;
5       } = {
6           width: 750,
7           height: 500
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
            <td><code>documentName</code></td>
            <td>DocumentName</td>
            <td>true</td>
            <td></td>
            <td>Document's name</td>
        </tr>
        <tr className="selected">
            <td><code>documentId</code></td>
            <td>string</td>
            <td>true</td>
            <td></td>
            <td>Document id</td>
        </tr>
        <tr className="selected">
            <td><code>width</code></td>
            <td>number</td>
            <td>false</td>
            <td>750</td>
            <td>It sets the new pop-up's width (pixels)</td>
        </tr>
        <tr className="selected">
            <td><code>height</code></td>
            <td>number</td>
            <td>false</td>
            <td>500</td>
            <td>It sets the new pop-up's height (pixels)</td>
        </tr>
    </tbody>
</table>

#### Basic Usage

```javascript
SW.Application.showSystemPreview(SW.DocumentName.Estimate, 'estimateId');
```

#### Response

It will open a preview popup styled by the documentName passed as parameter.