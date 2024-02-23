---
id: Store
title: Store
sidebar_label: Store
---

On this page you will find how to create a workspace using the Store as DataSource.

<h3>Basic Usage</h3>

<table className="custom-table">
    <thead> 
        <tr>
            <th>Parameters</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr className="selected">
            <td><code>query</code></td>
            <td>Data of the query</td> 
        </tr>
         <tr className="selected">
            <td><code>componentDefinitionId</code></td>
            <td>Id of the component</td> 
        </tr>
         <tr className="selected">
            <td><code>customOperators</code></td>
            <td>Use this parameter to select the data source</td> 
        </tr>
         <tr className="selected">
            <td><code>WorkspaceContext</code></td>
            <td>Use this parameter to have access to the context of the workspace</td> 
        </tr>
    </tbody>
</table>

##

```js
(
  query,
  creators,
  operators,
  componentDefinitionId,
  customOperators,
  workspaceContext
) =>
  creators.of(query).pipe(
    customOperators.selectDataSource("expense"),
    operators.map((queryData) => {
      const data = queryData.Data;
      return { Data: [...data], Filters: query.Filters };
    })
  );
```

<h3>Example</h3>

<figure>

![img-box-shadow](/img/craft/panels/dataSource/query-store.png)

</figure>

<figure>

![img-box-shadow](/img/craft/panels/dataSource/store-function-example.png)

</figure>

<figure>

![img-box-shadow](/img/craft/panels/dataSource/grid-store-example.png)

</figure>
