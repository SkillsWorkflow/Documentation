---
id: identifying-project-delays
title: Revisar los Proyectos Retrasados que Necesitan tu Atención
description: "Mira cómo un gestor de proyectos pregunta al AI Assistant cuáles de sus proyectos van con retraso, encuentra proyectos cerrados con Jobs aún abiertos y mueve esos Jobs a una etapa final."
sidebar_label: Revisar Proyectos Retrasados
sidebar_position: 3
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

## Visión general

Pregunta al AI Assistant, con tus propias palabras, cuáles de tus proyectos van con retraso y qué sigue pendiente. El asistente encuentra los proyectos en los que estás en el equipo y que están marcados como retrasados, junto con los Jobs que esperan una acción tuya. Las preguntas siguientes acotan la respuesta, por ejemplo a proyectos cerrados cuyos Jobs quedaron abiertos. Después, el asistente puede cancelar esos Jobs o moverlos a otra etapa cuando lo apruebes.

La agencia, los clientes, los proyectos, los números de Job, las etapas y las transiciones de este ejemplo son ilustrativos. Los proyectos y Jobs que ves dependen de los equipos de los que formas parte, y las transiciones dependen del workflow de cada Job.

<Walkthrough
  subtitle="Ejemplo de conversación entre un gestor de proyectos y el AI Assistant."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="Retrasos que te necesitan">
        El asistente encuentra los proyectos retrasados de tus equipos y los Jobs que esperan una acción tuya, los acota con cada pregunta siguiente y mueve Jobs abiertos a otra etapa con tu aprobación.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Pregunta cuáles de tus proyectos van con retraso y qué sigue pendiente.',
          'Consulta Cómo he interpretado tu pregunta para ver qué se ha incluido y asumido.',
          'Pide los proyectos cerrados que aún tienen Jobs abiertos.',
          'Pide al asistente que cancele esos Jobs, o elige otra transición disponible.',
          'Revisa el cambio de etapa y selecciona Aprobar.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          '¿Cuáles de mis proyectos van con retraso?',
          '¿Hay proyectos cerrados que aún tengan Jobs abiertos?',
          'Cancela los Jobs abiertos de proyectos que ya están cerrados.',
          '¿Qué transiciones hay disponibles para este Job?',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'Cada pregunta siguiente parte de la respuesta anterior.',
          'Un Job solo se puede cancelar cuando su workflow tiene una transición de cancelación disponible. Pide las transiciones disponibles para ver las alternativas.',
          'El asistente pide tu aprobación antes de mover un Job a otra etapa. Selecciona Rechazar para dejar el Job sin cambios.',
          'Consultar proyectos y Jobs no los modifica, así que no se necesita aprobación.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Tú">
    <p>¿Cuáles de mis proyectos van con retraso? Necesito cerrar todo lo que ya está fuera de plazo y ver qué tareas siguen pendientes.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>Tienes <strong>9 proyectos</strong> en tu equipo marcados como retrasados. También tienes <strong>4 jobs pendientes para ti</strong>. <strong>Tres están marcados como retrasados</strong>; uno no.</p>
    <p><strong>Cómo he interpretado tu pregunta</strong></p>
    <ul>
      <li>Incluido: proyectos en los que estás en el equipo y que están marcados como retrasados.</li>
      <li>Incluido: jobs en los que estás en el equipo y que tienen una acción pendiente tuya.</li>
      <li>Asumido: “fuera de plazo” significa elementos marcados como retrasados, y “mis” significa que eres miembro del equipo del proyecto o del job.</li>
      <li>Ambas listas ordenadas por fecha de fin, de la más antigua a la más reciente.</li>
    </ul>
    <Walkthrough.JobList
      title="Jobs"
      previewLabel="Vista previa"
      openLabel="Abrir"
      footer="Jobs · 4 filas"
      rows={[
        { title: 'GM 2025 Dealer Event – Recap Video', number: 'GMC0036VID001', stage: 'En curso', due: 'hace 383 días', tone: 'late' },
        { title: 'Lumen Bank Annual Report – Print Edition', number: 'LUM0024CR003', stage: 'Nuevo', due: 'hace 305 días', tone: 'late' },
        { title: 'Orbit Telecom Autumn Promo – Social Assets', number: 'ORB0015CR001', stage: 'En curso', due: 'hace 41 días', tone: 'late' },
        { title: 'GM 2026 EV Campaign – Global Website', number: 'GMC0042DIGI001', stage: 'En curso', due: '9 oct' },
      ]}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Tú">
    <p>¿Y hay proyectos pasados, ya cerrados, que aún tengan jobs abiertos? Quiero cerrarlos correctamente.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>Hay <strong>2 jobs abiertos en proyectos cerrados</strong>: uno en un proyecto finalizado y otro en un proyecto aprobado. Se muestran abajo y conviene revisarlos, porque su proyecto ya está cerrado.</p>
    <p><strong>Cómo he interpretado tu pregunta</strong></p>
    <ul>
      <li>Incluido: proyectos de tu equipo en etapas aprobadas, finalizadas o canceladas.</li>
      <li>Incluido: jobs de esos proyectos que no están en etapas aprobadas, finalizadas o canceladas.</li>
      <li>Asumido: “cerrado” significa aprobado, finalizado o cancelado; “job abierto” significa un job fuera de esas etapas finales.</li>
      <li>Ordenados por fecha de fin del job, de la más antigua a la más reciente.</li>
    </ul>
    <Walkthrough.JobList
      title="Jobs"
      previewLabel="Vista previa"
      openLabel="Abrir"
      footer="Jobs · 2 filas"
      rows={[
        { title: 'GM 2025 Dealer Event – Recap Video', number: 'GMC0036VID001', stage: 'En curso', due: 'hace 383 días', tone: 'late' },
        { title: 'Lumen Bank Annual Report – Print Edition', number: 'LUM0024CR003', stage: 'Nuevo', due: 'hace 305 días', tone: 'late' },
      ]}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Tú">
    <p>Cancélame estos jobs abiertos, por favor.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.StatusChip status="Actualizado" label='Mover este job a "Cancelado"' />
    <p>El job GMC0036VID001 – GM 2025 Dealer Event – Recap Video se ha cancelado correctamente. El otro job, LUM0024CR003 – Lumen Bank Annual Report – Print Edition, no tiene ninguna transición de cancelación disponible, así que no se ha modificado.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Tú">
    <p>¿Qué transiciones tienes disponibles?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>Transiciones disponibles para LUM0024CR003 – Lumen Bank Annual Report – Print Edition: Send for Review → To Review by Traffic; In Progress → In Progress; Close → Done. La cancelación no está disponible.</p>
    <Walkthrough.Choices
      label="Elige una transición"
      options={['Send for Review → To Review by Traffic', 'In Progress → In Progress', 'Close → Done']}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Tú">
    <p>Close → Done</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.ApprovalCard
      title='Mover este job a "Done"'
      subtitle="LUM0024CR003 · Lumen Bank Annual Report – Print Edition"
      rows={[['Etapa de destino', 'Done']]}
      actions={[{ label: 'Rechazar' }, { label: 'Aprobar', primary: true }]}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Tú">
    <p>He revisado el cambio de etapa y he seleccionado Aprobar.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.StatusChip status="Actualizado" label="LUM0024CR003 · Lumen Bank Annual Report – Print Edition" />
    <p>LUM0024CR003 – Lumen Bank Annual Report – Print Edition se ha movido a Done correctamente.</p>
  </Walkthrough.Message>
</Walkthrough>

## Artículos relacionados

- [Ver los Jobs en los que Trabajas](/docs/ai/use-cases/projects-and-jobs/finding-pending-tasks-and-actions)
- [Recibir Notificaciones Sobre Retrasos de Proyecto](/docs/ai/use-cases/client-dashboards-and-forms/receiving-notifications-about-project-delays)
- [AI Assistant](/docs/ai/ai-assistant)
