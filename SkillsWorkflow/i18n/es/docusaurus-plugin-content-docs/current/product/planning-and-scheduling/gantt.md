---
id: gantt
title: Gantt
description: "Planifique un proyecto o un job en una línea de tiempo: añada jobs, organícelos en fases, enlácelos con dependencias, copie, duplique y edite varios a la vez."
sidebar_label: Gantt
sidebar_position: 1
---
El Gantt coloca sus jobs en una línea de tiempo. La cuadrícula de la izquierda muestra la jerarquía de los jobs, y las barras de la derecha muestran cuándo se ejecuta cada job y qué jobs esperan a otros.

Funciona igual en un proyecto y en un job. Abra la pestaña **GANTT** de un proyecto para planificar el proyecto entero, o la pestaña **GANTT** de un job para planificar ese job y los jobs que tiene debajo.

![img-box-shadow](/img/product/planning-and-scheduling/gantt/gantt-project.png)
<figcaption>Un proyecto planificado en tres fases, con dependencias entre los jobs</figcaption>

## Disponibilidad

El Gantt proviene de un workspace. La pestaña **GANTT** aparece en los proyectos y en los jobs donde ese workspace está instalado, y su barra de herramientas está desactivada a menos que el workspace la active.

**Duplicar** requiere permiso para crear jobs. **Acción masiva** requiere permiso para editar jobs, y el job debe estar preparado para la edición masiva, como lo está en las listas. Un botón cuyo requisito no se cumple queda oculto.

## La barra de herramientas

El lado izquierdo de la barra es donde cambia la planificación:

![img-box-shadow](/img/product/planning-and-scheduling/gantt/gantt-toolbar-left.png)
<figcaption>El lado izquierdo de la barra de herramientas del Gantt</figcaption>

| Control | Qué hace |
|---|---|
| **Select job type...** | El departamento y el tipo del próximo job que añada. |
| **Agregar** y **Eliminar** | Añade un job, o elimina el seleccionado. |
| **Outdent selected** e **Indent selected** | Suben o bajan las filas seleccionadas un nivel en la jerarquía. |
| **Duplicar** y **Acción masiva** | Actúan sobre las filas seleccionadas. Vea las secciones de abajo. |
| **Undo** y **Redo** | Retroceden o avanzan en los cambios sin guardar. |
| **Guardar** | Guarda todos los cambios. Permanece desactivado hasta que hay algo que guardar. |

El lado derecho cambia lo que ve:

![img-box-shadow](/img/product/planning-and-scheduling/gantt/gantt-toolbar-right.png)
<figcaption>El lado derecho de la barra de herramientas del Gantt</figcaption>

| Control | Qué hace |
|---|---|
| **Column chooser** | Muestra u oculta columnas. |
| **Filtros** | Muestra un campo de filtro debajo de cada encabezado de columna. |
| **Expand tasks** y **Collapse tasks** | Abren o cierran todas las filas padre. |
| **Critical path** | Resalta la ruta crítica. |
| **Previous period**, **Hoy** y **Next period** | Desplazan la línea de tiempo. |
| **Zoom out**, **Zoom in** y **Zoom to fit** | Cambian la escala de la línea de tiempo. **Zoom to fit** muestra todos los jobs a la vez. |
| **Reset layout** | Restablece las columnas y anchos predeterminados. |

## Añadir jobs

1. Elija el departamento y el tipo de job en **Select job type...**.
2. Haga clic en **Agregar**.
3. Ponga nombre a la nueva fila y defina sus fechas en la cuadrícula, o arrastre su barra.
4. Haga clic en **Guardar**.

**Agregar** pone el job nuevo justo debajo de la fila que tiene seleccionada, en el mismo nivel. Sin nada seleccionado, va al final de la lista.

Para cambiar un job de sitio, arrastre su fila por el asa (los puntos de la izquierda) y suéltela donde corresponda. Una línea naranja muestra dónde quedará. Suéltela entre las filas de una fase para que pase a formar parte de esa fase.

![img-box-shadow](/img/product/planning-and-scheduling/gantt/gantt-drag-under-job.png)
<figcaption>Arrastrar un job nuevo a la fase Creative Production</figcaption>

También puede hacer clic derecho en un job y elegir **Añadir...** > **Subtarea** para añadir un job debajo de él.

Las filas nuevas se guardan como jobs en Borrador.

## Planificar los jobs

Cambie las fechas en la cuadrícula, o arrastre una barra por la línea de tiempo para moverla y arrastre sus extremos para alargarla o acortarla. Una fila padre abarca los jobs que tiene debajo, y su **%Done** sigue al de ellos.

Use **Antecessor** o **Successor** para indicar qué job tiene que terminar antes de que empiece otro. Las flechas de la línea de tiempo muestran esos enlaces.

