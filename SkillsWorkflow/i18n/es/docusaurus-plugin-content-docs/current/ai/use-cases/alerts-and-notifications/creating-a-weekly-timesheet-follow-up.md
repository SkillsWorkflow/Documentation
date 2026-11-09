---
id: creating-a-weekly-timesheet-follow-up
title: Crear un Seguimiento Semanal de Timesheets
description: "Mira cómo un responsable de operaciones pide al AI Assistant que compruebe cada viernes el tiempo sin registrar y las aprobaciones de timesheets pendientes, y cómo la alerta recuerda después a cada persona sus propias horas sin registrar y da a cada aprobador un resumen por equipo."
sidebar_label: Seguimiento Semanal de Timesheets
sidebar_position: 2
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

:::preview
Este caso de uso está en preview, la conversación muestra cómo se espera que el AI Assistant lo gestione, y lo que responde o hace hoy puede diferir de este ejemplo.
:::

## Descripción general

Pide al AI Assistant que haga el seguimiento de los timesheets cada semana. Una sola alerta puede decir cosas distintas a dos grupos de personas: cada persona con tiempo sin registrar recibe un recordatorio con sus propios días y horas, y cada aprobador recibe un resumen de su equipo, con las personas a las que aún les falta tiempo por registrar y los timesheets que esperan su aprobación.

Revisas la alerta en una tarjeta antes de que se cree, incluido a cuántas personas recordaría si se ejecutara hoy. A partir de ahí, los recordatorios salen cada viernes sin que nadie tenga que prepararlos.

La agencia, los equipos, las personas y las horas de este ejemplo son ilustrativos. El tiempo sin registrar se calcula según el calendario de cada persona, así que las ausencias y los festivos no se cuentan como tiempo sin registrar.

<Walkthrough
  subtitle="Ejemplo de conversación entre un responsable de operaciones y el AI Assistant, y las notificaciones que la alerta envía después."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="Una alerta, el mensaje adecuado para cada persona">
        A cada persona se le recuerdan sus propias horas sin registrar. Los aprobadores ven su equipo de un vistazo. Nadie tiene que perseguir timesheets a mano el viernes por la tarde.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Indica cuándo comprobar y a quién recordar.',
          'Elige qué recibe cada grupo.',
          'Comprueba a cuántas personas recordaría la alerta hoy.',
          'Revisa la alerta y selecciona Crear.',
          'Lee los recordatorios y los resúmenes cuando lleguen.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'Cada viernes, identifica el tiempo sin registrar y prepara recordatorios para los empleados y los aprobadores.',
          'Recuérdaselo también el lunes por la mañana a quien aún tenga la semana incompleta.',
          'Deja el estudio de Lisboa fuera de los recordatorios de timesheets.',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'El tiempo sin registrar es la diferencia entre las horas previstas en el calendario de una persona y las horas que ha registrado.',
          'Un recordatorio solo llega a la persona a la que se refiere. El resumen del equipo llega a la persona que aprueba sus timesheets.',
          'El asistente pide tu aprobación antes de crear la alerta.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Tú">
    <p>Cada viernes, identifica el tiempo sin registrar y prepara recordatorios para los empleados y los aprobadores.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>Puedo configurar una sola alerta para ambos. Antes, dos preguntas:</p>
    <ul>
      <li>¿Qué semana debe comprobar: la semana actual hasta el viernes o la semana completa anterior?</li>
      <li>¿Deben los aprobadores enterarse también de los timesheets que esperan su aprobación?</li>
    </ul>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Tú">
    <p>La semana actual. Y sí, añade las aprobaciones pendientes, urgentes si tienen más de una semana.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.ApprovalCard
      title="Crear la alerta “Seguimiento semanal de timesheets”"
      subtitle="Revisa estos detalles antes de que cree la alerta."
      rows={[
        ['Comprueba', 'Tiempo sin registrar esta semana y timesheets que esperan aprobación'],
        ['Personas con tiempo sin registrar', 'Un recordatorio con sus propios días y horas · Atención'],
        ['Aprobadores', 'Un resumen por equipo · Atención, o Acción requerida para aprobaciones de más de 7 días'],
        ['Cuándo', 'Cada viernes, 15:00'],
        ['Canales', 'Web, Email, Push'],
        ['Si se ejecutara hoy', '14 recordatorios a personas, 4 resúmenes a aprobadores'],
      ]}
      actions={[{ label: 'Denegar' }, { label: 'Crear', primary: true }]}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Tú">
    <p>He revisado la alerta y he seleccionado Crear.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.StatusChip status="Creado" label="Seguimiento semanal de timesheets" />
    <p>Los primeros recordatorios salen este viernes a las 15:00.</p>
  </Walkthrough.Message>

  <Walkthrough.DateSeparator label="Viernes · Notificaciones de Mark Evans, diseñador" />

  <Walkthrough.NotificationPanel>
    <Walkthrough.NotificationCard
      level="attention"
      levelLabel="Atención"
      title="Tu timesheet de esta semana"
      time="Hoy, 15:00"
    >
      <p>Te faltan 12h por registrar esta semana: el miércoles 4h y el jueves 8h. Regístralas antes de que se cierre la semana.</p>
    </Walkthrough.NotificationCard>
  </Walkthrough.NotificationPanel>

  <Walkthrough.DateSeparator label="Viernes · Notificaciones de David Brown, director creativo" />

  <Walkthrough.NotificationPanel>
    <Walkthrough.NotificationCard
      level="action"
      levelLabel="Acción requerida"
      title="Seguimiento semanal de timesheets · Equipo creativo"
      time="Hoy, 15:00"
    >
      <ul>
        <li>3 timesheets llevan más de 7 días esperando tu aprobación.</li>
        <li>A 4 personas aún les falta tiempo por registrar esta semana, 31h en total. Mark Evans es quien más tiene, 12h.</li>
      </ul>
    </Walkthrough.NotificationCard>
  </Walkthrough.NotificationPanel>
</Walkthrough>

## Artículos relacionados

- [Encontrar Quién Está Bloqueado por Horas Pendientes](/docs/ai/use-cases/resource-management/finding-who-has-overdue-hours)
- [Crear una Alerta para Fees que Necesitan Atención](/docs/ai/use-cases/alerts-and-notifications/creating-an-alert-for-fees-that-need-attention)
- [Recibir y gestionar notificaciones](/docs/product/notifications/receive-and-manage-notifications)
- [Automatizaciones](/docs/build-and-extend/automations)
- [AI Assistant](/docs/ai/ai-assistant)
