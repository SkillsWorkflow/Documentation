---
id: excel-export-and-import
title: Exportación e importación de Excel
description: "Exporte la cotización de un presupuesto a Excel, modifíquela en una hoja de cálculo e impórtela de nuevo con una vista previa de lo que cambia."
sidebar_label: Exportación e importación de Excel
sidebar_position: 7
---

**Exportar a Excel** escribe las líneas de la cotización en una hoja de cálculo. **Importar desde Excel** lee una hoja de cálculo con la misma estructura, actualiza las líneas que reconoce y añade las nuevas.

## Exportar

Haga clic en **Exportar a Excel**. El archivo lleva el número del presupuesto, o su nombre cuando no tiene número. Tiene una fila por línea, con estas columnas:

| Columna | Contiene |
|---|---|
| **Entregable** | El nombre del entregable |
| **Tipo** | **Recurso**, **Servicio** o **Gasto** |
| **Tipología / servicio / tipo de gasto** | El grupo de tipología, el servicio o el tipo de gasto |
| **Departamento** | El departamento de un recurso |
| **Descripción** | La descripción de la línea |
| **Proveedor** | El proveedor de un servicio |
| **Cant. u horas** | La cantidad, o las horas de un recurso |
| **Coste unitario** | El coste unitario |
| **Venta unitaria** | El precio unitario de venta |
| **ID (mantener para actualizar)** | El identificador de la línea |

Un entregable sin líneas tiene una fila con solo su nombre.

## Importar

1. Haga clic en **Importar desde Excel** y elija el archivo.
2. Revise la vista previa. Muestra cuántas líneas se actualizarán, se añadirán o quedarán sin cambios, y las filas que se omitirán y el motivo.
3. Haga clic en **Importar**.
4. Revise el resultado y haga clic en **Guardar**.

No se guarda nada hasta que guarda. Los valores que la página no pudo encontrar, como un grupo de tipología o un proveedor que no conoce, se enumeran después de la importación y quedan como estaban.

![img-box-shadow-popup](/img/quotes/09-import.png)
<figcaption>La vista previa de la importación antes de aplicar los cambios</figcaption>

## Reglas y comportamiento

- Una fila con un **ID (mantener para actualizar)** actualiza esa línea. Solo se escriben las celdas que cambiaron.
- Una fila sin ID pasa a ser una línea nueva en el entregable cuyo nombre figura en **Entregable**.
- **Tipo** también acepta las palabras en inglés y en portugués para recurso, servicio y gasto.
- Los gastos no toman la venta unitaria del archivo. Se venden al coste más la inflación del presupuesto.
- Una primera fila con los nombres de las columnas se omite.

## Artículos relacionados

- [Crear una cotización](/docs/product/commercial/estimates/quotes/build-a-quote)
- [Guardado, borradores y versiones](/docs/product/commercial/estimates/quotes/saving-drafts-and-versions)
