---
id: ai-connector-setup
title: Conectar Claude, Codex o GitHub Copilot a Skills Workflow
description: "Añade el conector de Skills Workflow a Claude, Claude Code, ChatGPT, Codex o GitHub Copilot con la dirección de tu tenant y las cabeceras x-app-id, x-app-key y x-tenant-id que te envía el equipo de Skills Workflow."
sidebar_label: Conectar tu Herramienta de IA
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Añade Skills Workflow a la herramienta de IA con la que trabajas. Una vez conectada, la herramienta puede crear páginas de estado, informes y pantallas para tu agencia y publicarlos en tu tenant. La conexión es la misma en todas las herramientas: una dirección y tres cabeceras.

## Requisitos previos

Pide al equipo de Skills Workflow los datos de conexión de tu tenant. Recibes cuatro valores:

| Valor | Dónde va |
|---|---|
| La dirección de la API de tu tenant | La dirección del conector |
| App ID | La cabecera `x-app-id` |
| App key | La cabecera `x-app-key` |
| Tenant ID | La cabecera `x-tenant-id` |

La dirección del conector es la dirección de la API de tu tenant seguida de `/mcp/client-portal`. Para un tenant cuya dirección de la API es `https://apiv2-demo-test-we.skillsworkflow.com`, es:

```
https://apiv2-demo-test-we.skillsworkflow.com/mcp/client-portal
```

Con los datos llegan dos skills, `client-portal` y `app-page`. Le dan a la herramienta de IA las reglas de lo que publica: cómo lee una página tus datos, qué puede cargar y cómo se publica. Añádelas a tu herramienta antes de pedir nada; en Claude, en **Settings** > **Capabilities** > **Skills**.

## Añadir el conector

<Tabs groupId="ai-tool" queryString>
<TabItem value="claude" label={<span className="sw-tool-tab"><img src="/img/ai/logos/claude.svg" alt=""/>Claude</span>} default>

Claude en la web y Claude Desktop comparten los conectores. En los planes Team y Enterprise, un propietario de la organización de Claude añade el conector para todos.

1. Abre **Settings** > **Connectors** y selecciona **Add custom connector**.
2. En el primer campo, escribe un nombre para el conector, por ejemplo `Skills Workflow`. Es el nombre que aparece en la lista de conectores.
3. En el segundo campo, escribe la dirección del conector y selecciona **Continue**.
4. Claude comprueba el servidor. **Connecting to the server** responde `401` y las comprobaciones de inicio de sesión responden `404`: es lo esperado, porque el conector se autentica con cabeceras. Cuando aparezca **Server found**, selecciona **Continue**.

   ![img-box-shadow-popup](/img/ai/claude/add-custom-connector.png)
   <figcaption>Claude encuentra el servidor de Skills Workflow en la dirección del conector.</figcaption>

5. En **Authentication**, selecciona **No sign-in**.
6. En **Request headers**, selecciona **Add header** tres veces y rellena `x-app-key`, `x-app-id` y `x-tenant-id`, cada una con el valor que envió el equipo de Skills Workflow. Deja **Required** seleccionado en cada una.
7. Selecciona **Add**.

   ![img-box-shadow-popup](/img/ai/claude/connector-headers.png)
   <figcaption>No sign-in, con las tres cabeceras de petición del conector de Skills Workflow.</figcaption>

Claude guarda los valores de las cabeceras y no vuelve a mostrarlos. Para cambiar uno, quita el conector y vuelve a añadirlo.

</TabItem>
<TabItem value="claude-code" label={<span className="sw-tool-tab"><img src="/img/ai/logos/claude.svg" alt=""/>Claude Code</span>}>

Añade el conector desde un terminal:

```bash
claude mcp add --transport http skills-workflow https://apiv2-demo-test-we.skillsworkflow.com/mcp/client-portal \
  --header "x-app-id: <App ID>" \
  --header "x-app-key: <App key>" \
  --header "x-tenant-id: <Tenant ID>"
```

Sustituye la dirección por la de tu tenant y cada `<...>` por el valor que envió el equipo de Skills Workflow.

</TabItem>
<TabItem value="codex" label={<span className="sw-tool-tab"><img src="/img/ai/logos/openai.svg" alt="" className="sw-tool-tab__mono" />ChatGPT / Codex</span>}>

En la app de ChatGPT:

