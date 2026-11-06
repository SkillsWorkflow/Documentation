---
id: reassigning-work-from-an-overloaded-person
title: Reatribuir Trabalho de uma Pessoa Sobrecarregada
description: "Veja como o Assistente de IA avisa um gerente de projetos de que a pessoa que ele está atribuindo a três Atividades já está sobrecarregada, sugere pessoas disponíveis com o grupo de cargo certo e divide o trabalho entre elas com a aprovação do gerente."
sidebar_label: Reatribuir Trabalho de uma Pessoa Sobrecarregada
sidebar_position: 3
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

:::preview
Este caso de uso está em preview, a conversa mostra como se espera que o Assistente de IA lide com ele, e o que ele responde ou faz hoje pode ser diferente deste exemplo.
:::

## Visão geral

Quando você pede ao Assistente de IA para atribuir trabalho a alguém, ele verifica se essa pessoa tem tempo para isso no período. Se a pessoa já estiver sobrecarregada, o assistente informa em quanto, sugere pessoas do mesmo grupo de cargo que estão livres e propõe como dividir o trabalho entre elas. A decisão é sua: manter a escolha inicial, aceitar a sugestão ou alterá-la. O assistente só altera as equipes das Atividades depois da sua aprovação.

A agência, o cliente, o projeto, as Atividades, as pessoas e as horas deste exemplo são ilustrativos. As pessoas que você vê dependem dos seus acessos e de como a sua agência planeja os recursos.

<Walkthrough
  subtitle="Exemplo de conversa entre um gerente de projetos e o Assistente de IA."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="Um aviso antes de sobrecarregar alguém">
        O assistente compara as horas do trabalho com o tempo livre da pessoa e, quando não cabe, encontra quem mais pode assumi-lo.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Peça ao assistente para atribuir o trabalho à pessoa.',
          'Veja quantas horas a pessoa fica acima da capacidade no período.',
          'Confira as alternativas e como o assistente divide o trabalho.',
          'Mantenha sua escolha, aceite a sugestão ou altere-a.',
          'Revise as alterações nas equipes e selecione Aprovar.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'Atribua o Artur a estas três Atividades como Executor.',
          'Quem mais em Design pode fazer o key visual?',
          'Sim, atribua o trabalho ao Lucas e à Emma.',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'O aviso compara as horas do trabalho com o tempo livre da pessoa no mesmo período, depois das alocações e ausências.',
          'As alternativas são pessoas do mesmo grupo de cargo com tempo livre suficiente. Peça outro grupo ou departamento se precisar.',
          'O aviso não impede você de avançar. Peça ao assistente para atribuir a pessoa mesmo assim, se essa for a sua decisão.',
          'O assistente pede sua aprovação antes de alterar a equipe de uma Atividade. Selecione Negar para deixar as equipes como estão.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Você">
    <p>Atribua o Artur Lima como Executor às Atividades Key Visual, Social Posts e Banner Set da Solenna Energy Winter Campaign. A entrega é na próxima sexta-feira.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>O Artur já está sobrecarregado na próxima semana.</strong> Com estas três Atividades, ele ficaria 36 horas acima da capacidade:</p>
    <Walkthrough.DataTable
      columns={['Artur Lima · Design', 'Horas']}
      rows={[
        ['Capacidade, de segunda-feira, 9, a sexta-feira, 13 de novembro', '40h'],
        ['Já alocado', '46h'],
        ['Key Visual, Social Posts e Banner Set', '30h'],
        ['Total', '76h · 36h acima'],
      ]}
    />
    <p><strong>Encontrei estas pessoas do grupo de cargo Design como alternativa:</strong></p>
    <Walkthrough.DataTable
      columns={['Pessoa', 'Grupo de cargo', 'Tempo livre na próxima semana', 'Trabalho sugerido']}
      rows={[
        ['Lucas Ferreira', 'Design', '40h', 'Key Visual (16h) e Banner Set (6h)'],
        ['Emma Clarke', 'Design', '24h', 'Social Posts (8h)'],
        ['Sofia Marques', 'Design', '16h', 'Não é necessário'],
      ]}
      note="Com essa divisão, o Lucas fica com 18h livres e a Emma com 16h livres na próxima semana."
    />
    <p>Quer que eu atribua o trabalho a eles?</p>
    <p><strong>Como interpretei sua pergunta</strong></p>
    <ul>
      <li>Incluído: pessoas ativas e planejáveis do grupo de cargo Design, de segunda-feira, 9, a sexta-feira, 13 de novembro de 2026.</li>
      <li>Assumido: as horas de cada Atividade são as horas planejadas nela.</li>
    </ul>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Sim, atribua o trabalho a eles.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.ApprovalCard
      title="Adicionar às equipes destes documentos"
      subtitle="Solenna Energy Winter Campaign · 3 Atividades"
      rows={[
        ['SOL0007DESI001 · Key Visual', 'Lucas Ferreira como Executor'],
        ['SOL0007DESI002 · Social Posts', 'Emma Clarke como Executor'],
        ['SOL0007DESI003 · Banner Set', 'Lucas Ferreira como Executor'],
      ]}
      actions={[{ label: 'Negar' }, { label: 'Aprovar', primary: true }]}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Revisei as alterações nas equipes e selecionei Aprovar.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.StatusChip status="Atualizado" label="3 Atividades · Solenna Energy Winter Campaign" />
    <p>Lucas Ferreira é o Executor de Key Visual e Banner Set, e Emma Clarke de Social Posts. A semana de Artur Lima continua como estava, com 46 horas alocadas.</p>
  </Walkthrough.Message>
</Walkthrough>

## Artigos relacionados

- [Encontrar Pessoas Disponíveis e Atribuir uma a uma Atividade](/docs/ai/use-cases/resource-management/checking-resource-availability)
- [Verificar Horas Contratadas e Capacidade da Equipe](/docs/ai/use-cases/resource-management/comparing-contracted-and-available-hours)
- [Receber Notificações sobre Problemas de Recursos](/docs/ai/use-cases/resource-management/receiving-notifications-about-resource-issues)
- [Assistente de IA](/docs/ai/ai-assistant)
