---
id: ai-connector-client-hub
title: One Address for Everything a Client Opens
description: "Ask your AI tool for a client's home page: one address that links to every status page and report you publish for them, with a live figure beside each link."
sidebar_label: One Address per Client
sidebar_position: 4
---

Give each client a single address to bookmark. Your AI tool builds a home page for the client that links to the pages you published for them, with one live figure beside each link.

![img-box-shadow](/img/ai/connector/client-home-page.png)
<figcaption>The home page of the fictitious client Northwind Coffee on a demo tenant, linking to its status page and its report, with the approvals waiting and the deliverables done.</figcaption>

## Availability

Available. You need the [Skills Workflow connector in your AI tool](/docs/ai/connector/ai-connector-setup) and at least one page already published for the client.

## How to ask for it

1. Ask for a home page for the client and name the pages it links to. The AI tool reads back a published page when you give it the client and page names.
2. Say which figure each link shows.
3. Let the AI tool publish it at the client's main address, for example `/portal/{client}/home/`.

## Rules and behaviour

- A link opens the other page at its own address. Each page applies the viewer's permissions on its own.
- The home page does not find new pages by itself. Ask your AI tool to add each one.

## Related articles

- [Share a Live Status Page With a Client](/docs/ai/connector/ai-connector-client-status-page)
- [Build a Report From Your Data](/docs/ai/connector/ai-connector-reports)
- [Client Portals](/docs/ai/ai-portals)
