---
id: consolidated-portals-across-multiple-clients
title: Acompanhar Vários Clientes em um Único Portal
description: "Veja como um diretor de contas pede ao Assistente de IA um único portal que mostre o status, os pedidos pendentes e os problemas críticos de várias contas de clientes, com links para o portal próprio de cada cliente."
sidebar_label: Acompanhar Vários Clientes em um Único Portal
sidebar_position: 1
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

## Visão geral

Peça ao Assistente de IA uma única página que mostre todas as contas pelas quais você é responsável. O assistente propõe um portal com uma linha por cliente: projetos ativos, Atividades atrasadas, Atividades aguardando o cliente e o burn do contrato, com as contas que precisam de atenção no topo e um link para o portal próprio de cada cliente, quando existir. Você revisa a página e o assistente a publica.

Um portal de cliente é uma página própria, servida pelo Skills Workflow e que lê dados em tempo real com as permissões de quem o abre. Leia [Portais de Clientes](/docs/ai/ai-portals) para saber como os portais funcionam e o que ainda não está disponível.

:::note Preview
Este caso de uso está em preview e ainda não foi testado de ponta a ponta. A conversa mostra como se espera que o Assistente de IA lide com ele, e o que ele responde ou faz hoje pode ser diferente deste exemplo.
:::

A agência, os clientes, os números e os endereços deste exemplo são ilustrativos.

<Walkthrough
  subtitle="Exemplo de conversa entre um diretor de contas e o Assistente de IA."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="Todas as contas em uma única página">
        O assistente monta um único portal com os seus clientes, ordenado pelo que precisa de atenção, e com links para o portal próprio de cada cliente.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Informe os clientes que o portal deve cobrir.',
          'Confira as colunas e a ordem que o assistente propõe.',
          'Revise o endereço e selecione Publicar.',
          'Abra o portal e siga um cliente até o portal próprio dele.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'Crie uma página com todas as minhas contas.',
          'Adicione a Tailspin Toys ao meu portal de contas.',
          'Coloque primeiro os clientes com Atividades atrasadas.',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'Cada pessoa que abre o portal vê só os clientes e os projetos que as suas permissões permitem.',
          'Um portal ainda não fica restrito a um cliente. Qualquer usuário com login que saiba o endereço pode abri-lo, então restrinja a pasta do portal por perfil.',
          'O assistente pede a sua aprovação antes de publicar. Selecione Negar para manter a página sem publicar.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Você">
    <p>Eu cuido da Northwind Coffee, do Contoso Bank e da Fabrikam Motors. Crie um único portal onde eu possa ver como estão os três.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>Vou montar um portal de contas com uma linha por cliente, ordenado por Atividades atrasadas:</p>
    <Walkthrough.DataTable
      columns={['Cliente', 'Projetos ativos', 'Atividades atrasadas', 'Aguardando o cliente', 'Burn do contrato', 'Portal']}
      rows={[
        ['Contoso Bank', '4', '3', '2', '81%', '—'],
        ['Northwind Coffee', '2', '1', '3', '62%', 'christmas-2026'],
        ['Fabrikam Motors', '3', '0', '1', '44%', '—'],
      ]}
      note="O Contoso Bank tem 81% das horas contratadas registradas, faltando dois meses para o fim do contrato."
    />
    <p><strong>Como interpretei sua pergunta</strong></p>
    <ul>
      <li>Incluído: projetos dos três clientes que não estão em uma etapa de encerramento, e as Atividades deles.</li>
      <li>Assumido: o burn do contrato é a parcela das horas contratadas já registradas nos contratos ativos de cada cliente.</li>
    </ul>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Ótimo. Publique.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.ApprovalCard
      title="Publicar este portal"
      subtitle="Revise o portal antes de eu publicá-lo."
      rows={[
        ['Clientes', 'Northwind Coffee, Contoso Bank, Fabrikam Motors'],
        ['Endereço', '/portal/accounts/anna-smith/'],
        ['Colunas', 'Projetos ativos, Atividades atrasadas, Aguardando o cliente, Burn do contrato, Portal'],
        ['Ordem', 'Atividades atrasadas, do maior para o menor número'],
      ]}
      actions={[{ label: 'Negar' }, { label: 'Publicar', primary: true }]}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Revisei os detalhes e selecionei Publicar.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.StatusChip status="Publicado" label="accounts/anna-smith" />
    <p>O portal está publicado. Selecione a linha de um cliente para ver as Atividades atrasadas dele, ou o nome do portal para abrir o portal próprio da Northwind Coffee.</p>
  </Walkthrough.Message>
</Walkthrough>

## Artigos relacionados

- [Portais de Clientes](/docs/ai/ai-portals)
- [Oferecer a um Cliente um Portal Online com o Status do Projeto](/docs/ai/use-cases/client-dashboards-and-forms/providing-clients-with-an-online-project-status-portal)
- [Verificar as Atividades Críticas dos Seus Clientes](/docs/ai/use-cases/accounts-status/monitoring-critical-activities-across-accounts)
- [Assistente de IA](/docs/ai/ai-assistant)
