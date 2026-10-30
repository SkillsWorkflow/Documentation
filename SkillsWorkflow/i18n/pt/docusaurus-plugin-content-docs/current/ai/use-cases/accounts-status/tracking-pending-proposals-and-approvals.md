---
id: tracking-pending-proposals-and-approvals
title: Acompanhar Estimates à Espera de Aprovação
description: "Veja como um account director pergunta ao AI Assistant que estimates estão à espera de aprovação do cliente, há quanto tempo e porquê, e pede ao account manager no Feed que faça o seguimento."
sidebar_label: Acompanhar Estimates à Espera de Aprovação
sidebar_position: 5
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

## Visão geral

Pergunte ao AI Assistant que estimates enviados aos clientes ainda estão à espera de aprovação. O assistente lista-os com o valor, o dia em que foram enviados, há quanto tempo estão à espera e quem é o responsável. Pergunte porque é que um deles está parado, e o assistente resume o que foi escrito no estimate e no seu Feed. Depois pode pedir-lhe para publicar um comentário no Feed do estimate para que o responsável faça o seguimento. Revê o comentário antes de ser publicado.

:::note Preview
Este caso de uso está em preview e ainda não foi testado de ponta a ponta. A conversa mostra como se espera que o AI Assistant o trate, e o que hoje responde ou faz pode ser diferente deste exemplo.
:::

A agência, os clientes, os estimates, os valores e as etapas neste exemplo são ilustrativos. As etapas dependem do workflow de cada estimate, e os estimates que vê dependem dos seus acessos.

<Walkthrough
  subtitle="Exemplo de conversa entre um account director e o AI Assistant."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="De estimates pendentes a um seguimento">
        O assistente mostra que propostas estão paradas, há quanto tempo e porquê, e inicia o seguimento com o responsável.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Pergunte que estimates estão à espera de aprovação do cliente.',
          'Leia o valor, os dias de espera e o responsável.',
          'Pergunte porque é que um estimate está parado.',
          'Peça ao assistente para publicar um comentário no Feed do estimate.',
          'Reveja o comentário e selecione Publicar.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'Que propostas ainda estão à espera de aprovação?',
          'Qual é o estimate mais antigo à espera do Contoso Bank?',
          'Quanto está à espera de aprovação do cliente este mês?',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'À espera de aprovação significa que o estimate está numa etapa que a sua agência usa para aprovação do cliente. O nome da etapa depende do workflow.',
          'Os dias de espera contam a partir do dia em que o estimate entrou nessa etapa.',
          'Os motivos vêm do que foi escrito no estimate e no seu Feed. Quando ninguém registou um, o assistente di-lo.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Você">
    <p>Quais dos nossos estimates ainda estão à espera de aprovação do cliente?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>Quatro estimates estão à espera de aprovação do cliente, num total de 148.500 €:</strong></p>
    <Walkthrough.DataTable
      columns={['Estimate', 'Cliente', 'Valor', 'Enviado', 'Dias de espera', 'Responsável']}
      rows={[
        ['2026 - 00377 · Mobile App Phase 2', 'Contoso Bank', '86.000 €', '1 de outubro', '29', 'David Brown'],
        ['2026 - 00395 · Dealer Kit Q1', 'Fabrikam Motors', '38.500 €', '15 de outubro', '15', 'Anna Smith'],
        ['2026 - 00401 · Spring Shoot', 'Contoso Bank', '16.000 €', '22 de outubro', '8', 'David Brown'],
        ['2026 - 00409 · Gift Card Design', 'Northwind Coffee', '8.000 €', '27 de outubro', '3', 'Sarah Lee'],
      ]}
    />
    <p><strong>Como interpretei a tua pergunta</strong></p>
    <ul>
      <li>Incluído: estimates na etapa Awaiting Client Approval.</li>
      <li>Assumido: “enviado” é o dia em que o estimate entrou nessa etapa.</li>
    </ul>
    <Walkthrough.Source label="Estimates · 4 linhas" />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Porque é que o Mobile App Phase 2 está a demorar tanto?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <ul>
      <li>A 8 de outubro, o cliente pediu no Feed o preço de um âmbito mais pequeno, sem a versão Android.</li>
      <li>O David respondeu a 9 de outubro que ia enviar uma alternativa. Desde então não foi criado nenhum estimate revisto.</li>
      <li>O último comentário no Feed é de 9 de outubro.</li>
    </ul>
    <p>O cliente está provavelmente à espera da opção reduzida.</p>
    <Walkthrough.Source label="Feed · 4 publicações" />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Pede ao David no Feed que envie a opção reduzida esta semana.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.ApprovalCard
      title="Publicar um comentário"
      subtitle="Revê o comentário antes de eu o publicar."
      rows={[
        ['Estimate', '2026 - 00377 · Mobile App Phase 2'],
        ['Menções', 'David Brown'],
        ['Comentário', 'O Contoso Bank pediu uma versão sem Android a 8 de outubro e continua à espera. Podes enviar-lhes a opção reduzida esta semana?'],
      ]}
      actions={[{ label: 'Negar' }, { label: 'Publicar', primary: true }]}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Revi o comentário e selecionei Publicar.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.StatusChip status="Publicado" label="2026 - 00377 · Mobile App Phase 2" />
    <p>O comentário está no Feed do estimate. O David foi notificado.</p>
  </Walkthrough.Message>
</Walkthrough>

## Artigos relacionados

- [Criar um Orçamento](/docs/product/commercial/estimates/create-estimate)
- [Utilizar o Feed](/docs/product/files-and-collaboration/using-feed)
- [Comparar Cenários de Estimate Antes de Criar um](/docs/ai/use-cases/contracts-estimates-and-purchase-orders/discussing-estimate-scenarios-before-creation)
- [AI Assistant](/docs/ai/ai-assistant)
