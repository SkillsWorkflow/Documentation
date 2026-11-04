---
id: duplicating-estimates-for-the-next-years-of-a-fee
title: Copiar el Fee de un Cliente al Año Siguiente
description: "Mira cómo un account manager renueva el retainer de un cliente pidiendo al AI Assistant que copie el Fee de este año, con su estimate, al año siguiente, aplique una tasa de inflación a las líneas del estimate y active el nuevo estimate."
sidebar_label: Copiar un Fee al Año Siguiente
sidebar_position: 5
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

## Visión general

Dile al AI Assistant qué Fee de cliente quieres renovar y qué tasa de inflación aplicar. El asistente encuentra el Fee de este año y su estimate, y copia ambos al año siguiente en el mismo paso: el nombre y las fechas del nuevo Fee, y el estimate con sus líneas, la tasa de inflación aplicada a sus valores y la descripción, el equipo o los campos personalizados que elijas copiar. Revisas todo en una tarjeta antes de que se cree nada.

Una vez creada la copia, el asistente muestra los valores del nuevo estimate junto a los del año anterior. Después puedes pedirle que active el nuevo estimate, para que el equipo pueda empezar a planificar el trabajo del año.

La agencia, el cliente, los Fees, los estimates, los números, las horas, los valores y las etapas de este ejemplo son ilustrativos. Los documentos que ves dependen de tus accesos, y las etapas y transiciones dependen del workflow del estimate.

<Walkthrough
  subtitle="Ejemplo de conversación entre un account manager y el AI Assistant."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="Del Fee de este año al del próximo">
        El asistente copia el Fee y su estimate al nuevo año, aplica a las líneas del estimate la tasa de inflación que pidas y activa el nuevo estimate con tu aprobación.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Pide el Fee del cliente de este año y comprueba su estimate.',
          'Pide al asistente que copie el Fee al próximo año e indica la tasa de inflación.',
          'Consulta Cómo he interpretado tu pregunta para confirmar las nuevas fechas.',
          'Elige qué incluye la copia del estimate: Descripción, Equipo o Campos personalizados.',
          'Revisa los detalles y selecciona Copiar.',
          'Comprueba el nuevo Fee y los valores del nuevo estimate.',
          'Pide al asistente que active el nuevo estimate.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'Muéstrame el fee que tenemos con Orvella Tea este año y su estimate.',
          'Copia el fee Orvella Tea Retainer 2026 y aplícame una tasa de inflación del 5%.',
          'Duplica el fee para enero a diciembre de 2027.',
          'Activa el estimate.',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'La Inflación % se aplica a las líneas del estimate, así que los valores cambian cuando la defines.',
          'El asistente pide tu aprobación antes de crear la copia. Selecciona Denegar para dejarlo todo como está.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Tú">
    <p>Orvella Tea acaba de renovar su retainer para 2027. Muéstrame el fee que tenemos con ellos este año y su estimate.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>Orvella Tea tiene un fee para 2026, Orvella Tea Retainer 2026</strong>, del 1 de enero al 31 de diciembre de 2026. Tiene un estimate, <strong>2026 - 00031 · Retainer 2026</strong>, de 4800 horas y 312.000 €:</p>
    <Walkthrough.DataTable
      columns={['Typology Group', 'Horas', 'Valor']}
      rows={[
        ['Creative', '1800h', '126.000 €'],
        ['Design', '1400h', '84.000 €'],
        ['Copywriting', '900h', '58.500 €'],
        ['Accounts', '700h', '43.500 €'],
      ]}
      note="El estimate está en Facturado."
    />
    <p><strong>Cómo he interpretado tu pregunta</strong></p>
    <ul>
      <li>Incluido: fees de Orvella Tea con fechas en 2026 y los estimates que contienen.</li>
      <li>Asumido: “este año” significa del 1 de enero al 31 de diciembre de 2026.</li>
    </ul>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Tú">
    <p>Copia el fee Orvella Tea Retainer 2026 al próximo año y aplícame una tasa de inflación del 5%.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>Voy a copiar el fee y su estimate a 2027 y a definir la Inflación % en 5 en el nuevo estimate. ¿Qué debe incluir la copia del estimate?</p>
    <Walkthrough.Choices
      label="¿Qué debe incluir la copia? Elige las que quieras"
      options={['Descripción', 'Equipo', 'Campos personalizados']}
    />
    <p><strong>Cómo he interpretado tu pregunta</strong></p>
    <ul>
      <li>Asumido: “próximo año” significa del 1 de enero al 31 de diciembre de 2027, el mismo periodo que el fee original, un año después.</li>
      <li>Asumido: el nuevo fee se llama Orvella Tea Retainer 2027 y el nuevo estimate Retainer 2027.</li>
    </ul>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Tú">
    <p>Descripción y Equipo.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.ApprovalCard
      title="Copiar el contrato Orvella Tea Retainer 2026"
      subtitle="Revisa el nuevo contrato antes de que lo cree."
      rows={[
        ['Contrato', 'Orvella Tea Retainer 2026'],
        ['Nombre', 'Orvella Tea Retainer 2027'],
        ['Fecha de inicio', '1 de enero de 2027'],
        ['Fecha de fin', '31 de diciembre de 2027'],
        ['Inflación (%)', '5'],
        ['Presupuestos', 'Retainer 2026 → Retainer 2027'],
        ['Se copia', 'Cada presupuesto con sus líneas y detalles'],
        ['Incluye', 'Descripción, Equipo'],
      ]}
      actions={[{ label: 'Denegar' }, { label: 'Copiar', primary: true }]}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Tú">
    <p>He revisado los detalles y he seleccionado Copiar.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.StatusChip status="Actualizado" label="Copiar el contrato Orvella Tea Retainer 2026" />
    <p>El fee se ha duplicado como <strong>Orvella Tea Retainer 2027</strong>, con fechas del 1 de enero al 31 de diciembre de 2027. Su estimate se ha copiado al nuevo fee como <strong>2026 - 00412 · Retainer 2027</strong>, con fechas del 1 de enero al 31 de diciembre de 2027 y la Inflación % definida en 5. Las líneas del estimate se han actualizado con la inflación:</p>
    <Walkthrough.DataTable
      columns={['Typology Group', 'Horas', '2026', '2027']}
      rows={[
        ['Creative', '1800h', '126.000 €', '132.300 €'],
        ['Design', '1400h', '84.000 €', '88.200 €'],
        ['Copywriting', '900h', '58.500 €', '61.425 €'],
        ['Accounts', '700h', '43.500 €', '45.675 €'],
      ]}
      note="Las horas son las mismas que en 2026. El total pasa de 312.000 € a 327.600 €."
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Tú">
    <p>Activa el estimate.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.StatusChip status="Actualizado" label="2026 - 00412 · Retainer 2027" />
    <p>El estimate se ha activado y ha pasado a New.</p>
  </Walkthrough.Message>
</Walkthrough>

## Artículos relacionados

- [Fees](/docs/product/commercial/fees)
- [Create Estimate](/docs/product/commercial/estimates/create-estimate)
- [Document Agent](/docs/ai/agents/document-agent)
