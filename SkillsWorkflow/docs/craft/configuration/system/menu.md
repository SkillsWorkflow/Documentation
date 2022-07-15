---
id: menu
title: 'Menu'
sidebar_label: Menu
---

On this page you will find how to affect only the icon that appears in the menu.
:::note
To activate one or more properties of the the new menu, the Show new menu  button should be enabled
:::

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
            <td>Display the new menu.</td> 
        </tr>
        <tr className="selected">
            <td><code>On Initialized</code></td>
            <td>Function</td>
            <td>false</td>
            <td>A function used to save the UI component instance.</td> 
        </tr>
        <tr className="selected">
            <td><code>On Item Click</code></td>
            <td>Function | String</td>
            <td>false</td>
            <td>A function that is executed when a collection item is clicked or tapped.</td> 
        </tr>
        <tr className="selected">
            <td><code>On Showing</code></td>
            <td>Function</td>
            <td>false</td>
             <td>A function that is executed before the context menu is shown.</td> 
        </tr>
    </tbody>
</table> 


##
<figure>

![img-box-shadow](/img/craft/configuration/system/properties.png)
</figure>

### Basic Usage

```javascript
function onShowing(menus) {
    let obj = menus.find(a => a.id == "Contracts");
    if (obj) {
        obj.icon = 'far fa-calendar-alt'
    }
    return menus
}
```

<h3>Example</h3>

<figure>

![img-box-shadow](/img/craft/configuration/system/menu-icon-property-example.png)
</figure>

<figure>

![img-box-shadow](/img/craft/configuration/system/menu-icon-example.png)
</figure>


