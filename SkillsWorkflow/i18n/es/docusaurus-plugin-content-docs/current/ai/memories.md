---
id: ai-memories
title: Memorias de IA
description: "Lo que el Asistente de IA recuerda sobre ti, la pantalla donde revisas y cambias esas memorias, los dos modos de guardado y los límites del almacén."
sidebar_label: Memorias de IA
sidebar_position: 3
---

El Asistente de IA lleva lo que ha aprendido sobre ti de una conversación a la siguiente: una preferencia que indicaste, una regla que sigue tu equipo, el client al que pertenece la mayor parte de tu trabajo. Usa esa información para rellenar solicitudes posteriores, en lugar de hacerte la misma pregunta cada vez.

Las memorias son tuyas. Se guardan en tu usuario, dentro de tu tenant, y nadie más en tu equipo puede leerlas.

Abre **Manage Memories** en el menú del panel. La pantalla tiene tres pestañas.

## Saved

Los hechos, preferencias y reglas que guarda el asistente, del más reciente al más antiguo. Una línea encima de la lista los cuenta frente a las 100 que permite el almacén. Usa el cuadro de búsqueda para encontrar una en una lista larga.

<figure>

![img-box-shadow](/img/ai/ai-memories-saved-tab.png)
<figcaption>Manage Memories, pestaña Saved</figcaption>
</figure>

Cada fila muestra las insignias que le correspondan: **Pinned**, **Written by you**, **Observed**, y **Off** para una que hayas desactivado. Debajo aparece *Aprendida el* y la fecha.

Cada fila tiene cuatro controles:

- El interruptor desactiva la memoria. La fila permanece donde está, conserva su procedencia y deja de enviarse al asistente.
- **Pin memory** la protege. Una memoria fijada nunca caduca y nunca se elimina automáticamente.
- **Edit memory** la abre para reescribirla.
- **Delete memory** la elimina definitivamente.

**Add** te permite escribir una memoria. Escribe lo que el asistente debe saber, elige un **Tipo** de Preferencia, Regla o Hecho, y fíjala si quieres que quede protegida. Una memoria que escribas o edites se trata como confirmada: nunca caduca y nunca se elimina para hacer sitio a una más reciente.

## What you usually do

Cada documento que creas a través del asistente cuenta para el client, el project, el department, el job type y el document type utilizados. Esta pestaña es el registro de eso, agrupado por campo, y muestra, para cada entidad, cuántas creaciones se le atribuyen y cuándo la usaste por última vez.

<figure>

![img-box-shadow](/img/ai/ai-memories-patterns-tab.png)
<figcaption>Manage Memories, What you usually do</figcaption>
</figure>

**Use always** convierte una entidad en tu valor asumido para ese campo. Su fila queda con la insignia **Always**, encabeza su grupo y se propone antes de cualquier otra que simplemente hayas usado más veces. **Stop using always** revierte esto y conserva el recuento acumulado.

**Forget** elimina la entrada. El recuento desaparece con ella y la entidad deja de proponerse.

Una creación se cuenta una sola vez. Reabrir una conversación o que el asistente repita lo que ya hizo no añade nada.

## Settings

<figure>

![img-box-shadow](/img/ai/ai-memories-settings-tab.png)
<figcaption>Manage Memories, pestaña Settings</figcaption>
</figure>

| Ajuste | Qué hace |
|---|---|
| Memory on | Interruptor principal. Con la memoria desactivada, nada de lo guardado llega al asistente, y no se guarda nada nuevo. No se elimina nada. |
| Save automatically and tell me | El asistente guarda lo que aprende sobre la marcha, y nunca oculta que está memorizando. Esta es la opción predeterminada. Todo lo que has guardado está en la pestaña **Saved**, donde puedes desactivarlo o eliminarlo. |
| Ask before saving | No se guarda nada hasta que aceptas ese punto concreto en la conversación. |
| Use what I usually do to suggest values | Permite que las entidades contadas arriba propongan el client, el project y el job type mientras creas un documento. Aun así, confirmas cada una. |

**Clear All** vacía tanto la lista de memorias guardadas como los recuentos. Tus ajustes se quedan como están.

Con la memoria desactivada, aún puedes editar y eliminar lo que está guardado. Desactivarla nunca deja **Clear All** como la única forma de cambiar el almacén.

## Cómo usa el asistente una memoria

Un valor recordado es una sugerencia, nunca una decisión que hayas tomado. Cuando el asistente rellena un campo a partir de una memoria, el campo sigue abierto: el valor recordado aparece en la parte superior de la lista de opciones, y la solicitud no llega a la tarjeta de aprobación hasta que la eliges.

Las memorias guardan nombres, no ID de registro. El asistente busca el nombre en los datos reales antes de usarlo.

Un project o job type recordado solo se ofrece una vez que el client o department está definido. Hasta entonces, obtienes la lista completa, delimitada correctamente.

## Reglas y comportamiento

- La lista de memorias guardadas tiene, como máximo, 100 entradas. Las memorias fijadas y las que escribiste personalmente nunca se eliminan para hacer sitio; cuando solo esas ya llenan la lista, el asistente te dice que no ha podido guardar una nueva.
- Se cuentan hasta 25 entidades por campo.
- Algo que el asistente ha inferido, en lugar de que se lo hayas dicho, caduca a los 90 días. Fijarlo, editarlo o confirmarlo lo mantiene. Las entidades contadas nunca caducan; usar una de nuevo la actualiza.
- Las memorias son por usuario y por tenant. Dos personas nunca comparten una, y las memorias de la misma persona no viajan entre tenants.
- Todos los agents respetan tus memorias, incluidos los que crea tu agencia. Añadir al almacén es una tool: solo los agents con ese permiso pueden escribir. Consulta [Herramientas](/docs/ai/ai-tools#memory).
- Desactivar la memoria deja todo en su sitio. Vuelve a activarla y el asistente retoma donde estaba.

## Artículos relacionados

- [Asistente de IA](/docs/ai/ai-assistant)
- [Agentes](/docs/ai/agents)
- [Herramientas](/docs/ai/ai-tools)
