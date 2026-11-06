---
id: reassigning-work-from-an-overloaded-person
title: Reatribuir Trabalho de uma Pessoa Sobrecarregada
description: "Veja como o AI Assistant avisa um gestor de projetos de que a pessoa que está a atribuir a três Jobs já está sobrecarregada, sugere pessoas disponíveis com o Typology Group certo e divide o trabalho entre elas com a aprovação do gestor."
sidebar_label: Reatribuir Trabalho de uma Pessoa Sobrecarregada
sidebar_position: 3
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

:::preview
Este caso de uso está em preview, a conversa mostra como se espera que o AI Assistant o trate, e o que hoje responde ou faz pode ser diferente deste exemplo.
:::

## Visão geral

Quando pede ao AI Assistant para atribuir trabalho a alguém, o assistente verifica se essa pessoa tem tempo para ele no período. Se a pessoa já estiver sobrecarregada, diz-lhe em quanto, sugere pessoas do mesmo Typology Group que estão livres e propõe como dividir o trabalho entre elas. A decisão é sua: manter a escolha inicial, aceitar a sugestão ou alterá-la. O assistente só altera as equipas dos Jobs depois de aprovar.

A agência, o cliente, o projeto, os Jobs, as pessoas e as horas neste exemplo são ilustrativos. As pessoas que vê dependem dos seus acessos e da forma como a sua agência planeia os recursos.

<Walkthrough
  subtitle="Exemplo de conversa entre um gestor de projetos e o AI Assistant."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="Um aviso antes de sobrecarregar alguém">
        O assistente compara as horas do trabalho com o tempo livre da pessoa e, quando não cabe, encontra quem mais o pode fazer.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Peça ao assistente para atribuir o trabalho à pessoa.',
          'Leia quantas horas a pessoa fica acima da capacidade no período.',
          'Veja as alternativas e como o assistente divide o trabalho.',
          'Mantenha a sua escolha, aceite a sugestão ou altere-a.',
          'Reveja as alterações às equipas e selecione Aprovar.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'Atribui o Artur a estes três Jobs como Executor.',
          'Quem mais em Design pode fazer o key visual?',
          'Sim, atribui o trabalho ao Lucas e à Emma.',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'O aviso compara as horas do trabalho com o tempo livre da pessoa no mesmo período, depois das alocações e ausências.',
          'As alternativas são pessoas do mesmo Typology Group com tempo livre suficiente. Peça outro grupo ou departamento se precisar.',
          'O aviso não o impede de avançar. Peça ao assistente para atribuir a pessoa na mesma, se for essa a sua decisão.',
          'O assistente pede a sua aprovação antes de alterar a equipa de um Job. Selecione Recusar para deixar as equipas como estão.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Você">
    <p>Atribui o Artur Lima como Executor aos Jobs Key Visual, Social Posts e Banner Set da Solenna Energy Winter Campaign. São para entregar na próxima sexta-feira.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>O Artur já está sobrecarregado na próxima semana.</strong> Com estes três Jobs ficaria 36 horas acima da capacidade:</p>
    <Walkthrough.DataTable
      columns={['Artur Lima · Design', 'Horas']}
      rows={[
        ['Capacidade, segunda 9 a sexta 13 de novembro', '40h'],
        ['Já alocado', '46h'],
        ['Key Visual, Social Posts e Banner Set', '30h'],
        ['Total', '76h · 36h acima'],
      ]}
    />
    <p><strong>Encontrei estas pessoas do Typology Group Design como alternativa:</strong></p>
    <Walkthrough.DataTable
      columns={['Pessoa', 'Typology Group', 'Tempo livre na próxima semana', 'Trabalho sugerido']}
      rows={[
        ['Lucas Ferreira', 'Design', '40h', 'Key Visual (16h) e Banner Set (6h)'],
        ['Emma Clarke', 'Design', '24h', 'Social Posts (8h)'],
        ['Sofia Marques', 'Design', '16h', 'Não é preciso'],
      ]}
      note="Com esta divisão, o Lucas fica com 18h livres e a Emma com 16h livres na próxima semana."
    />
    <p>Queres que lhes atribua o trabalho?</p>
    <p><strong>Como interpretei a tua pergunta</strong></p>
    <ul>
      <li>Incluído: pessoas ativas e planeáveis do Typology Group Design, de segunda 9 a sexta 13 de novembro de 2026.</li>
      <li>Assumido: as horas de cada Job são as horas planeadas nele.</li>
    </ul>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Sim, atribui-lhes o trabalho.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.ApprovalCard
      title="Adicionar às equipas destes documentos"
      subtitle="Solenna Energy Winter Campaign · 3 Jobs"
      rows={[
        ['SOL0007DESI001 · Key Visual', 'Lucas Ferreira como Executor'],
        ['SOL0007DESI002 · Social Posts', 'Emma Clarke como Executor'],
        ['SOL0007DESI003 · Banner Set', 'Lucas Ferreira como Executor'],
      ]}
      actions={[{ label: 'Recusar' }, { label: 'Aprovar', primary: true }]}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Revi as alterações às equipas e selecionei Aprovar.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.StatusChip status="Atualizado" label="3 Jobs · Solenna Energy Winter Campaign" />
    <p>O Lucas Ferreira é o Executor do Key Visual e do Banner Set, e a Emma Clarke do Social Posts. A semana do Artur Lima fica como estava, com 46 horas alocadas.</p>
  </Walkthrough.Message>
</Walkthrough>

## Artigos relacionados

- [Encontrar Pessoas Disponíveis e Atribuir uma a um Job](/docs/ai/use-cases/resource-management/checking-resource-availability)
- [Consultar Horas Contratadas e Capacidade da Equipa](/docs/ai/use-cases/resource-management/comparing-contracted-and-available-hours)
- [Receber Notificações Sobre Problemas de Recursos](/docs/ai/use-cases/resource-management/receiving-notifications-about-resource-issues)
- [AI Assistant](/docs/ai/ai-assistant)
