---
id: ai-connector-client-hub
title: Um Endereço para Tudo o que um Cliente Abre
description: "Peça ao Claude a página inicial de um cliente: um só endereço com ligações para todas as páginas de estado e relatórios que publica para ele, com um resumo curto de cada um."
sidebar_label: Um Endereço por Cliente
sidebar_position: 4
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

Dê a cada cliente um só endereço para guardar nos favoritos. O Claude constrói uma página inicial para o cliente com ligações para as páginas de estado e os relatórios que publicou para ele, e mostra uma linha de dados em tempo real ao lado de cada ligação: quantas aprovações estão à espera, quanto do retainer já foi usado. Quando publicar algo novo para o cliente, peça ao Claude para o acrescentar à página inicial.

## Disponibilidade

Disponível. Precisa do [conector do Skills Workflow no Claude](/docs/ai/connector/ai-connector-setup) e de pelo menos uma página já publicada para o cliente.

## Como pedir

1. Peça ao Claude uma página inicial para o cliente e indique as páginas para as quais deve ter ligação. O Claude consegue ler o que está publicado para o cliente quando lhe dá os nomes das páginas.
2. Diga que valor, se algum, cada ligação deve mostrar.
3. Reveja a página e deixe o Claude publicá-la no endereço principal do cliente, por exemplo `/portal/{client}/home/`.

A agência, o cliente, os números e o endereço neste exemplo são ilustrativos.

<Walkthrough
  title="Claude"
  subtitle="Exemplo de conversa entre um account director e o Claude."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="Uma ligação para enviar, uma única vez">
        O cliente mantém um só endereço. As páginas novas aparecem nele quando pede ao Claude para as acrescentar.
      </Walkthrough.CapabilityCard>
      <Walkthrough.PhrasingCard
        items={[
          'Cria uma página inicial para o Contoso Bank com ligações para a página de estado e para o relatório do retainer.',
          'Acrescenta a página da nova campanha à página inicial do Contoso.',
          'Mostra quantas aprovações estão à espera ao lado da ligação para a página de estado.',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'Cada página para a qual há ligação aplica as suas próprias permissões de dados quando abre.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Você">
    <p>O Contoso Bank tem uma página de estado e um relatório do retainer. Cria-lhes uma página inicial com ligações para as duas, com o número de aprovações à espera ao lado da página de estado.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Claude">
    <p>Encontrei as duas páginas em <code>contoso-bank</code>. A página inicial vai ter:</p>
    <Walkthrough.DataTable
      columns={['Ligação', 'Mostrado ao lado']}
      rows={[
        ['Estado da campanha', 'Aprovações à espera de si'],
        ['Relatório do retainer', 'Percentagem das horas deste mês já usada'],
        ['A sua equipa', 'A equipa de conta, com as fotografias'],
      ]}
    />
    <p>Vou publicá-la em <code>/portal/contoso-bank/home/</code>.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Avança.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Claude">
    <Walkthrough.StatusChip status="Publicado" label="contoso-bank/home" />
    <p>Publicada. Envie ao Contoso este único endereço; as outras duas páginas abrem-se a partir dele.</p>
  </Walkthrough.Message>
</Walkthrough>

## Regras e comportamento

- Uma ligação na página inicial abre a outra página no seu próprio endereço. Cada página verifica por si as permissões de quem a vê.
- A página inicial não encontra páginas novas sozinha. Peça ao Claude para acrescentar cada uma.

## Artigos relacionados

- [Partilhar uma Página de Estado em Tempo Real com um Cliente](/docs/ai/connector/ai-connector-client-status-page)
- [Construir um Relatório a Partir dos Seus Dados](/docs/ai/connector/ai-connector-reports)
- [Portais de Cliente](/docs/ai/ai-portals)
