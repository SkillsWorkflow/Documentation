---
id: Endpoint
title: Endpoint
sidebar_label: Endpoint
---

On this page you will find how to create a workspace using an Endpoint as DataSource

<h3>Basic Usage</h3>

```js
function returnEndpoint(mapper) {
  var clientId = SW.Application.Workspace.context().currentDocument.Oid;
  return SW.executeAPI(
    "GET",
    "v3/commercial-clients/" + clientId + "/requests/new"
  ).then((result) => {
    return mapper(result.Request);
  });
}
```

<h3>Example</h3>

<figure>

![img-box-shadow](/img/craft/panels/dataSource/endpoint-datasource.png)

</figure>

<figure>

![img-box-shadow](/img/craft/panels/dataSource/endpoint-datasource-example.png)

</figure>
