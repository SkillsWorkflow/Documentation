---
id: calculation-rules
title: Reglas de cálculo
description: "Cómo pone precio la pestaña Presupuesto a los recursos, servicios y gastos: las fórmulas del presupuesto, de dónde sale cada valor, el IVA y los totales del entregable y del presupuesto."
sidebar_label: Reglas de cálculo
sidebar_position: 3
---

La pestaña Presupuesto pone precio a cada línea con la fórmula definida en la empresa y los valores del presupuesto. La página muestra los resultados mientras escribe, y Skills Workflow recalcula los totales al guardar.

## Qué fórmula se aplica

La **Estimación del Tipo de Cálculo** de la empresa define la fórmula de los recursos y los gastos. **Tipo de Cálculo de Estimación de Servicio** la define para los servicios. Una empresa guardada sin **Tipo de Cálculo de Estimación de Servicio** toma su **Estimación del Tipo de Cálculo**.

Una condición de pago puede tener su propio **Tipo de Cálculo de Estimación de Servicio**. Las líneas de servicios con esa condición de pago lo usan.

Hay cinco fórmulas: **Default**, **Markup**, **MarkupWithVat**, **MarkupWithVatAndMargin** y **MarkupOnlyOnVat**.

## De dónde salen los valores

| Valor | De dónde sale | Se usa para |
|---|---|---|
| **Inflación %** | La pestaña **Info** del presupuesto | Recursos, servicios y gastos |
| **Overheads %** | La pestaña **Info** del presupuesto | Recursos |
| **Margen de Recursos %** | La pestaña **Info** del presupuesto | Recursos |
| **Margen de Provedores %** | La pestaña **Info** del presupuesto | El **% Comisión** de una línea de servicios nueva |
| **FTE** | La pestaña **Info** del presupuesto | **Utilización** de los recursos |
| **Rate Card** y **Columna Rate Card** | La pestaña **Info** del presupuesto | **Tabla** y **Unitario Costo** de los recursos |
| **Columna Rate Card Venta** | La pestaña **Info** del presupuesto | **Unitario Venta** de los recursos, cuando la tabla de tarifas tiene un valor de venta para la función |
| **Tabla de Precios** y **Precio** | La pestaña **Info** del presupuesto | **Unitario Costo** de los servicios, por servicio |
| Comisión de agencia | El cliente, por servicio | **% Comisión** de una línea de servicios con ese servicio |
| **IVA** | El entregable | IVA de todas sus líneas |

## Recursos

Una línea de recursos toma su **Tabla** y su **Unitario Costo** de la tabla de tarifas, para su grupo de tipología, usuario, departamento y el mercado del entregable.

Sin descuento ni **Unitario Venta** escrito, su **Unitario Venta** sigue el **Unitario Costo**:

| Fórmula | Unitario Venta |
|---|---|
| **Default**, **MarkupOnlyOnVat** | Unitario Costo × (1 + Inflación %) × (1 + Overheads %) × (1 + Margen de Recursos %) |
| **Markup**, **MarkupWithVat**, **MarkupWithVatAndMargin** | Unitario Costo × (1 + Inflación %) × (1 + Overheads %) ÷ (1 − Margen de Recursos %) |

Cuando la tabla de tarifas tiene un valor de venta para la función en la **Columna Rate Card Venta**, el **Unitario Venta** es ese valor.

Los totales siguen las horas:

- **Total Costo** = Unitario Costo × Horas
- **Total Venta** = Unitario Venta × Horas
- **Utilización** = Horas ÷ FTE

## Servicios

**Total Costo** = Unitario Costo × #Costo, menos el descuento de la línea. El descuento es el **Descuento %** de la línea, o el descuento de la condición de pago cuando la línea no tiene ninguno.

Cuando cambia **#Costo**, **#Venta** toma el mismo valor.

Una línea de servicios nueva calcula su **Unitario Venta** a partir de su coste y su **% Comisión**:

