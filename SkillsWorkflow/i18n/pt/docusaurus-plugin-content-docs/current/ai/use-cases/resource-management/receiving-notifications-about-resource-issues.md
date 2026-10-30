---
id: receiving-notifications-about-resource-issues
title: Receber Notificações Sobre Problemas de Recursos
description: "Veja como um gestor de recursos recebe uma mensagem do AI Assistant sobre horas registadas acima do planeado, tempo registado sem planeamento e pessoas planeadas acima da sua capacidade, e reduz a lista ao que precisa de ação."
sidebar_label: Receber Notificações Sobre Problemas de Recursos
sidebar_position: 7
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

## Visão geral

O AI Assistant informa-o dos problemas de recursos da sua equipa sem que tenha de perguntar: pessoas que registaram num job mais horas do que as planeadas, tempo registado em jobs onde a pessoa nunca foi planeada e pessoas planeadas acima da sua capacidade nas próximas semanas. Cada problema vem com a pessoa, o job e as horas envolvidas. Depois pode pedir ao assistente para reduzir a lista a um cliente, encontrar quem tem capacidade livre e abrir o workspace onde altera o planeamento.

:::note Preview
Este caso de uso está em preview e ainda não foi testado de ponta a ponta. A conversa mostra como se espera que o AI Assistant o trate, e o que hoje responde ou faz pode ser diferente deste exemplo.
:::

A agência, os clientes, as pessoas, os jobs e as horas neste exemplo são ilustrativos. Os problemas que vê dependem dos seus acessos e dos dados que a sua agência disponibiliza ao assistente.

<Walkthrough
  subtitle="Exemplo de conversa entre um gestor de recursos e o AI Assistant."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="De sinais dispersos a uma só lista">
        O assistente junta numa só mensagem as derrapagens, o tempo não planeado e o planeamento acima da capacidade, para que possa agir antes do fecho do mês.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Leia os problemas que o assistente lhe envia.',
          'Peça um cliente ou uma equipa para reduzir a lista.',
          'Consulte Como interpretei a tua pergunta para ver o que foi contado como derrapagem.',
          'Pergunte quem tem capacidade livre para assumir trabalho.',
          'Abra o Capacity × Workload para alterar o planeamento.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'Que jobs têm mais horas registadas do que as planeadas este mês?',
          'Quem registou tempo em jobs em que não estava planeado?',
          'Quem na minha equipa está planeado acima da capacidade na próxima semana?',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'Uma derrapagem compara as horas que uma pessoa registou num job com as horas planeadas para ela nesse job.',
          'O tempo registado num job onde a pessoa não estava planeada aparece como tempo não planeado.',
          'As ausências e os feriados reduzem a capacidade de uma pessoa nas semanas em que calham.',
          'Só vê as pessoas e os jobs a que tem acesso no Skills Workflow.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>Bom dia. Há cinco problemas de recursos na sua equipa que precisam de atenção:</strong></p>
    <Walkthrough.DataTable
      columns={['Problema', 'Pessoa', 'Job', 'Horas']}
      rows={[
        ['Derrapagem', 'Anna Smith', 'Campaign Website', '46h registadas · 30h planeadas'],
        ['Derrapagem', 'Mark Evans', 'Spring Savings – Key Visual', '22h registadas · 16h planeadas'],
        ['Tempo não planeado', 'Julia Green', 'Holiday Packaging', '12h registadas · não planeado'],
        ['Acima da capacidade', 'David Brown', '3 jobs, semana de 9 de novembro', '48h planeadas · 40h de capacidade'],
        ['Acima da capacidade', 'Sarah Lee', '2 jobs, semana de 16 de novembro', '36h planeadas · 24h de capacidade'],
      ]}
      note="A Sarah Lee tem dois dias de ausência na semana de 16 de novembro."
    />
    <Walkthrough.Source label="Cargas de trabalho · 5 linhas" />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Mostra-me só as derrapagens na Northwind Coffee, e desde quando.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>Há uma derrapagem na Northwind Coffee:</strong></p>
    <Walkthrough.DataTable
      columns={['Pessoa', 'Job', 'Planeado', 'Registado', 'Acima do planeado desde']}
      rows={[
        ['Anna Smith', 'Campaign Website', '30h', '46h', '21 de outubro'],
      ]}
      note="O job tem conclusão prevista para 20 de novembro e a Anna continua planeada nele na próxima semana."
    />
    <p><strong>Como interpretei a tua pergunta</strong></p>
    <ul>
      <li>Incluído: jobs do cliente Northwind Coffee em que uma pessoa registou mais horas do que as planeadas para ela.</li>
      <li>Assumido: “desde quando” significa o primeiro dia em que as horas registadas ultrapassaram as horas planeadas.</li>
    </ul>
    <Walkthrough.Source label="Cargas de trabalho · 1 linha" />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Quem podia ficar com parte do trabalho do David na semana de 9 de novembro?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>Duas pessoas do departamento do David têm capacidade livre nessa semana:</strong></p>
    <Walkthrough.DataTable
      columns={['Pessoa', 'Capacidade', 'Planeado', 'Livre']}
      rows={[
        ['Julia Green', '40h', '24h', '16h'],
        ['Mark Evans', '40h', '32h', '8h'],
      ]}
    />
    <p>Abra o <strong>Capacity × Workload</strong> para mudar o trabalho.</p>
    <Walkthrough.WorkspaceCard
      title="Capacity × Workload"
      subtitle="Workspace · Menu"
      description="Compare o Workload com a capacidade para encontrar sobrealocação e subalocação, e onde o trabalho planeado ultrapassa a capacidade disponível."
    />
  </Walkthrough.Message>
</Walkthrough>

## Artigos relacionados

- [Discutir uma Notificação de Derrapagem de Recursos](/docs/ai/use-cases/resource-management/discussing-a-resource-overrun-notification)
- [Consultar Horas Contratadas e Capacidade da Equipa](/docs/ai/use-cases/resource-management/comparing-contracted-and-available-hours)
- [Encontrar o Melhor Workspace para Gestão de Recursos](/docs/ai/use-cases/resource-management/finding-the-best-resource-management-dashboard)
- [AI Assistant](/docs/ai/ai-assistant)
