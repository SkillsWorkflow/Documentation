---
id: duplicating-estimates-for-the-next-years-of-a-fee
title: Copiar el Estimate de un Fee al Año Siguiente con Inflación
description: "Mira cómo un account manager pide al AI Assistant que copie el estimate del año anterior de un Fee plurianual a un nuevo año, con nuevas fechas y una tasa de inflación, y después active la copia."
sidebar_label: Copiar un Estimate al Año Siguiente
sidebar_position: 5
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

## Visión general

Pide al AI Assistant que copie un estimate de un año anterior de un Fee plurianual a un nuevo año. La copia queda en el mismo Fee. Indicas las nuevas fechas y una tasa de inflación, eliges qué más quieres copiar y apruebas la copia antes de que se cree. Después, el asistente puede activar el nuevo estimate.

:::note Preview
Hoy el asistente copia el estimate con sus líneas, en el mismo Fee, y puede activar la copia. La copia mantiene la **Fecha de Inicio**, la **Fecha de Fin** y los valores del original. Definir las nuevas fechas y el campo **Inflación %** en la copia está en preview, así que abre la **Info** del nuevo estimate y defínelos antes de usarlo.
:::

La agencia, el cliente, el Fee, los nombres y números de los estimates y las etapas de este ejemplo son ilustrativos. Las etapas y transiciones que ves dependen del workflow del estimate.

<Walkthrough
  subtitle="Ejemplo de conversación entre un account manager y el AI Assistant."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="El estimate del próximo año a partir del anterior">
        El asistente encuentra el estimate en el Fee, lo copia con sus líneas y los detalles que elijas, y activa la copia con tu aprobación.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Indica el Fee y el estimate que quieres copiar, las nuevas fechas y la tasa de inflación.',
          'Elige qué incluye la copia: Descripción, Equipo o Campos personalizados.',
          'Revisa los detalles y selecciona Duplicar.',
          'Comprueba la Fecha de Inicio, la Fecha de Fin y la Inflación % en la Info del nuevo estimate.',
          'Pide al asistente que active el nuevo estimate.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'Copia el estimate de 2024 del fee de la BBC a 2026, con un 10% de inflación.',
          'Duplica el estimate 2024 - 00195 para enero a diciembre de 2026.',
          'Activa el estimate.',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'Preview: la copia mantiene las fechas y los valores del estimate original. Define la Fecha de Inicio, la Fecha de Fin y la Inflación % en la Info del nuevo estimate.',
          'La Inflación % se aplica a las líneas del estimate, así que los valores cambian cuando la defines.',
          'La copia siempre se crea en el mismo Fee que el original.',
          'El asistente pide tu aprobación antes de crear la copia. Selecciona Denegar para dejarlo todo como está.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Tú">
    <p>En el fee BBC 2024–2026, copia el estimate 2024 - 00195 a 2026, con fechas del 1 de enero de 2026 al 31 de diciembre de 2026, y aplica una tasa de inflación del 10%.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>He encontrado el estimate <strong>2024 - 00195 · FEE</strong> en el fee de la BBC. ¿Qué debe incluir la copia?</p>
    <Walkthrough.JobList
      title="Estimates · BBC"
      previewLabel="Vista previa"
      openLabel="Abrir"
      rows={[
        { title: 'FEE', number: '2024 - 00195', stage: 'Facturado' },
      ]}
    />
    <Walkthrough.Choices
      label="¿Qué debe incluir la copia? Elige las que quieras"
      options={['Descripción', 'Equipo', 'Campos personalizados']}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Tú">
    <p>Descripción y Equipo.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.ApprovalCard
      title="Duplicar este documento"
      subtitle="Revisa estos detalles antes de que lo duplique."
      rows={[
        ['Duplicando', '2024 - 00195 · FEE'],
        ['Tipo de documento', 'Presupuesto'],
        ['Nuevo nombre', 'FEE 2026'],
        ['Fecha de Inicio', '1 de enero de 2026'],
        ['Fecha de Fin', '31 de diciembre de 2026'],
        ['Inflación %', '10'],
        ['Incluye', 'Descripción, Equipo'],
      ]}
      actions={[{ label: 'Denegar' }, { label: 'Duplicar', primary: true }]}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Tú">
    <p>He revisado los detalles y he seleccionado Duplicar.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.StatusChip status="Actualizado" label="Duplicar este documento" />
    <p>El estimate se ha duplicado como <strong>2024 - 00237 · FEE 2026</strong> en el fee de la BBC, con fechas del 1 de enero al 31 de diciembre de 2026 y la Inflación % definida en 10. Las líneas del estimate se han actualizado con la inflación.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Tú">
    <p>Activa el estimate.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.StatusChip status="Actualizado" label="2024 - 00237 · FEE 2026" />
    <p>El estimate se ha activado y ha pasado a New.</p>
  </Walkthrough.Message>
</Walkthrough>

## Artículos relacionados

- [Fees](/docs/product/commercial/fees)
- [Create Estimate](/docs/product/commercial/estimates/create-estimate)
- [Document Agent](/docs/ai/agents/document-agent)
