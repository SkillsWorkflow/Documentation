---
id: duplicating-estimates-for-the-next-years-of-a-fee
title: Copiar o Contrato de um Cliente para o Ano Seguinte
description: "Veja como um gerente de contas renova o retainer de um cliente pedindo ao Assistente de IA que copie o Contrato deste ano, com a sua proposta, para o próximo ano."
sidebar_label: Copiar um Contrato para o Ano Seguinte
sidebar_position: 5
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

## Visão geral

Quando um cliente renova o retainer, peça ao Assistente de IA o Contrato deste ano e a sua proposta, e depois peça que ele os copie para o próximo ano. O assistente pergunta o que a cópia deve incluir e mostra o nome e as datas do novo Contrato em um cartão. Nada é criado até você selecionar Copiar.

O novo Contrato e a sua proposta são criados como rascunhos, com datas do novo ano, e a proposta recebe o novo ano no nome. O assistente informa o que não foi copiado e oferece um botão para abrir a nova proposta.

A agência, o cliente, os Contratos, as propostas, os números, os valores e as etapas deste exemplo são ilustrativos. Os documentos que você vê dependem dos seus acessos.

<Walkthrough
  subtitle="Exemplo de conversa entre um gerente de contas e o Assistente de IA."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="Do Contrato deste ano ao do próximo">
        O assistente copia o Contrato e a sua proposta para o novo ano de uma só vez, depois que você revisa a cópia em um cartão.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Peça o Contrato do cliente para este ano e confira a sua proposta.',
          'Peça ao assistente que copie o Contrato para o próximo ano.',
          'Confira as datas e os novos nomes na resposta do assistente.',
          'Escolha o que a cópia inclui: Descrição, Equipe ou Campos personalizados, e selecione Continuar.',
          'No cartão Copiar contrato, confira o nome e as datas. Selecione Editar detalhes para alterá-los.',
          'Selecione Copiar e abra a nova proposta.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'Mostre o contrato que temos com a Orvella Tea este ano e a sua proposta.',
          'Copie o contrato Orvella Tea Retainer 2026 para o próximo ano.',
          'Copie o contrato e a sua proposta para janeiro–dezembro de 2027.',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'O novo Contrato e as suas propostas são criados como rascunhos.',
          'Cada proposta avança o mesmo período que o Contrato, com as suas linhas, e recebe o novo ano no nome.',
          'Os arquivos, o feed, o histórico de aprovações, as divisões mensais e as condições de faturamento não são copiados.',
          'Se o Contrato tiver mais de uma proposta, o assistente pergunta quais copiar.',
          'Se já existir um contrato com o novo nome, o assistente pergunta se você quer usá-lo ou escolher outro nome.',
          'Se a cópia falhar, nada é criado e o assistente explica o motivo.',
          'Nada é criado até você selecionar Copiar. Selecione Descartar para parar.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Você">
    <p>A Orvella Tea acabou de renovar o retainer para 2027. Mostre o contrato que temos com eles este ano e a sua proposta.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>Encontrei um contrato de 2026 e a proposta associada para a Orvella Tea, no valor de <strong>€ 96.000</strong> sem impostos. O contrato e a proposta estão ambos em <strong>Approved</strong>.</p>
    <ul>
      <li><strong>Contrato:</strong> 2026 - 00031 · Orvella Tea Retainer 2026 · € 96.000 · Approved</li>
      <li><strong>Proposta:</strong> 2026 - 00118 · Orvella Tea Retainer 2026 · € 96.000 · Approved</li>
    </ul>
    <Walkthrough.Actions items={[{ label: 'Quais são as condições de faturamento deste contrato?' }, { label: 'Mostre o custo e a margem da proposta' }]} />
    <p><strong>Como interpretei sua pergunta</strong></p>
    <ul>
      <li>Incluído: as propostas da Orvella Tea de 1º de janeiro a 26 de novembro de 2026 e o contrato vinculado.</li>
      <li>Assumido: “este ano” significa 2026; “contrato” significa o contrato do retainer, não uma fatura.</li>
    </ul>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Copie o contrato Orvella Tea Retainer 2026 para o próximo ano.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>Vou criar uma cópia para 2027 do Orvella Tea Retainer 2026, com datas de 1º de janeiro a 31 de dezembro de 2027, com a sua única proposta renomeada para <strong>Orvella Tea Retainer 2027</strong>.</p>
    <Walkthrough.ApprovalCard
      title="Orvella Tea Retainer 2026"
      subtitle="2026 - 00031 · Orvella Tea · Approved · Vence em 31/12/2026"
      rows={[
        ['Data de início', '01/01/2026'],
        ['Total', '96.000,00'],
      ]}
      actions={[]}
    />
    <Walkthrough.Choices
      label="O que a cópia deve incluir? Escolha quantas quiser"
      options={['Descrição', 'Equipe', 'Campos personalizados']}
    />
    <Walkthrough.Actions items={[{ label: 'Continuar', primary: true }]} />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Selecionei Descrição, Equipe e Campos personalizados, e depois Continuar.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.ApprovalCard
      title="Copiar contrato"
      rows={[
        ['Contrato', 'Orvella Tea Retainer 2026'],
        ['Nome', 'Orvella Tea Retainer 2027'],
        ['Data de início', '01/01/2027'],
        ['Data de fim', '31/12/2027'],
        ['Propostas', 'Orvella Tea Retainer 2026 → Orvella Tea Retainer 2027. Cada uma avança o mesmo período que o contrato, com as linhas.'],
        ['É copiado', 'Cada proposta com suas linhas e detalhes'],
        ['Inclui', 'Descrição, Equipe, Campos personalizados'],
      ]}
      actions={[{ label: 'Editar detalhes' }, { label: 'Descartar' }, { label: 'Copiar', primary: true }]}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Revisei os detalhes e selecionei Copiar.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>Criei o contrato de 2027 como <strong>rascunho</strong>: <strong>Orvella Tea Retainer 2027</strong>, com datas de 1º de janeiro a 31 de dezembro de 2027. A proposta copiada, <strong>Orvella Tea Retainer 2027</strong>, também é um <strong>rascunho</strong>.</p>
    <p>Os arquivos, o feed e o histórico de aprovações não foram copiados; as divisões mensais e as condições de faturamento da proposta também não.</p>
    <Walkthrough.ApprovalCard
      title="Orvella Tea Retainer 2027"
      subtitle="Contrato · Orvella Tea · Rascunho · Vence em 31/12/2027"
      rows={[
        ['Data de início', '01/01/2027'],
        ['Total', '96.000,00'],
      ]}
      actions={[]}
    />
    <Walkthrough.ApprovalCard
      title="Orvella Tea Retainer 2027"
      subtitle="Proposta · Orvella Tea · Rascunho · Vence em 31/12/2027"
      rows={[
        ['Contrato', 'Orvella Tea Retainer 2027'],
        ['Data de início', '01/01/2027'],
        ['Total', '€ 96.000,00'],
      ]}
      actions={[]}
    />
    <Walkthrough.Actions items={[{ label: 'Abrir a proposta de 2027' }]} />
    <p>✓ Contrato criado com sucesso: <strong>Orvella Tea Retainer 2027</strong>.</p>
  </Walkthrough.Message>
</Walkthrough>

## Artigos relacionados

- [Contratos](/docs/product/commercial/fees)
- [Criar Proposta](/docs/product/commercial/estimates/create-estimate)
- [Agente de Documentos](/docs/ai/agents/document-agent)
