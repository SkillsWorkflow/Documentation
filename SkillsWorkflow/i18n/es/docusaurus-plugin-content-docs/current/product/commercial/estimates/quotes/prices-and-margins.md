---
id: prices-and-margins
title: Precios y márgenes
description: "Cambie precios en la pestaña Presupuesto, vuelva a poner precio a los recursos desde la tabla de tarifas, desbloquee servicios y consulte el resumen del presupuesto y su objetivo de margen."
sidebar_label: Precios y márgenes
sidebar_position: 2
---

Los precios de la pestaña Presupuesto siguen la configuración del presupuesto y su fórmula. Las reglas exactas están en [Reglas de cálculo](/docs/product/commercial/estimates/quotes/calculation-rules).

## Cambiar un precio

Cambie un coste, una cantidad, las horas, el **% Comisión** o un valor de venta, y los valores relacionados de esa línea se ajustan. Los totales del entregable y el resumen del presupuesto se actualizan mientras escribe.

En una línea de recursos, elegir el **Grupo de Tipología** o el **Usuario** lee las tarifas de la tabla de tarifas del presupuesto.

En una línea de servicios, elegir el **Servicio** lee su coste de la **Tabla de Precios** del presupuesto, cuando la tiene, y la comisión de agencia del cliente para ese servicio.

## Volver a poner precio a los recursos desde la tabla de tarifas

**Apply table rates** vuelve a aplicar la tabla de tarifas a todas las líneas de recursos guardadas.

1. Guarde o deshaga los cambios.
2. Haga clic en **Apply table rates** y confirme.

Cada línea de recursos guardada que tiene un coste en la tabla de tarifas recibe de nuevo sus tarifas, pierde su descuento y se guarda. Una línea para la que la tabla de tarifas no tiene coste mantiene sus valores.

## Servicios bloqueados

Una línea de servicios enviada como solicitud a otra empresa está bloqueada, y su icono de candado lo indica. No se puede modificar.

Para desbloquearla, haga clic derecho sobre ella y elija **Desbloquear**, seguido del número de líneas. Seleccione antes varias líneas para desbloquearlas juntas. La opción requiere permiso para desbloquear servicios.

## Resumen del presupuesto

El resumen de la derecha suma toda la cotización y se actualiza mientras escribe. Al guardar, se recalculan los totales.

![img-box-shadow](/img/quotes/04-summary.png)
<figcaption>El resumen del presupuesto con su objetivo de margen y la lista Revisar antes de enviar</figcaption>

- **Comisión Final %** es el margen de todo el presupuesto, con el rango objetivo debajo.
- **Total Venta** y **Total Costo** suman los entregables.
- **Por tipo de línea** reparte la venta, el coste y el margen entre recursos, servicios y gastos, con las horas de los recursos.
- **Horas por grupo de tipología** enumera las funciones con más horas.

**Revisar antes de enviar** aparece cuando algo requiere atención:

- el margen está por debajo del objetivo;
- hay líneas sin campos obligatorios;
- hay líneas sin cantidad ni horas;
- hay líneas sin valor de venta;
- algunas líneas están aprobadas y otras no.

**Ocultar el resumen** y **Mostrar el resumen** cierran y abren el panel.

## Artículos relacionados

- [Reglas de cálculo](/docs/product/commercial/estimates/quotes/calculation-rules)
- [Aprobación y facturación](/docs/product/commercial/estimates/quotes/approval-and-billing)
- [Como administrar tablas Rate Card](/docs/product/commercial/rates/rate-cards)
- [Tablas de Precios](/docs/product/commercial/rates/price-tables)
