---
id: providing-clients-with-an-online-project-status-portal
title: Oferecer a um Cliente um Portal Online com o Status do Projeto
description: "Veja como um gerente de contas pede ao Assistente de IA um portal de cliente com o status, o burn do contrato, os riscos e os pedidos pendentes de um projeto, revisa o que a página mostra e a publica."
sidebar_label: Oferecer a um Cliente um Portal de Status do Projeto
sidebar_position: 1
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

:::preview
Este caso de uso está em preview, a conversa mostra como se espera que o Assistente de IA lide com ele, e o que ele responde ou faz hoje pode ser diferente deste exemplo.
:::

## Visão geral

Diga ao Assistente de IA para qual cliente e projeto é o portal e o que ele deve mostrar. O assistente propõe as seções da página e os dados por trás de cada uma: o status do projeto, o burn do contrato, as Atividades em risco e os pedidos que ainda aguardam alguém. Você revisa a página, e o assistente a publica como um portal de cliente com endereço próprio, pronto para compartilhar.

Um portal de cliente é uma página própria, servida pelo Skills Workflow e que lê dados em tempo real. Quem o abre faz login e vê os dados que as suas próprias permissões permitem. Leia [Portais de Clientes](/docs/ai/ai-portals) para saber como os portais funcionam e o que ainda não está disponível.

A agência, o cliente, o projeto, os números e o endereço deste exemplo são ilustrativos.

<Walkthrough
  subtitle="Exemplo de conversa entre um gerente de contas e o Assistente de IA."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="De um pedido a uma página que o cliente abre">
        O assistente monta um portal em torno do projeto que interessa ao cliente, com status, burn, riscos e pedidos pendentes em tempo real.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Informe o cliente, o projeto e o que o portal deve mostrar.',
          'Confira as seções e os dados que o assistente propõe.',
          'Peça alterações nas seções antes de publicar.',
          'Revise o endereço e selecione Publicar.',
          'Abra o portal e confira-o como um usuário que deve vê-lo.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'Crie uma página de status para a Northwind Coffee com o projeto de Natal deles.',
          'Dê ao Contoso Bank uma visão online do burn do contrato e das aprovações pendentes.',
          'Adicione as Atividades em risco ao portal da Northwind.',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'Um portal lê os dados com as permissões da pessoa que o abre. Quem não vê um projeto no Skills Workflow também não o vê no portal.',
          'Um portal ainda não fica restrito ao seu cliente. Qualquer usuário com login que saiba o endereço pode abri-lo, então restrinja as pastas do portal por perfil.',
          'O endereço tem duas partes, o cliente e o portal, em letras minúsculas, números e hífens.',
          'O assistente pede a sua aprovação antes de publicar. Selecione Negar para manter a página sem publicar.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Você">
    <p>A Northwind Coffee quer acompanhar o projeto Christmas 2026 online. Crie um portal com o status do projeto, o burn do contrato, os riscos e os pedidos que aguardam por eles.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>Vou montar um portal para o <strong>Northwind Christmas 2026</strong> com quatro seções:</p>
    <Walkthrough.DataTable
      columns={['Seção', 'O que mostra']}
      rows={[
        ['Status do projeto', 'Atividades por etapa, entregues neste mês e com entrega nas próximas duas semanas'],
        ['Burn do contrato', 'Horas contratadas, planejadas e registradas, e a porcentagem de burn'],
        ['Em risco', 'Atividades atrasadas e Atividades com entrega nesta semana que ainda não estão em produção'],
        ['Aguardando você', 'Atividades aguardando aprovação ou feedback do cliente, com os dias de espera'],
      ]}
    />
    <p>O burn deve mostrar só horas, ou horas e valores?</p>
    <Walkthrough.Choices label="Burn do contrato" options={['Só horas', 'Horas e valores']} />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Só horas. E adicione o logo do cliente no topo.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.ApprovalCard
      title="Publicar este portal"
      subtitle="Revise o portal antes de eu publicá-lo."
      rows={[
        ['Cliente', 'Northwind Coffee'],
        ['Projeto', 'Northwind Christmas 2026'],
        ['Endereço', '/portal/northwind-coffee/christmas-2026/'],
        ['Seções', 'Status do projeto, Burn do contrato (horas), Em risco, Aguardando você'],
        ['Cabeçalho', 'Logo da Northwind Coffee'],
      ]}
      actions={[{ label: 'Negar' }, { label: 'Publicar', primary: true }]}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Revisei os detalhes e selecionei Publicar.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.StatusChip status="Publicado" label="northwind-coffee/christmas-2026" />
    <p>O portal está publicado. Hoje ele mostra 14 Atividades, 9 entregues, 62% das horas contratadas registradas, 2 Atividades em risco e 3 Atividades aguardando aprovação do cliente.</p>
    <p>Antes de compartilhar o endereço, restrinja a pasta <strong>northwind-coffee</strong> aos perfis que devem abri-lo.</p>
  </Walkthrough.Message>
</Walkthrough>

## Artigos relacionados

- [Portais de Clientes](/docs/ai/ai-portals)
- [Encontrar o Melhor Workspace ou Portal para Compartilhar com um Cliente](/docs/ai/use-cases/client-dashboards-and-forms/finding-the-best-client-dashboard-or-portal)
- [Acompanhar Vários Clientes em um Único Portal](/docs/ai/use-cases/accounts-status/consolidated-portals-across-multiple-clients)
- [Assistente de IA](/docs/ai/ai-assistant)
