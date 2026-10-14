---
id: creating-a-job-from-a-client-email
title: Criar uma Atividade a partir de um E-mail do Cliente
description: "Cole um pedido do cliente no Assistente de IA, confira a Atividade que ele propõe e revise a Atividade criada no chat."
sidebar_label: Criar uma Atividade a partir de um E-mail do Cliente
sidebar_position: 2
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

## Visão geral

Copie o pedido de um cliente para o Assistente de IA e peça para ele criar uma Atividade. O assistente pode usar os nomes e o escopo do e-mail para encontrar o cliente e o projeto, sugerir um título, um departamento e um Tipo de Atividade, e preparar um brief. Confirme as correspondências sugeridas e aprove a Atividade depois de revisar os dados.

Este exemplo começa com um texto colado no chat. O e-mail, os cadastros da agência e o número da Atividade abaixo são ilustrativos.

<Walkthrough
  subtitle="Um gerente de contas transforma um e-mail do cliente em uma Atividade sem precisar digitá-lo de novo em um formulário."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="Do pedido do cliente à Atividade">
        O assistente lê o pedido colado, propõe onde o trabalho deve ficar e prepara a Atividade para aprovação.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Cole o texto relevante do e-mail e peça uma Atividade.',
          'Confira o cliente, o projeto, o título, o departamento e o Tipo de Atividade que o assistente propõe.',
          'Corrija ou acrescente dados antes de aprovar a criação.',
          'Abra a Atividade criada pelo cartão dela na conversa.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'Crie uma Atividade a partir deste e-mail do cliente: [cole o e-mail].',
          'Transforme este pedido em uma Atividade para o cliente e o projeto indicados abaixo.',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'Um endereço de e-mail sozinho não identifica um cliente ou projeto. Inclua os nomes relevantes ou confirme as correspondências sugeridas pelo assistente.',
          'Colar o texto de um e-mail no chat não anexa um arquivo de e-mail à Atividade.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Você">
    <p>Recebi isto do nosso contato na General Motors. Você pode criar uma atividade e um brief completo a partir dele?</p>
    <blockquote>
      <p><strong>De:</strong> Sofia, General Motors<br /><strong>Assunto:</strong> Página de localização de concessionárias para a campanha de VE</p>
      <p>Olá, equipe. Para o projeto General Motors – 2026 Global EV Campaign, precisamos de uma página que ajude os visitantes a encontrar uma concessionária próxima. Apresentem a linha de veículos elétricos, façam do localizador de concessionárias a principal chamada para ação e incluam uma forma de agendar um test drive. Sigam a direção visual da campanha. Vocês podem começar este trabalho?</p>
    </blockquote>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>Encontrei a General Motors e o projeto da campanha indicado. Sugiro uma atividade em Digital com o Tipo de Atividade Web Design, com o título “GM EV Campaign – Dealer Locator Page”. Vou usar o escopo do e-mail no brief. É esse o trabalho que você quer criar?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Sim. Mantenha o localizador de concessionárias como principal chamada para ação e inclua o agendamento do test drive.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>Os dados da atividade estão prontos para revisão.</p>
    <Walkthrough.FieldTable
      rows={[
        ['Cliente', 'General Motors'],
        ['Projeto', 'General Motors – 2026 Global EV Campaign'],
        ['Tipo de objeto de negócio', 'Atividade'],
        ['Departamento', 'Digital'],
        ['Tipo de atividade', 'Web Design'],
        ['Título', 'GM EV Campaign – Dealer Locator Page'],
        ['Descrição', 'Uma página da campanha que apresenta a linha de VE, com um localizador de concessionárias como principal chamada para ação e agendamento de test drive'],
        ['Briefing', 'Preparado a partir do e-mail colado, nas seções de briefing de Web Design'],
      ]}
    />
    <p>Revise os dados propostos e o brief no cartão de aprovação antes de criar a atividade.</p>
    <Walkthrough.Actions items={[{ label: 'Fazer alterações' }, { label: 'Aprovar', primary: true }]} />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Revisei a proposta e selecionei Aprovar.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>A atividade foi criada.</p>
    <Walkthrough.CreatedJobCard
      label="Atividade criada"
      title="GM EV Campaign – Dealer Locator Page"
      number="1043"
      rows={[
        ['Número Atividade', '1043'],
        ['Cliente', 'General Motors'],
        ['Projeto', 'General Motors – 2026 Global EV Campaign'],
        ['Departamento', 'Digital'],
        ['Tipo de atividade', 'Web Design'],
        ['Descrição', 'Uma página da campanha que apresenta a linha de VE, com um localizador de concessionárias como principal chamada para ação e agendamento de test drive'],
      ]}
      actions={['Abrir popup', 'Navegar']}
    />
  </Walkthrough.Message>
</Walkthrough>

## Artigos relacionados

- [Transformar um Brief de Campanha em uma Atividade](/docs/ai/use-cases/projects-and-jobs/creating-a-job-using-a-briefing-template)
- [Assistente de IA](/docs/ai/ai-assistant)
- [Agentes de IA](/docs/ai/agents)
