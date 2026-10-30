---
id: asking-questions-about-project-status
title: Preguntar por el Estado de un Proyecto
description: "Mira cómo un gestor de proyectos pregunta al AI Assistant en qué punto está un proyecto, qué jobs están entregados, con retraso o a punto de vencer, qué está en riesgo y qué está pendiente del cliente."
sidebar_label: Preguntar por el Estado de un Proyecto
sidebar_position: 2
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

## Descripción general

Pregunta al AI Assistant, con tus propias palabras, cómo va un proyecto. Responde con los jobs del proyecto por etapa, lo que se ha entregado, lo que va con retraso y lo que vence a continuación, y las horas registradas frente a las contratadas. Haz preguntas de seguimiento para ver qué podría poner en riesgo el calendario y qué jobs están pendientes del cliente, para saber qué plantear en tu próxima reunión de seguimiento.

:::note Preview
Este caso de uso está en preview y aún no se ha probado de principio a fin. La conversación muestra cómo se espera que el AI Assistant lo gestione, y lo que responde o hace hoy puede diferir de este ejemplo.
:::

La agencia, el cliente, el proyecto, los jobs y las horas de este ejemplo son ilustrativos. Los jobs que ves dependen de tus accesos y de los datos que tu agencia pone a disposición del asistente.

<Walkthrough
  subtitle="Ejemplo de conversación entre un gestor de proyectos y el AI Assistant."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="De una pregunta a un informe de estado">
        El asistente reúne los jobs, las fechas y las horas del proyecto en una sola respuesta, lista para una llamada con el cliente o una reunión de seguimiento.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Pregunta cómo va el proyecto.',
          'Lee los jobs por etapa y las horas registradas frente al contrato.',
          'Pregunta qué podría poner en riesgo el calendario.',
          'Pregunta qué jobs están pendientes del cliente.',
          'Abre un job de la lista para actuar sobre él.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          '¿Cómo vamos con el proyecto de Navidad de Northwind?',
          '¿Qué va con retraso en este proyecto?',
          '¿Qué necesitamos del cliente esta semana?',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'Las etapas dependen del workflow de cada job, así que un mismo proyecto puede mostrar nombres de etapa distintos.',
          'Un job va con retraso cuando su fecha de vencimiento ha pasado y no está en una etapa de cierre.',
          'Pendiente del cliente significa que el job está en una etapa que tu agencia usa para la aprobación o los comentarios del cliente.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Tú">
    <p>¿Cómo vamos con el proyecto Northwind Christmas 2026?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>Northwind Christmas 2026 tiene 14 jobs. 9 están entregados, 3 están en curso y 2 no han empezado.</strong> El proyecto termina el 15 de diciembre.</p>
    <Walkthrough.DataTable
      columns={['', 'Horas']}
      rows={[
        ['Contratadas', '640h'],
        ['Planificadas', '590h'],
        ['Registradas', '398h'],
      ]}
      note="El 62% de las horas contratadas están registradas, con el 70% del tiempo del proyecto transcurrido."
    />
    <p><strong>Cómo he interpretado tu pregunta</strong></p>
    <ul>
      <li>Incluido: todos los jobs del proyecto Northwind Christmas 2026, y las horas planificadas y registradas en ellos hasta hoy.</li>
      <li>Asumido: “entregado” significa que el job está en una etapa de cierre.</li>
    </ul>
    <Walkthrough.Source label="Jobs · 14 filas" />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Tú">
    <p>¿Qué podría poner en riesgo el calendario?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.JobList
      title="Jobs en riesgo"
      rows={[
        { title: 'Christmas Launch Event – Stand Design', number: 'NWC0031EV002', stage: 'In Progress', due: '4 días de retraso', tone: 'late' },
        { title: 'Campaign Website', number: 'NWC0031DIGI001', stage: 'In Progress', due: '20 nov' },
        { title: 'Christmas Launch Event – Stand Production', number: 'NWC0031EV003', stage: 'New', due: '13 nov' },
      ]}
      footer="Jobs · 3 filas"
    />
    <ul>
      <li>El diseño del stand va con retraso y Stand Production no puede empezar hasta que se apruebe.</li>
      <li>Campaign Website tiene 16 horas registradas por encima de lo planificado después de que se añadieran dos landing pages.</li>
    </ul>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Tú">
    <p>¿Qué está pendiente del cliente?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>Tres jobs están a la espera de la aprobación del cliente:</strong></p>
    <Walkthrough.DataTable
      columns={['Job', 'Etapa', 'En espera desde']}
      rows={[
        ['Social Media Calendar – December', 'Client Approval', '23 de octubre'],
        ['In-store Posters', 'Client Approval', '27 de octubre'],
        ['Gift Card Design', 'Client Approval', '29 de octubre'],
      ]}
      note="El calendario de redes sociales de diciembre lleva 7 días en espera y sus primeras publicaciones salen el 1 de diciembre."
    />
  </Walkthrough.Message>
</Walkthrough>

## Artículos relacionados

- [Revisar los Proyectos Retrasados que Necesitan tu Atención](/docs/ai/use-cases/projects-and-jobs/identifying-project-delays)
- [Discutir una Notificación de Retraso de Proyecto](/docs/ai/use-cases/client-dashboards-and-forms/discussing-a-project-delay-notification)
- [Proyecto Burn Workspace](/docs/product/dashboards-and-reporting/project-burn-dashboard)
- [AI Assistant](/docs/ai/ai-assistant)
