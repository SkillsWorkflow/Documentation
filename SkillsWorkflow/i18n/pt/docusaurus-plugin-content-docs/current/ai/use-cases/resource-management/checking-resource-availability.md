---
id: checking-resource-availability
title: Encontrar Criativos Disponíveis e Atribuir um a um Job
description: "Veja como um gestor de projetos pergunta ao AI Assistant que criativos estão livres na próxima semana, consulta em que está alocada uma pessoa, filtra a pesquisa por Typology Group e atribui o criativo disponível a um Job como Executor."
sidebar_label: Encontrar Criativos Disponíveis para um Job
sidebar_position: 2
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

## Visão geral

Pergunte ao AI Assistant, por palavras suas, quem está livre para trabalhar num prazo. O assistente consulta a capacidade, as alocações e as ausências das pessoas que pode planear, e lista quem está disponível no período com o tempo livre de cada uma. Pode perguntar em que está alocada uma pessoa, filtrar a pesquisa por um Typology Group e depois pedir ao assistente que adicione a pessoa que escolher à equipa de um Job. Aprova a alteração antes de ser feita.

A agência, os clientes, os projetos, os Jobs, as pessoas e as horas neste exemplo são ilustrativos. As pessoas e os projetos que vê dependem dos seus acessos e da forma como a sua agência planeia os recursos.

