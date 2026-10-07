---
id: duplicating-estimates-for-the-next-years-of-a-fee
title: Copiar o Estimate de um Fee para o Ano Seguinte com Inflação
description: "Veja como um account manager pede ao AI Assistant para copiar o estimate do ano anterior de um Fee plurianual para um novo ano, com novas datas e uma taxa de inflação, e depois ativar a cópia."
sidebar_label: Copiar um Estimate para o Ano Seguinte
sidebar_position: 5
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

## Visão geral

Peça ao AI Assistant para copiar um estimate de um ano anterior de um Fee plurianual para um novo ano. A cópia fica no mesmo Fee. Indique as novas datas e uma taxa de inflação, escolha o que mais quer copiar e aprove a cópia antes de ser criada. O assistente pode depois ativar o novo estimate.

:::note Preview
Hoje o assistente copia o estimate com as suas linhas, no mesmo Fee, e consegue ativar a cópia. A cópia mantém a **Data de Início**, a **Data de Conclusão** e os valores do original. Definir as novas datas e o campo **Inflação %** na cópia está em preview, por isso abra a **Info** do novo estimate e defina-os antes de o usar.
:::

A agência, o cliente, o Fee, os nomes e números dos estimates e as etapas neste exemplo são ilustrativos. As etapas e transições que vê dependem do workflow do estimate.

<Walkthrough
  subtitle="Exemplo de conversa entre um account manager e o AI Assistant."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="O estimate do próximo ano a partir do anterior">
        O assistente encontra o estimate no Fee, copia-o com as suas linhas e os detalhes que escolher, e ativa a cópia com a sua aprovação.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Indique o Fee e o estimate a copiar, as novas datas e a taxa de inflação.',
          'Escolha o que a cópia inclui: Descrição, Equipa ou Campos personalizados.',
          'Reveja os detalhes e selecione Duplicar.',
          'Confirme a Data de Início, a Data de Conclusão e a Inflação % na Info do novo estimate.',
          'Peça ao assistente para ativar o novo estimate.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'Copia o estimate de 2024 do fee da BBC para 2026, com 10% de inflação.',
          'Duplica o estimate 2024 - 00195 para janeiro a dezembro de 2026.',
          'Ativa o estimate.',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'Preview: a cópia mantém as datas e os valores do estimate original. Defina a Data de Início, a Data de Conclusão e a Inflação % na Info do novo estimate.',
          'A Inflação % é aplicada às linhas do estimate, por isso os valores mudam quando a define.',
          'A cópia é sempre criada no mesmo Fee do original.',
          'O assistente pede a sua aprovação antes de criar a cópia. Selecione Negar para deixar tudo como está.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Você">
    <p>No fee BBC 2024–2026, copia o estimate 2024 - 00195 para 2026, com datas de 1 de janeiro de 2026 a 31 de dezembro de 2026, e aplica uma taxa de inflação de 10%.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>Encontrei o estimate <strong>2024 - 00195 · FEE</strong> no fee da BBC. O que deve a cópia incluir?</p>
    <Walkthrough.JobList
      title="Estimates · BBC"
      previewLabel="Pré-visualizar"
      openLabel="Abrir"
      rows={[
        { title: 'FEE', number: '2024 - 00195', stage: 'Faturado' },
      ]}
    />
    <Walkthrough.Choices
      label="O que deve a cópia incluir? Escolhe as que quiseres"
      options={['Descrição', 'Equipa', 'Campos personalizados']}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Descrição e Equipa.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.ApprovalCard
      title="Duplicar este documento"
      subtitle="Revê estes detalhes antes de eu duplicar."
      rows={[
        ['A duplicar', '2024 - 00195 · FEE'],
        ['Tipo de documento', 'Orçamento'],
        ['Novo nome', 'FEE 2026'],
        ['Data de Início', '1 de janeiro de 2026'],
        ['Data de Conclusão', '31 de dezembro de 2026'],
        ['Inflação %', '10'],
        ['Inclui', 'Descrição, Equipa'],
      ]}
      actions={[{ label: 'Negar' }, { label: 'Duplicar', primary: true }]}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Revi os detalhes e selecionei Duplicar.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.StatusChip status="Atualizado" label="Duplicar este documento" />
    <p>O estimate foi duplicado como <strong>2024 - 00237 · FEE 2026</strong> no fee da BBC, com datas de 1 de janeiro a 31 de dezembro de 2026 e a Inflação % definida para 10. As linhas do estimate foram atualizadas com a inflação.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Ativa o estimate.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.StatusChip status="Atualizado" label="2024 - 00237 · FEE 2026" />
    <p>O estimate foi ativado e passou para New.</p>
  </Walkthrough.Message>
</Walkthrough>

## Artigos relacionados

- [Fees](/docs/product/commercial/fees)
- [Create Estimate](/docs/product/commercial/estimates/create-estimate)
- [Document Agent](/docs/ai/agents/document-agent)
