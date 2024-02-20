---
id: allow-inline
title: Allow Inline Editing
sidebar_label: Allow inline editing
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

On this page you will find how to use inline editing.

To use it, you need to turn on the allow inline editing button.

When this button is enable the following properties will have the following values:

- Allow Updating: true
- mode: "cell"

:::note
By default all the columns appear not editable.

<p>If you want to enable a column put the allowEditing with the value of true</p>
:::

<figure>

![img-box-shadow](/img/craft/grid/allowInlineEditing/allowInline-property.png)

</figure>

<figure>

![img-box-shadow](/img/craft/grid/allowInlineEditing/gridExample.png)

</figure>

## saveOptions

A function used to save the userfields.

:::note
For the document's fields, you don't need to use it.

 <p>Make sure that the name of the field in the query is the same that appears in the PATCH endpoint.</p>
:::

### type

Accepted Values: 'userfield'

<Tabs
groupId="type"
defaultValue="userfield"
values={[
{label: 'userfield', value: 'userfield'}
]
}>

<TabItem value="userfield">

<h4></h4>

```js {3}
{
  saveOptions: {
    type: "userfield";
  }
}
```

<h4> dataType </h4>

Indicates the type of data, each data type corresponds to a number.

```js {4}
{
    saveOptions: {
        type: "userfield",
        dataType: 7
    }
}
```

<h4> fieldName</h4>

To assign the name you want to save the field.

if the name of the field doesn't match with the original name (the that exists in the database).

```js {5}
{
    saveOptions: {
        type: "userfield",
        dataType: 7
        fieldName: "ProjectComment"
    },
    dataField: 'Comment',
    dataType: 'string',
    allowEditing: true
}
```

<figure>

![img-box-shadow](/img/craft/grid/allowInlineEditing/queryExample.png)

</figure>

<figure>

![img-box-shadow](/img/craft/grid/allowInlineEditing/UserfieldTextColumnExample.png)

</figure>

</TabItem>

</Tabs>
