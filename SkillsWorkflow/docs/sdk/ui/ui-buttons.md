---
id:  ui-buttons
title: Buttons
sidebar_label: Buttons
---

# Buttons

A sub namespace of UI, exclusive for buttons operations

```javascript
//accessing to ui.buttons methods
SW.UI.Buttons.{methodName}
```

---

## addCreateToSubHeader

#### Description

This method can be used to generate a create button in the sub-header.

#### Method(s)

```javascript
function addCreateToSubHeader(documentName: string, component: dxForm,
    params: {
        onClick?: (dashboardDocumentSaveObject: DashboardDocumentSaveObject) => boolean;
        components?: {
            description?: dxHtmlEditor;
            files?: FileSystemWidgetComponent;
        };
        mappers?: {
            postModel?: (
                postModel: PostModel,
                dashboardDocumentSaveObject: DashboardDocumentSaveObject,
                params: { isDraftModel: boolean }
            ) => PostModel;
            briefPostModel?: (
                briefPostModel: BriefPostModel,
                dashboardDocumentSaveObject: DashboardDocumentSaveObject
            ) => BriefPostModel;
        };
        postChangesOnFeed?: boolean;
        allowDraft?: boolean;
        icons?: {
            save?: {
                class?: string;
                tooltip?: string;
            };
            draft?: {
                class?: string;
                tooltip?: string;
            };
        };
    } = {
        allowDraft: true,
        postChangesOnFeed: false
    }
): void
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
            <td><code>component</code></td>
            <td>dxForm</td>
            <td>true</td>
            <td></td>
            <td>Form where it will be added the button</td>
        </tr>
        <tr className="selected">
            <td><code>descriptionComponent</code></td>
            <td>any</td>
            <td>true</td>
            <td>null</td>
            <td></td>
        </tr>
        <tr className="selected">
            <td><code>onClick</code></td>
            <td>Function</td>
            <td>false</td>
            <td></td>
            <td>On button click function</td>
        </tr>
        <tr className="selected">
            <td><code>callBack</code></td>
            <td>any</td>
            <td>true</td>
            <td></td>
            <td>Callback function</td>
        </tr>
        <tr className="selected">
            <td><code>description</code></td>
            <td>dxHtmlEditor</td>
            <td>false</td>
            <td></td>
            <td>Description box</td>
        </tr>
        <tr className="selected">
            <td><code>files</code></td>
            <td>FileSystemWidgetComponent</td>
            <td>false</td>
            <td></td>
            <td>File upload component</td>
        </tr>
        <tr className="selected">
            <td><code>postModel</code></td>
            <td>PostModel</td>
            <td>false</td>
            <td></td>
            <td>Post model for document creation</td>
        </tr>
        <tr className="selected">
            <td><code>dashboardDocumentSaveObject</code></td>
            <td>DashboardDocumentSaveObject</td>
            <td>false</td>
            <td></td>
            <td>Object to save document</td>
        </tr>
        <tr className="selected">
            <td><code>isDraftModel</code></td>
            <td>boolean</td>
            <td>false</td>
            <td></td>
            <td>If document is draft</td>
        </tr>
        <tr className="selected">
            <td><code>briefPostModel</code></td>
            <td>BriefPostModel</td>
            <td>false</td>
            <td></td>
            <td>Brief post model</td>
        </tr>
        <tr className="selected">
            <td><code>dashboardDocumentSaveObject</code></td>
            <td>DashboardDocumentSaveObject</td>
            <td>false</td>
            <td></td>
            <td>Object to save document</td>
        </tr>
        <tr className="selected">
            <td><code>postChangesOnFeed</code></td>
            <td>boolean</td>
            <td>false</td>
            <td></td>
            <td>Flag to allow changes on feed</td>
        </tr>
        <tr className="selected">
            <td><code>allowDraft</code></td>
            <td>boolean</td>
            <td>false</td>
            <td></td>
            <td>If document can be draft</td>
        </tr>
        <tr className="selected">
            <td><code>class</code></td>
            <td>string</td>
            <td>false</td>
            <td></td>
            <td>Save button icon</td>
        </tr>
        <tr className="selected">
            <td><code>tooltip</code></td>
            <td>string</td>
            <td>false</td>
            <td></td>
            <td>Save button tooltip</td>
        </tr>
        <tr className="selected">
            <td><code>class</code></td>
            <td>string</td>
            <td>false</td>
            <td></td>
            <td>Draft button icon</td>
        </tr>
        <tr className="selected">
            <td><code>tooltip</code></td>
            <td>string</td>
            <td>false</td>
            <td></td>
            <td>Draft button tooltip</td>
        </tr>
    </tbody>
</table>

#### Basic Usage

```javascript
SW.UI.Buttons.addCreateToSubHeader("project", e.component, 
   {
       onClick: (postModel, dashboardDocumentSaveObject) => {
                   postModel["Custom"] = {
                       JobTypeId: postModel.Actions.Document.Project.ProjectNatureId
                   };
                   return postModel;
               },
       components: {
           description: SW.getComponent("description")
       }
   }
);
```

#### Response

![img](/img/responses/addCreateButtonToSubHeader_response.png)

---

## addSaveToSubHeader

#### Description

This method can be used to generate a save button in the sub-header.

#### Method(s)

```javascript
function addSaveToSubHeader(documentName: string, component: dxForm,
    params: {
        patchEndpoint?: string;
        onClick?: (currentDocument: Document, formComponent: dxForm, otherFields: any) => void;
        postChangesOnFeed?: boolean;
        icons?: {
            save?: {
                class?: string;
                tooltip?: string;
            };
        };
    } = {
        postChangesOnFeed: false
    }
): void
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
            <td><code>component</code></td>
            <td>dxForm</td>
            <td>true</td>
            <td></td>
            <td>Form where it will be added the button</td>
        </tr>
        <tr className="selected">
            <td><code>patchEndpoint</code></td>
            <td>string</td>
            <td>false</td>
            <td></td>
            <td>Endpoint for patch request</td>
        </tr>
        <tr className="selected">
            <td><code>onClick</code></td>
            <td>Function</td>
            <td>false</td>
            <td></td>
            <td>On button click function</td>
        </tr>
        <tr className="selected">
            <td><code>postChangesOnFeed</code></td>
            <td>boolean</td>
            <td>false</td>
            <td></td>
            <td>Flag to allow changes on feed</td>
        </tr>
        <tr className="selected">
            <td><code>class</code></td>
            <td>string</td>
            <td>false</td>
            <td></td>
            <td>Button icon</td>
        </tr>
        <tr className="selected">
            <td><code>tooltip</code></td>
            <td>string</td>
            <td>false</td>
            <td></td>
            <td>Button tooltip</td>
        </tr>
    </tbody>
