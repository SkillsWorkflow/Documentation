---
id: argument-axis-label
title: Argument Axis
sidebar_label: Argument Axis
slug: /
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### Description
A property used to set chart's argument axis in a workspace. 

The argumentAxis object, configures the argument axis individually.

By default, the argument axis will show just text, but by using the properties label, format, type and entity it can show a image.

### Example

```json
{
    argumentAxis: {
        label: {
            format: {
                type: "image",
                entity: "user",
                mapping: {
                    id: "Oid",
                    name: "LoginName",
                    hasImage: "HasImage"
                }
            }
        }
    }
}
```

### entity
To choose which of the entities mentioned below will be represented.

Accepted Values: 'client' | 'company' | 'user' 

<Tabs
  groupId="entity"
  defaultValue="user"
  values={[
    {label: 'User', value: 'user'},
    {label: 'Client', value: 'client'},
    {label: 'Company', value: 'company'},
  ]
}>
<TabItem value="user">

```json
{
    entity: "user"
}
```

Required on data source:
- Id
- Name
- HasImage

</TabItem>
<TabItem value="client">

```json
{
    entity: "client"
}
```

Required on data source:
- Id
- Name
- HasImage

</TabItem>
<TabItem value="company">

```json
{
    entity: "company"
}
```

Required on data source:
- Id
- Name
- HasImage

</TabItem>
</Tabs>

### mapping

If the data source doesn't match the mapping to the default fields, it can be mapped by using the mapping property:
```json
{
    entity: "user",
    format: {
        mapping: {
            id: "UserId",
            name: "UserName",
            hasImage: "UserHasImage"
        }
    }
}
```

### Example

#### Properties defined in the chart configuration
<figure>

![img-box-shadow](/img/craft/panels/chart/argumentAxis/image-label-properties.png)
</figure>

#### Chart argument axis UI
<figure>

![img-box-shadow](/img/craft/panels/chart/argumentAxis/argument-axis-ui.png)
</figure>