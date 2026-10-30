---
id: ai-claude-connect
title: Connect Claude to Skills Workflow
description: "Add the Skills Workflow connector to Claude with your tenant's address and the x-app-id, x-app-key and x-tenant-id headers the Skills Workflow team sends you."
sidebar_label: Connect Claude
sidebar_position: 2
---

Add Skills Workflow to Claude as a custom connector. Once it is added, Claude can create status pages, reports and screens for your agency and publish them to your tenant.

## Prerequisites

Ask the Skills Workflow team for the connection details of your tenant. You receive four values:

| Value | Where it goes |
|---|---|
| Your tenant's API address | The connector's address |
| App ID | The `x-app-id` header |
| App key | The `x-app-key` header |
| Tenant ID | The `x-tenant-id` header |

With the details come two skills, `client-portal` and `app-page`. They give Claude the rules of what it publishes: how a page reads your data, what it may load and how it is published. Add them to Claude in **Settings** > **Capabilities** > **Skills** before you ask for anything.

You also need a Claude plan on which you can add custom connectors. On Team and Enterprise plans, an owner of the Claude organisation adds the connector for everyone.

## Add the connector in Claude

1. In Claude, open **Settings** > **Connectors** and select **Add custom connector**.
2. In **Name**, type `Skills Workflow`. This is the name shown in the connectors list.
3. In **MCP server URL**, type your tenant's API address followed by `/mcp/client-portal`:

   ```
   https://<your tenant's API address>/mcp/client-portal
   ```

   ![img-box-shadow-popup](/img/ai/claude/add-custom-connector.png)
   <figcaption>The Add custom connector dialog in Claude, with the Name and MCP server URL fields.</figcaption>

4. Add a header for each credential: `x-app-id`, `x-app-key` and `x-tenant-id`, each with the value the Skills Workflow team sent.

   ![img-box-shadow-sm](/img/ai/claude/connector-headers.png)
   <figcaption>The three headers of the Skills Workflow connector.</figcaption>

5. Select **Continue**.

## Add the connector in Claude Code

Screens inside Skills Workflow are built as a small code project, and Claude Code is the place to build them. Add the connector from a terminal:

```bash
claude mcp add --transport http skills-workflow https://<your tenant's API address>/mcp/client-portal \
  --header "x-app-id: <App ID>" \
  --header "x-app-key: <App key>" \
  --header "x-tenant-id: <Tenant ID>"
```

## Check the connection

Start a new conversation and ask:

```
Using Skills Workflow, give me the address of a page named "status" for the client "test".
```

Claude answers with an address on your tenant's own domain. Nothing is created: the question only resolves where such a page would be served. An error instead of an address means one of the values is wrong; compare each header with what the Skills Workflow team sent.

## Rules and behaviour

- The credentials work only on your own tenant's API address. Any other address refuses them.
- The connector publishes as your tenant's Skills Workflow administrator. Anyone with the app key can create and replace pages for every client of your tenant, so keep it with the few people who publish. If the key reaches someone it should not, tell the Skills Workflow team.
- The connector reaches your tenant's file system only. It publishes, reads back and gives the address of what it publishes; it does not change jobs, projects or any other record.
- People who open what Claude published sign in as themselves. The administrator identity is used to publish, never to show data.

## Related articles

- [Skills Workflow in Claude](/docs/ai/claude)
- [Client Portals](/docs/ai/ai-portals)
- [AI Can Make Mistakes](/docs/ai/ai-can-make-mistakes)
