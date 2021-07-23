---
id:  execute-api
title: ' '
sidebar_label: Execute API
---

## executeAPI

###Description

This method can be used inside any workspace. To call the API service and execute a Restful operation.

###Method(s)

```javascript
public executeAPI(
        method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH",
        relativePath: string,
        params?: { [name: string]: string },
        body?: object,
        showToast = true,
        headers: { [name: string]: string } = {},
        setContentTypeHeader = true,
        setProfileRequest = true,
        useCache = false
    ): Promise<any> {
        return this.executeApiService.executeAPI(
            Apis.apiV2,
            method,
            relativePath,
            params,
            body,
            showToast,
            headers,
            setContentTypeHeader,
            setProfileRequest,
            useCache
        );
    }
```

<table className="custom-table">
    <thead>
        <tr>
            <th>Parameter</th>
            <th>Type</th>
            <th>Required</th>
            <th>Defaults</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr className="selected">
            <td><code>method</code></td>
            <td>String</td>
            <td>true</td>
            <td></td>
            <td>Set the type of request</td> 
        </tr>
        <tr className="selected">
            <td><code>relativePath</code></td>
            <td>String</td>
            <td>true</td>
            <td></td>
            <td>Url request</td> 
        </tr>
        <tr className="selected">
            <td><code>params</code></td>
            <td>String</td>
            <td>false</td>
            <td></td>
            <td>Parameters that are intended to be passed in the request</td> 
        </tr>
        <tr className="selected">
            <td><code>body</code></td>
            <td>String</td>
            <td>false</td>
            <td></td>
            <td>The content to replace with</td> 
        </tr>
        <tr className="selected">
            <td><code>showToast</code></td>
            <td>String</td>
            <td>false</td>
            <td>true</td>
            <td>To return a toast related to the request when error occurs</td> 
        </tr>
        <tr className="selected">
            <td><code>headers</code></td>
            <td>String</td>
            <td>false</td>
            <td>empty</td>
            <td>Meta-data associated with the API request and response</td> 
        </tr>
        <tr className="selected">
            <td><code>setContentTypeHeader</code></td>
            <td>String</td>
            <td>false</td>
            <td>true</td>
            <td>If it's set to true it will append 'Content-Type' to the header with the value 'application-json'</td> 
        </tr>
        <tr className="selected">
            <td><code>setProfileRequest</code></td>
            <td>String</td>
            <td>false</td>
            <td>true</td>
            <td>If it's set to true it will append 'x-sw-profilerequest' to the header with the value 'true'</td> 
        </tr>
        <tr className="selected">
            <td><code>useCache</code></td>
            <td>String</td>
            <td>false</td>
            <td>false</td>
            <td>If it's set to true it will cache the request</td> 
        </tr>
    </tbody>
</table>

###Basic Usage

```javascript
>    SW.executeAPI('GET', 'documentBriefs', {documentId: 'd8615b0f-4b52-4360-8f61-62c62bcb5463'});
```

###Example

<figure>

![img-box-shadow](/img/sdk/execute-api/execute_api_method.png)
<figcaption></figcaption>
</figure>