---
id: allow-inline
title: Allow Inline
sidebar_label: Allow Inline
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


On this page you will find how to use inline editing.

To use this feature you need to turn on the allow inline button.

When this button is enable the following properties will have the following values:

- Allow Updating: true
- mode: "cell"

:::note
With the Allow updating enable, all the columns will appear editable,
<p>if you want to disable a column put the allowEditing with the value of false</p>
:::


<figure>

![img-box-shadow](/img/craft/grid/allowInline/allowInline-property.png)

</figure>


<figure>

![img-box-shadow](/img/craft/grid/allowInline/gridExample.png)

</figure>


## saveOptions

A function used to save document or userfields.

If the name of the field matches with the name used in the patch endpoint you only need to add saveOptions: "document".

```js {2}
{
    saveOptions:"document",
    dataField: 'Name',
    caption: "Project Name",
    visible: true,
    allowEditing: true
}
```
### type

Accepted Values: 'document', 'userfield

<Tabs
  groupId="type"
  defaultValue="document"
  values={[
    {label: 'document', value: 'document'},
    {label: 'userfield', value: 'userfield'},
  ]
}>
<TabItem value="document">

```js {3}
{
    saveOptions: {
        type: "document"
    }
}
```

### fieldName

To assign the name you want to save the field. 

if the name of the field doesn't match with the  name used in the patch endpoint.

```js {4}
{
    saveOptions: {
        type: "document",
        fieldName: "Name"
    },
    dataField: 'ProjectName',
    caption: 'Project Name',
    visible: true,
    allowEditing: true
}
```

<figure>

![img-box-shadow](/img/craft/grid/allowInline/saveOptionsDocumentColumn.png)

</figure>


</TabItem>


<TabItem value="userfield">

```js {3}
{
    saveOptions: {
        type: "userfield"
    }
}
```

### dataType

Indicates the type of data, each data type corresponds to a number

```js {4}
{
    saveOptions: {
        type: "userfield",
        dataType: 7
    }
}
```
### fieldName

To assign the name you want to save the field. 

if the name of the field doesn't match with the original name (the that exists in the database).

```js {5}
{
    saveOptions: {
        type: "document",
        dataType: 7
        fieldName: "ProjectComment"
    },
    dataField: 'Comment',
    dataType: 'string',
    allowEditing: true
}
````

<figure>

![img-box-shadow](/img/craft/grid/allowInline/saveOptionsUserfieldColumn.png)

</figure>

</TabItem>

</Tabs>






