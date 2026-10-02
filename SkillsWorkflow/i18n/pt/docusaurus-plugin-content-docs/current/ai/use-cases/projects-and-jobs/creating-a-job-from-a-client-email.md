---
id: creating-a-job-from-a-client-email
title: Criar um Job a Partir de um Email do Cliente
description: "Cole um pedido do cliente no AI Assistant, verifique o Job proposto e reveja o Job criado no chat."
sidebar_label: Criar um Job a Partir de um Email do Cliente
sidebar_position: 2
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

## Visão geral

Copie o pedido de um cliente para o AI Assistant e peça-lhe para criar um Job. O assistente pode usar os nomes e o âmbito indicados no email para encontrar o cliente e o projeto, sugerir um título, departamento e Job Type, e preparar um briefing. Confirme as correspondências sugeridas e aprove o Job depois de rever os dados.

Este exemplo começa com texto colado no chat. O email, os registos da agência e o número do Job abaixo são ilustrativos.

<Walkthrough
  subtitle="Um gestor de conta transforma um email do cliente num Job sem voltar a preencher o pedido num formulário."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="Do pedido do cliente ao Job">
        O assistente lê o pedido colado, propõe onde enquadrar o trabalho e prepara o Job para aprovação.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Cole o texto relevante do email e peça um Job.',
          'Verifique o cliente, o projeto, o título, o departamento e o Job Type propostos pelo assistente.',
          'Corrija ou acrescente detalhes antes de aprovar a criação.',
          'Abra o Job criado a partir do cartão na conversa.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'Cria um Job a partir deste email do cliente: [colar email].',
          'Transforma este pedido num Job para o cliente e projeto indicados abaixo.',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'Um endereço de email, por si só, não identifica o cliente nem o projeto. Inclua os nomes relevantes ou confirme as correspondências sugeridas pelo assistente.',
          'Colar o texto do email no chat não anexa um ficheiro de email ao Job.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Você">
    <p>Recebi isto do nosso contacto na General Motors. Podes criar um Job e um briefing completo a partir do email?</p>
    <blockquote>
      <p><strong>De:</strong> Sofia, General Motors<br /><strong>Assunto:</strong> Página para encontrar concessionários na campanha EV</p>
      <p>Olá equipa, para o projeto General Motors – 2026 Global EV Campaign, precisamos de uma página que ajude os visitantes a encontrar um concessionário próximo. Apresentem a gama de veículos elétricos, deem destaque à pesquisa de concessionários como principal ação e incluam a possibilidade de marcar um test drive. Sigam a direção visual da campanha. Podem começar este trabalho?</p>
    </blockquote>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>Encontrei a General Motors e o projeto da campanha indicado no email. Sugiro um Job no departamento Digital, com o Job Type Web Design e o título “GM EV Campaign – Dealer Locator Page”. Vou usar o âmbito do email no briefing. É este o trabalho que quer criar?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Sim. Mantém a pesquisa de concessionários como ação principal e inclui a marcação de test drive.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>Os dados do Job estão prontos para revisão.</p>
    <Walkthrough.FieldTable
      rows={[
        ['Cliente', 'General Motors'],
        ['Projeto', 'General Motors – 2026 Global EV Campaign'],
        ['Tipo de objeto de negócio', 'Job'],
        ['Departamento', 'Digital'],
        ['Job Type', 'Web Design'],
        ['Título', 'GM EV Campaign – Dealer Locator Page'],
        ['Descrição', 'Uma página da campanha que apresenta a gama EV, com a pesquisa de concessionários como ação principal e a marcação de test drive'],
        ['Briefing', 'Preparado a partir do email nas secções do template de Web Design'],
      ]}
    />
    <p>Reveja os dados e o briefing propostos no cartão de aprovação antes de criar o Job.</p>
    <Walkthrough.Actions items={[{ label: 'Fazer alterações' }, { label: 'Aprovar', primary: true }]} />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Revi a proposta e selecionei Aprovar.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>O Job foi criado.</p>
    <Walkthrough.CreatedJobCard
      label="Job criado"
      title="GM EV Campaign – Dealer Locator Page"
      number="1043"
      rows={[
        ['Número Entrega', '1043'],
        ['Cliente', 'General Motors'],
        ['Projeto', 'General Motors – 2026 Global EV Campaign'],
        ['Departamento', 'Digital'],
        ['Tipo de job', 'Web Design'],
        ['Descrição', 'Uma página da campanha que apresenta a gama EV, com a pesquisa de concessionários como ação principal e a marcação de test drive'],
      ]}
      actions={['Abrir popup', 'Navegar']}
    />
  </Walkthrough.Message>
</Walkthrough>

## Artigos relacionados

- [Transformar um Briefing de Campanha num Job](/docs/ai/use-cases/projects-and-jobs/creating-a-job-using-a-briefing-template)
- [AI Assistant](/docs/ai/ai-assistant)
- [AI Agents](/docs/ai/agents)
