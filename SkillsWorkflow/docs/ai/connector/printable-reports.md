---
id: ai-connector-printable-reports
title: Print or Send a Report as It Stands Today
description: "A report laid out for A4 that your AI tool publishes: open it, print it or save it as PDF, and send a dated copy of the figures to someone outside Skills Workflow. In preview."
sidebar_label: A Report to Print or Send
sidebar_position: 7
---

:::preview
This is not available yet. The example below was built with the connector on a demo tenant to show how it is expected to work, and the finished feature may differ.
:::

Some reports are meant to leave Skills Workflow: the monthly status report attached to an email to the client, the end-of-campaign summary for their procurement team, the figures for a board meeting. Ask your AI tool for a report laid out for paper. Open it on the day you need it, select **Print or save as PDF**, and send the copy. The copy keeps the figures and the date of that moment.

![img-box-shadow](/img/ai/connector/monthly-report-screen.png)
<figcaption>The monthly status report of the fictitious client Northwind Coffee on a demo tenant, as it opens in the browser, with its print button.</figcaption>

![img-box-shadow](/img/ai/connector/monthly-report-print.png)
<figcaption>The same report as it prints: one A4 page with the date and time of the figures at the top and in the footer, and no button.</figcaption>

## Expected behaviour

- The report is published at its own address and reads live data every time it opens.
- It is laid out for A4. On paper and in the PDF, the buttons disappear and the date and time of the figures appear on the page.
- The PDF is saved from the browser's own print dialog. It leaves Skills Workflow with you, and the person you send it to needs no Skills Workflow user.
- In the example, the report reads the `DE-Jobs` query for one client and one project, and groups the deliverables into waiting on approval, in progress and delivered.

Keeping a dated copy of the report inside Skills Workflow is not part of this example.

## Rules and behaviour

- The report on screen always shows today's figures. Only the printed or saved copy is fixed.
- Permissions no longer apply to a PDF once it is sent. Check what it shows before it leaves the agency.

## Related articles

- [Build a Report From Your Data](/docs/ai/connector/ai-connector-reports)
- [Share a Live Status Page With a Client](/docs/ai/connector/ai-connector-client-status-page)
- [Skills Workflow in Your AI Tool](/docs/ai/connector)
