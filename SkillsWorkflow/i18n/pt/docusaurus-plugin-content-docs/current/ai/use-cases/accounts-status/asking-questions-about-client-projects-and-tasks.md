---
id: asking-questions-about-client-projects-and-tasks
title: Perguntar pelos Projetos e Tarefas de um Cliente
description: "Veja como um account manager pergunta ao AI Assistant o que está em aberto para um cliente: os projetos, os jobs atrasados e quem os tem, e o que tem conclusão a seguir."
sidebar_label: Perguntar pelos Projetos e Tarefas de um Cliente
sidebar_position: 3
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

## Visão geral

Pergunte ao AI Assistant, por palavras suas, o que está em aberto para um cliente ou para vários. O assistente lista os projetos ativos do cliente com os jobs em aberto e atrasados, e pode fazer perguntas de seguimento para ver que jobs estão atrasados e quem é o responsável por cada um, e o que tem conclusão nos próximos dias. Use-o para preparar uma chamada com o cliente ou para decidir por onde começar o seguimento.

:::note Preview
Este caso de uso está em preview e ainda não foi testado de ponta a ponta. A conversa mostra como se espera que o AI Assistant o trate, e o que hoje responde ou faz pode ser diferente deste exemplo.
:::

A agência, o cliente, os projetos, os jobs e as pessoas neste exemplo são ilustrativos. Os jobs que vê dependem dos seus acessos e dos dados que a sua agência disponibiliza ao assistente.

<Walkthrough
  subtitle="Exemplo de conversa entre um account manager e o AI Assistant."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="O trabalho de um cliente numa só resposta">
        O assistente junta os projetos, os jobs, as datas de conclusão e os responsáveis do cliente, para que saiba o que está em aberto e com quem falar.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Pergunte o que está em aberto para o cliente.',
          'Leia os projetos com os jobs em aberto e atrasados.',
          'Pergunte que jobs estão atrasados e quem os tem.',
          'Pergunte o que tem conclusão a seguir.',
          'Abra um job da lista para agir sobre ele.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'O que temos em aberto para o Contoso Bank?',
          'Quem é o responsável pelos jobs atrasados do Contoso?',
          'O que tem conclusão na próxima semana para os meus clientes?',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'O responsável é a pessoa definida na equipa do job.',
          'Um job está atrasado quando a data de conclusão já passou e não está numa etapa de fecho.',
          'Pergunte por vários clientes de uma vez indicando os nomes, ou peça todos os clientes pelos quais é responsável.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Você">
    <p>Tenho uma chamada com o Contoso Bank amanhã. O que temos em aberto para eles?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>O Contoso Bank tem quatro projetos ativos com 17 jobs em aberto, 3 deles atrasados:</strong></p>
    <Walkthrough.DataTable
      columns={['Projeto', 'Jobs em aberto', 'Atrasados', 'Próxima conclusão']}
      rows={[
        ['Spring Savings Campaign', '7', '2', '4 de novembro'],
        ['Mobile App Onboarding', '5', '1', '6 de novembro'],
        ['Annual Report 2026', '3', '0', '20 de novembro'],
        ['Branch Signage Refresh', '2', '0', '2 de dezembro'],
      ]}
    />
    <p><strong>Como interpretei a tua pergunta</strong></p>
    <ul>
      <li>Incluído: projetos do Contoso Bank que não estão numa etapa de fecho, e os respetivos jobs que não foram entregues.</li>
      <li>Assumido: “em aberto” significa que não está numa etapa de fecho.</li>
    </ul>
    <Walkthrough.Source label="Jobs · 17 linhas" />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Quais estão atrasados e quem os tem?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.JobList
      title="Jobs atrasados do Contoso Bank"
      rows={[
        { title: 'Spring Savings – Key Visual', number: 'CTB0012CR001', stage: 'In Progress', due: '6 dias de atraso', tone: 'late', facts: [['Responsável', 'Mark Evans'], ['Projeto', 'Spring Savings Campaign'], ['Registado', '22h de 16h planeadas']] },
        { title: 'Spring Savings – Radio Script', number: 'CTB0012CW002', stage: 'Client Approval', due: '3 dias de atraso', tone: 'late' },
        { title: 'Onboarding Screens – Copy', number: 'CTB0014CW001', stage: 'In Progress', due: '1 dia de atraso', tone: 'late' },
      ]}
      footer="Jobs · 3 linhas"
    />
    <ul>
      <li>O Mark Evans tem o key visual. O radio script está com o cliente para aprovação desde 27 de outubro.</li>
      <li>A Julia Green tem o copy do onboarding, que conta entregar amanhã, segundo o Feed do job.</li>
    </ul>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>E o que tem conclusão na próxima semana?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>Quatro jobs do Contoso Bank têm conclusão na próxima semana:</strong></p>
    <Walkthrough.DataTable
      columns={['Job', 'Conclusão', 'Responsável', 'Etapa']}
      rows={[
        ['Spring Savings – Social Posts', '9 de novembro', 'Sarah Lee', 'In Progress'],
        ['Spring Savings – Landing Page', '10 de novembro', 'Anna Smith', 'New'],
        ['Onboarding Screens – Design', '12 de novembro', 'David Brown', 'In Progress'],
        ['Annual Report – Layout', '13 de novembro', 'Julia Green', 'In Progress'],
      ]}
      note="A landing page ainda não começou e precisa do key visual, que está atrasado."
    />
  </Walkthrough.Message>
</Walkthrough>

## Artigos relacionados

- [Ver os Jobs Críticos dos Seus Clientes](/docs/ai/use-cases/accounts-status/monitoring-critical-activities-across-accounts)
- [Ver os Jobs em que Está a Trabalhar](/docs/ai/use-cases/projects-and-jobs/finding-pending-tasks-and-actions)
- [Perguntar pelo Estado de um Projeto](/docs/ai/use-cases/client-dashboards-and-forms/asking-questions-about-project-status)
- [AI Assistant](/docs/ai/ai-assistant)
