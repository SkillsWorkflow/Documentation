---
id:  utils
title: Utilities
sidebar_label: Utilities
---

The namespace Utilities provides to developers, methods to easily manipulate or validate data.

```javascript
//accessing to utils methods
SW.utils.{methodName}
```

---

### timeAgo

The timeAgo method provides a string relative date to the current date.

```js {3}
//using the method assuming that date now is 2021-02-01
> var date = new Date(2021,0,1);
> var timeAgo = SW.Utils.timeAgo(date);

> console.log(timeAgo);
< "a month ago"
```

### setExternalImage

### getMinutesInHHMMformat

### isValidGuid
