---
id: set-items
title: Set Items
sidebar_label: Set Items
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## saveOptions

A function used to save User, Document and other fields in the form.

```js
{
    saveOptions: {
        type: "document",
        fieldName: "Agreed Date",
    },
    dataField: "AgreedDateUtc",
    label: {
        text: "Internal Due Date"
    }
    editorOptions: {
        type: "datetime",
        displayFormat: "dd/MM/yyy HH:mm",
        disabled: false
    },
    editorType: "dxDateBox"
}
```

### type

Accepted Values: 'document' | 'userfield' | 'other'

<Tabs
groupId="type"
defaultValue="document"
values={[
{label: 'document', value: 'document'},
{label: 'userfield', value: 'userfield'},
{label: 'others', value: 'others'},
]
}>
<TabItem value="document">

```js
{
  saveOptions: {
    type: "document";
  }
}
```

```js
{
    saveOptions: "document",
    dataField: "AgreedDateUtc",
    label: {
        text: "Internal Due Date"
    }
    editorOptions: {
        type: "datetime",
        displayFormat: "dd/MM/yyy HH:mm",
        disabled: false
    },
    editorType: "dxDateBox"
}
```

</TabItem>
<TabItem value="userfield">

```js
{
  saveOptions: {
    type: "userfield";
  }
}
```

</TabItem>
<TabItem value="others">

```js
{
  saveOptions: {
    type: "others";
  }
}
```

</TabItem>

</Tabs>

:::note

- If the type is set as 'others', no further parameter needs to be passed into the saveOptions.

- If is specified as parameter instead of an object. The value passed will set the 'type'.

:::

### fieldName

To assign the name you want to save the field.

```js
{
   saveOptions: {
       type: "userField",
       fieldName: "Priority",
       dataType: 6
   },
   dataField: "Priority"
   editorType: "dxSelectBox"
}
```

:::note
If no value is passed, it will use the dataField value.
:::

### dataType

To pass the User Data Type Id, it takes a value of type number.

:::note
Properties only valid if the type propertie is set to 'userfield'
:::

```js
{
   saveOptions: {
       type: "userField",
       dataType: 6
   },
   dataField: "Priority"
   editorType: "dxSelectBox"
}
```

<table className="custom-table">
    <thead> 
        <tr>
            <th>DataType</th>
            <th>Number</th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        <tr className="selected">
            <td><code>Date</code></td>
            <td>1</td>
            <td></td>
        </tr>
        <tr className="selected">
            <td><code>Integer</code></td>
            <td>3</td>
            <td></td>
        </tr>
         <tr className="selected">
            <td><code>Varchar100</code></td>
            <td>6</td>
            <td></td>
        </tr>
         <tr className="selected">
            <td><code>VarcharMax</code></td>
            <td>7</td>
            <td></td>
        </tr>
         <tr className="selected">
            <td><code>UniqueIdentifier</code></td>
            <td>9</td>
            <td></td>
        </tr>
    </tbody>
</table>

### isMultipleSelection

A parameter of type boolean to allow multisection.

Default value: false.

```js
{
   saveOptions: {
       type: "userField",
       dataType: 6,
       isMultipleSelection: true
   },
   dataField: "Priority"
   editorType: "dxSelectBox"
}
```

### lookupFieldName

To set the userfield lookup field name.

```js
{
   saveOptions: {
       type: "userField",
       dataType: 6,
       isMultipleSelection: true
       lookupfieldName: "lookupPriority"
   },
   dataField: "Priority"
   editorType: "dxSelectBox"
}
```

---

## format

A function used to set the item format.

```js
{
    saveOptions: "document",
    dataField: "Priority",
    label: {
        text: "Priority"
    },
    format: {
        type: "priority"
    }
}
```

### type

Accepted Values: 'priority'

<Tabs
groupId="type"
defaultValue="priority"
values={[
{label: 'priority', value: 'priority'},
]
}>
<TabItem value="priority">

```js
{
  format: {
    type: "priority";
  }
}
```

<figure>

![img-box-shadow-popup](/img/craft/form/setItems/item-format-priority.png)

</figure>

</TabItem>
</Tabs>

---

## useCache

This property allows to cache the data and must be used for fields that has the entity defined

By default the value is false

```js
{
    saveOptions: "document",
    dataField: "Client",
    entity: "commercialclient",
    label: {
        text: "Client"
    },
    editorType: "dxSelectBox",
    useCache: true
}
```

:::note

It will not work for the following entities:

- stage
- user

:::

---

## lookup

```js
{
        dataField: "CompanyId",
        label: {
            text: "CompanyId"
        },
        editorType: "dxSelectBox",
        entity: "company",
        editorOptions: {
            name: "CompanyId"
            lookup:{
                endpoint: {
                    load: "v3/payment-conditions/lookup",
                    byKey: "v3/payment-conditions"
                },
                dataSource: "",
                name: "lookupTemplate",
                dependencyEditor: "DivisionId",
                filterEditors: ["DivsionId", "DepartmentId"],
                filters: [
                    {
                        name: "DocumentTypeName",
                        value: "Skill.Module.BusinessObjects.PriceTable"
                    },
                ]
            }
        }
    }
```

---

## custom editorOptions

```js
{
        dataField: "CompanyId",
        label: {
            text: "CompanyId"
        },
        editorType: "dxSelectBox",
        editorOptions: {
            name: "CompanyId",
            ...SW.UI.SelectBox.getEditorOptions(
                "v3/company",
                {
                    endpointByKey: "v3/company"
                    onBeforeLoad: function(a){
                    }
                }
            )
        }
    }
```

### entity

uses the default lookup of the entity

### name

used to save the component (string)

### load

the endpoint to use for the load of the selectBox (string or function)

### byKey

the endpoint to use as key of the selectBox (if it is used as a string it will put "/" + key + "lookup") (string or function)

### dataSource

under development

### name (inside the property lookup)

the name of the lookup that is not default (string)

### dependencyEditor

the name of the field that will unlock the current field. The field could be a dxSelectBox, dxNumberBox, dxDateBox

(string)

### filterEditors

the name of the field that will unlock the current field. The field could be a dxSelectBox, dxNumberBox, dxDateBox

(string or array)

### filters

name: the name of the filter (string)
value: the value of the filter (boolean, string)

<figure>

![img-box-shadow-popup](/img/craft/form/setItems/info-cascade-example.png)

</figure>

<figure>

![img-box-shadow-popup](/img/craft/form/setItems/info-example.png)

</figure>
