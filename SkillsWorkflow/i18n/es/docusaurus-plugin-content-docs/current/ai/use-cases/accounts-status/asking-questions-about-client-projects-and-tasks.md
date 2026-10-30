---
id: asking-questions-about-client-projects-and-tasks
title: Preguntar por los Proyectos y Tareas de un Cliente
description: "Mira cómo un account manager pregunta al AI Assistant qué hay abierto para un cliente: sus proyectos, los jobs vencidos y quién los tiene, y lo que vence a continuación."
sidebar_label: Preguntar por los Proyectos y Tareas de un Cliente
sidebar_position: 3
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

## Descripción general

Pregunta al AI Assistant, con tus propias palabras, qué hay abierto para un cliente o para varios. Lista los proyectos activos del cliente con sus jobs abiertos y con retraso, y puedes hacer preguntas de seguimiento para ver qué jobs están vencidos y quién es responsable de cada uno, y qué vence en los próximos días. Úsalo para preparar una llamada con el cliente o para decidir por dónde empezar a hacer seguimiento.

:::note Preview
Este caso de uso está en preview y aún no se ha probado de principio a fin. La conversación muestra cómo se espera que el AI Assistant lo gestione, y lo que responde o hace hoy puede diferir de este ejemplo.
:::

La agencia, el cliente, los proyectos, los jobs y las personas de este ejemplo son ilustrativos. Los jobs que ves dependen de tus accesos y de los datos que tu agencia pone a disposición del asistente.

<Walkthrough
  subtitle="Ejemplo de conversación entre un account manager y el AI Assistant."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="El trabajo de un cliente en una sola respuesta">
        El asistente reúne los proyectos, los jobs, las fechas de vencimiento y los responsables del cliente, para que sepas qué está abierto y con quién hablar.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Pregunta qué hay abierto para el cliente.',
          'Lee los proyectos con sus jobs abiertos y con retraso.',
          'Pregunta qué jobs están vencidos y quién los tiene.',
          'Pregunta qué vence a continuación.',
          'Abre un job de la lista para actuar sobre él.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          '¿Qué tenemos abierto para Contoso Bank?',
          '¿Quién es responsable de los jobs con retraso de Contoso?',
          '¿Qué vence para mis clientes la próxima semana?',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'El responsable es la persona definida como tal en el equipo del job.',
          'Un job está vencido cuando su fecha de vencimiento ha pasado y no está en una etapa de cierre.',
          'Pregunta por varios clientes a la vez nombrándolos, o pide todos los clientes de los que eres responsable.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Tú">
    <p>Mañana tengo una llamada con Contoso Bank. ¿Qué tenemos abierto para ellos?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>Contoso Bank tiene cuatro proyectos activos con 17 jobs abiertos, 3 de ellos con retraso:</strong></p>
    <Walkthrough.DataTable
      columns={['Proyecto', 'Jobs abiertos', 'Con retraso', 'Próximo vencimiento']}
      rows={[
        ['Spring Savings Campaign', '7', '2', '4 de noviembre'],
        ['Mobile App Onboarding', '5', '1', '6 de noviembre'],
        ['Annual Report 2026', '3', '0', '20 de noviembre'],
        ['Branch Signage Refresh', '2', '0', '2 de diciembre'],
      ]}
    />
    <p><strong>Cómo he interpretado tu pregunta</strong></p>
    <ul>
      <li>Incluido: proyectos de Contoso Bank que no están en una etapa de cierre, y sus jobs que no están entregados.</li>
      <li>Asumido: “abierto” significa que no está en una etapa de cierre.</li>
    </ul>
    <Walkthrough.Source label="Jobs · 17 filas" />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Tú">
    <p>¿Cuáles van con retraso y quién los tiene?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.JobList
      title="Jobs con retraso de Contoso Bank"
      rows={[
        { title: 'Spring Savings – Key Visual', number: 'CTB0012CR001', stage: 'In Progress', due: '6 días de retraso', tone: 'late', facts: [['Responsable', 'Mark Evans'], ['Proyecto', 'Spring Savings Campaign'], ['Registrado', '22h de 16h planificadas']] },
        { title: 'Spring Savings – Radio Script', number: 'CTB0012CW002', stage: 'Client Approval', due: '3 días de retraso', tone: 'late' },
        { title: 'Onboarding Screens – Copy', number: 'CTB0014CW001', stage: 'In Progress', due: '1 día de retraso', tone: 'late' },
      ]}
      footer="Jobs · 3 filas"
    />
    <ul>
      <li>Mark Evans tiene el key visual. El guion de radio está con el cliente para aprobación desde el 27 de octubre.</li>
      <li>Julia Green tiene el copy del onboarding, que espera entregar mañana según el Feed del job.</li>
    </ul>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Tú">
    <p>¿Y qué vence la próxima semana?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>Cuatro jobs de Contoso Bank vencen la próxima semana:</strong></p>
    <Walkthrough.DataTable
      columns={['Job', 'Vencimiento', 'Responsable', 'Etapa']}
      rows={[
        ['Spring Savings – Social Posts', '9 de noviembre', 'Sarah Lee', 'In Progress'],
        ['Spring Savings – Landing Page', '10 de noviembre', 'Anna Smith', 'New'],
        ['Onboarding Screens – Design', '12 de noviembre', 'David Brown', 'In Progress'],
        ['Annual Report – Layout', '13 de noviembre', 'Julia Green', 'In Progress'],
      ]}
      note="La landing page no ha empezado y necesita el key visual, que va con retraso."
    />
  </Walkthrough.Message>
</Walkthrough>

## Artículos relacionados

- [Revisar los Jobs Críticos de tus Clientes](/docs/ai/use-cases/accounts-status/monitoring-critical-activities-across-accounts)
- [Ver los Jobs en los que Trabajas](/docs/ai/use-cases/projects-and-jobs/finding-pending-tasks-and-actions)
- [Preguntar por el Estado de un Proyecto](/docs/ai/use-cases/client-dashboards-and-forms/asking-questions-about-project-status)
- [AI Assistant](/docs/ai/ai-assistant)
