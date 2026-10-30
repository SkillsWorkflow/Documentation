---
id: ai-claude-reports
title: Construir un Informe a Partir de tus Datos
description: "Pide a Claude un informe con tablas y gráficos construido sobre tus queries de extracción de datos de Skills Workflow: burn del retainer, facturación por mes, jobs por etapa, horas por cliente."
sidebar_label: Un Informe a Partir de tus Datos
sidebar_position: 5
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

Pide a Claude el informe que, si no, montarías en una hoja de cálculo cada mes: las horas consumidas de un retainer, la facturación por mes, los jobs por etapa, el tiempo por cliente. Claude lo construye sobre tus queries de extracción de datos, las mismas que hay detrás de tus informes de Skills Workflow, y lo publica con tablas y gráficos. Las cifras se calculan cuando alguien abre el informe.

## Disponibilidad

Disponible. Necesitas el [conector de Skills Workflow en Claude](/docs/ai/claude/ai-claude-connect). El informe lee las queries de extracción de datos publicadas en tu tenant; la lista está en [Data Extraction API](/docs/build-and-extend/api/data-extraction-api). Una pregunta que ninguna query responde necesita primero la query.

## Cómo pedirlo

1. Di para quién es el informe y la pregunta que responde, por ejemplo "cuánto del retainer de Contoso se ha consumido este trimestre".
2. Indica las cifras y el periodo. Claude elige la query y las columnas y te dice cuáles.
3. Pide solo las columnas que muestra el informe. Una persona que tiene permitido ejecutar una query recibe todas las columnas que pide el informe, costes y tarifas incluidos, aunque la página no las dibuje.
4. Revisa el informe como alguien que no tiene permitido ejecutar la query: ve un mensaje que dice que no tiene acceso, no una tabla vacía.

La agencia, el cliente, los números y la dirección de este ejemplo son ilustrativos.

<Walkthrough
  title="Claude"
  subtitle="Ejemplo de conversación entre un finance manager y Claude."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="La hoja de cálculo mensual, sin la hoja de cálculo">
        Claude construye el informe sobre tus propias queries. Se filtra y se suma en Skills Workflow antes de que una sola fila llegue a la página.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Indica la pregunta, las cifras y el periodo.',
          'Comprueba qué query y qué columnas eligió Claude.',
          'Deja fuera las columnas de costes y tarifas que los lectores no deben recibir.',
          'Abre el informe como alguien sin acceso.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'Haz un informe de las horas del retainer de Contoso por mes, frente a las horas contratadas.',
          'Añade un gráfico de la facturación por mes de este año.',
          'Muestra los jobs por etapa de la cuenta de Northwind.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Tú">
    <p>Necesito un informe de las horas registradas en el retainer de Contoso Bank, mes a mes este año, frente a las horas contratadas.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Claude">
    <p>Lo construiré sobre tu query de timesheets, filtrada por Contoso Bank y 2026, agrupada por mes:</p>
    <Walkthrough.DataTable
      columns={['Mes', 'Registradas', 'Contratadas', 'Consumido']}
      rows={[
        ['Julio', '312 h', '320 h', '98%'],
        ['Agosto', '205 h', '320 h', '64%'],
        ['Septiembre', '341 h', '320 h', '107%'],
      ]}
      note="Encima de la tabla va un gráfico de líneas de las horas registradas frente a las contratadas. No se pide ninguna columna de costes ni de tarifas."
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Tú">
    <p>Bien. Publícalo para el equipo de la cuenta de Contoso.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Claude">
    <Walkthrough.StatusChip status="Publicado" label="contoso-bank/retainer-hours" />
    <p>Publicado. Quienes no tienen permitido ejecutar la query de timesheets ven un mensaje que lo indica.</p>
  </Walkthrough.Message>
</Walkthrough>

## Reglas y comportamiento

- Las queries son de solo lectura. Un informe nunca cambia datos.
- Cada query comprueba sus roles. A una persona sin ellos se le deniegan los datos del informe, igual que en Skills Workflow.
- Los gráficos se dibujan dentro de la página. Un informe no puede cargar librerías de gráficos ni nada más desde otro sitio.
- El informe muestra los datos tal como están cuando se abre. Para una copia de las cifras en un momento dado, consulta [Imprimir o Enviar un Informe Tal Como Está Hoy](/docs/ai/claude/ai-claude-printable-reports).

## Artículos relacionados

- [Data Extraction API](/docs/build-and-extend/api/data-extraction-api)
- [Imprimir o Enviar un Informe Tal Como Está Hoy](/docs/ai/claude/ai-claude-printable-reports)
- [Compartir una Página de Estado en Tiempo Real con un Cliente](/docs/ai/claude/ai-claude-client-status-page)
- [Portales de Cliente](/docs/ai/ai-portals)
