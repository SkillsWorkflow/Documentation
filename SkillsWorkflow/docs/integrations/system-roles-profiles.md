---
id:  system-roles-profiles
title: Roles y Perfiles del sistema
sidebar_label: Roles y Perfiles del sistema
---

## Los accesos de los usuarios están definidos por Roles

- Prácticamente cualquier cosa en Skills Workflow puede ser controlada por roles específicos.
- Eso significa que puede ir tan lejos como se especifica para cada usuario, lo que puede o no puede ver o cambiar.
- Todo lo que necesita hacer es otorgarle o negarle un papel.

## Categorías de roles
Hay 7 categorías de roles, que definen lo que puede o no puede hacer con un determinado módulo o documento.

- Read: le otorga derechos de solo lectura, es decir, puede ver pero no puede cambiar
- write: le permite editar o modificar
- Create - Le permite crear
- Save: incluye Leer, Escribir y Crear
- Navigate - Le permite navegar a un determinado módulo
- All - Le otorga acceso a todos los documentos/datos en un determinado módulo
- Approve - Le da acceso para hacer aprobaciones en un módulo específico.


Estos sufijos junto con el nombre del documento o módulo constituyen el rol en sí.
E.g. La  role TimesheetNavigate le permitirá navegar a el módul de  Timesheet.

## Documentos del sistema

- Client - Acceso al cliente
- Chat - Acceso al chat
- Crm - Acceso a la Lista de Clientes
- Contracts - Acceso a Fees/Tarifas
- Deliverable - Acceso a  Jobs
- Estimate - Acceso a Presupuestos
- Expense - Acceso a Gastos
- Project - Acceso a Proyectos
- Ratecard - Acceso a Ratecards
- Report - Acceso a Informes
- Files - Acceso a archivos cargados en documentos
- Gantt - Acceso al diagrama de Gantt
- Assignment - Acceso a las tareas del equipo
- Timesheet - Acceso a Timesheets
- Vacation - Acceso a Permisos

## Documentos de Mantenimiento

- AccountGroup
- Account Management
- Costs
- Billing Product
- Billing Client
- Custom Views

## Creación de Perfiles

- Puede agrupar un conjunto de funciones en lo que llamamos un Perfil.
- En lugar de otorgar a los usuarios roles sueltos, les otorga Perfiles preestablecidos.
- Los perfiles hacen que el acceso de los usuarios sea mucho más fácil de mantener y controlar.
- Los perfiles también son completamente personalizables en términos de roles internos y nombres.
- Un ejemplo típico es el perfil de cuenta que está compuesto por los roles: DeliverableSave, ChatSave, EstimateRead, ProjectSave, VacationSave, TimesheetSave, TimesheetApprove, GanttSave.

## Perfiles estándar
Tenemos una lista estándar de perfiles que vienen por defecto en Skills Workflow.

- Requester Profile - Otorgado a quien creará Trabajos y Proyectos. Por lo general, todas las cuentas.
- Responsible Profile - Otorgue a los supervisores que no crearán Proyectos o Trabajos, pero agregarán sus insumos. P.ej. Jefes de Departamento.
- Executor Profile - Otorgado a ejecutores reales como creativos, redactores, productores, etc.
- Finance Profile - Dado a los usuarios financieros que generalmente tienen una visibilidad completa sobre todo.
- HR Profile - Entregado a cualquier persona de Recursos Humanos que hará el mantenimiento de las licencias de los usuarios.

- MaintenanceAccessProfile - Entregado a TI's quienes serán los administradores del sistema.
- MaintenanceReadProfile - Entregado a TI's quienes serán los administradores del sistema.

## Control de acceso a documentos: consideraciones generales

Los roles específicos del documento siempre se validan antes que las reglas de control de acceso. Por ejemplo, en una operación de lectura de Proyecto, si el Usuario no tiene el rol ProjectRead (nombre del documento o módulo con el sufijo de operación para verificar), entonces no tiene acceso de lectura a ningún Proyecto y las reglas no se aplicarán. Cada operación de documento es validada por un tipo específico de rol:

- Operaciones de lectura - *Read roles
- Crear Operaciones - *Create roles
- Operaciones de escritura - *Write roles
- Borrar Operaciones - *Write roles
- Operaciones de lista - *Navigate roles

El acceso a documentos puede tener dos conjuntos de reglas. Las reglas predeterminadas definen el conjunto inicial sobre el que se aplicarán las reglas de Team Access

## Todas las reglas de acceso

Solo se puede acceder a un Documento si el Usuario tiene acceso al menos a la Empresa del Documento. Un borrador de documento solo es accesible para el usuario que lo creó.

Si el usuario no tiene el Rol de acceso total, solo tendrá acceso a los documentos en los que el usuario esté actualmente asignado y el tipo de asignación permita el acceso de lectura o escritura en la Etapa del documento;
Si el usuario tiene All Access Role: tendrá acceso a todos los documentos, respetando la jerarquía del documento.


### Jerarquía Ejemplos de acceso completo

- #1 - Si el Usuario no tiene AllProjectsAccess Role: tendrá acceso solo a los Proyectos donde el Usuario esté actualmente asignado y el tipo de asignación permita acceso de lectura o escritura en la Etapa del Proyecto;
- #2 - Si el usuario tiene AllProjectsAccess Role pero no AllClientsAccess Role: tendrá acceso a todos los Proyectos para Commercial Clients A la que el Usuario tiene acceso más all Projects from rule #1;
- #3 – Si el usuario tiene AllProjectsAccess Role y AllClientsAccess Role: tiene acceso a todos los Proyectos;
- #4 - Si el Usuario no tiene( AllJobsAccess Role: tendrá acceso sólo a Jobs donde el Usuario está asignado actualmente y el tipo de asignación permite el acceso de lectura o escritura en la Etapa del Trabajo;
- #5 - Si el usuario tiene AllJobsAccess Role pero no  AllProjectsAccess Role: tendrá acceso a todos los Jobs para Proyectos donde el Usuario está actualmente asignado y el tipo de asignación permite acceso de lectura o escritura en la Etapa del Proyecto más todos los Trabajos de la regla #1;
- #6 - Si el usuario tiene AllJobsAccess Role y AllProjectsAccess Role pero no  AllClientsAccess Role: tendrá acceso a todos Jobs de todos los Projects  Commercial Clients A la que el Usuario tiene acceso más todos Jobs from regla #2 más todos los jobs de la regla #1;
- #7 – Si el usuario tiene AllJobsAccess Role, AllProjectsAccess Role, y AllClientsAccess Role: tiene acceso a todos los jobs;


### Sin jerarquía Todos los ejemplos de acceso

- Price Tables
- Supplier Notes
- Client Credit Notes
- Supplier Invoices
- Rate Cards
- Purchase Orders
- Bills

- #8 - Si el Usuario no tiene AllSupplierNotesAccess Role: tendrá acceso únicamente a las Notas de Proveedor donde el Usuario esté actualmente asignado y el tipo de asignación permita acceso de lectura o escritura en la Etapa de Nota de Proveedor;
- #9 – Si el usuario tiene AllSupplierNotesAccess Role: tiene acceso a todas las Notas de Proveedores dentro de la Empresa Usuaria, ya que este documento no tiene jerarquía;
