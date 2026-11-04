---
id: duplicating-estimates-for-the-next-years-of-a-fee
title: Copiar o Fee de um Cliente para o Ano Seguinte
description: "Veja como um account manager renova o retainer de um cliente pedindo ao AI Assistant para copiar o Fee deste ano, com o seu estimate, para o próximo ano, aplicar uma taxa de inflação às linhas do estimate e ativar o novo estimate."
sidebar_label: Copiar um Fee para o Ano Seguinte
sidebar_position: 5
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

:::preview
Copiar o Fee completo está em preview. Hoje o assistente copia apenas o estimate, com as suas linhas, e a cópia fica no Fee original: não cria um novo Fee. A cópia mantém a **Data de Início**, a **Data de Conclusão** e os valores do original. Definir as novas datas e o campo **Inflação %** na cópia também está em preview, por isso abra a **Info** do novo estimate e defina-os antes de o usar. O assistente consegue ativar a cópia.
:::

## Visão geral

Diga ao AI Assistant que Fee de cliente quer renovar e que taxa de inflação aplicar. O assistente encontra o Fee deste ano e o seu estimate, e copia ambos para o ano seguinte no mesmo passo: o nome e as datas do novo Fee, e o estimate com as suas linhas, a taxa de inflação aplicada aos valores e a descrição, a equipa ou os campos personalizados que escolher copiar. Revê tudo num cartão antes de ser criado o que quer que seja.

Depois de criada a cópia, o assistente mostra os valores do novo estimate ao lado dos do ano anterior. Pode então pedir-lhe para ativar o novo estimate, para que a equipa possa começar a planear o trabalho do ano.

A agência, o cliente, os Fees, os estimates, os números, as horas, os valores e as etapas neste exemplo são ilustrativos. Os documentos que vê dependem dos seus acessos, e as etapas e transições dependem do workflow do estimate.

<Walkthrough
  subtitle="Exemplo de conversa entre um account manager e o AI Assistant."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="Do Fee deste ano ao do próximo">
        O assistente copia o Fee e o seu estimate para o novo ano, aplica às linhas do estimate a taxa de inflação que pedir e ativa o novo estimate com a sua aprovação.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Peça o Fee do cliente para este ano e confirme o seu estimate.',
          'Peça ao assistente para copiar o Fee para o próximo ano e indique a taxa de inflação.',
          'Consulte Como interpretei a tua pergunta para confirmar as novas datas.',
          'Escolha o que a cópia do estimate inclui: Descrição, Equipa ou Campos personalizados.',
          'Reveja os detalhes e selecione Duplicar.',
          'Confirme o novo Fee e, na Info do novo estimate, a Data de Início, a Data de Conclusão e a Inflação %.',
          'Peça ao assistente para ativar o novo estimate.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'Mostra-me o fee que temos com a Northwind Coffee este ano e o seu estimate.',
          'Copia o fee Northwind Coffee Retainer 2026 e aplica-me uma taxa de inflação de 5%.',
          'Duplica o fee para janeiro a dezembro de 2027.',
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
    <p>A Northwind Coffee acabou de renovar o retainer para 2027. Mostra-me o fee que temos com eles este ano e o seu estimate.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>A Northwind Coffee tem um fee para 2026, Northwind Coffee Retainer 2026</strong>, de 1 de janeiro a 31 de dezembro de 2026. Tem um estimate, <strong>2026 - 00031 · Retainer 2026</strong>, de 4800 horas e 312.000 €:</p>
    <Walkthrough.DataTable
      columns={['Typology Group', 'Horas', 'Valor']}
      rows={[
        ['Creative', '1800h', '126.000 €'],
        ['Design', '1400h', '84.000 €'],
        ['Copywriting', '900h', '58.500 €'],
        ['Accounts', '700h', '43.500 €'],
      ]}
      note="O estimate está em Faturado."
    />
    <p><strong>Como interpretei a tua pergunta</strong></p>
    <ul>
      <li>Incluído: fees da Northwind Coffee com datas em 2026 e os estimates que contêm.</li>
      <li>Assumido: “este ano” significa de 1 de janeiro a 31 de dezembro de 2026.</li>
    </ul>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Copia o fee Northwind Coffee Retainer 2026 para o próximo ano e aplica-me uma taxa de inflação de 5%.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>Vou copiar o fee e o seu estimate para 2027 e definir a Inflação % como 5 no novo estimate. O que deve a cópia do estimate incluir?</p>
    <Walkthrough.Choices
      label="O que deve a cópia incluir? Escolhe as que quiseres"
      options={['Descrição', 'Equipa', 'Campos personalizados']}
    />
    <p><strong>Como interpretei a tua pergunta</strong></p>
    <ul>
      <li>Assumido: “próximo ano” significa de 1 de janeiro a 31 de dezembro de 2027, o mesmo período do fee original, um ano depois.</li>
      <li>Assumido: o novo fee chama-se Northwind Coffee Retainer 2027 e o novo estimate Retainer 2027.</li>
    </ul>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Descrição e Equipa.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.ApprovalCard
      title="Duplicar este fee"
      subtitle="Revê estes detalhes antes de eu duplicar."
      rows={[
        ['A duplicar', 'Northwind Coffee Retainer 2026'],
        ['Tipo de documento', 'Fee'],
        ['Nome do novo fee', 'Northwind Coffee Retainer 2027'],
        ['Data de Início', '1 de janeiro de 2027'],
        ['Data de Conclusão', '31 de dezembro de 2027'],
        ['Estimate', '2026 - 00031 · Retainer 2026'],
        ['Nome do novo estimate', 'Retainer 2027'],
        ['Inflação %', '5'],
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
    <p>O fee foi duplicado como <strong>Northwind Coffee Retainer 2027</strong>, com datas de 1 de janeiro a 31 de dezembro de 2027. O seu estimate foi copiado para o novo fee como <strong>2026 - 00412 · Retainer 2027</strong>, com as mesmas datas e a Inflação % definida para 5. As linhas do estimate foram atualizadas com a inflação:</p>
    <Walkthrough.DataTable
      columns={['Typology Group', 'Horas', '2026', '2027']}
      rows={[
        ['Creative', '1800h', '126.000 €', '132.300 €'],
        ['Design', '1400h', '84.000 €', '88.200 €'],
        ['Copywriting', '900h', '58.500 €', '61.425 €'],
        ['Accounts', '700h', '43.500 €', '45.675 €'],
      ]}
      note="As horas são as mesmas de 2026. O total passa de 312.000 € para 327.600 €."
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Ativa o estimate.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.StatusChip status="Atualizado" label="2026 - 00412 · Retainer 2027" />
    <p>O estimate foi ativado e passou para New.</p>
  </Walkthrough.Message>
</Walkthrough>

## Artigos relacionados

- [Fees](/docs/product/commercial/fees)
- [Create Estimate](/docs/product/commercial/estimates/create-estimate)
- [Document Agent](/docs/ai/agents/document-agent)
