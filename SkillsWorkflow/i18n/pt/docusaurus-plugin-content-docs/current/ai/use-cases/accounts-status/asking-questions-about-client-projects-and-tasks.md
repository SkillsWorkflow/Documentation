---
id: asking-questions-about-client-projects-and-tasks
title: Perguntar pelos Projetos e Tarefas de um Cliente
description: "Veja como um account manager pergunta ao AI Assistant o que está em aberto para um cliente: os jobs em aberto e atrasados, quem é responsável e quem os executa, e o que tem conclusão a seguir para os seus clientes."
sidebar_label: Perguntar pelos Projetos e Tarefas de um Cliente
sidebar_position: 3
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

## Visão geral

Pergunte ao AI Assistant, por palavras suas, o que está em aberto para um cliente. O assistente responde com os jobs em aberto do cliente, quantos estão atrasados e o que precisa de atenção: aprovações pendentes, jobs sem executor ou que ainda não estão prontos para começar. Faça perguntas de seguimento para ver que jobs estão atrasados, com os responsáveis e os executores, e o que tem conclusão a seguir em todos os seus clientes. Use-o para preparar uma chamada com o cliente ou para decidir por onde começar.

Cada job na resposta é um link. Selecione um para o abrir e agir sobre ele. Quando um workspace ajuda a acompanhar o trabalho, o assistente sugere-o com um botão **Abrir**.

O cliente, os projetos, os jobs e as pessoas neste exemplo são ilustrativos. Os jobs que vê dependem dos seus acessos e dos dados que a sua agência disponibiliza ao assistente.

