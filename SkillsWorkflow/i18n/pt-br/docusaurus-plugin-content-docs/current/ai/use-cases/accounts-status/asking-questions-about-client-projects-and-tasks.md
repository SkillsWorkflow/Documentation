---
id: asking-questions-about-client-projects-and-tasks
title: Perguntar sobre os Projetos e as Tarefas de um Cliente
description: "Veja como um gerente de contas pergunta ao Assistente de IA o que está em aberto para um cliente: as Atividades em aberto e atrasadas, quem é responsável e quem as executa, e o que vence a seguir para os seus clientes."
sidebar_label: Perguntar sobre os Projetos e as Tarefas de um Cliente
sidebar_position: 3
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

## Visão geral

Pergunte ao Assistente de IA, com suas próprias palavras, o que está em aberto para um cliente. Ele responde com as Atividades em aberto do cliente, quantas estão atrasadas e o que precisa de atenção: aprovações pendentes, Atividades sem executor ou que ainda não estão prontas para começar. Faça perguntas de acompanhamento para ver quais Atividades estão atrasadas, com os responsáveis e os executores, e o que vence a seguir em todos os seus clientes. Use-o para preparar uma ligação com o cliente ou para decidir por onde começar.

Cada Atividade na resposta é um link. Selecione uma para abri-la e agir sobre ela. Quando um workspace ajuda a acompanhar o trabalho, o assistente o sugere com um botão **Abrir**.

O cliente, os projetos, as Atividades e as pessoas deste exemplo são ilustrativos. As Atividades que você vê dependem do seu acesso e dos dados que a sua agência disponibiliza ao assistente.

