---
id: checking-resource-availability
title: Encontrar Creativos Disponibles y Asignar Uno a un Job
description: "Mira cómo un gestor de proyectos pregunta al AI Assistant qué creativos están libres la próxima semana, consulta en qué está asignada una persona, filtra la búsqueda por Typology Group y asigna al creativo disponible a un Job como Executor."
sidebar_label: Encontrar Creativos Disponibles para un Job
sidebar_position: 2
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

## Descripción general

Pregunta al AI Assistant, con tus propias palabras, quién está libre para trabajar en un plazo. El asistente consulta la capacidad, las asignaciones y las ausencias de las personas que puedes planificar, y lista quién está disponible en el periodo con el tiempo libre de cada una. Puedes preguntar en qué está asignada una persona, filtrar la búsqueda por un Typology Group y después pedir al asistente que añada a la persona que elijas al equipo de un Job. Apruebas el cambio antes de que se haga.

La agencia, los clientes, los proyectos, los Jobs, las personas y las horas de este ejemplo son ilustrativos. Las personas y los proyectos que ves dependen de tus accesos y de cómo planifica tu agencia los recursos.

<Walkthrough
  subtitle="Ejemplo de conversación entre un gestor de proyectos y el AI Assistant."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="De la disponibilidad a la asignación">
        El asistente compara la capacidad con el trabajo asignado y las ausencias, muestra quién está libre en el periodo que necesitas y añade a la persona que elijas al equipo del Job con tu aprobación.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Describe el trabajo, el plazo y el tipo de personas que necesitas.',
          'Lee el tiempo libre y las asignaciones actuales de cada persona.',
          'Consulta Cómo he interpretado tu pregunta para ver el periodo, las personas incluidas y lo que se ha asumido.',
          'Pregunta en qué está asignada una persona antes de decidir.',
          'Indica el Job y el rol, revisa el cambio en el equipo y selecciona Aprobar.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          '¿Quién del departamento Creative tiene 40 horas libres la próxima semana?',
          '¿En qué está asignado Daniel entre el 12 y el 16 de octubre?',
          'Añade a Lucas al job Campaign Website como Executor.',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'Las ausencias que aún esperan aprobación no se descuentan del tiempo libre. El asistente las señala por separado.',
          'Pedir por un departamento y pedir por un Typology Group puede devolver personas distintas.',
          'Estar en el equipo de un proyecto no es lo mismo que estar asignado a él. Pregunta por las asignaciones para ver dónde están las horas de una persona.',
          'El asistente pide tu aprobación antes de cambiar el equipo de un Job. Selecciona Denegar para dejar el equipo como está.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Tú">
    <p>Tengo la campaña de Navidad de Northwind Coffee y necesito desarrollar la campaña creativa antes de que termine la próxima semana. ¿Qué creativos están disponibles para trabajar a tiempo completo?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>Cinco miembros del equipo Creative están totalmente disponibles para una semana de 40 horas, del lunes 12 al viernes 16 de octubre:</strong></p>
    <Walkthrough.DataTable
      columns={['Persona', 'Departamento', 'Función', 'Tiempo libre', 'Asignaciones actuales']}
      rows={[
        ['Sofia Marques', 'Creative', 'Associate Creative Director', '40h', '0h'],
        ['Daniel Reed', 'Creative', 'Brand Manager', '40h', '0h'],
        ['Priya Shah', 'Creative', 'Associate Creative Director', '40h', '0h'],
        ['Tom Walsh', 'Creative', 'Creative Director', '40h', '0h'],
        ['Inês Costa', 'Creative', 'Associate Creative Director', '40h', '0h'],
      ]}
      note="Laura Bennett también tiene 40h libres, pero tiene 32h de ausencia pendientes de aprobación de martes a viernes. Si se aprueban, solo le quedarían 8h libres. Maya Collins tiene 30h libres, con 2h asignadas cada día."
    />
    <p><strong>Cómo he interpretado tu pregunta</strong></p>
    <ul>
      <li>Incluido: personas activas y planificables del departamento Creative, del lunes 12 al domingo 18 de octubre de 2026.</li>
      <li>Asumido: “a tiempo completo” significa una semana laboral de 40 horas totalmente libre, de lunes a viernes, sin asignaciones existentes.</li>
      <li>Las ausencias pendientes no se descuentan del tiempo disponible, pero los cuatro días de ausencia pendiente de Laura Bennett podrían cambiar su disponibilidad.</li>
    </ul>
    <Walkthrough.Source label="Ausencias · 4 filas" />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Tú">
    <p>Maya tiene 30 horas libres. ¿En qué está asignada la próxima semana?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>La única asignación de Maya la próxima semana es de <strong>2 horas al día, del lunes 12 al viernes 16 de octubre, 10 horas en total</strong>, en un job de nota de prensa de Lumen Bank. Tiene <strong>30 horas libres</strong> esa semana.</p>
    <p><strong>Cómo he interpretado tu pregunta</strong></p>
    <ul>
      <li>Incluido: la carga de trabajo programada de Maya del lunes 12 al domingo 18 de octubre de 2026.</li>
      <li>Asumido: “asignada” significa trabajo programado, no solo figurar en el equipo de un proyecto.</li>
    </ul>
    <Walkthrough.Source label="Cargas de trabajo · 5 filas" />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Tú">
    <p>Dame la capacidad de los creativos que están totalmente disponibles la próxima semana. Solo necesito los que tienen el Typology Group Creative.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>Lucas Ferreira</strong> es la única persona del Typology Group <strong>Creative</strong> totalmente disponible la próxima semana: <strong>40 horas libres</strong> del lunes 12 al viernes 16 de octubre, sin trabajo asignado ni ausencias. La otra persona de ese Typology Group, <strong>Emma Clarke</strong>, solo tiene <strong>16 horas</strong> de capacidad de trabajo la próxima semana (lunes y martes).</p>
    <p><strong>Cómo he interpretado tu pregunta</strong></p>
    <ul>
      <li>Incluido: personas planificables cuyo Typology Group es exactamente Creative, del lunes 12 al domingo 18 de octubre de 2026.</li>
      <li>Asumido: “totalmente disponible” significa 40 horas de trabajo libres de lunes a viernes.</li>
      <li>La capacidad incluye el trabajo asignado y las ausencias registradas; ninguno reduce las 40 horas disponibles de Lucas Ferreira.</li>
    </ul>
    <Walkthrough.Source label="Capacidad · 14 filas" />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Tú">
    <p>Vale, necesito empezar el job Northwind Christmas 2026 – Campaign Website, así que asígnaselo a Lucas como ejecutor.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.ApprovalCard
      title="Añadir al equipo de este documento"
      subtitle="NWC0021DIGI001 · Northwind Christmas 2026 – Campaign Website"
      rows={[['Añadiendo', 'Lucas Ferreira como Executor']]}
      actions={[{ label: 'Denegar' }, { label: 'Aprobar', primary: true }]}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Tú">
    <p>He revisado el cambio en el equipo y he seleccionado Aprobar.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.StatusChip status="Actualizado" label="NWC0021DIGI001 · Northwind Christmas 2026 – Campaign Website" />
    <p>Lucas Ferreira ha sido asignado como Executor en Northwind Christmas 2026 – Campaign Website (NWC0021DIGI001).</p>
  </Walkthrough.Message>
</Walkthrough>

## Artículos relacionados

- [Identificar Escasez de Recursos](/docs/ai/use-cases/resource-management/identifying-resource-scarcity)
- [Convertir un Briefing de Campaña en un Job](/docs/ai/use-cases/projects-and-jobs/creating-a-job-using-a-briefing-template)
- [AI Assistant](/docs/ai/ai-assistant)
