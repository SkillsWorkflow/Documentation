---
id: ai-connector-client-status-page
title: Share a Live Status Page With a Client
description: "Ask your AI tool for a page that shows a client the state of their campaign, its deliverables and what is waiting on them, published at one address that always shows today's data."
sidebar_label: A Live Status Page for a Client
sidebar_position: 3
---

Give a client one address where they see how their work is going: the campaign's progress, the deliverables due and the approvals waiting on them. Ask your AI tool for the page, review it and send the client the address. The page reads Skills Workflow every time it opens, so nobody updates it by hand.

![img-box-shadow](/img/ai/connector/client-status-page.png)
<figcaption>A status page published with the connector on a demo tenant, for the fictitious client Northwind Coffee: progress, three counters, the deliverables waiting on the client and every deliverable with its stage and due date.</figcaption>

## Availability

Available. You need the [Skills Workflow connector in your AI tool](/docs/ai/connector/ai-connector-setup). The client signs in with their own Skills Workflow user and sees only the projects and jobs that user is allowed to see.

## How to ask for it

1. Name the client and the project, and say what the client should see. The page above was built from the `DE-Jobs` query, filtered to one client and one project.
2. Say which stage means "waiting on the client". Stage names are the ones configured in your tenant, and the page shows them as they are.
3. Let the AI tool publish the page. It gives you the address, `/portal/{client}/{page}/`.
4. Open the address as a user with the client's permissions before you send it.

## Rules and behaviour

- The address has two parts, the client and the page. Both use lowercase letters, numbers and hyphens only.
- Asking for a change republishes the whole page at the same address. The client keeps the same link.
- A page published for the first time can answer "not found" for a short while before it opens.
- Opening the page without a session shows the Skills Workflow sign-in, and returns to the page afterwards.

## Related articles

- [One Address for Everything a Client Opens](/docs/ai/connector/ai-connector-client-hub)
- [Build a Report From Your Data](/docs/ai/connector/ai-connector-reports)
- [Client Portals](/docs/ai/ai-portals)
- [Connect Claude, Codex or GitHub Copilot to Skills Workflow](/docs/ai/connector/ai-connector-setup)
