---
id: ai-assistant
title: Asistente de IA
description: "El panel del Asistente de IA: cómo abrirlo, elegir un agente, darle contexto, adjuntar archivos, aprobar lo que hace y gestionar el historial de conversaciones y las memorias."
sidebar_label: Asistente de IA
sidebar_position: 2
---

El Asistente de IA es un panel de chat que se sitúa junto a aquello en lo que estás trabajando. Escribes lo que quieres en lenguaje sencillo, el asistente lee la pantalla en la que estás, y responde o hace el trabajo. No abre una pantalla aparte y no pierde tu sitio.

Dentro del panel eliges un **agente**. Cada agente está pensado para un tipo de trabajo y tiene sus propias herramientas. Consulta [Agentes](/docs/ai/agents) para saber cuál elegir.

<figure>

![img](/img/ai/ai-assistant-panel.png)
<figcaption>El panel del Asistente de IA</figcaption>
</figure>

## Disponibilidad

El asistente está en **Preview**. El panel muestra una insignia `Preview`, y merece la pena repetir las palabras del propio producto: *this feature is still under development, so its behaviour may change — review AI results before using them.*

Cuatro ajustes en **Maintenance > Configuration > System > Artificial Intelligence (AI)** controlan lo que ven tus usuarios:

| Ajuste | Qué hace |
|---|---|
| Enable AI | Interruptor principal para todas las funciones de IA. Cuando está desactivado, todas las funciones de IA quedan ocultas y no se realiza ninguna llamada de IA. |
| Enable chat | Muestra el panel del Asistente de IA y activa la edición de IA en contexto sin salir de la pantalla. |
| Enable AI Actions | Muestra el botón AI Actions en los editores de texto enriquecido. Consulta [Acciones de IA](/docs/ai/ai-actions). |
| Enable flow logging | Añade **Download Flow Log** al menú del panel. Actívalo solo mientras estés diagnosticando un problema. |

`Enable AI` debe estar activado para que cualquiera de los demás surta efecto.

El panel también permanece oculto mientras la plataforma está en modo de configuración.

## Abrir el asistente

Pulsa el botón flotante del asistente, en la esquina inferior derecha. Se puede arrastrar, así que muévelo si tapa algo. El panel se abre a la derecha, y el botón desaparece mientras está abierto. Si colapsas el panel, queda una franja estrecha en la que puedes pulsar para recuperarlo.

<figure>

![img-box-shadow](/img/ai/ai-assistant-panel-button.png)
<figcaption>El botón flotante del asistente</figcaption>
</figure>

## Elegir un agente

El agente y el contexto comparten un mismo control, el icono de controles deslizantes junto al cuadro de mensaje: **Agent and context**. Ábrelo y la sección **Agent** nombra el agente en uso. Pulsa ese nombre para ver la lista completa con la descripción de cada agente, y elige otro.

No hay nada seleccionado por defecto. Sin una selección, el panel se niega a enviar: *Select an agent before sending a message.*

Cada agente aporta sus propias sugerencias de prompts a la conversación vacía. Al pulsar una se rellena el cuadro de mensaje.

Si abres un editor de texto enriquecido mientras el asistente está con un agente distinto, recibes una propuesta en lugar de un cambio automático, que indica qué estás editando y qué agente le viene mejor. **Switch** cambia de agente, **Stay** mantiene el que tenías, y esa elección se recuerda durante el resto de la sesión. En una conversación en la que aún no has escrito nada, el panel cambia por sí solo y deshace el cambio si te alejas.

## Darle contexto

El asistente no lee toda tu cuenta. Lee solo lo que le permitas, y la sección **Context for this message** del mismo control muestra cada elemento, agrupado, con el motivo por el que está ahí.

<figure>

![img-box-shadow](/img/ai/ai-chat-context-bar.png)
<figcaption>Agente y contexto, encima del cuadro de mensaje</figcaption>
</figure>

Cada fila aparece solo cuando hay algo que enviar:

