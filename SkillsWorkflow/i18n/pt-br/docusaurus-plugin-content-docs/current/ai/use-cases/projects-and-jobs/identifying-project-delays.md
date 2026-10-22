---
id: identifying-project-delays
title: Verificar os Projetos Atrasados que Precisam da Sua Atenção
description: "Veja como um gerente de projeto pergunta ao Assistente de IA quais dos seus projetos estão atrasados, encontra projetos fechados com Atividades ainda abertas e move essas Atividades para uma etapa final."
sidebar_label: Verificar Projetos Atrasados
sidebar_position: 3
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

## Visão geral

Pergunte ao Assistente de IA, com suas próprias palavras, quais dos seus projetos estão atrasados e o que ainda está pendente. Ele encontra os projetos em que você faz parte da equipe e que estão marcados como atrasados, junto com as Atividades que aguardam uma ação sua. Perguntas seguintes refinam a resposta, por exemplo para projetos fechados cujas Atividades ficaram abertas. Depois, o assistente pode cancelar essas Atividades ou movê-las para outra etapa, com a sua aprovação.

A agência, os clientes, os projetos, os números das Atividades, as etapas e as transições neste exemplo são ilustrativos. Os projetos e as Atividades que você vê dependem das equipes de que faz parte, e as transições dependem do workflow de cada Atividade.

