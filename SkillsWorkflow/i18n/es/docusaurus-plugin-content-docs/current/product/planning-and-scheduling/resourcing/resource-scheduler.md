---
id: resource-scheduler
title: Programador de Recursos
description: "Planifique su equipo en una línea de tiempo: asigne tareas arrastrándolas sobre una persona, reserve horas por día, lea la capacidad y vea ausencias, festivos y reservas junto al trabajo."
sidebar_label: Programador de Recursos
sidebar_position: 3
---

El Programador de Recursos coloca a su equipo en una línea de tiempo. Cada fila es una persona, cada barra es el trabajo reservado sobre ella, y el panel de la derecha reúne las tareas que todavía esperan a alguien. Usted asigna trabajo arrastrándolo sobre una fila, lo ajusta arrastrando o redimensionando la barra, y lee la carga de cada persona en los indicadores de capacidad junto a su nombre.

![img](/img/product/planning-and-scheduling/resource-scheduler/board.png)
<figcaption>El Programador de Recursos, con la columna de recursos, la línea de tiempo y el panel de tareas</figcaption>

## Leer el tablero

La columna de recursos de la izquierda lleva la foto, el nombre y la tipología de cada persona, una barra de utilización y un porcentaje. El tablero abre agrupado por tipología; el botón **Group By** lo cambia.

Las columnas de fin de semana y de días no laborables aparecen sombreadas, y siguen así en cualquier zoom.

Una barra se colorea según la etapa de su tarea, en tono atenuado, con el color pleno de la etapa en el borde izquierdo. La entrada **Color** del menú ⋮ las repinta por usuario, responsable del proyecto o creador.

Lo que una barra puede llevar:

| Marca | Significado |
|---|---|
| Logotipo del cliente | El cliente al que pertenece la tarea. |
| `NEST0018CR001 - Storyboard` | El número y el nombre de la tarea. |
| Icono de indicador de color | Prioridad: verde baja, naranja normal, rojo alta. |
| Icono de repetición en la cabecera | Al menos un día de la barra forma parte de una serie recurrente. |
| Icono de repetición dentro de una celda de día | Ese día es una ocurrencia recurrente. |
| Icono de capas dentro de una celda de día | Ese día tiene más de una reserva. |
| `03:00` en una celda de día | Horas reservadas ese día. |
| Franja fina sobre cada día | Lo lleno que está ese día respecto a las horas requeridas de la persona. |
| Píldora morada | El proyecto. |
| Píldora gris | El work type. |

Las barras también llevan estado. Una barra **atenuada** es trabajo cuyas horas siguen reservadas en alguien que ya no está asignado a él. Una barra **rayada** ha quedado fuera por un filtro basado en el trabajo. Una **barra gris con un spinner** se está creando, y una barra apagada se está guardando.

### Tipos de barra

No toda barra es una tarea.

Las **barras administrativas** llevan un icono de maletín, un nombre y un work type, y ningún número de tarea. Son tiempo reservado contra un work type en lugar de contra trabajo de cliente, para cosas como producción o formación. Cree una arrastrando sobre un espacio vacío y eligiendo **Workload** sin seleccionar una tarea.

Las **reservas** son barras planas con un icono de marcador, coloreadas por prioridad. Retienen días para una persona sin apuntar a ninguna tarea.

**Las ausencias, los festivos y los días no laborables** se dibujan junto al trabajo, de modo que las ausencias quedan visibles mientras se planifica.

## Quién y qué aparece

Las filas son los usuarios activos de los que usted es Responsable, más la suya propia. Quien no tiene equipo a su cargo sigue viendo su propia fila y sus propias reservas.

Aquí solo se pueden planificar los entregables marcados como **Plannable**. Esa marca se define en el propio entregable.

El trabajo en las etapas que el workspace excluye nunca llega al tablero. De fábrica, esas etapas son `Cancelled`, `Draft` y `Closed`.

## Modo Tasks y modo Workloads

La entrada **Mode** del menú ⋮ cambia cómo se dibujan las barras.

En el modo **Tasks**, una barra es una tarea completa sobre esa persona, desde su primer hasta su último día, con una celda por día para las horas reservadas. En el modo **Workloads**, una barra es una única reserva, y moverla mueve solo esa reserva.

Ambos modos aceptan los mismos gestos. Use el modo Tasks cuando esté colocando el trabajo y definiendo su duración; use Workloads cuando esté reequilibrando horas ya reservadas.

