---
id: creating-an-estimate-from-files
title: Criar um Estimate a Partir de um Ficheiro
description: "Veja como um account manager anexa ao AI Assistant a folha de cálculo de âmbito de um cliente, confere os entregáveis, as horas e os custos de terceiros que o assistente extrai, responde ao que falta e aprova o novo estimate."
sidebar_label: Criar um Estimate a Partir de um Ficheiro
sidebar_position: 2
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

## Visão geral

Anexe o ficheiro que descreve o trabalho, como um briefing do cliente, uma folha de cálculo de âmbito ou um orçamento de um fornecedor, e peça um estimate ao AI Assistant. O assistente extrai os entregáveis, as horas por grupo de cargo, os custos de terceiros e as despesas, calcula o preço das horas com a rate card do cliente e lista o que o ficheiro não diz. Responda ao que falta, reveja o estimate num cartão e aprove-o.

:::note Preview
Este caso de uso está em preview e ainda não foi testado de ponta a ponta. A conversa mostra como se espera que o AI Assistant o trate, e o que hoje responde ou faz pode ser diferente deste exemplo.
:::

A agência, o cliente, o ficheiro, o estimate, os fornecedores, as tarifas e os valores neste exemplo são ilustrativos. Os tipos de orçamento, as rate cards e as etapas dependem da configuração da sua agência.

<Walkthrough
  subtitle="Exemplo de conversa entre um account manager e o AI Assistant."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="De um ficheiro de âmbito a um estimate">
        O assistente lê o ficheiro, constrói a partir dele as linhas do estimate e assinala todas as lacunas antes de criar o que quer que seja.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Anexe o ficheiro e diga para que cliente e projeto é.',
          'Confira os entregáveis, as horas e os custos que o assistente extraiu.',
          'Responda às lacunas que o assistente assinala.',
          'Reveja os detalhes e selecione Criar.',
          'Abra o estimate e confira-o com o ficheiro.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'Cria um estimate a partir deste briefing para a Fabrikam Motors.',
          'Usa as horas desta folha de cálculo e a rate card do cliente.',
          'Deixa a impressão de fora até termos um orçamento.',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'O assistente só usa o que está no ficheiro e o que lhe disser. Tudo o que não encontra é listado como em falta.',
          'O preço das horas vem da Rate Card do cliente. Os custos de terceiros e as despesas mantêm os valores do ficheiro.',
          'O ficheiro não é anexado ao estimate. Acrescente-o aos ficheiros do estimate se a equipa precisar dele.',
          'O assistente pede a sua aprovação antes de criar o estimate. Selecione Negar para o alterar primeiro.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Você">
    <p>Cria um estimate para a Fabrikam Motors, projeto Showroom Launch, a partir do âmbito em anexo.</p>
    <p><strong>Anexo:</strong> Fabrikam_Showroom_Launch_scope.xlsx</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>O ficheiro descreve quatro entregáveis, uma sessão fotográfica e uma deslocação:</strong></p>
    <Walkthrough.DataTable
      columns={['Linha', 'Componente', 'Quantidade', 'Valor']}
      rows={[
        ['Showroom Brochure · Creative, Design, Copywriting', 'Recursos', '24h · 80h · 30h', '9.590 €'],
        ['POS Displays · Design', 'Recursos', '70h', '4.900 €'],
        ['Dealer Social Templates · Creative, Design, Copywriting', 'Recursos', '56h · 50h · 30h', '10.210 €'],
        ['Account Management · Accounts', 'Recursos', '40h', '2.400 €'],
        ['Product Photo Shoot', 'Terceiros', '1', '10.500 €'],
        ['Travel to Shoot Location', 'Despesas', '1', '900 €'],
      ]}
      note="Horas com os preços da rate card Fabrikam Motors 2026, coluna Standard."
    />
    <p><strong>Em falta no ficheiro</strong></p>
    <ul>
      <li>A sessão fotográfica tem valor mas não tem fornecedor.</li>
      <li>O ficheiro refere a impressão de 500 brochuras, sem valor.</li>
    </ul>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>A sessão é com a Lumen Studio. Deixa a impressão de fora até termos um orçamento.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.ApprovalCard
      title="Criar este estimate"
      subtitle="Revê estes detalhes antes de eu o criar."
      rows={[
        ['Cliente', 'Fabrikam Motors'],
        ['Projeto', 'Showroom Launch'],
        ['Tipo Orçamento', 'Campaign'],
        ['Nome', 'Showroom Launch'],
        ['Rate Card', 'Fabrikam Motors 2026 · Standard'],
        ['Recursos', '8 linhas, 380h, 27.100 €'],
        ['Terceiros', 'Product Photo Shoot, Lumen Studio, 10.500 €'],
        ['Despesas', 'Travel to Shoot Location, 900 €'],
        ['Total', '38.500 €'],
        ['Não incluído', 'Impressão das brochuras'],
      ]}
      actions={[{ label: 'Negar' }, { label: 'Criar', primary: true }]}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Revi os detalhes e selecionei Criar.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.StatusChip status="Criado" label="2026 - 00418 · Showroom Launch" />
    <p>O estimate foi criado em New, com um total de 38.500 €. Acrescente a impressão das brochuras como custo de terceiros quando chegar o orçamento.</p>
  </Walkthrough.Message>
</Walkthrough>

## Artigos relacionados

- [Criar um Orçamento](/docs/product/commercial/estimates/create-estimate)
- [Criar um Estimate a Partir das Suas Instruções](/docs/ai/use-cases/contracts-estimates-and-purchase-orders/creating-an-estimate-from-instructions)
- [Ficheiros](/docs/product/files-and-collaboration/files)
- [AI Assistant](/docs/ai/ai-assistant)
