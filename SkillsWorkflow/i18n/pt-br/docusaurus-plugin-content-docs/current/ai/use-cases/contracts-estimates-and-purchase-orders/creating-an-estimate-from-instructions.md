---
id: creating-an-estimate-from-instructions
title: Criar uma Proposta a partir das Suas Instruções
description: "Veja como um gerente de contas descreve ao Assistente de IA o escopo, os entregáveis e as horas de um trabalho, confirma o que falta, revisa as linhas da proposta com preços do rate card do cliente e aprova a nova proposta."
sidebar_label: Criar uma Proposta a partir de Instruções
sidebar_position: 1
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

## Visão geral

Descreva o trabalho ao Assistente de IA como você faria para um colega: o cliente e o projeto, os entregáveis e as horas de que cada grupo de cargo precisa. O assistente prepara a proposta com uma linha por entregável e grupo de cargo, com os preços do rate card do cliente, e pergunta o que não consegue deduzir, como o Tipo Orçamento ou as datas. Você revisa as linhas e os totais em um cartão antes de a proposta ser criada.

:::note Preview
Este caso de uso está em preview e ainda não foi testado de ponta a ponta. A conversa mostra como se espera que o Assistente de IA lide com ele, e o que ele responde ou faz hoje pode ser diferente deste exemplo.
:::

A agência, o cliente, o projeto, a proposta, os grupos de cargo, as tarifas e os valores deste exemplo são ilustrativos. Os Tipos Orçamento, os rate cards e as etapas dependem da configuração da sua agência.

<Walkthrough
  subtitle="Exemplo de conversa entre um gerente de contas e o Assistente de IA."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="De uma descrição a uma proposta">
        O assistente transforma o escopo que você descreve em linhas de proposta com os preços do rate card do cliente, e pergunta antes de assumir.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Descreva o cliente, o projeto, os entregáveis e as horas.',
          'Responda ao que o assistente perguntar, como o Tipo Orçamento.',
          'Confira as linhas, o Rate Card e a Coluna Rate Card, e o total.',
          'Revise os detalhes e selecione Criar.',
          'Abra a proposta para adicionar margens, custos fixos ou custos de terceiros.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'Crie uma proposta para a campanha de primavera do Contoso Bank com estas horas.',
          'Calcule o preço deste escopo com o rate card do cliente.',
          'Adicione mais 8 horas de Design à landing page.',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'O Rate Card e a Coluna Rate Card vêm do cliente. Indique outros se esta proposta precisar.',
          'O valor de cada linha é o número de horas multiplicado pela Tabela do grupo de cargo.',
          'O assistente pede a sua aprovação antes de criar a proposta. Selecione Negar para alterá-la primeiro.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Você">
    <p>Crie uma proposta para o Contoso Bank, Spring Savings Campaign. Eles precisam de um key visual, seis posts para redes sociais e uma landing page.</p>
    <ul>
      <li>Key visual: 24h de Creative, 16h de Design.</li>
      <li>Posts para redes sociais: 24h de Design, 12h de Copywriting.</li>
      <li>Landing page: 16h de Creative, 20h de Design, 12h de Copywriting.</li>
      <li>Mais 16h de Accounts para o trabalho todo.</li>
    </ul>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>Vou calcular os preços com o rate card <strong>Contoso Bank 2026</strong>, coluna <strong>Standard</strong>, que está definido no cliente. Qual Tipo Orçamento devo usar?</p>
    <Walkthrough.Choices label="Tipo Orçamento" options={['Campaign', 'Retainer', 'One-off']} />
    <p><strong>Como interpretei sua pergunta</strong></p>
    <ul>
      <li>Assumido: a proposta vai de 1º de novembro de 2026 a 31 de março de 2027, as datas do projeto Spring Savings Campaign.</li>
      <li>Assumido: as horas de Accounts ficam em uma linha própria, Account Management.</li>
    </ul>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Campaign.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.DataTable
      columns={['Entregável · Grupo de Cargo', 'Horas', 'Tabela', 'Valor']}
      rows={[
        ['Key Visual · Creative', '24h', '€ 85', '€ 2.040'],
        ['Key Visual · Design', '16h', '€ 70', '€ 1.120'],
        ['Social Posts (6) · Design', '24h', '€ 70', '€ 1.680'],
        ['Social Posts (6) · Copywriting', '12h', '€ 65', '€ 780'],
        ['Landing Page · Creative', '16h', '€ 85', '€ 1.360'],
        ['Landing Page · Design', '20h', '€ 70', '€ 1.400'],
        ['Landing Page · Copywriting', '12h', '€ 65', '€ 780'],
        ['Account Management · Accounts', '16h', '€ 60', '€ 960'],
      ]}
      note="140 horas, € 10.120."
    />
    <Walkthrough.ApprovalCard
      title="Criar esta proposta"
      subtitle="Revise estes detalhes antes de eu criar."
      rows={[
        ['Cliente', 'Contoso Bank'],
        ['Projeto', 'Spring Savings Campaign'],
        ['Tipo Orçamento', 'Campaign'],
        ['Nome', 'Spring Savings Campaign'],
        ['Data de Início', '1º de novembro de 2026'],
        ['Data de Conclusão', '31 de março de 2027'],
        ['Rate Card', 'Contoso Bank 2026 · Standard'],
        ['Linhas', '8 linhas, 140h'],
        ['Total', '€ 10.120'],
      ]}
      actions={[{ label: 'Negar' }, { label: 'Criar', primary: true }]}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Revisei os detalhes e selecionei Criar.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.StatusChip status="Criado" label="2026 - 00417 · Spring Savings Campaign" />
    <p>A proposta foi criada em New, com 8 linhas e um total de € 10.120. Abra-a para adicionar margens, custos fixos ou custos de terceiros antes de enviá-la ao cliente.</p>
  </Walkthrough.Message>
</Walkthrough>

## Artigos relacionados

- [Criar Proposta](/docs/product/commercial/estimates/create-estimate)
- [Criar Tabelas de Preços](/docs/product/commercial/rates/rate-cards)
- [Criar uma Proposta a partir de um Arquivo](/docs/ai/use-cases/contracts-estimates-and-purchase-orders/creating-an-estimate-from-files)
- [Comparar Cenários de Proposta Antes de Criar Uma](/docs/ai/use-cases/contracts-estimates-and-purchase-orders/discussing-estimate-scenarios-before-creation)
- [Assistente de IA](/docs/ai/ai-assistant)
