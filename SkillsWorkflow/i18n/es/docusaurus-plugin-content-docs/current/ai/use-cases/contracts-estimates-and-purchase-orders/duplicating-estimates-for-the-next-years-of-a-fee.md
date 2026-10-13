---
id: duplicating-estimates-for-the-next-years-of-a-fee
title: Copiar un Fee y su Estimate al Año Siguiente con Inflación
description: "Mira cómo un account manager pide al AI Assistant que copie el Fee del año anterior, con su estimate, a un nuevo año, con nuevas fechas y una tasa de inflación, y después active el nuevo estimate."
sidebar_label: Copiar un Fee al Año Siguiente
sidebar_position: 5
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

## Visión general

Pide al AI Assistant que copie un Fee al año siguiente: el propio Fee y el estimate que contiene. Indicas las nuevas fechas y una tasa de inflación, eliges qué más debe incluir la copia del estimate y apruebas la copia antes de que se cree. El nuevo estimate se crea en el nuevo Fee y, después, el asistente puede activarlo.

:::note Preview
Copiar el Fee completo está en preview. Hoy el asistente copia solo el estimate, con sus líneas, y la copia queda en el Fee original: no crea un nuevo Fee. La copia mantiene la **Fecha de Inicio**, la **Fecha de Fin** y los valores del original. Definir las nuevas fechas y el campo **Inflación %** en la copia también está en preview, así que abre la **Info** del nuevo estimate y defínelos antes de usarlo. El asistente puede activar la copia.
:::

La agencia, el cliente, los Fees, los nombres y números de los estimates y las etapas de este ejemplo son ilustrativos. Las etapas y transiciones que ves dependen del workflow del estimate.

<Walkthrough
  subtitle="Ejemplo de conversación entre un account manager y el AI Assistant."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="El Fee del próximo año a partir del anterior">
        El asistente encuentra el Fee y su estimate, copia ambos al nuevo año con las fechas, la tasa de inflación y los detalles que elijas, y activa el nuevo estimate con tu aprobación.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Indica el Fee que quieres copiar, las nuevas fechas y la tasa de inflación.',
          'Elige qué incluye la copia del estimate: Descripción, Equipo o Campos personalizados.',
          'Revisa los detalles y selecciona Duplicar.',
          'Comprueba el nuevo Fee y, en la Info del nuevo estimate, la Fecha de Inicio, la Fecha de Fin y la Inflación %.',
          'Pide al asistente que active el nuevo estimate.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'Copia el fee BBC 2025 y su estimate a 2026, con un 10% de inflación.',
          'Duplica el fee BBC 2025 para enero a diciembre de 2026.',
          'Activa el estimate.',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'Preview: hoy solo se copia el estimate y la copia queda en el Fee original. El nuevo Fee no se crea.',
          'Preview: la copia del estimate mantiene las fechas y los valores del original. Define la Fecha de Inicio, la Fecha de Fin y la Inflación % en la Info del nuevo estimate.',
          'La Inflación % se aplica a las líneas del estimate, así que los valores cambian cuando la defines.',
          'El asistente pide tu aprobación antes de crear la copia. Selecciona Denegar para dejarlo todo como está.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Tú">
    <p>Copia el fee BBC 2025 y su estimate a 2026, con fechas del 1 de enero de 2026 al 31 de diciembre de 2026, y aplica una tasa de inflación del 10%.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>He encontrado el fee <strong>BBC 2025</strong> y su estimate <strong>2025 - 00195 · FEE</strong>. ¿Qué debe incluir la copia del estimate?</p>
    <Walkthrough.JobList
      title="Estimates · BBC 2025"
      previewLabel="Vista previa"
      openLabel="Abrir"
      rows={[
        { title: 'FEE', number: '2025 - 00195', stage: 'Facturado' },
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
      title="Duplicar este fee"
      subtitle="Revisa estos detalles antes de que lo duplique."
      rows={[
        ['Duplicando', 'BBC 2025'],
        ['Tipo de documento', 'Fee'],
        ['Nombre del nuevo fee', 'BBC 2026'],
        ['Fecha de Inicio', '1 de enero de 2026'],
        ['Fecha de Fin', '31 de diciembre de 2026'],
        ['Estimate', '2025 - 00195 · FEE'],
        ['Nombre del nuevo estimate', 'FEE 2026'],
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
    <Walkthrough.StatusChip status="Actualizado" label="Duplicar este fee" />
    <p>El fee se ha duplicado como <strong>BBC 2026</strong>, con fechas del 1 de enero al 31 de diciembre de 2026. Su estimate se ha copiado al nuevo fee como <strong>2026 - 00012 · FEE 2026</strong>, con las mismas fechas y la Inflación % definida en 10. Las líneas del estimate se han actualizado con la inflación.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Tú">
    <p>Activa el estimate.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.StatusChip status="Actualizado" label="2026 - 00012 · FEE 2026" />
    <p>El estimate se ha activado y ha pasado a New.</p>
  </Walkthrough.Message>
</Walkthrough>

## Artículos relacionados

- [Fees](/docs/product/commercial/fees)
- [Create Estimate](/docs/product/commercial/estimates/create-estimate)
- [Document Agent](/docs/ai/agents/document-agent)
