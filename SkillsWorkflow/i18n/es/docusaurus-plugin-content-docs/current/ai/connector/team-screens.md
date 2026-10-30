---
id: ai-connector-team-screens
title: Añadir una Pantalla a Skills Workflow
description: "Pide a Claude Code, Codex o GitHub Copilot una pantalla propia dentro de Skills Workflow: en el menú, como pestaña en cada job o proyecto, como página de inicio de tu equipo o como mosaico en Maintenance, visible solo para los roles que elijas."
sidebar_label: Una Pantalla Dentro de Skills Workflow
sidebar_position: 6
---

Cuando un equipo trabaja con una vista que las pantallas estándar no le dan, pídesela a tu herramienta de IA: la página de inicio del equipo, una pestaña en cada job, una entrada en el menú. La herramienta de IA construye la pantalla y la publica dentro de Skills Workflow, donde tu equipo ya trabaja.

![img-box-shadow](/img/ai/connector/screen-home-page.jpg)
<figcaption>Una página de inicio publicada con el conector en un tenant de demostración. Es la página de inicio de los usuarios y tiene una entrada en el menú; los contadores y los departamentos son datos en tiempo real.</figcaption>

## Disponibilidad

Disponible cuando las pantallas están activadas para tu tenant; pregunta al equipo de Skills Workflow. La pantalla se construye como un pequeño proyecto de código, así que pídela en una herramienta que trabaje con código, como Claude Code, Codex o GitHub Copilot, con el [conector de Skills Workflow](/docs/ai/connector/ai-connector-setup) añadido.

## Dónde puede aparecer una pantalla

| Lugar | Lo que ve el usuario |
|---|---|
| Menú | Una entrada en el grupo Pages, o en el grupo de menú de un tipo de documento como Job o Project. Se abre como pantalla propia o en un popup. |
| Documento | Una pestaña en el detalle y en la preview de todos los documentos de un tipo. La pantalla sabe en qué documento está. |
| Home | La página de inicio del usuario. Ocupa el lugar de los workspaces de Home; si hay varias, gana la de orden más bajo. |
| Maintenance | Un mosaico en Maintenance, que abre la pantalla dentro de él. |

Dile a la herramienta de IA dónde va la pantalla, su título en cada idioma que usa tu equipo y qué roles la ven. Sin roles, la ven todos. Los roles marcados como obligatorios se exigen todos; de los demás, basta con uno.

## Reglas y comportamiento

- Cada publicación es una versión nueva. Una versión publicada nunca cambia, y una corrección es siempre la versión siguiente.
- Solo hay una versión activa a la vez, y los usuarios reciben una versión recién activada en aproximadamente un minuto. Volver a activar una versión anterior es la forma de volver atrás.
- Las versiones publicadas no se pueden eliminar. Para retirar una pantalla a todos, pide a tu herramienta de IA que publique una versión marcada como inactiva.
- La pantalla lee los datos con los permisos del usuario que la ve.
- Los usuarios bloqueados por timesheets en falta no ven la pantalla, salvo que pidas que se les muestre.

## Artículos relacionados

- [Conectar Claude, Codex o GitHub Copilot a Skills Workflow](/docs/ai/connector/ai-connector-setup)
- [Skills Workflow en tu Herramienta de IA](/docs/ai/connector)
- [Construir un Informe a Partir de tus Datos](/docs/ai/connector/ai-connector-reports)
