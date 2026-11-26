---
id: duplicating-estimates-for-the-next-years-of-a-fee
title: Copiar el Fee de un Cliente al Año Siguiente
description: "Mira cómo un account manager renueva el retainer de un cliente pidiendo al AI Assistant que copie el Fee de este año, con su estimate, al año siguiente."
sidebar_label: Copiar un Fee al Año Siguiente
sidebar_position: 5
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

## Visión general

Cuando un cliente renueva su retainer, pide al AI Assistant el Fee de este año y su estimate, y después pídele que los copie al año siguiente. El asistente te pregunta qué debe incluir la copia y muestra el nombre y las fechas del nuevo Fee en una tarjeta. No se crea nada hasta que seleccionas Copiar.

El nuevo Fee y su estimate se crean como borradores, con fechas del nuevo año, y el estimate recibe el nuevo año en su nombre. El asistente te indica lo que no se ha copiado y te da un botón para abrir el nuevo estimate.

La agencia, el cliente, los Fees, los estimates, los números, los valores y las etapas de este ejemplo son ilustrativos. Los documentos que ves dependen de tus accesos.

<Walkthrough
  subtitle="Ejemplo de conversación entre un account manager y el AI Assistant."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="Del Fee de este año al del próximo">
        El asistente copia el Fee y su estimate al nuevo año en un solo paso, después de que revises la copia en una tarjeta.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Pide el Fee del cliente de este año y comprueba su estimate.',
          'Pide al asistente que copie el Fee al próximo año.',
          'Comprueba las fechas y los nuevos nombres en la respuesta del asistente.',
          'Elige qué incluye la copia: Descripción, Equipo o Campos personalizados, y selecciona Continuar.',
          'En la tarjeta Copiar contrato, comprueba el nombre y las fechas. Selecciona Editar detalles para cambiarlos.',
          'Selecciona Copiar y abre el nuevo estimate.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'Muéstrame el fee que tenemos con Orvella Tea este año y su estimate.',
          'Copia el fee Orvella Tea Retainer 2026 al próximo año.',
          'Copia el fee y su estimate a enero–diciembre de 2027.',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'El nuevo Fee y sus estimates se crean como borradores.',
          'Cada estimate se desplaza el mismo periodo que el Fee, con sus líneas, y recibe el nuevo año en su nombre.',
          'No se copian los archivos, el feed, el historial de aprobaciones, los repartos mensuales ni las condiciones de facturación.',
          'Si el Fee tiene más de un estimate, el asistente pregunta cuáles copiar.',
          'Si ya existe un contrato con el nuevo nombre, el asistente pregunta si quieres usarlo o elegir otro nombre.',
          'Si la copia falla, no se crea nada y el asistente te explica por qué.',
          'No se crea nada hasta que seleccionas Copiar. Selecciona Descartar para parar.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Tú">
    <p>Orvella Tea acaba de renovar su retainer para 2027. Muéstrame el fee que tenemos con ellos este año y su estimate.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>He encontrado un fee de 2026 y su estimate asociado para Orvella Tea, por valor de <strong>96.000 €</strong> sin impuestos. El estimate está <strong>Approved</strong>, mientras que el contrato del fee sigue en <strong>New</strong>.</p>
    <ul>
      <li><strong>Fee:</strong> 2026 - 00031 · Orvella Tea Retainer 2026 · 96.000 €</li>
      <li><strong>Estimate:</strong> 2026 - 00118 · Orvella Tea Retainer 2026 · 96.000 € · Approved</li>
    </ul>
    <Walkthrough.Actions items={[{ label: '¿Cuáles son las condiciones de facturación de este fee?' }, { label: 'Muestra el coste y el margen del estimate' }]} />
    <p><strong>Cómo he interpretado tu pregunta</strong></p>
    <ul>
      <li>Incluido: los estimates de Orvella Tea del 1 de enero al 26 de noviembre de 2026 y el contrato de fee vinculado.</li>
      <li>Asumido: “este año” significa 2026; “fee” significa el contrato del retainer, no una factura.</li>
    </ul>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Tú">
    <p>Copia el fee Orvella Tea Retainer 2026 al próximo año.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>Voy a crear una copia para 2027 de Orvella Tea Retainer 2026, con fechas del 1 de enero al 31 de diciembre de 2027, con su único estimate renombrado como <strong>Orvella Tea Retainer 2027</strong>.</p>
    <Walkthrough.ApprovalCard
      title="Orvella Tea Retainer 2026"
      subtitle="2026 - 00031 · Orvella Tea · New · Vence el 31/12/2026"
      rows={[
        ['Fecha de inicio', '01/01/2026'],
        ['Total', '96.000,00'],
      ]}
      actions={[]}
    />
    <Walkthrough.Choices
      label="¿Qué debe incluir la copia? Elige las que quieras"
      options={['Descripción', 'Equipo', 'Campos personalizados']}
    />
    <Walkthrough.Actions items={[{ label: 'Continuar', primary: true }]} />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Tú">
    <p>He seleccionado Descripción, Equipo y Campos personalizados, y después Continuar.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.ApprovalCard
      title="Copiar contrato"
      rows={[
        ['Contrato', 'Orvella Tea Retainer 2026'],
        ['Nombre', 'Orvella Tea Retainer 2027'],
        ['Fecha de inicio', '01/01/2027'],
        ['Fecha de fin', '31/12/2027'],
        ['Presupuestos', 'Orvella Tea Retainer 2026 → Orvella Tea Retainer 2027. Cada uno se desplaza el mismo periodo que el contrato, con sus líneas.'],
        ['Se copia', 'Cada presupuesto con sus líneas y detalles'],
        ['Incluye', 'Descripción, Equipo, Campos personalizados'],
      ]}
      actions={[{ label: 'Editar detalles' }, { label: 'Descartar' }, { label: 'Copiar', primary: true }]}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Tú">
    <p>He revisado los detalles y he seleccionado Copiar.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>He creado el contrato de 2027 como <strong>borrador</strong>: <strong>Orvella Tea Retainer 2027</strong>, con fechas del 1 de enero al 31 de diciembre de 2027. Su estimate copiado, <strong>Orvella Tea Retainer 2027</strong>, también es un <strong>borrador</strong>.</p>
    <p>No se han copiado los archivos, el feed ni el historial de aprobaciones; tampoco los repartos mensuales ni las condiciones de facturación del estimate.</p>
    <Walkthrough.ApprovalCard
      title="Orvella Tea Retainer 2027"
      subtitle="Contrato · Orvella Tea · Borrador · Vence el 31/12/2027"
      rows={[
        ['Fecha de inicio', '01/01/2027'],
        ['Total', '96.000,00'],
      ]}
      actions={[]}
    />
    <Walkthrough.ApprovalCard
      title="Orvella Tea Retainer 2027"
      subtitle="Estimate · Orvella Tea · Borrador · Vence el 31/12/2027"
      rows={[
        ['Contrato', 'Orvella Tea Retainer 2027'],
        ['Fecha de inicio', '01/01/2027'],
        ['Total', '96.000,00 €'],
      ]}
      actions={[]}
    />
    <Walkthrough.Actions items={[{ label: 'Abrir el estimate de 2027' }]} />
    <p>✓ Contrato creado correctamente: <strong>Orvella Tea Retainer 2027</strong>.</p>
  </Walkthrough.Message>
</Walkthrough>

## Artículos relacionados

- [Fees](/docs/product/commercial/fees)
- [Create Estimate](/docs/product/commercial/estimates/create-estimate)
- [Document Agent](/docs/ai/agents/document-agent)
