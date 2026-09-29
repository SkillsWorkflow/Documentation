---
id: ai-tools
title: Herramientas
description: "El catálogo de tools que se le pueden dar a un agent: qué permite leer o cambiar cada una al agent, cuáles escriben en tu cuenta, y cómo se conceden las tools por agent."
sidebar_label: Herramientas
sidebar_position: 5
---

Un agent, por sí solo, solo puede hablar. Lo que le permite buscar algo, crear un job o mover un documento es una **tool**. Las tools de un agent son todo lo que puede hacer: un agent sin `create_job` no puede crear un job, por más que se lo pidas.

Esta página es el catálogo. Léela para saber de qué es capaz un agent existente, y para decidir qué conceder a un agent que estés creando en [Añadir tus propias skills, agents y tools](/docs/ai/ai-extend).

## Cómo se conceden las tools

Cada definición de agent tiene una allow-list de `tools`. Indicar nombres de tools restringe el agent a esas; dejar la lista vacía le da todo el catálogo de la plataforma que aparece abajo.

`get_current_time` se añade a todos los agents y no necesita entrada.

Hay dos conjuntos adicionales que son opt-in y no forman parte de `tools`:

- **Tus queries de extracción de datos**: define `useAnalyticsTools`, y acótalas con `analyticsTools`.
- **Tus propios MCP servers**: lístalos en `mcpServers`.

Ambos se explican en [Añadir tus propias skills, agents y tools](/docs/ai/ai-extend).

## Tools que escriben

