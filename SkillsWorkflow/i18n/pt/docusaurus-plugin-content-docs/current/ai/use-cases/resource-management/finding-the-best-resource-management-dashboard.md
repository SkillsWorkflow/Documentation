---
id: finding-the-best-resource-management-dashboard
title: Encontrar o Melhor Workspace para Gestão de Recursos
description: "Veja como um gestor de projetos pergunta ao AI Assistant que workspaces usar para a alocação, a utilização e as necessidades de recursos, e abre o workspace recomendado a partir do chat."
sidebar_label: Encontrar o Melhor Workspace de Gestão de Recursos
sidebar_position: 4
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

## Visão geral

Pergunte ao AI Assistant, por palavras suas, que workspace usar para o que pretende monitorizar: como o trabalho está alocado pelas pessoas, quão ocupada está a equipa ou onde a procura planeada ultrapassa a capacidade disponível. O assistente associa a sua pergunta aos workspaces que a sua agência tem, explica para que serve cada um e recomenda a escolha mais clara. Cada workspace recomendado vem com um botão **Open workspace**, para que possa ir diretamente para ele a partir do chat.

A agência e a equipa neste exemplo são ilustrativas. O Skills Workflow disponibiliza um conjunto de workspaces standard, e algumas agências têm também workspaces personalizados criados a pedido. O assistente recomenda a partir dos workspaces disponíveis na sua agência, por isso os nomes que vê podem ser diferentes dos deste exemplo. O Resources Scheduler, o My Scheduler e o Capacity × Workload, usados neste exemplo, são workspaces standard.

<Walkthrough
  subtitle="Exemplo de conversa entre um gestor de projetos e o AI Assistant."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="Da pergunta ao workspace">
        O assistente diz-lhe qual dos workspaces da sua agência responde à sua pergunta de gestão de recursos, explica porquê e leva-o até ele.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Diga o que pretende monitorizar: alocação, utilização ou necessidades de recursos.',
          'Leia que workspace o assistente recomenda para cada caso e porquê.',
          'Faça uma pergunta de seguimento para afinar a escolha, por exemplo para o seu próprio trabalho ou para uma equipa.',
          'Selecione Open workspace no cartão para ir para o workspace recomendado.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'Que workspace mostra onde o trabalho planeado ultrapassa a capacidade?',
          'Onde posso ver em que está alocada a minha equipa no próximo mês?',
          'Qual é o melhor dashboard para monitorizar a utilização de recursos por departamento?',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'Além dos workspaces standard, a sua agência pode ter workspaces personalizados. Descreva o que quer ver e o assistente faz a correspondência com os workspaces disponíveis na sua.',
          'O mesmo workspace pode responder a mais do que uma pergunta. Aqui, um único workspace cobre a utilização e a procura planeada face à capacidade.',
          'Abrir um workspace a partir do chat está em preview. Até estar disponível, abra o workspace a partir do respetivo menu.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Você">
    <p>Preciso de acompanhar a alocação de recursos da minha equipa. Que dashboard devo usar?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>Para a <strong>alocação</strong>, use o <strong>Resources Scheduler</strong>. É a correspondência mais próxima para atribuir e rever trabalho entre recursos.</p>
    <p>Para as suas próprias atribuições, use o <strong>My Scheduler</strong>.</p>
    <Walkthrough.WorkspaceCard
      title="Resources Scheduler"
      subtitle="Workspace · Menu"
      description="Atribua e reveja trabalho entre recursos numa linha temporal e veja em que está alocado cada um."
      badge="Preview"
    />
    <Walkthrough.WorkspaceCard
      title="My Scheduler"
      subtitle="Workspace · Menu"
      description="Reveja numa linha temporal o trabalho que lhe está atribuído."
      badge="Preview"
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>E para ver a utilização, e se o trabalho planeado ultrapassa a capacidade que temos?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <ul>
      <li><strong>Utilização:</strong> use o <strong>Capacity × Workload</strong>. É a melhor vista disponível para avaliar o Workload face à capacidade e identificar sobrealocação ou subalocação.</li>
      <li><strong>Necessidades de recursos, procura planeada face à capacidade disponível:</strong> use também o <strong>Capacity × Workload</strong>. Mostra onde o trabalho planeado ultrapassa a capacidade de recursos disponível.</li>
    </ul>
    <p>As vistas de <strong>Planning</strong> são provavelmente úteis para o planeamento futuro, mas o <strong>Capacity × Workload</strong> é a escolha mais clara para analisar a capacidade face à procura.</p>
    <Walkthrough.WorkspaceCard
      title="Capacity × Workload"
      subtitle="Workspace · Menu"
      description="Compare o Workload com a capacidade para encontrar sobrealocação e subalocação, e onde o trabalho planeado ultrapassa a capacidade disponível."
      badge="Preview"
    />
  </Walkthrough.Message>
</Walkthrough>

## Artigos relacionados

- [Resource Scheduler](/docs/product/planning-and-scheduling/resourcing/resource-scheduler)
- [Usar workspaces](/docs/product/dashboards-and-reporting/using-workspaces)
- [Encontrar Criativos Disponíveis e Atribuir um a um Job](/docs/ai/use-cases/resource-management/checking-resource-availability)
- [AI Assistant](/docs/ai/ai-assistant)
