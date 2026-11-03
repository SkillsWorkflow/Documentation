---
id: ai-connector-setup
title: Connect Claude, Codex, GitHub Copilot or Microsoft 365 Copilot to Skills Workflow
description: "Add the Skills Workflow connector to Claude, Claude Code, ChatGPT, Codex or GitHub Copilot with your tenant's address and the x-app-id, x-app-key and x-tenant-id headers the Skills Workflow team sends you."
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
<TabItem value="claude" label={<span className="sw-tool-tab"><img src="/img/ai/logos/claude.svg" alt=""/>Claude</span>} default>

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
<TabItem value="claude-code" label={<span className="sw-tool-tab"><img src="/img/ai/logos/claude.svg" alt=""/>Claude Code</span>}>

Add the connector from a terminal:

```bash
claude mcp add --transport http skills-workflow https://apiv2-demo-test-we.skillsworkflow.com/mcp/client-portal \
  --header "x-app-id: <App ID>" \
  --header "x-app-key: <App key>" \
  --header "x-tenant-id: <Tenant ID>"
```

Replace the address with your tenant's and each `<...>` with the value the Skills Workflow team sent.

</TabItem>
<TabItem value="codex" label={<span className="sw-tool-tab"><img src="/img/ai/logos/openai.svg" alt="" className="sw-tool-tab__mono" />ChatGPT / Codex</span>}>

In the ChatGPT app:

1. Open **Plugins** and select the **MCPs** tab.
2. Select **Add** and add an MCP server.
3. In **URL**, type the connector's address.
4. Leave **Bearer token env var** empty.
5. Under **Headers**, select **Add header** for each credential and fill in `x-app-id`, `x-tenant-id` and `x-app-key`, each with the value the Skills Workflow team sent.
6. Select **Save**.

   ![img-box-shadow-popup](/img/ai/codex/codex-mcp-headers.png)
   <figcaption>The Skills Workflow MCP server in the ChatGPT app, with the connector's address and its three headers.</figcaption>

The Codex CLI and the Codex IDE extension read the same servers from `~/.codex/config.toml`. To add the connector there instead:

```toml
[mcp_servers.skills-workflow]
url = "https://apiv2-demo-test-we.skillsworkflow.com/mcp/client-portal"
http_headers = { "x-app-id" = "<App ID>", "x-tenant-id" = "<Tenant ID>" }
env_http_headers = { "x-app-key" = "SW_APP_KEY" }
```

Replace the address with your tenant's and each `<...>` with the value the Skills Workflow team sent. The app key is read from the `SW_APP_KEY` environment variable; set it to the app key before starting Codex.

</TabItem>
<TabItem value="copilot" label={<span className="sw-tool-tab"><img src="/img/ai/logos/githubcopilot.svg" alt="" className="sw-tool-tab__mono" />GitHub Copilot</span>}>

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
<TabItem value="microsoft-365-copilot" label={<span className="sw-tool-tab"><img src="/img/ai/logos/microsoft-365-copilot.png" alt=""/>Microsoft 365 Copilot</span>}>

Create a Skills Workflow agent in Copilot Studio for your agency's Microsoft 365 Copilot or Teams users. The agent connects to your tenant through the Skills Workflow MCP server.

### Prerequisites

Ask Skills Workflow for your tenant's API address, App ID, App key, Tenant ID, and the `client-portal` and `app-page` skills. You need access to Copilot Studio and permission to create custom connectors in the same Power Platform environment.

Use a Power Platform environment with Dataverse. Keep the App key with authorised publishers: it permits publishing and replacing pages across the tenant as its Skills Workflow administrator.

### Create the custom connector

