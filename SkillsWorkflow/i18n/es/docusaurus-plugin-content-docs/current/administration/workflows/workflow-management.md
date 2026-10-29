---
id: workflow-management
title: Workflow Management
description: "Workflow Management es el editor visual de workflows en Maintenance. Elija un tipo de documento, abra o cree un flujo y edite sus etapas, transiciones, accesos de equipos y acciones en un diagrama."
sidebar_label: Workflow Management
sidebar_position: 1.5
---

Workflow Management es el editor visual de workflows. Lista los flujos de cada tipo de documento, abre un flujo como diagrama y guarda etapas, transiciones, accesos de equipos, roles, acciones y motivos de una sola vez. Un flujo nuevo puede empezar en blanco o a partir de una plantilla.

## Disponibilidad

- Workflow Management se activa por tenant. Mientras no esté activo, la entrada no aparece en Maintenance y su dirección redirige a Maintenance. Vea [Configuración](#configuración).
- Necesita acceso a Maintenance.

## Abrir Workflow Management

1. Haga clic en su avatar de usuario, en la esquina superior derecha del menú principal, y seleccione **Maintenance**.
2. En **Browse by area**, seleccione **Workflow**.
3. Seleccione **Workflow Management**.

<figure>

![img-box-shadow](/img/workflow-management/maintenance-workflow-area.png)
<figcaption>El área Workflow del catálogo de Maintenance, con la entrada Workflow Management.</figcaption>
</figure>

La entrada **Workflows**, a su lado, es la pantalla en lista para los mismos registros.

## Encontrar un flujo

En **Elige un tipo de documento**, seleccione el tipo de documento cuyos flujos quiere ver, por ejemplo **Jobs** o **Projects**. El campo **Búsqueda** filtra los tipos de documento.

**Flujos existentes** lista todos los flujos de ese tipo de documento. Cada tarjeta muestra una vista previa de la cadena de etapas y cuántas etapas y transiciones tiene el flujo. Seleccione una tarjeta para abrir el flujo en el diagrama.

<figure>

![img-box-shadow](/img/workflow-management/existing-flows.png)
<figcaption>Jobs seleccionado, con sus flujos existentes y la tarjeta Nuevo flujo.</figcaption>
</figure>

## Crear un flujo

1. Seleccione el tipo de documento.
2. Seleccione la tarjeta **Nuevo flujo**, al final de Flujos existentes.
3. Elija cómo empezar:
   - **Empezar en blanco** crea tres etapas, Draft, New y Done. La transición **Iniciar** lleva el documento de Draft a New y lo activa, y **Completar** lo lleva de New a Done.
   - Una tarjeta marcada como **Plantilla** copia las etapas, los accesos de equipos, los roles, las acciones y los motivos de ese modelo.
4. Edite el flujo en el diagrama y seleccione **Guardar flujo**.

No se guarda nada hasta que seleccione **Guardar flujo**.

<figure>

![img-box-shadow](/img/workflow-management/new-flow-templates.png)
<figcaption>Nuevo flujo abierto debajo de Flujos existentes, con Empezar en blanco y las plantillas disponibles.</figcaption>
</figure>

Cuando una plantilla usa roles o equipos que todavía no existen en su tenant, el editor los lista encima del diagrama. Seleccione **Crear lo que falta** para crearlos. Un rol de transición que no existe hace fallar el guardado, y un equipo que falta deja fuera el acceso de ese equipo a la etapa.

## Editar un flujo en el diagrama

El editor tiene tres partes:

- el diagrama, con las etapas como cajas y las transiciones como flechas con su nombre;
- el panel lateral, con la tarjeta **Flujo** y, cuando hay algo seleccionado, la tarjeta **Etapa** o **Transición**;
- la lista de **Problemas**, al final del panel lateral.

<figure>

![img-box-shadow](/img/workflow-management/editor-overview.png)
<figcaption>Un flujo de Jobs abierto en el editor. Guardar como modelo y Guardar flujo están en la barra superior.</figcaption>
</figure>

### Trabajar en el diagrama

| Para | Haga esto |
|---|---|
| Seleccionar una etapa o transición | Haga clic en ella. Su tarjeta se abre en el panel lateral. |
| Añadir una transición | Arrastre desde un punto de conexión de una etapa hasta otra etapa. |
| Añadir una etapa y una transición a la vez | Arrastre desde un punto de conexión hasta un espacio vacío y elija la etapa. |
| Cambiar el nombre de una etapa o transición | Haga doble clic en el nombre. |
| Eliminar una etapa o transición | Selecciónela y pulse Supr (Delete). |
| Desplazarse | Use la barra de vista, en la esquina inferior izquierda, para deshacer, rehacer, encajar el flujo en la pantalla, ajustar al ancho, hacer zoom y centrar en lo seleccionado. |

Las etapas inicial y final no se pueden eliminar. Dos etapas solo pueden estar conectadas por una transición en cada sentido, y una transición no puede empezar y terminar en la misma etapa.

### Tarjeta Flujo

La pestaña **Ajustes** contiene el **Nombre del flujo**, las etapas **Empieza en** y **Termina en** y el **Tipo de objeto de negocio**. **Añadir etapa** añade una etapa nueva o una que ya existe en el tipo de documento. **Añadir transición** pide las etapas **Desde** y **Hasta**.

La pestaña **Automatizaciones** mueve el documento por sí solo cuando los documentos que contiene llegan a una etapa determinada. En cada automatización, elija el tipo de documento de los hijos, la etapa a la que llegan (**Cuando lleguen a**) y la etapa a la que mover este documento (**Mover este documento a**). En un flujo nuevo, guarde el flujo antes de añadir automatizaciones. Vea [Stage Mappings](/docs/administration/workflows/stage-mappings).

<figure>

![img-box-shadow-sm](/img/workflow-management/automations.png)
<figcaption>La pestaña Automatizaciones de la tarjeta Flujo.</figcaption>
</figure>

### Tarjeta Etapa

Seleccione una etapa para abrir su tarjeta. Tiene cuatro pestañas.

**Transiciones** lista las transiciones que entran (**Entra desde**) y las que salen (**Sale hacia**). Seleccione una para abrirla. **Añadir una transición desde aquí** crea una transición nueva que sale de esta etapa.

<figure>

![img-box-shadow](/img/workflow-management/stage-transitions.png)
<figcaption>La etapa Em Produção seleccionada, con sus transiciones de entrada y de salida.</figcaption>
</figure>

**Acceso de equipos** define, para cada equipo, lo que puede hacer en esta etapa:

| Columna | Significado |
|---|---|
| **R** (Leer) | El equipo ve el documento en esta etapa. |
| **W** (Escribir) | El equipo puede usar las transiciones que salen de esta etapa. |
| **P** (Aparece en pendientes) | El documento aparece en la lista de pendientes del equipo. |
| **N** (Notificar) | El equipo recibe una notificación cuando el documento llega a esta etapa. |

<figure>

![img-box-shadow-sm](/img/workflow-management/stage-team-access.png)
<figcaption>Acceso de equipos de una etapa.</figcaption>
</figure>

**Ajustes** contiene el **Nombre**, el **Tipo de etapa**, el **Color**, la **Posición** y el **Porcentaje** de la etapa, y las opciones **Visible para el cliente**, **Esperando a terceros**, **Acepta horas** y **Sugerir porcentaje**. **Eliminar etapa** está al final. Vea [Stages](/docs/administration/workflows/stages) y [Stage Types](/docs/administration/workflows/stage-types).

<figure>

![img-box-shadow-sm](/img/workflow-management/stage-settings.png)
<figcaption>La pestaña Ajustes de una etapa.</figcaption>
</figure>

**Traducciones** contiene el nombre de la etapa en cada idioma configurado en el tenant. Deje un idioma vacío para mostrar el nombre original.

### Tarjeta Transición

Seleccione una transición en el diagrama, o en la pestaña Transiciones de una etapa, para abrir su tarjeta. La tarjeta muestra las etapas de origen y de destino y tiene estas pestañas:

- **Ajustes**: **Nombre**, **Icono**, **Posición**, **Id en el otro sistema**, **Carpeta para el archivo**, **Texto de confirmación**, **Query de validación** y las **Obligatoriedades**: Confirmación, Horas, Comentario, Archivo, Notificación, Exige equipo y Por defecto. **Eliminar paso** está al final.
- **Roles**: los roles que pueden usar la transición. Seleccione **Verificar límites de valor** para limitar un rol a un rango de valores, con **Desde** y **Hasta**.
- **Acciones**: lo que se ejecuta cuando se usa la transición. La mayoría de las acciones necesitan un valor, y el campo debajo de cada acción indica lo que espera.
- **Motivos**: los motivos que el usuario elige cuando la transición tiene la acción RequestMotive. Un motivo inactivo sigue en el flujo pero deja de ofrecerse.
- **Acciones personalizadas**: acciones personalizadas configuradas en su tenant que se ejecutan con la transición.
- **Traducciones**: el nombre de la transición en cada idioma del tenant.

El número junto a Roles, Acciones, Motivos y Acciones personalizadas es cuántos tiene la transición.

<figure>

![img-box-shadow](/img/workflow-management/transition-selected.png)
<figcaption>Una transición seleccionada en el diagrama, con la pestaña Ajustes abierta.</figcaption>
</figure>

<figure>

![img-box-shadow-sm](/img/workflow-management/transition-roles.png)
<figcaption>La pestaña Roles de una transición.</figcaption>
</figure>

<figure>

![img-box-shadow-sm](/img/workflow-management/transition-actions.png)
<figcaption>La pestaña Acciones, con una acción añadida.</figcaption>
</figure>

Vea [Transitions](/docs/administration/workflows/transitions) y [Workflow Actions](/docs/administration/workflows/workflow-actions) para saber qué hace cada ajuste y cada acción.

## Revisar los problemas

La lista de **Problemas** comprueba el flujo mientras lo edita. Seleccione un problema para ir a la etapa o transición que menciona, en la pestaña donde se corrige. El número junto a **Guardar como modelo**, en la barra superior, muestra cuántos problemas hay.

<figure>

![img-box-shadow-sm](/img/workflow-management/problems.png)
<figcaption>Dos problemas que no impiden guardar.</figcaption>
</figure>

Algunos problemas bloquean el guardado. **Guardar flujo** queda desactivado hasta que se corrijan:

- la etapa inicial no es de tipo Draft, o el flujo tiene más de una etapa Draft;
- la primera transición que sale de Draft no activa el documento;
- una transición vuelve a la etapa Draft;
- la misma etapa es a la vez el inicio y el final del flujo;
- una etapa no tiene ninguna transición de entrada ni de salida.

Los demás problemas son avisos y el flujo se puede guardar igualmente. Incluyen una etapa sin salida, una etapa a la que no llega nada, una etapa sin camino hasta la etapa final, una etapa que ningún equipo puede ver o en la que ninguno puede actuar, una etapa que no está en los pendientes de ningún equipo, y una transición que exige horas hacia una etapa que no acepta horas.

## Guardar el flujo

Seleccione **Guardar flujo** en la barra superior. El botón se activa cuando hay cambios y ningún problema bloqueante. El resultado aparece como un mensaje en la esquina de la pantalla. Cuando solo se ha guardado una parte de los cambios, el mensaje indica cuántos han fallado. Corríjalos y vuelva a guardar.

Guarde antes de salir del flujo. Volver al tipo de documento, desde el breadcrumb, descarta los cambios sin guardar.

## Guardar un flujo como plantilla

1. Abra el flujo.
2. Seleccione **Guardar como modelo** en la barra superior.
3. Escriba el **Nombre del modelo** y seleccione **Guardar modelo**.

La plantilla aparece en Nuevo flujo la próxima vez que cree un flujo. Guardar una plantilla no guarda el flujo.

<figure>

![img-box-shadow](/img/workflow-management/save-as-model.png)
<figcaption>Guardar como modelo, con el nombre del modelo encima del diagrama.</figcaption>
</figure>

## Preguntar al Asistente de IA

Con Workflow Management abierto, el botón del Asistente de IA abre el [Agente de Workflows](/docs/ai/agents/workflow-agent), que explica y modifica workflows a partir de una descripción.

## Configuración

Un administrador activa Workflow Management en **System Settings > Behavior > Enable workflow management**. Viene desactivado por defecto.

## Artículos relacionados

- [Workflow](/docs/administration/workflows)
- [Stages](/docs/administration/workflows/stages)
- [Stage Types](/docs/administration/workflows/stage-types)
- [Transitions](/docs/administration/workflows/transitions)
- [Stage Mappings](/docs/administration/workflows/stage-mappings)
- [Workflow Actions](/docs/administration/workflows/workflow-actions)
- [Maintenance](/docs/administration/maintenance)
- [Agente de Workflows](/docs/ai/agents/workflow-agent)
