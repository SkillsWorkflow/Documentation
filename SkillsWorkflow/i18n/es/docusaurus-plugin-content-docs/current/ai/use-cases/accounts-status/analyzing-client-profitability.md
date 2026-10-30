---
id: analyzing-client-profitability
title: Analizar la Rentabilidad de un Cliente
description: "Mira cómo un account director pregunta al AI Assistant cuán rentable es un cliente, compara ingresos y costes por proyecto, descubre por qué un proyecto pierde margen y abre el Profitability Workspace."
sidebar_label: Analizar la Rentabilidad de un Cliente
sidebar_position: 4
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

:::preview
Este caso de uso está en preview, la conversación muestra cómo se espera que el AI Assistant lo gestione, y lo que responde o hace hoy puede diferir de este ejemplo.
:::

## Descripción general

Pregunta al AI Assistant cuán rentable es un cliente en un periodo. Compara los ingresos de cada proyecto con su coste y muestra el margen, con los proyectos más y menos rentables primero. Haz preguntas de seguimiento sobre un proyecto para ver a dónde fue el coste, por grupo de tipología, y abre el **Profitability Workspace** del cliente para seguir controlándolo.

La agencia, el cliente, los proyectos y los valores de este ejemplo son ilustrativos. Las cifras que ves dependen de tus accesos y de los datos que tu agencia pone a disposición del asistente.

<Walkthrough
  subtitle="Ejemplo de conversación entre un account director y el AI Assistant."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="De un cliente a sus márgenes">
        El asistente compara ingresos y costes de los proyectos del cliente y muestra dónde se gana el margen y dónde se pierde.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Pregunta cuán rentable fue el cliente en un periodo.',
          'Lee los ingresos, el coste y el margen por proyecto.',
          'Consulta Cómo he interpretado tu pregunta para ver cómo se calcularon los ingresos y el coste.',
          'Pregunta por qué un proyecto está por debajo de los demás.',
          'Abre el Profitability Workspace del cliente.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          '¿Cuán rentable fue Northwind Coffee este año?',
          '¿Cuál de mis clientes tiene el margen más bajo?',
          '¿Por qué Holiday Packaging está perdiendo dinero?',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'Los ingresos vienen de las horas vendidas en los estimates. El coste viene de las horas registradas y del coste de cada persona.',
          'Los costes y los márgenes solo se muestran a las personas cuyo perfil puede verlos.',
          'Los costes de terceros y los gastos se incluyen cuando están en los estimates del proyecto.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Tú">
    <p>¿Cuán rentable fue Northwind Coffee este año?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>Northwind Coffee generó 486.000 € de ingresos este año, con un coste de 352.400 € y un margen del 27%.</strong></p>
    <Walkthrough.DataTable
      columns={['Proyecto', 'Ingresos', 'Coste', 'Margen', 'Margen %']}
      rows={[
        ['Retainer 2026', '312.000 €', '218.400 €', '93.600 €', '30%'],
        ['Northwind Christmas 2026', '124.000 €', '89.300 €', '34.700 €', '28%'],
        ['Holiday Packaging', '50.000 €', '44.700 €', '5300 €', '11%'],
      ]}
    />
    <p><strong>Cómo he interpretado tu pregunta</strong></p>
    <ul>
      <li>Incluido: proyectos de Northwind Coffee con horas registradas desde el 1 de enero hasta hoy.</li>
      <li>Asumido: los ingresos son las horas vendidas en los estimates a su valor de venta, y el coste son las horas registradas al coste de cada persona.</li>
    </ul>
    <Walkthrough.Source label="Rentabilidad · 3 filas" />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Tú">
    <p>¿Por qué Holiday Packaging está tan por debajo?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>Design registró un 62% más de horas de las vendidas:</strong></p>
    <Walkthrough.DataTable
      columns={['Grupo de Tipología', 'Horas vendidas', 'Horas registradas', 'Coste por encima de los ingresos']}
      rows={[
        ['Design', '240h', '389h', '8900 €'],
        ['Copywriting', '80h', '76h', '—'],
        ['Accounts', '60h', '71h', '600 €'],
      ]}
      note="La mayoría de las horas de diseño de más se registraron en septiembre, después de que el cliente pidiera una tercera ronda de packaging."
    />
    <p>Para seguir el margen por proyecto y tipología, abre el <strong>Profitability Workspace</strong> del cliente.</p>
    <Walkthrough.WorkspaceCard
      title="Profitability Workspace"
      subtitle="Workspace · Cliente"
      description="Beneficio planificado y margen por proyecto y por tipología, con los proyectos más rentables primero."
    />
  </Walkthrough.Message>
</Walkthrough>

## Artículos relacionados

- [Workspace de Cliente](/docs/product/dashboards-and-reporting/client-dashboard)
- [Crear un Estimate](/docs/product/commercial/estimates/create-estimate)
- [Revisar los Jobs Críticos de tus Clientes](/docs/ai/use-cases/accounts-status/monitoring-critical-activities-across-accounts)
- [AI Assistant](/docs/ai/ai-assistant)
