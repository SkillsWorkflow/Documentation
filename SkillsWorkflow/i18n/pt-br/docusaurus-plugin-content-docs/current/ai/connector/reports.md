---
id: ai-connector-reports
title: Criar um Relatório a Partir dos Seus Dados
description: "Peça ao Claude um relatório com tabelas e gráficos baseado nas consultas de extração de dados do Skills Workflow: burn do retainer, faturamento por mês, Atividades por etapa, horas por cliente."
sidebar_label: Um Relatório a Partir dos Seus Dados
sidebar_position: 5
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

Peça ao Claude o relatório que, de outra forma, você montaria em uma planilha todo mês: as horas usadas em um retainer, o faturamento por mês, as Atividades por etapa, o tempo por cliente. O Claude o monta com base nas suas consultas de extração de dados, as mesmas por trás dos relatórios do Skills Workflow, e o publica com tabelas e gráficos. Os números são calculados quando alguém abre o relatório.

## Disponibilidade

Disponível. Você precisa do [conector do Skills Workflow no Claude](/docs/ai/connector/ai-connector-setup). O relatório lê as consultas de extração de dados publicadas no seu tenant; a lista está em [Data Extraction API](/docs/build-and-extend/api/data-extraction-api). Uma pergunta que nenhuma consulta responde precisa primeiro da consulta.

## Como pedir

1. Diga para quem é o relatório e a pergunta que ele responde, por exemplo "quanto do retainer do Contoso foi usado neste trimestre".
2. Indique os números e o período. O Claude escolhe a consulta e as colunas e informa quais são.
3. Peça apenas as colunas que o relatório mostra. Uma pessoa com permissão para executar uma consulta recebe todas as colunas que o relatório pede, incluindo custos e valores de hora, mesmo quando a página não as exibe.
4. Revise o relatório como alguém que não tem permissão para executar a consulta: essa pessoa vê uma mensagem dizendo que não tem acesso, e não uma tabela vazia.

A agência, o cliente, os números e o endereço deste exemplo são ilustrativos.

<Walkthrough
  title="Claude"
  subtitle="Exemplo de conversa entre um gerente financeiro e o Claude."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="A planilha do mês, sem a planilha">
        O Claude monta o relatório com base nas suas próprias consultas. Os dados são filtrados e somados no Skills Workflow antes de qualquer linha chegar à página.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Indique a pergunta, os números e o período.',
          'Confira qual consulta e quais colunas o Claude escolheu.',
          'Deixe de fora as colunas de custo e de valor de hora que os leitores não devem receber.',
          'Abra o relatório como alguém sem acesso.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'Mostre as horas do retainer do Contoso por mês, em relação às horas contratadas.',
          'Adicione um gráfico do faturamento por mês deste ano.',
          'Mostre as Atividades por etapa da conta Northwind.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Você">
    <p>Preciso de um relatório das horas registradas no retainer do Contoso Bank, mês a mês neste ano, em relação às horas contratadas.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Claude">
    <p>Vou montá-lo com base na sua consulta de time sheets, filtrada para o Contoso Bank e 2026, agrupada por mês:</p>
    <Walkthrough.DataTable
      columns={['Mês', 'Registradas', 'Contratadas', 'Usado']}
      rows={[
        ['Julho', '312 h', '320 h', '98%'],
        ['Agosto', '205 h', '320 h', '64%'],
        ['Setembro', '341 h', '320 h', '107%'],
      ]}
      note="Um gráfico de linhas das horas registradas em relação às contratadas fica acima da tabela. Nenhuma coluna de custo ou de valor de hora é pedida."
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Ótimo. Publique para a equipe da conta Contoso.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Claude">
    <Walkthrough.StatusChip status="Publicado" label="contoso-bank/retainer-hours" />
    <p>Publicado. Quem não tem permissão para executar a consulta de time sheets vê uma mensagem informando isso.</p>
  </Walkthrough.Message>
</Walkthrough>

## Regras e comportamento

- As consultas são somente leitura. Um relatório nunca altera dados.
- Cada consulta verifica os seus perfis. Uma pessoa sem eles tem os dados recusados no relatório, como acontece no Skills Workflow.
- Os gráficos são desenhados dentro da página. Um relatório não pode carregar bibliotecas de gráficos nem qualquer outra coisa de outro site.
- O relatório mostra os dados como estão no momento em que é aberto. Para uma cópia dos números em um determinado momento, veja [Imprimir ou Enviar um Relatório como Está Hoje](/docs/ai/connector/ai-connector-printable-reports).

## Artigos relacionados

- [Data Extraction API](/docs/build-and-extend/api/data-extraction-api)
- [Imprimir ou Enviar um Relatório como Está Hoje](/docs/ai/connector/ai-connector-printable-reports)
- [Compartilhar uma Página de Status em Tempo Real com um Cliente](/docs/ai/connector/ai-connector-client-status-page)
- [Portais de Clientes](/docs/ai/ai-portals)
