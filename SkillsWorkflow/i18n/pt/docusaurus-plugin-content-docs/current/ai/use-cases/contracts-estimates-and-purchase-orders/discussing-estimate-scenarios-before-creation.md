---
id: discussing-estimate-scenarios-before-creation
title: Comparar Cenários de Estimate Antes de Criar um
description: "Veja como um account manager pede ao AI Assistant para comparar o âmbito completo, um âmbito reduzido e uma tarifa com desconto face ao orçamento de um cliente, e cria o estimate a partir do cenário escolhido."
sidebar_label: Comparar Cenários de Estimate
sidebar_position: 4
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

:::preview
Este caso de uso está em preview, a conversa mostra como se espera que o AI Assistant o trate, e o que hoje responde ou faz pode ser diferente deste exemplo.
:::

## Visão geral

Antes de criar um estimate, peça ao AI Assistant para comparar as opções que está a ponderar: um âmbito diferente, menos horas para um grupo de cargo ou outra coluna da rate card do cliente. O assistente calcula o preço de cada cenário, mostra as horas e o total lado a lado e diz-lhe como cada um se enquadra no orçamento do cliente. Quando escolher um, prepara o estimate a partir dele para a sua aprovação.

A agência, o cliente, o projeto, as colunas da rate card, as tarifas e os valores neste exemplo são ilustrativos. As rate cards e as suas colunas dependem da configuração da sua agência.

<Walkthrough
  subtitle="Exemplo de conversa entre um account manager e o AI Assistant."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="Opções lado a lado">
        O assistente calcula o preço de cada cenário com a rate card do cliente e compara-os com o orçamento, para que escolha antes de ser criado o que quer que seja.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Descreva o âmbito e o orçamento do cliente.',
          'Indique os cenários a comparar.',
          'Leia as horas, o total e a diferença face ao orçamento de cada um.',
          'Escolha um cenário e peça ao assistente para criar o estimate.',
          'Reveja os detalhes e selecione Criar.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'E se tirarmos a landing page?',
          'Calcula antes o preço com a coluna Discount 10%.',
          'Que opção cabe num orçamento de 9.500 €?',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'Os cenários só são comparados no chat. Nada é criado até aprovar um estimate.',
          'Cada cenário tem o preço calculado com a Rate Card e a Coluna Rate Card que indicar, ou com as do cliente.',
          'Peça os cenários de que precisar e altere um de cada vez para ver o efeito.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Você">
    <p>O Contoso Bank tem um orçamento de 9.500 € para a Spring Savings Campaign: key visual, seis posts para redes sociais e uma landing page, 140 horas no total. Compara o âmbito completo com as tarifas Standard, uma versão com três posts e sem landing page, e o âmbito completo com a coluna Discount 10%.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>Só o âmbito completo com desconto cabe no orçamento:</strong></p>
    <Walkthrough.DataTable
      columns={['Cenário', 'Horas', 'Total', 'Face a 9.500 €']}
      rows={[
        ['A · Âmbito completo, Standard', '140h', '10.120 €', '620 € acima'],
        ['B · Três posts, sem landing page, Standard', '74h', '5.350 €', '4.150 € abaixo'],
        ['C · Âmbito completo, Discount 10%', '140h', '9.108 €', '392 € abaixo'],
      ]}
      note="Tarifas da rate card Contoso Bank 2026."
    />
    <ul>
      <li>O A entrega tudo, 620 € acima do orçamento.</li>
      <li>O B tem cerca de metade das horas, e a campanha fica sem landing page.</li>
      <li>O C entrega tudo com menos 10% de receita para as mesmas horas.</li>
    </ul>
    <p><strong>Como interpretei a tua pergunta</strong></p>
    <ul>
      <li>Assumido: no B, as horas do key visual e de Accounts mantêm-se, os posts para redes sociais ficam com metade das horas e as horas da landing page são retiradas.</li>
    </ul>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Avança com o C. Cria o estimate.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.ApprovalCard
      title="Criar este estimate"
      subtitle="Revê estes detalhes antes de eu o criar."
      rows={[
        ['Cliente', 'Contoso Bank'],
        ['Projeto', 'Spring Savings Campaign'],
        ['Tipo Orçamento', 'Campaign'],
        ['Nome', 'Spring Savings Campaign'],
        ['Rate Card', 'Contoso Bank 2026 · Discount 10%'],
        ['Linhas', '8 linhas, 140h'],
        ['Total', '9.108 €'],
      ]}
      actions={[{ label: 'Negar' }, { label: 'Criar', primary: true }]}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Revi os detalhes e selecionei Criar.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.StatusChip status="Criado" label="2026 - 00417 · Spring Savings Campaign" />
    <p>O estimate foi criado em New, com um total de 9.108 €.</p>
  </Walkthrough.Message>
</Walkthrough>

## Artigos relacionados

- [Criar um Estimate a Partir das Suas Instruções](/docs/ai/use-cases/contracts-estimates-and-purchase-orders/creating-an-estimate-from-instructions)
- [Criar tabelas de preços](/docs/product/commercial/rates/rate-cards)
- [Criar um Orçamento](/docs/product/commercial/estimates/create-estimate)
- [AI Assistant](/docs/ai/ai-assistant)
