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

También puede iniciar una conversación desde la foto de una persona siempre que la opción de chat aparezca sobre ella — por ejemplo, en una publicación del Feed, en una respuesta o en una asignación de equipo.

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

Escriba en el cuadro de mensaje al final de la conversación. **Enter** envía el mensaje y **Shift+Enter** crea una nueva línea. Cualquier enlace que pegue queda clicable y se abre en una pestaña nueva.

Si empieza a escribir un mensaje y no lo envía, sigue ahí la próxima vez que abra esa conversación — pero solo en este dispositivo.

Mientras el mensaje se entrega, muestra **Enviando...**. Si no llega al servicio, se queda en pantalla con **No se pudo enviar el mensaje.** y la acción **Reintentar**.

Los mensajes seguidos de una misma persona se agrupan, y la hora se muestra una vez al final del grupo. Los días se separan con una fecha y una línea roja marca el primer mensaje que no ha leído. Desplácese hasta la parte superior de una conversación para cargar mensajes más antiguos.

### Copiar o editar un mensaje

Haga hover sobre un mensaje para ver las acciones disponibles.

**Copiar mensaje** pone el texto del mensaje en el portapapeles.

**Editar mensaje** aparece en sus propios mensajes. Abre el texto en un cuadro editable, donde **Enter** guarda el cambio y **Esc** lo cancela. Todos pasan a ver el mensaje marcado como **Editado**. Los mensajes de sistema, como la nota que registra un cambio de nombre, no se pueden editar, y ningún mensaje se puede eliminar.

### Mientras alguien escribe

Una línea bajo el último mensaje nombra a las personas que están escribiendo y apila sus fotos. A partir de tres personas, pasa a contarlas.

## Gestionar una conversación de grupo

<figure>

![img-box-shadow-popup](/img/chat/04-group-menu-PLACEHOLDER.png)
<figcaption>El menú de la conversación de grupo.</figcaption>

</figure>

La cabecera del grupo muestra el nombre de la conversación y cuántos miembros están en línea. Seleccione **Gestionar miembros** (el botón **...**) para abrir el menú del grupo.

**Rename conversation** pide el nuevo nombre, que es obligatorio. La conversación pasa a llamarse así para todos y el cambio queda registrado como mensaje en el historial.

**Añadir miembro** abre la lista de personas que puede agregar. Las personas añadidas se anuncian en la conversación.

**Leave** registra que ha salido y quita la conversación de su lista.

Para quitar a alguien, use la acción de eliminar junto a su nombre, en la lista de miembros bajo el menú. Confirme la eliminación y esa persona deja de recibir los mensajes de la conversación. Solo puede quitar a un miembro mientras el grupo tenga más de dos personas.

## Notificaciones

Con el panel del Chat cerrado, un mensaje entrante aparece como aviso en la esquina de la aplicación. Seleccione el aviso para abrir esa conversación.

Mientras la pestaña del navegador está en segundo plano, el mensaje también se lanza como notificación de escritorio. Un mensaje directo muestra el nombre de quien lo envía. Un mensaje de grupo muestra el nombre de la conversación, con el nombre de quien lo envía en el texto.

Las notificaciones de escritorio requieren **Enable browser notifications**, en **Notificaciones** dentro de su configuración, y el permiso del propio navegador, que se solicita la primera vez que abre el chat o las notificaciones tras activar el ajuste. Están disponibles en el Modern Layout. Los demás layouts se quedan con el aviso dentro de la aplicación.

## Reglas y comportamiento

- La pestaña **Usuarios** nunca le lista a usted, ni a los usuarios inactivos, ni a los administradores del sistema.
- La búsqueda en **Conversaciones** busca nombres de conversaciones. No busca el texto de los mensajes.
- El Chat solo envía mensajes de texto. No se pueden adjuntar archivos.
- Si usa el Chat en más de una pestaña del navegador o en más de un dispositivo a la vez, sus conversaciones se mantienen sincronizadas en todos ellos.

## Configuración

El chat lo activa en su tenant el equipo de soporte de Skills Workflow.

El acceso se concede por usuario mediante los roles de chat. **ChatNavigate** es el rol que pone el icono en el menú superior.

A quién puede escribir cada persona lo controla **Chat Visibility Restriction Enabled**, en la pestaña **Seguridad** de la Configuración:

- Con el ajuste desactivado, todos ven a todos los usuarios activos, salvo los administradores del sistema.
- Con el ajuste activado, un usuario que tenga personas en su lista de visibilidad de chat ve solo a esas personas, más a quien le haya incluido a él en la suya. Un usuario con la lista vacía sigue viendo a todos.

Estas listas no son editables en la WebApp. Pida al equipo de soporte de Skills Workflow que las configure.

## Artículos relacionados

- [Uso del Feed](/docs/product/files-and-collaboration/using-feed)
- [Roles y Perfiles](/docs/administration/system-roles-profiles)
- [Tipos de Notificación](/docs/product/notifications/notification-types)
