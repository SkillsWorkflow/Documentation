---
id: updating-rate-cards
title: Actualizar un Rate Card
description: "Mira cómo un responsable financiero pide al AI Assistant que suba las tarifas de un cliente para algunos grupos de tipología a partir de una nueva fecha, revisa las tarifas actuales y nuevas de cada columna, ve qué estimates usan el rate card y aprueba el cambio."
sidebar_label: Actualizar un Rate Card
sidebar_position: 3
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

## Descripción general

Indica al AI Assistant qué rate card cambiar, qué grupos de tipología o usuarios, en cuánto y desde cuándo, o adjunta el archivo con las nuevas tarifas. El asistente muestra la tarifa actual y la nueva de cada columna del rate card, y lista los estimates que lo usan, para que decidas si también necesitan precios nuevos. Eliges si cambias el rate card o creas uno nuevo para el nuevo periodo, y revisas el cambio en una tarjeta antes de que se aplique.

:::note Preview
Este caso de uso está en preview y aún no se ha probado de principio a fin. La conversación muestra cómo se espera que el AI Assistant lo gestione, y lo que responde o hace hoy puede diferir de este ejemplo.
:::

La agencia, el cliente, los rate cards, las columnas, las tarifas y los estimates de este ejemplo son ilustrativos. Los rate cards y sus columnas dependen de la configuración de tu agencia.

<Walkthrough
  subtitle="Ejemplo de conversación entre un responsable financiero y el AI Assistant."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="Nuevas tarifas con su impacto a la vista">
        El asistente prepara las nuevas tarifas de cada columna y muestra qué estimates usan el rate card antes de que cambie nada.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Indica el rate card, los grupos de tipología o usuarios, el cambio y la fecha.',
          'Elige si cambias el rate card o creas uno para el nuevo periodo.',
          'Comprueba las tarifas actuales y nuevas de cada columna.',
          'Comprueba los estimates que usan el rate card.',
          'Revisa los detalles y selecciona Crear o Actualizar.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'Sube un 4% las tarifas de Design del rate card de Northwind a partir de enero.',
          'Actualiza el rate card con la lista de precios adjunta.',
          '¿Qué estimates usan el rate card Northwind Coffee 2026?',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'Un rate card tiene una Fecha de Inicio y una Fecha de Fin. Un nuevo periodo suele implicar un nuevo rate card.',
          'El cambio se aplica a todas las columnas del rate card, salvo que indiques una.',
          'Los estimates que usan el rate card aparecen en la lista para que los revises con el equipo de la cuenta.',
          'El asistente pide tu aprobación antes de cambiar nada. Selecciona Denegar para dejar el rate card como está.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Tú">
    <p>Sube un 4% Design y Copywriting en el rate card de Northwind Coffee a partir del 1 de enero de 2027.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>El rate card <strong>Northwind Coffee 2026</strong> va del 1 de enero al 31 de diciembre de 2026. ¿Lo cambio, o creo uno nuevo para 2027 con las nuevas tarifas?</p>
    <Walkthrough.Choices
      label="Rate Card"
      options={['Crear Northwind Coffee 2027', 'Cambiar Northwind Coffee 2026']}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Tú">
    <p>Crea el de 2027.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.DataTable
      columns={['Grupo de Tipología · Columna', '2026', '2027']}
      rows={[
        ['Design · Standard', '70,00 €', '72,80 €'],
        ['Design · Discount 10%', '63,00 €', '65,52 €'],
        ['Copywriting · Standard', '65,00 €', '67,60 €'],
        ['Copywriting · Discount 10%', '58,50 €', '60,84 €'],
      ]}
      note="Creative y Accounts mantienen sus tarifas de 2026."
    />
    <p><strong>Dos estimates de 2027 usan el rate card de 2026:</strong> 2026 - 00412 · Retainer 2027 y 2026 - 00409 · Gift Card Design. Consulta con el equipo de la cuenta si deben pasar al nuevo rate card.</p>
    <Walkthrough.ApprovalCard
      title="Crear este rate card"
      subtitle="Revisa estos detalles antes de que lo cree."
      rows={[
        ['Nombre', 'Northwind Coffee 2027'],
        ['Copiado de', 'Northwind Coffee 2026'],
        ['Compañía', 'Bluebird Creative'],
        ['Fecha de Inicio', '1 de enero de 2027'],
        ['Fecha de Fin', '31 de diciembre de 2027'],
        ['Cambio', 'Design y Copywriting +4%, todas las columnas'],
      ]}
      actions={[{ label: 'Denegar' }, { label: 'Crear', primary: true }]}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Tú">
    <p>He revisado los detalles y he seleccionado Crear.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.StatusChip status="Creado" label="Northwind Coffee 2027" />
    <p>El rate card se ha creado con las nuevas tarifas de Design y Copywriting. Defínelo en el cliente Northwind Coffee para usarlo en los nuevos estimates.</p>
  </Walkthrough.Message>
</Walkthrough>

## Artículos relacionados

- [Como administrar tablas Rate Card](/docs/product/commercial/rates/rate-cards)
- [Tablas de Precios](/docs/product/commercial/rates/price-tables)
- [Crear un Estimate](/docs/product/commercial/estimates/create-estimate)
- [AI Assistant](/docs/ai/ai-assistant)
