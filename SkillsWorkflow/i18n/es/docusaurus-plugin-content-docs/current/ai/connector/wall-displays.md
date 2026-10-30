---
id: ai-connector-wall-displays
title: Poner las Cifras de tu Agencia en una Pantalla
description: "Un tablero que tu herramienta de IA publica para una TV del estudio: lo que vence en las próximas dos semanas, lo que está pendiente del cliente y lo que va con retraso, en letra grande y actualizándose solo. En versión preliminar."
sidebar_label: Cifras en una Pantalla del Estudio
sidebar_position: 9
---

:::preview
Esto todavía no está disponible. El ejemplo de abajo se construyó con el conector en un tenant de demostración para mostrar cómo se prevé que funcione, y la funcionalidad final puede ser distinta.
:::

Pon en la pantalla del estudio lo que el equipo debe ver de un vistazo: lo que vence pronto, lo que está pendiente del cliente y lo que ya va con retraso. Pide a tu herramienta de IA un tablero hecho para una TV, legible desde el otro lado de la sala, que se mantenga actualizado solo.

![img-box-shadow](/img/ai/connector/studio-board.png)
<figcaption>El tablero del estudio de la campaña de Navidad del cliente ficticio Northwind Coffee en un tenant de demostración, a 1920 × 1080: lo que vence en los próximos 14 días, lo pendiente del cliente y lo que va con retraso.</figcaption>

## Comportamiento previsto

- El tablero ocupa una pantalla de 1920 × 1080, con unas pocas cifras en letra grande y hasta cinco entregables debajo de cada una.
- Vuelve a leer los datos cada 5 minutos y muestra la hora de la última actualización. El reloj de la esquina muestra que la pantalla sigue activa.
- En el ejemplo, el tablero lee la query `DE-Jobs` para los entregables abiertos de un cliente. Los entregables con retraso aparecen solo en la columna Late.

## Reglas y comportamiento

- El ordenador conectado a la pantalla necesita un usuario de Skills Workflow con la sesión iniciada, y el tablero muestra lo que ese usuario puede ver. Usa un usuario que no pueda ver costes ni salarios.
- Cuando termina la sesión, la pantalla muestra el inicio de sesión de Skills Workflow hasta que alguien vuelva a iniciar sesión.

## Artículos relacionados

- [Construir un Informe a Partir de tus Datos](/docs/ai/connector/ai-connector-reports)
- [Añadir una Pantalla a Skills Workflow](/docs/ai/connector/ai-connector-team-screens)
- [Skills Workflow en tu Herramienta de IA](/docs/ai/connector)
