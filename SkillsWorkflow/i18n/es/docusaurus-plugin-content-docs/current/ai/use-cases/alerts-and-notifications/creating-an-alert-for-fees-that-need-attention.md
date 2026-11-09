---
id: creating-an-alert-for-fees-that-need-attention
title: Crear una Alerta para Fees que Necesitan Atención
description: "Mira cómo un account manager pide al AI Assistant que avise cada semana a los directores de cuentas de los Fees cerca de sus horas contratadas o por encima de ellas, revisa la alerta antes de que se cree, y cómo la alerta llega después como una notificación marcada como Atención o Acción requerida."
sidebar_label: Alerta para Fees que Necesitan Atención
sidebar_position: 1
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

:::preview
Este caso de uso está en preview, la conversación muestra cómo se espera que el AI Assistant lo gestione, y lo que responde o hace hoy puede diferir de este ejemplo.
:::

## Descripción general

Dile al AI Assistant qué Fees vigilar, cuándo un Fee necesita atención y quién debe enterarse. El asistente pregunta lo que falta, como el umbral, y te muestra la alerta en una tarjeta antes de crearla: qué comprueba, los niveles, cuándo se ejecuta, quién la recibe y por qué canales. También te dice qué enviaría la alerta si se ejecutara hoy.

Cuando seleccionas **Crear**, la alerta se ejecuta como una automatización según la programación que elegiste. Cada director de cuentas recibe una notificación con los Fees de sus clientes, marcados como **Atención** o **Acción requerida**, y el motivo de cada uno.

La agencia, los clientes, los Fees, los jobs, las personas y las horas de este ejemplo son ilustrativos. Los Fees de los que se informa a cada persona dependen de sus accesos.

<Walkthrough
  subtitle="Ejemplo de conversación entre un account manager y el AI Assistant, y la notificación que la alerta envía después."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="De una pregunta que repites a una alerta que se ejecuta sola">
        En lugar de revisar cada Fee todas las semanas, describes la comprobación una vez. El asistente la convierte en una alerta y los directores de cuentas solo reciben un aviso cuando un Fee los necesita.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Indica qué comprobar, con qué frecuencia y a quién avisar.',
          'Responde a las preguntas del asistente sobre umbrales y niveles.',
          'Comprueba qué enviaría la alerta si se ejecutara hoy.',
          'Revisa la alerta y selecciona Crear.',
          'Lee la notificación cuando llegue y abre el Fee desde ella.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'Cada lunes, dile a los directores de cuentas qué fees necesitan atención y por qué.',
          'Avísame cuando un fee supere el 90% de sus horas.',
          'Pausa la alerta de fees hasta enero.',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'Acción requerida es para un Fee que ha superado sus horas contratadas o que, según la previsión, las superará antes de su fecha de fin. Atención es para un Fee por encima del umbral de aviso.',
          'La previsión usa las horas registradas hasta ahora y las semanas que quedan hasta la fecha de fin del Fee.',
          'El asistente pide tu aprobación antes de crear la alerta. Selecciona Denegar para dejarlo todo como está.',
          'Cada persona solo recibe avisos de los Fees a los que tiene acceso.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Tú">
    <p>Cada lunes, dile a los directores de cuentas qué fees necesitan atención y por qué.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>Puedo configurarlo como una alerta semanal. ¿Cuándo debe considerarse que un Fee necesita atención: por las horas consumidas, por el valor o por ambos?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Tú">
    <p>Por horas. Avisa al 85%, y que sea urgente si ya se ha pasado o se va a pasar antes de la fecha de fin.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.ApprovalCard
      title="Crear la alerta “Fees que necesitan atención”"
      subtitle="Revisa estos detalles antes de que cree la alerta."
      rows={[
        ['Comprueba', 'Fees activos: horas consumidas frente a horas contratadas'],
        ['Atención', '85% o más de las horas contratadas consumidas'],
        ['Acción requerida', 'Más del 100%, o previsión de superarlas antes de la fecha de fin del Fee'],
        ['Cuándo', 'Cada lunes, 08:00'],
        ['Quién', 'El director de cuentas de cada cliente'],
        ['Canales', 'Web, Email'],
        ['Si se ejecutara hoy', '2 Fees en Acción requerida, 3 Fees en Atención, 4 directores de cuentas notificados'],
      ]}
      actions={[{ label: 'Denegar' }, { label: 'Crear', primary: true }]}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Tú">
    <p>He revisado la alerta y he seleccionado Crear.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.StatusChip status="Creado" label="Fees que necesitan atención" />
    <p>La alerta se ejecuta el próximo lunes a las 08:00. Puedes pausarla, cambiarla o eliminarla pidiéndomelo, o en <strong>Maintenance → Automations</strong>.</p>
  </Walkthrough.Message>

  <Walkthrough.DateSeparator label="Próximo lunes · Notificaciones de Rita Moreira, directora de cuentas" />

  <Walkthrough.NotificationPanel>
    <Walkthrough.NotificationCard
      level="action"
      levelLabel="Acción requerida"
      title="Fees que necesitan atención"
      time="Hoy, 08:00"
    >
      <p><strong>Orvella Tea Retainer 2026</strong> está al 96% de sus 1200 horas contratadas y las superará hacia el 20 de noviembre. La mayoría de las horas de más vienen de Website Refresh, 52h por encima de su estimate después de que se añadieran dos páginas de producto el 14 de octubre.</p>
    </Walkthrough.NotificationCard>

    <Walkthrough.NotificationCard
      level="attention"
      levelLabel="Atención"
      title="Fees que necesitan atención"
      time="Hoy, 08:00"
    >
      <p><strong>Velmont Bakery Fee 2026</strong> está al 87% de sus horas contratadas, con ocho semanas por delante. A este ritmo, termina el año en torno al 98%.</p>
    </Walkthrough.NotificationCard>
  </Walkthrough.NotificationPanel>
</Walkthrough>

## Artículos relacionados

- [Crear un Seguimiento Semanal de Timesheets](/docs/ai/use-cases/alerts-and-notifications/creating-a-weekly-timesheet-follow-up)
- [Copiar el Fee de un Cliente al Año Siguiente](/docs/ai/use-cases/contracts-estimates-and-purchase-orders/duplicating-estimates-for-the-next-years-of-a-fee)
- [Recibir y gestionar notificaciones](/docs/product/notifications/receive-and-manage-notifications)
- [Automatizaciones](/docs/build-and-extend/automations)
- [AI Assistant](/docs/ai/ai-assistant)
