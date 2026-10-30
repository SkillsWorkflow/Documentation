---
id: ai-claude-printable-reports
title: Imprimir ou Enviar um Relatório Tal Como Está Hoje
description: "Peça ao Claude um relatório paginado para papel: o relatório de estado mensal ou o resumo de fim de campanha, datado, impresso ou guardado em PDF a partir do browser e enviado a quem precisar dele."
sidebar_label: Um Relatório para Imprimir ou Enviar
sidebar_position: 7
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

:::preview
Isto está em preview e ainda não foi testado de ponta a ponta. É construído com o que o Skills Workflow oferece hoje; confira o resultado impresso antes de o enviar.
:::

Alguns relatórios são feitos para sair do Skills Workflow: o relatório de estado mensal anexado a um email, o resumo de fim de campanha para a equipa de compras do cliente, os valores para uma reunião de administração. Peça ao Claude um relatório paginado para papel. Abra-o no dia em que precisar dele e imprima-o ou guarde-o em PDF a partir do browser. O PDF guarda os valores tal como estavam nesse momento, com a data impressa.

## Disponibilidade

Preview. Precisa do [conector do Skills Workflow no Claude](/docs/ai/claude/ai-claude-connect). Guardar uma cópia do relatório dentro do Skills Workflow, mantida tal como estava numa data, não está disponível.

## Como pedir

1. Peça o relatório e diga que é para imprimir ou guardar em PDF, e em que tamanho de papel.
2. Peça que a data e a hora dos valores sejam impressas em todas as páginas.
3. Peça um botão **Print** na página e nada no papel que só faça sentido no ecrã, como filtros e ligações.
4. Abra o relatório, selecione **Print** e escolha a sua impressora ou **Save as PDF**.

A agência, o cliente e os números neste exemplo são ilustrativos.

<Walkthrough
  title="Claude"
  subtitle="Exemplo de conversa entre um account director e o Claude."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="Uma cópia datada para enviar">
        O relatório lê os dados de hoje quando o abre. O PDF que guardar mantém-nos tal como estavam.
      </Walkthrough.CapabilityCard>
      <Walkthrough.PhrasingCard
        items={[
          'Torna o relatório de estado mensal do Contoso imprimível em A4.',
          'Imprime a data dos valores no rodapé de todas as páginas.',
          'Começa cada projeto numa página nova.',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'Quem recebe o PDF não precisa de um utilizador do Skills Workflow.',
          'Confira o que o PDF mostra antes de o enviar para fora da agência.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Você">
    <p>Envio ao Contoso Bank um relatório de estado no fim de cada mês. Faz-me uma versão da página de estado deles paginada para A4, com a data em todas as páginas, que eu possa guardar em PDF.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Claude">
    <p>Publiquei uma versão para impressão ao lado da página de estado:</p>
    <Walkthrough.FieldTable
      rows={[
        ['Papel', 'A4, vertical'],
        ['Todas as páginas', 'Logótipo do Contoso Bank, o título do relatório e “Valores a” com a data e a hora'],
        ['Cada projeto', 'Começa numa página nova'],
        ['Só no ecrã', 'O botão Print'],
      ]}
    />
    <p>Abra <code>/portal/contoso-bank/monthly-report/</code>, selecione Print e escolha Save as PDF.</p>
  </Walkthrough.Message>
</Walkthrough>

## Regras e comportamento

- O relatório no ecrã mostra sempre os valores de hoje. Só a cópia impressa ou guardada fica fixa.
- O PDF sai do Skills Workflow consigo. As permissões deixam de se aplicar a quem o enviar.

## Artigos relacionados

- [Construir um Relatório a Partir dos Seus Dados](/docs/ai/claude/ai-claude-reports)
- [Partilhar uma Página de Estado em Tempo Real com um Cliente](/docs/ai/claude/ai-claude-client-status-page)
- [Skills Workflow no Claude](/docs/ai/claude)
