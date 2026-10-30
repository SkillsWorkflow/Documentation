---
id: discussing-estimate-scenarios-before-creation
title: Comparar Escenarios de Estimate Antes de Crear Uno
description: "Mira cómo un account manager pide al AI Assistant que compare el alcance completo, un alcance reducido y una tarifa con descuento frente al presupuesto del cliente, y crea el estimate a partir del escenario elegido."
sidebar_label: Comparar Escenarios de Estimate
sidebar_position: 4
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

## Descripción general

Antes de crear un estimate, pide al AI Assistant que compare las opciones que estás valorando: un alcance distinto, menos horas para un grupo de tipología u otra columna del rate card del cliente. El asistente calcula el precio de cada escenario, muestra las horas y el total uno al lado del otro, y te dice cómo encaja cada uno en el presupuesto del cliente. Cuando eliges uno, prepara el estimate a partir de él para que lo apruebes.

:::note Preview
Este caso de uso está en preview y aún no se ha probado de principio a fin. La conversación muestra cómo se espera que el AI Assistant lo gestione, y lo que responde o hace hoy puede diferir de este ejemplo.
:::

La agencia, el cliente, el proyecto, las columnas del rate card, las tarifas y los valores de este ejemplo son ilustrativos. Los rate cards y sus columnas dependen de la configuración de tu agencia.

<Walkthrough
  subtitle="Ejemplo de conversación entre un account manager y el AI Assistant."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="Opciones una al lado de la otra">
        El asistente calcula el precio de cada escenario con el rate card del cliente y los compara con el presupuesto, para que elijas antes de crear nada.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Describe el alcance y el presupuesto del cliente.',
          'Indica los escenarios que quieres comparar.',
          'Lee las horas, el total y la diferencia con el presupuesto de cada uno.',
          'Elige un escenario y pide al asistente que cree el estimate.',
          'Revisa los detalles y selecciona Crear.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          '¿Y si quitamos la landing page?',
          'Calcula el precio con la columna Discount 10%.',
          '¿Qué opción encaja en un presupuesto de 9500 €?',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'Los escenarios solo se comparan en el chat. No se crea nada hasta que apruebas un estimate.',
          'El precio de cada escenario se calcula con el Rate Card y la Columna Rate Card que indiques, o con los del cliente.',
          'Pide tantos escenarios como necesites, y cambia uno cada vez para ver su efecto.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Tú">
    <p>Contoso Bank tiene un presupuesto de 9500 € para la Spring Savings Campaign: key visual, seis publicaciones para redes sociales y una landing page, 140 horas en total. Compara el alcance completo con las tarifas Standard, una versión con tres publicaciones y sin landing page, y el alcance completo con la columna Discount 10%.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>Solo el alcance completo con descuento encaja en el presupuesto:</strong></p>
    <Walkthrough.DataTable
      columns={['Escenario', 'Horas', 'Total', 'Frente a 9500 €']}
      rows={[
        ['A · Alcance completo, Standard', '140h', '10.120 €', '620 € por encima'],
        ['B · Tres publicaciones, sin landing page, Standard', '74h', '5350 €', '4150 € por debajo'],
        ['C · Alcance completo, Discount 10%', '140h', '9108 €', '392 € por debajo'],
      ]}
      note="Tarifas del rate card Contoso Bank 2026."
    />
    <ul>
      <li>A entrega todo, 620 € por encima del presupuesto.</li>
      <li>B tiene aproximadamente la mitad de las horas, y la campaña se queda sin landing page.</li>
      <li>C entrega todo con un 10% menos de ingresos por las mismas horas.</li>
    </ul>
    <p><strong>Cómo he interpretado tu pregunta</strong></p>
    <ul>
      <li>Asumido: en B, las horas del key visual y de Accounts se mantienen, las publicaciones para redes sociales tienen la mitad de las horas y se quitan las horas de la landing page.</li>
    </ul>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Tú">
    <p>Vamos con C. Crea el estimate.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.ApprovalCard
      title="Crear este estimate"
      subtitle="Revisa estos detalles antes de que lo cree."
      rows={[
        ['Cliente', 'Contoso Bank'],
        ['Proyecto', 'Spring Savings Campaign'],
        ['Tipo Presupuesto', 'Campaign'],
        ['Nombre', 'Spring Savings Campaign'],
        ['Rate Card', 'Contoso Bank 2026 · Discount 10%'],
        ['Líneas', '8 líneas, 140h'],
        ['Total', '9108 €'],
      ]}
      actions={[{ label: 'Denegar' }, { label: 'Crear', primary: true }]}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Tú">
    <p>He revisado los detalles y he seleccionado Crear.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.StatusChip status="Creado" label="2026 - 00417 · Spring Savings Campaign" />
    <p>El estimate se ha creado en New, con un total de 9108 €.</p>
  </Walkthrough.Message>
</Walkthrough>

## Artículos relacionados

- [Crear un Estimate a Partir de tus Instrucciones](/docs/ai/use-cases/contracts-estimates-and-purchase-orders/creating-an-estimate-from-instructions)
- [Como administrar tablas Rate Card](/docs/product/commercial/rates/rate-cards)
- [Crear un Estimate](/docs/product/commercial/estimates/create-estimate)
- [AI Assistant](/docs/ai/ai-assistant)
