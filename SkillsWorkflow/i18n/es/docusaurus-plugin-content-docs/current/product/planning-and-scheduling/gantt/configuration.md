---
id: index
title: Gantt
description: "Seleccionar filas en el Gantt de Skills Workflow, duplicar jobs y editar varios jobs a la vez con la Acción masiva."
sidebar_label: Gantt
sidebar_position: 1
---

# Gantt

El Gantt muestra los jobs de un proyecto en una línea de tiempo, con la jerarquía de los jobs en una cuadrícula a la izquierda. Las filas de esa cuadrícula pueden seleccionarse y tratarse en conjunto: duplicarse, o editarse a la vez con una acción masiva.

Para construir una planificación desde cero, consulte [Gantt Chart](using-the-gantt.md) en University.

## Disponibilidad

El Gantt proviene de un workspace, y su barra de herramientas está desactivada a menos que el workspace la active.

Duplicate requiere permiso para crear jobs. Bulk action requiere permiso para editar jobs, y el job debe estar preparado para la edición masiva, como lo está en las listas. Un botón cuyo requisito no se cumple queda oculto.

## Seleccionar filas

La primera columna de la cuadrícula contiene las casillas de selección. Aparecen al pasar el ratón sobre una fila, y permanecen visibles mientras la fila esté seleccionada.

Marque la casilla del encabezado de la columna para seleccionar todas las filas. Marcar un padre selecciona todo lo que está debajo de él.

Al hacer clic en la celda WBS de una fila se selecciona la fila completa. Ctrl (Cmd en macOS) añade o quita una fila. Shift extiende desde la última fila en la que hizo clic. Al hacer clic en cualquier otra celda se selecciona la celda, no la fila.

![img-box-shadow](/img/gantt/01-row-selection.png)
<figcaption>Columna de selección con una fila padre y sus hijos seleccionados</figcaption>

## Duplicar jobs

Seleccione las filas y haga clic en **Duplicate**. Las copias aparecen junto a las originales en Borrador, y pasan a ser jobs cuando hace clic en **Save**.

Un padre duplicado se lleva su rama consigo, por lo que seleccionar un padre junto con sus hijos sigue produciendo una copia de la rama.

Duplicate no toca el portapapeles de **Copy row**.

![img-box-shadow](/img/gantt/02-duplicate.png)
<figcaption>Filas duplicadas creadas en Borrador debajo de las originales</figcaption>

## Editar varios jobs a la vez

**Bulk action** abre el cuadro de diálogo de edición masiva sobre las filas seleccionadas. Es el mismo cuadro de diálogo utilizado en las listas.

Guarde el Gantt primero. El cuadro de diálogo escribe directamente en los jobs, y el Gantt se recarga al cerrarse.

![img-box-shadow-popup](/img/gantt/03-bulk-action.png)
<figcaption>Acción masiva aplicada a las filas seleccionadas en el Gantt</figcaption>

## Reglas y comportamiento

Con cambios sin guardar en el Gantt, la acción masiva se detiene y Skills Workflow le pide que guarde.

Las filas que aún no ha guardado no tienen un job detrás. La acción masiva las omite y le informa del resultado.

Una acción masiva abarca como máximo 100 jobs. Seleccionar más muestra un mensaje.

Las filas duplicadas se pierden si abandona el Gantt sin guardar. Skills Workflow avisa antes de salir de la página.

Save permanece desactivado hasta que hay algo que guardar.

## Configuración

En el componente Gantt del workspace:

- `showToolbar` muestra la barra de herramientas, incluidos Duplicate y Bulk action.
- `bulkCapLimit` define cuántos jobs puede abarcar una acción masiva. Sin él el límite es 100.
- `allowCreate` y `allowBulk` desactivan cualquiera de las acciones en este Gantt. De lo contrario siguen los permisos del propio job.

## Artículos relacionados

- [Gantt Chart](using-the-gantt.md), construir la planificación de un proyecto en el Gantt.
