---
id:  ui
title: ' '
sidebar_label: UI
---

# User Inteface

With this namespace, you can quickly provide methods to show UI.

The namespace User Interface provides to developers, methods to easily show or validate data.

```javascript
//accessing to utils methods
SW.ui.{methodName}
```

---

### Show bulk

The showBulkd method provides a string relative date to the current date.

```js {3}
//using the method assuming that date now is 2021-02-01
> var date = new Date(2021,0,1);
> var timeAgo = SW.Utils.timeAgo(date);

> console.log(timeAgo);
< "a month ago"
```


### Show create

This is not

### Show popup

### Show preview

## Grid

### Add toolbar buttons

## Select Box

### Get data source by endpoint