| Grupo | Fila | Envía |
|---|---|---|
| Página actual | El nombre del documento | El documento abierto detrás del panel |
| Página actual | El nombre del editor, con un recuento de caracteres | El texto que estás editando ahora mismo |
| Orientación del Job | Instrucciones del brief | La orientación aplicable a esta respuesta. **Remove** la descarta |
| Más contexto | El nombre del workspace | Su diseño, filtros y selección |
| Más contexto | Memorias guardadas, con un recuento | Lo que el asistente ha aprendido sobre ti |

El interruptor de una fila mantiene ese elemento fuera de la solicitud. El de **Saved memories** no es una anulación por mensaje: escribe el mismo ajuste **Memory on** que muestra la pantalla de memorias. **Manage** abre esa pantalla. Consulta [Memorias de IA](/docs/ai/ai-memories).

## Adjuntar archivos

Suelta un archivo sobre el cuadro de mensaje, o usa **Attach file**. Cada archivo se convierte en un chip encima del cuadro: las imágenes muestran una vista previa, el resto muestra el icono de su tipo, y bajo el nombre aparece el tamaño, *Uploading…*, o el motivo por el que se rechazó el archivo. Elimina uno con la `×` de su chip.

Lo que ocurre a continuación depende del archivo, y el panel te dice cuál: *Images are analysed by the assistant. Other files are attached to the record.* Una imagen se lee y se describe. Cualquier otro archivo queda listo para adjuntarse a un brief o publicarse en un feed cuando lo pidas, y se traslada al job o deliverable que esa misma conversación crea.

Los adjuntos permanecen con la conversación. Un agente al que le pidas escribir un brief puede seguir accediendo al archivo que adjuntaste dos mensajes antes.

No se pueden adjuntar:

- Archivos que superen el límite de subida de tu tenant, `FileSystemMaxSizeForUpload (MB)` en **Maintenance > Configuration > System > FileSystem**. Si no está definido, el límite es de 10 MB.
- Archivos de email, `.msg` y `.eml`.
- Archivos comprimidos.
- Programas y scripts, como `.exe`, `.bat`, `.ps1`, `.sh` y `.jar`.

Una extensión que nadie reconozca se sigue permitiendo. Un `.psd` o un `.indd` se adjunta a un registro sin ningún problema.

<figure>

![img-box-shadow](/img/ai/ai-chat-attachment-chips.png)
<figcaption>Chips de adjuntos encima del cuadro de mensaje</figcaption>
</figure>

## Aprobar lo que hace

Nada se escribe en tu nombre sin un paso que des tú. Hay dos mecanismos, y cuál veas depende del agente.

El [Agente de Documentos](/docs/ai/agents/document-agent) muestra una tarjeta **Approval required** que nombra la acción y enumera los argumentos que va a usar: el job que va a crear, la stage a la que va a mover un documento, las personas que va a añadir a una team.

Tienes tres respuestas posibles:

- **Approve** ejecuta la acción. La tarjeta pasa a mostrar *Running*, y después *Approved*.
- **Deny** no cambia nada. El asistente lo reconoce y te ofrece cosas concretas que quizá quieras cambiar, como *Change project* o *Change the name*.
- **Make changes** te permite editar un argumento directamente en la tarjeta antes de aprobar.

Algunos campos de la tarjeta se pueden editar en el sitio. Un valor en gris es un marcador de posición que muestra lo que la plataforma rellenará si no escribes nada.

Ignorar la tarjeta es seguro. La acción no se ejecuta, y no se pierde nada si escribes otra cosa en su lugar.

El [Agente de Workflows](/docs/ai/agents/workflow-agent) y el [Agente de Workspaces](/docs/ai/agents/workspace-agent) usan el otro mecanismo: construyen una **propuesta**, te muestran lo que cambia, y esperan a que la apliques. Una propuesta que no hayas aplicado se puede revertir.

Qué acciones generan una tarjeta de aprobación se define por agente, así que un agente que construya tu agencia puede condicionar tanto o tan poco como decidas. Consulta [Herramientas](/docs/ai/ai-tools).

## Responder a una pregunta

Cuando a una solicitud le falta algo que el asistente no puede adivinar, como qué client o qué job type, te lo pregunta con un selector. Las listas largas vuelven parcialmente, con *Showing the first results — refine your search to narrow them down.* Escribe en el cuadro de búsqueda del selector para acotarlas.