<Walkthrough
  subtitle="Exemplo de conversa entre um gestor de projetos e o AI Assistant."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="Da disponibilidade à atribuição">
        O assistente compara a capacidade com o trabalho alocado e as ausências, mostra quem está livre no período de que precisa e adiciona a pessoa que escolher à equipa do Job com a sua aprovação.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Descreva o trabalho, o prazo e o tipo de pessoas de que precisa.',
          'Leia o tempo livre e as alocações atuais de cada pessoa.',
          'Consulte Como interpretei a tua pergunta para ver o período, as pessoas incluídas e o que foi assumido.',
          'Pergunte em que está alocada uma pessoa antes de decidir.',
          'Indique o Job e o papel, reveja a alteração à equipa e selecione Aprovar.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'Quem no departamento Creative tem 40 horas livres na próxima semana?',
          'Em que está o Daniel alocado entre 12 e 16 de outubro?',
          'Adiciona o Lucas ao job Campaign Website como Executor.',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'As ausências que ainda aguardam aprovação não são descontadas do tempo livre. O assistente assinala-as à parte.',
          'Pedir por um departamento e pedir por um Typology Group pode devolver pessoas diferentes.',
          'Estar na equipa de um projeto não é o mesmo que estar alocado a ele. Pergunte pelas alocações para ver onde estão as horas de uma pessoa.',
          'O assistente pede a sua aprovação antes de alterar a equipa de um Job. Selecione Recusar para deixar a equipa como está.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Você">
    <p>Tenho a campanha de Natal da Northwind Coffee e preciso de desenvolver a campanha criativa até ao fim da próxima semana. Que criativos estão disponíveis para trabalhar a tempo inteiro?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>Cinco membros da equipa Creative estão totalmente disponíveis numa semana de 40 horas, de segunda-feira 12 a sexta-feira 16 de outubro:</strong></p>
    <Walkthrough.DataTable
      columns={['Pessoa', 'Departamento', 'Função', 'Tempo livre', 'Alocações atuais']}
      rows={[
        ['Sofia Marques', 'Creative', 'Associate Creative Director', '40h', '0h'],
        ['Daniel Reed', 'Creative', 'Brand Manager', '40h', '0h'],
        ['Priya Shah', 'Creative', 'Associate Creative Director', '40h', '0h'],
        ['Tom Walsh', 'Creative', 'Creative Director', '40h', '0h'],
        ['Inês Costa', 'Creative', 'Associate Creative Director', '40h', '0h'],
      ]}
      note="A Laura Bennett também tem 40h livres, mas tem 32h de ausência a aguardar aprovação de terça a sexta-feira. Se for aprovada, ficará só com 8h livres. A Maya Collins tem 30h livres, com 2h alocadas por dia."
    />
    <p><strong>Como interpretei a tua pergunta</strong></p>
    <ul>
      <li>Incluído: pessoas ativas e planeáveis do departamento Creative, de segunda-feira 12 a domingo 18 de outubro de 2026.</li>
      <li>Assumido: “a tempo inteiro” significa uma semana de trabalho de 40 horas totalmente livre, de segunda a sexta-feira, sem alocações existentes.</li>
      <li>As ausências pendentes não são descontadas do tempo disponível, mas os quatro dias de ausência pendente da Laura Bennett podem alterar a sua disponibilidade.</li>
    </ul>
    <Walkthrough.Source label="Ausências · 4 linhas" />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>A Maya tem 30 horas livres. Em que está alocada na próxima semana?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>A única alocação da Maya na próxima semana é de <strong>2 horas por dia, de segunda-feira 12 a sexta-feira 16 de outubro, 10 horas no total</strong>, num job de comunicado de imprensa da Lumen Bank. Tem <strong>30 horas livres</strong> nessa semana.</p>
    <p><strong>Como interpretei a tua pergunta</strong></p>
    <ul>
      <li>Incluído: a carga de trabalho agendada da Maya de segunda-feira 12 a domingo 18 de outubro de 2026.</li>
      <li>Assumido: “alocada” significa trabalho agendado, e não apenas constar da equipa de um projeto.</li>
    </ul>
    <Walkthrough.Source label="Cargas de trabalho · 5 linhas" />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Dá-me a capacidade dos criativos que estão totalmente disponíveis na próxima semana. Só preciso dos que têm o Typology Group Creative.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>O <strong>Lucas Ferreira</strong> é a única pessoa do Typology Group <strong>Creative</strong> totalmente disponível na próxima semana: <strong>40 horas livres</strong> de segunda-feira 12 a sexta-feira 16 de outubro, sem trabalho alocado nem ausências. A outra pessoa desse Typology Group, a <strong>Emma Clarke</strong>, tem apenas <strong>16 horas</strong> de capacidade de trabalho na próxima semana (segunda e terça-feira).</p>
    <p><strong>Como interpretei a tua pergunta</strong></p>
    <ul>
      <li>Incluído: pessoas planeáveis cujo Typology Group é exatamente Creative, de segunda-feira 12 a domingo 18 de outubro de 2026.</li>
      <li>Assumido: “totalmente disponível” significa 40 horas de trabalho livres de segunda a sexta-feira.</li>
      <li>A capacidade inclui o trabalho alocado e as ausências registadas; nenhum deles reduz as 40 horas disponíveis do Lucas Ferreira.</li>
    </ul>
    <Walkthrough.Source label="Capacidade · 14 linhas" />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Ok, preciso de começar o job Northwind Christmas 2026 – Campaign Website, por isso atribui-o ao Lucas como executor.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.ApprovalCard
      title="Adicionar à equipa deste documento"
      subtitle="NWC0021DIGI001 · Northwind Christmas 2026 – Campaign Website"
      rows={[['A adicionar', 'Lucas Ferreira como Executor']]}
      actions={[{ label: 'Recusar' }, { label: 'Aprovar', primary: true }]}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Revi a alteração à equipa e selecionei Aprovar.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.StatusChip status="Atualizado" label="NWC0021DIGI001 · Northwind Christmas 2026 – Campaign Website" />
    <p>O Lucas Ferreira foi atribuído como Executor no Northwind Christmas 2026 – Campaign Website (NWC0021DIGI001).</p>
  </Walkthrough.Message>
</Walkthrough>

## Artigos relacionados

- [Identificar Escassez de Recursos](/docs/ai/use-cases/resource-management/identifying-resource-scarcity)
- [Transformar um Briefing de Campanha num Job](/docs/ai/use-cases/projects-and-jobs/creating-a-job-using-a-briefing-template)
- [AI Assistant](/docs/ai/ai-assistant)
