---
id: document-agent
title: Agente de Documentos
description: "Crear, actualizar, duplicar, encontrar y mover jobs, deliverables y otros documentos describiendo lo que necesitas, con una tarjeta de aprobación antes de cualquier escritura."
sidebar_label: Agente de Documentos
sidebar_position: 2
---

El Agente de Documentos hace el trabajo que de otro modo harías a través de formularios: crear un job, escribir su brief, rellenar campos personalizados, cambiar quién está en el equipo, moverlo al siguiente stage. Tú describes el resultado; él averigua qué registros significa eso y te pide aprobación antes de escribir.

Es el agente a elegir para todo lo que acaba con un documento existiendo o cambiando.

## Qué puede hacer

- Crear un job o deliverable, con su brief escrito a partir de la plantilla de briefing del job type
- Actualizar en un job existente el título, prioridad, esfuerzo, valor de negocio, fechas, job type y sus indicadores de planificable, bloqueado y timesheet
- Duplicar un Job, Deliverable, Project, Estimate o Request, llevándose opcionalmente la descripción, el equipo y los valores de los campos personalizados
- Leer y reescribir el brief de un documento
- Leer y fijar valores de campos personalizados
- Añadir y quitar miembros del equipo, en varios roles en un solo cambio
- Mover un documento a otro stage del workflow
- Buscar cualquier tipo de documento, y abrir uno en un popup o navegar hasta él
- Adjuntar al brief un fichero que dejaste en el chat, o publicarlo en el feed del documento

Para la lista completa de herramientas detrás de esto, ver [Herramientas](/docs/ai/ai-tools).

## Cómo usarlo

1. Abre el [Asistente de IA](/docs/ai/ai-assistant) y selecciona **Agente de Documentos**.
2. Describe lo que quieres. Nombra el cliente, el proyecto o el job si los sabes.
3. Responde a los selectores que plantee. Cuando un nombre coincide con más de un registro, pregunta cuál en vez de adivinar.
4. Lee la tarjeta de aprobación y aprueba, deniega, o edita antes un valor en la propia tarjeta.

Trabajando sobre un documento ya abierto en pantalla, deja activado el interruptor de contexto **Document**. El agente sabe entonces de qué documento hablas sin que se lo digas.

### Crear un job

Describe el trabajo con las mismas palabras que usarías con un compañero, e incluye todo lo que el brief deba decir.

```
Crea un job para Northwind, campaña de primavera, artwork para el correo de lanzamiento.
Plazo para finales de la semana que viene.
```

El agente resuelve el cliente, el proyecto, el departamento y el job type, y pregunta donde un nombre sea ambiguo. Antes de crear, lee la plantilla de briefing del job type y escribe tu descripción dentro de esa estructura, para que el brief siga el formato de la agencia en vez de llegar como un párrafo. La tarjeta de aprobación muestra los campos resueltos y el brief redactado; corrige ahí el título o la descripción si alguno está mal.

### Duplicar un documento

Pide una copia y di qué debe cambiar:

```
Duplica este job, pero este es para YouTube.
```

El agente lee el brief de origen, reescribe el nombre y el brief para la diferencia indicada, y deja heredado todo lo demás. Cliente, proyecto, departamento y job type vienen siempre del original y no se pueden cambiar aquí. Plantea la pregunta de si llevarse la descripción, el equipo y los valores de los campos personalizados, salvo que ya lo hayas dicho.

Una duplicación crea un documento nuevo. Para corregir un título o un brief en un documento que ya existe — incluida la copia que acabas de hacer — pide el cambio; no pidas otra duplicación.

### Cambiar de stage

```
Mueve SKILLS0059S1492 a Client Approval.
```

El agente enumera las transiciones realmente disponibles en ese documento en ese momento, eliges una, y pide aprobación. Si la transición exige un comentario, un motivo, horas, un fichero o campos adicionales, los recoge antes.

## Reglas y comportamiento

- Todo lo que escribe pide aprobación primero, y denegarla no cambia nada.
- El agente trabaja con tus permisos. Un documento que no puedes ver, no lo puede encontrar.
- No se puede reencuadrar: cliente, proyecto, departamento y business object type de un documento quedan fijos en cuanto existe.
- Los campos personalizados se escriben por el campo configurado, nunca por la etiqueta en pantalla, así que renombrar una etiqueta no rompe un cambio.
- El resultado de `Generate from template` depende de que el job type tenga una plantilla de briefing configurada. Sin ella, el brief se escribe solo a partir de la conversación.

## Artículos relacionados

- [Asistente de IA](/docs/ai/ai-assistant)
- [Herramientas](/docs/ai/ai-tools)
- [Agente de Workflows](/docs/ai/agents/workflow-agent)
- [Agente de Escritura](/docs/ai/agents/writing-agent)
- [Acciones de IA](/docs/ai/ai-actions)
