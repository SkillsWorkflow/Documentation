---
id: ai-claude-forms
title: Recolher Pedidos com um Formulário
description: "Peça ao Claude um formulário que cria trabalho no Skills Workflow: um formulário de pedido que abre um job, ou um formulário curto de feedback que um cliente preenche depois de uma entrega."
sidebar_label: Um Formulário que Cria Trabalho
sidebar_position: 8
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

:::preview
Isto está em preview e ainda não foi testado de ponta a ponta. É construído com o que o Skills Workflow oferece hoje; teste-o com um pedido real antes de o partilhar.
:::

Substitua os emails de pedidos por um formulário. Peça ao Claude uma página onde um cliente ou um colega descreve o que precisa, e o pedido chega ao Skills Workflow como um job, com os campos de que a sua equipa precisa preenchidos. O mesmo vale para um formulário de feedback depois de uma entrega, ou para um brief curto para um novo trabalho.

## Disponibilidade

Preview. Precisa do [conector do Skills Workflow no Claude](/docs/ai/claude/ai-claude-connect). Quem preenche o formulário inicia sessão no Skills Workflow, e o que envia é criado em seu nome, com as suas permissões. Um formulário para pessoas sem utilizador do Skills Workflow não está disponível.

## Como pedir

1. Diga o que o formulário cria, para que cliente e em que tipo de job.
2. Liste as perguntas e o campo do Skills Workflow para onde vai cada resposta.
3. Diga o que a pessoa vê depois de enviar: o número do job, um agradecimento, uma ligação para a página de estado.
4. Envie você mesmo um pedido de teste e abra o job que criou.

A agência, o cliente e o job neste exemplo são ilustrativos.

<Walkthrough
  title="Claude"
  subtitle="Exemplo de conversa entre um gestor de tráfego e o Claude."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="Os pedidos chegam como trabalho, e não como email">
        Cada formulário cria o job com as respostas nos campos certos, em nome de quem o enviou.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Indique o tipo de job e o cliente.',
          'Associe cada pergunta a um campo.',
          'Envie um pedido de teste e abra o job.',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'Quem não pode criar o job recebe uma mensagem a dizê-lo.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Você">
    <p>A equipa de marketing da Northwind envia-nos os pedidos por email. Cria-lhes um formulário que crie um job no cliente Northwind Coffee: o que precisam, o prazo, o canal e os ficheiros que tiverem.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Claude">
    <p>Isto é o que cada resposta passa a ser:</p>
    <Walkthrough.DataTable
      columns={['Pergunta', 'Vai para']}
      rows={[
        ['De que precisa?', 'Nome e descrição do job'],
        ['Para quando precisa?', 'Data de entrega'],
        ['Que canal?', 'O campo de canal do job'],
        ['Ficheiros', 'Anexados ao job'],
      ]}
      note="Depois de enviar, a pessoa vê o número do job e uma ligação para a página de estado da Northwind."
    />
  </Walkthrough.Message>
</Walkthrough>

## Regras e comportamento

- Um formulário cria e atualiza registos como a pessoa com sessão iniciada. O que ela não consegue fazer no Skills Workflow, o formulário também não consegue fazer por ela.

## Artigos relacionados

- [Partilhar uma Página de Estado em Tempo Real com um Cliente](/docs/ai/claude/ai-claude-client-status-page)
- [Skills Workflow no Claude](/docs/ai/claude)
- [Ligar o Claude ao Skills Workflow](/docs/ai/claude/ai-claude-connect)