<Walkthrough
  subtitle="Um exemplo de conversa entre um gerente de projeto e o Assistente de IA."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="Atrasos que precisam de você">
        O assistente encontra os projetos atrasados das suas equipes e as Atividades que aguardam uma ação sua, refina os resultados a cada pergunta seguinte e move Atividades abertas para outra etapa com a sua aprovação.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Pergunte quais dos seus projetos estão atrasados e o que ainda está pendente.',
          'Consulte Como interpretei sua pergunta para ver o que foi incluído e o que foi presumido.',
          'Peça os projetos fechados que ainda têm Atividades abertas.',
          'Peça ao assistente para cancelar essas Atividades ou escolha outra transição disponível.',
          'Revise a mudança de etapa e selecione Aprovar.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'Quais dos meus projetos estão atrasados?',
          'Existem projetos fechados que ainda têm Atividades abertas?',
          'Cancele as Atividades abertas dos projetos que já estão fechados.',
          'Quais transições estão disponíveis para esta Atividade?',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'As perguntas seguintes partem da resposta anterior.',
          'Uma Atividade só pode ser cancelada quando o workflow dela tem uma transição de cancelamento disponível. Peça as transições disponíveis para ver as alternativas.',
          'O assistente pede a sua aprovação antes de mover uma Atividade para outra etapa. Selecione Negar para deixar a Atividade como está.',
          'Consultar projetos e Atividades não os altera, por isso não é necessária aprovação.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Você">
    <p>Quais dos meus projetos estão atrasados? Preciso finalizar tudo o que está vencido e ver quais tarefas ainda estão pendentes.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>Você tem <strong>9 projetos</strong> na sua equipe marcados como atrasados. Você também tem <strong>4 atividades pendentes para você no momento</strong>. <strong>Três estão marcadas como atrasadas</strong>; uma não está.</p>
    <p><strong>Como interpretei sua pergunta</strong></p>
    <ul>
      <li>Incluídos: projetos em que você faz parte da equipe e que estão marcados como atrasados.</li>
      <li>Incluídas: atividades em que você faz parte da equipe e que têm uma ação pendente sua no momento.</li>
      <li>Presumido: “vencido” significa itens marcados como atrasados, e “meus” significa que você é membro da equipe do projeto ou da atividade.</li>
      <li>As duas listas estão ordenadas pela data de término, da mais próxima para a mais distante.</li>
    </ul>
    <Walkthrough.JobList
      title="Atividades"
      previewLabel="Pré-visualizar"
      openLabel="Abrir"
      footer="Atividades · 4 linhas"
      rows={[
        { title: 'GM 2025 Dealer Event – Recap Video', number: 'GMC0036VID001', stage: 'In Progress', due: 'há 383 dias', tone: 'late' },
        { title: 'Lumen Bank Annual Report – Print Edition', number: 'LUM0024CR003', stage: 'New', due: 'há 305 dias', tone: 'late' },
        { title: 'Orbit Telecom Autumn Promo – Social Assets', number: 'ORB0015CR001', stage: 'In Progress', due: 'há 41 dias', tone: 'late' },
        { title: 'GM 2026 EV Campaign – Global Website', number: 'GMC0042DIGI001', stage: 'In Progress', due: '9 out' },
      ]}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>E existem projetos antigos, já fechados, que ainda têm atividades abertas? Quero encerrá-los corretamente.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>Existem <strong>2 atividades abertas em projetos fechados</strong>: uma em um projeto concluído e outra em um projeto aprovado. Elas aparecem abaixo e devem ser revisadas, já que o projeto delas já está fechado.</p>
    <p><strong>Como interpretei sua pergunta</strong></p>
    <ul>
      <li>Incluídos: projetos da sua equipe em etapas aprovadas, concluídas ou canceladas.</li>
      <li>Incluídas: atividades desses projetos que não estão em etapas aprovadas, concluídas ou canceladas.</li>
      <li>Presumido: “fechado” significa aprovado, concluído ou cancelado; “atividade aberta” significa uma atividade fora dessas etapas finais.</li>
      <li>Ordenadas pela data de término da atividade, da mais próxima para a mais distante.</li>
    </ul>
    <Walkthrough.JobList
      title="Atividades"
      previewLabel="Pré-visualizar"
      openLabel="Abrir"
      footer="Atividades · 2 linhas"
      rows={[
        { title: 'GM 2025 Dealer Event – Recap Video', number: 'GMC0036VID001', stage: 'In Progress', due: 'há 383 dias', tone: 'late' },
        { title: 'Lumen Bank Annual Report – Print Edition', number: 'LUM0024CR003', stage: 'New', due: 'há 305 dias', tone: 'late' },
      ]}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Por favor, cancele essas atividades abertas para mim.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.StatusChip status="Atualizado" label='Mover esta atividade para "Cancelled"' />
    <p>A atividade GMC0036VID001 – GM 2025 Dealer Event – Recap Video foi cancelada com sucesso. A outra atividade, LUM0024CR003 – Lumen Bank Annual Report – Print Edition, não tem uma transição de cancelamento disponível, por isso não foi alterada.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Quais transições você tem disponíveis?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>Transições disponíveis para LUM0024CR003 – Lumen Bank Annual Report – Print Edition: Send for Review → To Review by Traffic; In Progress → In Progress; Close → Done. O cancelamento não está disponível.</p>
    <Walkthrough.Choices
      label="Escolha uma transição"
      options={['Send for Review → To Review by Traffic', 'In Progress → In Progress', 'Close → Done']}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Close → Done</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.ApprovalCard
      title='Mover esta atividade para "Done"'
      subtitle="LUM0024CR003 · Lumen Bank Annual Report – Print Edition"
      rows={[['Etapa de destino', 'Done']]}
      actions={[{ label: 'Negar' }, { label: 'Aprovar', primary: true }]}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Revisei a mudança de etapa e selecionei Aprovar.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.StatusChip status="Atualizado" label="LUM0024CR003 · Lumen Bank Annual Report – Print Edition" />
    <p>LUM0024CR003 – Lumen Bank Annual Report – Print Edition foi movida para Done com sucesso.</p>
  </Walkthrough.Message>
</Walkthrough>

## Artigos relacionados

- [Ver as Atividades em que Você Está Trabalhando](/docs/ai/use-cases/projects-and-jobs/finding-pending-tasks-and-actions)
- [Assistente de IA](/docs/ai/ai-assistant)
