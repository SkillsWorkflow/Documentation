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
    type: "document"
}
```

</TabItem>
<TabItem value="userfield">

```js
{
    type: "userfield"
}
```

</TabItem>
<TabItem value="others">

```js
{
    type: "others"
}
```

</TabItem>

</Tabs>

:::note
 - If the type is set as 'others', no further parameter needs to be passed into the saveOptions.

 - If is specified as parameter instead of an object. The value passed will set the 'type'. 
:::

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

```js
{
   saveOptions: {
       type: "userField"
   },
   dataField: "Priority"
   editorType: "dxSelectBox"
}
```
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




