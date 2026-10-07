---
id: finding-pending-tasks-and-actions
title: Ver os Jobs em que Está a Trabalhar
description: "Veja como um criativo pergunta ao AI Assistant em que Jobs está esta semana, a que projetos pertencem e o que aguarda uma ação sua."
sidebar_label: Ver os Jobs em que Está a Trabalhar
sidebar_position: 4
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

## Visão geral

Pergunte ao AI Assistant, por palavras suas, em que Jobs está a trabalhar e o que aguarda uma ação sua. O assistente encontra os Jobs em que está na equipa, resume-os com os projetos a que pertencem e lista cada Job com a etapa e o prazo, ou há quantos dias está atrasado. Selecione um Job na lista para ver o projeto e abri-lo.

A agência, os clientes, os projetos, os números dos Jobs e as etapas neste exemplo são ilustrativos. Os Jobs que vê dependem das equipas de que faz parte.

<Walkthrough
  subtitle="Exemplo de conversa entre um criativo e o AI Assistant."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="Os seus Jobs num relance">
        O assistente encontra os Jobs em que está na equipa, ou que aguardam uma ação sua, e lista-os com a etapa e o prazo.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Peça os seus Jobs e o período que quer consultar.',
          'Leia o resumo para ver quantos Jobs tem e a que projetos pertencem.',
          'Consulte Como interpretei a tua pergunta para ver o que foi incluído e assumido.',
          'Selecione um Job para ver o cliente, o projeto, o tipo de job e o departamento, e depois pré-visualize-o ou abra-o.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'Em que Jobs estou esta semana?',
          'Quais dos meus Jobs estão atrasados?',
          'Quais dos meus Jobs têm prazo antes de sexta-feira, e em que projetos estão?',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'Se pedir tarefas, o assistente pode interpretá-las como Jobs. Indica-o em Como interpretei a tua pergunta.',
          'Um Job com o prazo ultrapassado mostra há quantos dias está atrasado, exceto se estiver numa etapa concluída.',
          'A lista mostra os primeiros cinco Jobs. Para ver os restantes, selecione o botão no fim da lista.',
          'Consultar os seus Jobs não os altera, por isso não é necessária aprovação.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Você">
    <p>Em que Jobs estou a trabalhar esta semana, e a que projetos pertencem?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>Estás a trabalhar em <strong>3 jobs esta semana</strong>, em dois projetos: <strong>General Motors – 2026 Global EV Campaign</strong> e <strong>Northwind Coffee – Autumn 2026 In-Store</strong>. Um é novo e está agendado para hoje; os outros dois estão em curso e decorrem até sexta-feira.</p>
    <p><strong>Como interpretei a tua pergunta</strong></p>
    <ul>
      <li>Incluído: jobs em que estás na equipa e cujas datas agendadas se sobrepõem a 5–11 de outubro de 2026.</li>
      <li>Assumido: “estar a trabalhar” significa jobs em que és membro da equipa, usando as datas de início e fim agendadas.</li>
      <li>A mostrar até 50 jobs, ordenados pela data de início.</li>
    </ul>
    <Walkthrough.JobList
      title="Entregas"
      previewLabel="Pré-visualizar"
      openLabel="Abrir"
      footer="Entregas · 3 linhas"
      rows={[
        { title: 'GM 2026 EV Campaign – Social Launch Assets', number: 'GMC0042CR001', stage: 'Novo', due: 'Hoje', tone: 'soon' },
        { title: 'GM 2026 EV Campaign – Global Website', number: 'GMC0042DIGI001', stage: 'Em curso', due: '9 out' },
        { title: 'Northwind Coffee – Autumn Menu Posters', number: 'NWC0017CR001', stage: 'Em curso', due: '9 out' },
      ]}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Que tarefas estão pendentes de alguma ação da minha parte?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>Tens <strong>4 jobs pendentes de uma ação tua</strong>. Incluem <strong>dois jobs com o prazo ultrapassado</strong>, um com prazo hoje e outro na sexta-feira. A maioria está em curso; um é novo.</p>
    <p><strong>Como interpretei a tua pergunta</strong></p>
    <ul>
      <li>Incluído: jobs marcados especificamente como pendentes para ti.</li>
      <li>Assumido: “tarefas” significa jobs, e “pendentes de ação” significa o estado do job pendente para ti.</li>
      <li>A mostrar até 50 jobs, ordenados pela data de fim agendada.</li>
    </ul>
    <Walkthrough.JobList
      title="Entregas"
      previewLabel="Pré-visualizar"
      openLabel="Abrir"
      footer="Entregas · 4 linhas"
      rows={[
        {
          title: 'Lumen Bank Brand Refresh – Key Visual',
          number: 'LUM0031CR001',
          stage: 'Em curso',
          due: 'há 12 dias',
          tone: 'late',
          facts: [
            ['Cliente', 'Lumen Bank'],
            ['Projeto', 'Lumen Bank – 2026 Brand Refresh'],
            ['Tipo de job', 'Direção de Arte'],
            ['Departamento', 'Criativo'],
          ],
        },
        { title: 'Lumen Bank Brand Refresh – Social Templates', number: 'LUM0031CR002', stage: 'Em curso', due: 'há 2 dias', tone: 'late' },
        { title: 'GM 2026 EV Campaign – Social Launch Assets', number: 'GMC0042CR001', stage: 'Novo', due: 'Hoje', tone: 'soon' },
        { title: 'GM 2026 EV Campaign – Global Website', number: 'GMC0042DIGI001', stage: 'Em curso', due: '9 out' },
      ]}
    />
  </Walkthrough.Message>
</Walkthrough>

## Artigos relacionados

- [Transformar um Briefing de Campanha num Job](/docs/ai/use-cases/projects-and-jobs/creating-a-job-using-a-briefing-template)
- [Identificar Atrasos de Projeto](/docs/ai/use-cases/projects-and-jobs/identifying-project-delays)
- [AI Assistant](/docs/ai/ai-assistant)
