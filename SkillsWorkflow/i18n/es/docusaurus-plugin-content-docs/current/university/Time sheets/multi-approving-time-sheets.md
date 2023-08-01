---
id: multi-approving-time-sheets
title: Aprobación múltiple de Timesheet
sidebar_label: 4. Aprobación múltiple de Timesheet
sidebar_position: 4
---

### Empresa

Si la aprobación es la misma para todos los clientes, el tipo de aprobación del parte de horas puede seleccionarse en la empresa.

<figure>

![img-with-border](/img/timesheets/10-setting-in-the-company.png)

<figcaption>Configuración en la Empresa</figcaption>
</figure>

### Cliente

Si la aprobación de la hoja de horas es diferente por cliente:
Vaya a mantenimiento, seleccione el cliente y elija el tipo de aprobación del parte de horas.

<figure>

![img-with-border](/img/timesheets/11-Configuration_Customer.png)

<figcaption>Tipo de Aprobador de Timesheets</figcaption>
</figure>

### Usuario

Acceda al mantenimiento en la lista de usuarios, pestaña responsables y establezca varios usuarios responsables, y su orden.

<figure>

![img-with-border](/img/timesheets/12-Configuration_responsables.png)

<figcaption>Configuración de Responsables en el Usuario</figcaption>
</figure>

### Aprobación por PM

Si la opción de aprobación de horas configurada es la del responsable del proyecto, cuando el usuario ponga horas y las envíe para aprobación el sistema las enviará al responsable del proyecto, cuando este las apruebe pasarán al responsable jerárquico orden 0, cuando este las apruebe pasarán al responsable jerárquico orden 1, y así sucesivamente.
Si el responsable jerárquico orden 1 rechaza, todos los aprobadores y el usuario verán las horas como rechazadas y el tooltip con el motivo respectivo.

<figure>

![img-with-border](/img/timesheets/13-Every_hours_Approve.png)

<figcaption>Aprobación de las Timesheets</figcaption>
</figure>

Una vez que el jefe de proyecto ha aprobado, el jefe de nivel 0 considera que ha llegado el momento de aprobar.

<figure>

![img-with-border](/img/timesheets/14-Timesheets_approved.png)

<figcaption>Timesheets Aprobadass</figcaption>
</figure>

Después de que el jefe de proyecto dé el visto bueno, el jefe de línea de nivel 0 ve la hora de aprobar.

<figure>

![img-with-border](/img/timesheets/15-Hours_unapproved.png)

<figcaption>Timesheets Aprobadas</figcaption>
</figure>

Cuando la orden de aprobación 0 aprueba, las horas pasan a la orden de aprobación 1 para ser aprobadas.

<figure>

![img-with-border](/img/timesheets/16-Approved_unapproved_returned.png)

<figcaption>Modulo de Timesheets</figcaption>
</figure>

Las horas administrativas siguen la aprobación establecida para los usuarios y sus niveles.

