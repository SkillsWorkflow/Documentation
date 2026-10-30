---
id: ai-connector
title: Skills Workflow en tu Herramienta de IA
description: "Conecta Claude, Codex o GitHub Copilot a Skills Workflow y crea lo que tu agencia entrega a clientes y equipos: páginas de estado, informes y pantallas dentro de la plataforma, todos leyendo datos en tiempo real."
sidebar_label: Visión general
sidebar_position: 1
---

Conecta tu herramienta de IA a tu tenant de Skills Workflow y describe lo que necesitas en lenguaje sencillo. La herramienta lo construye, lo publica en tu tenant y te da su dirección. Lo que construye lee datos de Skills Workflow en tiempo real, y cada persona que lo abre ve solo lo que le permiten sus propios permisos.

La conexión es un conector que añades una sola vez, con las credenciales que te envía el equipo de Skills Workflow. El mismo conector funciona en Claude, Claude Code, Codex y GitHub Copilot. Lee [Conectar Claude, Codex o GitHub Copilot a Skills Workflow](/docs/ai/connector/ai-connector-setup) para configurarlo.

## Qué puedes crear

| Lo que necesita tu agencia | El ejemplo de su página |
|---|---|
| [Una página de estado en tiempo real para un cliente](/docs/ai/connector/ai-connector-client-status-page) | El avance de una campaña, sus entregables y lo que está pendiente de la aprobación del cliente |
| [Una dirección para todo lo que abre un cliente](/docs/ai/connector/ai-connector-client-hub) | La página de inicio de un cliente con enlaces a su página de estado y a su informe, con una cifra en tiempo real junto a cada uno |
| [Un informe a partir de tus datos](/docs/ai/connector/ai-connector-reports) | Los entregables de una campaña por etapa y por semana de entrega, a partir de la query DE-Jobs |
| [Una pantalla dentro de Skills Workflow](/docs/ai/connector/ai-connector-team-screens) | La página de inicio del equipo con contadores en tiempo real, que también tiene una entrada en el menú |

## Planeado {#planned}

Esto todavía no está disponible y no tiene fecha. El comportamiento descrito es el previsto, y puede cambiar.

| Lo que necesita tu agencia | Comportamiento previsto |
|---|---|
| Un informe para imprimir o enviar | Un informe maquetado para papel. Lo abres, lo imprimes o lo guardas como PDF, y la copia conserva las cifras y la fecha de ese momento, lista para enviar por email a alguien fuera de Skills Workflow. |
| Un formulario que crea trabajo | Un formulario que rellena un cliente o un compañero y que crea el job en Skills Workflow con las respuestas en sus campos, como la persona que lo envió. |
| Cifras en una pantalla del estudio | Una vista hecha para una TV: pocas cifras en letra grande, como los plazos del día y los jobs pendientes de los clientes, que se actualiza sola. |

### Trabajar en Skills Workflow desde tu herramienta de IA

Hoy el conector crea y publica. Está planeado un segundo conector para trabajar con tus datos directamente desde tu herramienta de IA: encontrar documentos, mover un job a su siguiente etapa, actualizar registros. Todavía no está disponible y no tiene fecha.

## Reglas y comportamiento

- Todo lo que publica tu herramienta de IA se guarda en el sistema de archivos de tu tenant y se sirve desde la propia dirección de tu tenant.
- Nadie abre lo que publica tu herramienta de IA sin iniciar sesión en Skills Workflow. Los clientes que vayan a abrir una página necesitan un usuario de Skills Workflow.
- Lo que publica tu herramienta de IA lee los datos con los permisos de la persona que lo ve, y nunca muestra a nadie datos que no podría ver en Skills Workflow.
- Las herramientas de IA pueden cometer errores. Abre lo que publica como las personas que lo van a usar antes de compartir la dirección. Consulta [La IA Puede Cometer Errores](/docs/ai/ai-can-make-mistakes).

## Artículos relacionados

- [Conectar Claude, Codex o GitHub Copilot a Skills Workflow](/docs/ai/connector/ai-connector-setup)
- [Portales de Cliente](/docs/ai/ai-portals)
- [Data Extraction API](/docs/build-and-extend/api/data-extraction-api)
- [La IA Puede Cometer Errores](/docs/ai/ai-can-make-mistakes)
