---
id: asking-questions-about-project-status
title: Preguntar por el Estado de un Proyecto
description: "Mira cómo un gestor de proyectos pregunta al AI Assistant en qué punto está un proyecto, qué jobs van con retraso, qué podría poner en riesgo el calendario, qué está pendiente del cliente y cuántas horas hay planificadas y registradas."
sidebar_label: Preguntar por el Estado de un Proyecto
sidebar_position: 2
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

## Descripción general

Pregunta al AI Assistant, con tus propias palabras, cómo va un proyecto. Responde con la etapa del proyecto, sus jobs por etapa, los jobs marcados con retraso, las fechas del proyecto y su responsable. Haz preguntas de seguimiento para ver qué podría poner en riesgo el calendario, qué jobs están pendientes del cliente y cuántas horas hay planificadas y registradas, para saber qué plantear en tu próxima reunión de seguimiento.

Cada proyecto y cada job de la respuesta es un enlace. Selecciona uno para abrirlo y actuar sobre él. Cuando un workspace te ayuda a seguir el proyecto, el asistente lo sugiere con un botón **Abrir**.

El cliente, el proyecto, los jobs y las horas de este ejemplo son ilustrativos. Los jobs que ves dependen de tus accesos y de los datos que tu agencia pone a disposición del asistente.

