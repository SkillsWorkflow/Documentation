---
id: creating-a-job-using-a-briefing-template
title: Transformar um Briefing de Campanha num Job
description: "Peça ao AI Assistant para transformar um briefing de campanha num Job e reveja o Job criado no chat."
sidebar_label: Transformar um Briefing de Campanha num Job
sidebar_position: 1
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

## Visão geral

Peça ao AI Assistant para criar um Job por palavras suas. Indique o cliente, o projeto, o trabalho a realizar e os detalhes do briefing que já conhece. O assistente usa o template de briefing do Job Type selecionado e pede-lhe para escolher os dados obrigatórios que não conseguir identificar. Reveja a proposta antes de aprovar a criação do Job.

A conversa usa uma configuração de agência ilustrativa. Os chips na sua conta mostram os projetos, departamentos e Job Types disponíveis para si. O número do Job no exemplo é ilustrativo.

<Walkthrough
  subtitle="Exemplo de conversa entre alguém da agência e o AI Assistant."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="Do pedido ao Job">
        O assistente recolhe os dados do Job, prepara o briefing com o template do Job Type selecionado e apresenta a criação para aprovação.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Indique o cliente e o projeto, ou selecione-os quando lhe forem pedidos.',
          'Descreva o trabalho e o que o briefing deve incluir.',
          'Escolha os restantes dados entre as opções apresentadas para a sua agência.',
          'Reveja a proposta de Job e aprove-a para criar o registo.',
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
          'O assistente apresenta chips selecionáveis quando precisa que escolha um projeto, tipo de objeto de negócio, departamento ou Job Type.',
          'O cartão de aprovação permite rever os dados propostos. Se o assistente tiver preparado um briefing, também pode editá-lo nesse cartão.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Você">
    <p>Precisamos de um Job para a campanha de veículos elétricos de 2026 da General Motors. É o website global da campanha. Dá-lhe o título “GM 2026 EV Campaign – Global Website” e usa o template de briefing do Job Type para websites para escrever o briefing completo.</p>
    <p>O site deve apresentar a campanha, mostrar a gama de veículos elétricos, explicar a mensagem principal e encaminhar os visitantes para o passo seguinte. É para o projeto da campanha que já temos na General Motors. Anexei uma referência visual para a campanha.</p>
    <Walkthrough.Attachment
      src="/img/ai/use-cases/ev-campaign-reference.png"
      filename="ev-campaign-reference.png"
      description="Imagem ilustrativa de referência para uma campanha de veículos elétricos"
      caption="Referência visual anexada ao pedido da campanha."
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>Encontrei o cliente.</p>
    <Walkthrough.Choices label="Escolhe um projeto:" options={['General Motors – 2026 Global EV Campaign', 'General Motors – Corporate Website']} />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Seleciono o projeto "General Motors – 2026 Global EV Campaign".</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>Escolhe o tipo de objeto de negócio para este trabalho.</p>
    <Walkthrough.Choices label="Escolhe um tipo de objeto de negócio:" options={['Job', 'Task']} />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Seleciono o tipo de objeto de negócio "Job".</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>Escolhe o departamento para este Job.</p>
    <Walkthrough.Choices label="Escolhe um departamento:" options={['Digital', 'Creative', 'Production']} />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Seleciono o departamento "Digital".</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>Escolhe o Job Type para o website.</p>
    <Walkthrough.Choices label="Escolhe um tipo de job:" options={['Web Design', 'Digital Campaign']} />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Seleciono o tipo de job "Web Design".</p>
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
        ['Briefing', 'Preparado nas secções do template do Job Type selecionado'],
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

## Artigos relacionados

- [AI Assistant](/docs/ai/ai-assistant)
- [AI Agents](/docs/ai/agents)
