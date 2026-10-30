---
id: ai-connector-forms
title: Collect Requests With a Form
description: "A form your AI tool publishes for a client's team: each request becomes a job in the right project, in its first stage, with the details in the job's feed. In preview."
sidebar_label: A Form That Creates Work
sidebar_position: 8
---

:::preview
This is not available yet. The example below was built with the connector on a demo tenant to show how it is expected to work, and the finished feature may differ.
:::

Replace the request emails with a form. The client's marketing team says what they need, the details and the date, and the request arrives in Skills Workflow as a job in the campaign's project, ready for traffic to pick up.

![img-box-shadow](/img/ai/connector/request-form.png)
<figcaption>The request form of the fictitious client Northwind Coffee on a demo tenant, filled in by its marketing team.</figcaption>

![img-box-shadow](/img/ai/connector/request-form-sent.png)
<figcaption>After sending, the form shows the number of the job it created, its stage and a link to the campaign's status page.</figcaption>

![img-box-shadow](/img/ai/connector/request-form-job.jpg)
<figcaption>The job the form created, in Skills Workflow: in the campaign's project, in To Do, with the date asked for and the request details in its feed.</figcaption>

## Expected behaviour

- Each request creates a job in the project the form belongs to. The department and the job type are the ones the agency chose when the form was built.
- The name, the date and the priority come from the form. The details are posted to the job's feed.
- The job moves out of Draft to the first stage of its workflow, the way it would when created in Skills Workflow.
- The person who sends the form sees the job number and can follow the job on the client's status page.

## Rules and behaviour

- Whoever fills in the form signs in to Skills Workflow. The job is created as them, with their permissions, and a person who may not create jobs in the project gets a message saying so.
- A form for people without a Skills Workflow user is not part of this example.

## Related articles

- [Share a Live Status Page With a Client](/docs/ai/connector/ai-connector-client-status-page)
- [One Address for Everything a Client Opens](/docs/ai/connector/ai-connector-client-hub)
- [Skills Workflow in Your AI Tool](/docs/ai/connector)
