---
id: finding-pending-tasks-and-actions
title: Ver as Atividades em que Você Está Trabalhando
description: "Veja como um criativo pergunta ao Assistente de IA em quais Atividades está nesta semana, a quais projetos essas Atividades pertencem e o que está aguardando por ele."
sidebar_label: Ver as Atividades em que Você Está Trabalhando
sidebar_position: 4
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

## Visão geral

Pergunte ao Assistente de IA, com suas próprias palavras, em quais Atividades você está trabalhando e o que está aguardando por você. Ele encontra as Atividades em que você faz parte da equipe, resume-as com os projetos a que pertencem e lista cada Atividade com a etapa e a data de entrega, ou há quantos dias está atrasada. Selecione uma Atividade na lista para ver o projeto dela e abri-la.

A agência, os clientes, os projetos, os números das Atividades e as etapas neste exemplo são ilustrativos. As Atividades que você vê dependem das equipes de que faz parte.

<Walkthrough
  subtitle="Um exemplo de conversa entre um criativo e o Assistente de IA."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="Suas Atividades em um relance">
        O assistente encontra as Atividades em que você faz parte da equipe, ou que aguardam uma ação sua, e lista essas Atividades com a etapa e a data de entrega.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Peça suas Atividades e o período que você quer verificar.',
          'Leia o resumo para ver quantas Atividades você tem e a quais projetos elas pertencem.',
          'Consulte Como interpretei sua pergunta para ver o que foi incluído e o que foi presumido.',
          'Selecione uma Atividade para ver o cliente, o projeto, o tipo de atividade e o departamento, e depois pré-visualize ou abra a Atividade.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'Em quais Atividades estou nesta semana?',
          'Quais das minhas Atividades estão atrasadas?',
          'Quais das minhas Atividades vencem antes de sexta-feira, e em quais projetos elas estão?',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'Se você pedir tarefas, o assistente pode interpretá-las como Atividades. Ele informa isso em Como interpretei sua pergunta.',
          'Uma Atividade com a data de entrega vencida mostra há quantos dias está atrasada, a menos que esteja em uma etapa finalizada.',
          'A lista mostra as cinco primeiras Atividades. Selecione Ver os [total] para ver as demais.',
          'Consultar suas Atividades não as altera, por isso não é necessária aprovação.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Você">
    <p>Em quais atividades estou trabalhando nesta semana, e de quais projetos elas fazem parte?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>Você está trabalhando em <strong>3 atividades nesta semana</strong>, em dois projetos: <strong>General Motors – 2026 Global EV Campaign</strong> e <strong>Northwind Coffee – Autumn 2026 In-Store</strong>. Uma é nova e está agendada para hoje; as outras duas estão em andamento e vão até sexta-feira.</p>
    <p><strong>Como interpretei sua pergunta</strong></p>
    <ul>
      <li>Incluídas: atividades em que você faz parte da equipe e cujas datas agendadas coincidem com 5 a 11 de outubro de 2026.</li>
      <li>Presumido: “estar trabalhando” significa atividades em que você é membro da equipe, usando as datas de início e término agendadas.</li>
      <li>Mostrando até 50 atividades, ordenadas pela data de início.</li>
    </ul>
    <Walkthrough.JobList
      title="Atividades"
      previewLabel="Pré-visualizar"
      openLabel="Abrir"
      footer="Atividades · 3 linhas"
      rows={[
        { title: 'GM 2026 EV Campaign – Social Launch Assets', number: 'GMC0042CR001', stage: 'New', due: 'Hoje', tone: 'soon' },
        { title: 'GM 2026 EV Campaign – Global Website', number: 'GMC0042DIGI001', stage: 'In Progress', due: '9 out' },
        { title: 'Northwind Coffee – Autumn Menu Posters', number: 'NWC0017CR001', stage: 'In Progress', due: '9 out' },
      ]}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Quais tarefas estão aguardando alguma ação da minha parte?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>Você tem <strong>4 atividades aguardando uma ação sua</strong>. Entre elas estão <strong>duas atividades vencidas</strong>, uma que vence hoje e outra que vence na sexta-feira. A maioria está em andamento; uma é nova.</p>
    <p><strong>Como interpretei sua pergunta</strong></p>
    <ul>
      <li>Incluídas: atividades marcadas especificamente como pendentes para você.</li>
      <li>Presumido: “tarefas” significa atividades, e “aguardando ação” significa o status de pendente para você da atividade.</li>
      <li>Mostrando até 50 atividades, ordenadas pela data de término agendada.</li>
    </ul>
    <Walkthrough.JobList
      title="Atividades"
      previewLabel="Pré-visualizar"
      openLabel="Abrir"
      footer="Atividades · 4 linhas"
      rows={[
        {
          title: 'Lumen Bank Brand Refresh – Key Visual',
          number: 'LUM0031CR001',
          stage: 'In Progress',
          due: 'há 12 dias',
          tone: 'late',
          facts: [
            ['Cliente', 'Lumen Bank'],
            ['Projeto', 'Lumen Bank – 2026 Brand Refresh'],
            ['Tipo de atividade', 'Art Direction'],
            ['Departamento', 'Creative'],
          ],
        },
        { title: 'Lumen Bank Brand Refresh – Social Templates', number: 'LUM0031CR002', stage: 'In Progress', due: 'há 2 dias', tone: 'late' },
        { title: 'GM 2026 EV Campaign – Social Launch Assets', number: 'GMC0042CR001', stage: 'New', due: 'Hoje', tone: 'soon' },
        { title: 'GM 2026 EV Campaign – Global Website', number: 'GMC0042DIGI001', stage: 'In Progress', due: '9 out' },
      ]}
    />
  </Walkthrough.Message>
</Walkthrough>

## Artigos relacionados

- [Transformar um Brief de Campanha em uma Atividade](/docs/ai/use-cases/projects-and-jobs/creating-a-job-using-a-briefing-template)
- [Verificar os Projetos Atrasados que Precisam da Sua Atenção](/docs/ai/use-cases/projects-and-jobs/identifying-project-delays)
- [Assistente de IA](/docs/ai/ai-assistant)
