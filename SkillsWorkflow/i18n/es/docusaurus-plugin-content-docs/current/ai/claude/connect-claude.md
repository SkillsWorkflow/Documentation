---
id: ai-claude-connect
title: Conectar Claude a Skills Workflow
description: "Añade el conector de Skills Workflow a Claude con la dirección de tu tenant y las cabeceras x-app-id, x-app-key y x-tenant-id que te envía el equipo de Skills Workflow."
sidebar_label: Conectar Claude
sidebar_position: 2
---

Añade Skills Workflow a Claude como conector personalizado. Una vez añadido, Claude puede crear páginas de estado, informes y pantallas para tu agencia y publicarlos en tu tenant.

## Requisitos previos

Pide al equipo de Skills Workflow los datos de conexión de tu tenant. Recibes cuatro valores:

| Valor | Dónde va |
|---|---|
| La dirección de la API de tu tenant | La dirección del conector |
| App ID | La cabecera `x-app-id` |
| App key | La cabecera `x-app-key` |
| Tenant ID | La cabecera `x-tenant-id` |

Con los datos llegan dos skills, `client-portal` y `app-page`. Le dan a Claude las reglas de lo que publica: cómo lee una página tus datos, qué puede cargar y cómo se publica. Añádelas a Claude en **Settings** > **Capabilities** > **Skills** antes de pedir nada.

También necesitas un plan de Claude en el que puedas añadir conectores personalizados. En los planes Team y Enterprise, un propietario de la organización de Claude añade el conector para todos.

## Añadir el conector en Claude

1. En Claude, abre **Settings** > **Connectors** y selecciona **Add custom connector**.
2. En **Name**, escribe `Skills Workflow`. Es el nombre que aparece en la lista de conectores.
3. En **MCP server URL**, escribe la dirección de la API de tu tenant seguida de `/mcp/client-portal`:

   ```
   https://<your tenant's API address>/mcp/client-portal
   ```

   ![img-box-shadow-popup](/img/ai/claude/add-custom-connector.png)
   <figcaption>El diálogo Add custom connector en Claude, con los campos Name y MCP server URL.</figcaption>

4. Añade una cabecera por cada credencial: `x-app-id`, `x-app-key` y `x-tenant-id`, cada una con el valor que envió el equipo de Skills Workflow.

   ![img-box-shadow-sm](/img/ai/claude/connector-headers.png)
   <figcaption>Las tres cabeceras del conector de Skills Workflow.</figcaption>

5. Selecciona **Continue**.

## Añadir el conector en Claude Code {#add-the-connector-in-claude-code}

Las pantallas dentro de Skills Workflow se construyen como un pequeño proyecto de código, y Claude Code es el sitio donde construirlas. Añade el conector desde un terminal:

```bash
claude mcp add --transport http skills-workflow https://<your tenant's API address>/mcp/client-portal \
  --header "x-app-id: <App ID>" \
  --header "x-app-key: <App key>" \
  --header "x-tenant-id: <Tenant ID>"
```

## Comprobar la conexión

Inicia una conversación nueva y pregunta:

```
Using Skills Workflow, give me the address of a page named "status" for the client "test".
```

Claude responde con una dirección en el propio dominio de tu tenant. No se crea nada: la pregunta solo resuelve dónde se serviría esa página. Un error en lugar de una dirección significa que uno de los valores es incorrecto; compara cada cabecera con lo que envió el equipo de Skills Workflow.

## Reglas y comportamiento

- Las credenciales solo funcionan en la dirección de la API de tu propio tenant. Cualquier otra dirección las rechaza.
- El conector publica como el administrador de Skills Workflow de tu tenant. Cualquiera que tenga la app key puede crear y sustituir páginas para todos los clientes de tu tenant, así que guárdala entre las pocas personas que publican. Si la key llega a alguien que no debería tenerla, avisa al equipo de Skills Workflow.
- El conector solo llega al sistema de archivos de tu tenant. Publica, vuelve a leer y da la dirección de lo que publica; no cambia jobs, proyectos ni ningún otro registro.
- Quienes abren lo que publicó Claude inician sesión como ellos mismos. La identidad de administrador se usa para publicar, nunca para mostrar datos.

## Artículos relacionados

- [Skills Workflow en Claude](/docs/ai/claude)
- [Portales de Cliente](/docs/ai/ai-portals)
- [La IA Puede Cometer Errores](/docs/ai/ai-can-make-mistakes)
