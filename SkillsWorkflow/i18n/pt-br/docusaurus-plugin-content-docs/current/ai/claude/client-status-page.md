---
id: ai-claude-client-status-page
title: Compartilhar uma Página de Status em Tempo Real com um Cliente
description: "Peça ao Claude uma página que mostre a um cliente o andamento da campanha, as entregas e o que aguarda por ele, publicada em um único endereço que sempre mostra os dados de hoje."
sidebar_label: Uma Página de Status em Tempo Real para um Cliente
sidebar_position: 3
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

Dê a um cliente um único endereço onde ele vê como o trabalho está andando: o progresso da campanha, as entregas previstas e as aprovações que aguardam por ele. Peça a página ao Claude, revise-a e envie o endereço ao cliente. A página lê o Skills Workflow sempre que é aberta, então ninguém a atualiza à mão e ninguém envia um deck de status por e-mail na sexta-feira.

## Disponibilidade

Disponível. Você precisa do [conector do Skills Workflow no Claude](/docs/ai/claude/ai-claude-connect). O cliente faz login com o próprio usuário do Skills Workflow e vê apenas os projetos e as Atividades que esse usuário tem permissão para ver.

## Como pedir

1. Indique o cliente, o projeto ou a campanha, e o que o cliente deve ver na página.
2. Confira o que o Claude propõe para cada seção e os dados por trás dela. Peça alterações antes de ele publicar.
3. O Claude publica a página com o nome do cliente e informa o endereço.
4. Abra o endereço como um usuário com as permissões do cliente e depois envie-o.

A agência, o cliente, os números e o endereço deste exemplo são ilustrativos.

<Walkthrough
  title="Claude"
  subtitle="Exemplo de conversa entre um gerente de contas e o Claude."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="Um status que se mantém atualizado sozinho">
        O Claude monta a página a partir dos seus projetos e Atividades. Sempre que o cliente a abre, ela mostra os dados de hoje.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Indique o cliente e a campanha.',
          'Diga o que o cliente deve e não deve ver.',
          'Revise as seções antes de o Claude publicar.',
          'Abra o endereço como o cliente antes de enviá-lo.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'Crie uma página de status para a campanha de Natal da Northwind Coffee.',
          'Coloque no topo as aprovações que aguardam o cliente.',
          'Esconda as horas, o cliente não deve vê-las.',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'O cliente precisa de um usuário do Skills Workflow para abrir a página.',
          'Qualquer usuário com login que saiba o endereço pode abri-la. Restrinja a pasta por perfil quando isso importar.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Você">
    <p>Crie uma página de status para a campanha Christmas 2026 da Northwind Coffee. Eles devem ver o progresso, o que vence nas próximas duas semanas e tudo o que aguarda a aprovação deles. Sem horas nem custos.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Claude">
    <p>Esta é a página que vou publicar para a Northwind Coffee:</p>
    <Walkthrough.FieldTable
      rows={[
        ['Cabeçalho', 'Nome da campanha, responsável e progresso geral'],
        ['Aguardando você', 'Atividades em uma etapa de aprovação do cliente, das mais antigas para as mais recentes'],
        ['Para as próximas duas semanas', 'Entregas com a data de entrega e a etapa'],
        ['Entregue', 'Atividades fechadas neste mês'],
        ['Deixado de fora', 'Horas, valores de hora e custos'],
      ]}
    />
    <p>O endereço será <code>/portal/northwind-coffee/christmas-2026/</code>. Posso publicar?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Sim, pode publicar.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Claude">
    <Walkthrough.StatusChip status="Publicado" label="northwind-coffee/christmas-2026" />
    <p>Está publicada. Abra-a com um usuário que tenha as permissões da Northwind Coffee antes de enviar o endereço: é exatamente o que o cliente vai ver.</p>
  </Walkthrough.Message>
</Walkthrough>

## Regras e comportamento

- O endereço tem duas partes, o cliente e a página: `/portal/{client}/{page}/`. Ambas usam apenas letras minúsculas, números e hífens.
- Pedir uma alteração republica a página inteira no mesmo endereço. O cliente continua com o mesmo link.
- A página não tem imagens próprias além das que o Claude incorpora nela. Os logos e as fotos de pessoas e clientes vêm do Skills Workflow.
- Abrir a página sem sessão mostra o login do Skills Workflow e volta para a página em seguida.

## Artigos relacionados

- [Um Único Endereço para Tudo o que um Cliente Abre](/docs/ai/claude/ai-claude-client-hub)
- [Criar um Relatório a Partir dos Seus Dados](/docs/ai/claude/ai-claude-reports)
- [Portais de Clientes](/docs/ai/ai-portals)
- [Conectar o Claude, o Codex ou o GitHub Copilot ao Skills Workflow](/docs/ai/claude/ai-claude-connect)
