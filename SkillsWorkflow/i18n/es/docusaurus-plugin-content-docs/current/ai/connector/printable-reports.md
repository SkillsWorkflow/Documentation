---
id: ai-connector-printable-reports
title: Imprimir o Enviar un Informe tal como Está Hoy
description: "Un informe maquetado para A4 que publica tu herramienta de IA: ábrelo, imprímelo o guárdalo como PDF, y envía una copia fechada de las cifras a alguien fuera de Skills Workflow. En versión preliminar."
sidebar_label: Un Informe para Imprimir o Enviar
sidebar_position: 7
---

:::preview
Esto todavía no está disponible. El ejemplo de abajo se construyó con el conector en un tenant de demostración para mostrar cómo se prevé que funcione, y la funcionalidad final puede ser distinta.
:::

Algunos informes están hechos para salir de Skills Workflow: el informe de estado mensual adjunto a un email para el cliente, el resumen de fin de campaña para su equipo de compras, las cifras para una reunión del consejo. Pide a tu herramienta de IA un informe maquetado para papel. Ábrelo el día que lo necesites, selecciona **Print or save as PDF** y envía la copia. La copia conserva las cifras y la fecha de ese momento.

![img-box-shadow](/img/ai/connector/monthly-report-screen.png)
<figcaption>El informe de estado mensual del cliente ficticio Northwind Coffee en un tenant de demostración, tal como se abre en el navegador, con su botón de impresión.</figcaption>

![img-box-shadow](/img/ai/connector/monthly-report-print.png)
<figcaption>El mismo informe tal como se imprime: una página A4 con la fecha y la hora de las cifras arriba y en el pie de página, y sin botón.</figcaption>

## Comportamiento previsto

- El informe se publica en su propia dirección y lee datos en tiempo real cada vez que se abre.
- Está maquetado para A4. En papel y en el PDF, los botones desaparecen y la fecha y la hora de las cifras aparecen en la página.
- El PDF se guarda desde el propio diálogo de impresión del navegador. Sale de Skills Workflow contigo, y la persona a la que se lo envías no necesita un usuario de Skills Workflow.
- En el ejemplo, el informe lee la query `DE-Jobs` para un cliente y un proyecto, y agrupa los entregables en pendientes de aprobación, en curso y entregados.

Guardar una copia fechada del informe dentro de Skills Workflow no forma parte de este ejemplo.

## Reglas y comportamiento

- El informe en pantalla siempre muestra las cifras de hoy. Solo la copia impresa o guardada queda fija.
- Los permisos dejan de aplicarse a un PDF una vez enviado. Comprueba lo que muestra antes de que salga de la agencia.

## Artículos relacionados

- [Construir un Informe a Partir de tus Datos](/docs/ai/connector/ai-connector-reports)
- [Compartir una Página de Estado en Tiempo Real con un Cliente](/docs/ai/connector/ai-connector-client-status-page)
- [Skills Workflow en tu Herramienta de IA](/docs/ai/connector)
