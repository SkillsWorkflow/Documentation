---
id: duplicating-estimates-for-the-next-years-of-a-fee
title: Copiar o Fee de um Cliente para o Ano Seguinte
description: "Veja como um account manager renova o retainer de um cliente pedindo ao AI Assistant para copiar o Fee deste ano, com o seu estimate, para o próximo ano."
sidebar_label: Copiar um Fee para o Ano Seguinte
sidebar_position: 5
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

## Visão geral

Quando um cliente renova o retainer, peça ao AI Assistant o Fee deste ano e o seu estimate, e depois peça-lhe para os copiar para o próximo ano. O assistente pergunta o que a cópia deve incluir e mostra o nome e as datas do novo Fee num cartão. Nada é criado até selecionar Copiar.

O novo Fee e o seu estimate são criados como rascunhos, com datas do novo ano, e o estimate recebe o novo ano no nome. O assistente indica o que não foi copiado e dá-lhe um botão para abrir o novo estimate.

A agência, o cliente, os Fees, os estimates, os números, os valores e as etapas neste exemplo são ilustrativos. Os documentos que vê dependem dos seus acessos.

<Walkthrough
  subtitle="Exemplo de conversa entre um account manager e o AI Assistant."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="Do Fee deste ano ao do próximo">
        O assistente copia o Fee e o seu estimate para o novo ano num só passo, depois de rever a cópia num cartão.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Peça o Fee do cliente para este ano e confirme o seu estimate.',
          'Peça ao assistente para copiar o Fee para o próximo ano.',
          'Confirme as datas e os novos nomes na resposta do assistente.',
          'Escolha o que a cópia inclui: Descrição, Equipa ou Campos personalizados, e selecione Continuar.',
          'No cartão Copiar contrato, confirme o nome e as datas. Selecione Editar detalhes para os alterar.',
          'Selecione Copiar e abra o novo estimate.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'Mostra-me o fee que temos com a Orvella Tea este ano e o seu estimate.',
          'Copia o fee Orvella Tea Retainer 2026 para o próximo ano.',
          'Copia o fee e o seu estimate para janeiro–dezembro de 2027.',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'O novo Fee e os seus estimates são criados como rascunhos.',
          'Cada estimate avança o mesmo período que o Fee, com as suas linhas, e recebe o novo ano no nome.',
          'Os ficheiros, o feed, o histórico de aprovações, as divisões mensais e as condições de faturação não são copiados.',
          'Se o Fee tiver mais de um estimate, o assistente pergunta quais copiar.',
          'Se já existir um contrato com o novo nome, o assistente pergunta se o quer usar ou escolher outro nome.',
          'Se a cópia falhar, nada é criado e o assistente explica porquê.',
          'Nada é criado até selecionar Copiar. Selecione Descartar para parar.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Você">
    <p>A Orvella Tea acabou de renovar o retainer para 2027. Mostra-me o fee que temos com eles este ano e o seu estimate.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>Encontrei um fee de 2026 e o estimate associado para a Orvella Tea, no valor de <strong>96.000 €</strong> sem impostos. O estimate está <strong>Approved</strong>, enquanto o contrato do fee continua em <strong>New</strong>.</p>
    <ul>
      <li><strong>Fee:</strong> 2026 - 00031 · Orvella Tea Retainer 2026 · 96.000 €</li>
      <li><strong>Estimate:</strong> 2026 - 00118 · Orvella Tea Retainer 2026 · 96.000 € · Approved</li>
    </ul>
    <Walkthrough.Actions items={[{ label: 'Quais são as condições de faturação deste fee?' }, { label: 'Mostra o custo e a margem do estimate' }]} />
    <p><strong>Como interpretei a tua pergunta</strong></p>
    <ul>
      <li>Incluído: os estimates da Orvella Tea de 1 de janeiro a 26 de novembro de 2026 e o contrato de fee associado.</li>
      <li>Assumido: “este ano” significa 2026; “fee” significa o contrato do retainer, não uma fatura.</li>
    </ul>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Copia o fee Orvella Tea Retainer 2026 para o próximo ano.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>Vou criar uma cópia para 2027 do Orvella Tea Retainer 2026, com datas de 1 de janeiro a 31 de dezembro de 2027, com o seu único estimate renomeado para <strong>Orvella Tea Retainer 2027</strong>.</p>
    <Walkthrough.ApprovalCard
      title="Orvella Tea Retainer 2026"
      subtitle="2026 - 00031 · Orvella Tea · New · Termina a 31/12/2026"
      rows={[
        ['Data de início', '01/01/2026'],
        ['Total', '96.000,00'],
      ]}
      actions={[]}
    />
    <Walkthrough.Choices
      label="O que deve a cópia incluir? Escolhe as que quiseres"
      options={['Descrição', 'Equipa', 'Campos personalizados']}
    />
    <Walkthrough.Actions items={[{ label: 'Continuar', primary: true }]} />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Selecionei Descrição, Equipa e Campos personalizados, e depois Continuar.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.ApprovalCard
      title="Copiar contrato"
      rows={[
        ['Contrato', 'Orvella Tea Retainer 2026'],
        ['Nome', 'Orvella Tea Retainer 2027'],
        ['Data de início', '01/01/2027'],
        ['Data de fim', '31/12/2027'],
        ['Orçamentos', 'Orvella Tea Retainer 2026 → Orvella Tea Retainer 2027. Cada um avança o mesmo período que o contrato, com as linhas.'],
        ['É copiado', 'Cada orçamento com as suas linhas e detalhes'],
        ['Inclui', 'Descrição, Equipa, Campos personalizados'],
      ]}
      actions={[{ label: 'Editar detalhes' }, { label: 'Descartar' }, { label: 'Copiar', primary: true }]}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Revi os detalhes e selecionei Copiar.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>Criei o contrato de 2027 como <strong>rascunho</strong>: <strong>Orvella Tea Retainer 2027</strong>, com datas de 1 de janeiro a 31 de dezembro de 2027. O estimate copiado, <strong>Orvella Tea Retainer 2027</strong>, também é um <strong>rascunho</strong>.</p>
    <p>Os ficheiros, o feed e o histórico de aprovações não foram copiados; as divisões mensais e as condições de faturação do estimate também não.</p>
    <Walkthrough.ApprovalCard
      title="Orvella Tea Retainer 2027"
      subtitle="Contrato · Orvella Tea · Rascunho · Termina a 31/12/2027"
      rows={[
        ['Data de início', '01/01/2027'],
        ['Total', '96.000,00'],
      ]}
      actions={[]}
    />
    <Walkthrough.ApprovalCard
      title="Orvella Tea Retainer 2027"
      subtitle="Estimate · Orvella Tea · Rascunho · Termina a 31/12/2027"
      rows={[
        ['Contrato', 'Orvella Tea Retainer 2027'],
        ['Data de início', '01/01/2027'],
        ['Total', '96.000,00 €'],
      ]}
      actions={[]}
    />
    <Walkthrough.Actions items={[{ label: 'Abrir o estimate de 2027' }]} />
    <p>✓ Contrato criado com sucesso: <strong>Orvella Tea Retainer 2027</strong>.</p>
  </Walkthrough.Message>
</Walkthrough>

## Artigos relacionados

- [Fees](/docs/product/commercial/fees)
- [Create Estimate](/docs/product/commercial/estimates/create-estimate)
- [Document Agent](/docs/ai/agents/document-agent)