<Walkthrough
  subtitle="Exemplo de conversa entre um gerente de contas e o Assistente de IA."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="O trabalho de um cliente em uma única resposta">
        O assistente reúne as Atividades em aberto do cliente, as datas de entrega, os responsáveis e os executores, para você saber o que está em aberto e com quem falar.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Pergunte o que está em aberto para o cliente.',
          'Leia as Atividades em aberto e atrasadas e o que precisa de atenção.',
          'Pergunte quais Atividades estão atrasadas e quem as tem.',
          'Pergunte o que vence a seguir para os seus clientes.',
          'Abra uma Atividade a partir da resposta para agir sobre ela.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'O que temos em aberto para o Corvane Bank?',
          'Quem está com as Atividades atrasadas do Corvane Bank?',
          'O que vence na próxima semana para os meus clientes?',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'As Atividades em aberto são as que estão em uma etapa nova, em andamento ou aguardando aprovação. As Atividades concluídas ficam de fora.',
          'Uma Atividade está atrasada quando está marcada como atrasada.',
          'Quem está com uma Atividade são os seus responsáveis e os seus executores.',
          'Meus clientes são os clientes atribuídos a você.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Você">
    <p>Tenho uma ligação com o Corvane Bank amanhã. O que temos em aberto para eles?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>O Corvane Bank tem 17 Atividades em aberto, 3 delas atrasadas.</strong></p>
    <p>Para a sua ligação, os pontos principais são:</p>
    <ul>
      <li>Há duas aprovações pendentes: uma com o cliente e outra com o Account Management.</li>
      <li>Uma Atividade atrasada não tem executor atribuído.</li>
      <li>A maior parte do trabalho em aberto pertence aos projetos Spring Savings Campaign e Mobile App Onboarding.</li>
    </ul>
    <Walkthrough.JobList
      title="Atividades atrasadas"
      previewLabel="Pré-visualizar"
      openLabel="Abrir"
      rows={[
        { title: 'Spring Savings – Key Visual', number: 'CVB0012CR001', stage: 'In Progress', due: 'há 6 dias', tone: 'late' },
        { title: 'Spring Savings – Radio Script', number: 'CVB0012CW002', stage: 'Client Approval', due: 'há 3 dias', tone: 'late' },
        { title: 'Onboarding Screens – Copy', number: 'CVB0014CW001', stage: 'To Do', due: 'há 1 dia', tone: 'late' },
      ]}
      footer="Atividades · 17 linhas"
    />
    <p>Você pode acompanhar o trabalho em aberto por etapa no workspace abaixo.</p>
    <Walkthrough.WorkspaceCard title="Kanban" subtitle="Workspace · Menu" actionLabel="Abrir" />
    <p><strong>Como interpretei sua pergunta</strong></p>
    <ul>
      <li>Incluído: as Atividades do Corvane Bank visíveis para você em uma etapa nova, em andamento ou aguardando aprovação.</li>
      <li>Assumido: “em aberto” significa Atividades, não orçamentos, faturas ou solicitações.</li>
    </ul>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Quais estão atrasadas e quem está com elas?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>Três Atividades do Corvane Bank estão atrasadas.</strong> Mark Evans é responsável por duas delas.</p>
    <Walkthrough.DataTable
      columns={['Atividade', 'Entrega', 'Responsável', 'Executores', 'Etapa']}
      rows={[
        ['Spring Savings – Key Visual', '29 out', 'Mark Evans', 'Sarah Lee', 'In Progress'],
        ['Spring Savings – Radio Script', '1 nov', 'Mark Evans', 'Anna Smith', 'Client Approval'],
        ['Onboarding Screens – Copy', '3 nov', 'Julia Green', 'Nenhum atribuído', 'To Do'],
      ]}
      note="A Onboarding Screens – Copy não tem executor atribuído. Confirme quem vai fazê-la antes da ligação."
    />
    <p><strong>Como interpretei sua pergunta</strong></p>
    <ul>
      <li>Assumido: “quem está com elas” significa os responsáveis e os executores atribuídos.</li>
      <li>Assumido: “atrasada” significa que a Atividade está marcada como atrasada.</li>
    </ul>
    <Walkthrough.Source label="Atividades · 3 linhas" />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>E o que vence na próxima semana para os meus clientes?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>Quatro Atividades em aberto vencem entre 9 e 15 de novembro para os seus clientes.</strong> Uma está aguardando a aprovação do cliente.</p>
    <Walkthrough.JobList
      title="Vencem na próxima semana"
      previewLabel="Pré-visualizar"
      openLabel="Abrir"
      rows={[
        { title: 'Spring Savings – Social Posts', number: 'CVB0012CR004', stage: 'In Progress', due: '9 nov' },
        { title: 'Spring Savings – Landing Page', number: 'CVB0012DIGI001', stage: 'To Do', due: '10 nov' },
        { title: 'Onboarding Screens – Design', number: 'CVB0014DE001', stage: 'In Progress', due: '12 nov' },
        { title: 'Winter Menu – Poster', number: 'ORV0040CR002', stage: 'Client Approval', due: '13 nov' },
      ]}
      footer="Atividades · 4 linhas"
    />
    <p>Você pode acompanhar as próximas datas de entrega no calendário abaixo.</p>
    <Walkthrough.WorkspaceCard title="Calendário" subtitle="Workspace · Menu" actionLabel="Abrir" />
    <p><strong>Como interpretei sua pergunta</strong></p>
    <ul>
      <li>Assumido: “meus clientes” significa os clientes atribuídos a você, não só as Atividades em que você está na equipe.</li>
      <li>Incluído: Atividades que vencem de segunda, 9, a domingo, 15 de novembro. As Atividades concluídas e as atrasadas mais antigas ficam de fora.</li>
    </ul>
  </Walkthrough.Message>
</Walkthrough>

## Artigos relacionados

- [Verificar as Atividades Críticas dos Seus Clientes](/docs/ai/use-cases/accounts-status/monitoring-critical-activities-across-accounts)
- [Ver as Atividades em que Você Está Trabalhando](/docs/ai/use-cases/projects-and-jobs/finding-pending-tasks-and-actions)
- [Perguntar sobre o Status de um Projeto](/docs/ai/use-cases/client-dashboards-and-forms/asking-questions-about-project-status)
- [Assistente de IA](/docs/ai/ai-assistant)
