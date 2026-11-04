---
id: ai-connector-forms
title: Recoger Solicitudes con un Formulario
description: "Un formulario que tu herramienta de IA publica para el equipo de un cliente: cada solicitud se convierte en un job en el proyecto correcto, en su primera etapa, con los detalles en el feed del job. En versión preliminar."
sidebar_label: Un Formulario que Crea Trabajo
sidebar_position: 8
---

:::preview
Esto todavía no está disponible. El ejemplo de abajo se construyó con el conector en un tenant de demostración para mostrar cómo se prevé que funcione, y la funcionalidad final puede ser distinta.
:::

Sustituye los emails de solicitud por un formulario. El equipo de marketing del cliente dice lo que necesita, los detalles y la fecha, y la solicitud llega a Skills Workflow como un job en el proyecto de la campaña, listo para que tráfico lo recoja.

![img-box-shadow](/img/ai/connector/request-form.png)
<figcaption>El formulario de solicitud del cliente ficticio Northwind Coffee en un tenant de demostración, rellenado por su equipo de marketing.</figcaption>

![img-box-shadow](/img/ai/connector/request-form-sent.png)
<figcaption>Tras el envío, el formulario muestra el número del job que creó, su etapa y un enlace a la página de estado de la campaña.</figcaption>

![img-box-shadow](/img/ai/connector/request-form-job.jpg)
<figcaption>El job que creó el formulario, en Skills Workflow: en el proyecto de la campaña, en To Do, con la fecha solicitada y los detalles de la solicitud en su feed.</figcaption>

## Comportamiento previsto

- Cada solicitud crea un job en el proyecto al que pertenece el formulario. El departamento y el tipo de job son los que eligió la agencia al construir el formulario.
- El nombre, la fecha y la prioridad vienen del formulario. Los detalles se publican en el feed del job.
- El job sale de Draft hacia la primera etapa de su workflow, igual que cuando se crea en Skills Workflow.
- La persona que envía el formulario ve el número del job y puede seguirlo en la página de estado del cliente.

## Reglas y comportamiento

- Quien rellena el formulario inicia sesión en Skills Workflow. El job se crea como esa persona, con sus permisos, y una persona que no puede crear jobs en el proyecto recibe un mensaje que lo indica.
- Un formulario para personas sin usuario de Skills Workflow no forma parte de este ejemplo.

## Artículos relacionados

- [Compartir una Página de Estado en Tiempo Real con un Cliente](/docs/ai/connector/ai-connector-client-status-page)
- [Una Dirección para Todo lo que Abre un Cliente](/docs/ai/connector/ai-connector-client-hub)
- [Skills Workflow en tu Herramienta de IA](/docs/ai/connector)
