---
id: ai-actions
title: Acciones de IA
description: "Las Acciones de IA ponen asistencia de texto en la barra de herramientas de todos los editores de texto enriquecido. Este artículo cubre cómo usarlas y cómo configurar la lista que ve tu agencia."
sidebar_label: Acciones de IA
sidebar_position: 3
---

Las Acciones de IA son el botón de IA en la barra de herramientas de un editor de texto enriquecido. En lugar de abrir el panel de chat, eliges una acción en la barra de herramientas y el texto del editor se reescribe en el sitio.

Las acciones de ese menú no son fijas. **Las define tu agencia.** Un tenant nuevo tiene la lista vacía y no muestra ningún menú hasta que alguien la configura — que es también lo que te permite ofrecer acciones redactadas para vuestro trabajo, en vez de acciones genéricas.

## Disponibilidad

Ambos ajustes están en **Maintenance > Configuration > System > Artificial Intelligence (AI)**:

| Ajuste | Qué hace |
|---|---|
| Enable AI | Interruptor principal de todas las funcionalidades de IA |
| Enable AI Actions | Muestra el botón de Acciones de IA en los editores de texto enriquecido |

<figure>

![img](/img/ai/ai-actions.png)
<figcaption>El grupo de ajustes Artificial Intelligence (AI), donde se activan las Acciones de IA</figcaption>
</figure>

Con ambos activos, el botón aparece en:

- **Briefs y descripciones de documentos** — el brief de un Job, Deliverable, Estimate, Contract, Request o cualquier otro tipo de documento.
- **Publicaciones del feed** — el editor donde redactas una publicación.

<figure>

![img](/img/ai/ai-actions-toolbar-button.png)
<figcaption>El botón de Acciones de IA en la barra de herramientas del editor, con su menú abierto</figcaption>
</figure>

## Cómo usarlas

1. Escribe algo, o abre un documento que ya tenga brief. Una acción con el editor vacío responde *Add content to the editor before running this action.*
2. Pulsa el botón de Acciones de IA en la barra de herramientas.
3. Elige una acción, o usa **Ask AI** y escribe con tus palabras el cambio que quieres.
4. El editor queda en solo lectura mientras trabaja.
5. El resultado sustituye lo que había. Un aviso dice *Text replaced. Click to undo.*

`Ctrl+Z` / `⌘+Z` también devuelve el original, y las acciones se pueden encadenar — reescribir, luego acortar, luego ajustar el tono.

Algunas acciones abren el panel del [Asistente de IA](/docs/ai/ai-assistant) en vez de aplicar el cambio de inmediato, para que puedas iterar sobre el resultado y elegir dónde insertarlo. Cuál de las dos cosas hace una acción forma parte de su configuración.

## Trabajar a partir de una plantilla de briefing

Una acción puede recibir también la **plantilla de briefing** del job type, además del texto del editor. Eso es lo que convierte unas notas sueltas en un brief estructurado: la acción lee lo que has escrito, lee la plantilla configurada en el job type del documento, y rellena las secciones de la plantilla con tus notas.

<figure>

![img](/img/university/ai/writing-tools-description-template.png)
<figcaption>Una description template, en Maintenance &gt; Configuration &gt; Description Templates. Una acción rellena estas secciones con lo que escribiste.</figcaption>
</figure>

Esto solo funciona cuando el job type tiene una plantilla de briefing configurada. Sin ella, la acción escribe únicamente a partir de tu texto.

## Configuración

La lista es la rejilla **AI Actions** en **Maintenance > Configuration > System > Artificial Intelligence (AI)**. Cada fila es una entrada del menú de la barra de herramientas.

| Columna | Qué hace |
|---|---|
| ID | Identifica la acción |
| Label Key | La clave de traducción usada como etiqueta del menú. Usa una clave existente para que la etiqueta aparezca traducida en todos los idiomas en los que trabajan tus usuarios |
| System Prompt | La instrucción que define cómo se comporta la acción |
| User Prompt Template | Lo que se envía en esta acción. `{{content}}` es el texto del editor; `{{template}}` es la plantilla de briefing del job type |
| Order | Posición en el menú, de menor a mayor |
| Entities | Restringe la acción a ciertos tipos de documento. Déjalo vacío para mostrarla en todas partes |
| Custom Prompt | Convierte esta en la acción que pregunta al usuario qué hacer, en vez de actuar por su cuenta |
| Execution Mode | `popup` aplica el resultado en el sitio; `panel` continúa en el Asistente de IA |
| Auto Send | Se ejecuta de inmediato, sin esperar la confirmación del usuario |
| Server Tools | Herramientas que la acción puede usar. Ver [Herramientas](/docs/ai/ai-tools) |
| Content Labels | Restringe la acción a un editor concreto |

Las acciones se ejecutan sobre el [Agente de Escritura](/docs/ai/agents/writing-agent), salvo que la fila indique otro agente, que es la forma de apuntar una acción a un agente vuestro. Ver [Añadir tus propias skills, agents y tools](/docs/ai/ai-extend).

Las claves de traducción ya disponibles para acciones habituales incluyen `Rewrite`, `MakeFriendly`, `MakeProfessional`, `MakeConcise`, `Summarize`, `FixGrammar`, `Compose`, `FillBriefTemplate` y `GenerateFromTemplate`. Referenciar una de ellas en **Label Key** te da una etiqueta traducida sin añadir ninguna traducción.

## Reglas y comportamiento

- El resultado **sustituye** el contenido del editor. No se fusiona nada.
- Las acciones responden en el idioma del texto que les diste.
- Una acción que falla dice *Unable to generate text right now. Please try again.* y deja tu texto intacto.
- Nada se guarda hasta que guardas el documento, así que un resultado no deseado no cuesta nada.

## Artículos relacionados

- [Agente de Escritura](/docs/ai/agents/writing-agent)
- [Asistente de IA](/docs/ai/ai-assistant)
- [Herramientas](/docs/ai/ai-tools)
- [Añadir tus propias skills, agents y tools](/docs/ai/ai-extend)
