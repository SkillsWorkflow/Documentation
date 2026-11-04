---
id: gantt
title: Gantt
description: "El Gantt muestra los jobs en una línea de tiempo, para un proyecto entero o para un job y los jobs debajo de él: construir la planificación, copiar filas, duplicar jobs y editar varios a la vez."
sidebar_label: Gantt
sidebar_position: 1
---
El Gantt muestra los jobs en una línea de tiempo, con la jerarquía de los jobs en una cuadrícula a la izquierda y las barras a la derecha. Ábralo desde la pestaña **GANTT** de un proyecto para planificar el proyecto entero, o desde la pestaña **GANTT** de un job para planificar ese job y los jobs debajo de él.

![img-box-shadow](/img/product/planning-and-scheduling/gantt/gantt-project.png)
<figcaption>El Gantt de un proyecto</figcaption>

## Disponibilidad

El Gantt proviene de un workspace. La pestaña **GANTT** aparece en los proyectos y en los jobs donde ese workspace está instalado, y su barra de herramientas está desactivada a menos que el workspace la active.

**Duplicar** requiere permiso para crear jobs. **Acción masiva** requiere permiso para editar jobs, y el job debe estar preparado para la edición masiva, como lo está en las listas. Un botón cuyo requisito no se cumple queda oculto.

## La barra de herramientas

![img-box-shadow-sm](/img/product/planning-and-scheduling/gantt/gantt-toolbar.png)
<figcaption>La barra de herramientas del Gantt</figcaption>

De izquierda a derecha:

| Control | Qué hace |
|---|---|
| **Select job type...** | El departamento y el tipo del próximo job que añada. |
| **Agregar** y **Eliminar** | Añade un job, o elimina el seleccionado. |
| **Outdent selected** e **Indent selected** | Suben o bajan las filas seleccionadas un nivel en la jerarquía. |
| **Duplicar** y **Acción masiva** | Actúan sobre las filas seleccionadas. Vea las secciones de abajo. |
| **Undo** y **Redo** | Retroceden o avanzan en los cambios sin guardar. |
| **Guardar** | Guarda todos los cambios. Permanece desactivado hasta que hay algo que guardar. |
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

Las filas nuevas se guardan como jobs en Borrador.

Para añadir un job debajo de una fila concreta, haga clic derecho en la fila y elija **Añadir...** > **Subtarea**.

## Planificar los jobs

Cambie las fechas en la cuadrícula, o arrastre una barra por la línea de tiempo para moverla y arrastre sus extremos para alargarla o acortarla. Una fila padre abarca los jobs que tiene debajo.

El color de la barra sigue la etapa del job. Rellene **Antecessor** o **Successor** para enlazar jobs que dependen unos de otros.

Al hacer clic en la celda WBS de una fila se abre la vista previa del job.

## Seleccionar filas

La primera columna de la cuadrícula contiene las casillas de selección. Aparecen al pasar el ratón sobre una fila, y permanecen visibles mientras la fila esté seleccionada.

Marque la casilla del encabezado de la columna para seleccionar todas las filas. Marcar un padre selecciona todo lo que está debajo de él.

Al hacer clic en la celda WBS de una fila también se selecciona la fila completa. Ctrl (Cmd en macOS) añade o quita una fila. Shift extiende desde la última fila en la que hizo clic. Al hacer clic en cualquier otra celda se selecciona la celda, no la fila.

![img-box-shadow](/img/product/planning-and-scheduling/gantt/01-row-selection.png)
<figcaption>Una fila padre marcada, con las filas debajo de ella también seleccionadas</figcaption>

## Copiar y pegar

Haga clic derecho en una fila seleccionada para tener **Copiar fila** y **Pegar fila**. **Pegar fila** inserta las filas copiadas después de la fila en la que hizo clic, en el mismo nivel, en Borrador. Haga clic en **Guardar** para crearlas.

![img-box-shadow-sm](/img/product/planning-and-scheduling/gantt/gantt-row-menu.png)
<figcaption>Copiar fila y Pegar fila en una fila seleccionada</figcaption>

Haga clic derecho en una celda fuera de una selección de filas para tener **Copiar** y **Pegar**, que copian el valor de la celda.

## Duplicar jobs

Seleccione las filas y haga clic en **Duplicar**. Las copias aparecen junto a las originales en Borrador, y pasan a ser jobs cuando hace clic en **Guardar**.

Un padre duplicado se lleva su rama consigo, por lo que seleccionar un padre junto con sus hijos sigue produciendo una copia de la rama.

**Duplicar** no toca el portapapeles de **Copiar fila**.

![img-box-shadow](/img/product/planning-and-scheduling/gantt/02-duplicate.png)
<figcaption>Una fila duplicada creada en Borrador debajo de la original</figcaption>

## Editar varios jobs a la vez

**Acción masiva** abre el cuadro de diálogo de edición masiva sobre las filas seleccionadas. Es el mismo cuadro de diálogo utilizado en las listas.

Guarde el Gantt primero. El cuadro de diálogo escribe directamente en los jobs, y el Gantt se recarga al cerrarse.

![img-box-shadow-popup](/img/product/planning-and-scheduling/gantt/03-bulk-action.png)
<figcaption>Acción masiva aplicada a las filas seleccionadas en el Gantt</figcaption>

## Filtrar

Haga clic en **Filtros** y escriba en el campo debajo de un encabezado de columna. La cuadrícula conserva las filas que coinciden y los padres que tienen encima.

![img-box-shadow](/img/product/planning-and-scheduling/gantt/gantt-filter-bar.png)
<figcaption>El filtro de Nombre mostrando solo el job que coincide</figcaption>

## El Gantt de un job

La pestaña **GANTT** de un job muestra ese job arriba, con todos los jobs que tiene debajo. Tiene la misma barra de herramientas, los mismos menús y las mismas columnas que el Gantt de un proyecto.

![img-box-shadow](/img/product/planning-and-scheduling/gantt/gantt-job.png)
<figcaption>El Gantt abierto en un job</figcaption>

Los jobs que añada o pegue aquí quedan dentro de ese job. El job de arriba se queda en su sitio:

- No se puede eliminar ni bajar de nivel desde su propio Gantt.
- Las filas directamente debajo de él no pueden subir de nivel. Intentarlo muestra *Las tareas directamente debajo de este job no pueden subir de nivel.*

Los cambios guardados aparecen también en el Gantt del proyecto.

## Reglas y comportamiento

Con cambios sin guardar en el Gantt, la acción masiva se detiene y Skills Workflow le pide que guarde.

Las filas que aún no ha guardado no tienen un job detrás. La acción masiva las omite y le informa del resultado.

Una acción masiva abarca como máximo 100 jobs. Seleccionar más muestra un mensaje.

Las filas sin guardar se pierden si abandona el Gantt sin guardar. Skills Workflow avisa antes de salir de la página.

## Configuración

En el componente Gantt del workspace:

- `showToolbar` muestra la barra de herramientas, incluidos Duplicar y Acción masiva.
- `bulkCapLimit` define cuántos jobs puede abarcar una acción masiva. Sin él el límite es 100.
- `allowCreate` y `allowBulk` desactivan cualquiera de las acciones en este Gantt. De lo contrario siguen los permisos del propio job.

## Artículos relacionados

- [Crear proyectos](/docs/product/projects-and-jobs/create-projects)
- [Cómo crear Jobs?](/docs/product/projects-and-jobs/create-jobs)
- [Tiempo Planificado](/docs/product/planning-and-scheduling/resourcing/planned-hours)
