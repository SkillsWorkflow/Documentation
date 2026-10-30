---
id: creating-an-estimate-from-instructions
title: Criar um Estimate a Partir das Suas Instruções
description: "Veja como um account manager descreve ao AI Assistant o âmbito, os entregáveis e as horas de um job, confirma o que falta, revê as linhas do estimate com preços da rate card do cliente e aprova o novo estimate."
sidebar_label: Criar um Estimate a Partir de Instruções
sidebar_position: 1
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

## Visão geral

Descreva o trabalho ao AI Assistant como o faria a um colega: o cliente e o projeto, os entregáveis e as horas de que cada grupo de cargo precisa. O assistente prepara o estimate com uma linha por entregável e grupo de cargo, com os preços da rate card do cliente, e pergunta-lhe o que não consegue deduzir, como o **Tipo Orçamento** ou as datas. Revê as linhas e os totais num cartão antes de o estimate ser criado.

:::note Preview
Este caso de uso está em preview e ainda não foi testado de ponta a ponta. A conversa mostra como se espera que o AI Assistant o trate, e o que hoje responde ou faz pode ser diferente deste exemplo.
:::

A agência, o cliente, o projeto, o estimate, os grupos de cargo, as tarifas e os valores neste exemplo são ilustrativos. Os tipos de orçamento, as rate cards e as etapas dependem da configuração da sua agência.

<Walkthrough
  subtitle="Exemplo de conversa entre um account manager e o AI Assistant."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="De uma descrição a um estimate">
        O assistente transforma o âmbito que descreve em linhas de estimate com os preços da rate card do cliente, e pergunta antes de assumir.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Descreva o cliente, o projeto, os entregáveis e as horas.',
          'Responda ao que o assistente pergunta, como o Tipo Orçamento.',
          'Confira as linhas, a Rate Card e a Coluna Rate Card, e o total.',
          'Reveja os detalhes e selecione Criar.',
          'Abra o estimate para acrescentar margens, overheads ou custos de terceiros.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'Cria um estimate para a campanha de primavera do Contoso Bank com estas horas.',
          'Calcula o preço deste âmbito com a rate card do cliente.',
          'Acrescenta mais 8 horas de Design à landing page.',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'A Rate Card e a Coluna Rate Card vêm do cliente. Indique outras se este estimate precisar.',
          'O valor de cada linha são as horas multiplicadas pela Tabela do grupo de cargo.',
          'O assistente pede a sua aprovação antes de criar o estimate. Selecione Negar para o alterar primeiro.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Você">
    <p>Cria um estimate para o Contoso Bank, Spring Savings Campaign. Precisam de um key visual, seis posts para redes sociais e uma landing page.</p>
    <ul>
      <li>Key visual: 24h de Creative, 16h de Design.</li>
      <li>Posts para redes sociais: 24h de Design, 12h de Copywriting.</li>
      <li>Landing page: 16h de Creative, 20h de Design, 12h de Copywriting.</li>
      <li>Mais 16h de Accounts para o conjunto.</li>
    </ul>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>Vou calcular os preços com a rate card <strong>Contoso Bank 2026</strong>, coluna <strong>Standard</strong>, que está definida no cliente. Que Tipo Orçamento deve usar?</p>
    <Walkthrough.Choices label="Tipo Orçamento" options={['Campaign', 'Retainer', 'One-off']} />
    <p><strong>Como interpretei a tua pergunta</strong></p>
    <ul>
      <li>Assumido: o estimate vai de 1 de novembro de 2026 a 31 de março de 2027, as datas do projeto Spring Savings Campaign.</li>
      <li>Assumido: as horas de Accounts ficam numa linha própria, Account Management.</li>
    </ul>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Campaign.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.DataTable
      columns={['Entregável · Grupo de Cargo', 'Horas', 'Tabela', 'Valor']}
      rows={[
        ['Key Visual · Creative', '24h', '85 €', '2.040 €'],
        ['Key Visual · Design', '16h', '70 €', '1.120 €'],
        ['Social Posts (6) · Design', '24h', '70 €', '1.680 €'],
        ['Social Posts (6) · Copywriting', '12h', '65 €', '780 €'],
        ['Landing Page · Creative', '16h', '85 €', '1.360 €'],
        ['Landing Page · Design', '20h', '70 €', '1.400 €'],
        ['Landing Page · Copywriting', '12h', '65 €', '780 €'],
        ['Account Management · Accounts', '16h', '60 €', '960 €'],
      ]}
      note="140 horas, 10.120 €."
    />
    <Walkthrough.ApprovalCard
      title="Criar este estimate"
      subtitle="Revê estes detalhes antes de eu o criar."
      rows={[
        ['Cliente', 'Contoso Bank'],
        ['Projeto', 'Spring Savings Campaign'],
        ['Tipo Orçamento', 'Campaign'],
        ['Nome', 'Spring Savings Campaign'],
        ['Data de Início', '1 de novembro de 2026'],
        ['Data de Conclusão', '31 de março de 2027'],
        ['Rate Card', 'Contoso Bank 2026 · Standard'],
        ['Linhas', '8 linhas, 140h'],
        ['Total', '10.120 €'],
      ]}
      actions={[{ label: 'Negar' }, { label: 'Criar', primary: true }]}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Revi os detalhes e selecionei Criar.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.StatusChip status="Criado" label="2026 - 00417 · Spring Savings Campaign" />
    <p>O estimate foi criado em New, com 8 linhas e um total de 10.120 €. Abra-o para acrescentar margens, overheads ou custos de terceiros antes de o enviar ao cliente.</p>
  </Walkthrough.Message>
</Walkthrough>

## Artigos relacionados

- [Criar um Orçamento](/docs/product/commercial/estimates/create-estimate)
- [Criar tabelas de preços](/docs/product/commercial/rates/rate-cards)
- [Criar um Estimate a Partir de um Ficheiro](/docs/ai/use-cases/contracts-estimates-and-purchase-orders/creating-an-estimate-from-files)
- [Comparar Cenários de Estimate Antes de Criar um](/docs/ai/use-cases/contracts-estimates-and-purchase-orders/discussing-estimate-scenarios-before-creation)
- [AI Assistant](/docs/ai/ai-assistant)
