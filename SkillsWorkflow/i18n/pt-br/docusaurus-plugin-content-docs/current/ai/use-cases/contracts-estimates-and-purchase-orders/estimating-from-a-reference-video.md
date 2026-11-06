---
id: estimating-from-a-reference-video
title: Obter uma Primeira Estimativa a partir de um Vídeo de Referência
description: "Veja como um gerente de contas anexa ao Assistente de IA o vídeo de referência de um cliente, obtém uma primeira estimativa da equipe, das horas e dos custos de terceiros indicativos, compara uma versão mais curta e cria a proposta depois que a produtora envia o orçamento."
sidebar_label: Proposta a partir de um Vídeo de Referência
sidebar_position: 6
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

:::preview
Este caso de uso está em preview, a conversa mostra como se espera que o Assistente de IA lide com ele, e o que ele responde ou faz hoje pode ser diferente deste exemplo.
:::

## Visão geral

Quando um cliente envia um vídeo e pede algo parecido, anexe o vídeo ao Assistente de IA e peça uma primeira estimativa. O assistente descreve o que vê no vídeo, propõe a equipe, as horas por grupo de cargo e os serviços de terceiros de que a produção precisaria, e precifica as horas com o rate card do cliente. Os valores de terceiros são indicativos até que um fornecedor os orce. Compare versões mais curtas ou mais baratas, substitua os valores indicativos pelo orçamento do fornecedor e aprove a proposta.

A agência, o cliente, o vídeo, a proposta, os fornecedores, as tarifas e os valores deste exemplo são ilustrativos. Os Tipos Orçamento, os rate cards e as etapas dependem da configuração da sua agência.

<Walkthrough
  subtitle="Exemplo de conversa entre um gerente de contas e o Assistente de IA."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="De um vídeo de referência a uma primeira estimativa">
        O assistente diz o que vê no vídeo e transforma isso em horas da equipe e serviços de terceiros, para você ter um valor de partida antes de falar com os fornecedores.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Anexe o vídeo e diga para qual cliente e projeto ele é.',
          'Confira o que o assistente diz ver no vídeo.',
          'Compare as versões que o cliente pode escolher.',
          'Passe ao assistente os valores que o fornecedor orçou.',
          'Revise os detalhes e selecione Criar.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'O cliente quer um filme como este. Me dê uma primeira estimativa.',
          'Compare com uma versão de 30 segundos sem drone.',
          'Use o orçamento da produtora em vez dos seus valores.',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'O assistente começa descrevendo o que vê no vídeo. Corrija-o antes de confiar na estimativa.',
          'As horas são precificadas com o Rate Card do cliente. Os valores de terceiros são indicativos até que um fornecedor os orce.',
          'Nada é criado enquanto você compara versões. O assistente pede sua aprovação antes de criar a proposta.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Você">
    <p>A Solenna Energy quer um filme de marca como este para o projeto Brand Film 2027. Me dê uma primeira estimativa.</p>
    <p><strong>Anexo:</strong> reference_film.mp4</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>O que vejo no vídeo</strong></p>
    <ul>
      <li>Um filme de 60 segundos gravado em três locais: uma rua, um parque eólico filmado com drone e uma casa de família.</li>
      <li>Quatro atores, locução, música original e uma tela final animada.</li>
    </ul>
    <p><strong>Uma primeira estimativa para um filme parecido:</strong></p>
    <Walkthrough.DataTable
      columns={['Linha', 'Componente', 'Quantidade', 'Valor']}
      rows={[
        ['Concept and Script · Creative', 'Recursos', '24h', '€ 2.040'],
        ['Art Direction and End Card · Design', 'Recursos', '30h', '€ 2.100'],
        ['Script and Voice-over Text · Copywriting', 'Recursos', '10h', '€ 650'],
        ['Account Management · Accounts', 'Recursos', '20h', '€ 1.200'],
        ['Filming Day', 'Terceiros', '2 × € 2.800', '€ 5.600'],
        ['Drone Filming', 'Terceiros', '1 × € 1.200', '€ 1.200'],
        ['Casting and Talent', 'Terceiros', '4 × € 450', '€ 1.800'],
        ['Voice-over', 'Terceiros', '1 × € 650', '€ 650'],
        ['Music Licensing', 'Terceiros', '1 × € 1.500', '€ 1.500'],
        ['Post-production and Colour Grading', 'Terceiros', '1 × € 2.400', '€ 2.400'],
        ['Travel to Filming Location', 'Despesas', '1', '€ 400'],
      ]}
      note="Horas precificadas com o rate card Solenna Energy 2027, coluna Standard. Os valores de terceiros são indicativos. Total € 19.540."
    />
    <p><strong>A confirmar</strong></p>
    <ul>
      <li>O cliente quer a mesma duração, e versões curtas para redes sociais?</li>
      <li>Qual produtora vai filmar?</li>
    </ul>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Compare com uma versão de 30 segundos sem drone.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>A versão mais curta economiza € 4.000 em custos de terceiros:</strong></p>
    <Walkthrough.DataTable
      columns={['Cenário', 'Terceiros', 'Total']}
      rows={[
        ['A · 60 segundos, como a referência', '€ 13.150', '€ 19.540'],
        ['B · 30 segundos, um dia de filmagem, sem drone', '€ 9.150', '€ 15.540'],
      ]}
      note="As horas da equipe e o deslocamento são iguais nos dois."
    />
    <p><strong>Como interpretei sua pergunta</strong></p>
    <ul>
      <li>Assumido: um filme de 30 segundos precisa de um dia de filmagem, e o elenco, a locução, a música e a pós-produção se mantêm.</li>
    </ul>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Siga com o B. A Lumen Studio orçou € 6.700 para filmagem, atores e pós-produção. Mantenha a locução e a música como estão e crie a proposta.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.ApprovalCard
      title="Criar esta proposta"
      subtitle="Revise estes detalhes antes de eu criar."
      rows={[
        ['Cliente', 'Solenna Energy'],
        ['Projeto', 'Brand Film 2027'],
        ['Tipo Orçamento', 'Campaign'],
        ['Nome', 'Brand Film 2027 · 30 seconds'],
        ['Rate Card', 'Solenna Energy 2027 · Standard'],
        ['Recursos', '4 linhas, 84h, € 5.990'],
        ['Terceiros', 'Production, Lumen Studio, € 6.700 · Voice-over, € 650 · Music Licensing, € 1.500'],
        ['Despesas', 'Travel to Filming Location, € 400'],
        ['Total', '€ 15.240'],
      ]}
      actions={[{ label: 'Negar' }, { label: 'Criar', primary: true }]}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Revisei os detalhes e selecionei Criar.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.StatusChip status="Criado" label="2026 - 00431 · Brand Film 2027 · 30 seconds" />
    <p>A proposta foi criada em New, com um total de € 15.240. A locução e a música ainda têm valores indicativos. Atualize-os quando tiver os orçamentos.</p>
  </Walkthrough.Message>
</Walkthrough>

## Artigos relacionados

- [Comparar Cenários de Proposta Antes de Criar Uma](/docs/ai/use-cases/contracts-estimates-and-purchase-orders/discussing-estimate-scenarios-before-creation)
- [Criar uma Proposta a partir de um Arquivo](/docs/ai/use-cases/contracts-estimates-and-purchase-orders/creating-an-estimate-from-files)
- [Criar Proposta](/docs/product/commercial/estimates/create-estimate)
- [Assistente de IA](/docs/ai/ai-assistant)
