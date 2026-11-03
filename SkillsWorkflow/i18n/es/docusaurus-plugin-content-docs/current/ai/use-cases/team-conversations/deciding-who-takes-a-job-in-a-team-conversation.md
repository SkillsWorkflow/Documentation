---
id: deciding-who-takes-a-job-in-a-team-conversation
title: Decidir Quién se Encarga de un Job en una Conversación de Equipo
description: "Mira cómo un director de cuentas y un traffic manager preguntan a Skilio, dentro de su conversación del Chat, quién está libre para un nuevo plazo, y asignan a la persona que acuerdan al equipo del Job."
sidebar_label: Decidir Quién se Encarga de un Job
sidebar_position: 1
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

:::preview
Este caso de uso está en preview, la conversación muestra cómo se espera que el AI Assistant lo gestione, y lo que responde o hace hoy puede diferir de este ejemplo.
:::

## Descripción general

Cuando se está tomando una decisión en una conversación del Chat, cualquiera de sus participantes puede mencionar a **@Skilio** para aportar los datos. Aquí, el cliente ha adelantado un plazo. El director de cuentas y el traffic manager preguntan a Skilio quién está libre, se ponen de acuerdo en una persona en la conversación y piden a Skilio que la añada al equipo del Job. Quien lo pidió aprueba el cambio antes de que se haga.

La agencia, el cliente, las personas, el Job y las horas de este ejemplo son ilustrativos.

<Walkthrough
  variant="team"
  conversation="Campaña de Navidad de Velmont"
  members="3 en línea · 5 miembros"
  subtitle="Un director de cuentas y un traffic manager deciden en el Chat, con Skilio en la conversación."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="De una pregunta a una decisión">
        Skilio responde en la conversación, así que todos trabajan con los mismos números y la decisión se toma donde está la discusión.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Menciona a @Skilio con el periodo y el tipo de personas que necesitas.',
          'Comenta las opciones con el resto de la conversación.',
          'Vuelve a mencionar a @Skilio para asignar a la persona acordada.',
          'Revisa el cambio en el equipo y selecciona Aprobar.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          '@Skilio ¿quién de Creative tiene 30 horas libres antes del 15?',
          '@Skilio ¿en qué está asignado Lucas la próxima semana?',
          '@Skilio añade a Sofia al job Campaign Website como Executor.',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'Todos los participantes de la conversación ven las respuestas de Skilio.',
          'Solo la persona que mencionó a Skilio puede aprobar el cambio que prepara.',
          'Selecciona Denegar para dejar el equipo del Job como está.',
        ]}
      />
    </>
  }
>
  <Walkthrough.DateSeparator label="Hoy" />

  <Walkthrough.Message sender="member" name="Ana Costa" time="09:12" avatar="/img/ai/avatars/ana-costa.svg">
    <p>Velmont quiere la web de la campaña de Navidad para el día 15, no para el 22. ¿Podemos hacerlo?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="me" name="Rui Santos" time="09:14" avatar="/img/ai/avatars/rui-santos.svg">
    <p>Depende de quién esté libre en Creative. @Skilio ¿quién de Creative tiene al menos 30 horas libres entre el 3 y el 15 de diciembre?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio" time="09:16">
    <p><strong>Dos personas de Creative tienen al menos 30 horas libres entre el jueves 3 y el martes 15 de diciembre:</strong></p>
    <Walkthrough.DataTable
      columns={['Persona', 'Función', 'Tiempo libre', 'Asignaciones actuales']}
      rows={[
        ['Sofia Marques', 'Associate Creative Director', '48h', '16h'],
        ['Lucas Ferreira', 'Designer', '34h', '30h'],
      ]}
      note="Daniel Reed tiene 22h libres. Emma Clarke tiene una ausencia del 7 al 11 de diciembre."
    />
    <Walkthrough.Source label="Capacidad · 9 filas" />
  </Walkthrough.Message>

  <Walkthrough.Message sender="member" name="Ana Costa" time="09:18" avatar="/img/ai/avatars/ana-costa.svg">
    <p>Sofia conoce la marca, hizo la campaña de verano. Vamos con ella.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="me" name="Rui Santos" time="09:20" avatar="/img/ai/avatars/rui-santos.svg">
    <p>De acuerdo. @Skilio añade a Sofia a Velmont Christmas 2026 – Campaign Website como Executor.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio" time="09:22">
    <Walkthrough.ApprovalCard
      title="Añadir al equipo de este documento"
      subtitle="VLB0021DIGI001 · Velmont Christmas 2026 – Campaign Website"
      rows={[['Añadiendo', 'Sofia Marques como Executor']]}
      actions={[{ label: 'Denegar' }, { label: 'Aprobar', primary: true }]}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio" time="09:24">
    <Walkthrough.StatusChip status="Actualizado" label="VLB0021DIGI001 · Velmont Christmas 2026 – Campaign Website" />
    <p>Sofia Marques es ahora la Executor de Velmont Christmas 2026 – Campaign Website.</p>
  </Walkthrough.Message>
</Walkthrough>

## Artículos relacionados

- [Encontrar Personas Disponibles y Asignar Una a un Job](/docs/ai/use-cases/resource-management/checking-resource-availability)
- [Chat](/docs/product/files-and-collaboration/chat)
- [AI Assistant](/docs/ai/ai-assistant)
