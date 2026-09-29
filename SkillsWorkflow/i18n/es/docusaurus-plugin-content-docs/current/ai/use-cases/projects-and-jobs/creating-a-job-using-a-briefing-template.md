---
id: creating-a-job-using-a-briefing-template
title: Crear un Job Usando una Plantilla de Briefing
description: "Crea un Job a partir de una descripción, con su briefing redactado según la plantilla de briefing configurada en el Job Type."
sidebar_label: Crear un Job Usando una Plantilla de Briefing
sidebar_position: 1
---

## Visión general

Crea un nuevo Job a partir de una descripción — cliente, Job Type, título y el propio contenido del briefing — con el briefing redactado siguiendo la estructura definida por la plantilla de briefing del Job Type, en lugar de un formulario en blanco.

## Prompt de ejemplo

```
Crea un nuevo job
Job Type: Website
Job Title: GM 2026 EV Campaign – Global Website

Design and develop a global campaign website for General Motors to support the 2026 electric vehicle campaign. The website should introduce the campaign, showcase GM's electric vehicle portfolio, communicate the key campaign message, and provide users with relevant information and calls to action.

Usa la plantilla de briefing configurada para el Job Type Website para generar el briefing del job.
```

## Resultado esperado

- Se crea un nuevo Job en el cliente y proyecto correctos.
- El Job Type se identifica correctamente incluso cuando se menciona de forma ligeramente distinta a como está configurado (por ejemplo, "Website" correspondiendo al Job Type real, "Web Design").
- El briefing sigue la estructura definida en la plantilla de briefing del Job Type, y no un único párrafo.
- Todo lo que no se pueda inferir — como el tipo de objeto de negocio o el departamento — se pregunta, con opciones sugeridas para elegir, para facilitar la respuesta.
- Todo lo generado se propone primero como borrador — incluyendo el briefing — y siempre puede revisarse y modificarse antes de confirmarse.
