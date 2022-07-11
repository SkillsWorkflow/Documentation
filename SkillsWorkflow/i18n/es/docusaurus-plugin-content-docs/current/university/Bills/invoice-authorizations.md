---
id:  invoice-authorizations
title: Autorizaciones de factura
sidebar_label: 1. Crear Autorizaciones de factura
sidebar_position: 1
---


## Cómo crear autorizaciones de factura

Puede crear solicitudes de factura en el sistema y de esta manera informar al equipo financiero para que proceda con la creación/sincronización del documento al sistema financiero externo y genere la factura final.

Lo que genera el sistema es una solicitud de facturación, no una factura final, esta debe generarse siempre en el sistema financiero (Primavera, Sage, NAV, SAP, etc).
Definición de condiciones de facturación:


### Condiciones generales

Para emitir una solicitud de facturación, dentro del presupuesto aprobado por el cliente, debe navegar a la opción "condiciones de facturación".

### Condiciones generales

Para emitir una solicitud de facturación, dentro del presupuesto aprobado por el cliente, debe navegar a la opción "condiciones de facturación".

Si el cliente comercial tiene asociado un cliente financiero, el sistema sugerirá automáticamente el cliente y las condiciones de pago predefinidas.

Puede definir el porcentaje de facturación, la referencia (orden de compra del cliente) y las fechas.

Tenga en cuenta que si para el presupuesto general tiene más de una condición de facturación, puede agregar tantas líneas como desee e incluso tener diferentes clientes.
Si el cliente comercial tiene asociado un cliente financiero, el sistema sugerirá automáticamente el cliente y las condiciones de pago predefinidas.

Puede definir el porcentaje de facturación, la referencia (orden de compra del cliente) y las fechas.

Tenga en cuenta que si para el presupuesto general tiene más de una condición de facturación, puede agregar tantas líneas como desee e incluso tener diferentes clientes.

Después de establecer las condiciones de facturación que desea aplicar, navegue hasta el feed y cambie el estado del flujo de trabajo a Factura, generando las autorizaciones de factura necesarias.

Después de establecer las condiciones de facturación que desea aplicar, navegue hasta el feed y cambie el estado del flujo de trabajo a Factura, generando las autorizaciones de factura necesarias.
<figure>

![img-box-shadow](/img/university/bills/bills-lesson1-1.png)
<figcaption></figcaption>
</figure>

### Condiciones para el entregable

Puede establecer diferentes condiciones de facturación para las líneas de entrega de clientes.

Entonces, si tiene, por ejemplo, un presupuesto anual de tarifas, en el que genera una factura todos los meses, puede hacer el plan de facturación anual, si tiene la orden de compra del cliente.

En las condiciones generales de facturación, debe hacer clic en aplicar a todos. El sistema aplicará las condiciones definidas en la opción general a todos los entregables del cliente.

Puede ir a cada una de las líneas, presionar la opción de detalles y manipular la información de cada una de las líneas si es necesario, ajustando por ejemplo las fechas o PO.

En el ejemplo mencionado anteriormente de planes de facturación anual, debe manipular fechas y órdenes de compra.

Puede establecer condiciones en las líneas ya sea por porcentaje o por valor.

Puede establecer diferentes condiciones de facturación para las líneas de entrega de clientes.
Entonces, si tiene, por ejemplo, un presupuesto anual de tarifas, en el que genera una factura todos los meses, puede hacer el plan de facturación anual, si tiene la orden de compra del cliente.

En las condiciones generales de facturación, debe hacer clic en aplicar a todos. El sistema aplicará las condiciones definidas en la opción general a todos los entregables del cliente.

Puede ir a cada una de las líneas, presionar la opción de detalles y manipular la información de cada una de las líneas si es necesario, ajustando por ejemplo las fechas o PO.

En el ejemplo mencionado anteriormente de planes de facturación anual, debe manipular fechas y órdenes de compra.

Puede establecer condiciones en las líneas ya sea por porcentaje o por valor.
<figure>

![img-box-shadow](/img/university/bills/bills-lesson1-2.png)
<figcaption></figcaption>
</figure>


:::important
Si las condiciones de facturación son las mismas para más de una línea aprobada, al ir al feed y ajustar el flujo a "facturar" el sistema genera una factura con dos líneas.

Si las condiciones de facturación son diferentes para todas las líneas, el sistema generará tantas facturas como condiciones definidas
:::

Al navegar al feed y cambiar el estado del flujo de trabajo a "facturar", el sistema emitirá tantas facturas como se definan en las condiciones de facturación. Para consultarlas, puede navegar hasta el área de facturas.


<figure>

![img-box-shadow](/img/university/bills/bills-lesson1-3.png)
<figcaption></figcaption>
</figure>

Tenga en cuenta que la autorización de la factura se enviará al sistema financiero externo que emite los documentos finales.

Si se activa la integración con el sistema financiero, el campo de número externo se actualizará con el número definitivo. Puedes importar el PDF de la factura, para que tengas acceso rápido al documento enviado al cliente.
Para validar qué documento final generó tu autorización de factura, debes validar el estado del documento (integrado) y el campo con el número externo.

Para imprimir, debe navegar hasta el documento de autorización de la factura, haciendo clic en la línea que desea validar.

El sistema mostrará el detalle del documento, valores, servicio contratado, etc.

Para imprimir, simplemente haga clic en la opción pdf en la esquina superior derecha y se generará un documento PDF que puede descargar y enviar por correo electrónico si es necesario.

<figure>

![img-box-shadow](/img/university/bills/bills-lesson1-4.png)
<figcaption>Detalhe autorização fatura</figcaption>
</figure>

### Detalle de autorización de factura

También puede consultar la lista de todas sus autorizaciones de facturas navegando por los módulos en el navegador a su izquierda.

En la lista de autorizaciones de facturas, puede aplicar diferentes filtros, tales como: cliente, proyecto, presupuesto

<figure>

![img-box-shadow](/img/university/bills/bills-lesson1-5.png)
<figcaption>Lista de autorizações fatura</figcaption>
</figure>
