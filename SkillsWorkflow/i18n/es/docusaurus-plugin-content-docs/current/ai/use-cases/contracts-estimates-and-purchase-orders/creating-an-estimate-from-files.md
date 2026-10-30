---
id: creating-an-estimate-from-files
title: Crear un Estimate a Partir de un Archivo
description: "Mira cómo un account manager adjunta al AI Assistant la hoja de cálculo de alcance de un cliente, comprueba los entregables, las horas y los costes de terceros que extrae, responde a lo que falta y aprueba el nuevo estimate."
sidebar_label: Crear un Estimate a Partir de un Archivo
sidebar_position: 2
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

:::preview
Este caso de uso está en preview, la conversación muestra cómo se espera que el AI Assistant lo gestione, y lo que responde o hace hoy puede diferir de este ejemplo.
:::

## Descripción general

Adjunta el archivo que describe el trabajo, como un brief del cliente, una hoja de cálculo de alcance o un presupuesto de un proveedor, y pide al AI Assistant un estimate. El asistente extrae los entregables, las horas por grupo de tipología, los costes de terceros y los gastos, calcula el precio de las horas con el rate card del cliente y lista lo que el archivo no indica. Responde a lo que falta, revisa el estimate en una tarjeta y apruébalo.

La agencia, el cliente, el archivo, el estimate, los proveedores, las tarifas y los valores de este ejemplo son ilustrativos. Los Tipos Presupuesto, los rate cards y las etapas dependen de la configuración de tu agencia.

<Walkthrough
  subtitle="Ejemplo de conversación entre un account manager y el AI Assistant."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="De un archivo de alcance a un estimate">
        El asistente lee el archivo, construye a partir de él las líneas del estimate y señala cada dato que falta antes de crear nada.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Adjunta el archivo e indica para qué cliente y proyecto es.',
          'Comprueba los entregables, las horas y los costes que ha extraído el asistente.',
          'Responde a los datos que faltan y que señala el asistente.',
          'Revisa los detalles y selecciona Crear.',
          'Abre el estimate y compáralo con el archivo.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'Crea un estimate a partir de este brief para Fabrikam Motors.',
          'Usa las horas de esta hoja de cálculo y el rate card del cliente.',
          'Deja fuera la impresión hasta que tengamos un presupuesto.',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'El asistente solo usa lo que hay en el archivo y lo que le dices. Lo que no encuentra aparece como dato que falta.',
          'Las horas se calculan con el Rate Card del cliente. Los costes de terceros y los gastos mantienen los valores del archivo.',
          'El archivo no se adjunta al estimate. Añádelo a los archivos del estimate si el equipo lo necesita.',
          'El asistente pide tu aprobación antes de crear el estimate. Selecciona Denegar para cambiarlo antes.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Tú">
    <p>Crea un estimate para Fabrikam Motors, proyecto Showroom Launch, a partir del alcance adjunto.</p>
    <p><strong>Adjunto:</strong> Fabrikam_Showroom_Launch_scope.xlsx</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>El archivo describe cuatro entregables, una sesión de fotos y un viaje:</strong></p>
    <Walkthrough.DataTable
      columns={['Línea', 'Componente', 'Cantidad', 'Valor']}
      rows={[
        ['Showroom Brochure · Creative, Design, Copywriting', 'Recursos', '24h · 80h · 30h', '9590 €'],
        ['POS Displays · Design', 'Recursos', '70h', '4900 €'],
        ['Dealer Social Templates · Creative, Design, Copywriting', 'Recursos', '56h · 50h · 30h', '10.210 €'],
        ['Account Management · Accounts', 'Recursos', '40h', '2400 €'],
        ['Product Photo Shoot', 'Terceros', '1', '10.500 €'],
        ['Travel to Shoot Location', 'Gastos', '1', '900 €'],
      ]}
      note="Horas calculadas con el rate card Fabrikam Motors 2026, columna Standard."
    />
    <p><strong>Lo que falta en el archivo</strong></p>
    <ul>
      <li>La sesión de fotos tiene un valor pero no tiene proveedor.</li>
      <li>El archivo menciona la impresión de 500 folletos, sin valor.</li>
    </ul>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Tú">
    <p>La sesión es con Lumen Studio. Deja fuera la impresión hasta que tengamos un presupuesto.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.ApprovalCard
      title="Crear este estimate"
      subtitle="Revisa estos detalles antes de que lo cree."
      rows={[
        ['Cliente', 'Fabrikam Motors'],
        ['Proyecto', 'Showroom Launch'],
        ['Tipo Presupuesto', 'Campaign'],
        ['Nombre', 'Showroom Launch'],
        ['Rate Card', 'Fabrikam Motors 2026 · Standard'],
        ['Recursos', '8 líneas, 380h, 27.100 €'],
        ['Terceros', 'Product Photo Shoot, Lumen Studio, 10.500 €'],
        ['Gastos', 'Travel to Shoot Location, 900 €'],
        ['Total', '38.500 €'],
        ['No incluido', 'Impresión de los folletos'],
      ]}
      actions={[{ label: 'Denegar' }, { label: 'Crear', primary: true }]}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Tú">
    <p>He revisado los detalles y he seleccionado Crear.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.StatusChip status="Creado" label="2026 - 00418 · Showroom Launch" />
    <p>El estimate se ha creado en New, con un total de 38.500 €. Añade la impresión de los folletos como coste de terceros cuando llegue el presupuesto.</p>
  </Walkthrough.Message>
</Walkthrough>

## Artículos relacionados

- [Crear un Estimate](/docs/product/commercial/estimates/create-estimate)
- [Crear un Estimate a Partir de tus Instrucciones](/docs/ai/use-cases/contracts-estimates-and-purchase-orders/creating-an-estimate-from-instructions)
- [Archivos](/docs/product/files-and-collaboration/files)
- [AI Assistant](/docs/ai/ai-assistant)
