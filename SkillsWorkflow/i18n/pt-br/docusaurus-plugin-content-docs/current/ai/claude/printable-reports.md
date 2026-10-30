---
id: ai-claude-printable-reports
title: Imprimir ou Enviar um Relatório como Está Hoje
description: "Peça ao Claude um relatório formatado para papel: o relatório de status mensal ou o resumo de fim de campanha, datado, impresso ou salvo em PDF pelo navegador e enviado a quem precisar."
sidebar_label: Um Relatório para Imprimir ou Enviar
sidebar_position: 7
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

:::preview
Isto está em preview e ainda não foi testado de ponta a ponta. É criado com o que o Skills Workflow oferece hoje; confira o resultado impresso antes de enviá-lo.
:::

Alguns relatórios são feitos para sair do Skills Workflow: o relatório de status mensal anexado a um e-mail, o resumo de fim de campanha para a equipe de compras do cliente, os números para uma reunião da diretoria. Peça ao Claude um relatório formatado para papel. Abra-o no dia em que precisar e imprima-o ou salve-o em PDF pelo navegador. O PDF guarda os números como estavam naquele momento, com a data impressa.

## Disponibilidade

Preview. Você precisa do [conector do Skills Workflow no Claude](/docs/ai/claude/ai-claude-connect). Salvar uma cópia do relatório dentro do Skills Workflow, guardada como estava em uma data, não está disponível.

## Como pedir

1. Peça o relatório e diga que ele é para ser impresso ou salvo em PDF, e em qual tamanho de papel.
2. Peça que a data e a hora dos números sejam impressas em todas as páginas.
3. Peça um botão **Print** na página e nada no papel que só faça sentido na tela, como filtros e links.
4. Abra o relatório, selecione **Print** e escolha a sua impressora ou **Save as PDF**.

A agência, o cliente e os números deste exemplo são ilustrativos.

<Walkthrough
  title="Claude"
  subtitle="Exemplo de conversa entre um diretor de contas e o Claude."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="Uma cópia datada para enviar">
        O relatório lê os dados de hoje quando você o abre. O PDF que você salva os guarda como estavam.
      </Walkthrough.CapabilityCard>
      <Walkthrough.PhrasingCard
        items={[
          'Torne o relatório de status mensal do Contoso imprimível em A4.',
          'Imprima a data dos números no rodapé de todas as páginas.',
          'Comece cada projeto em uma nova página.',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'Quem recebe o PDF não precisa de um usuário do Skills Workflow.',
          'Confira o que o PDF mostra antes de enviá-lo para fora da agência.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Você">
    <p>Envio ao Contoso Bank um relatório de status no fim de cada mês. Crie uma versão da página de status deles formatada para A4, com a data em todas as páginas, que eu possa salvar em PDF.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Claude">
    <p>Publiquei uma versão para impressão ao lado da página de status:</p>
    <Walkthrough.FieldTable
      rows={[
        ['Papel', 'A4, retrato'],
        ['Todas as páginas', 'Logo do Contoso Bank, o título do relatório e “Números de” com a data e a hora'],
        ['Cada projeto', 'Começa em uma nova página'],
        ['Só na tela', 'O botão Print'],
      ]}
    />
    <p>Abra <code>/portal/contoso-bank/monthly-report/</code>, selecione Print e escolha Save as PDF.</p>
  </Walkthrough.Message>
</Walkthrough>

## Regras e comportamento

- O relatório na tela sempre mostra os números de hoje. Só a cópia impressa ou salva fica fixa.
- O PDF sai do Skills Workflow com você. As permissões deixam de se aplicar a quem você o enviar.

## Artigos relacionados

- [Criar um Relatório a Partir dos Seus Dados](/docs/ai/claude/ai-claude-reports)
- [Compartilhar uma Página de Status em Tempo Real com um Cliente](/docs/ai/claude/ai-claude-client-status-page)
- [Skills Workflow no Claude](/docs/ai/claude)
