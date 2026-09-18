---
id: chat
title: Chat
description: "Envíe mensajes directos y de grupo a sus compañeros desde cualquier pantalla de Skills Workflow."
sidebar_label: Chat
sidebar_position: 4
---

El Chat es el panel de mensajes dentro de Skills Workflow. Se abre sobre la pantalla en la que está trabajando y reúne sus conversaciones directas y de grupo, las personas a las que puede escribir y quién está en línea.

## Disponibilidad

El icono del Chat está en el menú superior. Aparece cuando el chat está activo en su empresa y su perfil incluye el rol **ChatNavigate**. Un contador sobre el icono indica cuántas conversaciones tienen mensajes sin leer.

Si el chat está activo pero no se puede contactar con el servicio, el panel muestra **Chat no disponible** en lugar de sus conversaciones.

## Encontrar una conversación o una persona

<figure>

![img-box-shadow](/img/chat/01-chat-panel-conversations-PLACEHOLDER.png)
<figcaption>Panel del Chat en la pestaña Conversaciones.</figcaption>

</figure>

El panel tiene dos pestañas.

**Conversaciones** lista las conversaciones de las que forma parte, empezando por la actividad más reciente. Cada fila muestra la foto de los participantes, el nombre de la conversación, cuándo llegó el último mensaje, una vista previa de este y cuántos mensajes no ha leído. El cuadro de búsqueda busca nombres de conversaciones.

**Usuarios** lista las personas a las que puede escribir, con su grupo de tipología y un punto verde mientras están en línea. Al seleccionar una persona se abre la conversación con ella.

La foto de una persona también inicia la conversación. Donde la acción de chat esté disponible sobre la foto, como en una publicación del Feed, en una respuesta o en una asignación de equipo, haga clic en la foto y la conversación se abre.

## Iniciar una conversación

Para escribir a una persona, abra la pestaña **Usuarios** y selecciónela. Si ya han hablado antes, se abre la conversación existente con su historial. Dos personas comparten siempre una única conversación.

Para crear un grupo, use el botón de nueva conversación junto a las pestañas:

1. Seleccione al menos dos personas. Cada una aparece como etiqueta sobre la lista y se puede quitar allí.
2. Escriba un nombre, si lo desea.
3. Seleccione **Iniciar conversación**.

<figure>

![img-box-shadow](/img/chat/03-new-conversation-PLACEHOLDER.png)
<figcaption>Inicio de una conversación de grupo.</figcaption>

</figure>

El nombre es opcional y se puede cambiar más tarde. Un grupo sin nombre se lista con los nombres de sus tres primeros miembros por orden alfabético, seguidos del número de miembros restantes.

## Escribir y enviar

<figure>

![img-box-shadow](/img/chat/02-conversation-PLACEHOLDER.png)
<figcaption>Una conversación abierta.</figcaption>

</figure>

Escriba en el cuadro de mensaje al final de la conversación. **Enter** envía el mensaje y **Shift+Enter** crea una nueva línea. Las direcciones que empiezan por `http://` o `https://` se convierten en enlaces que se abren en una pestaña nueva.

El texto que aún no ha enviado se guarda en esa conversación, en su navegador, y le espera en el cuadro de mensaje cuando vuelva.

Mientras el mensaje se entrega, muestra **Enviando...**. Si no llega al servicio, se queda en pantalla con **No se pudo enviar el mensaje.** y la acción **Reintentar**.

El historial agrupa los mensajes seguidos de una misma persona y escribe la hora una vez al final de cada grupo. Los días se separan con una fecha y una línea roja marca el primer mensaje que no ha leído. Desplácese hasta la parte superior de una conversación para cargar mensajes más antiguos.

### Copiar o editar un mensaje

Apunte a un mensaje para mostrar sus acciones.

**Copiar mensaje** pone el texto del mensaje en el portapapeles.

**Editar mensaje** aparece en sus propios mensajes. Abre el texto en un cuadro editable con las reglas del cuadro de mensaje: **Enter** guarda, **Esc** cancela. Todos pasan a ver el mensaje marcado como **Editado**. Los mensajes de sistema, como la nota que registra un cambio de nombre, no se pueden editar, y ningún mensaje se puede eliminar.

### Mientras alguien escribe

Una línea bajo el último mensaje nombra a las personas que están escribiendo y apila sus fotos. A partir de tres personas, pasa a contarlas.

## Gestionar una conversación de grupo

<figure>

![img-box-shadow-popup](/img/chat/04-group-menu-PLACEHOLDER.png)
<figcaption>El menú de la conversación de grupo.</figcaption>

</figure>

La cabecera de un grupo muestra el nombre de la conversación y cuántos miembros están en línea. **Gestionar miembros**, el botón **...**, abre el menú del grupo.

**Rename conversation** pide el nuevo nombre, que es obligatorio. La conversación pasa a llamarse así para todos y el cambio queda registrado como mensaje en el historial.

**Añadir miembro** abre la lista de personas que puede agregar. Las personas añadidas se anuncian en la conversación.

**Leave** registra que ha salido y quita la conversación de su lista.

La lista de miembros bajo el menú quita a alguien mediante la acción de su fila. Confirme la eliminación y esa persona deja de recibir los mensajes de la conversación. La eliminación se ofrece mientras el grupo tenga más de dos miembros.

## Notificaciones

Con el panel del Chat cerrado, un mensaje entrante aparece como aviso en la esquina de la aplicación. Seleccione el aviso para abrir esa conversación.

Mientras la pestaña del navegador está en segundo plano, el mensaje también se lanza como notificación de escritorio. Los mensajes directos llevan por título el nombre de quien los envía. Un mensaje de grupo lleva por título el nombre de la conversación y nombra al remitente en el cuerpo.

Las notificaciones de escritorio requieren **Enable browser notifications**, en **Notificaciones** dentro de su configuración, y el permiso del propio navegador, que se solicita la primera vez que abre el chat o las notificaciones tras activar el ajuste. Están disponibles en el Modern Layout. Los demás layouts se quedan con el aviso dentro de la aplicación.

## Reglas y comportamiento

- La pestaña **Usuarios** nunca le lista a usted, ni a los usuarios inactivos, ni a los administradores del sistema.
- La búsqueda en **Conversaciones** busca nombres de conversaciones. No busca el texto de los mensajes.
- El cuadro de mensaje envía texto. El panel del Chat no tiene acción para adjuntar archivos.
- Los mensajes que envía desde otra pestaña u otro dispositivo aparecen en la conversación sin avisarle dos veces.

## Configuración

El chat lo activa en su tenant el equipo de soporte de Skills Workflow.

El acceso se concede por usuario mediante los roles de chat. **ChatNavigate** es el rol que pone el icono en el menú superior.

A quién puede escribir cada persona lo controla **Chat Visibility Restriction Enabled**, en la pestaña **Seguridad** de la Configuración:

- Con el ajuste desactivado, todos ven a todos los usuarios activos, salvo los administradores del sistema.
- Con el ajuste activado, un usuario que tenga personas en su lista de visibilidad de chat ve solo a esas personas, más a quien le haya incluido a él en la suya. Un usuario con la lista vacía sigue viendo a todos.

Las listas de visibilidad de chat están en el registro del usuario y no son editables en la WebApp. Pida al equipo de soporte de Skills Workflow que las configure.

## Artículos relacionados

- [Uso del Feed](/docs/product/files-and-collaboration/using-feed)
- [Roles y Perfiles](/docs/administration/system-roles-profiles)
- [Tipos de Notificación](/docs/product/notifications/notification-types)
