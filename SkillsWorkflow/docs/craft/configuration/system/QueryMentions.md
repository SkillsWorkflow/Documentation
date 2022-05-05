---
id: queryMentions
title: 'Query Mentions'
sidebar_label: Query Mentions
---
On this page you will find how to use mentions based on queries.

1- In SQL playground create the query.

<figure>

![img-box-shadow](/img/craft/configuration/system/queryMentions/query.png)
</figure>

2- Select the query that you created.

<figure>

![img-box-shadow](/img/craft/configuration/system/queryMentions/query-mentions-configuration.png)
</figure>

<h3>Example</h3>

<figure>

![img-box-shadow](/img/craft/configuration/system/queryMentions/query-mentions-example.png)
</figure>


<table className="custom-table">
    <thead> 
        <tr>
            <th>Filters</th>
             <th>Description</th>
        </tr>
    </thead>
    <tbody>
     <tr className="selected">
            <td><code> @ClientId</code></td>
            <td> Id of the client </td>
        </tr>
        <tr className="selected">
            <td><code> @CurrentUserCompanyId</code></td>
            <td> Company of the user</td>
        </tr>
        <tr className="selected">
            <td><code> @CurrentUserDepartmentId</code></td>
                <td> Department of the User </td>
        </tr>
        <tr className="selected">
            <td><code>@CurrentUserDivisionId</code></td>
                <td> Division of the User </td>
        </tr>
        <tr className="selected">
            <td><code>@CurrentUserId</code></td>
             <td> Id of the User </td>
        </tr>
         <tr className="selected">
            <td><code>DocumentOid</code></td>
                <td> Id of the document </td>
        </tr>
        <tr className="selected">
            <td><code>@SearchValue</code></td>
        </tr>
    </tbody>
</table> 



