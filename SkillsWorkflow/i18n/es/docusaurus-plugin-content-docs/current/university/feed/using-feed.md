---
id: using-feed
title: Uso del Feed
description: "Use el Feed para consultar el contexto del documento, colaborar con el equipo y controlar lo que pueden ver los usuarios cliente."
sidebar_label: Uso del Feed
sidebar_position: 1
---

El Feed es el área de colaboración de un documento. Reúne en un único lugar el contexto del documento, los mensajes, la actividad del workflow, los archivos, las notificaciones y las conversaciones.

## Consultar el contexto del documento

<figure>

![img-box-shadow-feed](/img/university/feed/feed-document-context.png)
<figcaption>Contexto del documento en el Feed.</figcaption>

</figure>

En la parte superior del Feed puede consultar la descripción del documento y su información de apoyo antes de revisar la actividad que aparece debajo. Según el tipo y la configuración del documento, esta área también puede mostrar otros campos descriptivos y archivos adjuntos al documento.

Use esta información para comprender la solicitud o el brief antes de crear una publicación. El contexto del documento está separado de la cronología del Feed: actualice la descripción cuando cambie la información principal del documento y use las publicaciones para registrar la colaboración y las decisiones.

## Añadir una publicación o una acción de workflow

<figure>

![img-box-shadow-feed](/img/university/feed/feed-composer.png)
<figcaption>Compositor y acciones del Feed.</figcaption>

</figure>

Use el compositor situado debajo del contexto del documento para escribir un mensaje. También puede usar las acciones disponibles para añadir archivos, asignar o notificar a personas y avanzar el documento en su workflow.

Al publicar, el Feed registra la publicación junto con las acciones realizadas. Por ejemplo, una sola entrada del Feed puede incluir un mensaje, archivos, un cambio de etapa del workflow y personas notificadas o mencionadas. Las acciones disponibles dependen del documento, el workflow y sus permisos.

## Usar acciones del Feed

<figure>

![img-box-shadow-feed](/img/university/feed/feed-actions.jpeg)
<figcaption>Acciones disponibles debajo del compositor del Feed.</figcaption>

</figure>

Seleccione una acción debajo del compositor, complete la información solicitada y publique la entrada para registrar el cambio en el Feed. Las siguientes acciones estaban disponibles en la WebApp actual:

| Acción | Qué hace |
| --- | --- |
| **Move stage** | Selecciona una transición de workflow disponible y mueve el documento a su etapa de destino. Las transiciones mostradas dependen de la etapa actual y del workflow del documento. |
| **Items** | Crea un elemento desde el Feed. Introduzca su nombre, seleccione su tipo y establezca su fecha. Los tipos de elemento disponibles dependen de la configuración. |
| **Add file** | Adjunta un archivo a la publicación. También puede arrastrar un archivo al compositor. |
| **Add assignment** | Abre las asignaciones de equipo del documento, agrupadas por tipo de asignación. Use los controles disponibles para añadir, actualizar o eliminar una asignación. |
| **Change end date** | Cambia la fecha y hora de finalización del documento. |
| **Additional information** | Abre los campos adicionales configurados para el documento para que puedan completarse o actualizarse. Los campos varían según el tipo y la configuración del documento. |
| **Notifications** | Permite elegir un usuario al que notificar cuando se publique la entrada. |

:::caution
No use Notifications para incluir usuarios cliente en una conversación interna. Notificar o hacer `@mention` a un cliente puede hacer que una publicación sea visible para ese cliente.
:::

## Seguir la actividad y las conversaciones

<figure>

![img-box-shadow-feed](/img/university/feed/feed-activity-timeline.png)
<figcaption>Actividad y conversaciones en la cronología del Feed.</figcaption>

</figure>

La cronología muestra primero la actividad más reciente. Cada entrada puede incluir el autor, la fecha y hora de publicación, el mensaje, los archivos, la actividad del workflow y las personas notificadas o mencionadas. Use comentarios y respuestas en una publicación para mantener juntas la conversación y su contexto.

Use la búsqueda del Feed para encontrar actividad anterior cuando esté disponible en su workspace. También pueden estar disponibles reacciones y otras opciones de la publicación, según la configuración.

## Visibilidad para usuarios cliente

<figure>

![img-box-shadow-feed](/img/university/feed/feed-client-visibility.png)
<figcaption>Publicaciones visibles para clientes y publicaciones internas.</figcaption>

</figure>

Un usuario se considera cliente cuando tiene activa la marca `IsClient`. La visibilidad de una conversación se define en la publicación principal mediante `IsVisibleToClient`; no se configura por separado en un comentario o una respuesta.

El sistema determina automáticamente la visibilidad de la publicación a partir del workflow: la configuración `IsVisibleToClient` de la etapa actual o de la etapa de destino determina si la publicación es visible para los clientes. Los comentarios y las respuestas de una publicación que no es visible para clientes son internos, porque el cliente no ve esa publicación principal en el Feed normal.

### Crear una conversación interna

Para mantener una conversación interna:

1. Confirme que el usuario externo está marcado como cliente (`IsClient`).
2. Cree la publicación mientras el documento esté en una etapa del workflow que no sea visible para los clientes.
3. Añada los comentarios y las respuestas a esa publicación.
4. No incluya clientes en las notificaciones ni haga `@mention` a clientes, ya que esto puede hacer que la publicación sea visible para el cliente.

## Buenas prácticas

- Consulte la descripción y la información de apoyo antes de publicar, para mantener la conversación alineada con el contexto del documento.
- Mantenga los mensajes, decisiones y seguimientos relacionados en la misma publicación y sus respuestas.
- Use una etapa del workflow que no sea visible para los clientes antes de iniciar una conversación interna.
- Valide una publicación como usuario interno: una publicación visible para los clientes muestra el indicador **Cliente puede ver**. Si el indicador no aparece, la publicación no es visible para los clientes.

## Limitaciones y aspectos a tener en cuenta

- Un cliente sigue viendo las publicaciones que ha creado. No use una publicación creada por un cliente para una conversación interna.
- En la WebApp actual, no hay un control funcional visible para cambiar manualmente la privacidad de una publicación después de crearla. Sitúe el documento en la etapa adecuada del workflow antes de crear la publicación.
- Los campos, las acciones y las opciones que se muestran en el Feed pueden variar según el tipo de documento, la configuración del workflow y los permisos del usuario.