## Asignar una tarea

1. Abra el panel de tareas de la derecha.
2. Encuentre la tarea en **Unassigned** o en **All Tasks**.
3. Arrástrela sobre la persona y el día que quiera.

El editor **Add Workload** se abre con la tarea, la persona y el día ya rellenados. Indique las horas y guarde.

**Unassigned** lista las tareas planificables de la ventana visible en las que no hay nadie reservado. **All Tasks** busca en todo el conjunto planificable, incluido el trabajo ya asignado a alguien. El número junto al selector cuenta las filas listadas en ese momento, y la caja de búsqueda filtra la lista que esté abierta.

Cada fila muestra el número y el nombre de la tarea, con su proyecto y su cliente debajo.

La lista se agrupa según cuándo vence el trabajo:

| Grupo | Contiene |
|---|---|
| **Delayed** | Tareas cuya agreed date es anterior a la ventana visible. |
| La fecha de una semana | Tareas que vencen esa semana. |
| **Next** | Tareas que vencen después de la ventana visible. |
| **No Date** | Tareas sin agreed date. |

Un doble clic sobre una fila del panel abre la vista previa de la tarea en lugar de asignarla.

![img-box-shadow-sm](/img/product/planning-and-scheduling/resource-scheduler/tasks-panel.png)
<figcaption>El panel de tareas</figcaption>

## Mover, ampliar y copiar trabajo

Arrastre una barra en horizontal para moverla a otras fechas. Arrástrela a otra fila para pasar el trabajo a esa persona. Arrastre su borde izquierdo o derecho para alargarla o acortarla.

Mantenga **Shift** mientras arrastra sobre una segunda persona para copiarle la reserva y conservar la original.

Si un movimiento o un redimensionado lleva el trabajo fuera de las fechas actuales de la tarea, el sistema pregunta *Do you want to add the Task to the dragged date?* antes de ampliarlas.

Acortar la duración de una tarea pregunta antes de borrar las horas que otras personas hayan reservado fuera del nuevo rango, y las nombra.

Mover una carga de trabajo compartida por varias personas pregunta si el cambio se aplica solo a esa persona o a todo el grupo.

## Reservar horas por día

Cada barra de tarea lleva una celda por día que cubre. Haga clic en una celda para abrir el editor de carga de trabajo de ese día e indique las horas. Los días con horas reservadas las muestran como `hh:mm`.

Una celda marcada con un icono de capas ya tiene más de una reserva ese día. El número mostrado es su total, y al pasar el ratón se listan una a una con sus horas, su work type y su hora de inicio.

## Crear trabajo en el tablero

Arrastre sobre un espacio vacío en la fila de una persona. Cuando hay más de un tipo disponible, el sistema pregunta cuál crear:

![img](/img/product/planning-and-scheduling/resource-scheduler/new-event.png)
<figcaption>Elegir qué crear</figcaption>

**Workload** abre el editor Add Workload en el día arrastrado, ya con esa persona. Elija una tarea para reservar tiempo contra trabajo de cliente. Deje la tarea vacía y elija un work type para reservar tiempo administrativo, que es lo que dibuja las barras con icono de maletín.

**Task** abre el formulario de creación de job con las fechas arrastradas ya rellenadas. Una vez creada la tarea, el editor de carga de trabajo se abre sobre ella, y es ahí donde se reservan las horas y se asigna a la persona. Si cancela en ese segundo paso, la tarea sigue existiendo, esperando en la lista Unassigned.

**Reservation** pide una descripción y después una prioridad entre **Low**, **Medium** y **High**. Bloquea los días arrastrados para esa persona sin apuntar a ninguna tarea.

Con un solo tipo disponible, el gesto va directo a él y no se pregunta nada. Qué tipos se ofrecen depende de los parámetros del workspace y de sus roles.

## El editor Add Workload

Todos los caminos que reservan tiempo abren el mismo editor: el arrastre desde el panel de tareas, el clic en una celda de día y el drag-create **Workload**.

![img](/img/product/planning-and-scheduling/resource-scheduler/add-workload.png)
<figcaption>Asignar cargas de trabajo</figcaption>

Hace más que recoger un número de horas:

