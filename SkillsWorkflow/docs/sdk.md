---
id: sdk
title: SDK

sidebar_position: 0
---

# SDK Documentation

The Skills Workflow SDK provides a set of namespaces with utility functions accessible through the global `SW` object. These functions allow secure and controlled interaction with the platform, supporting integrations, customizations and automations within Custom Scripts or Automation Workflows.

---

## General Structure

All SDK functions are available under the `SW` object, following this pattern:

```javascript
SW.{Namespace}.{Function}
```

Example:

```javascript
var date = "Wed Aug 25 2021 16:23:26 GMT+0100 (Western European Summer Time)";
SW.Utils.Datetime.timeAgo(date);
```

---

## Combined Example

```javascript
const user = SW.User.getCurrentUser()
const today = SW.Utils.formatDate(new Date(), "DD/MM/YYYY")

SW.UI.Alert.info("Hello " + user.displayName +"! Today is " + today)
```

---

## Additional Notes

- All functions must be used within an authorized platform context.
- The `SW` object is available only in approved environments such as Automation Workflows or Custom Scripts.
- For full details on available API endpoints, refer to the official documentation.