</table>

#### Basic Usage

```javascript
SW.UI.Buttons.addSaveButtonToSubHeader("commercialclient", e.component, 
   {
       onClick: (currentDocument, formComponent, othersFields) => {
                   SW.Toastr.toastr_Success(
                       SW.getTranslation(currentDocument.TypeName.charAt(0).toUpperCase() 
                       + currentDocument.TypeName.slice(1) + "Saved"), currentDocument.TypeName);
                   return true;
               },
       postChangesOnFeed: true
   }
);  
```

#### Response

![img](/img/responses/addSaveButtonToSubHeader_response.png)

---

## addToSubHeader

#### Description

This method can be used to add buttons to the sub-header.

#### Method(s)

```javascript
1   function addToSubHeader(component: DOMComponent, buttons: SubHeaderButton[]): void
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
            <td><code>component</code></td>
            <td>DOMComponent</td>
            <td>true</td>
            <td></td>
            <td>Parent component where the buttons will be added</td>
        </tr>
        <tr className="selected">
            <td><code>buttons</code></td>
            <td>SubHeaderButton[]</td>
            <td>true</td>
            <td></td>
            <td>An array of buttons</td>
        </tr>
    </tbody>
</table>

#### Basic Usage

```javascript
SW.UI.Buttons.addToSubHeader(e.component, buttons);
```
:::important

Buttons have the following structure

:::
![img](/img/responses/addButtonsStructure.png)

#### Response

![img](/img/responses/addToSubHeaderButtons_response.png)

---

## setAllEnabled

#### Description

This method can be used to enable or disable buttons.

#### Method(s)

```javascript
1   function setAllEnabled(value: boolean): void
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
            <td><code>value</code></td>
            <td>boolean</td>
            <td>true</td>
            <td></td>
            <td>True to enbale and false to disable</td>
        </tr>
    </tbody>
</table>

#### Basic Usage

```javascript
SW.UI.Buttons.setAllEnabled(true)
```