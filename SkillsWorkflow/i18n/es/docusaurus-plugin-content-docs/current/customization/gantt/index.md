---
id: index
title: Gantt
description: "Seleccionar filas en el Gantt de Skills Workflow, duplicar jobs y editar varios jobs a la vez con la Acción masiva."
sidebar_label: Gantt
sidebar_position: 1
---

# Gantt

El Gantt muestra los jobs de un proyecto en una línea de tiempo, con la jerarquía de los jobs en una cuadrícula a la izquierda. Esta página explica cómo trabajar con las filas de esa cuadrícula: seleccionarlas, duplicar jobs y modificar varios jobs en una sola operación.

Para el recorrido completo de construcción de una planificación — crear jobs padre e hijo, dependencias, fechas y % completado — consulte [Gantt Chart](../../university/projects%20management/gantt-chart.md) en University.

## Disponibilidad

El Gantt lo proporciona un workspace. Lo que se describe aquí se aplica a la vista de Gantt configurada en un workspace, y los botones de la barra de herramientas solo aparecen cuando ese workspace activa la barra de herramientas del Gantt.

Cada una de las dos acciones sobre filas tiene sus propios requisitos:

- **Duplicate** requiere permiso para crear jobs.
- **Bulk action** requiere permiso para editar jobs, y el job debe estar configurado para edición masiva — la misma configuración que proporciona el botón de acción masiva en las listas.

Cuando no se cumple un requisito, el botón no se muestra, en lugar de aparecer desactivado.

## Seleccionar filas

La primera columna de la cuadrícula del Gantt es una columna de selección, igual a la columna de selección utilizada en las listas de Skills Workflow. Sus casillas aparecen al pasar el ratón sobre una fila y permanecen visibles mientras la fila esté seleccionada.

- Marque la casilla de una fila para seleccionarla.
- Marque la casilla del encabezado de la columna para seleccionar todas las filas.
- Marcar una fila padre también selecciona todo lo que está debajo de ella.
- Al hacer clic en la celda WBS de una fila se selecciona la fila completa. Mantenga **Ctrl** (**Cmd** en macOS) para añadir o quitar una fila de la selección, o **Shift** para extender la selección desde la última fila en la que hizo clic.

Al hacer clic en cualquier otra celda se selecciona esa celda en lugar de la fila, de modo que copiar y pegar valores entre celdas sigue funcionando como en una hoja de cálculo.

![img-box-shadow](/img/gantt/01-row-selection.png)
<figcaption>Columna de selección con una fila padre y sus hijos seleccionados</figcaption>

## Duplicar jobs

**Duplicate** crea una copia de cada fila seleccionada.

1. Seleccione las filas que desea copiar.
2. Haga clic en **Duplicate** en la barra de herramientas.
3. Revise las copias y haga clic en **Save**.

Las copias se colocan junto a las filas desde las que se copiaron y comienzan en Borrador. Solo existen en la vista hasta que guarde: es el clic en **Save** lo que las crea como jobs.

Un padre duplicado se lleva consigo toda su estructura, por lo que seleccionar un padre junto con sus hijos sigue produciendo una copia de esa rama, y no una copia por fila.

**Duplicate** no afecta a lo que haya copiado con **Copy row**, así que puede duplicar filas sin perder el portapapeles.

![img-box-shadow](/img/gantt/02-duplicate.png)
<figcaption>Filas duplicadas creadas en Borrador debajo de las originales</figcaption>

## Editar varios jobs a la vez

**Bulk action** abre el mismo cuadro de diálogo de edición masiva utilizado en las listas, aplicado a las filas seleccionadas en el Gantt.

1. Guarde los cambios pendientes en el Gantt.
2. Seleccione las filas que desea modificar.
3. Haga clic en **Bulk action** en la barra de herramientas.
4. Elija el campo y el valor que desea aplicar y ejecute la operación.

La acción masiva escribe directamente en los jobs seleccionados. Al terminar, el Gantt se recarga para que la cuadrícula muestre el resultado guardado.

![img-box-shadow-popup](/img/gantt/03-bulk-action.png)
<figcaption>Acción masiva aplicada a las filas seleccionadas en el Gantt</figcaption>

## Reglas y comportamiento

- **Guarde su trabajo antes de una acción masiva.** Como la acción masiva recarga el Gantt al cerrarse, no puede ejecutarse mientras haya cambios sin guardar. Skills Workflow muestra un mensaje pidiéndole que guarde primero.
- **Solo los jobs guardados pueden editarse de forma masiva.** Las filas creadas en el Gantt pero aún no guardadas todavía no tienen un job detrás, por lo que quedan fuera de la operación y un mensaje indica que se omitieron. Guarde primero si desea incluirlas.
- **Las acciones masivas están limitadas a un número máximo de jobs a la vez.** Seleccionar más del límite configurado muestra un mensaje en lugar de ejecutar la operación.
- **Las filas duplicadas no son jobs hasta que guarde.** Salir del Gantt sin guardar las descarta, y Skills Workflow avisa cuando abandona la página con cambios sin guardar.
- **Save solo se activa cuando hay algo que guardar**, de modo que no pueda pulsarse sin efecto.

## Configuración

La barra de herramientas del Gantt y sus acciones sobre filas se configuran en el componente Gantt del workspace:

- La barra de herramientas, incluidos **Duplicate** y **Bulk action**, solo se muestra cuando el componente Gantt está configurado para mostrarla.
- El número máximo de jobs que puede abarcar una única acción masiva es configurable en el componente. Cuando no está definido, el límite es de 100 jobs.
- El permiso para crear y para editar de forma masiva sigue la configuración del propio job, y cada uno también puede desactivarse en un Gantt concreto mediante los parámetros del componente.

## Artículos relacionados

- [Gantt Chart](../../university/projects%20management/gantt-chart.md) — construir la planificación de un proyecto en el Gantt.
