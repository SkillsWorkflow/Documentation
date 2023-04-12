---
id: tagbox
title: TagBox
sidebar_label: TagBox
---

On this page you will find TagBoxs examples as well as how to setup a TagBox.

## Multiple Selection

![img-box-shadow](/img/craft/panels/form/tagbox/tagbox-selection.png)

### Description

This example shows how to configure a TagBox inside a Form that:
- Uses Custom Fields
- Multiple Selection custom field
- Lookup data from Workspace Store (query)

### Example

#### Item Definition

```js
 {
    editorType: "dxTagBox",
    dataField: "CMS",
    saveOptions: {
        type: "userfield",
        fieldName: "CMS",
        dataType: 7,
        isMultipleSelection: true
    },
    label: {
        text: "CMS"
    },
    editorOptions: {
        searchEnabled: false,
        dataSource: {
            load: function (loadOptions) {
                return SW.Store.get('DeliverableUserfields').then( r => r.find(usf => usf.ColumnName == 'CMS').LookupValues.split(';'))
            },
            byKey: function (e) {
                if (e) {
                    return e;
                }
            }
        }
    }
}
```

#### Query defined in Workspace Store
<figure>

![img-box-shadow](/img/craft/panels/form/tagbox/query-data.png)
</figure>