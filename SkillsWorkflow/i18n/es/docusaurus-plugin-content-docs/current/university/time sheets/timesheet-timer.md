---
id: timesheet-timer
title: Cronómetro de Timesheet
sidebar_label: 5. Cronómetro de Timesheet
sidebar_position: 5
---

El Cronómetro de Timesheet le permite registrar en tiempo real el tiempo que dedica a un documento. Inicie un cronómetro cuando comience a trabajar, páuselo cuando tome un descanso y deténgalo cuando haya terminado. El tiempo registrado puede enviarse como una entrada de timesheet.

:::note
El Cronómetro de Timesheet debe ser habilitado por su administrador en **System Settings > Behavior > Enable Timesheet Timer**.
:::

## Iniciar el Cronómetro

1. Busque el **icono de timesheet** en la barra del menú superior.
2. Pase el cursor sobre el icono para revelar las opciones del cronómetro.

<figure>

![img-box-shadow](/img/university/timesheets/timer-menu-hover.png)
<figcaption>Popover del cronómetro con opciones disponibles</figcaption>
</figure>

3. Verá dos opciones:
   - **Start Current Document** — inicia el seguimiento del tiempo para el documento que está viendo actualmente. Esta opción solo está disponible cuando se encuentra dentro de un documento compatible (Proyecto, Trabajo, Entregable, Cliente o Contrato).
   - **Search Document to Start** — abre un popup de búsqueda para que pueda encontrar y seleccionar cualquier documento para rastrear.

4. Haga clic en una de las opciones para iniciar el cronómetro.

## Cronómetro en Funcionamiento

Una vez que el cronómetro se inicia, la barra del menú superior muestra una **píldora del cronómetro** que muestra el tiempo transcurrido en formato `HH:MM:SS`.

<figure>

![img-box-shadow](/img/university/timesheets/timer-running.png)
<figcaption>Cronómetro en funcionamiento con el tiempo transcurrido</figcaption>
</figure>

La píldora del cronómetro contiene:

| Elemento | Descripción |
|---|---|
| **Botón de detener** (rojo) | Detiene el cronómetro y abre el formulario de envío |
| **Botón de reproducir** (verde) | Solo visible cuando el cronómetro está en pausa — reanuda el cronómetro |
| **Botón de ir a** | Navega al documento que se está rastreando |
| **Visualización del tiempo** | Muestra el tiempo transcurrido. Haga clic para pausar el cronómetro |

Mientras el cronómetro está en funcionamiento, el **título de la pestaña del navegador** también se actualiza para mostrar el tiempo transcurrido y el nombre del documento (por ejemplo, `⏱ 01:23:45 - Mi Proyecto`).

:::tip
Pase el cursor sobre la píldora del cronómetro para ver un tooltip con el nombre y tipo del documento.
:::

## Pausar y Reanudar

- Para **pausar** el cronómetro, haga clic en la visualización del tiempo. El texto del tiempo se atenuará y aparecerá un indicador de pausa.
- Para **reanudar**, haga clic en el botón verde de reproducir que aparece cuando está en pausa.

<figure>

![img-box-shadow](/img/university/timesheets/timer-paused.png)
<figcaption>Cronómetro en estado de pausa</figcaption>
</figure>

Puede pausar y reanudar tantas veces como necesite. Cada segmento de sesión se registra por separado.

## Detener el Cronómetro

1. Haga clic en el **botón rojo de detener** en la píldora del cronómetro.
2. Se abrirá un **formulario emergente** donde puede revisar y enviar el tiempo registrado.

<figure>

![img-box-shadow](/img/university/timesheets/timer-stop-popup.png)
<figcaption>Formulario de envío de timesheet después de detener el cronómetro</figcaption>
</figure>

3. Revise el tiempo registrado, ajústelo si es necesario y envíe la entrada a su timesheet.

## Cambiar de Documento

Si inicia un cronómetro mientras otro ya está en funcionamiento, aparecerá un diálogo de confirmación pidiéndole que elija:

- **Start New** — detiene el cronómetro actual e inicia uno nuevo en el documento seleccionado.
- **Continue Timer** — mantiene el cronómetro actual en funcionamiento y cierra el diálogo.

<figure>

![img-box-shadow](/img/university/timesheets/timer-already-running.png)
<figcaption>Confirmación al iniciar un nuevo cronómetro mientras uno está activo</figcaption>
</figure>

## Alerta de Horas Extra

Si su cronómetro alcanza las **8 horas**, el sistema le notificará con una notificación del navegador y un diálogo de confirmación en la aplicación. Puede elegir continuar el seguimiento o detener el cronómetro.

## Persistencia del Cronómetro

El estado de su cronómetro se **guarda automáticamente** en el servidor. Si cierra el navegador, actualiza la página o cambia de dispositivo, su cronómetro se reanudará desde donde lo dejó cuando vuelva a iniciar sesión.

## Tipos de Documento Compatibles

La opción "Start Current Document" está disponible al visualizar cualquiera de los siguientes tipos de documento:

- Proyectos
- Trabajos
- Entregables
- Clientes
- Contratos

Para registrar tiempo en otros documentos, use la opción **Search Document to Start**.
