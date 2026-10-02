---
id: creating-a-job-using-a-briefing-template
title: Transformar um Briefing de Campanha num Job
description: "Peça ao AI Assistant para transformar um briefing de campanha num Job e reveja o Job criado no chat."
sidebar_label: Transformar um Briefing de Campanha num Job
sidebar_position: 1
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

## Visão geral

Descreva o trabalho ao AI Assistant por palavras suas. O assistente pode encontrar o cliente e o projeto, sugerir o departamento, o Job Type e o título, e preparar o briefing com o template do Job Type. Confirme as sugestões e reveja o Job antes de aprovar a criação.

A agência e o número do Job nesta conversa são ilustrativos. Os registos e as secções do briefing disponíveis dependem da sua configuração.

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
          'Reveja o Job e o briefing propostos antes de aprovar a criação.',
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
          'O cartão de aprovação permite rever os dados propostos. Se o assistente tiver preparado um briefing, também pode editá-lo nesse cartão.',
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
    <p>Encontrei a General Motors e o projeto da campanha. Para um website, sugiro o departamento Digital e o Job Type Web Design. Dar-lhe-ia o título “GM 2026 EV Campaign – Global Website”. Estes dados estão certos?</p>
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

- [Criar um Job a Partir de um Email do Cliente](/docs/ai/use-cases/projects-and-jobs/creating-a-job-from-a-client-email)
- [AI Assistant](/docs/ai/ai-assistant)
- [AI Agents](/docs/ai/agents)
