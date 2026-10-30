---
id: ai-claude-connect
title: Connect Claude, Codex or GitHub Copilot to Skills Workflow
description: "Add the Skills Workflow connector to Claude, Claude Code, Codex or GitHub Copilot with your tenant's address and the x-app-id, x-app-key and x-tenant-id headers the Skills Workflow team sends you."
sidebar_label: Connect Your AI Tool
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Add Skills Workflow to the AI tool you work in. Once it is connected, the tool can create status pages, reports and screens for your agency and publish them to your tenant. The connection is the same in every tool: one address and three headers.

## Prerequisites

Ask the Skills Workflow team for the connection details of your tenant. You receive four values:

| Value | Where it goes |
|---|---|
| Your tenant's API address | The connector's address |
| App ID | The `x-app-id` header |
| App key | The `x-app-key` header |
| Tenant ID | The `x-tenant-id` header |

The connector's address is your tenant's API address followed by `/mcp/client-portal`. For a tenant whose API address is `https://apiv2-demo-test-we.skillsworkflow.com`, it is:

```
https://apiv2-demo-test-we.skillsworkflow.com/mcp/client-portal
```

With the details come two skills, `client-portal` and `app-page`. They give the AI tool the rules of what it publishes: how a page reads your data, what it may load and how it is published. Add them to your tool before you ask for anything; in Claude, under **Settings** > **Capabilities** > **Skills**.

## Add the connector

<Tabs groupId="ai-tool" queryString>
<TabItem value="claude" label="Claude" default>

Claude on the web and Claude Desktop share connectors. On Team and Enterprise plans, an owner of the Claude organisation adds the connector for everyone.

1. Open **Settings** > **Connectors** and select **Add custom connector**.
2. In the first field, type a name for the connector, for example `Skills Workflow`. It is the name shown in the connectors list.
3. In the second field, type the connector's address and select **Continue**.
4. Claude checks the server. **Connecting to the server** answers `401` and the sign-in checks answer `404`: that is expected, since the connector signs in with headers. When **Server found** appears, select **Continue**.

   ![img-box-shadow-popup](/img/ai/claude/add-custom-connector.png)
   <figcaption>Claude finds the Skills Workflow server at the connector's address.</figcaption>

5. Under **Authentication**, select **No sign-in**.
6. Under **Request headers**, select **Add header** three times and fill in `x-app-key`, `x-app-id` and `x-tenant-id`, each with the value the Skills Workflow team sent. Leave **Required** selected on each one.
7. Select **Add**.

   ![img-box-shadow-popup](/img/ai/claude/connector-headers.png)
   <figcaption>No sign-in, with the three request headers of the Skills Workflow connector.</figcaption>

Claude stores the header values and never shows them again. To change one, remove the connector and add it again.

</TabItem>
<TabItem value="claude-code" label="Claude Code">

Add the connector from a terminal:

```bash
claude mcp add --transport http skills-workflow https://apiv2-demo-test-we.skillsworkflow.com/mcp/client-portal \
  --header "x-app-id: <App ID>" \
  --header "x-app-key: <App key>" \
  --header "x-tenant-id: <Tenant ID>"
```

Replace the address with your tenant's and each `<...>` with the value the Skills Workflow team sent.

</TabItem>
<TabItem value="codex" label="Codex">

:::preview
This set-up follows Codex's own documentation and has not been tested with Skills Workflow yet.
:::

The Codex CLI, the Codex IDE extension and the ChatGPT desktop app share one configuration file, `~/.codex/config.toml`. Add the connector to it:

```toml
[mcp_servers.skills-workflow]
url = "https://apiv2-demo-test-we.skillsworkflow.com/mcp/client-portal"
http_headers = { "x-app-id" = "<App ID>", "x-tenant-id" = "<Tenant ID>" }
env_http_headers = { "x-app-key" = "SW_APP_KEY" }
```

Replace the address with your tenant's and each `<...>` with the value the Skills Workflow team sent. The app key is read from the `SW_APP_KEY` environment variable, which keeps it out of the file; set that variable to the app key before starting Codex.

</TabItem>
<TabItem value="copilot" label="GitHub Copilot">

:::preview
This set-up follows the Visual Studio Code documentation and has not been tested with Skills Workflow yet.
:::

In Visual Studio Code, add the connector to `mcp.json`, either in your user profile or in `.vscode/mcp.json` of a project. Run **MCP: Open User Configuration** from the Command Palette for the user file.

```json
{
  "inputs": [
    { "type": "promptString", "id": "sw-app-id", "description": "Skills Workflow App ID" },
    { "type": "promptString", "id": "sw-app-key", "description": "Skills Workflow App key", "password": true },
    { "type": "promptString", "id": "sw-tenant-id", "description": "Skills Workflow Tenant ID" }
  ],
  "servers": {
    "skills-workflow": {
      "type": "http",
      "url": "https://apiv2-demo-test-we.skillsworkflow.com/mcp/client-portal",
      "headers": {
        "x-app-id": "${input:sw-app-id}",
        "x-app-key": "${input:sw-app-key}",
        "x-tenant-id": "${input:sw-tenant-id}"
      }
    }
  }
}
```

Replace the address with your tenant's. The first time the server starts, Visual Studio Code asks for the three values and stores them. Do not write the values into the file of a project you commit.

</TabItem>
</Tabs>

Screens inside Skills Workflow are built as a small code project. Build them in a tool that works on code: Claude Code, Codex or GitHub Copilot.

## Check the connection

Start a new conversation and ask:

```
Using Skills Workflow, give me the address of a page named "status" for the client "test".
```

The tool answers with an address on your tenant's own domain. Nothing is created: the question only resolves where such a page would be served. An error instead of an address means one of the values is wrong; compare each header with what the Skills Workflow team sent.

## Rules and behaviour

- The credentials work only on your own tenant's API address. Any other address refuses them.
- The connector publishes as your tenant's Skills Workflow administrator. Anyone with the app key can create and replace pages for every client of your tenant, so keep it with the few people who publish. If the key reaches someone it should not, tell the Skills Workflow team.
- The connector reaches your tenant's file system only. It publishes, reads back and gives the address of what it publishes; it does not change jobs, projects or any other record.
- People who open what was published sign in as themselves. The administrator identity is used to publish, never to show data.

## Related articles

- [Skills Workflow in Claude](/docs/ai/claude)
- [Client Portals](/docs/ai/ai-portals)
- [AI Can Make Mistakes](/docs/ai/ai-can-make-mistakes)
