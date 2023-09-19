---
id: create-estimate
title: Crear un presupuesto
sidebar_label: 6. Crear un presupuesto
sidebar_position: 6
---

Los presupuestos pueden estar vinculados a tarifas o crearse directamente bajo una Compañía, Prospectos o Actividades.

Si desea crear un presupuesto asociado a una tarifa específica, por favor consulte nuestra lección 3 en la sección de contratos.

Para generar un presupuesto bajo una Compañía o Actividad, debe navegar hasta el documento en el que desea generar el presupuesto, presionar la opción + y seleccionar "presupuesto".

<figure>

![img-box-shadow](/img/university/estimates/estimates-lesson1-1.png)

<figcaption></figcaption>
</figure>

Complete los siguientes campos:

- **Departamento** - El sistema sugerirá el departamento del usuario por defecto, pero puede seleccionar otros departamentos planificables y configurar flujos de trabajo diferentes si es necesario.
- **Tipo de presupuesto** - Puede tener varios tipos de presupuesto que permitirán diferentes configuraciones, como flujos de trabajo, informes extraíbles, etc.
- Haga clic en la marca de verificación para enviar la publicación. El sistema mostrará un mensaje emergente con la confirmación de que el presupuesto se ha creado correctamente.

<figure>

![img-box-shadow](/img/university/estimates/estimates-lesson1-2.png)

<figcaption></figcaption>
</figure>

En la pestaña de Información, puede completar los siguientes campos:

- **Condición de pago** - Puede ser heredada del Cliente o elegida manualmente.
- **Moneda** - Puede ser heredada de la moneda predeterminada definida en la Compañía o elegida manualmente.
- **Tarjeta de tarifas** y **Columna de tarjeta de tarifas** - Puede ser heredada del Cliente o seleccionada manualmente.
- **Overheads** and **Márgenes** - Definidos manualmente para cada presupuesto (opcional).

## Crear Cotizaciones

Para comenzar a construir los detalles de su presupuesto, diríjase a la pestaña de Cotizaciones donde encontrará 4 secciones diferentes:

- **Entregables** - estos son los servicios vendidos al cliente (cada línea puede representar entregables reales, es decir, proyectos/trabajos; una tarifa mensual u cualquier otra estructura que desee utilizar para desglosar su presupuesto).
- **Costos de Terceros** - este es el primer componente del presupuesto. Estos se relacionan con proveedores externos.
- **Gastos** - este es el segundo componente del presupuesto. Transporte, comidas, hotel, son solo algunos ejemplos de gastos que se pueden estimar aquí.
- **Resources** - este es el último componente del presupuesto. Representa los recursos internos/horas de trabajo que se están contemplando.

<figure>

![img-box-shadow](/img/university/estimates/estimates-lesson1-3.png)

<figcaption></figcaption>
</figure>

Para crear nuevas Cotizaciones, debes:

1. Presiona el símbolo "+" para crear un entregable que deseas estimar.
2. Cada entregable puede representar un mes en la tarifa de retención, un servicio, etc.

<figure>

![img-box-shadow](/img/university/estimates/estimates-lesson1-4.png)

<figcaption></figcaption>
</figure>

3. Para cada entregable, debes incluir lo siguiente:

- **Descripción** - Ingresa un nombre que describa lo que estás vendiendo al cliente.
- **Servicio** - Selecciona el tipo de servicio que estás cotizando.
- **Impuesto**- Puede provenir directamente del Cliente o ingresarse manualmente.

### Cotizando Terceros

Para cotizar Terceros, sigue estos pasos:

1. Selecciona el entregable para el cual deseas hacer una cotización en el menú desplegable.
2. Presiona el símbolo "+" para agregar Detalles de la Estimación.
3. La descripción y el servicio se heredarán de la línea del entregable.
4. Selecciona el proveedor (costos externos) y las condiciones de pago del proveedor.
5. Costo unitario y costo por cantidad (#).
6. Rellena el % de tarifa o el valor para obtener tu valor de venta.
7. Haz clic en el ícono de Guardar.
8. Repite el proceso si necesitas agregar varios costos externos.

:::note
Por favor, ten en cuenta que puedes tener varios costos externos bajo una línea de cliente. Dependerá de cómo desees mostrar los detalles del presupuesto a los clientes.
:::

<figure>

![img-box-shadow](/img/university/estimates/estimates-lesson1-5.png)

<figcaption></figcaption>
</figure>

### Cotización de Gastos

Para empezar a cotizar gastos, haz clic en la palabra "Gasto" y se abrirá la sección.

1. Selecciona el entregable para el cual deseas hacer una cotización en el menú desplegable.
2. Presiona el signo "+" para agregar Detalles de la Estimación.
3. Selecciona el tipo de gasto que necesitas cotizar (por ejemplo, Comidas, Hotel).
4. Completa el costo unitario y la cantidad #.
5. Haz clic en el ícono de Guardar.
6. Repite el proceso si necesitas agregar varios gastos.

<figure>

![img-box-shadow](/img/university/estimates/estimates-lesson1-6.png)

<figcaption></figcaption>
</figure>

### Cotización de Recursos

Para comenzar a cotizar los recursos, haz clic en la palabra "Recursos" y se abrirá la sección.

1. Selecciona el entregable para el cual deseas hacer una cotización en el menú desplegable.
2. Presiona el símbolo "+" para agregar Detalles de la Estimación o añade múltiples Tipologías a la vez haciendo clic en el ícono de Tipologías.
3. Puedes definir el alcance basado en tipologías (por ejemplo, títulos) y/o usuarios específicos.

<figure>

![img-box-shadow](/img/university/estimates/estimates-lesson1-7.png)

<figcaption></figcaption>
</figure>

Para cada tipología, deberás completar los siguientes campos obligatorios:

- **Tabla Rate** - Heredada automáticamente de la tabla de rates elegida anteriormente en la pestaña de Información.
- **Costo Unitario** - Automáticamente el mismo que la tarifa de tabla, pero podría cambiarse manualmente. Se utiliza solo si deseas utilizar una tarifa diferente a la de la Tarjeta de Tarifas elegida (tarifa de tabla).
- **Horas** - Número de horas que se venden al cliente.
- **Costo Total** - Horas x Costo Unitario.
- **Valor Unitario** - Costo Unitario + Margen\*.
- **Venta Total** - Costo Total + Margen\* o Ingreso Unitario x Horas.

* El Margen es el que se define en la pestaña de Información del Presupuesto.

<figure>

![img-box-shadow](/img/university/estimates/estimates-lesson1-8.png)

<figcaption></figcaption>
</figure>

A medida que completes los valores, el total por Entregable en la sección de Entregables en la parte superior se actualizará automáticamente.

Ten en cuenta que cada columna individual en el Presupuesto está controlada por roles de acceso.

Por favor, ten en cuenta que puedes tener varios costos externos, gastos y recursos bajo una línea de cliente. Dependerá de cómo desees mostrar los detalles del presupuesto a los clientes.
