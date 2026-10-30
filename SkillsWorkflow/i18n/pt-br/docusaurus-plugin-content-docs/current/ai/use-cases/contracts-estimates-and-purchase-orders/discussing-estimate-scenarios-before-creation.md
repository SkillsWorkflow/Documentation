---
id: discussing-estimate-scenarios-before-creation
title: Comparar Cenários de Proposta Antes de Criar Uma
description: "Veja como um gerente de contas pede ao Assistente de IA que compare um escopo completo, um escopo reduzido e uma tarifa com desconto em relação ao orçamento do cliente, e cria a proposta a partir do cenário escolhido."
sidebar_label: Comparar Cenários de Proposta
sidebar_position: 4
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

:::preview
Este caso de uso está em preview, a conversa mostra como se espera que o Assistente de IA lide com ele, e o que ele responde ou faz hoje pode ser diferente deste exemplo.
:::

## Visão geral

Antes de criar uma proposta, peça ao Assistente de IA que compare as opções que você está avaliando: um escopo diferente, menos horas para um grupo de cargo ou outra coluna do rate card do cliente. O assistente calcula o preço de cada cenário, mostra as horas e o total lado a lado e diz como cada um se encaixa no orçamento do cliente. Quando você escolhe um, ele prepara a proposta a partir dele para a sua aprovação.

A agência, o cliente, o projeto, as colunas do rate card, as tarifas e os valores deste exemplo são ilustrativos. Os rate cards e as colunas deles dependem da configuração da sua agência.

<Walkthrough
  subtitle="Exemplo de conversa entre um gerente de contas e o Assistente de IA."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="Opções lado a lado">
        O assistente calcula o preço de cada cenário com o rate card do cliente e os compara com o orçamento, para que você escolha antes de qualquer coisa ser criada.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Descreva o escopo e o orçamento do cliente.',
          'Indique os cenários a comparar.',
          'Leia as horas, o total e a diferença em relação ao orçamento de cada um.',
          'Escolha um cenário e peça ao assistente que crie a proposta.',
          'Revise os detalhes e selecione Criar.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'E se tirarmos a landing page?',
          'Calcule o preço com a coluna Discount 10% em vez disso.',
          'Qual opção cabe em um orçamento de € 9.500?',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'Os cenários só são comparados no chat. Nada é criado até você aprovar uma proposta.',
          'Cada cenário é precificado com o Rate Card e a Coluna Rate Card que você indicar, ou com os do cliente.',
          'Peça quantos cenários precisar e altere um de cada vez para ver o efeito.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Você">
    <p>O Contoso Bank tem um orçamento de € 9.500 para a Spring Savings Campaign: key visual, seis posts para redes sociais e uma landing page, 140 horas no total. Compare o escopo completo com as tarifas Standard, uma versão com três posts e sem landing page, e o escopo completo com a coluna Discount 10%.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>Só o escopo completo com desconto cabe no orçamento:</strong></p>
    <Walkthrough.DataTable
      columns={['Cenário', 'Horas', 'Total', 'Em relação a € 9.500']}
      rows={[
        ['A · Escopo completo, Standard', '140h', '€ 10.120', '€ 620 acima'],
        ['B · Três posts, sem landing page, Standard', '74h', '€ 5.350', '€ 4.150 abaixo'],
        ['C · Escopo completo, Discount 10%', '140h', '€ 9.108', '€ 392 abaixo'],
      ]}
      note="Tarifas do rate card Contoso Bank 2026."
    />
    <ul>
      <li>A entrega tudo, € 620 acima do orçamento.</li>
      <li>B tem cerca de metade das horas, e a campanha fica sem landing page.</li>
      <li>C entrega tudo com 10% menos receita pelas mesmas horas.</li>
    </ul>
    <p><strong>Como interpretei sua pergunta</strong></p>
    <ul>
      <li>Assumido: em B, as horas do key visual e de Accounts continuam as mesmas, os posts para redes sociais ficam com metade das horas e as horas da landing page são removidas.</li>
    </ul>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Vamos com a C. Crie a proposta.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.ApprovalCard
      title="Criar esta proposta"
      subtitle="Revise estes detalhes antes de eu criar."
      rows={[
        ['Cliente', 'Contoso Bank'],
        ['Projeto', 'Spring Savings Campaign'],
        ['Tipo Orçamento', 'Campaign'],
        ['Nome', 'Spring Savings Campaign'],
        ['Rate Card', 'Contoso Bank 2026 · Discount 10%'],
        ['Linhas', '8 linhas, 140h'],
        ['Total', '€ 9.108'],
      ]}
      actions={[{ label: 'Negar' }, { label: 'Criar', primary: true }]}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Revisei os detalhes e selecionei Criar.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.StatusChip status="Criado" label="2026 - 00417 · Spring Savings Campaign" />
    <p>A proposta foi criada em New, com um total de € 9.108.</p>
  </Walkthrough.Message>
</Walkthrough>

## Artigos relacionados

- [Criar uma Proposta a partir das Suas Instruções](/docs/ai/use-cases/contracts-estimates-and-purchase-orders/creating-an-estimate-from-instructions)
- [Criar Tabelas de Preços](/docs/product/commercial/rates/rate-cards)
- [Criar Proposta](/docs/product/commercial/estimates/create-estimate)
- [Assistente de IA](/docs/ai/ai-assistant)
