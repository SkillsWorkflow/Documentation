---
id: ai-connector-reports
title: Construir um Relatório a Partir dos Seus Dados
description: "Peça ao Claude um relatório com tabelas e gráficos construído sobre as queries de extração de dados do Skills Workflow: burn de um retainer, faturação por mês, jobs por etapa, horas por cliente."
sidebar_label: Um Relatório a Partir dos Seus Dados
sidebar_position: 5
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

Peça ao Claude o relatório que, de outra forma, montaria numa folha de cálculo todos os meses: as horas usadas num retainer, a faturação por mês, os jobs por etapa, o tempo por cliente. O Claude constrói-o sobre as suas queries de extração de dados, as mesmas que estão por trás dos seus relatórios do Skills Workflow, e publica-o com tabelas e gráficos. Os valores são calculados quando alguém abre o relatório.

## Disponibilidade

Disponível. Precisa do [conector do Skills Workflow no Claude](/docs/ai/connector/ai-connector-setup). O relatório lê as queries de extração de dados publicadas no seu tenant; a lista está em [Data Extraction API](/docs/build-and-extend/api/data-extraction-api). Uma pergunta à qual nenhuma query responde precisa primeiro da query.

## Como pedir

1. Diga para quem é o relatório e a que pergunta responde, por exemplo "quanto do retainer do Contoso já foi usado este trimestre".
2. Indique os valores e o período. O Claude escolhe a query e as colunas e diz-lhe quais.
3. Peça apenas as colunas que o relatório mostra. Uma pessoa que pode executar uma query recebe todas as colunas que o relatório pede, incluindo custos e rates, mesmo quando a página não as apresenta.
4. Reveja o relatório como alguém que não pode executar a query: essa pessoa vê uma mensagem a dizer que não tem acesso, e não uma tabela vazia.

A agência, o cliente, os números e o endereço neste exemplo são ilustrativos.

<Walkthrough
  title="Claude"
  subtitle="Exemplo de conversa entre um gestor financeiro e o Claude."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="A folha de cálculo mensal, sem a folha de cálculo">
        O Claude constrói o relatório sobre as suas próprias queries. Os dados são filtrados e somados no Skills Workflow antes de uma única linha chegar à página.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Indique a pergunta, os valores e o período.',
          'Confira que query e que colunas o Claude escolheu.',
          'Deixe de fora as colunas de custos e rates que os leitores não devem receber.',
          'Abra o relatório como alguém sem acesso.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'Faz um relatório das horas do retainer do Contoso por mês, face às horas contratadas.',
          'Acrescenta um gráfico da faturação por mês deste ano.',
          'Mostra os jobs por etapa da conta Northwind.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Você">
    <p>Preciso de um relatório das horas registadas no retainer do Contoso Bank, mês a mês este ano, face às horas contratadas.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Claude">
    <p>Vou construí-lo sobre a sua query de timesheets, filtrada para o Contoso Bank e 2026, agrupada por mês:</p>
    <Walkthrough.DataTable
      columns={['Mês', 'Registadas', 'Contratadas', 'Usado']}
      rows={[
        ['Julho', '312 h', '320 h', '98%'],
        ['Agosto', '205 h', '320 h', '64%'],
        ['Setembro', '341 h', '320 h', '107%'],
      ]}
      note="Por cima da tabela fica um gráfico de linhas com as horas registadas face às contratadas. Não são pedidas colunas de custos nem de rates."
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Boa. Publica-o para a equipa de conta do Contoso.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Claude">
    <Walkthrough.StatusChip status="Publicado" label="contoso-bank/retainer-hours" />
    <p>Publicado. Quem não pode executar a query de timesheets vê uma mensagem a dizê-lo.</p>
  </Walkthrough.Message>
</Walkthrough>

## Regras e comportamento

- As queries são apenas de leitura. Um relatório nunca altera dados.
- Cada query verifica os seus perfis. A uma pessoa sem eles são recusados os dados no relatório, tal como no Skills Workflow.
- Os gráficos são desenhados dentro da página. Um relatório não pode carregar bibliotecas de gráficos nem nada de outro site.
- O relatório mostra os dados tal como estão quando abre. Para uma cópia dos valores num dado momento, veja [Imprimir ou Enviar um Relatório Tal Como Está Hoje](/docs/ai/connector/ai-connector-printable-reports).

## Artigos relacionados

- [Data Extraction API](/docs/build-and-extend/api/data-extraction-api)
- [Imprimir ou Enviar um Relatório Tal Como Está Hoje](/docs/ai/connector/ai-connector-printable-reports)
- [Partilhar uma Página de Estado em Tempo Real com um Cliente](/docs/ai/connector/ai-connector-client-status-page)
- [Portais de Cliente](/docs/ai/ai-portals)
