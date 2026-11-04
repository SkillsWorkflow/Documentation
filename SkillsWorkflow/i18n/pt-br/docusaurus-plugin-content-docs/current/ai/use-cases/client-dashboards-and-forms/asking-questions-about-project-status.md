---
id: asking-questions-about-project-status
title: Perguntar sobre o Status de um Projeto
description: "Veja como um gerente de projetos pergunta ao Assistente de IA em que ponto está um projeto, quais Atividades estão atrasadas, o que pode colocar o cronograma em risco, o que aguarda o cliente e quantas horas estão planejadas e registradas."
sidebar_label: Perguntar sobre o Status de um Projeto
sidebar_position: 2
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

## Visão geral

Pergunte ao Assistente de IA, com suas próprias palavras, como está um projeto. Ele responde com a etapa do projeto, as Atividades por etapa, as Atividades marcadas como atrasadas, as datas do projeto e o seu responsável. Faça perguntas de acompanhamento para ver o que pode colocar o cronograma em risco, quais Atividades aguardam o cliente e quantas horas estão planejadas e registradas, para saber o que levar à sua próxima reunião de status.

Cada projeto e cada Atividade na resposta é um link. Selecione um para abri-lo e agir sobre ele. Quando um workspace ajuda a acompanhar o projeto, o assistente o sugere com um botão **Abrir**.

O cliente, o projeto, as Atividades e as horas deste exemplo são ilustrativos. As Atividades que você vê dependem do seu acesso e dos dados que a sua agência disponibiliza ao assistente.

