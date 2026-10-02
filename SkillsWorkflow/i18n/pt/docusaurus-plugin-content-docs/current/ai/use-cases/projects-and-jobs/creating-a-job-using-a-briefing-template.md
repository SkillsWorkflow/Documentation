---
id: creating-a-job-using-a-briefing-template
title: Transformar um Briefing de Campanha num Job
description: "Veja como o AI Assistant transforma um pedido de campanha num Job e organiza o briefing com o template do Job Type."
sidebar_label: Transformar um Briefing de Campanha num Job
sidebar_position: 1
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

## Visão geral

Descreva o trabalho ao AI Assistant por palavras suas. O assistente pode encontrar o cliente e o projeto, inferir o departamento, o Job Type e o título a partir do pedido, e organizar o briefing com o template do Job Type. Reveja o Job proposto antes de aprovar a criação.

A agência, o número do Job e o template de Web Design neste exemplo são ilustrativos. Os registos e as secções do briefing disponíveis dependem da sua configuração.

<Walkthrough
  subtitle="Exemplo de conversa entre alguém da agência e o AI Assistant."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="Do pedido ao Job">
        O assistente recolhe os dados do Job, prepara o briefing com o template do Job Type selecionado e apresenta a criação para aprovação.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Descreva o cliente, o projeto e o trabalho por palavras suas.',
          'Verifique o departamento, o Job Type e o título sugeridos pelo assistente.',
          'Reveja o Job proposto antes de aprovar a criação.',
          'Abra o Job criado a partir do cartão na conversa.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'Cria um Job para o website da nossa campanha. Já tenho os detalhes do briefing.',
          'Cria um Job neste projeto e usa o template de briefing do respetivo Job Type.',
          'Cria um Job a partir deste pedido: [colar o briefing].',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'Uma correspondência exata pode ser usada diretamente. Uma correspondência provável ou uma preferência guardada tem de ser confirmada antes de criar o Job.',
          'O cartão de aprovação permite rever os dados propostos para o Job antes da criação.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Você">
    <p>Precisamos de um website global para a campanha de veículos elétricos de 2026 da General Motors, no projeto “General Motors – 2026 Global EV Campaign”. Podes criar o Job e escrever o briefing completo?</p>
    <p>O site deve apresentar a campanha, mostrar a gama de veículos elétricos, explicar a mensagem principal e encaminhar os visitantes para o passo seguinte. Anexei uma referência visual.</p>
    <Walkthrough.Attachment
      src="/img/ai/use-cases/ev-campaign-reference.png"
      filename="ev-campaign-reference.png"
      description="Imagem ilustrativa de referência para uma campanha de veículos elétricos"
      caption="Referência visual anexada ao pedido da campanha."
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>Encontrei a General Motors e o projeto da campanha indicado. Como pediste um website, sugiro Digital, o Job Type Web Design e o título “GM 2026 EV Campaign – Global Website”. Posso organizar os requisitos no respetivo template de briefing. Estes dados do Job estão certos?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Sim, usa Digital e Web Design. Mantém esse título.</p>
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
        ['Título', 'GM 2026 EV Campaign – Global Website'],
        ['Descrição', 'Um website global que apresenta a campanha, a gama de veículos, a mensagem principal e os próximos passos'],
      ]}
    />
    <p>Reveja os dados propostos para o Job no cartão de aprovação antes de o criar.</p>
    <Walkthrough.Actions items={[{ label: 'Fazer alterações' }, { label: 'Aprovar', primary: true }]} />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Revi a proposta e selecionei Aprovar.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>O Job foi criado com um briefing organizado no template de Web Design. Mantive os conteúdos pedidos para a campanha e a referência visual. Ainda falta indicar a redação final da mensagem da campanha.</p>
    <Walkthrough.CreatedJobCard
      label="Job criado"
      title="GM 2026 EV Campaign – Global Website"
      number="1042"
      rows={[
        ['Número Entrega', '1042'],
        ['Cliente', 'General Motors'],
        ['Projeto', 'General Motors – 2026 Global EV Campaign'],
        ['Departamento', 'Digital'],
        ['Tipo de job', 'Web Design'],
        ['Descrição', 'Um website global que apresenta a campanha, a gama de veículos, a mensagem principal e os próximos passos'],
      ]}
      actions={['Abrir popup', 'Navegar']}
    />
  </Walkthrough.Message>
</Walkthrough>

## Como o pedido se transforma num briefing estruturado

Esta comparação ilustra como o pedido pode preencher o template de briefing de Web Design de uma agência. Os nomes das secções são um exemplo, não campos fixos do Skills Workflow. O assistente aproveita a informação fornecida e deixa a redação da mensagem da campanha por confirmar.

<Walkthrough.BriefComparison
  templateTitle="Exemplo de template de Web Design"
  resultTitle="Briefing no Job criado"
  note="Secções ilustrativas configuradas pela agência"
  sections={[
    ['Objetivo', 'O que deve este website alcançar?', 'Apresentar a campanha de veículos elétricos de 2026 e encaminhar os visitantes para um próximo passo.'],
    ['Público-alvo', 'A quem se destina o website?', 'Visitantes que exploram a gama de veículos elétricos.'],
    ['Mensagem principal', 'O que deve o visitante compreender?', 'Explicar a mensagem principal da campanha. Falta fornecer a redação final aprovada.'],
    ['Conteúdo da página', 'O que deve o website incluir?', 'Apresentação da campanha, gama de veículos elétricos e um próximo passo claro.'],
    ['Direção visual', 'Que direção criativa deve a equipa seguir?', 'Usar a referência visual anexada ao pedido.'],
  ]}
/>

## Artigos relacionados

- [Criar um Job a Partir de um Email do Cliente](/docs/ai/use-cases/projects-and-jobs/creating-a-job-from-a-client-email)
- [AI Assistant](/docs/ai/ai-assistant)
- [AI Agents](/docs/ai/agents)
