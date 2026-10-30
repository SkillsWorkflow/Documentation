---
id: ai-claude
title: Skills Workflow en Claude
description: "Conecta Claude a Skills Workflow y crea lo que tu agencia entrega a clientes y equipos: páginas de estado, informes, pantallas dentro de la plataforma, informes para imprimir, formularios y pantallas de pared, todos leyendo datos en tiempo real."
sidebar_label: Visión general
sidebar_position: 1
---

Conecta Claude a tu tenant de Skills Workflow y describe lo que necesitas en lenguaje sencillo. Claude lo construye, lo publica en tu tenant y te da su dirección. Lo que construye lee datos de Skills Workflow en tiempo real, y cada persona que lo abre ve solo lo que le permiten sus propios permisos.

La conexión es un conector que añades a Claude una sola vez, con las credenciales que te envía el equipo de Skills Workflow. Lee [Conectar Claude a Skills Workflow](/docs/ai/claude/ai-claude-connect) para configurarlo.

## Qué puedes crear

| Lo que necesita tu agencia | Ejemplo típico | Estado |
|---|---|---|
| [Una página de estado en tiempo real para un cliente](/docs/ai/claude/ai-claude-client-status-page) | El estado de una campaña, sus entregables y lo que está pendiente del cliente, en una sola dirección | Disponible |
| [Una dirección para todo lo que abre un cliente](/docs/ai/claude/ai-claude-client-hub) | La página de inicio de un cliente, con enlaces a cada una de sus páginas de estado e informes | Disponible |
| [Un informe a partir de tus datos](/docs/ai/claude/ai-claude-reports) | Horas y burn de un retainer, facturación por mes, jobs por etapa | Disponible |
| [Una pantalla dentro de Skills Workflow](/docs/ai/claude/ai-claude-team-screens) | Un tablero de tráfico en el menú, una pestaña en cada job, la página de inicio del equipo | Disponible |
| [Un informe para imprimir o enviar](/docs/ai/claude/ai-claude-printable-reports) | El informe de estado mensual tal como está hoy, guardado en PDF y enviado por email | Preview |
| [Un formulario que crea trabajo](/docs/ai/claude/ai-claude-forms) | Un formulario de petición que abre un job, un breve formulario de feedback tras una entrega | Preview |
| [Cifras en una pantalla del estudio](/docs/ai/claude/ai-claude-wall-displays) | Los plazos de hoy y la capacidad de la semana en una TV del estudio | Preview |

**Disponible** significa que la plataforma lo admite hoy. **Preview** significa que se puede construir con lo que la plataforma ofrece hoy, pero todavía no se ha probado de principio a fin; comprueba el resultado antes de entregárselo a nadie.

Otras cosas que piden las agencias, construidas de la misma forma:

- Un seguimiento de new business con los pitches en curso y los estimates pendientes de aprobación
- Una página de bienvenida para un cliente nuevo, con el equipo, los contactos y cómo pedir trabajo
- El resumen de fin de campaña: qué se entregó, las horas consumidas frente al estimate y las aprobaciones registradas
- Una página por account director con sus clientes, ordenados por lo que necesita atención

## Planeado: trabajar en Skills Workflow desde Claude

Hoy el conector crea y publica. Está planeado un segundo conector para trabajar con tus datos directamente desde Claude: encontrar documentos, mover un job a su siguiente etapa, actualizar registros. Todavía no está disponible y no tiene fecha.

## Reglas y comportamiento

- Todo lo que publica Claude se guarda en el sistema de archivos de tu tenant y se sirve desde la propia dirección de tu tenant.
- Nadie abre lo que publica Claude sin iniciar sesión en Skills Workflow. Los clientes que vayan a abrir una página necesitan un usuario de Skills Workflow.
- Lo que publica Claude lee los datos con los permisos de la persona que lo ve, y nunca muestra a nadie datos que no podría ver en Skills Workflow.
- Claude puede cometer errores. Abre lo que publica como las personas que lo van a usar antes de compartir la dirección. Consulta [La IA Puede Cometer Errores](/docs/ai/ai-can-make-mistakes).

## Artículos relacionados

- [Conectar Claude a Skills Workflow](/docs/ai/claude/ai-claude-connect)
- [Portales de Cliente](/docs/ai/ai-portals)
- [Data Extraction API](/docs/build-and-extend/api/data-extraction-api)
- [La IA Puede Cometer Errores](/docs/ai/ai-can-make-mistakes)
