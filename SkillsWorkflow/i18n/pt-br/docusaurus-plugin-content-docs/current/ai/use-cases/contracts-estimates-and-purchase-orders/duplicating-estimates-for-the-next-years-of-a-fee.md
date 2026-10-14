---
id: duplicating-estimates-for-the-next-years-of-a-fee
title: Copiar o Contrato de um Cliente para o Ano Seguinte
description: "Veja como um gerente de contas renova o retainer de um cliente pedindo ao Assistente de IA que copie o Contrato deste ano, com a sua proposta, para o próximo ano, aplique uma taxa de inflação às linhas da proposta e ative a nova proposta."
sidebar_label: Copiar um Contrato para o Ano Seguinte
sidebar_position: 5
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

## Visão geral

Diga ao Assistente de IA qual Contrato de cliente você quer renovar e qual taxa de inflação aplicar. O assistente encontra o Contrato deste ano e a sua proposta, e copia os dois para o ano seguinte de uma só vez: o nome e as datas do novo Contrato, e a proposta com as suas linhas, a taxa de inflação aplicada aos valores e a descrição, a equipe ou os campos personalizados que você escolher levar. Você revisa tudo em um cartão antes de qualquer coisa ser criada.

Depois que a cópia existe, o assistente mostra os valores da nova proposta ao lado dos do ano anterior. Você pode então pedir que ele ative a nova proposta, para que a equipe comece a planejar o trabalho do ano.

:::note Preview
Copiar o Contrato inteiro está em preview. Hoje o assistente copia apenas a proposta, com as suas linhas, e a cópia fica no Contrato original: ele não cria um novo Contrato. A cópia mantém a **Data de Início**, a **Data de Conclusão** e os valores do original. Definir as novas datas e o campo **Inflation %** na cópia também está em preview, então abra a **Info** da nova proposta e defina-os antes de usá-la. O assistente consegue ativar a cópia.
:::

A agência, o cliente, os Contratos, as propostas, os números, as horas, os valores e as etapas deste exemplo são ilustrativos. Os documentos que você vê dependem dos seus acessos, e as etapas e transições dependem do workflow da proposta.