1. Open [Power Apps](https://make.powerapps.com/), select the environment, and open **Custom connectors → New custom connector → Create from blank**. Name it `Skills Workflow MCP`.
2. Enable **Swagger editor**. Download the [OpenAPI template](/files/skillsworkflow-mcp.openapi.yaml), replace `YOUR-TENANT-API-HOST` with your tenant's API hostname (without `https://` or a path), and paste the definition into the editor. The MCP path is `/mcp/client-portal`.
3. Disable **Swagger editor** and check **Security**: authentication **API Key**, parameter name `x-app-key`, location **Header**. Select **Create connector**.

![img-box-shadow](/img/ai/copilot-studio/security.png)
<figcaption>The App key is stored in the connection, not in the two agent inputs.</figcaption>

4. Open **Test → New connection**, enter the App key in the protected `api_key` field, and select **Create**. This creates the connection; a Connected status alone does not validate the MCP tools.

### Create a standard agent

1. In [Copilot Studio](https://copilotstudio.microsoft.com/), select the same environment. Open **Home → Other ways to build → Build with standard orchestration → Agent**. Enter a name and select **Create**.

![img-box-shadow](/img/ai/copilot-studio/standard.png)
<figcaption>Choose Agent under Standard to follow this tested setup.</figcaption>

2. Open **Add tool**, search for `Skills Workflow`, and select **Skills Workflow MCP** under **Model Context Protocol**. Select the connection you created and choose **Add**.
3. Open the added tool and fill in **Inputs**: `x-app-id` with App ID and `x-tenant-id` with Tenant ID. Select **Save**. Both are headers sent with the App key from the connection. Fill them for each agent; they are not copied automatically from another agent.

![img-box-shadow](/img/ai/copilot-studio/inputs.png)
<figcaption>App ID and Tenant ID belong in the tool's Inputs; App key belongs in the protected connection.</figcaption>


### Test the MCP connection

Start a new test session and ask which Skills Workflow tools are available. Compare the list with the eight tools in the **Check the connection** section below.

Then ask the agent to call `get_portal_url` for the hypothetical client `mcp-connection-check` and portal `connection-check`, without creating or modifying anything. Inspect the activity trace: the tool must finish with **Completed** and return your tenant's URL. This tool returns an address even when no page exists there; it does not publish or verify the page.

![img-box-shadow](/img/ai/copilot-studio/test.png)
<figcaption>A successful get_portal_url test shows the returned address and a Completed status.</figcaption>

A textual list of tools is not enough to validate the connection. If the editor reports **Connector request failed**, check the three header values and saved inputs. Use the actual tool result in the test trace to confirm runtime behaviour.

### Prepare access for key users

Before asking the agent to publish content, obtain and configure the official `client-portal` and `app-page` rules with Skills Workflow. The connection test above does not publish the agent or verify its skills.

For organisational rollout, follow Microsoft's [Teams and Microsoft Copilot publishing instructions](https://learn.microsoft.com/en-us/microsoft-copilot-studio/publication-add-bot-to-microsoft-teams). Have IT review licensing, connection identity and the intended group of authorised publishers before making the agent available. People opening published pages sign in as themselves.

### Trial and credits

A Copilot Studio trial can allow testing a standard agent. Other agent types can require Copilot Credits for building and testing. If you see `EnforcementUsageCredits`, ask your administrator to check **Licensing → Copilot Studio → Manage Copilot Credits**. See [Microsoft's capacity guidance](https://learn.microsoft.com/en-us/power-platform/admin/manage-usage-github-copilot-harness).

</TabItem>
</Tabs>

Screens inside Skills Workflow are built as a small code project. Build them in a tool that works on code: Claude Code, Codex or GitHub Copilot.

## Check the connection

Start a new conversation and ask:

```
Which Skills Workflow tools do you have?
```

The answer lists the connector's eight tools:

| Tool | What it does |
|---|---|
| `get_client_portal` | Reads a published client page |
| `create_client_portal` | Publishes a new client page |
| `update_client_portal` | Replaces a published client page |
| `get_portal_url` | Gives the address of a client page |
| `get_app_page` | Reads a screen inside Skills Workflow and its versions |
| `publish_app_page_version` | Publishes a new version of a screen |
| `set_app_page_live_version` | Chooses the version of a screen users get |
| `get_app_page_url` | Gives the address of a screen |

![img-box-shadow-popup](/img/ai/codex/codex-tools-check.png)
<figcaption>The ChatGPT app answering the question with the connector's eight tools.</figcaption>

Nothing is read from or written to your tenant by this question. If the tool says it has no Skills Workflow tools, or reports an error, one of the values is wrong; compare the address and each header with what the Skills Workflow team sent.

## Rules and behaviour

- The credentials work only on your own tenant's API address. Any other address refuses them.
- The connector publishes as your tenant's Skills Workflow administrator. Anyone with the app key can create and replace pages for every client of your tenant, so keep it with the few people who publish. If the key reaches someone it should not, tell the Skills Workflow team.
- The connector reaches your tenant's file system only. It publishes, reads back and gives the address of what it publishes; it does not change jobs, projects or any other record.
- People who open what was published sign in as themselves. The administrator identity is used to publish, never to show data.

## Related articles

- [Skills Workflow in Your AI Tool](/docs/ai/connector)
- [Client Portals](/docs/ai/ai-portals)
- [AI Can Make Mistakes](/docs/ai/ai-can-make-mistakes)
