---
id: asking-questions-about-project-status
title: Perguntar pelo Estado de um Projeto
description: "Veja como um gestor de projetos pergunta ao AI Assistant em que ponto está um projeto, que jobs estão atrasados, o que pode pôr o prazo em risco, o que está à espera do cliente e quantas horas estão planeadas e registadas."
sidebar_label: Perguntar pelo Estado de um Projeto
sidebar_position: 2
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

## Visão geral

Pergunte ao AI Assistant, por palavras suas, como está a correr um projeto. O assistente responde com a etapa do projeto, os jobs por etapa, os jobs marcados como atrasados, as datas do projeto e o seu responsável. Faça perguntas de seguimento para ver o que pode pôr o prazo em risco, que jobs estão à espera do cliente e quantas horas estão planeadas e registadas, para saber o que levar à próxima reunião de ponto de situação.

Cada projeto e cada job na resposta é um link. Selecione um para o abrir e agir sobre ele. Quando um workspace ajuda a acompanhar o projeto, o assistente sugere-o com um botão **Abrir**.

O cliente, o projeto, os jobs e as horas neste exemplo são ilustrativos. Os jobs que vê dependem dos seus acessos e dos dados que a sua agência disponibiliza ao assistente.

<Walkthrough
  subtitle="Exemplo de conversa entre um gestor de projetos e o AI Assistant."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="De uma pergunta a um ponto de situação">
        O assistente junta os jobs, as etapas, as datas e as horas do projeto numa só resposta, pronta para uma chamada com o cliente ou uma reunião de ponto de situação.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Pergunte como está a correr o projeto.',
          'Leia a etapa do projeto e os jobs por etapa.',
          'Pergunte o que pode pôr o prazo em risco.',
          'Pergunte que jobs estão à espera do cliente.',
          'Pergunte quantas horas estão planeadas e registadas.',
          'Abra um job a partir da resposta para agir sobre ele.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'Em que ponto estamos no projeto de Natal da Orvella Tea?',
          'O que está atrasado neste projeto?',
          'De que precisamos do cliente esta semana?',
          'Quantas horas estão planeadas e registadas neste projeto?',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'As etapas dependem do workflow de cada job, por isso o mesmo projeto pode mostrar nomes de etapas diferentes.',
          'Um job está atrasado quando a data de fim planeada já passou e não está concluído.',
          'À espera do cliente significa que o job está numa etapa de aprovação ou feedback do cliente, ou que os comentários ou o brief mostram um pedido em aberto ao cliente.',
          'As horas planeadas vêm das marcações nos jobs do projeto e as horas registadas vêm das folhas de horas.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Você">
    <p>Em que ponto estamos no projeto Orvella Tea Christmas 2026?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>O ORV0031 — Orvella Tea – Christmas 2026 Campaign está em In Progress.</strong> Decorre de 1 de setembro a 15 de dezembro de 2026, e o responsável é você.</p>
    <Walkthrough.DataTable
      columns={['Etapa', 'Jobs']}
      rows={[
        ['Closed', '2'],
        ['Client Approval', '3'],
        ['In Progress', '2'],
        ['To Do', '1'],
      ]}
      note="1 dos 8 jobs está marcado como atrasado."
    />
    <p>A principal preocupação é o stand do evento de lançamento, que já passou a data de fim planeada. Pode acompanhar as etapas do projeto no workspace abaixo.</p>
    <Walkthrough.WorkspaceCard title="Kanban" subtitle="Workspace · Menu" actionLabel="Abrir" />
    <p><strong>Como interpretei a tua pergunta</strong></p>
    <ul>
      <li>Incluído: o projeto ORV0031 e todos os seus jobs visíveis para si.</li>
      <li>Assumido: “em que ponto estamos” significa a etapa do projeto, o progresso dos jobs e os indicadores de atraso, não as horas registadas nem a faturação.</li>
    </ul>
    <Walkthrough.Source label="Jobs · 8 linhas" />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>O que pode pôr o prazo em risco?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.JobList
      title="Jobs em risco"
      previewLabel="Pré-visualizar"
      openLabel="Abrir"
      rows={[
        { title: 'Christmas Launch Event – Stand Design', number: 'ORV0031EV002', stage: 'In Progress', due: '4 dias de atraso', tone: 'late' },
        { title: 'Christmas Launch Event – Stand Production', number: 'ORV0031EV003', stage: 'To Do', due: '13 nov' },
        { title: 'Campaign Website', number: 'ORV0031DIGI001', stage: 'In Progress', due: '20 nov' },
      ]}
      footer="Jobs · 3 linhas"
    />
    <ul>
      <li>O Stand Design devia ter terminado a 31 de outubro e continua em In Progress. É o primeiro ponto que eu escalaria.</li>
      <li>O Stand Production tem responsáveis, mas não tem executor.</li>
      <li>O Campaign Website termina daqui a 16 dias e continua em In Progress.</li>
    </ul>
    <p>Próximo passo recomendado: confirmar uma nova data para o design do stand e atribuir um executor ao Stand Production.</p>
    <p><strong>Como interpretei a tua pergunta</strong></p>
    <ul>
      <li>Incluído: os jobs do projeto, analisados por data de fim planeada, etapa, prioridade e atribuições.</li>
      <li>Não avaliado: dependências, esforço restante e disponibilidade das pessoas.</li>
    </ul>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>O que está à espera do cliente?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>Três jobs estão à espera de aprovação do cliente:</strong></p>
    <Walkthrough.DataTable
      columns={['Job', 'Etapa', 'Data de fim']}
      rows={[
        ['Social Media Calendar – December', 'Client Approval', '7 nov'],
        ['In-store Posters', 'Client Approval', '10 nov'],
        ['Gift Card Design', 'Client Approval', '14 nov'],
      ]}
      note="Os comentários e os briefs mais recentes dos outros jobs não mostram nenhum pedido em aberto ao cliente."
    />
    <Walkthrough.Source label="Descriptions · 8 linhas" />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Quantas horas estão planeadas e registadas neste projeto?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.DataTable
      columns={['', 'Horas']}
      rows={[
        ['Planeadas', '590h'],
        ['Registadas', '398h'],
      ]}
      note="O tempo registado corresponde a 67% das horas planeadas. É uma comparação de tempo e não mede quanto do trabalho está feito."
    />
    <p>Pode acompanhar o tempo planeado e o tempo real por mês no workspace abaixo.</p>
    <Walkthrough.WorkspaceCard title="FTE" subtitle="Workspace · Menu" actionLabel="Abrir" />
    <p><strong>Como interpretei a tua pergunta</strong></p>
    <ul>
      <li>Assumido: “planeadas” significa as horas marcadas nos jobs do projeto, não o esforço contratado ou orçamentado.</li>
      <li>Incluído: o tempo registado por todas as pessoas visíveis no projeto, qualquer que seja o estado de aprovação ou se é faturável.</li>
    </ul>
    <Walkthrough.Source label="Time sheets · 1 linha" />
  </Walkthrough.Message>
</Walkthrough>

## Artigos relacionados

- [Ver os Projetos Atrasados que Precisam da Sua Atenção](/docs/ai/use-cases/projects-and-jobs/identifying-project-delays)
- [Discutir uma Notificação de Atraso de Projeto](/docs/ai/use-cases/client-dashboards-and-forms/discussing-a-project-delay-notification)
- [Workspace Projeto Burn](/docs/product/dashboards-and-reporting/project-burn-dashboard)
- [AI Assistant](/docs/ai/ai-assistant)
