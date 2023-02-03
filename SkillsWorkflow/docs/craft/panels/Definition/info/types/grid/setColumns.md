---
id: set-columns
title: Set Columns
sidebar_label: Set Columns
slug: /
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

A function used to set grid's columns in a workspace. 

By default, a column is created for each field of a data source object, but in most cases, it is redundant. To specify a set of columns to be created in a grid, assign an array specifying these columns to the columns property.

Each object in it configures a single column. If a column does not need to be customized, this array may include the name of the field that provides data for this column.

Each grid column is represented in this array by an object containing column settings or by a data source field that this column is bound to.


Column properties define the behavior and appearance of a grid column.

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

Accepted Values: 'client' | 'company' | 'stage' | 'user' | 'team'

<Tabs
  groupId="entity"
  defaultValue="client"
  values={[
    {label: 'Client', value: 'client'},
    {label: 'Company', value: 'company'},
    {label: 'Stage', value: 'stage'},
    {label: 'User', value: 'user'},
    {label: 'Team', value: 'team'},
    {label: 'label color', value: 'color'}
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
<TabItem value="team">

```json
{
    entity: "team"
}
```

</TabItem>

<TabItem value="color">



Customize the text and the background of the type's label using the column's entity.

By default the background color appears without color and the text appears in black.

To choose the color for each entity, first you need to go to the maintenance and define the colors for the background and the text

Accept entities: "jobtype" | "leavetype"

#

<figure>

![img-box-shadow](/img/craft/grid/setColumns/configuration-color-for-jobtype-example.png)

</figure>

<table className="custom-table">
    <thead> 
        <tr>
            <th>Column name</th>
            <th>Type</th>
            <th>Required</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr className="selected">
            <td><code>StyleJson</code></td>
            <td>Json</td>
            <td>true</td>
            <td>Add the column StyleJson in the DataSource</td> 
        </tr>
    </tbody>
</table>

````json {6}
{
    dataField: "JobType",
    caption: "Job Type",
    entity: "jobtype",
    format: {
        style: "style"
    },
    dataType: "string"

}
````

<figure>

![img-box-shadow](/img/craft/grid/setColumns/style-query.png)

</figure>

<figure>

![img-box-shadow](/img/craft/grid/setColumns/format-column-style-example.png)

</figure>

<figure>

![img-box-shadow](/img/craft/grid/setColumns/grid-colorType-example.png)

</figure>

:::note
To use the entity without the format, the dataSource expects the  "name of the entity + style" as column name.
:::


<figure>

![img-box-shadow](/img/craft/grid/setColumns/queryColorType.png)

</figure>


</TabItem>
</Tabs>

## format
Formats the cell before it is displayed.

There are some standard formats available. By specifing its type the corresponding format will be displayed.

### mapping


If the data source does not mapping to the defaults fields name, it can be mapped by using the mapping property:

```json 
{
    caption: "Requesters",
    dataType: "string",
    dataField: "RequestersNames",
    visible: false,
    alignment: "center",
    width: 150,
    entity: "team",
    format: {
        mapping: {
            id: "RequestersIds",
            name: "RequestersNames",
            hasImage: "RequestersHasImage"
        }
    }
}

```

<figure>

![img-box-shadow](/img/craft/grid/setColumns/entity-team-mapping-example.png)

</figure>

<figure>

![img-box-shadow](/img/craft/grid/setColumns/entity-team-example.png)

</figure>

### type

Accepted Values: 'undefined' | 'image' | 'link' | 'document' | 'date' | 'currency' | 'read'

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
    {label: 'Document', value: 'document'},
    {label: 'Date', value: 'date'},
    {label: 'Currency', value: 'currency'},
    {label: 'Read', value: 'read'}
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

### properties

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

<TabItem value="document">

The follow examples shows how to display the name and the image of the document together.

1- With entity defined.

```json
{
    dataField: "Name",
    caption: "Title",
    format: {
        type: "document",
        properties: {
            hideName: false,
            size: "small"
        }
    }
}
```
<figure>

![img-box-shadow](/img/craft/grid/setColumns/document-image-with-entity-property.png)

</figure>

2- Without entity defined.

```json
{
    dataField: "Document",
    caption: "Title",
    format: {
        type: "document",
        properties: {
            hideName: false,
            size: "small"
        },
        mapping: {
            documentName: "Document",
            title: "Name"
        }
    }
}
```

### documentName

The name defined in the dataField.

### title

Define the name that appears in the UI. Could be different of the name of the dataField.


<figure>

![img-box-shadow](/img/craft/grid/setColumns/document-image-without-entity-property.png)


</figure>


<figure>

![img-box-shadow](/img/craft/grid/setColumns/document-image-example.png)


</figure>

</TabItem>


<TabItem value="date">

The follow example shows how to convert an UTC date into local.

By default the date is converted from Utc into local in the format "DD/MMMM/YYYY HH:mm".

```json
{
    dataField: "CreatedOnUtc",
    caption: "Created On",
    format: {
        type: "date"
    }
}
```

<figure>

![img-box-shadow](/img/craft/grid/setColumns/convertUtcDateToLocal-example.png)

</figure>

## properties

The following examples shows how to customize de appearance of the default behavior.

- format: customize the format of the date in the UI.

```json
{
    dataField: "CreatedOnUtc",
    caption: "Created On",
    format: {
        type: "date",
        properties: {
          format:  "DD/MMM/YYY"
    }
}
```

<table className="custom-table">
    <thead> 
        <tr>
            <th>Format</th>
            <th>Type</th>
            <th>Required</th>
            <th>Example</th>
        </tr>
    </thead>
    <tbody>
        <tr className="selected">
            <td><code>"HH:mm"</code></td>
            <td>string</td>
            <td>false</td>
            <td>12:06</td> 
        </tr>
    </tbody>
     <tbody>
        <tr className="selected">
            <td><code>"DD/MM/YYYY"</code></td>
            <td>string</td>
            <td>false</td>
            <td>12/05/2022</td> 
        </tr>
    </tbody>
     <tbody>
        <tr className="selected">
            <td><code>"DD/MM/YYYY HH:mm"</code></td>
            <td>string</td>
            <td>false</td>
            <td>12/05/2022 12:06</td>
        </tr>
    </tbody>
     <tbody>
        <tr className="selected">
            <td><code>"DD/MMM/YYYY HH:mm"</code></td>
            <td>string</td>
            <td>false</td>
            <td>12/May/2022 12:06</td>
        </tr>
    </tbody>
</table> 

##
- displayInUtc: Allows to display the date in UTC.


```json
{
    dataField: "CreatedOnUtc",
    caption: "Created On",
    format: {
        type: "date",
        properties: {
          format:  "DD/MMM/YYY",
          displayInUtC: true
    }
}
```

</TabItem>

<TabItem value="currency">

The follow examples shows how to display the currency symbol in a currency column.

```json
{
    dataField: "Cost",
    caption: "Cost",
    format: {
        type: "currency",
        properties: {
            precision: 1
        }
        mapping: {
            symbol: "Symbol"
        }
    }
}
```
<figure>

![img-box-shadow](/img/craft/grid/setColumns/currency-symbol.png)

</figure>

### precision

To choose how many decimal places are shown.

### symbol

The data field name that has the currency symbols.


<figure>

![img-box-shadow](/img/craft/grid/setColumns/currency-symbol-example.png)


</figure>


</TabItem>

<TabItem value="read">

The follow examples shows how to display the read/unread symbol in a boolean column.

```json
{
    dataField: "AlreadyRead",
    caption: "Read",
    format: {
        type: "read"
    }
}
```
<figure>

![img-box-shadow](/img/craft/grid/setColumns/read-symbol-config.png)7

</figure>


<figure>

![img-box-shadow](/img/craft/grid/setColumns/read-symbol-example.png)


</figure>


</TabItem>


</Tabs>

---

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


## required
Makes a column required to fill

Type: Boolean

```json
{
    dataField: "example",
    required: true
}
```



<figure>

![img-box-shadow](/img/craft/grid/setColumns/document-image-required.png)

</figure>

## showZeroes

show or hide the zeroes values

Type: Boolean

```json
 {
        dataField: "From0To60",
        visible: true,
        dataType: "number",
        alignment: "right",
        format: {
            type: "fixedPoint",
            precision: 2,
        },
        showZeroes: false
}
```



<figure>

![img-box-shadow](/img/craft/grid/setColumns/showZeros-property-example.png)

</figure>

<figure>

![img-box-shadow](/img/craft/grid/setColumns/showZeros-column-example.png)

</figure>

## header

Customize the column header's

by default the background color is grey and the label has the the default style of the system.

Type: object

```json
{
    dataField: "People",
    alignment: "center",
    header: {
        color: "green",
        label: {
            color: "white",
            font: {
                size: "25px",
                family: "Times New Roman"
            }
        }
    }
}
```

<figure>

![img-box-shadow](/img/craft/grid/setColumns/headerColor-column-customize-example.png)

</figure>

<figure>

![img-box-shadow](/img/craft/grid/setColumns/headerColor-customize-example.png)

</figure>


### color

Change the background color of the Header.

Type: string

Accepted Values: name of the color, HEX code, RGB code

### label

Customize the label of the column.

Type: object

#### color

Change the color of the text.

Type: string

Accepted Values: name of the color, HEX code, RGB code
### font

Change the font's size and family.


Type: string

- size: the value must be in pixels
- family: font's family name



