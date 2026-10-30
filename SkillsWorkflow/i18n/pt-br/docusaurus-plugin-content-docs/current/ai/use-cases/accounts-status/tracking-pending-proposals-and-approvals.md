---
id: tracking-pending-proposals-and-approvals
title: Acompanhar Propostas Aguardando Aprovação
description: "Veja como um diretor de contas pergunta ao Assistente de IA quais propostas aguardam a aprovação do cliente, há quanto tempo e por quê, e pede ao gerente de contas, no Feed, que faça o acompanhamento."
sidebar_label: Acompanhar Propostas Aguardando Aprovação
sidebar_position: 5
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

## Visão geral

Pergunte ao Assistente de IA quais propostas enviadas aos clientes ainda aguardam aprovação. Ele as lista com o valor, o dia em que foram enviadas, há quanto tempo estão aguardando e quem é o responsável. Pergunte por que uma delas está parada, e o assistente resume o que foi escrito na proposta e no Feed dela. Em seguida, você pode pedir que ele publique um comentário no Feed da proposta para que o responsável faça o acompanhamento. Você revisa o comentário antes de ele ser publicado.

:::note Preview
Este caso de uso está em preview e ainda não foi testado de ponta a ponta. A conversa mostra como se espera que o Assistente de IA lide com ele, e o que ele responde ou faz hoje pode ser diferente deste exemplo.
:::

A agência, os clientes, as propostas, os valores e as etapas deste exemplo são ilustrativos. As etapas dependem do workflow de cada proposta, e as propostas que você vê dependem do seu acesso.

<Walkthrough
  subtitle="Exemplo de conversa entre um diretor de contas e o Assistente de IA."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="De propostas pendentes a um acompanhamento">
        O assistente mostra quais propostas estão paradas, há quanto tempo e por quê, e inicia o acompanhamento com a pessoa responsável.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Pergunte quais propostas aguardam a aprovação do cliente.',
          'Leia o valor, os dias de espera e o responsável.',
          'Pergunte por que uma proposta está parada.',
          'Peça ao assistente que publique um comentário no Feed da proposta.',
          'Revise o comentário e selecione Publicar.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'Quais propostas ainda aguardam aprovação?',
          'Qual é a proposta mais antiga aguardando o Contoso Bank?',
          'Quanto está aguardando a aprovação do cliente neste mês?',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'Aguardando aprovação significa que a proposta está em uma etapa que a sua agência usa para a aprovação do cliente. O nome da etapa depende do workflow.',
          'Os dias de espera contam a partir do dia em que a proposta entrou nessa etapa.',
          'Os motivos vêm do que foi escrito na proposta e no Feed dela. Quando ninguém registrou um motivo, o assistente avisa.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Você">
    <p>Quais das nossas propostas ainda aguardam a aprovação do cliente?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>Quatro propostas aguardam a aprovação do cliente, no total de € 148.500:</strong></p>
    <Walkthrough.DataTable
      columns={['Proposta', 'Cliente', 'Valor', 'Enviada', 'Dias de espera', 'Responsável']}
      rows={[
        ['2026 - 00377 · Mobile App Phase 2', 'Contoso Bank', '€ 86.000', '1º de outubro', '29', 'David Brown'],
        ['2026 - 00395 · Dealer Kit Q1', 'Fabrikam Motors', '€ 38.500', '15 de outubro', '15', 'Anna Smith'],
        ['2026 - 00401 · Spring Shoot', 'Contoso Bank', '€ 16.000', '22 de outubro', '8', 'David Brown'],
        ['2026 - 00409 · Gift Card Design', 'Northwind Coffee', '€ 8.000', '27 de outubro', '3', 'Sarah Lee'],
      ]}
    />
    <p><strong>Como interpretei sua pergunta</strong></p>
    <ul>
      <li>Incluído: propostas na etapa Awaiting Client Approval.</li>
      <li>Assumido: “enviada” é o dia em que a proposta entrou nessa etapa.</li>
    </ul>
    <Walkthrough.Source label="Propostas · 4 linhas" />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Por que a Mobile App Phase 2 está demorando tanto?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <ul>
      <li>Em 8 de outubro, o cliente pediu no Feed o preço de um escopo menor, sem a versão Android.</li>
      <li>O David respondeu em 9 de outubro que enviaria uma alternativa. Nenhuma proposta revisada foi criada desde então.</li>
      <li>O último comentário no Feed é de 9 de outubro.</li>
    </ul>
    <p>Provavelmente o cliente está esperando a opção reduzida.</p>
    <Walkthrough.Source label="Feed · 4 publicações" />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Peça ao David, no Feed, que envie a opção reduzida nesta semana.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.ApprovalCard
      title="Publicar um comentário"
      subtitle="Revise o comentário antes de eu publicá-lo."
      rows={[
        ['Proposta', '2026 - 00377 · Mobile App Phase 2'],
        ['Menções', 'David Brown'],
        ['Comentário', 'O Contoso Bank pediu uma versão sem Android em 8 de outubro e ainda está esperando. Você pode enviar a opção reduzida para eles nesta semana?'],
      ]}
      actions={[{ label: 'Negar' }, { label: 'Publicar', primary: true }]}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Revisei o comentário e selecionei Publicar.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.StatusChip status="Publicado" label="2026 - 00377 · Mobile App Phase 2" />
    <p>O comentário está no Feed da proposta. O David foi notificado.</p>
  </Walkthrough.Message>
</Walkthrough>

## Artigos relacionados

- [Criar Proposta](/docs/product/commercial/estimates/create-estimate)
- [Usando o Feed](/docs/product/files-and-collaboration/using-feed)
- [Comparar Cenários de Proposta Antes de Criar Uma](/docs/ai/use-cases/contracts-estimates-and-purchase-orders/discussing-estimate-scenarios-before-creation)
- [Assistente de IA](/docs/ai/ai-assistant)
