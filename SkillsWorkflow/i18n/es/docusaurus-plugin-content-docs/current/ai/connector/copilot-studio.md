---
id: ai-connector-copilot-studio
title: Conectar Microsoft 365 Copilot con Skills Workflow
description: "Configure un agente standard de Copilot Studio con el conector MCP de Skills Workflow y pruebe la conexión antes de compartirlo."
sidebar_label: Microsoft 365 Copilot
sidebar_position: 2.5
---

Cree un agente Skills Workflow en Copilot Studio para los usuarios de Microsoft 365 Copilot o Teams de la agencia. El agente se conecta al servidor MCP de Skills Workflow. GitHub Copilot en Visual Studio Code se conecta directamente; siga la pestaña GitHub Copilot en [Conectar su herramienta de AI](/docs/ai/connector/ai-connector-setup).

## Requisitos previos

Pida a Skills Workflow la dirección de la API del tenant, App ID, App key, Tenant ID y las skills `client-portal` y `app-page`. Necesita acceso a Copilot Studio y permiso para crear conectores personalizados en el mismo entorno Power Platform.

Use un entorno con Dataverse. Un entorno Teams no admite los nuevos agentes GitHub Copilot; un entorno Developer sin Dataverse también bloquea la creación. Reserve la App key a los publicadores autorizados: permite publicar y sustituir páginas de todo el tenant como administrador de Skills Workflow.

## Crear el conector personalizado

1. Abra [Power Apps](https://make.powerapps.com/), seleccione el entorno y abra **Custom connectors → New custom connector → Create from blank**. Asígnele el nombre `Skills Workflow MCP`.
2. Active **Swagger editor**. Descargue la [plantilla OpenAPI](/files/skillsworkflow-mcp.openapi.yaml), sustituya `YOUR-TENANT-API-HOST` por el hostname de la API de su tenant (sin `https://` ni ruta) y pegue la definición en el editor. La ruta MCP es `/mcp/client-portal`.
3. Desactive **Swagger editor** y compruebe en **Security**: autenticación **API Key**, nombre del parámetro `x-app-key`, ubicación **Header**. Seleccione **Create connector**.

![img-box-shadow](/img/ai/copilot-studio/security.png)
<figcaption>La App key se guarda en la conexión, no en los dos inputs del agente.</figcaption>


4. Abra **Test → New connection**, introduzca la App key en el campo protegido `api_key` y seleccione **Create**. Esto crea la conexión; el estado Connected por sí solo no valida las herramientas MCP.

## Crear un agente standard

1. En [Copilot Studio](https://copilotstudio.microsoft.com/), seleccione el mismo entorno. Abra **Home → Other ways to build → Build with standard orchestration → Agent**. Introduzca un nombre y seleccione **Create**.

![img-box-shadow](/img/ai/copilot-studio/standard.png)
<figcaption>Elija Agent en la sección Standard para seguir esta configuración probada.</figcaption>


2. Abra **Add tool**, busque `Skills Workflow` y seleccione **Skills Workflow MCP** en **Model Context Protocol**. Seleccione la conexión creada y elija **Add**.
3. Abra la herramienta añadida y rellene **Inputs**: `x-app-id` con App ID y `x-tenant-id` con Tenant ID. Seleccione **Save**. Ambos son headers enviados con la App key de la conexión. Rellénelos en cada agente; no se copian automáticamente desde otro agente.

![img-box-shadow](/img/ai/copilot-studio/inputs.png)
<figcaption>App ID y Tenant ID van en los Inputs de la herramienta; la App key va en la conexión protegida.</figcaption>


## Probar la conexión MCP

Inicie una nueva sesión de prueba y pregunte qué herramientas Skills Workflow están disponibles. Compare la lista con las ocho herramientas de [Comprobar la conexión](/docs/ai/connector/ai-connector-setup).

Después pida al agente que llame a `get_portal_url` para el cliente hipotético `mcp-connection-check` y el portal `connection-check`, sin crear ni modificar nada. Revise el registro de actividad: la herramienta debe terminar con **Completed** y devolver la URL de su tenant. Esta herramienta devuelve una dirección aunque no exista una página en esa ubicación; no publica ni verifica la página.

![img-box-shadow](/img/ai/copilot-studio/test.png)
<figcaption>Una llamada real a get_portal_url terminó correctamente en la prueba del agente standard.</figcaption>


Una lista textual de herramientas no basta para validar la conexión. Si el editor muestra **Connector request failed**, compruebe los tres valores de los headers y los inputs guardados. Confirme el comportamiento en ejecución mediante el resultado real de la herramienta en el registro de prueba.

## Preparar el acceso de los key users

Antes de pedir al agente que publique contenido, obtenga y configure con Skills Workflow las reglas oficiales `client-portal` y `app-page`. La publicación y distribución a otros usuarios requieren una validación separada; la prueba anterior valida solo una conexión.

Para distribuirlo en la organización, siga las [instrucciones Microsoft para publicar en Teams y Microsoft Copilot](https://learn.microsoft.com/en-us/microsoft-copilot-studio/publication-add-bot-to-microsoft-teams). Pida a IT que revise las licencias, la identidad de la conexión y el grupo de publicadores autorizados antes de poner el agente a disposición de los usuarios. Quienes abren las páginas publicadas se autentican con su propia identidad.

## Trial y créditos

Un trial de Copilot Studio puede permitir las pruebas en la experiencia standard. No garantiza capacidad de ejecución en la nueva experiencia GitHub Copilot: la creación y las pruebas en esa experiencia pueden consumir Copilot Credits. Si aparece `EnforcementUsageCredits`, pida al administrador que revise **Licensing → Copilot Studio → Manage Copilot Credits**. Consulte las [orientaciones Microsoft sobre capacidad](https://learn.microsoft.com/en-us/power-platform/admin/manage-usage-github-copilot-harness).

## Artículos relacionados

- [Skills Workflow MCP](/docs/ai/connector/ai-connector-setup)
- [Client Portals](/docs/ai/ai-portals)
