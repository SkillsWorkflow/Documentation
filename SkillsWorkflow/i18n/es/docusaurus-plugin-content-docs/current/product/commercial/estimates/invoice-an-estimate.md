---
id:  invoice-estimate
title: Factura un Presupuesto
sidebar_label: Factura un Presupuesto
sidebar_postion: 2
---

## Crear Presupuestos de retención

Los Presupuestos se pueden crear como anticipos y el sistema mostrará automáticamente sus valores.

Verifique cómo puede crear la estimación en la Lección 1 en la sección "Presupuestos".

Para generar un presupuesto de retención, vaya a la pestaña de información general de la estimación, marque la opción "Recurrencia" y presione el botón Guardar.

<figure>

![img-box-shadow](/img/university/estimates/estimates-lesson2-1.png)
<figcaption></figcaption>
</figure>

El sistema mostrará un nuevo campo llamado "Número de representante" a nivel de entregable/cliente. 

<figure>

![img-box-shadow](/img/university/estimates/estimates-lesson2-2.png)
<figcaption></figcaption>
</figure>

Puede ajustar Rep.Number al número de veces que se deben repetir los valores.

En el ejemplo a continuación, el campo Número de representante está marcado como 6 (es una estimación de retención de 6 meses) y el sistema multiplicará los valores de costos y los valores de ingresos por el Número de representante.

<figure>

![img-box-shadow](/img/university/estimates/estimates-lesson2-3.png)
<figcaption></figcaption>
</figure>

:::note
Tenga en cuenta que los valores en Terceros, Gastos y Recursos se mostrarán con los mismos valores.
:::

Después de la aprobación del cliente, el sistema mostrará la información del proyecto con la información de recurrencia.

A nivel de proyecto, los gastos de terceros y estarán disponibles en "Costos planificados"


<figure>

![img-box-shadow](/img/university/estimates/estimates-lesson2-4.png)
<figcaption></figcaption>
</figure>

Los recursos estarán disponibles en "Tiempo planificado"

<figure>

![img-box-shadow](/img/university/estimates/estimates-lesson2-5.png)
<figcaption></figcaption>
</figure>

## Aprobar los entregables antes de facturar {#approve-deliverables}

Solo se facturan los entregables marcados como **Aprobado**. Un servicio nuevo se crea ya aprobado, pero un entregable nuevo no. Antes de facturar, abra el presupuesto y marque como **Aprobado** los entregables que va a facturar.

El workflow puede hacerlo por usted. Cuando la acción **ApproveItems** está en una transición, pasar el presupuesto por esa transición marca como aprobados todos los entregables y todos los servicios del presupuesto. Su administrador puede decirle si el workflow de presupuestos la usa. Consulte [Acciones de Workflow](/docs/administration/workflows/workflow-actions).

## Error: "Debe haber al menos una condición con el valor de facturación / porcentaje." {#error-billing-condition-value-percentage}

Este mensaje aparece al facturar un presupuesto cuando ninguna de sus condiciones de facturación tiene un importe que se pueda facturar. Revise el presupuesto en este orden:

1. Al menos un entregable está marcado como **Aprobado**. Solo se facturan los entregables aprobados, y las condiciones de facturación solo se comprueban en esos entregables.
2. Si un entregable aprobado tiene condiciones de facturación propias, al menos una de ellas necesita un **Importe** o un **Porcentaje** distinto de 0. Cuando todos los entregables aprobados tienen condiciones de facturación propias, no se usan las **Condiciones de Facturación** del presupuesto.
3. En las **Condiciones de Facturación** del presupuesto, rellene el campo que corresponde al **Tipo de Cantidad**: **Porcentaje** cuando el tipo es Porcentaje, **Importe** cuando el tipo es Importe. Un valor escrito en el otro campo no cuenta.

La suma de las condiciones de facturación del presupuesto no puede superar el 100% del valor del presupuesto sin IVA.

## Artículos relacionados

- [Crear un Estimado](/docs/product/commercial/estimates/create-estimate)
- [Autorizaciones de factura](/docs/product/billing-and-costs/billing/invoice-authorizations)
- [Notas de credito](/docs/product/billing-and-costs/billing/credit-notes)
- [Errores y preguntas frecuentes](/docs/product/troubleshooting)
