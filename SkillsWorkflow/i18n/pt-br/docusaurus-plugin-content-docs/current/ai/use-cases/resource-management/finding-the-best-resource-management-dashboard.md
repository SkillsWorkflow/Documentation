---
id: finding-the-best-resource-management-dashboard
title: Encontrar o Melhor Workspace para Gestão de Recursos
description: "Veja como um gerente de projetos pergunta ao Assistente de IA quais workspaces usar para alocação, utilização e necessidades de recursos, e abre o workspace recomendado a partir do chat."
sidebar_label: Encontrar o Melhor Workspace de Gestão de Recursos
sidebar_position: 4
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

## Visão geral

Pergunte ao Assistente de IA, com suas próprias palavras, qual workspace usar para o que você quer monitorar: como o trabalho está distribuído entre as pessoas, quão ocupada a equipe está ou onde a demanda planejada ultrapassa a capacidade disponível. O assistente relaciona a sua pergunta com os workspaces que a sua agência tem, explica para que serve cada um e recomenda a opção mais clara. Cada workspace recomendado vem com um botão **Open workspace**, para que você possa ir direto até ele a partir do chat.

A agência e a equipe deste exemplo são ilustrativas. O Skills Workflow oferece um conjunto de workspaces padrão, e algumas agências também têm workspaces personalizados criados sob demanda. O assistente recomenda entre os workspaces disponíveis na sua agência, por isso os nomes que você vê podem ser diferentes dos deste exemplo. Resources Scheduler, My Scheduler e Capacity × Workload, usados neste exemplo, são workspaces padrão.

<Walkthrough
  subtitle="Exemplo de conversa entre um gerente de projetos e o Assistente de IA."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="Da pergunta ao workspace">
        O assistente diz qual dos workspaces da sua agência responde à sua pergunta sobre gestão de recursos, explica por quê e leva você até ele.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Diga o que você quer monitorar: alocação, utilização ou necessidades de recursos.',
          'Leia qual workspace o assistente recomenda para cada caso e por quê.',
          'Faça uma pergunta de acompanhamento para refinar a escolha, por exemplo para o seu próprio trabalho ou para uma equipe.',
          'Selecione Open workspace no cartão para ir ao workspace recomendado.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'Qual workspace mostra onde o trabalho planejado ultrapassa a capacidade?',
          'Onde posso ver em que a minha equipe está alocada no mês que vem?',
          'Qual é o melhor dashboard para monitorar a utilização de recursos por departamento?',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'Além dos workspaces padrão, a sua agência pode ter workspaces personalizados. Descreva o que você quer ver, e o assistente relaciona isso com os workspaces disponíveis na sua agência.',
          'O mesmo workspace pode responder a mais de uma pergunta. Aqui, um único workspace cobre tanto a utilização quanto a demanda planejada em relação à capacidade.',
          'Abrir um workspace a partir do chat está em preview. Enquanto isso não estiver disponível, abra o workspace pelo menu.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Você">
    <p>Preciso acompanhar a alocação de recursos da minha equipe. Qual dashboard devo usar?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>Para a <strong>alocação</strong>, use o <strong>Resources Scheduler</strong>. Ele é o que mais se aproxima do que você precisa para atribuir e revisar o trabalho entre os recursos.</p>
    <p>Para as suas próprias atribuições, use o <strong>My Scheduler</strong>.</p>
    <Walkthrough.WorkspaceCard
      title="Resources Scheduler"
      subtitle="Workspace · Menu"
      description="Atribua e revise o trabalho entre os recursos em uma linha do tempo e veja quem está alocado em quê."
      badge="Preview"
    />
    <Walkthrough.WorkspaceCard
      title="My Scheduler"
      subtitle="Workspace · Menu"
      description="Revise em uma linha do tempo o trabalho atribuído a você."
      badge="Preview"
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>E para verificar a utilização e se o trabalho planejado ultrapassa a capacidade que temos?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <ul>
      <li><strong>Utilização:</strong> use o <strong>Capacity × Workload</strong>. É a melhor visão disponível para avaliar a carga de trabalho em relação à capacidade e identificar excesso ou falta de alocação.</li>
      <li><strong>Necessidades de recursos, demanda planejada versus capacidade disponível:</strong> use também o <strong>Capacity × Workload</strong>. Ele destaca onde o trabalho planejado ultrapassa a capacidade de recursos disponível.</li>
    </ul>
    <p>As visões de <strong>Planning</strong> provavelmente são úteis para o planejamento futuro, mas o <strong>Capacity × Workload</strong> é a opção mais clara para analisar capacidade versus demanda.</p>
    <Walkthrough.WorkspaceCard
      title="Capacity × Workload"
      subtitle="Workspace · Menu"
      description="Compare a carga de trabalho com a capacidade para encontrar excesso e falta de alocação, e onde o trabalho planejado ultrapassa a capacidade disponível."
      badge="Preview"
    />
  </Walkthrough.Message>
</Walkthrough>

## Artigos relacionados

- [Resource Scheduler](/docs/product/planning-and-scheduling/resourcing/resource-scheduler)
- [Usar workspaces](/docs/product/dashboards-and-reporting/using-workspaces)
- [Encontrar Criativos Disponíveis e Atribuir um a uma Atividade](/docs/ai/use-cases/resource-management/checking-resource-availability)
- [Assistente de IA](/docs/ai/ai-assistant)
