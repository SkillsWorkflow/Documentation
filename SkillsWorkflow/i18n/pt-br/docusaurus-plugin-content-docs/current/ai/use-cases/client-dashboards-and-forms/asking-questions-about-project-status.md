---
id: asking-questions-about-project-status
title: Perguntar sobre o Status de um Projeto
description: "Veja como um gerente de projetos pergunta ao Assistente de IA em que ponto está um projeto, quais Atividades estão entregues, atrasadas ou vencem em breve, o que está em risco e o que aguarda o cliente."
sidebar_label: Perguntar sobre o Status de um Projeto
sidebar_position: 2
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

:::preview
Este caso de uso está em preview, a conversa mostra como se espera que o Assistente de IA lide com ele, e o que ele responde ou faz hoje pode ser diferente deste exemplo.
:::

## Visão geral

Pergunte ao Assistente de IA, com suas próprias palavras, como está um projeto. Ele responde com as Atividades do projeto por etapa, o que foi entregue, o que está atrasado e o que vence a seguir, e as horas registradas em relação ao que foi contratado. Faça perguntas de acompanhamento para ver o que pode colocar o cronograma em risco e quais Atividades aguardam o cliente, para saber o que levar à sua próxima reunião de status.

A agência, o cliente, o projeto, as Atividades e as horas deste exemplo são ilustrativos. As Atividades que você vê dependem do seu acesso e dos dados que a sua agência disponibiliza ao assistente.

<Walkthrough
  subtitle="Exemplo de conversa entre um gerente de projetos e o Assistente de IA."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="De uma pergunta a uma atualização de status">
        O assistente reúne as Atividades, as datas e as horas do projeto em uma única resposta, pronta para uma ligação com o cliente ou uma reunião de status.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Pergunte como está o projeto.',
          'Leia as Atividades por etapa e as horas registradas em relação ao contrato.',
          'Pergunte o que pode colocar o cronograma em risco.',
          'Pergunte quais Atividades aguardam o cliente.',
          'Abra uma Atividade da lista para agir sobre ela.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'Em que ponto estamos no projeto de Natal da Northwind?',
          'O que está atrasado neste projeto?',
          'O que precisamos do cliente nesta semana?',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'As etapas dependem do workflow de cada Atividade, por isso o mesmo projeto pode mostrar nomes de etapa diferentes.',
          'Uma Atividade está atrasada quando a data de entrega já passou e ela não está em uma etapa de encerramento.',
          'Aguardando o cliente significa que a Atividade está em uma etapa que a sua agência usa para aprovação ou feedback do cliente.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Você">
    <p>Em que ponto estamos no projeto Northwind Christmas 2026?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>O Northwind Christmas 2026 tem 14 Atividades. 9 estão entregues, 3 estão em andamento e 2 ainda não começaram.</strong> O projeto termina em 15 de dezembro.</p>
    <Walkthrough.DataTable
      columns={['', 'Horas']}
      rows={[
        ['Contratadas', '640h'],
        ['Planejadas', '590h'],
        ['Registradas', '398h'],
      ]}
      note="62% das horas contratadas estão registradas, com 70% do tempo do projeto já decorrido."
    />
    <p><strong>Como interpretei sua pergunta</strong></p>
    <ul>
      <li>Incluído: todas as Atividades do projeto Northwind Christmas 2026 e as horas planejadas e registradas nelas até hoje.</li>
      <li>Assumido: “entregue” significa que a Atividade está em uma etapa de encerramento.</li>
    </ul>
    <Walkthrough.Source label="Atividades · 14 linhas" />
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
        { title: 'Christmas Launch Event – Stand Design', number: 'NWC0031EV002', stage: 'In Progress', due: 'há 4 dias', tone: 'late' },
        { title: 'Campaign Website', number: 'NWC0031DIGI001', stage: 'In Progress', due: '20 nov' },
        { title: 'Christmas Launch Event – Stand Production', number: 'NWC0031EV003', stage: 'New', due: '13 nov' },
      ]}
      footer="Atividades · 3 linhas"
    />
    <ul>
      <li>O design do estande está atrasado, e a Stand Production só pode começar depois que ele for aprovado.</li>
      <li>O Campaign Website tem 16 horas registradas acima do planejado depois que duas landing pages foram adicionadas.</li>
    </ul>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>O que está aguardando o cliente?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>Três Atividades aguardam a aprovação do cliente:</strong></p>
    <Walkthrough.DataTable
      columns={['Atividade', 'Etapa', 'Aguardando desde']}
      rows={[
        ['Social Media Calendar – December', 'Client Approval', '23 de outubro'],
        ['In-store Posters', 'Client Approval', '27 de outubro'],
        ['Gift Card Design', 'Client Approval', '29 de outubro'],
      ]}
      note="O calendário social de dezembro está aguardando há 7 dias, e as primeiras publicações saem em 1º de dezembro."
    />
  </Walkthrough.Message>
</Walkthrough>

## Artigos relacionados

- [Verificar os Projetos Atrasados que Precisam da Sua Atenção](/docs/ai/use-cases/projects-and-jobs/identifying-project-delays)
- [Discutir uma Notificação de Atraso de Projeto](/docs/ai/use-cases/client-dashboards-and-forms/discussing-a-project-delay-notification)
- [Workspace Projeto Burn](/docs/product/dashboards-and-reporting/project-burn-dashboard)
- [Assistente de IA](/docs/ai/ai-assistant)
