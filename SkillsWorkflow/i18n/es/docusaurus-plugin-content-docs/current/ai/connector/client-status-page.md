---
id: ai-connector-client-status-page
title: Compartir una Página de Estado en Tiempo Real con un Cliente
description: "Pide a tu herramienta de IA una página que muestre a un cliente el estado de su campaña, sus entregables y lo que está pendiente de él, publicada en una dirección que siempre muestra los datos de hoy."
sidebar_label: Una Página de Estado para un Cliente
sidebar_position: 3
---

Da a un cliente una única dirección donde vea cómo va su trabajo: el avance de la campaña, los entregables que vencen y las aprobaciones pendientes de él. Pide la página a tu herramienta de IA, revísala y envía la dirección al cliente. La página lee Skills Workflow cada vez que se abre, así que nadie la actualiza a mano.

![img-box-shadow](/img/ai/connector/client-status-page.png)
<figcaption>Una página de estado publicada con el conector en un tenant de demostración, para el cliente ficticio Northwind Coffee: avance, tres contadores, los entregables pendientes del cliente y todos los entregables con su etapa y su fecha de entrega.</figcaption>

## Disponibilidad

Disponible. Necesitas el [conector de Skills Workflow en tu herramienta de IA](/docs/ai/connector/ai-connector-setup). El cliente inicia sesión con su propio usuario de Skills Workflow y ve solo los proyectos y jobs que ese usuario tiene permitido ver.

## Cómo pedirla

1. Indica el cliente y el proyecto, y di lo que debe ver el cliente. La página de arriba se construyó a partir de la query `DE-Jobs`, filtrada por un cliente y un proyecto.
2. Di qué etapa significa "pendiente del cliente". Los nombres de las etapas son los configurados en tu tenant, y la página los muestra tal cual.
3. Deja que la herramienta de IA publique la página. Te da la dirección, `/portal/{client}/{page}/`.
4. Abre la dirección como un usuario con los permisos del cliente antes de enviarla.

## Reglas y comportamiento

- La dirección tiene dos partes, el cliente y la página. Ambas usan solo letras minúsculas, números y guiones.
- Pedir un cambio vuelve a publicar la página entera en la misma dirección. El cliente conserva el mismo enlace.
- Una página publicada por primera vez puede responder "not found" durante un rato antes de abrirse.
- Abrir la página sin sesión muestra el inicio de sesión de Skills Workflow y, después, vuelve a la página.

## Artículos relacionados

- [Una Dirección para Todo lo que Abre un Cliente](/docs/ai/connector/ai-connector-client-hub)
- [Construir un Informe a Partir de tus Datos](/docs/ai/connector/ai-connector-reports)
- [Portales de Cliente](/docs/ai/ai-portals)
- [Conectar Claude, Codex o GitHub Copilot a Skills Workflow](/docs/ai/connector/ai-connector-setup)