<Walkthrough
  subtitle="Ejemplo de conversación entre un gestor de proyectos y el AI Assistant."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="De una pregunta a un informe de estado">
        El asistente reúne los jobs, las etapas, las fechas y las horas del proyecto en una sola respuesta, lista para una llamada con el cliente o una reunión de seguimiento.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Pregunta cómo va el proyecto.',
          'Lee la etapa del proyecto y sus jobs por etapa.',
          'Pregunta qué podría poner en riesgo el calendario.',
          'Pregunta qué jobs están pendientes del cliente.',
          'Pregunta cuántas horas hay planificadas y registradas.',
          'Abre un job desde la respuesta para actuar sobre él.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          '¿Cómo vamos con el proyecto de Navidad de Orvella Tea?',
          '¿Qué va con retraso en este proyecto?',
          '¿Qué necesitamos del cliente esta semana?',
          '¿Cuántas horas hay planificadas y registradas en este proyecto?',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'Las etapas dependen del workflow de cada job, así que un mismo proyecto puede mostrar nombres de etapa distintos.',
          'Un job va con retraso cuando su fecha de fin planificada ha pasado y no está terminado.',
          'Pendiente del cliente significa que el job está en una etapa de aprobación o comentarios del cliente, o que sus comentarios o su brief muestran una petición abierta al cliente.',
          'Las horas planificadas vienen de las reservas en los jobs del proyecto y las horas registradas, de las hojas de horas.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Tú">
    <p>¿Cómo vamos con el proyecto Orvella Tea Christmas 2026?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>ORV0031 — Orvella Tea – Christmas 2026 Campaign está en In Progress.</strong> Va del 1 de septiembre al 15 de diciembre de 2026, y el responsable eres tú.</p>
    <Walkthrough.DataTable
      columns={['Etapa', 'Jobs']}
      rows={[
        ['Closed', '2'],
        ['Client Approval', '3'],
        ['In Progress', '2'],
        ['To Do', '1'],
      ]}
      note="1 de los 8 jobs está marcado con retraso."
    />
    <p>La principal preocupación es el stand del evento de lanzamiento, que ya ha pasado su fecha de fin planificada. Puedes seguir las etapas del proyecto en el workspace de abajo.</p>
    <Walkthrough.WorkspaceCard title="Kanban" subtitle="Workspace · Menu" actionLabel="Abrir" />
    <p><strong>Cómo he interpretado tu pregunta</strong></p>
    <ul>
      <li>Incluido: el proyecto ORV0031 y todos sus jobs visibles para ti.</li>
      <li>Asumido: “cómo vamos” significa la etapa del proyecto, el progreso de los jobs y los indicadores de retraso, no las horas registradas ni la facturación.</li>
    </ul>
    <Walkthrough.Source label="Jobs · 8 filas" />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Tú">
    <p>¿Qué podría poner en riesgo el calendario?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.JobList
      title="Jobs en riesgo"
      previewLabel="Vista previa"
      openLabel="Abrir"
      rows={[
        { title: 'Christmas Launch Event – Stand Design', number: 'ORV0031EV002', stage: 'In Progress', due: '4 días de retraso', tone: 'late' },
        { title: 'Christmas Launch Event – Stand Production', number: 'ORV0031EV003', stage: 'To Do', due: '13 nov' },
        { title: 'Campaign Website', number: 'ORV0031DIGI001', stage: 'In Progress', due: '20 nov' },
      ]}
      footer="Jobs · 3 filas"
    />
    <ul>
      <li>Stand Design tenía que terminar el 31 de octubre y sigue en In Progress. Es lo primero que escalaría.</li>
      <li>Stand Production tiene responsables, pero no tiene ejecutor.</li>
      <li>Campaign Website termina dentro de 16 días y sigue en In Progress.</li>
    </ul>
    <p>Siguiente paso recomendado: confirmar una nueva fecha para el diseño del stand y asignar un ejecutor a Stand Production.</p>
    <p><strong>Cómo he interpretado tu pregunta</strong></p>
    <ul>
      <li>Incluido: los jobs del proyecto, revisados por fecha de fin planificada, etapa, prioridad y asignaciones.</li>
      <li>No evaluado: dependencias, esfuerzo restante y disponibilidad de las personas.</li>
    </ul>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Tú">
    <p>¿Qué está pendiente del cliente?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>Tres jobs están a la espera de la aprobación del cliente:</strong></p>
    <Walkthrough.DataTable
      columns={['Job', 'Etapa', 'Fecha de fin']}
      rows={[
        ['Social Media Calendar – December', 'Client Approval', '7 nov'],
        ['In-store Posters', 'Client Approval', '10 nov'],
        ['Gift Card Design', 'Client Approval', '14 nov'],
      ]}
      note="Los comentarios y los briefs más recientes de los demás jobs no muestran ninguna petición abierta al cliente."
    />
    <Walkthrough.Source label="Descriptions · 8 filas" />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Tú">
    <p>¿Cuántas horas hay planificadas y registradas en este proyecto?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.DataTable
      columns={['', 'Horas']}
      rows={[
        ['Planificadas', '590h'],
        ['Registradas', '398h'],
      ]}
      note="El tiempo registrado es el 67% de las horas planificadas. Es una comparación de tiempo y no mide cuánto trabajo está hecho."
    />
    <p>Puedes seguir el tiempo planificado y el real por mes en el workspace de abajo.</p>
    <Walkthrough.WorkspaceCard title="FTE" subtitle="Workspace · Menu" actionLabel="Abrir" />
    <p><strong>Cómo he interpretado tu pregunta</strong></p>
    <ul>
      <li>Asumido: “planificadas” significa las horas reservadas en los jobs del proyecto, no el esfuerzo contratado o presupuestado.</li>
      <li>Incluido: el tiempo registrado por todas las personas visibles en el proyecto, sea cual sea su estado de aprobación o si es facturable.</li>
    </ul>
    <Walkthrough.Source label="Time sheets · 1 fila" />
  </Walkthrough.Message>
</Walkthrough>

## Artículos relacionados

- [Revisar los Proyectos Retrasados que Necesitan tu Atención](/docs/ai/use-cases/projects-and-jobs/identifying-project-delays)
- [Discutir una Notificación de Retraso de Proyecto](/docs/ai/use-cases/client-dashboards-and-forms/discussing-a-project-delay-notification)
- [Proyecto Burn Workspace](/docs/product/dashboards-and-reporting/project-burn-dashboard)
- [AI Assistant](/docs/ai/ai-assistant)
