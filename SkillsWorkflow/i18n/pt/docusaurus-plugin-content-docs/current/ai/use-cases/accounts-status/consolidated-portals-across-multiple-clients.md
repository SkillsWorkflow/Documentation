---
id: consolidated-portals-across-multiple-clients
title: Acompanhar Vários Clientes num Só Portal
description: "Veja como um account director pede ao AI Assistant um portal que mostre o estado, os pedidos pendentes e os problemas críticos de várias contas de clientes, com ligações para o portal próprio de cada cliente."
sidebar_label: Acompanhar Vários Clientes num Só Portal
sidebar_position: 1
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

## Visão geral

Peça ao AI Assistant uma só página que mostre todas as contas pelas quais é responsável. O assistente propõe um portal com uma linha por cliente: projetos ativos, jobs atrasados, jobs à espera do cliente e o burn do contrato, com as contas que precisam de atenção no topo e uma ligação para o portal próprio de cada cliente, quando existe. Revê a página e o assistente publica-a.

Um portal de cliente é uma página própria, servida a partir do Skills Workflow e que lê dados em tempo real através das permissões de quem a abre. Leia [Portais de Cliente](/docs/ai/ai-portals) para saber como funcionam os portais e o que ainda não está disponível.

:::note Preview
Este caso de uso está em preview e ainda não foi testado de ponta a ponta. A conversa mostra como se espera que o AI Assistant o trate, e o que hoje responde ou faz pode ser diferente deste exemplo.
:::

A agência, os clientes, os números e os endereços neste exemplo são ilustrativos.

<Walkthrough
  subtitle="Exemplo de conversa entre um account director e o AI Assistant."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="Todas as contas numa só página">
        O assistente constrói um portal com todos os seus clientes, ordenado pelo que precisa de atenção, com ligações para o portal próprio de cada cliente.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Indique os clientes que o portal deve abranger.',
          'Confira as colunas e a ordem que o assistente propõe.',
          'Reveja o endereço e selecione Publicar.',
          'Abra o portal e siga um cliente até ao portal próprio dele.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'Cria uma página com todas as minhas contas.',
          'Acrescenta a Tailspin Toys ao portal das minhas contas.',
          'Põe primeiro os clientes com jobs atrasados.',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'Cada pessoa que abre o portal vê apenas os clientes e os projetos que as suas permissões permitem.',
          'Um portal ainda não está limitado a um cliente. Qualquer utilizador com sessão iniciada que conheça o endereço pode abri-lo, por isso restrinja a pasta do portal por perfil.',
          'O assistente pede a sua aprovação antes de publicar. Selecione Negar para manter a página por publicar.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Você">
    <p>Acompanho a Northwind Coffee, o Contoso Bank e a Fabrikam Motors. Cria um portal onde eu possa ver como estão os três.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>Vou construir um portal de contas com uma linha por cliente, ordenado pelos jobs atrasados:</p>
    <Walkthrough.DataTable
      columns={['Cliente', 'Projetos ativos', 'Jobs atrasados', 'À espera do cliente', 'Burn do contrato', 'Portal']}
      rows={[
        ['Contoso Bank', '4', '3', '2', '81%', '—'],
        ['Northwind Coffee', '2', '1', '3', '62%', 'christmas-2026'],
        ['Fabrikam Motors', '3', '0', '1', '44%', '—'],
      ]}
      note="O Contoso Bank tem 81% das horas contratadas registadas e faltam dois meses para o fim do fee."
    />
    <p><strong>Como interpretei a tua pergunta</strong></p>
    <ul>
      <li>Incluído: projetos dos três clientes que não estão numa etapa de fecho, e os respetivos jobs.</li>
      <li>Assumido: o burn do contrato é a parte das horas contratadas já registada nos fees ativos de cada cliente.</li>
    </ul>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Ótimo. Publica-o.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.ApprovalCard
      title="Publicar este portal"
      subtitle="Revê o portal antes de eu o publicar."
      rows={[
        ['Clientes', 'Northwind Coffee, Contoso Bank, Fabrikam Motors'],
        ['Endereço', '/portal/accounts/anna-smith/'],
        ['Colunas', 'Projetos ativos, Jobs atrasados, À espera do cliente, Burn do contrato, Portal'],
        ['Ordem', 'Jobs atrasados, do maior para o menor número'],
      ]}
      actions={[{ label: 'Negar' }, { label: 'Publicar', primary: true }]}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Revi os detalhes e selecionei Publicar.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.StatusChip status="Publicado" label="accounts/anna-smith" />
    <p>O portal está publicado. Selecione a linha de um cliente para ver os jobs atrasados, ou o nome do portal para abrir o portal próprio da Northwind Coffee.</p>
  </Walkthrough.Message>
</Walkthrough>

## Artigos relacionados

- [Portais de Cliente](/docs/ai/ai-portals)
- [Dar a um Cliente um Portal Online com o Estado do Projeto](/docs/ai/use-cases/client-dashboards-and-forms/providing-clients-with-an-online-project-status-portal)
- [Ver os Jobs Críticos dos Seus Clientes](/docs/ai/use-cases/accounts-status/monitoring-critical-activities-across-accounts)
- [AI Assistant](/docs/ai/ai-assistant)
