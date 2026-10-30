---
id: ai-connector-client-hub
title: Una Dirección para Todo lo que Abre un Cliente
description: "Pide a tu herramienta de IA la página de inicio de un cliente: una dirección que enlaza a cada página de estado e informe que publicas para él, con una cifra en tiempo real junto a cada enlace."
sidebar_label: Una Dirección por Cliente
sidebar_position: 4
---

Da a cada cliente una única dirección para guardar en favoritos. Tu herramienta de IA construye una página de inicio para el cliente que enlaza a las páginas que publicaste para él, con una cifra en tiempo real junto a cada enlace.

![img-box-shadow](/img/ai/connector/client-home-page.png)
<figcaption>La página de inicio del cliente ficticio Northwind Coffee en un tenant de demostración, con enlaces a su página de estado y a su informe, las aprobaciones pendientes y los entregables terminados.</figcaption>

## Disponibilidad

Disponible. Necesitas el [conector de Skills Workflow en tu herramienta de IA](/docs/ai/connector/ai-connector-setup) y al menos una página ya publicada para el cliente.

## Cómo pedirla

1. Pide una página de inicio para el cliente e indica las páginas a las que enlaza. La herramienta de IA vuelve a leer una página publicada cuando le das los nombres del cliente y de la página.
2. Di qué cifra muestra cada enlace.
3. Deja que la herramienta de IA la publique en la dirección principal del cliente, por ejemplo `/portal/{client}/home/`.

## Reglas y comportamiento

- Un enlace abre la otra página en su propia dirección. Cada página aplica por su cuenta los permisos de quien la ve.
- La página de inicio no encuentra páginas nuevas por sí sola. Pide a tu herramienta de IA que añada cada una.

## Artículos relacionados

- [Compartir una Página de Estado en Tiempo Real con un Cliente](/docs/ai/connector/ai-connector-client-status-page)
- [Construir un Informe a Partir de tus Datos](/docs/ai/connector/ai-connector-reports)
- [Portales de Cliente](/docs/ai/ai-portals)
