---
id: creating-an-alert-for-unusual-expenses
title: Crear una Alerta para Gastos Inusuales
description: "Mira cómo un responsable financiero pide al AI Assistant que revise cada gasto en el momento en que se envía, y cómo se avisa después al aprobador de posibles duplicados, recibos que faltan o importes inusuales, con el motivo, antes de aprobar."
sidebar_label: Alerta para Gastos Inusuales
sidebar_position: 4
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

:::preview
Este caso de uso está en preview, la conversación muestra cómo se espera que el AI Assistant lo gestione, y lo que responde o hace hoy puede diferir de este ejemplo.
:::

## Descripción general

No todas las alertas se ejecutan según una programación. Pide al AI Assistant que revise cada gasto en el momento en que se envía y que avise al aprobador cuando algo no parezca correcto: un gasto que puede estar duplicado, uno sin recibo o un importe muy por encima de lo habitual para ese tipo de gasto.

El aprobador recibe la notificación antes de aprobar, con el motivo de cada excepción. Los gastos sin nada inusual no envían nada. Revisas la alerta en una tarjeta antes de que se cree, incluido lo que habría señalado el mes pasado.

La agencia, las personas, los gastos y los importes de este ejemplo son ilustrativos. La alerta señala gastos para que una persona los revise. No los aprueba ni los rechaza.

<Walkthrough
  subtitle="Ejemplo de conversación entre un responsable financiero y el AI Assistant, y la notificación que la alerta envía después."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="Una segunda mirada antes de cada aprobación">
        Los aprobadores siguen aprobando como hasta ahora. Cuando un gasto necesita una revisión más detallada, saben por qué antes de abrirlo.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Indica qué gastos revisar y qué cuenta como inusual.',
          'Comprueba qué habría señalado la alerta el mes pasado.',
          'Revisa la alerta y selecciona Crear.',
          'Abre el gasto señalado desde la notificación y decide.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'Revisa los gastos recién enviados y explica cualquier excepción antes de la aprobación.',
          'Señala las comidas de más de 60 € por persona.',
          'No señales los gastos de kilometraje sin recibo.',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'Un posible duplicado es un gasto con la misma persona, fecha e importe que otro gasto.',
          'Un importe inusual se compara con los gastos del mismo tipo de los últimos 12 meses.',
          'La alerta se ejecuta cuando se envía un gasto, no según una programación.',
          'El aprobador decide. La alerta nunca cambia la etapa del gasto.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Tú">
    <p>Revisa los gastos recién enviados y explica cualquier excepción al aprobador antes de la aprobación.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>Comprobaré cada gasto cuando se envíe y avisaré a su aprobador solo cuando encuentre una excepción. ¿Qué debe contar como inusual?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Tú">
    <p>Posibles duplicados, recibos que faltan y cualquier importe de más del doble de lo habitual para ese tipo.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.ApprovalCard
      title="Crear la alerta “Gastos que revisar antes de aprobar”"
      subtitle="Revisa estos detalles antes de que cree la alerta."
      rows={[
        ['Se ejecuta', 'Cuando se envía un gasto'],
        ['Excepciones', 'Posible duplicado, falta el recibo, importe de más del doble de lo habitual para su tipo'],
        ['Niveles', 'Acción requerida para un posible duplicado, Atención para los demás'],
        ['Quién', 'El aprobador del gasto'],
        ['Canales', 'Web, Email'],
        ['El mes pasado', 'Se habrían señalado 11 de 236 gastos: 3 posibles duplicados'],
      ]}
      actions={[{ label: 'Denegar' }, { label: 'Crear', primary: true }]}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Tú">
    <p>He revisado la alerta y he seleccionado Crear.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.StatusChip status="Creado" label="Gastos que revisar antes de aprobar" />
    <p>A partir de ahora, cada gasto enviado se comprueba en cuanto llega.</p>
  </Walkthrough.Message>

  <Walkthrough.DateSeparator label="Dos días después · Notificaciones de David Brown, aprobador" />

  <Walkthrough.NotificationPanel>
    <Walkthrough.NotificationCard
      level="action"
      levelLabel="Acción requerida"
      title="Gastos que revisar antes de aprobar"
      time="Hoy, 11:42"
    >
      <p><strong>Julia Green · Taxi, 38,50 €, 3 de noviembre</strong> puede ser un duplicado. Se envió un gasto con la misma fecha e importe el 4 de noviembre y ya está aprobado.</p>
    </Walkthrough.NotificationCard>

    <Walkthrough.NotificationCard
      level="attention"
      levelLabel="Atención"
      title="Gastos que revisar antes de aprobar"
      time="Hoy, 11:42"
    >
      <p><strong>Julia Green · Comida con cliente, 312 €, 5 de noviembre</strong> no tiene recibo adjunto y es unas tres veces su comida con cliente habitual.</p>
    </Walkthrough.NotificationCard>
  </Walkthrough.NotificationPanel>
</Walkthrough>

## Artículos relacionados

- [Aprobar gastos](/docs/product/billing-and-costs/expenses/approve-expenses)
- [Crear una Alerta de Preparación de la Facturación](/docs/ai/use-cases/alerts-and-notifications/creating-a-billing-readiness-alert)
- [Recibir y gestionar notificaciones](/docs/product/notifications/receive-and-manage-notifications)
- [Automatizaciones](/docs/build-and-extend/automations)
- [AI Assistant](/docs/ai/ai-assistant)
