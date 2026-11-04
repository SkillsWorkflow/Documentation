---
id: receiving-notifications-about-resource-issues
title: Receber Notificações sobre Problemas de Recursos
description: "Veja como um gerente de recursos recebe uma mensagem do Assistente de IA sobre horas registradas acima do planejado, tempo registrado sem planejamento e pessoas planejadas acima da capacidade, e refina a lista até o que precisa de ação."
sidebar_label: Receber Notificações sobre Problemas de Recursos
sidebar_position: 7
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

:::preview
Este caso de uso está em preview, a conversa mostra como se espera que o Assistente de IA lide com ele, e o que ele responde ou faz hoje pode ser diferente deste exemplo.
:::

## Visão geral

O Assistente de IA avisa você sobre problemas de recursos na sua equipe sem que você precise perguntar: pessoas que registraram mais horas em uma Atividade do que o planejado, tempo registrado em Atividades nas quais a pessoa nunca foi planejada e pessoas planejadas acima da capacidade nas próximas semanas. Cada problema vem com a pessoa, a Atividade e as horas envolvidas. Em seguida, você pode pedir que o assistente restrinja a lista a um cliente, encontre quem tem capacidade livre e abra o workspace onde você altera o planejamento.

A agência, os clientes, as pessoas, as Atividades e as horas deste exemplo são ilustrativos. Os problemas que você vê dependem do seu acesso e dos dados que a sua agência disponibiliza ao assistente.

<Walkthrough
  subtitle="Exemplo de conversa entre um gerente de recursos e o Assistente de IA."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="De sinais dispersos a uma única lista">
        O assistente reúne em uma única mensagem as horas acima do planejado, o tempo não planejado e o planejamento acima da capacidade, para que você possa agir antes do fechamento do mês.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Leia os problemas que o assistente envia para você.',
          'Peça um cliente ou uma equipe para restringir a lista.',
          'Confira Como interpretei sua pergunta para ver o que foi contado como horas acima do planejado.',
          'Pergunte quem tem capacidade livre para assumir trabalho.',
          'Abra o Capacity × Workload para alterar o planejamento.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'Quais Atividades têm mais horas registradas do que o planejado neste mês?',
          'Quem registrou tempo em Atividades nas quais não estava planejado?',
          'Quem da minha equipe está planejado acima da capacidade na semana que vem?',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'As horas acima do planejado comparam as horas que uma pessoa registrou em uma Atividade com as horas planejadas para ela nessa Atividade.',
          'O tempo registrado em uma Atividade na qual a pessoa não estava planejada aparece como tempo não planejado.',
          'Férias e feriados reduzem a capacidade de uma pessoa nas semanas em que caem.',
          'Você só vê as pessoas e as Atividades às quais tem acesso no Skills Workflow.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>Bom dia. Cinco problemas de recursos na sua equipe precisam de atenção:</strong></p>
    <Walkthrough.DataTable
      columns={['Problema', 'Pessoa', 'Atividade', 'Horas']}
      rows={[
        ['Acima do planejado', 'Anna Smith', 'Campaign Website', '46h registradas · 30h planejadas'],
        ['Acima do planejado', 'Mark Evans', 'Spring Savings – Key Visual', '22h registradas · 16h planejadas'],
        ['Tempo não planejado', 'Julia Green', 'Holiday Packaging', '12h registradas · não planejado'],
        ['Acima da capacidade', 'David Brown', '3 Atividades, semana de 9 de novembro', '48h planejadas · 40h de capacidade'],
        ['Acima da capacidade', 'Sarah Lee', '2 Atividades, semana de 16 de novembro', '36h planejadas · 24h de capacidade'],
      ]}
      note="Sarah Lee tem dois dias de férias na semana de 16 de novembro."
    />
    <Walkthrough.Source label="Workloads · 5 linhas" />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Mostre só as horas acima do planejado na Northwind Coffee, e desde quando.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>Há um caso de horas acima do planejado na Northwind Coffee:</strong></p>
    <Walkthrough.DataTable
      columns={['Pessoa', 'Atividade', 'Planejado', 'Registrado', 'Acima do planejado desde']}
      rows={[
        ['Anna Smith', 'Campaign Website', '30h', '46h', '21 de outubro'],
      ]}
      note="A Atividade vence em 20 de novembro, e a Anna continua planejada nela na semana que vem."
    />
    <p><strong>Como interpretei sua pergunta</strong></p>
    <ul>
      <li>Incluído: Atividades do cliente Northwind Coffee em que uma pessoa registrou mais horas do que as planejadas para ela.</li>
      <li>Assumido: “desde quando” significa o primeiro dia em que as horas registradas ultrapassaram as horas planejadas.</li>
    </ul>
    <Walkthrough.Source label="Workloads · 1 linha" />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Quem poderia assumir parte do trabalho do David na semana de 9 de novembro?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>Duas pessoas do departamento do David têm capacidade livre nessa semana:</strong></p>
    <Walkthrough.DataTable
      columns={['Pessoa', 'Capacidade', 'Planejado', 'Livre']}
      rows={[
        ['Julia Green', '40h', '24h', '16h'],
        ['Mark Evans', '40h', '32h', '8h'],
      ]}
    />
    <p>Abra o <strong>Capacity × Workload</strong> para mover o trabalho.</p>
    <Walkthrough.WorkspaceCard
      title="Capacity × Workload"
      subtitle="Workspace · Menu"
      description="Compare a carga de trabalho com a capacidade para encontrar excesso e falta de alocação, e onde o trabalho planejado ultrapassa a capacidade disponível."
    />
  </Walkthrough.Message>
</Walkthrough>

## Artigos relacionados

- [Discutir uma Notificação de Horas Acima do Planejado](/docs/ai/use-cases/resource-management/discussing-a-resource-overrun-notification)
- [Verificar Horas Contratadas e Capacidade da Equipe](/docs/ai/use-cases/resource-management/comparing-contracted-and-available-hours)
- [Encontrar o Melhor Workspace para Gestão de Recursos](/docs/ai/use-cases/resource-management/finding-the-best-resource-management-dashboard)
- [Assistente de IA](/docs/ai/ai-assistant)