| Fórmula | Unitario Venta |
|---|---|
| **Default**, **MarkupOnlyOnVat** | Total Costo × (1 + Inflación %) × (1 + % Margen) × (1 + % Comisión) ÷ #Venta |
| **Markup**, **MarkupWithVat**, **MarkupWithVatAndMargin** | Total Costo × (1 + Inflación %) × (1 + % Margen) ÷ (1 − % Comisión) ÷ #Venta |

**% Margen** es el margen de negociación propio de la línea, y suele ser 0. Las líneas con una condición de pago **Directo Cliente**, y las líneas con un descuento del 100%, siguen otras reglas.

El **Unitario Venta** se vuelve a calcular cuando cambia el **% Comisión** o el **% Margen**.

En una línea guardada, cambiar el coste o la cantidad mantiene el **Unitario Venta**, y el **% Comisión** cambia. En una empresa con **Porcentaje de Comisión fijo**, el **Unitario Venta** sigue el coste siempre.

Escribir el **Unitario Venta** o el **Total Venta** mantiene ese precio y calcula a partir de él el **% Comisión** y la **Comisión**. Un **Total Venta** escrito define **Unitario Venta** = Total Venta ÷ #Venta.

## Gastos

Los gastos se venden al coste más la inflación:

- **#Venta** = #
- **Unitario Venta** = Unitario Costo × (1 + Inflación %)
- **Total Costo** = Unitario Costo × #, menos el descuento de la línea

Una línea de gastos sin descuento tiene **Total Venta** = Unitario Venta × #.

## IVA

El IVA se aplica a una línea sin condición de pago, o con una condición de pago que tiene **Tiene Impuestos**. El tipo es el **IVA** del entregable.

| Fórmula | Total Venta con IVA |
|---|---|
| **Default**, **Markup** | Total Venta × (1 + IVA) |
| **MarkupWithVat**, **MarkupOnlyOnVat** | Total Venta ÷ (1 − IVA) |
| **MarkupWithVatAndMargin**, servicios | (Total Venta − Comisión) ÷ (1 − % Comisión − IVA) |
| **MarkupWithVatAndMargin**, recursos | (Total Costo + overheads) ÷ (1 − Margen de Recursos % − IVA) |

Para los recursos con **MarkupWithVatAndMargin**, overheads = Overheads % × Unitario Costo × (1 + Inflación %) × Horas.

Estas reglas no cubren las líneas con una condición de pago **Directo Cliente**, los gastos con **MarkupWithVatAndMargin**, ni los recursos con precio de la **Columna Rate Card Venta** con **MarkupWithVatAndMargin**.

## Redondeo

Con **Aplicar arredondamento de unitário** en la empresa, los precios unitarios se redondean a los decimales del precio de la moneda.

## Entregables

- **Total Costo** = la suma del Total Costo de las líneas × Nº Rep.
- **Total Venta** = la suma del Total Venta de las líneas × Nº Rep., más la comisión de agencia, menos el **Descuento** del entregable
- **Comisión Final** = Total Venta − Total Costo
- **Comisión Final %** = Comisión Final ÷ Total Venta

**Nº Rep.** solo se muestra en los presupuestos de iguala. Empieza con el número de meses entre la **Fecha de Inicio** y la **Fecha de Fin** del entregable. En los demás presupuestos es 1.

## Resumen del presupuesto

- **Total Venta** y **Total Costo** son las sumas de los entregables.
- **Comisión Final %** = 1 − Total Costo ÷ Total Venta.
- En **Por tipo de línea**, la venta de cada tipo de línea es la suma del Total Venta de sus líneas × Nº Rep. × (1 − el Descuento % del entregable). Su coste es la suma del Total Costo de las líneas × Nº Rep., y su % es 1 − coste ÷ venta.

Las reglas del plan de facturación y de las condiciones de compra están en [Aprobación y facturación](/docs/product/commercial/estimates/quotes/approval-and-billing) y [Condiciones de compra](/docs/product/commercial/estimates/quotes/buy-conditions).

## Artículos relacionados

- [Precios y márgenes](/docs/product/commercial/estimates/quotes/prices-and-margins)
- [Como administrar tablas Rate Card](/docs/product/commercial/rates/rate-cards)
- [Tablas de Precios](/docs/product/commercial/rates/price-tables)
