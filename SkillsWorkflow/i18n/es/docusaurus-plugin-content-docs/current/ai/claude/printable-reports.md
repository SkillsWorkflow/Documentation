---
id: ai-claude-printable-reports
title: Imprimir o Enviar un Informe Tal Como Está Hoy
description: "Pide a Claude un informe maquetado para papel: el informe de estado mensual o el resumen de fin de campaña, con fecha, impreso o guardado en PDF desde el navegador y enviado a quien lo necesite."
sidebar_label: Un Informe para Imprimir o Enviar
sidebar_position: 7
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

:::preview
Esto está en preview y todavía no se ha probado de principio a fin. Se construye con lo que Skills Workflow ofrece hoy; comprueba el resultado impreso antes de enviarlo.
:::

Algunos informes están pensados para salir de Skills Workflow: el informe de estado mensual adjunto a un email, el resumen de fin de campaña para el equipo de compras del cliente, las cifras para una reunión del consejo. Pide a Claude un informe maquetado para papel. Ábrelo el día que lo necesites e imprímelo o guárdalo en PDF desde el navegador. El PDF conserva las cifras tal como estaban en ese momento, con la fecha impresa.

## Disponibilidad

Preview. Necesitas el [conector de Skills Workflow en Claude](/docs/ai/claude/ai-claude-connect). Guardar dentro de Skills Workflow una copia del informe, conservada tal como estaba en una fecha, no está disponible.

## Cómo pedirlo

1. Pide el informe, di que es para imprimir o guardar en PDF, y en qué tamaño de papel.
2. Pide que la fecha y la hora de las cifras se impriman en todas las páginas.
3. Pide un botón **Print** en la página y que en el papel no salga nada que solo tenga sentido en pantalla, como filtros y enlaces.
4. Abre el informe, selecciona **Print** y elige tu impresora o **Save as PDF**.

La agencia, el cliente y los números de este ejemplo son ilustrativos.

<Walkthrough
  title="Claude"
  subtitle="Ejemplo de conversación entre un account director y Claude."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="Una copia con fecha para enviar">
        El informe lee los datos de hoy cuando lo abres. El PDF que guardas los conserva tal como estaban.
      </Walkthrough.CapabilityCard>
      <Walkthrough.PhrasingCard
        items={[
          'Haz que el informe de estado mensual de Contoso se pueda imprimir en A4.',
          'Imprime la fecha de las cifras en el pie de cada página.',
          'Empieza cada proyecto en una página nueva.',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'Quien recibe el PDF no necesita un usuario de Skills Workflow.',
          'Comprueba lo que muestra el PDF antes de enviarlo fuera de la agencia.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Tú">
    <p>Envío a Contoso Bank un informe de estado al final de cada mes. Hazme una versión de su página de estado maquetada para A4, con la fecha en todas las páginas, que pueda guardar en PDF.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Claude">
    <p>He publicado una versión para imprimir junto a la página de estado:</p>
    <Walkthrough.FieldTable
      rows={[
        ['Papel', 'A4, vertical'],
        ['Cada página', 'Logotipo de Contoso Bank, el título del informe y “Cifras a” con la fecha y la hora'],
        ['Cada proyecto', 'Empieza en una página nueva'],
        ['Solo en pantalla', 'El botón Print'],
      ]}
    />
    <p>Abre <code>/portal/contoso-bank/monthly-report/</code>, selecciona Print y elige Save as PDF.</p>
  </Walkthrough.Message>
</Walkthrough>

## Reglas y comportamiento

- El informe en pantalla siempre muestra las cifras de hoy. Solo la copia impresa o guardada queda fija.
- El PDF sale de Skills Workflow contigo. Los permisos ya no se aplican a quien se lo envíes.

## Artículos relacionados

- [Construir un Informe a Partir de tus Datos](/docs/ai/claude/ai-claude-reports)
- [Compartir una Página de Estado en Tiempo Real con un Cliente](/docs/ai/claude/ai-claude-client-status-page)
- [Skills Workflow en Claude](/docs/ai/claude)