<Walkthrough
  subtitle="Exemplo de conversa entre um gerente de projetos e o Assistente de IA."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="De uma pergunta a uma atualização de status">
        O assistente reúne as Atividades, as etapas, as datas e as horas do projeto em uma única resposta, pronta para uma ligação com o cliente ou uma reunião de status.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Pergunte como está o projeto.',
          'Leia a etapa do projeto e as Atividades por etapa.',
          'Pergunte o que pode colocar o cronograma em risco.',
          'Pergunte quais Atividades aguardam o cliente.',
          'Pergunte quantas horas estão planejadas e registradas.',
          'Abra uma Atividade a partir da resposta para agir sobre ela.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'Em que ponto estamos no projeto de Natal da Orvella Tea?',
          'O que está atrasado neste projeto?',
          'O que precisamos do cliente nesta semana?',
          'Quantas horas estão planejadas e registradas neste projeto?',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'As etapas dependem do workflow de cada Atividade, por isso o mesmo projeto pode mostrar nomes de etapa diferentes.',
          'Uma Atividade está atrasada quando a data de término planejada já passou e ela não está concluída.',
          'Aguardando o cliente significa que a Atividade está em uma etapa de aprovação ou feedback do cliente, ou que os comentários ou o brief mostram uma solicitação em aberto ao cliente.',
          'As horas planejadas vêm das alocações nas Atividades do projeto e as horas registradas vêm das folhas de horas.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Você">
    <p>Em que ponto estamos no projeto Orvella Tea Christmas 2026?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>O ORV0031 — Orvella Tea – Christmas 2026 Campaign está em In Progress.</strong> Ele vai de 1º de setembro a 15 de dezembro de 2026, e o responsável é você.</p>
    <Walkthrough.DataTable
      columns={['Etapa', 'Atividades']}
      rows={[
        ['Closed', '2'],
        ['Client Approval', '3'],
        ['In Progress', '2'],
        ['To Do', '1'],
      ]}
      note="1 das 8 Atividades está marcada como atrasada."
    />
    <p>A principal preocupação é o estande do evento de lançamento, que já passou da data de término planejada. Você pode acompanhar as etapas do projeto no workspace abaixo.</p>
    <Walkthrough.WorkspaceCard title="Kanban" subtitle="Workspace · Menu" actionLabel="Abrir" />
    <p><strong>Como interpretei sua pergunta</strong></p>
    <ul>
      <li>Incluído: o projeto ORV0031 e todas as suas Atividades visíveis para você.</li>
      <li>Assumido: “em que ponto estamos” significa a etapa do projeto, o progresso das Atividades e os indicadores de atraso, não as horas registradas nem o faturamento.</li>
    </ul>
    <Walkthrough.Source label="Atividades · 8 linhas" />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>O que pode colocar o cronograma em risco?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.JobList
      title="Atividades em risco"
      previewLabel="Pré-visualizar"
      openLabel="Abrir"
      rows={[
        { title: 'Christmas Launch Event – Stand Design', number: 'ORV0031EV002', stage: 'In Progress', due: 'há 4 dias', tone: 'late' },
        { title: 'Christmas Launch Event – Stand Production', number: 'ORV0031EV003', stage: 'To Do', due: '13 nov' },
        { title: 'Campaign Website', number: 'ORV0031DIGI001', stage: 'In Progress', due: '20 nov' },
      ]}
      footer="Atividades · 3 linhas"
    />
    <ul>
      <li>O Stand Design deveria terminar em 31 de outubro e continua em In Progress. É o primeiro item que eu escalaria.</li>
      <li>O Stand Production tem responsáveis, mas não tem executor.</li>
      <li>O Campaign Website termina em 16 dias e continua em In Progress.</li>
    </ul>
    <p>Próximo passo recomendado: confirmar uma nova data para o design do estande e atribuir um executor ao Stand Production.</p>
    <p><strong>Como interpretei sua pergunta</strong></p>
    <ul>
      <li>Incluído: as Atividades do projeto, analisadas por data de término planejada, etapa, prioridade e atribuições.</li>
      <li>Não avaliado: dependências, esforço restante e disponibilidade das pessoas.</li>
    </ul>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>O que está aguardando o cliente?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>Três Atividades aguardam a aprovação do cliente:</strong></p>
    <Walkthrough.DataTable
      columns={['Atividade', 'Etapa', 'Data de término']}
      rows={[
        ['Social Media Calendar – December', 'Client Approval', '7 nov'],
        ['In-store Posters', 'Client Approval', '10 nov'],
        ['Gift Card Design', 'Client Approval', '14 nov'],
      ]}
      note="Os comentários e os briefs mais recentes das outras Atividades não mostram nenhuma solicitação em aberto ao cliente."
    />
    <Walkthrough.Source label="Descriptions · 8 linhas" />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Quantas horas estão planejadas e registradas neste projeto?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.DataTable
      columns={['', 'Horas']}
      rows={[
        ['Planejadas', '590h'],
        ['Registradas', '398h'],
      ]}
      note="O tempo registrado corresponde a 67% das horas planejadas. É uma comparação de tempo e não mede quanto do trabalho está feito."
    />
    <p>Você pode acompanhar o tempo planejado e o tempo real por mês no workspace abaixo.</p>
    <Walkthrough.WorkspaceCard title="FTE" subtitle="Workspace · Menu" actionLabel="Abrir" />
    <p><strong>Como interpretei sua pergunta</strong></p>
    <ul>
      <li>Assumido: “planejadas” significa as horas alocadas nas Atividades do projeto, não o esforço contratado ou orçado.</li>
      <li>Incluído: o tempo registrado por todas as pessoas visíveis no projeto, qualquer que seja o status de aprovação ou se é faturável.</li>
    </ul>
    <Walkthrough.Source label="Time sheets · 1 linha" />
  </Walkthrough.Message>
</Walkthrough>

## Artigos relacionados

- [Verificar os Projetos Atrasados que Precisam da Sua Atenção](/docs/ai/use-cases/projects-and-jobs/identifying-project-delays)
- [Discutir uma Notificação de Atraso de Projeto](/docs/ai/use-cases/client-dashboards-and-forms/discussing-a-project-delay-notification)
- [Workspace Projeto Burn](/docs/product/dashboards-and-reporting/project-burn-dashboard)
- [Assistente de IA](/docs/ai/ai-assistant)
