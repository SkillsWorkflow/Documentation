---
id: ai-claude-client-hub
title: Um Único Endereço para Tudo o que um Cliente Abre
description: "Peça ao Claude a página inicial de um cliente: um único endereço com links para todas as páginas de status e relatórios que você publica para ele, com um resumo curto de cada um."
sidebar_label: Um Endereço por Cliente
sidebar_position: 4
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

Dê a cada cliente um único endereço para salvar nos favoritos. O Claude cria uma página inicial para o cliente com links para as páginas de status e os relatórios que você publicou para ele, e mostra uma linha de dados em tempo real ao lado de cada link: quantas aprovações estão pendentes, quanto do retainer já foi usado. Quando publicar algo novo para o cliente, peça ao Claude para adicioná-lo à página inicial.

## Disponibilidade

Disponível. Você precisa do [conector do Skills Workflow no Claude](/docs/ai/claude/ai-claude-connect) e de pelo menos uma página já publicada para o cliente.

## Como pedir

1. Peça ao Claude uma página inicial para o cliente e indique as páginas para as quais ela deve ter links. O Claude consegue ler o que está publicado para o cliente quando você informa os nomes das páginas.
2. Diga qual número, se houver, cada link deve mostrar.
3. Revise a página e deixe o Claude publicá-la no endereço principal do cliente, por exemplo `/portal/{client}/home/`.

A agência, o cliente, os números e o endereço deste exemplo são ilustrativos.

<Walkthrough
  title="Claude"
  subtitle="Exemplo de conversa entre um diretor de contas e o Claude."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="Um link para enviar, uma única vez">
        O cliente fica com um único endereço. As novas páginas aparecem nele quando você pede ao Claude para adicioná-las.
      </Walkthrough.CapabilityCard>
      <Walkthrough.PhrasingCard
        items={[
          'Crie uma página inicial para o Contoso Bank com links para a página de status e o relatório do retainer deles.',
          'Adicione a página da nova campanha à página inicial do Contoso.',
          'Mostre quantas aprovações estão pendentes ao lado do link da página de status.',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'Cada página com link aplica as próprias permissões de dados quando é aberta.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Você">
    <p>O Contoso Bank tem uma página de status e um relatório do retainer. Crie para eles uma página inicial com links para os dois, com o número de aprovações pendentes ao lado da página de status.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Claude">
    <p>Encontrei as duas páginas em <code>contoso-bank</code>. A página inicial vai ter:</p>
    <Walkthrough.DataTable
      columns={['Link', 'Mostrado ao lado']}
      rows={[
        ['Status da campanha', 'Aprovações aguardando você'],
        ['Relatório do retainer', 'Parcela das horas deste mês já usada'],
        ['A sua equipe', 'A equipe da conta, com as fotos'],
      ]}
    />
    <p>Vou publicá-la em <code>/portal/contoso-bank/home/</code>.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Pode seguir.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Claude">
    <Walkthrough.StatusChip status="Publicado" label="contoso-bank/home" />
    <p>Publicada. Envie ao Contoso só este endereço; as outras duas páginas podem ser acessadas a partir dele.</p>
  </Walkthrough.Message>
</Walkthrough>

## Regras e comportamento

- Um link na página inicial abre a outra página no endereço dela. Cada página verifica as permissões de quem a vê por conta própria.
- A página inicial não encontra novas páginas sozinha. Peça ao Claude para adicionar cada uma.

## Artigos relacionados

- [Compartilhar uma Página de Status em Tempo Real com um Cliente](/docs/ai/claude/ai-claude-client-status-page)
- [Criar um Relatório a Partir dos Seus Dados](/docs/ai/claude/ai-claude-reports)
- [Portais de Clientes](/docs/ai/ai-portals)
