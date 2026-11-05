---
id: asking-questions-about-client-projects-and-tasks
title: Preguntar por los Proyectos y Tareas de un Cliente
description: "Mira cómo un account manager pregunta al AI Assistant qué hay abierto para un cliente: los jobs abiertos y con retraso, quién es responsable y quién los ejecuta, y lo que vence a continuación para sus clientes."
sidebar_label: Preguntar por los Proyectos y Tareas de un Cliente
sidebar_position: 3
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

## Descripción general

Pregunta al AI Assistant, con tus propias palabras, qué hay abierto para un cliente. Responde con los jobs abiertos del cliente, cuántos van con retraso y lo que necesita atención: aprobaciones pendientes, jobs sin ejecutor o que aún no están listos para empezar. Haz preguntas de seguimiento para ver qué jobs van con retraso, con sus responsables y ejecutores, y lo que vence a continuación en todos tus clientes. Úsalo para preparar una llamada con el cliente o para decidir por dónde empezar.

Cada job de la respuesta es un enlace. Selecciona uno para abrirlo y actuar sobre él. Cuando un workspace te ayuda a seguir el trabajo, el asistente lo sugiere con un botón **Abrir**.

El cliente, los proyectos, los jobs y las personas de este ejemplo son ilustrativos. Los jobs que ves dependen de tus accesos y de los datos que tu agencia pone a disposición del asistente.

