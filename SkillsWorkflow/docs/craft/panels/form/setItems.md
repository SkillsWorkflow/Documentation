---
id: set-items
title: Set Items
sidebar_label: Set Items
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## saveOptions

### Description

A function used to save User, Document and other fields in the form.


### Example

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

- If is specified as parameter instead of an object. The value passed will set the 'type'. 


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
 If the type is set as 'others', no further parameter needs to be passed into the saveOptions.
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

If no value is passed, it will use the dataField value.

```js
{
   saveOptions: {
       type: "userField"
   },
   dataField: "Priority"
   editorType: "dxSelectBox"
}
```


## Properties only valid if the type propertie is set to 'userfield'

### dataType

To pass the User Data Type Id, it takes a value of type number.


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


### isMultipleSelection

Default value: false.

A parameter of type boolean to allow multisection.

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