Al hacer clic en la celda WBS de una fila se abre la vista previa del job.

## Seleccionar filas

La primera columna de la cuadrícula contiene las casillas de selección. Aparecen al pasar el ratón sobre una fila, y permanecen visibles mientras la fila esté seleccionada.

Marque la casilla del encabezado de la columna para seleccionar todas las filas. Marcar un padre selecciona todo lo que está debajo de él.

Al hacer clic en la celda WBS de una fila también se selecciona la fila completa. Ctrl (Cmd en macOS) añade o quita una fila. Shift extiende desde la última fila en la que hizo clic. Al hacer clic en cualquier otra celda se selecciona la celda, no la fila.

![img-box-shadow](/img/product/planning-and-scheduling/gantt/01-row-selection.png)
<figcaption>Marcar Creative Production selecciona también los jobs que tiene debajo</figcaption>

## Copiar y pegar

Haga clic derecho en una fila seleccionada para tener **Copiar fila** y **Pegar fila**. **Pegar fila** inserta las filas copiadas después de la fila en la que hizo clic, en el mismo nivel, en Borrador. Haga clic en **Guardar** para crearlas.

![img-box-shadow](/img/product/planning-and-scheduling/gantt/gantt-row-menu.png)
<figcaption>Copiar fila y Pegar fila en un job seleccionado</figcaption>

Haga clic derecho en una celda fuera de una selección de filas para tener **Copiar** y **Pegar**, que copian el valor de la celda.

## Duplicar jobs

Seleccione las filas y haga clic en **Duplicar**. Las copias aparecen junto a las originales en Borrador, y pasan a ser jobs cuando hace clic en **Guardar**.

Un padre duplicado se lleva su rama consigo, por lo que seleccionar un padre junto con sus hijos sigue produciendo una copia de la rama.

**Duplicar** no toca el portapapeles de **Copiar fila**.

![img-box-shadow](/img/product/planning-and-scheduling/gantt/02-duplicate.png)
<figcaption>Una copia de Social media carousel, en Borrador, justo debajo de la original</figcaption>

## Editar varios jobs a la vez

**Acción masiva** abre el cuadro de diálogo de edición masiva sobre las filas seleccionadas. Es el mismo cuadro de diálogo utilizado en las listas.

Guarde el Gantt primero. El cuadro de diálogo escribe directamente en los jobs, y el Gantt se recarga al cerrarse.

![img-box-shadow-popup](/img/product/planning-and-scheduling/gantt/03-bulk-action.png)
<figcaption>Acción masiva sobre dos jobs seleccionados</figcaption>

## Filtrar

Haga clic en **Filtros** y escriba en el campo debajo de un encabezado de columna. La cuadrícula conserva las filas que coinciden y los padres que tienen encima.

![img-box-shadow](/img/product/planning-and-scheduling/gantt/gantt-filter-bar.png)
<figcaption>Filtrar la columna del nombre por "launch"</figcaption>

## Reglas y comportamiento

Con cambios sin guardar en el Gantt, la acción masiva se detiene y Skills Workflow le pide que guarde.

Las filas que aún no ha guardado no tienen un job detrás. La acción masiva las omite y le informa del resultado.

Una acción masiva abarca como máximo 100 jobs. Seleccionar más muestra un mensaje.

Las filas sin guardar se pierden si abandona el Gantt sin guardar. Skills Workflow avisa antes de salir de la página.

En el Gantt de un job, el job que abrió queda arriba y todo queda dentro de él:

- Los jobs que añada o pegue quedan siempre dentro de él.
- El job de arriba no se puede eliminar ni bajar de nivel desde su propio Gantt.
- Las filas directamente debajo de él no pueden subir de nivel. Intentarlo muestra *Las tareas directamente debajo de este job no pueden subir de nivel.*
- Lo que guarde ahí aparece también en el Gantt del proyecto.

![img-box-shadow](/img/product/planning-and-scheduling/gantt/gantt-job.png)
<figcaption>El Gantt del job Creative Production</figcaption>

## Configuración

En el componente Gantt del workspace:

- `showToolbar` muestra la barra de herramientas, incluidos Duplicar y Acción masiva.
- `bulkCapLimit` define cuántos jobs puede abarcar una acción masiva. Sin él el límite es 100.
- `allowCreate` y `allowBulk` desactivan cualquiera de las acciones en este Gantt. De lo contrario siguen los permisos del propio job.

## Artículos relacionados

- [Crear proyectos](/docs/product/projects-and-jobs/create-projects)
- [Cómo crear Jobs?](/docs/product/projects-and-jobs/create-jobs)
- [Tiempo Planificado](/docs/product/planning-and-scheduling/resourcing/planned-hours)