## Seguir lo que está haciendo

Mientras el asistente trabaja, el mensaje que está escribiendo muestra la ejecución encima, paso a paso. Cada paso nombra lo que está pasando con tus propias palabras, y no con las de la herramienta — *Searching for clients…*, *Loading job type template…*, *Creating job…* — y un contador indica cuántos pasos tuvo la ejecución. Abre un paso para ver los argumentos con los que se llamó y lo que devolvió.

Úsalo cuando una respuesta te sorprenda. Un brief escrito a partir de la plantilla equivocada normalmente aparece aquí como la carga de la plantilla equivocada.

## Leer una respuesta a partir de tus datos

Cuando un agente responde a partir de una de tus queries de extracción de datos, las filas no se dejan como una tabla dentro de un párrafo. El panel renderiza el resultado.

<figure>

![img-box-shadow](/img/ai/ai-chat-analytics-result.png)
<figcaption>Una consulta de datos respondida en el panel</figcaption>
</figure>

- Las filas que son documentos vuelven como una lista, agrupada por urgencia: **Overdue**, **Due today**, **Tomorrow**, **This week**, **Later**, **No date**. Los recuentos de la parte superior te dan los totales, y pulsar una fila abre el documento.
- Las filas que describen un desglose vuelven como un gráfico con una vista de tabla al lado. Un resultado que sea a la vez una lista y un desglose se muestra de las dos formas.
- Los resultados largos se recortan con un control **Show all** y un recuento de filas.
- Haz dos preguntas en un mismo mensaje y el panel muestra la última respuesta, diciendo *2 queries ran — showing the last*.

Una query que no se pueda ejecutar lo indica: *The data query could not be run*, o *The assistant wrote a query this data does not support*.

Qué queries puede alcanzar un agente se define por agente. Consulta [Herramientas](/docs/ai/ai-tools#your-data).

## Historial de conversaciones

Las conversaciones se guardan por usuario. Abre **Chat History** desde el menú del panel para reabrir una, y elimina conversaciones ahí, una a una o varias a la vez. Eliminar una conversación no se puede deshacer.

**New Chat** (el `+` en la cabecera del panel) inicia una conversación nueva y mantiene la actual en el historial. **Reset Chat** limpia la conversación en pantalla.

## Memorias

El asistente conserva lo que ha aprendido sobre ti entre conversaciones: un client con el que trabajas constantemente, el idioma en el que escribes, un job type que eliges siempre. También cuenta el client, el project y el job type para los que creas documentos, y te los propone la próxima vez.

Abre **Manage Memories** desde el menú del panel para revisarlo todo, desactivar una memoria, escribir una tú mismo, o desactivar la memoria por completo. Un valor recordado es una sugerencia: el asistente nunca llega a una tarjeta de aprobación con uno que no hayas confirmado. [Memorias de IA](/docs/ai/ai-memories) cubre la pantalla, los dos modos de guardado y los límites.

## Reglas y comportamiento

- El asistente actúa **como tú**. Solo puede leer y escribir lo que permiten tus propios permisos, y una solicitud de algo que no puedes ver vuelve vacía en lugar de con permisos elevados.
- El historial de conversaciones se guarda por usuario y por tenant. Dos usuarios nunca comparten una conversación, y las conversaciones de un mismo usuario no viajan entre tenants.
- Una conversación muy larga se compacta automáticamente en lugar de fallar, y el detalle más antiguo es el primero en desaparecer. Empieza un **New Chat** cuando cambies de tema.
- El servicio del modelo no almacena la conversación. Cada solicitud se responde y se descarta ahí; la transcripción que ves la guarda Skills Workflow, asociada a tu usuario.
- Las respuestas se generan. Revisa cualquier cosa antes de enviársela a un client o de actuar en consecuencia.

## Artículos relacionados

- [Agentes](/docs/ai/agents)
- [Memorias de IA](/docs/ai/ai-memories)
- [Herramientas](/docs/ai/ai-tools)
- [Acciones de IA](/docs/ai/ai-actions)
- [Añadir tus propias skills, agents y tools](/docs/ai/ai-extend)
