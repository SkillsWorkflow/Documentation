---
id: create-a-web-design-job
title: Create a Web Design Job
description: "Create a Job from a description, resolve its business object type and department through the assistant's pickers, and get its brief written from the Job Type's briefing template — using the Document Agent."
sidebar_label: Create a Web Design Job
sidebar_position: 1
---

## Overview

Create a new Job using the [Document Agent](/docs/ai/agents/document-agent), starting from a single message that names the client, the Job Type, the title and a description. The agent resolves what it can on its own, asks for what it cannot — the business object type and the department — and drafts the brief from the Job Type's configured briefing template before asking for approval.

## Scenario

A project manager on the General Motors account needs to create a Job for a new campaign website. Instead of opening the Jobs form and filling in every field by hand, they open the AI Assistant from the project's Feed and describe the job in one message, including the brief content in plain language. The assistant creates the Job, places it in the right department, and writes a structured brief that follows the Website Job Type's briefing template.

## Step by step

### 1. Open the AI Assistant from the project

From the project's Feed, open the AI Assistant panel. With the **Document** context active, it shows what it can do — create, duplicate or transition a document — and offers suggested prompts to start from.

<figure>

![img-box-shadow](/img/ai/use-cases/create-a-web-design-job/step-1-open-assistant.png)
<figcaption>The AI Assistant panel just opened on the project's Feed, showing the Document agent card and its three suggested prompts.</figcaption>
</figure>

### 2. Describe the job in one message

Type the request as you would describe it to a colleague: the client, the Job Type, a title, and the brief content itself.

```
Create a new job
Job Type: Website
Job Title: GM 2026 EV Campaign – Global Website

Design and develop a global campaign website for General Motors to support the 2026 electric vehicle campaign. The website should introduce the campaign, showcase GM's electric vehicle portfolio, communicate the key campaign message, and provide users with relevant information and calls to action.

Use the briefing template configured for the Website Job Type to generate the job brief.
```

The assistant resolves the client, the project and the Job Type from context and from what you typed — it correctly matched "Website" to the actual configured Job Type, **Web Design** — and asks for the one thing it cannot infer: *"Which business object type should I use?"*, with a picker offering **Job**, **Sub-Task**, **Task** and **User Story**.

<figure>

![img-box-shadow](/img/ai/use-cases/create-a-web-design-job/step-2-describe-the-job.png)
<figcaption>The prompt above sent in the chat, followed by the assistant's reasoning summary and the "Choose a business object type" picker.</figcaption>
</figure>

### 3. Answer the pickers it raises

Pick **Job**. The assistant confirms the choice and immediately asks the next question it needs answered — the department — with a picker listing the departments available to you.

<figure>

![img-box-shadow](/img/ai/use-cases/create-a-web-design-job/step-3-choose-department.png)
<figcaption>"Job" selected, and the "Choose a department" picker listing the available departments.</figcaption>
</figure>

Picking one (here, **Digital**) is enough; the assistant does not ask about anything it already has.

### 4. Review the approval card

Once every required field is resolved, the assistant drafts the brief from the Website Job Type's briefing template and raises an **approval card** naming the job it is about to create:

- **Placement** — Client, Project, Business object type and Department, all resolved from the conversation.
- **Details** — Title and Description as given, and a **Brief** written into the template's own structure, not a single paragraph.

<figure>

![img-box-shadow](/img/ai/use-cases/create-a-web-design-job/step-4-approval-card-placement.png)
<figcaption>The approval card's Placement and Details sections, with the brief's first section ("The Role") visible in the rich text field.</figcaption>
</figure>

Scrolling down shows the rest of the drafted brief, written into the Website Job Type's own template sections — *The Role*, *The People*, *The Problem*, *The Metrics Success*, *Creative Mandatories and Deliverables* — followed by **Make changes** and **Approve**.

<figure>

![img-box-shadow](/img/ai/use-cases/create-a-web-design-job/step-5-approval-card-brief.png)
<figcaption>The rest of the drafted brief, scrolled down, with the Make changes / Approve buttons.</figcaption>
</figure>

Read the brief before approving — a wrong assumption in the description usually shows up here as a wrong sentence in one of the template's sections. Edit a field on the card directly if something needs a small correction, or **Approve** if it's ready.

### 5. Recover if the creation doesn't go through

A creation request can occasionally fail after approval. When it does, the assistant says so plainly instead of silently retrying, and offers a way back in rather than making you start over:

> *"The job was not created because the creation request could not be submitted. Please try confirming the reviewed details again."*

It shows the reviewed details again with a **Yes, confirm all** button, and separately asks what you'd like to change — **Change project**, **Change department**, **Change job type**, **Change title**, **Correct data**, or **Cancel creation**.

<figure>

![img-box-shadow](/img/ai/use-cases/create-a-web-design-job/step-6-creation-failed-recovery.png)
<figcaption>The failure message, the reviewed-details card with "Yes, confirm all", and the "What would you like to change?" options.</figcaption>
</figure>

If nothing on the card is actually wrong, the safest option is the one that only touches a cosmetic field — here, **Change title** — then re-sending the same value confirms the request without re-litigating the rest of the job.

<figure>

![img-box-shadow](/img/ai/use-cases/create-a-web-design-job/step-7-change-title-retry.png)
<figcaption>"Change title" selected, the assistant asking "Suggest another title, please.", and the same title re-submitted.</figcaption>
</figure>

### 6. The job is created, and the brief can be regenerated on demand

The Job now exists — GM0003DIGI002, with its own Stage (**Unassigned/Tentative**) and Type (**Web Design**) — and the brief is already written into it, formatted under the briefing template's own headings.

You can ask the assistant to (re)write the brief from the template at any time after the Job exists, not just during creation. This calls a different action — **updating** the document's brief rather than creating the document — and raises its own approval card naming the document type and the brief text before writing it.

```
Use the briefing template configured for the Website Job Type to update the job brief.
```

<figure>

![img-box-shadow](/img/ai/use-cases/create-a-web-design-job/step-8-job-created-brief-updated.png)
<figcaption>The created Job's Feed with its generated brief, the "Update document brief" approval card, and the assistant confirming the update.</figcaption>
</figure>

## Expected outcome

- A new Job is created under the right client and project, with the business object type and department you selected.
- The Job's Type resolves to the actual configured Job Type even when you name it slightly differently (here, "Website" → **Web Design**).
- The Job's Title and Description match what you provided.
- The brief follows the structure defined in the Job Type's briefing template — it is not a single paragraph.
- If the first creation attempt fails, the assistant offers a specific recovery path instead of forcing you to restart the whole request.
- Asking again to "update the job brief using the [Job Type]'s briefing template" regenerates it from the template on an existing Job, through a separate approval step.

## Related articles

- [Document Agent](/docs/ai/agents/document-agent)
- [AI Assistant](/docs/ai/ai-assistant)
