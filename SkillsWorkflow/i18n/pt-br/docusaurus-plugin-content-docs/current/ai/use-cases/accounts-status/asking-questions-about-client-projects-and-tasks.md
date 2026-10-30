---
id: asking-questions-about-client-projects-and-tasks
title: Perguntar sobre os Projetos e as Tarefas de um Cliente
description: "Veja como um gerente de contas pergunta ao Assistente de IA o que está em aberto para um cliente: os projetos, as Atividades atrasadas e quem é responsável por elas, e o que vence a seguir."
sidebar_label: Perguntar sobre os Projetos e as Tarefas de um Cliente
sidebar_position: 3
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

:::preview
Este caso de uso está em preview, a conversa mostra como se espera que o Assistente de IA lide com ele, e o que ele responde ou faz hoje pode ser diferente deste exemplo.
:::

## Visão geral

Pergunte ao Assistente de IA, com suas próprias palavras, o que está em aberto para um cliente ou para vários. Ele lista os projetos ativos do cliente com as Atividades em aberto e atrasadas, e você pode fazer perguntas de acompanhamento para ver quais Atividades estão atrasadas e quem é responsável por cada uma, e o que vence nos próximos dias. Use isso para preparar uma ligação com o cliente ou para decidir onde cobrar primeiro.

A agência, o cliente, os projetos, as Atividades e as pessoas deste exemplo são ilustrativos. As Atividades que você vê dependem do seu acesso e dos dados que a sua agência disponibiliza ao assistente.

<Walkthrough
  subtitle="Exemplo de conversa entre um gerente de contas e o Assistente de IA."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="O trabalho de um cliente em uma única resposta">
        O assistente reúne os projetos, as Atividades, as datas de entrega e os responsáveis do cliente, para que você saiba o que está em aberto e com quem falar.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Pergunte o que está em aberto para o cliente.',
          'Leia os projetos com as Atividades em aberto e atrasadas.',
          'Pergunte quais Atividades estão atrasadas e com quem estão.',
          'Pergunte o que vence a seguir.',
          'Abra uma Atividade da lista para agir sobre ela.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'O que temos em aberto para o Contoso Bank?',
          'Quem é responsável pelas Atividades atrasadas do Contoso?',
          'O que vence para os meus clientes na semana que vem?',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'O responsável é a pessoa definida na equipe da Atividade.',
          'Uma Atividade está atrasada quando a data de entrega já passou e ela não está em uma etapa de encerramento.',
          'Pergunte sobre vários clientes de uma vez dizendo os nomes deles, ou peça todos os clientes pelos quais você é responsável.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Você">
    <p>Tenho uma ligação com o Contoso Bank amanhã. O que temos em aberto para eles?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>O Contoso Bank tem quatro projetos ativos com 17 Atividades em aberto, 3 delas atrasadas:</strong></p>
    <Walkthrough.DataTable
      columns={['Projeto', 'Atividades em aberto', 'Atrasadas', 'Próxima entrega']}
      rows={[
        ['Spring Savings Campaign', '7', '2', '4 de novembro'],
        ['Mobile App Onboarding', '5', '1', '6 de novembro'],
        ['Annual Report 2026', '3', '0', '20 de novembro'],
        ['Branch Signage Refresh', '2', '0', '2 de dezembro'],
      ]}
    />
    <p><strong>Como interpretei sua pergunta</strong></p>
    <ul>
      <li>Incluído: projetos do Contoso Bank que não estão em uma etapa de encerramento, e as Atividades deles que não foram entregues.</li>
      <li>Assumido: “em aberto” significa que não está em uma etapa de encerramento.</li>
    </ul>
    <Walkthrough.Source label="Atividades · 17 linhas" />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Quais estão atrasadas e com quem estão?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.JobList
      title="Atividades atrasadas do Contoso Bank"
      previewLabel="Pré-visualizar"
      openLabel="Abrir"
      rows={[
        { title: 'Spring Savings – Key Visual', number: 'CTB0012CR001', stage: 'In Progress', due: 'há 6 dias', tone: 'late', facts: [['Responsável', 'Mark Evans'], ['Projeto', 'Spring Savings Campaign'], ['Registrado', '22h de 16h planejadas']] },
        { title: 'Spring Savings – Radio Script', number: 'CTB0012CW002', stage: 'Client Approval', due: 'há 3 dias', tone: 'late' },
        { title: 'Onboarding Screens – Copy', number: 'CTB0014CW001', stage: 'In Progress', due: 'há 1 dia', tone: 'late' },
      ]}
      footer="Atividades · 3 linhas"
    />
    <ul>
      <li>O Mark Evans está com o key visual. O roteiro de rádio está com o cliente para aprovação desde 27 de outubro.</li>
      <li>A Julia Green está com o texto do onboarding, que ela espera entregar amanhã, segundo o Feed da Atividade.</li>
    </ul>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>E o que vence na semana que vem?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>Quatro Atividades do Contoso Bank vencem na semana que vem:</strong></p>
    <Walkthrough.DataTable
      columns={['Atividade', 'Entrega', 'Responsável', 'Etapa']}
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

- [Verificar as Atividades Críticas dos Seus Clientes](/docs/ai/use-cases/accounts-status/monitoring-critical-activities-across-accounts)
- [Ver as Atividades em que Você Está Trabalhando](/docs/ai/use-cases/projects-and-jobs/finding-pending-tasks-and-actions)
- [Perguntar sobre o Status de um Projeto](/docs/ai/use-cases/client-dashboards-and-forms/asking-questions-about-project-status)
- [Assistente de IA](/docs/ai/ai-assistant)
