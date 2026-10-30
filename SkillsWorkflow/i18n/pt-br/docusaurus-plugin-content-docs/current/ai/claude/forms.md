---
id: ai-claude-forms
title: Receber Pedidos com um Formulário
description: "Peça ao Claude um formulário que cria trabalho no Skills Workflow: um formulário de pedido que abre uma Atividade, ou um formulário curto de feedback que um cliente preenche depois de uma entrega."
sidebar_label: Um Formulário que Cria Trabalho
sidebar_position: 8
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

:::preview
Isto está em preview e ainda não foi testado de ponta a ponta. É criado com o que o Skills Workflow oferece hoje; teste-o com um pedido real antes de compartilhá-lo.
:::

Troque os pedidos por e-mail por um formulário. Peça ao Claude uma página onde um cliente ou um colega descreve o que precisa, e o pedido chega ao Skills Workflow como uma Atividade, com os campos de que a sua equipe precisa já preenchidos. O mesmo vale para um formulário de feedback depois de uma entrega, ou para um brief curto de um novo trabalho.

## Disponibilidade

Preview. Você precisa do [conector do Skills Workflow no Claude](/docs/ai/claude/ai-claude-connect). Quem preenche o formulário faz login no Skills Workflow, e o que envia é criado em nome dessa pessoa, com as permissões dela. Um formulário para pessoas sem usuário do Skills Workflow não está disponível.

## Como pedir

1. Diga o que o formulário cria, para qual cliente e em qual Tipo de Atividade.
2. Liste as perguntas e o campo do Skills Workflow para onde vai cada resposta.
3. Diga o que a pessoa vê depois de enviar: o número da Atividade, um agradecimento, um link para a página de status.
4. Envie você mesmo um pedido de teste e abra a Atividade que ele criou.

A agência, o cliente e a Atividade deste exemplo são ilustrativos.

<Walkthrough
  title="Claude"
  subtitle="Exemplo de conversa entre um gerente de tráfego e o Claude."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="Os pedidos chegam como trabalho, não como e-mail">
        Cada formulário cria a Atividade com as respostas nos campos certos, em nome da pessoa que o enviou.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Indique o Tipo de Atividade e o cliente.',
          'Associe cada pergunta a um campo.',
          'Envie um pedido de teste e abra a Atividade.',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'Quem não tem permissão para criar a Atividade recebe uma mensagem informando isso.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Você">
    <p>A equipe de marketing da Northwind nos envia os pedidos por e-mail. Crie para eles um formulário que cria uma Atividade no cliente Northwind Coffee: o que precisam, o prazo, o canal e os arquivos que tiverem.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Claude">
    <p>Veja o que cada resposta se torna:</p>
    <Walkthrough.DataTable
      columns={['Pergunta', 'Vai para']}
      rows={[
        ['Do que você precisa?', 'Nome e descrição da Atividade'],
        ['Para quando você precisa?', 'Data de entrega'],
        ['Qual canal?', 'O campo de canal da Atividade'],
        ['Arquivos', 'Anexados à Atividade'],
      ]}
      note="Depois de enviar, a pessoa vê o número da Atividade e um link para a página de status da Northwind."
    />
  </Walkthrough.Message>
</Walkthrough>

## Regras e comportamento

- Um formulário cria e atualiza registros em nome da pessoa com login. O que ela não pode fazer no Skills Workflow, o formulário também não pode fazer por ela.

## Artigos relacionados

- [Compartilhar uma Página de Status em Tempo Real com um Cliente](/docs/ai/claude/ai-claude-client-status-page)
- [Skills Workflow no Claude](/docs/ai/claude)
- [Conectar o Claude, o Codex ou o GitHub Copilot ao Skills Workflow](/docs/ai/claude/ai-claude-connect)
