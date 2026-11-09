---
id: creating-a-billing-readiness-alert
title: Crear una Alerta de Preparación de la Facturación
description: "Mira cómo un responsable financiero pide al AI Assistant que prepare cada lunes una lista de acciones de facturación, con lo que bloquea cada elemento y quién es el responsable, y cómo cada responsable recibe después solo los elementos que dependen de él."
sidebar_label: Alerta de Preparación de la Facturación
sidebar_position: 3
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

:::preview
Este caso de uso está en preview, la conversación muestra cómo se espera que el AI Assistant lo gestione, y lo que responde o hace hoy puede diferir de este ejemplo.
:::

## Descripción general

Pide al AI Assistant que compruebe cada semana qué está listo para facturar y qué está frenando la facturación: autorizaciones de factura aún sin aprobar, órdenes de compra del cliente que faltan o estimates sin condiciones de facturación. Para cada elemento bloqueado, la alerta indica el bloqueo y la persona que puede eliminarlo.

Tú recibes la lista completa. Cada responsable recibe solo sus propios elementos, marcados como **Acción requerida** cuando la fecha de facturación prevista ya ha pasado. Revisas la alerta en una tarjeta antes de que se cree.

La agencia, los clientes, los estimates, las personas y los valores de este ejemplo son ilustrativos. Cada persona solo recibe avisos de los documentos a los que tiene acceso.

<Walkthrough
  subtitle="Ejemplo de conversación entre un responsable financiero y el AI Assistant, y las notificaciones que la alerta envía después."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="De perseguir la facturación a una lista de acciones semanal">
        Finanzas deja de perseguir a los equipos de cuenta uno a uno. Cada lunes, cada bloqueo ya está en manos de la persona que puede eliminarlo.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Indica qué cuenta como bloqueo de la facturación y cuándo comprobarlo.',
          'Elige quién recibe la lista completa y quién recibe sus propios elementos.',
          'Comprueba los bloqueos que la alerta indicaría hoy.',
          'Revisa la alerta y selecciona Crear.',
          'Haz el seguimiento desde las notificaciones a medida que lleguen.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'Cada lunes, prepara una lista de acciones de facturación con el bloqueo y el responsable.',
          'Añade los estimates aprobados hace más de 30 días que no tienen autorización de factura.',
          'Envíame también la lista de facturación el último día laborable del mes.',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'El responsable es el account manager del estimate, salvo cuando el bloqueo es una aprobación, que va al aprobador.',
          'Acción requerida es para los elementos que han superado su fecha de facturación prevista. El resto se marcan como Atención.',
          'La alerta no crea ni cambia ningún documento de facturación.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Tú">
    <p>Cada lunes, prepara una lista de acciones de facturación con el bloqueo y el responsable.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>Comprobaré los estimates aprobados con facturación prevista este mes. Estos son los bloqueos que puedo buscar. ¿Cuáles quieres?</p>
    <ul>
      <li>Autorización de factura pendiente de aprobación</li>
      <li>Falta la orden de compra del cliente</li>
      <li>Sin condiciones de facturación en el estimate</li>
    </ul>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Tú">
    <p>Los tres. Envíame la lista completa, y a cada responsable solo su parte.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.ApprovalCard
      title="Crear la alerta “Lista de acciones de facturación”"
      subtitle="Revisa estos detalles antes de que cree la alerta."
      rows={[
        ['Comprueba', 'Estimates aprobados con facturación prevista este mes'],
        ['Bloqueos', 'Autorización de factura pendiente de aprobación, falta la orden de compra del cliente, sin condiciones de facturación'],
        ['Niveles', 'Acción requerida cuando se ha superado la fecha de facturación prevista, Atención en los demás casos'],
        ['Cuándo', 'Cada lunes, 09:00'],
        ['Quién', 'Tú: la lista completa · Cada responsable: sus propios elementos'],
        ['Canales', 'Web, Email'],
        ['Si se ejecutara hoy', '9 elementos bloqueados, 84.300 €, 5 responsables notificados'],
      ]}
      actions={[{ label: 'Denegar' }, { label: 'Crear', primary: true }]}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Tú">
    <p>He revisado la alerta y he seleccionado Crear.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.StatusChip status="Creado" label="Lista de acciones de facturación" />
    <p>La primera lista llega el próximo lunes a las 09:00.</p>
  </Walkthrough.Message>

  <Walkthrough.DateSeparator label="Próximo lunes · Notificaciones de Anna Smith, account manager" />

  <Walkthrough.NotificationPanel>
    <Walkthrough.NotificationCard
      level="action"
      levelLabel="Acción requerida"
      title="Lista de acciones de facturación · 2 elementos"
      time="Hoy, 09:00"
    >
      <ul>
        <li><strong>Orvella Tea · Spring Campaign</strong>, 12.500 €: falta la orden de compra del cliente. La facturación estaba prevista para el 31 de octubre.</li>
        <li><strong>Velmont Bakery · Packaging Refresh</strong>, 6800 €: sin condiciones de facturación en el estimate.</li>
      </ul>
    </Walkthrough.NotificationCard>
  </Walkthrough.NotificationPanel>
</Walkthrough>

## Artículos relacionados

- [Autorizaciones de factura](/docs/product/billing-and-costs/billing/invoice-authorizations)
- [Ordenes de Compra](/docs/product/billing-and-costs/billing/purchase-orders)
- [Seguir los Estimates Pendientes de Aprobación](/docs/ai/use-cases/accounts-status/tracking-pending-proposals-and-approvals)
- [Recibir y gestionar notificaciones](/docs/product/notifications/receive-and-manage-notifications)
- [AI Assistant](/docs/ai/ai-assistant)
