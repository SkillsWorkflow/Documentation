---
id:  ui-buttons
title: ' '
sidebar_label: Buttons
---

## addSaveToSubHeader

### Description

This method can be used inside any workspace. Generates a save button in the subheader

### Method(s)

```javascript
1   function addSaveToSubHeader(entity: string, component: any, 
2           patchEndpoint: string = null, callBack: function = null, 
3           postChangesOnFeed: boolean = false): void;
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
            <td><code>entity</code></td>
            <td>String</td>
            <td>true</td>
            <td></td>
            <td>Refers to a pre-set element of entity list. Has unique atributes and styling</td>
        </tr>
        <tr className="selected">
            <td><code>component</code></td>
            <td>Any</td>
            <td>true</td>
            <td></td>
            <td></td>
        </tr>
        <tr className="selected">
            <td><code>patchEndpoint</code></td>
            <td>String</td>
            <td>true</td>
            <td>null</td>
            <td>Endpoint for patch request</td>
        </tr>
        <tr className="selected">
            <td><code>callBack</code></td>
            <td>Function</td>
            <td>true</td>
            <td>null</td>
            <td>Callback function</td>
        </tr>
        <tr className="selected">
            <td><code>postChangesOnFeed</code></td>
            <td>Boolean</td>
            <td>true</td>
            <td>false</td>
            <td>Flag to allow changes on feed</td>
        </tr>
    </tbody>
</table>

### Basic Usage

```javascript
> SW.addSaveButtonToSubHeader("commercialclient", e.component, null, 
    async (currentDocument, formComponent, othersFields) => {
        SW.Toastr.toastr_Success(
            SW.getTranslation(currentDocument.TypeName.charAt(0).toUpperCase() 
            + currentDocument.TypeName.slice(1) + "Saved"), currentDocument.TypeName);
        return true;
    }, true);

```
### Response

![img](/img/responses/addSaveButtonToSubHeader_response.png)

---

## addCreateToSubHeader

### Description

This method can be used inside any workspace. Generates a create button in the subheader

### Method(s)

```javascript
1   function addCreateToSubHeader(entity: string, formComponent: any, 
2           descriptionComponent: any = null, postModelMapper: any = null, 
3           callback: Function = null, postChangesOnFeed: boolean = false, 
4           descriptionModelMapper: any = null, filesComponent: any = null, 
5           allowDraft: boolean = true)
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
            <td><code>entity</code></td>
            <td>String</td>
            <td>true</td>
            <td></td>
            <td>Refers to a pre-set element of entity list. Has unique atributes and styling</td>
        </tr>
        <tr className="selected">
            <td><code>formComponent</code></td>
            <td>any</td>
            <td>true</td>
            <td></td>
            <td></td>
        </tr>
        <tr className="selected">
            <td><code>descriptionComponent</code></td>
            <td>any</td>
            <td>true</td>
            <td>null</td>
            <td></td>
        </tr>
        <tr className="selected">
            <td><code>postModelMapper</code></td>
            <td>any</td>
            <td>true</td>
            <td>null</td>
            <td></td>
        </tr>
        <tr className="selected">
            <td><code>callBack</code></td>
            <td>any</td>
            <td>true</td>
            <td></td>
            <td>Callback function</td>
        </tr>
        <tr className="selected">
            <td><code>postChangesOnFeed</code></td>
            <td>Boolean</td>
            <td>false</td>
            <td>false</td>
            <td>Flag to display changes on feed</td>
        </tr>
        <tr className="selected">
            <td><code>descriptionModelMapper</code></td>
            <td>any</td>
            <td>true</td>
            <td>null</td>
            <td></td>
        </tr>
        <tr className="selected">
            <td><code>filesComponent</code></td>
            <td>any</td>
            <td>true</td>
            <td></td>
            <td></td>
        </tr>
        <tr className="selected">
            <td><code>allowDraft</code></td>
            <td>Boolean</td>
            <td>false</td>
            <td>true</td>
            <td>Allow draft creation</td>
        </tr>
    </tbody>
</table>

### Basic Usage

```javascript
>   SW.addCreateToSubHeader("project", e.component, SW.getComponent("description"), 
        async (postModel, dashboardDocumentSaveObject) => {
            postModel["Custom"] = {
                JobTypeId: postModel.Actions.Document.Project.ProjectNatureId
            };
            return postModel;
        }
```
### Response

![img](/img/responses/addCreateButtonToSubHeader_response.png)

---

## addToSubHeader

### Description

This method can be used inside any workspace. Creates an button in the subheader

### Method(s)

```javascript
1   function addToSubHeader(component: any, buttons: SubHeaderButton[])
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
            <td>any</td>
            <td>true</td>
            <td></td>
            <td>Parent component where the buttons will be added</td>
        </tr>
        <tr className="selected">
            <td><code>buttons</code></td>
            <td>SubHeaderButton</td>
            <td>true</td>
            <td></td>
            <td>An array of buttons</td>
        </tr>
    </tbody>
</table>

### Basic Usage

```javascript
>    SW.UI.buttons.addToSubHeader(e.component, buttons);
```
:::important

Buttons have the following structure

:::
![img](/img/responses/addButtonsStructure.png)

### Response

![img](/img/responses/addToSubHeaderButtons_response.png)