| Puede | Efecto |
|---|---|
| Reservar a varias personas a la vez | La reserva pasa a ser un grupo compartido. Moverla después pregunta si el cambio vale para una persona o para todo el grupo. |
| Reservar un rango de días | Las horas se reparten por todos los días del rango, y no solo por el día de partida. |
| Repetir la reserva | Una serie recurrente con su propia fecha de fin. Los días de una serie llevan un icono de repetición, y se editan y eliminan como serie. |
| Fijar un work type | Obligatorio cuando no hay tarea. Opcional en una tarea, donde aparece como píldora gris en la barra. |
| Fijar horas por día, o una hora de inicio y de fin | Las horas solo se aplican en la vista Day. En las demás, la reserva son horas contra el día. |
| Llevar una descripción | Se muestra al pasar el ratón sobre la reserva. |
| Mover la tarea a otra etapa | La transición se ejecuta al guardar, y la barra se repinta con el color de la nueva etapa. |

Al editar una reserva que cubre varios días, **Apply changes to** decide si la edición afecta al día que abrió o a todos los días de la barra.

## Clic derecho sobre una barra

El clic derecho ofrece las acciones aplicables a lo que se ha pulsado.

| Acción | Efecto |
|---|---|
| **Open** | Abre la vista previa de la tarea. |
| **Delete this day** | Elimina las horas reservadas en el día bajo el puntero. |
| **Delete all days** | Elimina todas las reservas de la barra. |
| **Delete** | Elimina la carga de trabajo o, cuando es recurrente, toda la serie. |
| **Unassign** | Quita a la persona de la tarea. |

Al desasignar a alguien con horas reservadas desde hoy en adelante, el sistema pregunta si deben eliminarse. Responda **No** y las horas permanecen en el tablero, dibujadas atenuadas y sin nadie asignado.

Un doble clic sobre una barra abre la vista previa de la tarea. Una reserva abre su propio menú, donde se puede cambiar su descripción o su prioridad, o eliminarla.

## La barra de herramientas

![img-box-shadow](/img/product/planning-and-scheduling/resource-scheduler/toolbar.png)
<figcaption>La barra de herramientas del programador</figcaption>

**Filter resources...** acota el tablero. Sus opciones se agrupan por categoría. Resource, Company, Department, Typology, Responsible y Tags proceden de las personas. Deliverable Tags, Stage, Project, Client y Task proceden del trabajo. Un filtro basado en personas oculta filas; un filtro basado en el trabajo mantiene la fila y raya las barras que no coinciden.

El botón de embudo filtra por carga: **All Users**, **Overbooked Only** (por encima del 100%) o **Available Only** (100% o menos).

**Group By** apila las filas bajo encabezados. Las opciones son None, Company, Department, Typology, Project, Task (by Date), Client, Stage, Agreed Date y Task (by Priority).

El selector de fecha fija el ancla de la ventana visible. Sus flechas avanzan o retroceden un periodo, y su calendario elige cualquier día en cualquier zoom.

Cuatro botones definen la amplitud:

| Zoom | Ventana |
|---|---|
| **Day** | Un día, sobre un eje de horas. |
| **Week** | Siete días desde el primer día de la semana. |
| **Work week** | La misma semana con su fin de semana fuera del eje. |
| **Month** | 28 días, empezando una semana antes de la fecha elegida. |

### Más opciones

El menú ⋮ reúne:

- **Mode**, que alterna entre Tasks y Workloads.
- **Color**, que pinta las barras por **Stage**, **User**, **Project Owner** o **Created By**.
- **Time format (12h / 24h)**, que cambia el eje de horas y los tooltips. Las duraciones nunca se reformatean: 8,5 horas sigue siendo `08:30`.
- **Role**, que elige el tipo de asignación que se graba en las asignaciones y cargas de trabajo creadas aquí. No cambia lo que muestra el tablero.
- **Show approved Leaves only.**, que oculta las ausencias pendientes de aprobación.
- **Contracted Time**, que superpone las horas contratadas procedentes de los presupuestos. Esta entrada solo se ofrece a los usuarios con el rol `EstimateRead`.
- **Show Tasks Panel** / **Hide Tasks Panel**, **Refresh** y **Export to Excel**.

Cuando la ventana es demasiado estrecha para toda la barra de herramientas, los botones de zoom y de capacidad pasan a este menú.

## Capacidad y disponibilidad

Junto a cada nombre hay una barra de utilización y un porcentaje, verde hasta el 100% y rojo por encima. La capacidad diaria procede de las horas definidas en cada usuario.