<Walkthrough
  subtitle="Exemplo de conversa entre um gerente de contas e o Assistente de IA."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="Do Contrato deste ano ao do próximo">
        O assistente copia o Contrato e a sua proposta para o novo ano, aplica às linhas da proposta a taxa de inflação que você pedir e ativa a nova proposta com a sua aprovação.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Peça o Contrato do cliente para este ano e confira a sua proposta.',
          'Peça ao assistente que copie o Contrato para o próximo ano e informe a taxa de inflação.',
          'Confira Como interpretei sua pergunta para confirmar as novas datas.',
          'Escolha o que a cópia da proposta inclui: Descrição, Equipe ou Campos personalizados.',
          'Revise os detalhes e selecione Duplicar.',
          'Confira o novo Contrato e, na Info da nova proposta, a Data de Início, a Data de Conclusão e o Inflation %.',
          'Peça ao assistente que ative a nova proposta.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'Mostre o contrato que temos com a Northwind Coffee este ano e a sua proposta.',
          'Copie o contrato Northwind Coffee Retainer 2026 e aplique uma taxa de inflação de 5%.',
          'Duplique o contrato para janeiro a dezembro de 2027.',
          'Ative a proposta.',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'Preview: hoje apenas a proposta é copiada, e a cópia fica no Contrato original. O novo Contrato não é criado.',
          'Preview: a cópia da proposta mantém as datas e os valores do original. Defina a Data de Início, a Data de Conclusão e o Inflation % na Info da nova proposta.',
          'O Inflation % é aplicado às linhas da proposta, então os valores mudam quando você o define.',
          'O assistente pede a sua aprovação antes de criar a cópia. Selecione Negar para deixar tudo como está.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Você">
    <p>A Northwind Coffee acabou de renovar o retainer para 2027. Mostre o contrato que temos com eles este ano e a sua proposta.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>A Northwind Coffee tem um contrato para 2026, Northwind Coffee Retainer 2026</strong>, de 1º de janeiro a 31 de dezembro de 2026. Ele tem uma proposta, <strong>2026 - 00031 · Retainer 2026</strong>, de 4.800 horas e € 312.000:</p>
    <Walkthrough.DataTable
      columns={['Grupo de Cargo', 'Horas', 'Valor']}
      rows={[
        ['Creative', '1.800h', '€ 126.000'],
        ['Design', '1.400h', '€ 84.000'],
        ['Copywriting', '900h', '€ 58.500'],
        ['Accounts', '700h', '€ 43.500'],
      ]}
      note="A proposta está em Invoiced."
    />
    <p><strong>Como interpretei sua pergunta</strong></p>
    <ul>
      <li>Incluído: contratos da Northwind Coffee com datas em 2026 e as propostas deles.</li>
      <li>Assumido: “este ano” significa de 1º de janeiro a 31 de dezembro de 2026.</li>
    </ul>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Copie o contrato Northwind Coffee Retainer 2026 para o próximo ano e aplique uma taxa de inflação de 5%.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>Vou copiar o contrato e a sua proposta para 2027 e definir o Inflation % como 5 na nova proposta. O que a cópia da proposta deve incluir?</p>
    <Walkthrough.Choices
      label="O que a cópia deve incluir? Escolha quantas quiser"
      options={['Descrição', 'Equipe', 'Campos personalizados']}
    />
    <p><strong>Como interpretei sua pergunta</strong></p>
    <ul>
      <li>Assumido: “próximo ano” significa de 1º de janeiro a 31 de dezembro de 2027, o mesmo período do contrato original, um ano depois.</li>
      <li>Assumido: o novo contrato se chama Northwind Coffee Retainer 2027 e a nova proposta, Retainer 2027.</li>
    </ul>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Descrição e Equipe.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.ApprovalCard
      title="Duplicar este contrato"
      subtitle="Revise estes detalhes antes de eu duplicar."
      rows={[
        ['Duplicando', 'Northwind Coffee Retainer 2026'],
        ['Tipo de documento', 'Contrato'],
        ['Nome do novo contrato', 'Northwind Coffee Retainer 2027'],
        ['Data de Início', '1º de janeiro de 2027'],
        ['Data de Conclusão', '31 de dezembro de 2027'],
        ['Proposta', '2026 - 00031 · Retainer 2026'],
        ['Nome da nova proposta', 'Retainer 2027'],
        ['Inflation %', '5'],
        ['Inclui', 'Descrição, Equipe'],
      ]}
      actions={[{ label: 'Negar' }, { label: 'Duplicar', primary: true }]}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Revisei os detalhes e selecionei Duplicar.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.StatusChip status="Atualizado" label="Duplicar este contrato" />
    <p>O contrato foi duplicado como <strong>Northwind Coffee Retainer 2027</strong>, com datas de 1º de janeiro a 31 de dezembro de 2027. A sua proposta foi copiada para o novo contrato como <strong>2026 - 00412 · Retainer 2027</strong>, com as mesmas datas e o Inflation % definido como 5. As linhas da proposta foram atualizadas com a inflação:</p>
    <Walkthrough.DataTable
      columns={['Grupo de Cargo', 'Horas', '2026', '2027']}
      rows={[
        ['Creative', '1.800h', '€ 126.000', '€ 132.300'],
        ['Design', '1.400h', '€ 84.000', '€ 88.200'],
        ['Copywriting', '900h', '€ 58.500', '€ 61.425'],
        ['Accounts', '700h', '€ 43.500', '€ 45.675'],
      ]}
      note="As horas são as mesmas de 2026. O total passa de € 312.000 para € 327.600."
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Ative a proposta.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.StatusChip status="Atualizado" label="2026 - 00412 · Retainer 2027" />
    <p>A proposta foi ativada e passou para New.</p>
  </Walkthrough.Message>
</Walkthrough>

## Artigos relacionados

- [Contratos](/docs/product/commercial/fees)
- [Criar Proposta](/docs/product/commercial/estimates/create-estimate)
- [Agente de Documentos](/docs/ai/agents/document-agent)