1. Abre **Plugins** y selecciona la pestaña **MCPs**.
2. Selecciona **Add** y añade un servidor MCP.
3. En **URL**, escribe la dirección del conector.
4. Deja **Bearer token env var** vacío.
5. En **Headers**, selecciona **Add header** para cada credencial y rellena `x-app-id`, `x-tenant-id` y `x-app-key`, cada una con el valor que envió el equipo de Skills Workflow.
6. Selecciona **Save**.

   ![img-box-shadow-popup](/img/ai/codex/codex-mcp-headers.png)
   <figcaption>El servidor MCP de Skills Workflow en la app de ChatGPT, con la dirección del conector y sus tres cabeceras.</figcaption>

Codex CLI y la extensión de Codex para IDE leen los mismos servidores de `~/.codex/config.toml`. Para añadir el conector ahí:

```toml
[mcp_servers.skills-workflow]
url = "https://apiv2-demo-test-we.skillsworkflow.com/mcp/client-portal"
http_headers = { "x-app-id" = "<App ID>", "x-tenant-id" = "<Tenant ID>" }
env_http_headers = { "x-app-key" = "SW_APP_KEY" }
```

Sustituye la dirección por la de tu tenant y cada `<...>` por el valor que envió el equipo de Skills Workflow. La app key se lee de la variable de entorno `SW_APP_KEY`; asígnale la app key antes de iniciar Codex.

</TabItem>
<TabItem value="copilot" label={<span className="sw-tool-tab"><img src="/img/ai/logos/githubcopilot.svg" alt="" className="sw-tool-tab__mono" />GitHub Copilot</span>}>

En Visual Studio Code, añade el conector a `mcp.json`, en tu perfil de usuario o en `.vscode/mcp.json` de un proyecto. Para el archivo de usuario, ejecuta **MCP: Open User Configuration** desde la Command Palette.

```json
{
  "inputs": [
    { "type": "promptString", "id": "sw-app-id", "description": "App ID de Skills Workflow" },
    { "type": "promptString", "id": "sw-app-key", "description": "App key de Skills Workflow", "password": true },
    { "type": "promptString", "id": "sw-tenant-id", "description": "Tenant ID de Skills Workflow" }
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

Sustituye la dirección por la de tu tenant. La primera vez que se inicia el servidor, Visual Studio Code pide los tres valores y los guarda. No escribas los valores en el archivo de un proyecto que subes con commit.

</TabItem>
</Tabs>

Las pantallas dentro de Skills Workflow se construyen como un pequeño proyecto de código. Constrúyelas en una herramienta que trabaje con código: Claude Code, Codex o GitHub Copilot.

## Comprobar la conexión

Inicia una conversación nueva y pregunta:

```
Which Skills Workflow tools do you have?
```

La respuesta enumera las ocho tools del conector:

| Tool | Qué hace |
|---|---|
| `get_client_portal` | Lee una página de cliente publicada |
| `create_client_portal` | Publica una página de cliente nueva |
| `update_client_portal` | Sustituye una página de cliente publicada |
| `get_portal_url` | Da la dirección de una página de cliente |
| `get_app_page` | Lee una pantalla dentro de Skills Workflow y sus versiones |
| `publish_app_page_version` | Publica una versión nueva de una pantalla |
| `set_app_page_live_version` | Elige la versión de una pantalla que reciben los usuarios |
| `get_app_page_url` | Da la dirección de una pantalla |

![img-box-shadow-popup](/img/ai/codex/codex-tools-check.png)
<figcaption>La app de ChatGPT respondiendo a la pregunta con las ocho tools del conector.</figcaption>

Esta pregunta no lee ni escribe nada en tu tenant. Si la herramienta dice que no tiene tools de Skills Workflow, o informa de un error, uno de los valores es incorrecto; compara la dirección y cada cabecera con lo que envió el equipo de Skills Workflow.

## Reglas y comportamiento

- Las credenciales solo funcionan en la dirección de la API de tu propio tenant. Cualquier otra dirección las rechaza.
- El conector publica como el administrador de Skills Workflow de tu tenant. Cualquiera que tenga la app key puede crear y sustituir páginas para todos los clientes de tu tenant, así que guárdala entre las pocas personas que publican. Si la key llega a alguien que no debería tenerla, avisa al equipo de Skills Workflow.
- El conector solo llega al sistema de archivos de tu tenant. Publica, vuelve a leer y da la dirección de lo que publica; no cambia jobs, proyectos ni ningún otro registro.
- Quienes abren lo que se ha publicado inician sesión como ellos mismos. La identidad de administrador se usa para publicar, nunca para mostrar datos.

## Artículos relacionados

- [Skills Workflow en tu Herramienta de IA](/docs/ai/connector)
- [Portales de Cliente](/docs/ai/ai-portals)
- [La IA Puede Cometer Errores](/docs/ai/ai-can-make-mistakes)
