---
id:  power-bi2
title: Power Bi 2
sidebar_label: Power Bi
---

## Overview

There was a need to export job data from the system to Power Bi.

## Data Exchange

The scope of this article includes an explanation of how to data from the system.

Skills Workflow has available an API, so you can use it to get the data out from the system. You can get the data using REST calls. 

Regarding Power BI, you should request to the team the corresponding URL to export data:

- https://apiv2-demo.skillsworkflow.com/api/integration-workflows/0bdc05b7-3b3d-41f3-9e84-b6f75d3a6307/execute

## Configuration

To use get the data from the system to Power Bi, there are mandatory steps you need to do:

Get Data and set the configurations in the Advanced form:

- URL parts
- HTTP request headers parameters
- X-AppTenant
- X-AppId
- X-AppSecret

<figure>

![img-box-shadow](/img/integrations/powerbi1.png)
<figcaption>Get data from WebPage</figcaption>

</figure>

<figure>

![img-box-shadow](/img/integrations/powerbi2.png)
<figcaption>Advanced Form</figcaption>
</figure>

## Transform your data

To be able to manage your data in Power Bi, you will need to follow some steps:

1. Transform column into json

<figure>

![img-box-shadow](/img/integrations/powerbi3.png)
<figcaption>Transform column into json</figcaption>
</figure>

2. Transform list into json

<figure>

![img-box-shadow](/img/integrations/powerbi4.png)
<figcaption>Transform list into json</figcaption>
</figure>

3. Convert data into table

<figure>

![img-box-shadow](/img/integrations/powerbi5.png)
<figcaption>Convert data into a table</figcaption>
</figure>

4. Set configuration to open as Json

<!-- <figure>

![img-box-shadow](/img/integrations/powerbi6.png)
<figcaption>Configuration to open as Json</figcaption>
</figure> -->


5. Split data into columns

<figure>

![img-box-shadow](/img/integrations/powerbi7.png)
<figcaption>Split data into columns</figcaption>
</figure>


5. The data will be in columns

<figure>

![img-box-shadow](/img/integrations/powerbi8.png)
<figcaption>Data will be in columns</figcaption>
</figure>

## Conclusion

The contents of this document create the foundation for data and process communication methodology between Skills Workflow and Agencies. The current known data and process transfers are contained in this document but more may be created as additional data and process needs are discovered.