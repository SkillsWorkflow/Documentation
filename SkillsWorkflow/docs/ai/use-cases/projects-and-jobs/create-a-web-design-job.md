---
id: create-a-web-design-job
title: Create a Web Design Job
description: "Create a Job from a description, with its brief written from the Job Type's configured briefing template."
sidebar_label: Create a Web Design Job
sidebar_position: 1
---

## Overview

Create a new Job from a description — client, Job Type, title and the brief content itself — with the brief written into the structure defined by the Job Type's briefing template, instead of a blank form.

## Example prompt

```
Create a new job
Job Type: Website
Job Title: GM 2026 EV Campaign – Global Website

Design and develop a global campaign website for General Motors to support the 2026 electric vehicle campaign. The website should introduce the campaign, showcase GM's electric vehicle portfolio, communicate the key campaign message, and provide users with relevant information and calls to action.

Use the briefing template configured for the Website Job Type to generate the job brief.
```

## Expected outcome

- A new Job is created under the right client and project.
- The Job Type resolves correctly even when named slightly differently from how it's configured (for example, "Website" resolving to the actual Job Type, "Web Design").
- The brief follows the structure defined in the Job Type's briefing template, not a single paragraph.
- Anything that can't be inferred — such as the business object type or the department — is asked for before the Job is created.
