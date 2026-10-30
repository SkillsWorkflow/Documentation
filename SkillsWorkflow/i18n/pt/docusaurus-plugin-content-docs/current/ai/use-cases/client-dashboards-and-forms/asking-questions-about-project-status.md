---
id: asking-questions-about-project-status
title: Perguntar pelo Estado de um Projeto
description: "Veja como um gestor de projetos pergunta ao AI Assistant em que ponto está um projeto, que jobs estão entregues, atrasados ou perto da data de conclusão, o que está em risco e o que está à espera do cliente."
sidebar_label: Perguntar pelo Estado de um Projeto
sidebar_position: 2
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

:::preview
Este caso de uso está em preview, a conversa mostra como se espera que o AI Assistant o trate, e o que hoje responde ou faz pode ser diferente deste exemplo.
:::

## Visão geral

Pergunte ao AI Assistant, por palavras suas, como está a correr um projeto. O assistente responde com os jobs do projeto por etapa, o que foi entregue, o que está atrasado e o que se segue, e as horas registadas face às contratadas. Faça perguntas de seguimento para ver o que pode pôr o prazo em risco e que jobs estão à espera do cliente, para saber o que levar à próxima reunião de ponto de situação.

A agência, o cliente, o projeto, os jobs e as horas neste exemplo são ilustrativos. Os jobs que vê dependem dos seus acessos e dos dados que a sua agência disponibiliza ao assistente.

<Walkthrough
  subtitle="Exemplo de conversa entre um gestor de projetos e o AI Assistant."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="De uma pergunta a um ponto de situação">
        O assistente junta os jobs, as datas e as horas do projeto numa só resposta, pronta para uma chamada com o cliente ou uma reunião de ponto de situação.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Pergunte como está a correr o projeto.',
          'Leia os jobs por etapa e as horas registadas face ao contrato.',
          'Pergunte o que pode pôr o prazo em risco.',
          'Pergunte que jobs estão à espera do cliente.',
          'Abra um job da lista para agir sobre ele.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'Em que ponto estamos no projeto de Natal da Northwind?',
          'O que está atrasado neste projeto?',
          'De que precisamos do cliente esta semana?',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'As etapas dependem do workflow de cada job, por isso o mesmo projeto pode mostrar nomes de etapas diferentes.',
          'Um job está atrasado quando a data de conclusão já passou e não está numa etapa de fecho.',
          'À espera do cliente significa que o job está numa etapa que a sua agência usa para aprovação ou feedback do cliente.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Você">
    <p>Em que ponto estamos no projeto Northwind Christmas 2026?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>O Northwind Christmas 2026 tem 14 jobs. 9 estão entregues, 3 estão em curso e 2 ainda não começaram.</strong> O projeto termina a 15 de dezembro.</p>
    <Walkthrough.DataTable
      columns={['', 'Horas']}
      rows={[
        ['Contratadas', '640h'],
        ['Planeadas', '590h'],
        ['Registadas', '398h'],
      ]}
      note="62% das horas contratadas estão registadas, com 70% do tempo do projeto decorrido."
    />
    <p><strong>Como interpretei a tua pergunta</strong></p>
    <ul>
      <li>Incluído: todos os jobs do projeto Northwind Christmas 2026, e as horas planeadas e registadas neles até hoje.</li>
      <li>Assumido: “entregue” significa que o job está numa etapa de fecho.</li>
    </ul>
    <Walkthrough.Source label="Jobs · 14 linhas" />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>O que pode pôr o prazo em risco?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.JobList
      title="Jobs em risco"
      rows={[
        { title: 'Christmas Launch Event – Stand Design', number: 'NWC0031EV002', stage: 'In Progress', due: '4 dias de atraso', tone: 'late' },
        { title: 'Campaign Website', number: 'NWC0031DIGI001', stage: 'In Progress', due: '20 nov' },
        { title: 'Christmas Launch Event – Stand Production', number: 'NWC0031EV003', stage: 'New', due: '13 nov' },
      ]}
      footer="Jobs · 3 linhas"
    />
    <ul>
      <li>O design do stand está atrasado e a Stand Production não pode começar enquanto não for aprovado.</li>
      <li>O Campaign Website tem 16 horas registadas acima do planeado, depois de terem sido acrescentadas duas landing pages.</li>
    </ul>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>O que está à espera do cliente?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>Três jobs estão à espera de aprovação do cliente:</strong></p>
    <Walkthrough.DataTable
      columns={['Job', 'Etapa', 'À espera desde']}
      rows={[
        ['Social Media Calendar – December', 'Client Approval', '23 de outubro'],
        ['In-store Posters', 'Client Approval', '27 de outubro'],
        ['Gift Card Design', 'Client Approval', '29 de outubro'],
      ]}
      note="O calendário social de dezembro está à espera há 7 dias e as primeiras publicações saem a 1 de dezembro."
    />
  </Walkthrough.Message>
</Walkthrough>

## Artigos relacionados

- [Ver os Projetos Atrasados que Precisam da Sua Atenção](/docs/ai/use-cases/projects-and-jobs/identifying-project-delays)
- [Discutir uma Notificação de Atraso de Projeto](/docs/ai/use-cases/client-dashboards-and-forms/discussing-a-project-delay-notification)
- [Workspace Projeto Burn](/docs/product/dashboards-and-reporting/project-burn-dashboard)
- [AI Assistant](/docs/ai/ai-assistant)
