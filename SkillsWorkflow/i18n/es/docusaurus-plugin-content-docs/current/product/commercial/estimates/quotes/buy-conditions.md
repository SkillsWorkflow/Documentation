---
id: buy-conditions
title: Condiciones de compra
description: "Divida la compra de una línea de servicios por proveedor, condición de pago y fecha, por porcentaje o por valor."
sidebar_label: Condiciones de compra
sidebar_position: 4
---

Las condiciones de compra dividen la compra de una línea de servicios en partes. Cada parte tiene su propio proveedor, condición de pago y fecha, y es un porcentaje o un valor del coste de la línea.

## Abrir las condiciones de compra

En una línea de servicios guardada, haga clic en su botón **Condiciones de Compra**, o pulse `Alt`+`Enter`.

Una línea nueva aún no tiene condiciones de compra. Guárdela primero.

El cuadro de diálogo trabaja sobre la línea guardada. Los cambios que no ha guardado en la línea no forman parte de él.

![img-box-shadow-popup](/img/quotes/05-buy-conditions.png)
<figcaption>Una línea de servicios comprada en dos partes, en fechas distintas</figcaption>

## Añadir una condición de compra

1. Haga clic en **+ Añadir condición de compra**. La fila nueva toma el proveedor y la condición de pago de la línea, la fecha de hoy y la parte del coste que aún está libre.
2. Cambie el **Provedor**, la **Condición de Pagamento** o la **Fecha** si es necesario.
3. Elija el **Tipo**: **Porcentaje** o **Valor**. Escriba el **%** o el **Valor**, y el otro se calcula a partir del coste de la línea.
4. Haga clic en **Guardar condiciones de compra**.

Las condiciones de compra se guardan al hacer clic en **Guardar condiciones de compra**, por separado del resto de la cotización.

El encabezado muestra el coste de la línea y cuánto de él está asignado. El botón al final de una fila la quita.

## Reglas y comportamiento

- Cada fila necesita un proveedor, una condición de pago y una fecha.
- Los porcentajes y los valores deben ser mayores que 0.
- Un valor no puede ser mayor que el coste de la línea.
- Las condiciones de compra de una línea no pueden sumar más del 100% de su coste.
- Al cerrar el cuadro de diálogo con cambios sin guardar, se pregunta si se descartan.

## Artículos relacionados

- [Precios y márgenes](/docs/product/commercial/estimates/quotes/prices-and-margins)
- [Ordenes de Compra](/docs/product/billing-and-costs/billing/purchase-orders)
