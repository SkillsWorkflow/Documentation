---
id: creating-an-estimate-from-instructions
title: Crear un Estimate a Partir de tus Instrucciones
description: "Mira cómo un account manager describe al AI Assistant el alcance, los entregables y las horas de un job, confirma lo que falta, revisa las líneas del estimate calculadas con el rate card del cliente y aprueba el nuevo estimate."
sidebar_label: Crear un Estimate a Partir de Instrucciones
sidebar_position: 1
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

## Descripción general

Describe el trabajo al AI Assistant como lo harías con un compañero: el cliente y el proyecto, los entregables y las horas que necesita cada grupo de tipología. El asistente prepara el estimate con una línea por entregable y grupo de tipología, con los precios del rate card del cliente, y te pregunta lo que no puede deducir, como el **Tipo Presupuesto** o las fechas. Revisas las líneas y los totales en una tarjeta antes de que se cree el estimate.

:::note Preview
Este caso de uso está en preview y aún no se ha probado de principio a fin. La conversación muestra cómo se espera que el AI Assistant lo gestione, y lo que responde o hace hoy puede diferir de este ejemplo.
:::

La agencia, el cliente, el proyecto, el estimate, los grupos de tipología, las tarifas y los valores de este ejemplo son ilustrativos. Los Tipos Presupuesto, los rate cards y las etapas dependen de la configuración de tu agencia.

<Walkthrough
  subtitle="Ejemplo de conversación entre un account manager y el AI Assistant."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="De una descripción a un estimate">
        El asistente convierte el alcance que describes en líneas de estimate con los precios del rate card del cliente, y pregunta antes de suponer.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Describe el cliente, el proyecto, los entregables y las horas.',
          'Responde a lo que pregunta el asistente, como el Tipo Presupuesto.',
          'Comprueba las líneas, el Rate Card y la Columna Rate Card, y el total.',
          'Revisa los detalles y selecciona Crear.',
          'Abre el estimate para añadir márgenes, gastos generales o costes de terceros.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'Crea un estimate para la campaña de primavera de Contoso Bank con estas horas.',
          'Calcula el precio de este alcance con el rate card del cliente.',
          'Añade 8 horas más de Design a la landing page.',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'El Rate Card y la Columna Rate Card vienen del cliente. Indica otro si este estimate lo necesita.',
          'El valor de cada línea son sus horas multiplicadas por la Tabla del grupo de tipología.',
          'El asistente pide tu aprobación antes de crear el estimate. Selecciona Denegar para cambiarlo antes.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Tú">
    <p>Crea un estimate para Contoso Bank, Spring Savings Campaign. Necesitan un key visual, seis publicaciones para redes sociales y una landing page.</p>
    <ul>
      <li>Key visual: 24h de Creative, 16h de Design.</li>
      <li>Publicaciones para redes sociales: 24h de Design, 12h de Copywriting.</li>
      <li>Landing page: 16h de Creative, 20h de Design, 12h de Copywriting.</li>
      <li>Además, 16h de Accounts para todo el trabajo.</li>
    </ul>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>Voy a calcular los precios con el rate card <strong>Contoso Bank 2026</strong>, columna <strong>Standard</strong>, que está definido en el cliente. ¿Qué Tipo Presupuesto debe usar?</p>
    <Walkthrough.Choices label="Tipo Presupuesto" options={['Campaign', 'Retainer', 'One-off']} />
    <p><strong>Cómo he interpretado tu pregunta</strong></p>
    <ul>
      <li>Asumido: el estimate va del 1 de noviembre de 2026 al 31 de marzo de 2027, las fechas del proyecto Spring Savings Campaign.</li>
      <li>Asumido: las horas de Accounts van en una línea propia, Account Management.</li>
    </ul>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Tú">
    <p>Campaign.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.DataTable
      columns={['Entregable · Grupo de Tipología', 'Horas', 'Tabla', 'Valor']}
      rows={[
        ['Key Visual · Creative', '24h', '85 €', '2040 €'],
        ['Key Visual · Design', '16h', '70 €', '1120 €'],
        ['Social Posts (6) · Design', '24h', '70 €', '1680 €'],
        ['Social Posts (6) · Copywriting', '12h', '65 €', '780 €'],
        ['Landing Page · Creative', '16h', '85 €', '1360 €'],
        ['Landing Page · Design', '20h', '70 €', '1400 €'],
        ['Landing Page · Copywriting', '12h', '65 €', '780 €'],
        ['Account Management · Accounts', '16h', '60 €', '960 €'],
      ]}
      note="140 horas, 10.120 €."
    />
    <Walkthrough.ApprovalCard
      title="Crear este estimate"
      subtitle="Revisa estos detalles antes de que lo cree."
      rows={[
        ['Cliente', 'Contoso Bank'],
        ['Proyecto', 'Spring Savings Campaign'],
        ['Tipo Presupuesto', 'Campaign'],
        ['Nombre', 'Spring Savings Campaign'],
        ['Fecha de Inicio', '1 de noviembre de 2026'],
        ['Fecha de Fin', '31 de marzo de 2027'],
        ['Rate Card', 'Contoso Bank 2026 · Standard'],
        ['Líneas', '8 líneas, 140h'],
        ['Total', '10.120 €'],
      ]}
      actions={[{ label: 'Denegar' }, { label: 'Crear', primary: true }]}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Tú">
    <p>He revisado los detalles y he seleccionado Crear.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.StatusChip status="Creado" label="2026 - 00417 · Spring Savings Campaign" />
    <p>El estimate se ha creado en New, con 8 líneas y un total de 10.120 €. Ábrelo para añadir márgenes, gastos generales o costes de terceros antes de enviarlo al cliente.</p>
  </Walkthrough.Message>
</Walkthrough>

## Artículos relacionados

- [Crear un Estimate](/docs/product/commercial/estimates/create-estimate)
- [Como administrar tablas Rate Card](/docs/product/commercial/rates/rate-cards)
- [Crear un Estimate a Partir de un Archivo](/docs/ai/use-cases/contracts-estimates-and-purchase-orders/creating-an-estimate-from-files)
- [Comparar Escenarios de Estimate Antes de Crear Uno](/docs/ai/use-cases/contracts-estimates-and-purchase-orders/discussing-estimate-scenarios-before-creation)
- [AI Assistant](/docs/ai/ai-assistant)
