---
id: menu
title: 'Menu'
sidebar_label: Menu
---
### Description

On this page you will find how to affect only the icon that appears in the menu.
<p>To activate one or more proprerties of the the new menu, the <b>Show new menu</b> button should be enabled</p>

### Change icon

<table className="custom-table">
    <thead> 
        <tr>
            <th>Properties</th>
            <th>Type</th>
            <th>Required</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr className="selected">
            <td><code>Show new menu</code></td>
            <td>Boolean</td>
            <td>false</td>
            <td>Display the New Menu</td> 
        </tr>
        <tr className="selected">
            <td><code>On Initialized</code></td>
            <td>Function</td>
            <td>false</td>
            <td></td> 
        </tr>
        <tr className="selected">
            <td><code>On Item Click</code></td>
            <td>Function</td>
            <td>false</td>
            <td></td> 
        </tr>
        <tr className="selected">
            <td><code>On Showing</code></td>
            <td>Function</td>
            <td>false</td>
             <td></td> 
        </tr>
    </tbody>
</table> 


##
<figure>

![img-box-shadow](/img/craft/configuration/system/properties.png)
</figure>

### Basic Usage

```javascript
function onShowing(menus){
    let obj = menus.find(a => a.id == "Contracts");
    if (obj) {
        obj.icon = 'fal fa-alicorn'
    }
  return menus 
}
```

### Example

<figure>

![img-box-shadow](/img/craft/configuration/system/menu-icon-property-example.png)
</figure>

<figure>

![img-box-shadow](/img/craft/configuration/system/menu-icon-example.png)
</figure>


