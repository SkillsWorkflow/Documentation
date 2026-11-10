---
id: approval-cards
title: Tarjetas de Aprobación (A2UI)
description: "El contrato detrás de las tarjetas de aprobación del Asistente de IA: los mensajes A2UI v0.9.1 que envía el agent server, el catálogo Skills Workflow que usan y cómo un cliente devuelve las ediciones y la decisión del usuario."
sidebar_label: Tarjetas de Aprobación
sidebar_position: 5
---

Cuando un agente va a ejecutar una acción que necesita aprobación, el agent server describe la tarjeta de aprobación en mensajes [A2UI v0.9.1](https://a2ui.org/specification/v0.9.1-a2ui/), el formato abierto de Google para interfaces generadas por agentes. El cliente los dibuja a partir de un catálogo de componentes conocidos. El agente nunca envía HTML, y los mismos mensajes pueden dibujarse en la WebApp, en una app móvil o en cualquier otro cliente que implemente el catálogo.

El usuario lo ve como la **tarjeta de aprobación** descrita en [Asistente de IA](/docs/ai/ai-assistant#aprobar-lo-que-hace).

## Por dónde viaja la tarjeta

La tarjeta va en el run AG-UI que se detiene a la espera de aprobación. El run termina con un evento `RUN_FINISHED` cuyo `outcome.type` es `interrupt`, y cada entrada de `outcome.interrupts` describe una acción pendiente:

| Campo | Contiene |
|---|---|
| `id` | El id del interrupt, que se devuelve con la decisión |
| `toolCallId` | La llamada a la tool que espera aprobación |
| `metadata.toolName` | La tool que se va a ejecutar |
| `metadata.arguments` | Los argumentos con los que se va a ejecutar |
| `metadata.a2ui` | La tarjeta: la lista de mensajes A2UI |

La tarjeta nunca forma parte del historial de la conversación y nunca llega al modelo.

## Pedir las tarjetas

Un cliente solo recibe tarjetas cuando declara los catálogos que sabe dibujar. Envía este objeto en `forwardedProps` en todos los runs, incluido el run que se reanuda tras una decisión:

```json
{
  "a2uiClientCapabilities": {
    "v0.9": {
      "supportedCatalogIds": [
        "https://skillsworkflow.com/a2ui/v0_9/catalogs/approval/catalog.json",
        "https://a2ui.org/specification/v0_9/catalogs/basic/catalog.json"
      ]
    }
  }
}
```

La clave sigue siendo `v0.9` en la v0.9.1.

Un cliente que no lo envía no recibe `metadata.a2ui` y dibuja la aprobación por su cuenta, a partir de `metadata.toolName` y `metadata.arguments`.

## Los mensajes

`metadata.a2ui` contiene tres mensajes, que se aplican en orden. Cada uno lleva `"version": "v0.9.1"`.

| Mensaje | Qué hace |
|---|---|
| `createSurface` | Abre la tarjeta. `surfaceId` es `approval-` seguido del id del interrupt. `catalogId` indica el catálogo Skills Workflow. |
| `updateComponents` | Los componentes, en una lista plana. Cada uno tiene un `id` y un tipo en `component`, y los contenedores indican sus hijos por id. |
| `updateDataModel` | Los valores que editan los campos, en `/args`. |

Dos ids de componente son fijos:

- `root` es la parte superior de la tarjeta.
- `title` es el encabezado de la tarjeta. Un cliente con encabezado propio puede mostrarlo ahí y dejarlo fuera del cuerpo.

## El catálogo

Las tarjetas usan el catálogo de aprobación Skills Workflow, `https://skillsworkflow.com/a2ui/v0_9/catalogs/approval/catalog.json`. Es el catálogo básico A2UI, sin cambios, más un componente y una función. [Descargar el catálogo](/files/a2ui-approval-catalog.json) (JSON Schema).

### Componentes

Todos los componentes del catálogo básico: `Text`, `Image`, `Icon`, `Video`, `AudioPlayer`, `Row`, `Column`, `List`, `Card`, `Tabs`, `Modal`, `Divider`, `Button`, `TextField`, `CheckBox`, `ChoicePicker`, `Slider` y `DateTimeInput`.

`EntityPicker` elige registros de la plataforma en una lista demasiado larga para enviarla. El servidor indica la entidad, y el cliente busca en la plataforma como ya lo hace.

| Propiedad | Contiene |
|---|---|
| `label` | Lo que se está eligiendo |
| `entity` | `user`, `client`, `project`, `department`, `jobType`, `company`, `role`, `documentType` o `typology` |
| `filter` | Parámetros que acotan la búsqueda, como `companyId` |
| `multiple` | `true` para una lista de registros, `false` para uno solo |
| `value` | Los ids elegidos, vinculados al argumento que editan |
| `display` | Los nombres de esos ids, en el mismo orden |

Las tarjetas usan `client`, `department`, `role` y `typology`. La WebApp los busca con estos lookups:

| Entidad | Lookup |
|---|---|
| `client` | `commercialclients/lookup` con `getAllClients=true` |
| `department` | `departments/lookup` con `filterByCurrentUser=false` y `filterByPlannable=false` |
| `role` | `v3/roles/lookup` |
| `typology` | `v3/user-typologies/lookup`, con el `companyId` que la tarjeta envía en `filter` |

### Funciones

Las funciones del catálogo básico (`formatDate`, `formatNumber`, `formatString`, `and`, `or`, `not` y las demás), más `translate`.

`translate` devuelve un texto en el idioma del usuario. Sus argumentos:

- `key`: una clave de traducción Skills Workflow.
- `fallback`: el texto en inglés, que se muestra cuando el cliente no tiene traducción para la clave.
- `params`: valores para los marcadores `{{name}}` de la clave y del fallback.

Un cliente sin las traducciones Skills Workflow sigue mostrando un texto legible gracias a `fallback`.

## Organización de las tarjetas

Las tarjetas siguen algunos patrones del catálogo básico:

- Una `Row` cuyo primer hijo es un `Text` `caption` es un campo: ese texto es la etiqueta y el hijo siguiente es el valor.
- Una `Row` de `Column`s, cada una con una etiqueta y un valor, pone dos campos cortos en la misma línea.
- Un `Text` con la variante `h5` es el título de una sección.
- Un `Text` `caption` directamente debajo de `root` es una nota, como el origen de los valores propuestos.

## Devolver la decisión

Cada campo que el usuario puede corregir está vinculado a `/args/<argumento>`, el argumento de la tool que edita, y `updateDataModel` lo rellena con el valor que propuso el agente. El `EntityPicker` de la tarjeta vincula `value` al argumento de los ids y `display` al argumento de los nombres, y el cliente escribe los dos cuando el usuario elige.

Para decidir, reanuda el run con una entrada por interrupt:

```json
{
  "interruptId": "<id del interrupt>",
  "status": "resolved",
  "payload": {
    "approved": true,
    "toolCall": {
      "callId": "<toolCallId>",
      "name": "<metadata.toolName>",
      "arguments": { }
    }
  }
}
```

- `arguments` es `metadata.arguments`, con los valores que el usuario cambió en `/args` escritos encima. Envía el resto de argumentos sin cambios.
- Una lista editada fila a fila tiene una marca `include` en cada fila. Envía solo las filas con `include` a `true`, sin la marca.
- Para rechazar, pon `approved` a `false`. Añade `reason` para decirle al agente el motivo.

## Ejemplo

La tarjeta para cambiar la fecha de contratación de un usuario, tal como la envía el agent server. Los componentes están reducidos al encabezado, un campo y una entrada:

```json
[
  {
    "version": "v0.9.1",
    "createSurface": {
      "surfaceId": "approval-8b1e",
      "catalogId": "https://skillsworkflow.com/a2ui/v0_9/catalogs/approval/catalog.json"
    }
  },
  {
    "version": "v0.9.1",
    "updateComponents": {
      "surfaceId": "approval-8b1e",
      "components": [
        { "id": "root", "component": "Column", "children": ["title", "c3", "c6"] },
        {
          "id": "title", "component": "Text", "variant": "h4",
          "text": {
            "call": "translate",
            "args": {
              "key": "AiChatApprovalUserDetailsTitle",
              "fallback": "Change {{name}}'s dates and hours",
              "params": { "name": "Joana Reis" }
            }
          }
        },
        { "id": "c1", "component": "Text", "variant": "body", "text": "Joana Reis" },
        {
          "id": "c2", "component": "Text", "variant": "caption",
          "text": { "call": "translate", "args": { "key": "AiChatApprovalUserRolesUser", "fallback": "User" } }
        },
        { "id": "c3", "component": "Row", "children": ["c2", "c1"] },
        {
          "id": "c4", "component": "DateTimeInput", "enableDate": true, "enableTime": false,
          "label": { "call": "translate", "args": { "key": "AiChatApprovalUserDetailsHireDate", "fallback": "Hire date" } },
          "value": { "path": "/args/hireDate" }
        },
        {
          "id": "c5", "component": "Text", "variant": "caption",
          "text": { "call": "translate", "args": { "key": "AiChatApprovalUserDetailsHireDate", "fallback": "Hire date" } }
        },
        { "id": "c6", "component": "Row", "children": ["c5", "c4"] }
      ]
    }
  },
  {
    "version": "v0.9.1",
    "updateDataModel": {
      "surfaceId": "approval-8b1e",
      "path": "/",
      "value": { "args": { "hireDate": "2026-03-01" } }
    }
  }
]
```

Si el usuario cambia la fecha al 15 de marzo antes de aprobar, el resume envía `"hireDate": "2026-03-15"` en `toolCall.arguments`.

## Reglas y limitaciones

- Los botones que aprueban o rechazan no son componentes. El cliente los dibuja y envía la decisión con el resume de arriba.
- Las tarjetas no contienen `Button`, `Modal`, `Video` ni `AudioPlayer`. Un cliente que no sepa dibujar un componente debe mostrar su `text` o su `label`.
- Un briefing o un comentario se muestra como texto y no se puede editar en la tarjeta. El usuario le pide el cambio al agente en la conversación.
- Una acción sin tarjeta descrita por el servidor llega sin `metadata.a2ui`.
- Los agentes conectados a través de un endpoint externo solo devuelven texto y todavía no pueden enviar tarjetas de aprobación.

## Artículos relacionados

- [Asistente de IA](/docs/ai/ai-assistant)
- [Herramientas](/docs/ai/ai-tools)
- [Añadir tus Propias Skills, Agents y Tools](/docs/ai/ai-extend)
