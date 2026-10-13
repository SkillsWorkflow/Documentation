---
id: duplicating-estimates-for-the-next-years-of-a-fee
title: Copiar um Fee e o Seu Estimate para o Ano Seguinte com Inflação
description: "Veja como um account manager pede ao AI Assistant para copiar o Fee do ano anterior, com o seu estimate, para um novo ano, com novas datas e uma taxa de inflação, e depois ativar o novo estimate."
sidebar_label: Copiar um Fee para o Ano Seguinte
sidebar_position: 5
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

## Visão geral

Peça ao AI Assistant para copiar um Fee para o ano seguinte: o próprio Fee e o estimate que tem. Indique as novas datas e uma taxa de inflação, escolha o que mais a cópia do estimate deve incluir e aprove a cópia antes de ser criada. O novo estimate é criado no novo Fee e o assistente pode depois ativá-lo.

:::note Preview
Copiar o Fee completo está em preview. Hoje o assistente copia apenas o estimate, com as suas linhas, e a cópia fica no Fee original: não cria um novo Fee. A cópia mantém a **Data de Início**, a **Data de Conclusão** e os valores do original. Definir as novas datas e o campo **Inflação %** na cópia também está em preview, por isso abra a **Info** do novo estimate e defina-os antes de o usar. O assistente consegue ativar a cópia.
:::

A agência, o cliente, os Fees, os nomes e números dos estimates e as etapas neste exemplo são ilustrativos. As etapas e transições que vê dependem do workflow do estimate.

<Walkthrough
  subtitle="Exemplo de conversa entre um account manager e o AI Assistant."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="O Fee do próximo ano a partir do anterior">
        O assistente encontra o Fee e o seu estimate, copia ambos para o novo ano com as datas, a taxa de inflação e os detalhes que escolher, e ativa o novo estimate com a sua aprovação.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Indique o Fee a copiar, as novas datas e a taxa de inflação.',
          'Escolha o que a cópia do estimate inclui: Descrição, Equipa ou Campos personalizados.',
          'Reveja os detalhes e selecione Duplicar.',
          'Confirme o novo Fee e, na Info do novo estimate, a Data de Início, a Data de Conclusão e a Inflação %.',
          'Peça ao assistente para ativar o novo estimate.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'Copia o fee BBC 2025 e o seu estimate para 2026, com 10% de inflação.',
          'Duplica o fee BBC 2025 para janeiro a dezembro de 2026.',
          'Ativa o estimate.',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'Preview: hoje apenas o estimate é copiado e a cópia fica no Fee original. O novo Fee não é criado.',
          'Preview: a cópia do estimate mantém as datas e os valores do original. Defina a Data de Início, a Data de Conclusão e a Inflação % na Info do novo estimate.',
          'A Inflação % é aplicada às linhas do estimate, por isso os valores mudam quando a define.',
          'O assistente pede a sua aprovação antes de criar a cópia. Selecione Negar para deixar tudo como está.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Você">
    <p>Copia o fee BBC 2025 e o seu estimate para 2026, com datas de 1 de janeiro de 2026 a 31 de dezembro de 2026, e aplica uma taxa de inflação de 10%.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>Encontrei o fee <strong>BBC 2025</strong> e o seu estimate <strong>2025 - 00195 · FEE</strong>. O que deve a cópia do estimate incluir?</p>
    <Walkthrough.JobList
      title="Estimates · BBC 2025"
      previewLabel="Pré-visualizar"
      openLabel="Abrir"
      rows={[
        { title: 'FEE', number: '2025 - 00195', stage: 'Faturado' },
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
      title="Duplicar este fee"
      subtitle="Revê estes detalhes antes de eu duplicar."
      rows={[
        ['A duplicar', 'BBC 2025'],
        ['Tipo de documento', 'Fee'],
        ['Nome do novo fee', 'BBC 2026'],
        ['Data de Início', '1 de janeiro de 2026'],
        ['Data de Conclusão', '31 de dezembro de 2026'],
        ['Estimate', '2025 - 00195 · FEE'],
        ['Nome do novo estimate', 'FEE 2026'],
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
    <Walkthrough.StatusChip status="Atualizado" label="Duplicar este fee" />
    <p>O fee foi duplicado como <strong>BBC 2026</strong>, com datas de 1 de janeiro a 31 de dezembro de 2026. O seu estimate foi copiado para o novo fee como <strong>2026 - 00012 · FEE 2026</strong>, com as mesmas datas e a Inflação % definida para 10. As linhas do estimate foram atualizadas com a inflação.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Ativa o estimate.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.StatusChip status="Atualizado" label="2026 - 00012 · FEE 2026" />
    <p>O estimate foi ativado e passou para New.</p>
  </Walkthrough.Message>
</Walkthrough>

## Artigos relacionados

- [Fees](/docs/product/commercial/fees)
- [Create Estimate](/docs/product/commercial/estimates/create-estimate)
- [Document Agent](/docs/ai/agents/document-agent)
