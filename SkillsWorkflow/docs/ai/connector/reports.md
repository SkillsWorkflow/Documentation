---
id: ai-connector-reports
title: Build a Report From Your Data
description: "Ask your AI tool for a report with tables and charts built on your Skills Workflow data extraction queries, published at an address that calculates the figures when it opens."
sidebar_label: A Report From Your Data
sidebar_position: 5
---

Ask your AI tool for a report you would otherwise build in a spreadsheet. It builds the report on your data extraction queries, the same ones behind your Skills Workflow reports, and publishes it with tables and charts. The figures are calculated when someone opens the report.

![img-box-shadow](/img/ai/connector/campaign-report.png)
<figcaption>A campaign report published with the connector on a demo tenant: deliverables by stage, deliverables due per week and the open deliverables, all from the DE-Jobs query.</figcaption>

## Availability

Available. You need the [Skills Workflow connector in your AI tool](/docs/ai/connector/ai-connector-setup). The report reads the data extraction queries published on your tenant; the list is in [Data Extraction API](/docs/build-and-extend/api/data-extraction-api). A question no query answers needs the query first.

## How to ask for it

1. Say who the report is for, the question it answers and the period.
2. Name the figures. The AI tool picks the query and the columns; check which.
3. Ask for only the columns the report shows. A person allowed to run a query receives every column the report asks for, costs and rates included, even when the page does not draw them.
4. Open the report as someone who is not allowed to run the query. The report must tell them they have no access, not show an empty table.

## Rules and behaviour

- Queries are read-only. A report never changes data.
- Each query checks its roles. A person without them is refused the data in the report, as they are in Skills Workflow.
- Charts are drawn inside the page. A report cannot load chart libraries or anything else from another site.
- The report shows data as it is when it opens. A report to print or send, with the figures of a given moment, is [planned](/docs/ai/connector#planned).

## Related articles

- [Data Extraction API](/docs/build-and-extend/api/data-extraction-api)
- [Share a Live Status Page With a Client](/docs/ai/connector/ai-connector-client-status-page)
- [Client Portals](/docs/ai/ai-portals)
