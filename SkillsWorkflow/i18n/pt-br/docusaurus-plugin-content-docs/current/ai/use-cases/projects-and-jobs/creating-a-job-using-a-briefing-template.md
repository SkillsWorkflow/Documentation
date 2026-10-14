---
id: creating-a-job-using-a-briefing-template
title: Transformar um Brief de Campanha em uma Atividade
description: "Veja como o Assistente de IA transforma um pedido de campanha em uma Atividade e organiza o brief com o modelo do Tipo de Atividade."
sidebar_label: Transformar um Brief de Campanha em uma Atividade
sidebar_position: 1
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

## Visão geral

Descreva o trabalho ao Assistente de IA com suas próprias palavras. Ele pode encontrar os cadastros de cliente e projeto correspondentes, deduzir o departamento, o Tipo de Atividade e o título a partir do pedido, e organizar o brief com o modelo do Tipo de Atividade. Revise a Atividade proposta antes de aprovar a criação.

A agência, o número da Atividade e o modelo de Web Design neste exemplo são ilustrativos. Os cadastros e as seções de briefing disponíveis dependem da sua configuração.

<Walkthrough
  subtitle="Um exemplo de conversa entre um usuário da agência e o Assistente de IA."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="Do pedido à Atividade">
        O assistente reúne os dados da Atividade, prepara o brief com o modelo do Tipo de Atividade selecionado e apresenta a criação para aprovação.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Descreva o cliente, o projeto e o entregável com suas próprias palavras.',
          'Confira o departamento, o Tipo de Atividade e o título que o assistente sugere.',
          'Revise a Atividade proposta antes de aprovar a criação.',
          'Abra a Atividade criada pelo cartão dela na conversa.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'Crie uma Atividade para o site da nossa campanha. Já tenho os dados do brief.',
          'Configure uma Atividade neste projeto e use o modelo de briefing do Tipo de Atividade dela.',
          'Crie uma Atividade a partir deste pedido: [cole o brief].',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'Uma correspondência exata pode ser usada diretamente. Uma correspondência provável ou uma preferência memorizada precisa ser confirmada antes de a Atividade ser criada.',
          'O cartão de aprovação permite revisar os dados propostos da Atividade antes da criação.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Você">
    <p>Precisamos de um site global para a campanha de veículos elétricos 2026 da General Motors, no nosso projeto “General Motors – 2026 Global EV Campaign”. Você pode configurar a atividade e escrever o brief completo?</p>
    <p>O site deve apresentar a campanha, mostrar a linha de veículos elétricos, explicar a mensagem principal da campanha e direcionar os visitantes para o próximo passo. Anexei uma referência visual.</p>
    <Walkthrough.Attachment
      src="/img/ai/use-cases/ev-campaign-reference.png"
      filename="ev-campaign-reference.png"
      description="Imagem ilustrativa de referência para uma campanha de veículos elétricos"
      caption="Referência visual anexada ao pedido da campanha."
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>Encontrei a General Motors e o projeto da campanha indicado. Como você pediu um site, sugiro Digital, o Tipo de Atividade Web Design e o título “GM 2026 EV Campaign – Global Website”. Posso organizar seus requisitos no modelo de briefing dele. Esses dados da atividade estão corretos?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Sim, use Digital e Web Design. Mantenha esse título.</p>
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
        ['Título', 'GM 2026 EV Campaign – Global Website'],
        ['Descrição', 'Um site global de campanha que apresenta a campanha, a linha de veículos, a mensagem principal e os próximos passos'],
      ]}
    />
    <p>Revise os dados propostos da atividade no cartão de aprovação antes de criá-la.</p>
    <Walkthrough.Actions items={[{ label: 'Fazer alterações' }, { label: 'Aprovar', primary: true }]} />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Revisei a proposta e selecionei Aprovar.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>A atividade foi criada com um brief organizado no modelo de Web Design. Mantive o conteúdo pedido para a campanha e a referência visual. A redação final da mensagem da campanha ainda precisa ser fornecida.</p>
    <Walkthrough.CreatedJobCard
      label="Atividade criada"
      title="GM 2026 EV Campaign – Global Website"
      number="1042"
      rows={[
        ['Número Atividade', '1042'],
        ['Cliente', 'General Motors'],
        ['Projeto', 'General Motors – 2026 Global EV Campaign'],
        ['Departamento', 'Digital'],
        ['Tipo de atividade', 'Web Design'],
        ['Descrição', 'Um site global de campanha que apresenta a campanha, a linha de veículos, a mensagem principal e os próximos passos'],
      ]}
      actions={['Abrir popup', 'Navegar']}
    />
  </Walkthrough.Message>
</Walkthrough>

## Como o pedido se transforma em um brief estruturado

Esta comparação ilustra como o pedido pode preencher o modelo de briefing de Web Design de uma agência. Os nomes das seções são um exemplo, não campos fixos do Skills Workflow. O assistente aproveita o que o usuário forneceu e deixa a redação da mensagem da campanha em aberto para confirmação.

<Walkthrough.BriefComparison
  templateTitle="Exemplo de modelo de Web Design"
  resultTitle="Brief na Atividade criada"
  note="Seções ilustrativas configuradas pela agência"
  sections={[
    ['Objetivo', 'O que este site deve alcançar?', 'Apresentar a campanha de veículos elétricos 2026 e direcionar os visitantes para um próximo passo.'],
    ['Público', 'Para quem é o site?', 'Visitantes que estão conhecendo a linha de veículos elétricos.'],
    ['Mensagem principal', 'O que o visitante deve entender?', 'Explicar a mensagem principal da campanha. A redação final aprovada ainda será fornecida.'],
    ['Conteúdo da página', 'O que o site precisa incluir?', 'Apresentação da campanha, linha de veículos elétricos e um próximo passo claro.'],
    ['Direção visual', 'Que direção criativa a equipe deve seguir?', 'Usar a referência visual anexada ao pedido.'],
  ]}
/>

## Artigos relacionados

- [Criar uma Atividade a partir de um E-mail do Cliente](/docs/ai/use-cases/projects-and-jobs/creating-a-job-from-a-client-email)
- [Assistente de IA](/docs/ai/ai-assistant)
- [Agentes de IA](/docs/ai/agents)
