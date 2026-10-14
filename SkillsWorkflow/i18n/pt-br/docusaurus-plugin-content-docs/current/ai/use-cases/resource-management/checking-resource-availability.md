---
id: checking-resource-availability
title: Encontrar Pessoas Disponíveis e Atribuir uma a uma Atividade
description: "Veja como um gerente de projetos pergunta ao Assistente de IA quem está livre para um prazo, verifica em que uma pessoa está alocada, restringe a busca por departamento ou grupo de cargo e atribui a pessoa disponível à equipe de uma Atividade."
sidebar_label: Encontrar Pessoas Disponíveis para uma Atividade
sidebar_position: 2
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

## Visão geral

Pergunte ao Assistente de IA, com suas próprias palavras, quem está livre para trabalhar em um prazo. Ele verifica a capacidade, as alocações e as ausências das pessoas que você pode planejar e lista quem está disponível no período, com o respectivo tempo livre. Você pode perguntar em que uma pessoa está alocada, restringir a busca a um grupo de cargo e depois pedir ao assistente que adicione a pessoa escolhida à equipe de uma Atividade. Você aprova a alteração antes que ela seja feita.

A agência, os clientes, os projetos, as Atividades, as pessoas e as horas deste exemplo são ilustrativos. As pessoas e os projetos que você vê dependem do seu acesso e de como a sua agência planeja seus recursos.

