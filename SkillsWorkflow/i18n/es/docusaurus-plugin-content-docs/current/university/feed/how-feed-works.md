---
id: how-feed-works
title: Cómo Funciona el Feed
description: "Use el Feed para consultar el contexto del documento, colaborar con el equipo y controlar lo que pueden ver los usuarios cliente."
sidebar_label: Cómo Funciona el Feed
sidebar_position: 1
---

El Feed es el área de colaboración de un documento. Reúne en un único lugar el contexto del documento, los mensajes, la actividad del workflow, los archivos, las notificaciones y las conversaciones.

## Consultar el contexto del documento

<!-- IMAGE: Contexto del documento en el Feed. Capture la parte superior del Feed de un documento con el área de descripción/brief y los archivos adjuntos que puedan existir. No incluya datos de clientes ni información confidencial. -->

En la parte superior del Feed puede consultar la descripción del documento y su información de apoyo antes de revisar la actividad que aparece debajo. Según el tipo y la configuración del documento, esta área también puede mostrar otros campos descriptivos y archivos adjuntos al documento.

Use esta información para comprender la solicitud o el brief antes de crear una publicación. El contexto del documento está separado de la cronología del Feed: actualice la descripción cuando cambie la información principal del documento y use las publicaciones para registrar la colaboración y las decisiones.

## Añadir una publicación o una acción de workflow

<!-- IMAGE: Compositor del Feed. Capture el campo del mensaje y las acciones disponibles debajo, incluido un ejemplo de la opción para avanzar el documento. -->

Use el compositor situado debajo del contexto del documento para escribir un mensaje. También puede usar las acciones disponibles para añadir archivos, asignar o notificar a personas y avanzar el documento en su workflow.

Al publicar, el Feed registra la publicación junto con las acciones realizadas. Por ejemplo, una sola entrada del Feed puede incluir un mensaje, archivos, un cambio de etapa del workflow y personas notificadas o mencionadas. Las acciones disponibles dependen del documento, el workflow y sus permisos.

## Seguir la actividad y las conversaciones

<!-- IMAGE: Cronología del Feed. Capture una publicación con autor, mensaje, actividad del workflow, personas notificadas o mencionadas y archivos adjuntos. -->

La cronología muestra primero la actividad más reciente. Cada entrada puede incluir el autor, la fecha y hora de publicación, el mensaje, los archivos, la actividad del workflow y las personas notificadas o mencionadas. Use comentarios y respuestas en una publicación para mantener juntas la conversación y su contexto.

Use la búsqueda del Feed para encontrar actividad anterior cuando esté disponible en su workspace. También pueden estar disponibles reacciones y otras opciones de la publicación, según la configuración.

## Visibilidad para usuarios cliente

<!-- IMAGE: Visibilidad para clientes. Capture una publicación visible para clientes con el indicador “Cliente puede ver”. Si es posible, añada una segunda captura de una publicación interna sin este indicador para compararla. -->

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
