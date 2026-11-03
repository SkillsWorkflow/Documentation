---
id: build-a-quote
title: Crear una cotización
description: "Añada entregables y sus servicios, gastos y recursos a la cotización de un presupuesto, edite las celdas como en una hoja de cálculo y complete los campos obligatorios."
sidebar_label: Crear una cotización
sidebar_position: 1
---

Una cotización es una lista de entregables. Cada entregable contiene los servicios, gastos y recursos que forman su coste y su venta.

## Añadir entregables y líneas

Cada lista termina con una fila vacía: **Escriba para añadir un entregable…**, **Escriba para añadir un servicio de terceros…**, **Escriba para añadir un gasto…** o **Escriba para añadir un recurso…**. Empiece a escribir en esa fila para crear el entregable o la línea.

Un entregable nuevo toma el **IVA** por defecto del presupuesto. Su **Fecha de Inicio** y su **Fecha de Fin** son la fecha y la fecha de vencimiento del presupuesto.

En **Servicios**, la fila vacía sugiere el servicio del propio entregable. Pulse `Enter` para añadirlo. Una línea con el servicio del entregable toma la descripción del entregable.

![img-box-shadow](/img/quotes/02-lines.png)
<figcaption>Las líneas de un entregable, con el servicio sugerido en la fila vacía</figcaption>

## Añadir varias funciones a la vez

En **Recursos**, la lista **Grupo de Tipología** busca cualquier parte de la función, el departamento o la empresa. Marque varios grupos de tipología con sus casillas o con `Ctrl`+`Enter` (`⌘`+`Enter` en macOS) y, a continuación, pulse `Enter` o haga clic en **Añadir**. Cada uno pasa a ser una línea de recursos.

## Editar celdas

Seleccione una celda y escriba, o pulse `Enter` o `F2`. `Enter` mantiene el valor y baja. `Esc` cancela la edición.

`Shift`+`Enter` abre la descripción en un cuadro más grande.

En una celda de lista, la lista se abre mientras escribe. Use `↑` y `↓` para elegir y `Enter` para seleccionar.

## Copiar, pegar y rellenar

- `Ctrl`+`C` y `Ctrl`+`V` copian y pegan celdas, también desde y hacia Excel. Pegar en las filas vacías añade líneas.
- `Shift` con las flechas, o `Shift`+clic, selecciona varias celdas. `Ctrl`+`D` las rellena hacia abajo desde la primera fila seleccionada.
- `Alt`+`C` copia las filas seleccionadas y `Alt`+`V` las pega como filas nuevas, también en otro presupuesto. Las mismas opciones están en el menú del clic derecho.
- `Delete` vacía las celdas seleccionadas.

En macOS, use `⌘` en lugar de `Ctrl`.

## Mover y quitar filas

Arrastre un entregable o una línea por su tirador, o pulse `Ctrl`+`Shift`+`↑` o `↓`. Una línea nueva se puede mover una vez guardada. Mientras una lista está ordenada o filtrada, sus filas permanecen en su sitio.

`Ctrl`+`Backspace` (`⌘`+`⌫` en macOS) quita la fila, y pulsarlo de nuevo la restaura. La fila se elimina al guardar. Un entregable que tiene líneas, o que ya se ha facturado, no se puede quitar.

## Campos obligatorios

Una celda con fondo amarillo claro es obligatoria y aún está vacía.

Si guarda con un campo obligatorio vacío, el guardado se detiene. La página enumera lo que falta, pone esas celdas en rojo, abre el entregable y la sección, y va al primero de ellos.

![img-box-shadow](/img/quotes/03-required.png)
<figcaption>Un campo obligatorio vacío: la celda se pone roja al guardar</figcaption>

## Artículos relacionados

- [Precios y márgenes](/docs/product/commercial/estimates/quotes/prices-and-margins)
- [Columnas, ordenación y filtros](/docs/product/commercial/estimates/quotes/columns-sorting-and-filters)
- [Atajos de teclado](/docs/product/commercial/estimates/quotes/keyboard-shortcuts)