<Walkthrough
  subtitle="Exemplo de conversa entre um gerente de projetos e o Assistente de IA."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="Da disponibilidade à atribuição">
        O assistente compara a capacidade com o trabalho alocado e as ausências, mostra quem está livre no período de que você precisa e adiciona a pessoa escolhida à equipe da Atividade com a sua aprovação.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Descreva o trabalho, o prazo e o tipo de pessoas de que você precisa.',
          'Leia o tempo livre e as alocações atuais de cada pessoa.',
          'Confira Como interpretei sua pergunta para ver o período, as pessoas incluídas e o que foi assumido.',
          'Pergunte em que uma pessoa está alocada antes de decidir.',
          'Indique a Atividade e a função, revise a alteração na equipe e selecione Aprovar.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'Quem do departamento Creative tem 40 horas livres na semana que vem?',
          'Em que o Daniel está alocado entre 12 e 16 de outubro?',
          'Adicione o Lucas à Atividade Campaign Website como Executor.',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'Ausências que ainda aguardam aprovação não são descontadas do tempo livre. O assistente as sinaliza separadamente.',
          'Perguntar por um departamento e perguntar por um grupo de cargo pode retornar pessoas diferentes.',
          'Estar na equipe de um projeto não é o mesmo que estar alocado nele. Pergunte sobre as alocações para ver para onde vão as horas de uma pessoa.',
          'O assistente pede a sua aprovação antes de alterar a equipe de uma Atividade. Selecione Negar para deixar a equipe como está.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Você">
    <p>Estou com a campanha de Natal da Northwind Coffee e preciso desenvolver a campanha criativa até o fim da semana que vem. Quais criativos estão disponíveis para trabalhar em tempo integral?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>Cinco membros da equipe Creative estão totalmente disponíveis em uma semana de 40 horas, de segunda-feira, 12, a sexta-feira, 16 de outubro:</strong></p>
    <Walkthrough.DataTable
      columns={['Pessoa', 'Departamento', 'Função', 'Tempo livre', 'Alocações atuais']}
      rows={[
        ['Sofia Marques', 'Creative', 'Associate Creative Director', '40h', '0h'],
        ['Daniel Reed', 'Creative', 'Brand Manager', '40h', '0h'],
        ['Priya Shah', 'Creative', 'Associate Creative Director', '40h', '0h'],
        ['Tom Walsh', 'Creative', 'Creative Director', '40h', '0h'],
        ['Inês Costa', 'Creative', 'Associate Creative Director', '40h', '0h'],
      ]}
      note="Laura Bennett também tem 40h livres, mas tem 32h de ausência aguardando aprovação de terça a sexta-feira. Se ela for aprovada, Laura terá só 8h livres. Maya Collins tem 30h livres, com 2h alocadas por dia."
    />
    <p><strong>Como interpretei sua pergunta</strong></p>
    <ul>
      <li>Incluído: pessoas ativas e planejáveis do departamento Creative, de segunda-feira, 12, a domingo, 18 de outubro de 2026.</li>
      <li>Assumido: “tempo integral” significa uma semana de trabalho de 40 horas totalmente livre, de segunda a sexta-feira, sem alocações existentes.</li>
      <li>Ausências pendentes não são descontadas do tempo disponível, mas os quatro dias de ausência pendente de Laura Bennett podem alterar a disponibilidade dela.</li>
    </ul>
    <Walkthrough.Source label="Ausências · 4 linhas" />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>A Maya tem 30 horas livres. Em que ela está alocada na semana que vem?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>A única alocação da Maya na semana que vem é de <strong>2 horas por dia, de segunda-feira, 12, a sexta-feira, 16 de outubro, 10 horas no total</strong>, em uma Atividade de comunicado à imprensa do Lumen Bank. Ela tem <strong>30 horas livres</strong> nessa semana.</p>
    <p><strong>Como interpretei sua pergunta</strong></p>
    <ul>
      <li>Incluído: a carga de trabalho agendada da Maya de segunda-feira, 12, a domingo, 18 de outubro de 2026.</li>
      <li>Assumido: “alocada” significa trabalho agendado, e não apenas fazer parte da equipe de um projeto.</li>
    </ul>
    <Walkthrough.Source label="Workloads · 5 linhas" />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Me dê a capacidade dos criativos que estão totalmente disponíveis na semana que vem. Só preciso dos que têm o grupo de cargo Creative.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>Lucas Ferreira</strong> é a única pessoa do grupo de cargo <strong>Creative</strong> totalmente disponível na semana que vem: <strong>40 horas livres</strong> de segunda-feira, 12, a sexta-feira, 16 de outubro, sem trabalho alocado nem ausências. A outra pessoa desse grupo de cargo, <strong>Emma Clarke</strong>, tem só <strong>16 horas</strong> de capacidade de trabalho na semana que vem (segunda e terça-feira).</p>
    <p><strong>Como interpretei sua pergunta</strong></p>
    <ul>
      <li>Incluído: pessoas planejáveis cujo grupo de cargo é exatamente Creative, de segunda-feira, 12, a domingo, 18 de outubro de 2026.</li>
      <li>Assumido: “totalmente disponível” significa 40 horas de trabalho livres de segunda a sexta-feira.</li>
      <li>A capacidade inclui o trabalho alocado e as ausências registradas; nenhum dos dois reduz as 40 horas disponíveis de Lucas Ferreira.</li>
    </ul>
    <Walkthrough.Source label="Capacidade · 14 linhas" />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Certo, preciso começar a Atividade Northwind Christmas 2026 – Campaign Website, então atribua ao Lucas como executor.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.ApprovalCard
      title="Adicionar à equipe deste documento"
      subtitle="NWC0021DIGI001 · Northwind Christmas 2026 – Campaign Website"
      rows={[['Adicionando', 'Lucas Ferreira como Executor']]}
      actions={[{ label: 'Negar' }, { label: 'Aprovar', primary: true }]}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Revisei a alteração na equipe e selecionei Aprovar.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.StatusChip status="Atualizado" label="NWC0021DIGI001 · Northwind Christmas 2026 – Campaign Website" />
    <p>Lucas Ferreira foi atribuído como Executor em Northwind Christmas 2026 – Campaign Website (NWC0021DIGI001).</p>
  </Walkthrough.Message>
</Walkthrough>

## Artigos relacionados

- [Identificar Escassez de Recursos](/docs/ai/use-cases/resource-management/identifying-resource-scarcity)
- [Transformar um Brief de Campanha em uma Atividade](/docs/ai/use-cases/projects-and-jobs/creating-a-job-using-a-briefing-template)
- [Assistente de IA](/docs/ai/ai-assistant)
