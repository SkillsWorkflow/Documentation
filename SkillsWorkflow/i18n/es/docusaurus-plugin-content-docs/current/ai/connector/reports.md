---
id: ai-connector-reports
title: Construir un Informe a Partir de tus Datos
description: "Pide a tu herramienta de IA un informe con tablas y gráficos construido sobre tus queries de extracción de datos de Skills Workflow, publicado en una dirección que calcula las cifras cuando se abre."
sidebar_label: Un Informe a Partir de tus Datos
sidebar_position: 5
---

Pide a tu herramienta de IA un informe que, si no, montarías en una hoja de cálculo. Lo construye sobre tus queries de extracción de datos, las mismas que hay detrás de tus informes de Skills Workflow, y lo publica con tablas y gráficos. Las cifras se calculan cuando alguien abre el informe.

![img-box-shadow](/img/ai/connector/campaign-report.png)
<figcaption>Un informe de campaña publicado con el conector en un tenant de demostración: entregables por etapa, entregables por semana de entrega y los entregables abiertos, todo a partir de la query DE-Jobs.</figcaption>

## Disponibilidad

Disponible. Necesitas el [conector de Skills Workflow en tu herramienta de IA](/docs/ai/connector/ai-connector-setup). El informe lee las queries de extracción de datos publicadas en tu tenant; la lista está en [Data Extraction API](/docs/build-and-extend/api/data-extraction-api). Una pregunta que ninguna query responde necesita primero la query.

## Cómo pedirlo

1. Di para quién es el informe, la pregunta que responde y el periodo.
2. Indica las cifras. La herramienta de IA elige la query y las columnas; comprueba cuáles.
3. Pide solo las columnas que muestra el informe. Una persona que tiene permitido ejecutar una query recibe todas las columnas que pide el informe, costes y tarifas incluidos, aunque la página no las dibuje.
4. Abre el informe como alguien que no tiene permitido ejecutar la query. El informe debe decirle que no tiene acceso, no mostrar una tabla vacía.

## Reglas y comportamiento

- Las queries son de solo lectura. Un informe nunca cambia datos.
- Cada query comprueba sus roles. A una persona sin ellos se le deniegan los datos del informe, igual que en Skills Workflow.
- Los gráficos se dibujan dentro de la página. Un informe no puede cargar librerías de gráficos ni nada más desde otro sitio.
- El informe muestra los datos tal como están cuando se abre. Un informe para imprimir o enviar, con las cifras de un momento dado, está planeado: consulta [Imprimir o Enviar un Informe tal como Está Hoy](/docs/ai/connector/ai-connector-printable-reports).

## Artículos relacionados

- [Data Extraction API](/docs/build-and-extend/api/data-extraction-api)
- [Compartir una Página de Estado en Tiempo Real con un Cliente](/docs/ai/connector/ai-connector-client-status-page)
- [Portales de Cliente](/docs/ai/ai-portals)
