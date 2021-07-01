---
id: set-items
title: Set Items
sidebar_label: Set Items
---


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## saveOptions

<h3>Description</h3>

A function used to save User, Document and other fields in the form.


<h3>Example</h3>

```json
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

- If is specified as parameter instead of an object. The value passed will set the 'type'. 

```json
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

<h3>type</h3>

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

```json
{
    type: "document"
}
```

</TabItem>
<TabItem value="userfield">

```json
{
    type: "userfield"
}
```

</TabItem>
<TabItem value="others">

```json
{
    type: "others"
}
```

</TabItem>
</Tabs>

:::note
 If the type is set as 'others', no further parameter needs to be passed into the saveOptions.
:::

<h3>fieldName</h3>


To assign the name you want to save the field.

```json
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

If no value is passed, it will use the dataField value.

```json
{
   saveOptions: {
       type: "userField"
   },
   dataField: "Priority"
   editorType: "dxSelectBox"
}
```


<h2>Properties only valid if the type propertie is set to 'userfield'</h2>

<h3>dataType</h3>

To pass the User Data Type Id, it takes a value of type number.


```json
{
   saveOptions: {
       type: "userField",
       dataType: 6
   },
   dataField: "Priority"
   editorType: "dxSelectBox"
}
```


<h3>isMultipleSelection</h3>

Default value: false.

A parameter of type boolean to allow multisection.

```json
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


<h3>lookupFieldName</h3>

To set the userfield lookup field name.

```json
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



