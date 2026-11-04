---
id: finding-pending-tasks-and-actions
title: Ver los Jobs en los que Trabajas
description: "Mira cómo un creativo pregunta al AI Assistant en qué Jobs está esta semana, a qué proyectos pertenecen y qué espera una acción suya."
sidebar_label: Ver los Jobs en los que Trabajas
sidebar_position: 4
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

## Visión general

Pregunta al AI Assistant, con tus propias palabras, en qué Jobs estás trabajando y qué espera una acción tuya. El asistente encuentra los Jobs en los que estás en el equipo, los resume con los proyectos a los que pertenecen y lista cada Job con su etapa y su fecha límite, o cuántos días lleva de retraso. Selecciona un Job de la lista para ver su proyecto y abrirlo.

La agencia, los clientes, los proyectos, los números de Job y las etapas de este ejemplo son ilustrativos. Los Jobs que ves dependen de los equipos de los que formas parte.

<Walkthrough
  subtitle="Ejemplo de conversación entre un creativo y el AI Assistant."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="Tus Jobs de un vistazo">
        El asistente encuentra los Jobs en los que estás en el equipo, o que esperan una acción tuya, y los lista con su etapa y su fecha límite.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Pide tus Jobs y el periodo que quieres consultar.',
          'Lee el resumen para ver cuántos Jobs tienes y a qué proyectos pertenecen.',
          'Consulta Cómo he interpretado tu pregunta para ver qué se ha incluido y asumido.',
          'Selecciona un Job para ver su cliente, proyecto, tipo de job y departamento, y luego previsualízalo o ábrelo.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          '¿En qué Jobs estoy esta semana?',
          '¿Cuáles de mis Jobs van con retraso?',
          '¿Cuáles de mis Jobs vencen antes del viernes, y en qué proyectos están?',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'Si pides tareas, el asistente puede interpretarlas como Jobs. Lo indica en Cómo he interpretado tu pregunta.',
          'Un Job con la fecha límite vencida muestra cuántos días lleva de retraso, salvo que esté en una etapa finalizada.',
          'La lista muestra los primeros cinco Jobs. Para ver el resto, selecciona el botón al final de la lista.',
          'Consultar tus Jobs no los modifica, así que no se necesita aprobación.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Tú">
    <p>¿En qué Jobs estoy trabajando esta semana, y a qué proyectos pertenecen?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>Estás trabajando en <strong>3 jobs esta semana</strong>, en dos proyectos: <strong>General Motors – 2026 Global EV Campaign</strong> y <strong>Northwind Coffee – Autumn 2026 In-Store</strong>. Uno es nuevo y está programado para hoy; los otros dos están en curso y duran hasta el viernes.</p>
    <p><strong>Cómo he interpretado tu pregunta</strong></p>
    <ul>
      <li>Incluido: jobs en los que estás en el equipo y cuyas fechas programadas coinciden con el 5–11 de octubre de 2026.</li>
      <li>Asumido: “estar trabajando” significa jobs en los que eres miembro del equipo, usando sus fechas de inicio y fin programadas.</li>
      <li>Mostrando hasta 50 jobs, ordenados por fecha de inicio.</li>
    </ul>
    <Walkthrough.JobList
      title="Jobs"
      previewLabel="Vista previa"
      openLabel="Abrir"
      footer="Jobs · 3 filas"
      rows={[
        { title: 'GM 2026 EV Campaign – Social Launch Assets', number: 'GMC0042CR001', stage: 'Nuevo', due: 'Hoy', tone: 'soon' },
        { title: 'GM 2026 EV Campaign – Global Website', number: 'GMC0042DIGI001', stage: 'En curso', due: '9 oct' },
        { title: 'Northwind Coffee – Autumn Menu Posters', number: 'NWC0017CR001', stage: 'En curso', due: '9 oct' },
      ]}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Tú">
    <p>¿Qué tareas están pendientes de alguna acción por mi parte?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>Tienes <strong>4 jobs pendientes de una acción tuya</strong>. Incluyen <strong>dos jobs con la fecha vencida</strong>, uno que vence hoy y otro el viernes. La mayoría están en curso; uno es nuevo.</p>
    <p><strong>Cómo he interpretado tu pregunta</strong></p>
    <ul>
      <li>Incluido: jobs marcados específicamente como pendientes para ti.</li>
      <li>Asumido: “tareas” significa jobs, y “pendientes de acción” significa el estado del job pendiente para ti.</li>
      <li>Mostrando hasta 50 jobs, ordenados por fecha de fin programada.</li>
    </ul>
    <Walkthrough.JobList
      title="Jobs"
      previewLabel="Vista previa"
      openLabel="Abrir"
      footer="Jobs · 4 filas"
      rows={[
        {
          title: 'Lumen Bank Brand Refresh – Key Visual',
          number: 'LUM0031CR001',
          stage: 'En curso',
          due: 'hace 12 días',
          tone: 'late',
          facts: [
            ['Cliente', 'Lumen Bank'],
            ['Proyecto', 'Lumen Bank – 2026 Brand Refresh'],
            ['Tipo de job', 'Dirección de Arte'],
            ['Departamento', 'Creativo'],
          ],
        },
        { title: 'Lumen Bank Brand Refresh – Social Templates', number: 'LUM0031CR002', stage: 'En curso', due: 'hace 2 días', tone: 'late' },
        { title: 'GM 2026 EV Campaign – Social Launch Assets', number: 'GMC0042CR001', stage: 'Nuevo', due: 'Hoy', tone: 'soon' },
        { title: 'GM 2026 EV Campaign – Global Website', number: 'GMC0042DIGI001', stage: 'En curso', due: '9 oct' },
      ]}
    />
  </Walkthrough.Message>
</Walkthrough>

## Artículos relacionados

- [Convertir un Briefing de Campaña en un Job](/docs/ai/use-cases/projects-and-jobs/creating-a-job-using-a-briefing-template)
- [Revisar los Proyectos Retrasados que Necesitan tu Atención](/docs/ai/use-cases/projects-and-jobs/identifying-project-delays)
- [AI Assistant](/docs/ai/ai-assistant)
