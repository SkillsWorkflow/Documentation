---
id: identifying-project-delays
title: Ver os Projetos Atrasados que Precisam da Sua Atenção
description: "Veja como um gestor de projeto pergunta ao AI Assistant quais dos seus projetos estão atrasados, encontra projetos fechados com Jobs ainda em aberto e move esses Jobs para uma etapa final."
sidebar_label: Ver Projetos Atrasados
sidebar_position: 3
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

## Visão geral

Pergunte ao AI Assistant, por palavras suas, quais dos seus projetos estão atrasados e o que ainda está pendente. O assistente encontra os projetos em que está na equipa e que estão marcados como atrasados, juntamente com os Jobs que aguardam uma ação sua. As perguntas seguintes refinam a resposta, por exemplo para projetos fechados cujos Jobs ficaram em aberto. O assistente pode depois cancelar esses Jobs ou movê-los para outra etapa, depois de os aprovar.

A agência, os clientes, os projetos, os números dos Jobs, as etapas e as transições neste exemplo são ilustrativos. Os projetos e Jobs que vê dependem das equipas de que faz parte, e as transições dependem do workflow de cada Job.

<Walkthrough
  subtitle="Exemplo de conversa entre um gestor de projeto e o AI Assistant."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="Atrasos que precisam de si">
        O assistente encontra os projetos atrasados das suas equipas e os Jobs que aguardam uma ação sua, refina-os a cada pergunta seguinte e move Jobs em aberto para outra etapa com a sua aprovação.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Pergunte quais dos seus projetos estão atrasados e o que ainda está pendente.',
          'Consulte Como interpretei a tua pergunta para ver o que foi incluído e assumido.',
          'Peça os projetos fechados que ainda têm Jobs em aberto.',
          'Peça ao assistente para cancelar esses Jobs, ou escolha outra transição disponível.',
          'Reveja a mudança de etapa e selecione Aprovar.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'Quais dos meus projetos estão atrasados?',
          'Há projetos fechados que ainda têm Jobs em aberto?',
          'Cancela os Jobs em aberto de projetos que já estão fechados.',
          'Que transições estão disponíveis para este Job?',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'Cada pergunta seguinte parte da resposta anterior.',
          'Um Job só pode ser cancelado quando o seu workflow tem uma transição de cancelamento disponível. Peça as transições disponíveis para ver as alternativas.',
          'O assistente pede a sua aprovação antes de mover um Job para outra etapa. Selecione Recusar para deixar o Job inalterado.',
          'Consultar projetos e Jobs não os altera, por isso não é necessária aprovação.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Você">
    <p>Quais dos meus projetos estão atrasados? Preciso de fechar tudo o que já passou do prazo e perceber que tarefas ainda estão pendentes.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>Tens <strong>9 projetos</strong> na tua equipa marcados como atrasados. Tens também <strong>4 jobs pendentes para ti</strong>. <strong>Três estão marcados como atrasados</strong>; um não está.</p>
    <p><strong>Como interpretei a tua pergunta</strong></p>
    <ul>
      <li>Incluído: projetos em que estás na equipa e que estão marcados como atrasados.</li>
      <li>Incluído: jobs em que estás na equipa e que têm uma ação pendente tua.</li>
      <li>Assumido: “passou do prazo” significa itens marcados como atrasados, e “meus” significa que és membro da equipa do projeto ou do job.</li>
      <li>Ambas as listas ordenadas pela data de fim, da mais antiga para a mais recente.</li>
    </ul>
    <Walkthrough.JobList
      title="Entregas"
      previewLabel="Pré-visualizar"
      openLabel="Abrir"
      footer="Entregas · 4 linhas"
      rows={[
        { title: 'GM 2025 Dealer Event – Recap Video', number: 'GMC0036VID001', stage: 'Em curso', due: 'há 383 dias', tone: 'late' },
        { title: 'Lumen Bank Annual Report – Print Edition', number: 'LUM0024CR003', stage: 'Novo', due: 'há 305 dias', tone: 'late' },
        { title: 'Orbit Telecom Autumn Promo – Social Assets', number: 'ORB0015CR001', stage: 'Em curso', due: 'há 41 dias', tone: 'late' },
        { title: 'GM 2026 EV Campaign – Global Website', number: 'GMC0042DIGI001', stage: 'Em curso', due: '9 out' },
      ]}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>E há projetos passados, já fechados, que ainda tenham jobs em aberto? Quero fechá-los corretamente.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>Há <strong>2 jobs em aberto em projetos fechados</strong>: um num projeto concluído e outro num projeto aprovado. Estão listados abaixo e devem ser revistos, porque o projeto já está fechado.</p>
    <p><strong>Como interpretei a tua pergunta</strong></p>
    <ul>
      <li>Incluído: projetos da tua equipa em etapas aprovadas, concluídas ou canceladas.</li>
      <li>Incluído: jobs desses projetos que não estão em etapas aprovadas, concluídas ou canceladas.</li>
      <li>Assumido: “fechado” significa aprovado, concluído ou cancelado; “job em aberto” significa um job fora dessas etapas finais.</li>
      <li>Ordenados pela data de fim do job, da mais antiga para a mais recente.</li>
    </ul>
    <Walkthrough.JobList
      title="Entregas"
      previewLabel="Pré-visualizar"
      openLabel="Abrir"
      footer="Entregas · 2 linhas"
      rows={[
        { title: 'GM 2025 Dealer Event – Recap Video', number: 'GMC0036VID001', stage: 'Em curso', due: 'há 383 dias', tone: 'late' },
        { title: 'Lumen Bank Annual Report – Print Edition', number: 'LUM0024CR003', stage: 'Novo', due: 'há 305 dias', tone: 'late' },
      ]}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Cancela-me estes jobs em aberto, por favor.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.StatusChip status="Atualizado" label='Mover este job para "Cancelado"' />
    <p>O job GMC0036VID001 – GM 2025 Dealer Event – Recap Video foi cancelado com sucesso. O outro job, LUM0024CR003 – Lumen Bank Annual Report – Print Edition, não tem nenhuma transição de cancelamento disponível, por isso não foi alterado.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Que transições tens disponíveis?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>Transições disponíveis para LUM0024CR003 – Lumen Bank Annual Report – Print Edition: Send for Review → To Review by Traffic; In Progress → In Progress; Close → Done. O cancelamento não está disponível.</p>
    <Walkthrough.Choices
      label="Escolhe uma transição"
      options={['Send for Review → To Review by Traffic', 'In Progress → In Progress', 'Close → Done']}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Close → Done</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.ApprovalCard
      title='Mover este job para "Done"'
      subtitle="LUM0024CR003 · Lumen Bank Annual Report – Print Edition"
      rows={[['Etapa de destino', 'Done']]}
      actions={[{ label: 'Recusar' }, { label: 'Aprovar', primary: true }]}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Revi a mudança de etapa e selecionei Aprovar.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.StatusChip status="Atualizado" label="LUM0024CR003 · Lumen Bank Annual Report – Print Edition" />
    <p>LUM0024CR003 – Lumen Bank Annual Report – Print Edition foi movido para Done com sucesso.</p>
  </Walkthrough.Message>
</Walkthrough>

## Artigos relacionados

- [Ver os Jobs em que Está a Trabalhar](/docs/ai/use-cases/projects-and-jobs/finding-pending-tasks-and-actions)
- [Receber Notificações Sobre Atrasos de Projeto](/docs/ai/use-cases/client-dashboards-and-forms/receiving-notifications-about-project-delays)
- [AI Assistant](/docs/ai/ai-assistant)