<Walkthrough
  subtitle="Exemplo de conversa entre um account manager e o AI Assistant."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="O trabalho de um cliente numa só resposta">
        O assistente junta os jobs em aberto do cliente, as datas de conclusão, os responsáveis e os executores, para saber o que está em aberto e com quem falar.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Pergunte o que está em aberto para o cliente.',
          'Leia os jobs em aberto e atrasados e o que precisa de atenção.',
          'Pergunte que jobs estão atrasados e quem os tem.',
          'Pergunte o que tem conclusão a seguir para os seus clientes.',
          'Abra um job a partir da resposta para agir sobre ele.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'O que temos em aberto para o Corvane Bank?',
          'Quem tem os jobs atrasados do Corvane Bank?',
          'O que tem conclusão na próxima semana para os meus clientes?',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'Os jobs em aberto são os que estão numa etapa nova, em curso ou à espera de aprovação. Os jobs concluídos ficam de fora.',
          'Um job está atrasado quando está marcado como atrasado.',
          'Quem tem um job são os seus responsáveis e os seus executores.',
          'Os meus clientes são os clientes atribuídos a si.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Você">
    <p>Tenho uma chamada com o Corvane Bank amanhã. O que temos em aberto para eles?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>O Corvane Bank tem 17 jobs em aberto, 3 deles atrasados.</strong></p>
    <p>Para a sua chamada, os pontos principais são:</p>
    <ul>
      <li>Há duas aprovações pendentes: uma com o cliente e outra com o Account Management.</li>
      <li>Um job atrasado não tem executor atribuído.</li>
      <li>A maior parte do trabalho em aberto pertence aos projetos Spring Savings Campaign e Mobile App Onboarding.</li>
    </ul>
    <Walkthrough.JobList
      title="Jobs atrasados"
      previewLabel="Pré-visualizar"
      openLabel="Abrir"
      rows={[
        { title: 'Spring Savings – Key Visual', number: 'CVB0012CR001', stage: 'In Progress', due: '6 dias de atraso', tone: 'late' },
        { title: 'Spring Savings – Radio Script', number: 'CVB0012CW002', stage: 'Client Approval', due: '3 dias de atraso', tone: 'late' },
        { title: 'Onboarding Screens – Copy', number: 'CVB0014CW001', stage: 'To Do', due: '1 dia de atraso', tone: 'late' },
      ]}
      footer="Jobs · 17 linhas"
    />
    <p>Pode acompanhar o trabalho em aberto por etapa no workspace abaixo.</p>
    <Walkthrough.WorkspaceCard title="Kanban" subtitle="Workspace · Menu" actionLabel="Abrir" />
    <p><strong>Como interpretei a tua pergunta</strong></p>
    <ul>
      <li>Incluído: os jobs do Corvane Bank visíveis para si numa etapa nova, em curso ou à espera de aprovação.</li>
      <li>Assumido: “em aberto” significa jobs, não orçamentos, faturas ou pedidos.</li>
    </ul>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Quais estão atrasados e quem os tem?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>Três jobs do Corvane Bank estão atrasados.</strong> O Mark Evans é responsável por dois deles.</p>
    <Walkthrough.DataTable
      columns={['Job', 'Conclusão', 'Responsável', 'Executores', 'Etapa']}
      rows={[
        ['Spring Savings – Key Visual', '29 out', 'Mark Evans', 'Sarah Lee', 'In Progress'],
        ['Spring Savings – Radio Script', '1 nov', 'Mark Evans', 'Anna Smith', 'Client Approval'],
        ['Onboarding Screens – Copy', '3 nov', 'Julia Green', 'Nenhum atribuído', 'To Do'],
      ]}
      note="O Onboarding Screens – Copy não tem executor atribuído. Confirme quem o vai fazer antes da chamada."
    />
    <p><strong>Como interpretei a tua pergunta</strong></p>
    <ul>
      <li>Assumido: “quem os tem” significa os responsáveis e os executores atribuídos.</li>
      <li>Assumido: “atrasado” significa que o job está marcado como atrasado.</li>
    </ul>
    <Walkthrough.Source label="Jobs · 3 linhas" />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>E o que tem conclusão na próxima semana para os meus clientes?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>Quatro jobs em aberto têm conclusão entre 9 e 15 de novembro para os seus clientes.</strong> Um está à espera de aprovação do cliente.</p>
    <Walkthrough.JobList
      title="Conclusão na próxima semana"
      previewLabel="Pré-visualizar"
      openLabel="Abrir"
      rows={[
        { title: 'Spring Savings – Social Posts', number: 'CVB0012CR004', stage: 'In Progress', due: '9 nov' },
        { title: 'Spring Savings – Landing Page', number: 'CVB0012DIGI001', stage: 'To Do', due: '10 nov' },
        { title: 'Onboarding Screens – Design', number: 'CVB0014DE001', stage: 'In Progress', due: '12 nov' },
        { title: 'Winter Menu – Poster', number: 'ORV0040CR002', stage: 'Client Approval', due: '13 nov' },
      ]}
      footer="Jobs · 4 linhas"
    />
    <p>Pode acompanhar as próximas datas de conclusão no calendário abaixo.</p>
    <Walkthrough.WorkspaceCard title="Calendário" subtitle="Workspace · Menu" actionLabel="Abrir" />
    <p><strong>Como interpretei a tua pergunta</strong></p>
    <ul>
      <li>Assumido: “os meus clientes” significa os clientes atribuídos a si, não só os jobs em que está na equipa.</li>
      <li>Incluído: jobs com conclusão de segunda, 9, a domingo, 15 de novembro. Os jobs concluídos e os atrasados mais antigos ficam de fora.</li>
    </ul>
  </Walkthrough.Message>
</Walkthrough>

## Artigos relacionados

- [Ver os Jobs Críticos dos Seus Clientes](/docs/ai/use-cases/accounts-status/monitoring-critical-activities-across-accounts)
- [Ver os Jobs em que Está a Trabalhar](/docs/ai/use-cases/projects-and-jobs/finding-pending-tasks-and-actions)
- [Perguntar pelo Estado de um Projeto](/docs/ai/use-cases/client-dashboards-and-forms/asking-questions-about-project-status)
- [AI Assistant](/docs/ai/ai-assistant)
