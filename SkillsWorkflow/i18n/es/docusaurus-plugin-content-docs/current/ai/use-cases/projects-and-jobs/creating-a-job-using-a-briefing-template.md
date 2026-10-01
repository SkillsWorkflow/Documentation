---
id: creating-a-job-using-a-briefing-template
title: Convertir un Briefing de Campaña en un Job
description: "Pide al AI Assistant que convierta un briefing de campaña en un Job y revisa el Job creado en el chat."
sidebar_label: Convertir un Briefing de Campaña en un Job
sidebar_position: 1
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

## Visión general

Pide al AI Assistant que cree un Job con tus propias palabras. Indica el cliente, el proyecto, el trabajo que hay que hacer y los detalles del briefing que ya conozcas. El asistente utiliza la plantilla de briefing del Job Type seleccionado y te pide que elijas los datos obligatorios que no pueda identificar. Revisa la propuesta antes de aprobar la creación del Job.

La conversación utiliza una configuración de agencia ilustrativa. Los chips de tu cuenta muestran los proyectos, departamentos y Job Types disponibles para ti. El número de Job del ejemplo es ilustrativo.

<Walkthrough
  subtitle="Ejemplo de conversación entre alguien de la agencia y el AI Assistant."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="De la petición al Job">
        El asistente reúne los datos del Job, prepara el briefing con la plantilla del Job Type seleccionado y presenta la creación para su aprobación.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Indica el cliente y el proyecto, o selecciónalos cuando te los pida.',
          'Describe el trabajo y lo que debe incluir el briefing.',
          'Elige los datos restantes entre las opciones que se muestran para tu agencia.',
          'Revisa el Job propuesto y apruébalo para crear el registro.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'Crea un Job para la web de nuestra campaña. Ya tengo los detalles del briefing.',
          'Crea un Job en este proyecto y usa la plantilla de briefing de su Job Type.',
          'Crea un Job a partir de esta petición: [pegar el briefing].',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'El asistente muestra chips seleccionables cuando necesita que elijas un proyecto, tipo de objeto de negocio, departamento o Job Type.',
          'La tarjeta de aprobación permite revisar los datos propuestos. Si el asistente ha preparado un briefing, también puedes editarlo allí.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Tú">
    <p>Necesitamos un Job para la campaña de vehículos eléctricos de General Motors de 2026. Es la web global de la campaña. Ponle el título «GM 2026 EV Campaign – Global Website» y usa la plantilla de briefing del Job Type para webs para redactar el briefing completo.</p>
    <p>La web debe presentar la campaña, mostrar la gama de vehículos eléctricos, explicar el mensaje principal y guiar a los visitantes hacia el siguiente paso. Es para el proyecto de campaña que ya tenemos en General Motors. He adjuntado una referencia visual para la campaña.</p>
    <Walkthrough.Attachment
      src="/img/ai/use-cases/ev-campaign-reference.png"
      filename="ev-campaign-reference.png"
      description="Imagen ilustrativa de referencia para una campaña de vehículos eléctricos"
      caption="Referencia visual adjunta a la petición de la campaña."
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>He encontrado el cliente.</p>
    <Walkthrough.Choices label="Elige un proyecto:" options={['General Motors – 2026 Global EV Campaign', 'General Motors – Corporate Website']} />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Tú">
    <p>Selecciono el proyecto "General Motors – 2026 Global EV Campaign".</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>Elige el tipo de objeto de negocio para este trabajo.</p>
    <Walkthrough.Choices label="Elige un tipo de objeto de negocio:" options={['Job', 'Task']} />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Tú">
    <p>Selecciono el tipo de objeto de negocio "Job".</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>Elige el departamento para este Job.</p>
    <Walkthrough.Choices label="Elige un departamento:" options={['Digital', 'Creative', 'Production']} />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Tú">
    <p>Selecciono el departamento "Digital".</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>Elige el Job Type para la web.</p>
    <Walkthrough.Choices label="Elige un tipo de job:" options={['Web Design', 'Digital Campaign']} />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Tú">
    <p>Selecciono el tipo de job "Web Design".</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>Los datos del Job están listos para su revisión.</p>
    <Walkthrough.FieldTable
      rows={[
        ['Cliente', 'General Motors'],
        ['Proyecto', 'General Motors – 2026 Global EV Campaign'],
        ['Tipo de objeto de negocio', 'Job'],
        ['Departamento', 'Digital'],
        ['Job Type', 'Web Design'],
        ['Título', 'GM 2026 EV Campaign – Global Website'],
        ['Descripción', 'Una web global que presenta la campaña, la gama de vehículos, el mensaje principal y los siguientes pasos'],
        ['Briefing', 'Preparado en las secciones de la plantilla del Job Type seleccionado'],
      ]}
    />
    <p>Revisa los datos y el briefing propuestos en la tarjeta de aprobación antes de crear el Job.</p>
    <Walkthrough.Actions items={[{ label: 'Hacer cambios' }, { label: 'Aprobar', primary: true }]} />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Tú">
    <p>He revisado la propuesta y he seleccionado Aprobar.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>El Job se ha creado.</p>
    <Walkthrough.CreatedJobCard
      label="Job creado"
      title="GM 2026 EV Campaign – Global Website"
      number="1042"
      rows={[
        ['Numero Job', '1042'],
        ['Cliente', 'General Motors'],
        ['Proyecto', 'General Motors – 2026 Global EV Campaign'],
        ['Departamento', 'Digital'],
        ['Tipo de job', 'Web Design'],
        ['Descripción', 'Una web global que presenta la campaña, la gama de vehículos, el mensaje principal y los siguientes pasos'],
      ]}
      actions={['Abrir popup', 'Navegar']}
    />
  </Walkthrough.Message>
</Walkthrough>

## Artículos relacionados

- [AI Assistant](/docs/ai/ai-assistant)
- [AI Agents](/docs/ai/agents)
