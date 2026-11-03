---
id: approval-and-billing
title: Aprobación y facturación
description: "Apruebe en la pestaña Presupuesto lo que el cliente aceptó, muestre solo los entregables aprobados y planifique cómo se factura cada entregable."
sidebar_label: Aprobación y facturación
sidebar_position: 5
---

Los entregables y las líneas tienen una casilla **Aprobado** para lo que el cliente aceptó. Cada entregable tiene además un plan de facturación: las condiciones de facturación con las que se facturará.

## Aprobar

Marque **Aprobado** en un entregable o una línea. **Aprobar todo** marca todos los entregables y líneas que puede aprobar. Cuando todo está aprobado, el botón pasa a ser **Desaprobar todo** y los desmarca.

Las aprobaciones se guardan al hacer clic en **Guardar**.

El botón de filtro sobre los entregables, o `Alt`+`A`, muestra solo los entregables aprobados. Púlselo de nuevo para mostrarlos todos.

## Abrir el plan de facturación

El plan de facturación está debajo de las líneas de cada entregable. **Facturación** lo muestra u oculta en todos los entregables. `Alt`+`B` va al plan de facturación, y pulsarlo de nuevo lo oculta.

El encabezado de cada plan muestra el **Total** del entregable, lo que se ha **Facturado**, lo que queda **A facturar** y cuánto está **Asignado**.

![img-box-shadow](/img/quotes/06-billing-plan.png)
<figcaption>El plan de facturación de un entregable, dividido en dos condiciones de facturación</figcaption>

## Añadir una condición de facturación

1. Empiece a escribir en **Escriba para añadir una condición de facturación…**.
2. Elija el **Cliente de Facturación** y la **Condición de Pagamento**.
3. Elija el **Tipo**: **Porcentaje** o **Valor**, y escriba el importe. El otro se calcula a partir de lo que queda por facturar.
4. Defina la **Fecha**.
5. Haga clic en **Guardar**.

Una condición de facturación nueva empieza con el porcentaje que aún está libre.

## Reglas y comportamiento

- Cada condición de facturación necesita un cliente de facturación y una condición de pago.
- Los porcentajes y los valores deben ser mayores que 0.
- Un valor no puede superar el valor del entregable.
- Las condiciones de facturación de un entregable no pueden sumar más del 100%.

## Artículos relacionados

- [Factura un Presupuesto](/docs/product/commercial/estimates/invoice-estimate)
- [Resumen](/docs/product/commercial/estimates/quotes/overview)
