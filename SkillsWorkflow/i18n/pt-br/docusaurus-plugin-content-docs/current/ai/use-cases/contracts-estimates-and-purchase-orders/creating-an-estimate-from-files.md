---
id: creating-an-estimate-from-files
title: Criar uma Proposta a partir de um Arquivo
description: "Veja como um gerente de contas anexa a planilha de escopo de um cliente ao Assistente de IA, confere os entregáveis, as horas e os custos de terceiros que ele extrai, responde ao que falta e aprova a nova proposta."
sidebar_label: Criar uma Proposta a partir de um Arquivo
sidebar_position: 2
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

## Visão geral

Anexe o arquivo que descreve o trabalho, como um briefing do cliente, uma planilha de escopo ou um orçamento de fornecedor, e peça uma proposta ao Assistente de IA. O assistente extrai os entregáveis, as horas por grupo de cargo, os custos de terceiros e as despesas, calcula o preço das horas com o rate card do cliente e lista o que o arquivo não informa. Responda ao que falta, revise a proposta em um cartão e aprove-a.

:::note Preview
Este caso de uso está em preview e ainda não foi testado de ponta a ponta. A conversa mostra como se espera que o Assistente de IA lide com ele, e o que ele responde ou faz hoje pode ser diferente deste exemplo.
:::

A agência, o cliente, o arquivo, a proposta, os fornecedores, as tarifas e os valores deste exemplo são ilustrativos. Os Tipos Orçamento, os rate cards e as etapas dependem da configuração da sua agência.

<Walkthrough
  subtitle="Exemplo de conversa entre um gerente de contas e o Assistente de IA."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="De um arquivo de escopo a uma proposta">
        O assistente lê o arquivo, monta as linhas da proposta a partir dele e aponta cada lacuna antes de qualquer coisa ser criada.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Anexe o arquivo e diga para qual cliente e projeto ele é.',
          'Confira os entregáveis, as horas e os custos que o assistente extraiu.',
          'Responda às lacunas que o assistente apontar.',
          'Revise os detalhes e selecione Criar.',
          'Abra a proposta e compare-a com o arquivo.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'Crie uma proposta a partir deste briefing para a Fabrikam Motors.',
          'Use as horas desta planilha e o rate card do cliente.',
          'Deixe a impressão de fora até termos um orçamento.',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'O assistente só usa o que está no arquivo e o que você diz a ele. Tudo o que ele não encontra é listado como faltante.',
          'As horas são precificadas com o Rate Card do cliente. Os custos de terceiros e as despesas mantêm os valores do arquivo.',
          'O arquivo não é anexado à proposta. Adicione-o aos arquivos da proposta se a equipe precisar.',
          'O assistente pede a sua aprovação antes de criar a proposta. Selecione Negar para alterá-la primeiro.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Você">
    <p>Crie uma proposta para a Fabrikam Motors, projeto Showroom Launch, a partir do escopo anexado.</p>
    <p><strong>Anexo:</strong> Fabrikam_Showroom_Launch_scope.xlsx</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>O arquivo descreve quatro entregáveis, uma sessão de fotos e uma viagem:</strong></p>
    <Walkthrough.DataTable
      columns={['Linha', 'Componente', 'Quantidade', 'Valor']}
      rows={[
        ['Showroom Brochure · Creative, Design, Copywriting', 'Recursos', '24h · 80h · 30h', '€ 9.590'],
        ['POS Displays · Design', 'Recursos', '70h', '€ 4.900'],
        ['Dealer Social Templates · Creative, Design, Copywriting', 'Recursos', '56h · 50h · 30h', '€ 10.210'],
        ['Account Management · Accounts', 'Recursos', '40h', '€ 2.400'],
        ['Product Photo Shoot', 'Terceiros', '1', '€ 10.500'],
        ['Travel to Shoot Location', 'Despesas', '1', '€ 900'],
      ]}
      note="Horas precificadas com o rate card Fabrikam Motors 2026, coluna Standard."
    />
    <p><strong>Falta no arquivo</strong></p>
    <ul>
      <li>A sessão de fotos tem valor, mas não tem fornecedor.</li>
      <li>O arquivo menciona a impressão de 500 folhetos, sem valor.</li>
    </ul>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>A sessão de fotos é com a Lumen Studio. Deixe a impressão de fora até termos um orçamento.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.ApprovalCard
      title="Criar esta proposta"
      subtitle="Revise estes detalhes antes de eu criar."
      rows={[
        ['Cliente', 'Fabrikam Motors'],
        ['Projeto', 'Showroom Launch'],
        ['Tipo Orçamento', 'Campaign'],
        ['Nome', 'Showroom Launch'],
        ['Rate Card', 'Fabrikam Motors 2026 · Standard'],
        ['Recursos', '8 linhas, 380h, € 27.100'],
        ['Terceiros', 'Product Photo Shoot, Lumen Studio, € 10.500'],
        ['Despesas', 'Travel to Shoot Location, € 900'],
        ['Total', '€ 38.500'],
        ['Não incluído', 'Impressão dos folhetos'],
      ]}
      actions={[{ label: 'Negar' }, { label: 'Criar', primary: true }]}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Revisei os detalhes e selecionei Criar.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.StatusChip status="Criado" label="2026 - 00418 · Showroom Launch" />
    <p>A proposta foi criada em New, com um total de € 38.500. Adicione a impressão dos folhetos como custo de terceiros quando o orçamento chegar.</p>
  </Walkthrough.Message>
</Walkthrough>

## Artigos relacionados

- [Criar Proposta](/docs/product/commercial/estimates/create-estimate)
- [Criar uma Proposta a partir das Suas Instruções](/docs/ai/use-cases/contracts-estimates-and-purchase-orders/creating-an-estimate-from-instructions)
- [Arquivos](/docs/product/files-and-collaboration/files)
- [Assistente de IA](/docs/ai/ai-assistant)
