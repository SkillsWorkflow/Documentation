---
id: transferring-hours-between-projects
title: Transferir horas entre proyectos o jobs
description: Mueva entradas de horas seleccionadas a otro proyecto o job.
sidebar_label: 6. Transferir horas
sidebar_position: 6
---

Use **Transfer Hours** para corregir timesheets registrados en el proyecto o job equivocado. La transferencia mueve cada entrada seleccionada completa a un único destino; no copia las horas ni divide una entrada entre varios destinos.

## Antes de empezar

- Necesita acceso a la acción **Transfer Hours**. Si el icono de lápiz no está disponible en el espacio de trabajo Time Sheets, pida al administrador que confirme que su perfil tiene el rol `TransferWrite`.
- Revise las fechas, los usuarios y el destino antes de guardar. Una transferencia cambia el proyecto o job de las entradas seleccionadas.
- El destino debe ser válido durante todo el periodo de los timesheets seleccionados. Por ejemplo, si las entradas seleccionadas van del 3 al 7 de junio, la fecha de inicio del proyecto o job de destino debe ser el 3 de junio o anterior y su fecha de fin debe ser el 7 de junio o posterior.

## Transferir las horas

1. Abra el **Project** o **Job** de origen y, a continuación, su espacio de trabajo **Time Sheets**.
2. Filtre la cuadrícula hasta mostrar los timesheets que necesita mover. Filtre por **Date** y **User** según sea necesario.

<figure>
  <img src="/img/university/timesheets/transfer-hours-timesheets-list.png" alt="Espacio de trabajo Time Sheets con filas seleccionadas para transferir" />
  <figcaption>Seleccione los timesheets que desea transferir.</figcaption>
</figure>

3. Seleccione las filas de timesheet correspondientes.
4. Seleccione el icono de lápiz, **Transfer Hours**.
5. En la ventana emergente, busque y seleccione un único destino. Puede seleccionar un **Project** o un **Job**. Los resultados muestran la empresa, el cliente, el fee, el proyecto, el job y las fechas de inicio y fin para confirmar el destino.

<figure>
  <img src="/img/university/timesheets/transfer-hours-popup.png" alt="Ventana Transfer Hours con un proyecto o job de destino seleccionado" />
  <figcaption>Elija el destino y guarde la transferencia.</figcaption>
</figure>

6. Seleccione **Save**.

La cuadrícula Time Sheets se actualiza al cerrar la ventana emergente. Confirme que las entradas seleccionadas muestran ahora el proyecto o job previsto.

:::tip
Cuando transfiera más de un timesheet, seleccione entradas que compartan el mismo destino y cuyo intervalo completo de fechas esté cubierto por ese destino. Realice transferencias independientes cuando las entradas necesiten destinos o intervalos de fechas distintos.
:::

## Por qué puede no aparecer un destino

La ventana de transferencia solo devuelve destinos elegibles cuyo periodo cubra la fecha más temprana y la más tardía de los timesheets seleccionados. Si no encuentra un proyecto o job, compruebe primero sus fechas de inicio y fin y, después, reduzca el intervalo de fechas seleccionado o elija un destino que lo cubra.
