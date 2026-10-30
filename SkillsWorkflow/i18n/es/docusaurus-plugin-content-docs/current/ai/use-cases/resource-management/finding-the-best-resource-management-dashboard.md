---
id: finding-the-best-resource-management-dashboard
title: Encontrar el Mejor Workspace para Gestión de Recursos
description: "Mira cómo un gestor de proyectos pregunta al AI Assistant qué workspaces usar para la asignación, la utilización y las necesidades de recursos, y abre el workspace recomendado desde el chat."
sidebar_label: Encontrar el Mejor Workspace de Gestión de Recursos
sidebar_position: 4
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

## Descripción general

Pregunta al AI Assistant, con tus propias palabras, qué workspace usar para lo que quieres monitorizar: cómo está asignado el trabajo entre las personas, cuán ocupado está el equipo o dónde la demanda planificada supera la capacidad disponible. El asistente relaciona tu pregunta con los workspaces que tiene tu agencia, explica para qué sirve cada uno y recomienda la opción más clara. Cada workspace recomendado incluye un botón **Open workspace**, para que puedas ir directamente a él desde el chat.

La agencia y el equipo de este ejemplo son ilustrativos. Skills Workflow ofrece un conjunto de workspaces estándar, y algunas agencias tienen también workspaces personalizados creados a petición. El asistente recomienda a partir de los workspaces disponibles en tu agencia, así que los nombres que ves pueden ser distintos de los de este ejemplo. Resources Scheduler, My Scheduler y Capacity × Workload, usados en este ejemplo, son workspaces estándar.

<Walkthrough
  subtitle="Ejemplo de conversación entre un gestor de proyectos y el AI Assistant."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="De la pregunta al workspace">
        El asistente te dice cuál de los workspaces de tu agencia responde a tu pregunta de gestión de recursos, explica por qué y te lleva hasta él.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Di qué quieres monitorizar: asignación, utilización o necesidades de recursos.',
          'Lee qué workspace recomienda el asistente para cada caso y por qué.',
          'Haz una pregunta de seguimiento para afinar la elección, por ejemplo para tu propio trabajo o para un equipo.',
          'Selecciona Open workspace en la tarjeta para ir al workspace recomendado.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          '¿Qué workspace muestra dónde el trabajo planificado supera la capacidad?',
          '¿Dónde puedo ver en qué está asignado mi equipo el próximo mes?',
          '¿Cuál es el mejor dashboard para monitorizar la utilización de recursos por departamento?',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'Además de los workspaces estándar, tu agencia puede tener workspaces personalizados. Describe lo que quieres ver y el asistente lo relaciona con los workspaces disponibles en la tuya.',
          'Un mismo workspace puede responder a más de una pregunta. Aquí, un único workspace cubre la utilización y la demanda planificada frente a la capacidad.',
          'Abrir un workspace desde el chat está en preview. Hasta que esté disponible, abre el workspace desde su menú.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Tú">
    <p>Necesito seguir la asignación de recursos de mi equipo. ¿Qué dashboard debo usar?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>Para la <strong>asignación</strong>, usa <strong>Resources Scheduler</strong>. Es la opción más cercana para asignar y revisar trabajo entre recursos.</p>
    <p>Para tus propias asignaciones, usa <strong>My Scheduler</strong>.</p>
    <Walkthrough.WorkspaceCard
      title="Resources Scheduler"
      subtitle="Workspace · Menu"
      description="Asigna y revisa trabajo entre recursos en una línea de tiempo y ve en qué está asignado cada uno."
      badge="Preview"
    />
    <Walkthrough.WorkspaceCard
      title="My Scheduler"
      subtitle="Workspace · Menu"
      description="Revisa en una línea de tiempo el trabajo que tienes asignado."
      badge="Preview"
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Tú">
    <p>¿Y para ver la utilización, y si el trabajo planificado supera la capacidad que tenemos?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <ul>
      <li><strong>Utilización:</strong> usa <strong>Capacity × Workload</strong>. Es la mejor vista disponible para evaluar el Workload frente a la capacidad e identificar sobreasignación o infraasignación.</li>
      <li><strong>Necesidades de recursos, demanda planificada frente a capacidad disponible:</strong> usa también <strong>Capacity × Workload</strong>. Muestra dónde el trabajo planificado supera la capacidad de recursos disponible.</li>
    </ul>
    <p>Las vistas de <strong>Planning</strong> probablemente son útiles para la planificación futura, pero <strong>Capacity × Workload</strong> es la opción más clara para analizar la capacidad frente a la demanda.</p>
    <Walkthrough.WorkspaceCard
      title="Capacity × Workload"
      subtitle="Workspace · Menu"
      description="Compara el Workload con la capacidad para encontrar sobreasignación e infraasignación, y dónde el trabajo planificado supera la capacidad disponible."
      badge="Preview"
    />
  </Walkthrough.Message>
</Walkthrough>

## Artículos relacionados

- [Resource Scheduler](/docs/product/planning-and-scheduling/resourcing/resource-scheduler)
- [Usar workspaces](/docs/product/dashboards-and-reporting/using-workspaces)
- [Encontrar Creativos Disponibles y Asignar Uno a un Job](/docs/ai/use-cases/resource-management/checking-resource-availability)
- [AI Assistant](/docs/ai/ai-assistant)
