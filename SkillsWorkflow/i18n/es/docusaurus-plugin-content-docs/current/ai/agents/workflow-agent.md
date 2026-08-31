---
id: workflow-agent
title: Agente de Workflows
description: "Consultar y configurar workflows — stages, transiciones, acciones, roles, motivos, equipos y mapeos — describiendo el cambio que quieres."
sidebar_label: Agente de Workflows
sidebar_position: 3
---

El Agente de Workflows se ocupa del ciclo de vida en sí: cómo pasa un documento de un stage al siguiente, quién puede moverlo, y qué tiene que ocurrir por el camino. Úsalo para entender un workflow que heredaste, o para cambiar uno sin recorrer las pantallas de configuración.

Configura workflows. Mover un documento concreto por sus stages es el [Agente de Documentos](/docs/ai/agents/document-agent).

## Qué puede hacer

- Explicar un workflow existente — sus stages, las transiciones entre ellos, y qué exige cada transición
- Añadir, cambiar o reordenar stages
- Crear transiciones entre stages, y definir qué pide cada transición
- Ajustar rutas de aprobación y quién puede ejecutar una transición
- Cambiar los motivos y las acciones asociados a una transición
- Leer y fijar los equipos y mapeos que usa un workflow

## Cómo usarlo

1. Abre el [Asistente de IA](/docs/ai/ai-assistant) y selecciona **Agente de Workflows**.
2. Nombra el workflow, o el tipo de documento al que pertenece.
3. Pídele primero que te muestre el workflow cuando estés cambiando uno que no construiste tú.
4. Describe el cambio como resultado — *"nadie fuera de Legal puede aprobar esto"* en vez de una lista de campos.

Empieza leyendo antes de escribir:

```
Muéstrame el workflow de los Deliverables.
```

Después cambia una cosa cada vez:

```
Añade un paso de revisión legal antes de Approved, y que solo Legal pueda sacarlo de ahí.
```

## Reglas y comportamiento

- Pide un cambio cada vez. Una petición amplia vuelve como una propuesta para trabajarla, no como un montón de ediciones ya aplicadas.
- El agente valida un cambio antes de aplicarlo, y te dice cuándo se rechaza en vez de aplicar una parte.
- Un cambio en el workflow afecta a todos los documentos que ya están en él. Lee lo que propone antes de aprobar.
- Los tipos de stage los define el sistema. Ver [Stage Types](/docs/administration/workflows/stage-types) para el significado de cada uno.

## Artículos relacionados

- [Asistente de IA](/docs/ai/ai-assistant)
- [Agente de Documentos](/docs/ai/agents/document-agent)
- [Herramientas](/docs/ai/ai-tools)