Los botones de capacidad eligen la superposición dibujada sobre la línea de tiempo:

| Superposición | Muestra |
|---|---|
| **No capacity overlay** | Solo las barras. |
| **Capacity bar** | Una barra de utilización por día. |
| **Heatmap (%)** | Cada día sombreado según lo lleno que esté. |
| **Hours** | Las horas reservadas en cada día. |

Heatmap y Hours añaden una fila de resumen sobre las barras de cada persona. Mientras una de ellas está activa, **Expand all users** y **Collapse all users** aparecen en la barra de herramientas, y hacer clic en una fila de resumen contrae solo a esa persona.

Al pasar el ratón sobre una celda de capacidad, el sistema indica las horas reservadas y libres de ese día y las horas todavía libres de esa semana.

![img](/img/product/planning-and-scheduling/resource-scheduler/capacity.png)
<figcaption>La superposición de heatmap, con un tooltip de capacidad abierto</figcaption>

## Ausencias y festivos

Al pasar el ratón sobre una ausencia o un festivo aparecen su tipo y su fecha, y su duración como **Half Day**, **Full Day** o en horas cuando el tipo de ausencia se registra en horas. Cualquier descripción o motivo aparece debajo.

## Reglas y comportamiento

Las barras de ausencia, festivo y día no laborable no se pueden mover ni redimensionar.

Las cargas de trabajo recurrentes no se pueden arrastrar ni redimensionar. Edítelas desde el editor de carga de trabajo.

Una carga de trabajo no puede superar las 24 horas en un día, y un día que ha alcanzado el máximo de horas diarias de la persona rechaza las nuevas.

No se pueden añadir cargas de trabajo a una tarea a la que usted no está asignado.

Cuando su empresa no permite planificar en fin de semana, el sábado y el domingo rechazan nuevas cargas de trabajo.

Copiar una tarea sobre alguien que ya está asignado a ella se rechaza.

Los permisos se aplican tanto a los gestos como a las pantallas:

| Acción | Rol necesario |
|---|---|
| Cambiar a quién está asignada una tarea | `ExecutorAssignmentSave` |
| Cambiar las fechas de una tarea arrastrando o redimensionando | `DeliverableWrite` |
| Crear una tarea a partir de un arrastre | `DeliverableCreate` |
| Crear una reserva | `ReservationCreate` |
| Editar o eliminar una reserva | `ReservationWrite` |
| Ver la superposición Contracted Time | `EstimateRead` |

## Configuración

El programador es un workspace, y su comportamiento se define mediante los parámetros de ese workspace. Los valores siguientes son los que trae de fábrica.

| Parámetro | Efecto |
|---|---|
| `DefaultMode` | Modo inicial, `tasks` o `workloads`. Viene como `workloads`. |
| `DefaultGroupBy` | Agrupación aplicada antes de que el usuario elija una. Viene como `typologyGroupName`. |
| `DefaultTeam` | Tipo de asignación con el que arranca el menú Role. Viene como `Executor`. |
| `WeekStartDay` | Primer día de la semana, `0` para domingo. Viene como `1`. |
| `HourFormat` | Reloj inicial, `12` o `24`. Viene como `24`. |
| `EntryTime` | Hora del día que se graba en una carga de trabajo cuando el editor no envía ninguna. Viene como `09:00`. |
| `StagesToExclude` | Etapas que se mantienen fuera del tablero. Viene como `Cancelled,Draft,Closed`. |
| `BusinessObjectTypes` | Tipos desde los que se puede planificar. Viene como `Job,Task,Deliverable`. |
| `ConfirmJobDateExtension` | Póngalo a `0` para ampliar las fechas de la tarea sin preguntar. |
| `DragCreateWorkload`, `DragCreateTask`, `DragCreateReservation` | Ponga uno a `0` para retirar esa opción de la pregunta de creación por arrastre. |
| `WorkloadEditorWorkspaceId` | El workspace que se abre como editor de carga de trabajo. |

Las elecciones que el usuario hace en la barra de herramientas se recuerdan y prevalecen sobre estos valores por defecto en su siguiente visita.

## Related articles

- [Planned Time](/docs/product/planning-and-scheduling/resourcing/planned-hours)
- [Gantt](/docs/product/planning-and-scheduling/gantt)
- [Roles and Profiles](/docs/administration/system-roles-profiles)
- [Utilization Dashboard](/docs/product/dashboards-and-reporting/utilization-dashboard)
