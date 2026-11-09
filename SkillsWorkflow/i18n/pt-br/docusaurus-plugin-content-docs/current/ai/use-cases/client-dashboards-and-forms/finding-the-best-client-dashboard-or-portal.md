---
id: finding-the-best-client-dashboard-or-portal
title: Encontrar o Melhor Workspace ou Portal para Compartilhar com um Cliente
description: "Veja como um gerente de contas pergunta ao Assistente de IA qual workspace ou portal de cliente usar para compartilhar com um cliente o status dos projetos, o burn do contrato e os pedidos pendentes, e o que cada um mostra."
sidebar_label: Encontrar o Melhor Workspace ou Portal de Cliente
sidebar_position: 3
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

:::preview
Recomendar portais de cliente está em preview. Hoje o assistente sugere os workspaces da sua agência, mas ainda não indica os portais de cliente que já existem.
:::

## Visão geral

Diga ao Assistente de IA o que você quer compartilhar com um cliente: o status dos projetos dele, o burn do contrato, os riscos ou os pedidos que aguardam por ele. O assistente relaciona isso com os workspaces e os portais de cliente que a sua agência tem, explica o que cada um mostra e recomenda a opção mais clara. Ele também diz quais visões são só para uso interno da agência, como a rentabilidade.

A agência e o cliente deste exemplo são ilustrativos. O assistente recomenda entre os workspaces e os portais disponíveis na sua agência, por isso os nomes que você vê podem ser diferentes. Burn Workspace e Profitability Workspace, usados neste exemplo, são workspaces de cliente.

<Walkthrough
  subtitle="Exemplo de conversa entre um gerente de contas e o Assistente de IA."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="Do que o cliente pede a onde mostrar">
        O assistente indica o workspace ou o portal que responde à pergunta do seu cliente e avisa quais devem ficar só para uso interno.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Diga o que o cliente quer acompanhar.',
          'Leia qual workspace ou portal o assistente recomenda e por quê.',
          'Pergunte se uma visão é adequada para compartilhar com o cliente.',
          'Abra o workspace recomendado ou peça um portal quando nenhum servir.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'O que posso mostrar à Orvella Tea sobre o burn do contrato deles?',
          'Já existe um portal para este cliente?',
          'Qual dashboard devo usar na reunião mensal com o cliente?',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'Os workspaces abrem dentro do Skills Workflow. Um portal de cliente é uma página própria que você compartilha como um endereço.',
          'Visões com margens, custos ou tarifas são para a agência. Confira o que uma visão mostra antes de compartilhá-la.',
          'Quando nenhum workspace ou portal cobre o que o cliente precisa, peça ao assistente que crie um portal.',
          'Preview: o assistente ainda não recomenda portais de cliente existentes. Hoje ele sugere workspaces.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Você">
    <p>A Orvella Tea quer ver como estão os projetos deles e quanto do contrato já usaram. O que devo compartilhar com eles?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>Para o <strong>burn do contrato</strong>, use o <strong>Burn Workspace</strong> do cliente. Ele mostra as horas contratadas, planejadas e registradas por projeto, e o burn mês a mês.</p>
    <Walkthrough.WorkspaceCard
      title="Burn Workspace"
      subtitle="Workspace · Cliente"
      description="Horas contratadas, planejadas e registradas por projeto, com o burn mensal de tempo e de receita."
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Também posso mostrar a eles o Profitability Workspace?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>Não, mantenha-o interno. O <strong>Profitability Workspace</strong> mostra o lucro planejado e a margem por projeto e por cargo, calculados a partir das suas receitas e dos seus custos.</p>
    <p>O Burn Workspace também mostra a receita em relação ao custo. Na reunião com o cliente, fique nos gráficos de burn de tempo.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Antes da reunião, quero ver quanto do tempo da equipe está indo para os projetos deles. Onde vejo isso?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>Use o <strong>Project Allocation Workspace</strong> do cliente. Ele mostra, por projeto, a capacidade das pessoas, as horas reais e faturáveis registradas e a porcentagem de alocação. É uma tabela, então você pode adicionar mais campos. Este também é só para uso interno.</p>
    <Walkthrough.WorkspaceCard
      title="Project Allocation Workspace"
      subtitle="Workspace · Cliente"
      description="Por projeto: capacidade das pessoas, horas reais, horas faturáveis e porcentagem de alocação."
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>E existe algum portal que eu possa enviar a eles, para acompanharem os projetos entre as reuniões?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>Sim. Existe um portal de cliente para a Orvella Tea, <strong>christmas-2026</strong>, com as Atividades por etapa, as Atividades em risco e as Atividades aguardando aprovação do cliente. Ele mostra só horas, então você pode compartilhá-lo. Envie o endereço ao cliente.</p>
    <Walkthrough.WorkspaceCard
      title="christmas-2026"
      subtitle="Portal de cliente · orvella-tea"
      badge="Preview"
      description="Status, burn do contrato em horas, Atividades em risco e Atividades aguardando o cliente no projeto Christmas 2026."
      actionLabel="Abrir portal"
    />
  </Walkthrough.Message>
</Walkthrough>

## Artigos relacionados

- [Workspace de Cliente](/docs/product/dashboards-and-reporting/client-dashboard)
- [Oferecer a um Cliente um Portal Online com o Status do Projeto](/docs/ai/use-cases/client-dashboards-and-forms/providing-clients-with-an-online-project-status-portal)
- [Portais de Clientes](/docs/ai/ai-portals)
- [Assistente de IA](/docs/ai/ai-assistant)