Estas cambian datos. Pon todas ellas en la lista `toolsRequiringApproval` del agent, para que el usuario vea una tarjeta de aprobación antes de que la tool se ejecute. Consulta [Asistente de IA](/docs/ai/ai-assistant#approve-what-it-does).

`create_job` · `update_job` · `duplicate_document` · `update_document_brief` · `update_document_custom_fields` · `update_team_members` · `execute_workflow_transition` · `create_timesheet_entry`

Todo lo demás en esta página lee, salvo las tres tools de memoria, que solo escriben en el repositorio de memoria del propio usuario que pregunta.

## Tools de la plataforma

Estas se ejecutan en el servidor, contra la Skills Workflow API, como el usuario con la sesión iniciada.

### Encontrar un registro

| Herramienta | Qué puede hacer el agente |
|---|---|
| `resolve_client` | Encontrar un client a partir de un nombre escrito por el usuario, ordenado por relevancia |
| `resolve_project` | Encontrar un project a partir de un nombre |
| `resolve_department` | Encontrar un department, delimitado por project, client y business object type |
| `resolve_job_type` | Encontrar un job type dentro de un department |
| `list_clients` | Listar clients, opcionalmente filtrado por nombre |
| `list_projects` | Listar projects, filtrado por nombre, client, producto, contract o request |
| `list_departments` | Listar departments que el usuario puede ver, opcionalmente acotado por project |
| `list_job_types` | Listar job types, filtrado por department, client, project o document type |
| `list_document_types` | Listar document types |
| `list_assignment_types` | Listar los roles de team que un document type acepta |
| `get_project_by_id` | Leer los detalles completos de un project |
| `search_users` | Encontrar usuarios por nombre, email o username |
| `get_current_user` | Leer quién está preguntando |
| `get_current_time` | Leer la fecha y hora actuales |

Las tools `resolve_*` son las que convierten *"el retainer de Northwind"* en un registro. Cuando hay más de un candidato que coincide, el asistente te pide que elijas.

### Documentos y jobs

| Herramienta | Qué puede hacer el agente |
|---|---|
| `get_job_by_number` | Abrir un job por su número |
| `search_documents` | Buscar cualquier document type — projects, jobs, estimates, contracts, gastos, bills, purchase orders, requests, credit notes, supplier invoices |
| `create_job` | Crear un job o deliverable a partir de project, business object type, department, job type, fechas y título |
| `update_job` | Editar el título, prioridad, esfuerzo, valor de negocio, fechas, job type y las flags plannable, blocked y timesheet de un job existente |
| `duplicate_document` | Copiar un Job, Deliverable, Project, Estimate o Request, trasladando opcionalmente su descripción, team y valores de custom fields |

`update_job` cambia solo los campos que se le pasan. No puede volver a definir el ámbito de un documento: client, project, department y business object type quedan fijos en cuanto el documento existe.

### Briefs

| Herramienta | Qué puede hacer el agente |
|---|---|
| `get_document_brief` | Leer el brief de un documento |
| `update_document_brief` | Escribir el brief de un documento |
| `get_job_type_brief_template` | Leer la plantilla de briefing configurada en un job type, para que un brief siga tu estructura |
| `get_client_brief_instructions` | Leer las propias instrucciones de redacción de brief del client |

Juntas, son las que producen un brief estructurado en lugar de un párrafo. El agent lee primero la plantilla del job type y las instrucciones del client, y luego escribe dentro de esa estructura.

#### Instrucciones de brief del cliente

`get_client_brief_instructions` es de solo lectura. Toma el ID del client comercial seleccionado, abre el área de archivos de ese client y sigue esta ruta:

```text
Client root folder → ai-instructions folder → brief-instructions.md
```

Devuelve el contenido en Markdown de ese archivo al agent. La tool no busca en el resto de los archivos del client, en los adjuntos del chat, ni en la carpeta `$ai-agents/skills` del tenant.

La carpeta y el archivo deben existir en el área de archivos del client, y el archivo debe contener texto. Si alguno de los dos falta, está vacío o no se puede leer, la tool no tiene instrucciones del client que devolver. Un agent puede entonces usar sus pautas generales de briefing, pero no puede validar frente a reglas específicas del client.

Consulta [Validador de Briefs](/docs/ai/agents/brief-validator) para ver la configuración, un ejemplo de archivo de instrucciones y el resultado de validación esperado.

### Custom fields

| Herramienta | Qué puede hacer el agente |
|---|---|
| `get_document_custom_fields` | Listar los custom fields de un documento con sus etiquetas y valores actuales |
| `update_document_custom_fields` | Establecer uno o más valores de custom fields |

### Equipos

| Herramienta | Qué puede hacer el agente |
|---|---|
| `get_document_team` | Leer quién está en la team de un documento |
| `update_team_members` | Añadir y quitar miembros de la team |

Una única llamada a `update_team_members` incluye todos los cambios que pidió el usuario, en tantos roles como haya indicado, y queda registrada en el feed del documento como una sola entrada.

### Workflow

| Herramienta | Qué puede hacer el agente |
|---|---|
| `list_workflow_transitions` | Listar las transitions disponibles en un documento en este momento |
| `execute_workflow_transition` | Mover un documento a otra stage |

No hay una transition predeterminada. El agent lista lo que está disponible, tú eliges, y luego pide aprobación.

### Tiempo

| Herramienta | Qué puede hacer el agente |
|---|---|
| `create_timesheet_entry` | Registrar tiempo. Sin un usuario definido, registra a nombre de quien pregunta |

### Tus datos

| Herramienta | Qué puede hacer el agente |
|---|---|
| `execute_named_query` | Ejecutar una de tus named queries de extracción de datos y devolver filas |
| `analytics_{query}` | Una tool por cada named query que tu tenant publica, concedida mediante `useAnalyticsTools` |

Estas son las que responden a *"cómo va este client este mes"* sin un dashboard. Cada query se filtra, ordena y pagina en SQL antes de devolver cualquier fila, es de solo lectura, y está limitada a los permisos del usuario que pregunta — a un usuario al que se le niega un informe en la plataforma también se le niega aquí.

Ambas tools reciben los parámetros propios de la query, además de un `queryBuilder`, y ahí es donde ocurren el filtrado, la ordenación, la paginación y la selección de columnas: `filters`, `orderBy`, `fields`, `skip` y `take`. No hay agregación. Un total o un breakdown viene de una query escrita para eso, no de que el agent lo pida.

Cada llamada tiene un límite. Un agent que no indica un número de filas recibe 50, y 500 es el techo para cualquier número que pida. El límite de filas propio del autor de la query reduce ambos valores. El panel muestra lo que llega como una lista, un gráfico o ambos. Consulta [Asistente de IA](/docs/ai/ai-assistant#read-an-answer-from-your-data).

El catálogo de queries es por tenant. Consulta [Data Extraction API](/docs/build-and-extend/api/data-extraction-api) para saber qué queries existen y qué lleva cada una.

### Memoria

| Herramienta | Qué puede hacer el agente |
|---|---|
| `save_memory` | Guardar una preferencia, hecho o registro indicado por el usuario |
| `update_memory` | Corregir algo memorizado anteriormente |
| `delete_memory` | Olvidar algo |

Estas escriben solo en el repositorio del propio usuario que pregunta, y en ningún otro sitio. Que lleguen a escribir o no es decisión del usuario: con **Memory on** desactivado, un guardado se rechaza y se le informa al agent de ello. Con **Ask before saving**, el agent debe conseguir primero el acuerdo del usuario en la conversación. Olvidar siempre funciona.

Todos los agents respetan las memorias de un usuario, tengan o no estas tools concedidas, porque leerlas no es una tool. Los usuarios gestionan el repositorio en **Manage Memories** — consulta [Memorias de IA](/docs/ai/ai-memories).

### Interfaz de chat

| Herramienta | Qué puede hacer el agente |
|---|---|
| `gen-ui.emit_custom_event` | Enviar una tarjeta o un payload personalizado al chat |
| `gen-ui.emit_custom_prompt` | Ofrecer un prompt de seguimiento en el que el usuario puede tocar |

Ninguna de las dos cambia datos.

## Tools del navegador

Estas se ejecutan en el navegador del usuario en lugar de en el servidor, porque necesitan la pantalla que el usuario está viendo. Se conceden por agent y no se pueden listar en `tools`.

| Herramienta | Qué puede hacer el agente |
|---|---|
| `OpenDocument` | Abrir un documento en un popup de vista previa, o navegar hasta él |
| `AttachFileToDocument` | Adjuntar al brief de un documento un archivo que el usuario soltó en el chat |
| `PostFileToFeed` | Publicar en el feed de un documento, con un archivo |
| `SDK_List` | Listar los métodos del SDK disponibles |
| `SDK_Invoke` | Llamar a uno de ellos |
| `Workspace_Get`, `Workspace_List` | Leer una definición de workspace |
| `Workspace_Validate`, `Workspace_Apply` | Comprobar un cambio de workspace y luego aplicarlo |
| `CustomTable_List`, `CustomTable_Get`, `CustomTable_Validate` | Leer y comprobar definiciones de custom tables |
| `Integration_Get`, `Integration_List`, `Integration_Validate` | Leer y comprobar workflows de integración |
| `GetBriefingTemplates`, `GetBriefingTemplateContent`, `ResolveJobTypeBriefingTemplate` | Leer plantillas de briefing desde el editor |
| `GetTransitionRequirements` | Leer lo que necesita una transition antes de ejecutarse: un comentario, un motivo, horas, un archivo, campos de usuario |
| `GetJobByNumber`, `SearchDocuments` | Buscar un job o buscar documentos desde la pantalla en la que está el usuario |
| `SearchWorkflowStageTransitions` | Listar las transitions disponibles en un documento en este momento |
| `ExecuteWorkflowTransition` | Mover un documento a otra stage. Escribe |
| `GetDocumentBrief`, `UpdateDocumentBrief` | Leer y escribir un brief desde dentro del editor. `UpdateDocumentBrief` escribe |

## Lo que las tools no pueden hacer

- **Nunca exceden tus permisos.** Cada llamada lleva la identidad del usuario con la sesión iniciada. A un agent al que se le pide un informe que el usuario no tiene permiso para ver se le rechaza, igual que se le rechazaría al propio usuario.
- **Nunca actúan como otra persona.** El usuario en cuyo nombre actúa una tool se toma de la sesión, nunca de algo que decida el agent.
- **La extracción de datos es de solo lectura.** Ninguna named query escribe.

## Artículos relacionados

- [Agentes](/docs/ai/agents)
- [Asistente de IA](/docs/ai/ai-assistant)
- [Memorias de IA](/docs/ai/ai-memories)
- [Añadir tus propias skills, agents y tools](/docs/ai/ai-extend)
- [Data Extraction API](/docs/build-and-extend/api/data-extraction-api)
