---
id: finding-the-best-client-dashboard-or-portal
title: Encontrar o Melhor Workspace ou Portal para Partilhar com um Cliente
description: "Veja como um account manager pergunta ao AI Assistant que workspace ou portal de cliente usar para partilhar com um cliente o estado do projeto, o burn do contrato e os pedidos pendentes, e o que mostra cada um."
sidebar_label: Encontrar o Melhor Workspace ou Portal de Cliente
sidebar_position: 3
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

:::preview
Este caso de uso está em preview, a conversa mostra como se espera que o AI Assistant o trate, e o que hoje responde ou faz pode ser diferente deste exemplo.
:::

## Visão geral

Diga ao AI Assistant o que quer partilhar com um cliente: o estado dos projetos, o burn do contrato, os riscos ou os pedidos que estão à espera dele. O assistente associa o pedido aos workspaces e portais de cliente que a sua agência tem, explica o que mostra cada um e recomenda a escolha mais clara. Também lhe diz que vistas se destinam apenas à agência, como a rentabilidade.

A agência e o cliente neste exemplo são ilustrativos. O assistente recomenda a partir dos workspaces e portais disponíveis na sua agência, por isso os nomes que vê podem ser diferentes. O Burn Workspace e o Profitability Workspace, usados neste exemplo, são workspaces de cliente.

<Walkthrough
  subtitle="Exemplo de conversa entre um account manager e o AI Assistant."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="Do que o cliente pede a onde o mostrar">
        O assistente indica-lhe o workspace ou portal que responde à pergunta do seu cliente e avisa-o sobre os que devem ficar internos.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Diga o que o cliente quer acompanhar.',
          'Leia que workspace ou portal o assistente recomenda e porquê.',
          'Pergunte se uma vista é adequada para partilhar com o cliente.',
          'Abra o workspace recomendado, ou peça um portal quando nenhum servir.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'O que posso mostrar à Northwind Coffee sobre o burn do contrato deles?',
          'Já existe um portal para este cliente?',
          'Que dashboard devo usar na reunião mensal com o cliente?',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'Os workspaces abrem dentro do Skills Workflow. Um portal de cliente é uma página própria que partilha como um endereço.',
          'As vistas com margens, custos ou tarifas destinam-se à agência. Confira o que uma vista mostra antes de a partilhar.',
          'Quando nenhum workspace ou portal cobre o que o cliente precisa, peça ao assistente para criar um portal.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Você">
    <p>A Northwind Coffee quer ver como estão a correr os projetos deles e quanto do contrato já usaram. O que devo partilhar com eles?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>Para o <strong>burn do contrato</strong>, use o <strong>Burn Workspace</strong> no cliente. Mostra as horas contratadas, planeadas e registadas por projeto, e o burn mês a mês.</p>
    <p>Para o <strong>estado do projeto e os pedidos pendentes</strong>, existe um portal de cliente para a Northwind Coffee, <strong>christmas-2026</strong>, com os jobs por etapa, os jobs em risco e os jobs à espera de aprovação do cliente.</p>
    <Walkthrough.WorkspaceCard
      title="Burn Workspace"
      subtitle="Workspace · Cliente"
      description="Horas contratadas, planeadas e registadas por projeto, com o burn mensal de tempo e de receita."
    />
    <Walkthrough.WorkspaceCard
      title="christmas-2026"
      subtitle="Portal de cliente · northwind-coffee"
      description="Estado, burn do contrato em horas, jobs em risco e jobs à espera do cliente para o projeto Christmas 2026."
      actionLabel="Abrir portal"
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Também lhes posso mostrar o Profitability Workspace?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>Não, mantenha-o interno. O <strong>Profitability Workspace</strong> mostra o lucro planeado e a margem por projeto e por cargo, calculados a partir das suas receitas e dos seus custos.</p>
    <p>O Burn Workspace também mostra a receita face ao custo. Na reunião com o cliente, fique pelos gráficos de burn de tempo, ou partilhe o portal, que mostra só horas.</p>
  </Walkthrough.Message>
</Walkthrough>

## Artigos relacionados

- [Workspaces de Clientes](/docs/product/dashboards-and-reporting/client-dashboard)
- [Dar a um Cliente um Portal Online com o Estado do Projeto](/docs/ai/use-cases/client-dashboards-and-forms/providing-clients-with-an-online-project-status-portal)
- [Portais de Cliente](/docs/ai/ai-portals)
- [AI Assistant](/docs/ai/ai-assistant)