<Walkthrough
  subtitle="Ejemplo de conversación entre un account manager y el AI Assistant."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="El trabajo de un cliente en una sola respuesta">
        El asistente reúne los jobs abiertos del cliente, sus fechas de vencimiento, sus responsables y sus ejecutores, para que sepas qué hay abierto y con quién hablar.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Pregunta qué hay abierto para el cliente.',
          'Lee los jobs abiertos y con retraso y lo que necesita atención.',
          'Pregunta qué jobs van con retraso y quién los tiene.',
          'Pregunta qué vence a continuación para tus clientes.',
          'Abre un job desde la respuesta para actuar sobre él.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          '¿Qué tenemos abierto para Corvane Bank?',
          '¿Quién tiene los jobs con retraso de Corvane Bank?',
          '¿Qué vence la próxima semana para mis clientes?',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'Los jobs abiertos son los que están en una etapa nueva, en curso o pendiente de aprobación. Los jobs terminados quedan fuera.',
          'Un job va con retraso cuando está marcado como retrasado.',
          'Quién tiene un job son sus responsables y sus ejecutores.',
          'Mis clientes son los clientes que tienes asignados.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Tú">
    <p>Mañana tengo una llamada con Corvane Bank. ¿Qué tenemos abierto para ellos?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>Corvane Bank tiene 17 jobs abiertos, 3 de ellos con retraso.</strong></p>
    <p>Para tu llamada, los puntos principales son:</p>
    <ul>
      <li>Hay dos aprobaciones pendientes: una con el cliente y otra con Account Management.</li>
      <li>Un job con retraso no tiene ejecutor asignado.</li>
      <li>La mayor parte del trabajo abierto pertenece a los proyectos Spring Savings Campaign y Mobile App Onboarding.</li>
    </ul>
    <Walkthrough.JobList
      title="Jobs con retraso"
      previewLabel="Vista previa"
      openLabel="Abrir"
      rows={[
        { title: 'Spring Savings – Key Visual', number: 'CVB0012CR001', stage: 'In Progress', due: '6 días de retraso', tone: 'late' },
        { title: 'Spring Savings – Radio Script', number: 'CVB0012CW002', stage: 'Client Approval', due: '3 días de retraso', tone: 'late' },
        { title: 'Onboarding Screens – Copy', number: 'CVB0014CW001', stage: 'To Do', due: '1 día de retraso', tone: 'late' },
      ]}
      footer="Jobs · 17 filas"
    />
    <p>Puedes seguir el trabajo abierto por etapa en el workspace de abajo.</p>
    <Walkthrough.WorkspaceCard title="Kanban" subtitle="Workspace · Menu" actionLabel="Abrir" />
    <p><strong>Cómo he interpretado tu pregunta</strong></p>
    <ul>
      <li>Incluido: los jobs de Corvane Bank visibles para ti en una etapa nueva, en curso o pendiente de aprobación.</li>
      <li>Asumido: “abierto” significa jobs, no presupuestos, facturas ni solicitudes.</li>
    </ul>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Tú">
    <p>¿Cuáles van con retraso y quién los tiene?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>Tres jobs de Corvane Bank van con retraso.</strong> Mark Evans es responsable de dos de ellos.</p>
    <Walkthrough.DataTable
      columns={['Job', 'Vencimiento', 'Responsable', 'Ejecutores', 'Etapa']}
      rows={[
        ['Spring Savings – Key Visual', '29 oct', 'Mark Evans', 'Sarah Lee', 'In Progress'],
        ['Spring Savings – Radio Script', '1 nov', 'Mark Evans', 'Anna Smith', 'Client Approval'],
        ['Onboarding Screens – Copy', '3 nov', 'Julia Green', 'Ninguno asignado', 'To Do'],
      ]}
      note="Onboarding Screens – Copy no tiene ejecutor asignado. Confirma quién lo hará antes de la llamada."
    />
    <p><strong>Cómo he interpretado tu pregunta</strong></p>
    <ul>
      <li>Asumido: “quién los tiene” significa los responsables y los ejecutores asignados.</li>
      <li>Asumido: “con retraso” significa que el job está marcado como retrasado.</li>
    </ul>
    <Walkthrough.Source label="Jobs · 3 filas" />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Tú">
    <p>¿Y qué vence la próxima semana para mis clientes?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>Cuatro jobs abiertos de tus clientes vencen entre el 9 y el 15 de noviembre.</strong> Uno está pendiente de la aprobación del cliente.</p>
    <Walkthrough.JobList
      title="Vencen la próxima semana"
      previewLabel="Vista previa"
      openLabel="Abrir"
      rows={[
        { title: 'Spring Savings – Social Posts', number: 'CVB0012CR004', stage: 'In Progress', due: '9 nov' },
        { title: 'Spring Savings – Landing Page', number: 'CVB0012DIGI001', stage: 'To Do', due: '10 nov' },
        { title: 'Onboarding Screens – Design', number: 'CVB0014DE001', stage: 'In Progress', due: '12 nov' },
        { title: 'Winter Menu – Poster', number: 'ORV0040CR002', stage: 'Client Approval', due: '13 nov' },
      ]}
      footer="Jobs · 4 filas"
    />
    <p>Puedes seguir las próximas fechas de vencimiento en el calendario de abajo.</p>
    <Walkthrough.WorkspaceCard title="Calendario" subtitle="Workspace · Menu" actionLabel="Abrir" />
    <p><strong>Cómo he interpretado tu pregunta</strong></p>
    <ul>
      <li>Asumido: “mis clientes” significa los clientes que tienes asignados, no solo los jobs en los que estás en el equipo.</li>
      <li>Incluido: jobs que vencen del lunes 9 al domingo 15 de noviembre. Los jobs terminados y los retrasados más antiguos quedan fuera.</li>
    </ul>
  </Walkthrough.Message>
</Walkthrough>

## Artículos relacionados

- [Revisar los Jobs Críticos de tus Clientes](/docs/ai/use-cases/accounts-status/monitoring-critical-activities-across-accounts)
- [Ver los Jobs en los que Trabajas](/docs/ai/use-cases/projects-and-jobs/finding-pending-tasks-and-actions)
- [Preguntar por el Estado de un Proyecto](/docs/ai/use-cases/client-dashboards-and-forms/asking-questions-about-project-status)
- [AI Assistant](/docs/ai/ai-assistant)
