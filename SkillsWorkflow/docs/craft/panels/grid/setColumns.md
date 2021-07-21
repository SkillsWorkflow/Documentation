---
id: set-columns
title: Set Columns
sidebar_label: Set Columns
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<h3>Description</h3>
A function used to set grid's columns in a workspace. 

By default, a column is created for each field of a data source object, but in most cases, it is redundant. To specify a set of columns to be created in a grid, assign an array specifying these columns to the columns property.

Each object in it configures a single column. If a column does not need to be customized, this array may include the name of the field that provides data for this column.

Each grid column is represented in this array by an object containing column settings or by a data source field that this column is bound to.


Column properties define the behavior and appearance of a grid column.

<h3>Example</h3>

```json
{
    entity: "client",
    format: {
        type: "image",
        mapping: {
            id: "ClientId",
            name: "ClientName",
            hasImage: "ClientHasImage"
        },
        properties: {
            hideName: true,
            size: "small",
            forceImage: false
        }
    },
    caption: "Client",
    dataType: "string",
    dataField: "ClientName",
    alignment: "center",
    width: 50,
    allowEditing: false
}
```

## entity
Setting up the Entity property, the standard display will be used. 
If the cell display needs to be configured, the format property allows defining other default displays according to the selected type.
According to the type to be presented in the column, image, link or text, some additional fields must be available in the data source.

Accepted Values: 'client' | 'company' | 'stage' | 'user' 

<Tabs
  groupId="entity"
  defaultValue="client"
  values={[
    {label: 'Client', value: 'client'},
    {label: 'Company', value: 'company'},
    {label: 'Stage', value: 'stage'},
    {label: 'User', value: 'user'},
  ]
}>
<TabItem value="client">

```json
{
    entity: "client"
}
```

Required on data source:
- Id
- Name
- HasImage (if type is image)

</TabItem>
<TabItem value="company">

```json
{
    entity: "company"
}
```
</TabItem>
<TabItem value="stage">

```json
{
    entity: "stage"
}
```
</TabItem>
<TabItem value="user">

```json
{
    entity: "user"
}
```
</TabItem>
</Tabs>

## format
Formats the cell before it is displayed.

There are some standard formats available. By specifing its type the corresponding format will be displayed.

<h3>mapping</h3>

If the data source does is not mapping to the defaults fields name, it can be mapped by using the mapping property:
```json
{
    entity: "client",
    format: {
        mapping: {
            id: "ClientId",
            name: "ClientName",
            hasImage: "ClientHasImage"
        }
    }
}
```
<h3>type</h3>
Accepted Values: 'undefined' | 'image' | 'link' 

To setup the Image type, it is necessary that data source includes the entity:
- Id
- Name
- HasImage


<Tabs
  groupId="type"
  defaultValue="image"
  values={[
    {label: 'Image', value: 'image'},
    {label: 'Link', value: 'link'},
  ]
}>
<TabItem value="image">

```json
{
    entity: "client",
    format: {
        type: "image"
    }
}
```
### size
Accepted Values: 'small' | 'medium' | 'large' 

To define the size of the image it should be set the size property.
```json
{
    entity: "client",
    format: {
        type: "image",
        size: "small"
    }
}
```

<h3>properties</h3>

Properties withing format property customize the behavior and appearance of a default display.

In the following example, to hide the client name from the column and keep only the client image, hideName property should be set as true.
```json
{
    entity: "client",
    format: {
        type: "image",
        properties: {
            hideName: true
        }
}
```
</TabItem>

<TabItem value="link">

```json
{
    entity: "client",
    format: {
        type: "link"
    }
}
```
</TabItem>
</Tabs>






## caption
Specifies a caption for the column.
## dataType
Casts column values to a specific data type

Accepted Values: 'string' | 'number' | 'date' | 'boolean' | 'object' | 'datetime'
## dataField
Binds the column to a field of the dataSource.
## alignment
Aligns the content of the column

Accepted Values: undefined | 'center' | 'left' | 'right'
## width
Specifies the column's width in pixels or as a percentage. Ignored if it is less than minWidth.

Type: Number | String

The property supports the following types of values:

- Number - The column's width in pixels.
- String - A CSS-accepted column width measurement (for example, "55px", "80%" and "auto") except relative units such as em, ch, vh, etc.

## allowEditing
A flag to allow column editing