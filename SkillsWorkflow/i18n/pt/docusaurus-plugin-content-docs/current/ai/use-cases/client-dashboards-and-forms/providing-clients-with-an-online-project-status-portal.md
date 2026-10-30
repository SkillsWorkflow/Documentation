---
id: providing-clients-with-an-online-project-status-portal
title: Dar a um Cliente um Portal Online com o Estado do Projeto
description: "Veja como um account manager pede ao AI Assistant um portal de cliente com o estado de um projeto, o burn do contrato, os riscos e os pedidos pendentes, revê o que a página mostra e publica-a."
sidebar_label: Dar a um Cliente um Portal com o Estado do Projeto
sidebar_position: 1
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

:::preview
Este caso de uso está em preview, a conversa mostra como se espera que o AI Assistant o trate, e o que hoje responde ou faz pode ser diferente deste exemplo.
:::

## Visão geral

Diga ao AI Assistant para que cliente e projeto é o portal e o que deve mostrar. O assistente propõe as secções da página e os dados por trás de cada uma: o estado do projeto, o burn do contrato, os jobs em risco e os pedidos que ainda estão à espera de alguém. Revê a página, e o assistente publica-a como um portal de cliente com o seu próprio endereço, pronto a partilhar.

Um portal de cliente é uma página própria, servida a partir do Skills Workflow e que lê dados em tempo real. Quem o abre inicia sessão e vê os dados que as suas próprias permissões permitem. Leia [Portais de Cliente](/docs/ai/ai-portals) para saber como funcionam os portais e o que ainda não está disponível.

A agência, o cliente, o projeto, os números e o endereço neste exemplo são ilustrativos.

<Walkthrough
  subtitle="Exemplo de conversa entre um account manager e o AI Assistant."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="De um pedido a uma página que o cliente abre">
        O assistente constrói um portal à volta do projeto que interessa ao cliente, com o estado, o burn, os riscos e os pedidos pendentes em tempo real.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Indique o cliente, o projeto e o que o portal deve mostrar.',
          'Confira as secções e os dados que o assistente propõe.',
          'Peça alterações às secções antes de publicar.',
          'Reveja o endereço e selecione Publicar.',
          'Abra o portal e confira-o como um utilizador que o deve ver.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'Cria uma página de estado para a Northwind Coffee com o projeto de Natal deles.',
          'Dá ao Contoso Bank uma vista online do burn do contrato e das aprovações pendentes.',
          'Acrescenta os jobs em risco ao portal da Northwind.',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'Um portal lê os dados através das permissões de quem o abre. Quem não vê um projeto no Skills Workflow também não o vê no portal.',
          'Um portal ainda não está limitado ao seu cliente. Qualquer utilizador com sessão iniciada que conheça o endereço pode abri-lo, por isso restrinja as pastas do portal por perfil.',
          'O endereço tem duas partes, o cliente e o portal, em letras minúsculas, números e hífenes.',
          'O assistente pede a sua aprovação antes de publicar. Selecione Negar para manter a página por publicar.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Você">
    <p>A Northwind Coffee quer acompanhar online o projeto Christmas 2026. Cria um portal com o estado do projeto, o burn do contrato, os riscos e os pedidos que estão à espera deles.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>Vou construir um portal para o <strong>Northwind Christmas 2026</strong> com quatro secções:</p>
    <Walkthrough.DataTable
      columns={['Secção', 'O que mostra']}
      rows={[
        ['Estado do projeto', 'Jobs por etapa, entregues este mês e com conclusão nas próximas duas semanas'],
        ['Burn do contrato', 'Horas contratadas, planeadas e registadas, e a percentagem de burn'],
        ['Em risco', 'Jobs atrasados e jobs com conclusão esta semana que ainda não estão em produção'],
        ['À espera de si', 'Jobs à espera de aprovação ou feedback do cliente, com os dias de espera'],
      ]}
    />
    <p>O burn deve mostrar só horas, ou horas e valores?</p>
    <Walkthrough.Choices label="Burn do contrato" options={['Só horas', 'Horas e valores']} />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Só horas. E acrescenta o logótipo do cliente no topo.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.ApprovalCard
      title="Publicar este portal"
      subtitle="Revê o portal antes de eu o publicar."
      rows={[
        ['Cliente', 'Northwind Coffee'],
        ['Projeto', 'Northwind Christmas 2026'],
        ['Endereço', '/portal/northwind-coffee/christmas-2026/'],
        ['Secções', 'Estado do projeto, Burn do contrato (horas), Em risco, À espera de si'],
        ['Cabeçalho', 'Logótipo da Northwind Coffee'],
      ]}
      actions={[{ label: 'Negar' }, { label: 'Publicar', primary: true }]}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Revi os detalhes e selecionei Publicar.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.StatusChip status="Publicado" label="northwind-coffee/christmas-2026" />
    <p>O portal está publicado. Hoje mostra 14 jobs, 9 entregues, 62% das horas contratadas registadas, 2 jobs em risco e 3 jobs à espera de aprovação do cliente.</p>
    <p>Antes de partilhar o endereço, restrinja a pasta <strong>northwind-coffee</strong> aos perfis que a devem abrir.</p>
  </Walkthrough.Message>
</Walkthrough>

## Artigos relacionados

- [Portais de Cliente](/docs/ai/ai-portals)
- [Encontrar o Melhor Workspace ou Portal para Partilhar com um Cliente](/docs/ai/use-cases/client-dashboards-and-forms/finding-the-best-client-dashboard-or-portal)
- [Acompanhar Vários Clientes num Só Portal](/docs/ai/use-cases/accounts-status/consolidated-portals-across-multiple-clients)
- [AI Assistant](/docs/ai/ai-assistant)
