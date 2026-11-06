---
id: estimating-from-a-reference-video
title: Obter uma Primeira Estimativa a Partir de um Vídeo de Referência
description: "Veja como um account manager anexa ao AI Assistant o vídeo de referência de um cliente, obtém uma primeira estimativa da equipa, das horas e dos custos de terceiros indicativos, compara uma versão mais curta e cria o estimate depois de a produtora enviar o orçamento."
sidebar_label: Estimate a Partir de um Vídeo de Referência
sidebar_position: 6
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

:::preview
Este caso de uso está em preview, a conversa mostra como se espera que o AI Assistant o trate, e o que hoje responde ou faz pode ser diferente deste exemplo.
:::

## Visão geral

Quando um cliente envia um vídeo e pede algo parecido, anexe o vídeo ao AI Assistant e peça uma primeira estimativa. O assistente descreve o que vê no vídeo, propõe a equipa, as horas por grupo de cargo e os serviços de terceiros de que a produção precisaria, e calcula o preço das horas com a rate card do cliente. Os valores de terceiros são indicativos até um fornecedor os orçamentar. Compare versões mais curtas ou mais baratas, substitua os valores indicativos pelo orçamento do fornecedor e aprove o estimate.

A agência, o cliente, o vídeo, o estimate, os fornecedores, as tarifas e os valores neste exemplo são ilustrativos. Os tipos de orçamento, as rate cards e as etapas dependem da configuração da sua agência.

<Walkthrough
  subtitle="Exemplo de conversa entre um account manager e o AI Assistant."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="De um vídeo de referência a uma primeira estimativa">
        O assistente diz-lhe o que vê no vídeo e transforma-o em horas da equipa e serviços de terceiros, para ter um valor de partida antes de falar com os fornecedores.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Anexe o vídeo e diga para que cliente e projeto é.',
          'Confira o que o assistente diz ver no vídeo.',
          'Compare as versões que o cliente pode escolher.',
          'Dê ao assistente os valores que o fornecedor orçamentou.',
          'Reveja os detalhes e selecione Criar.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'O cliente quer um filme como este. Dá-me uma primeira estimativa.',
          'Compara com uma versão de 30 segundos sem drone.',
          'Usa o orçamento da produtora em vez dos teus valores.',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'O assistente começa por descrever o que vê no vídeo. Corrija-o antes de confiar na estimativa.',
          'O preço das horas vem da Rate Card do cliente. Os valores de terceiros são indicativos até um fornecedor os orçamentar.',
          'Nada é criado enquanto compara versões. O assistente pede a sua aprovação antes de criar o estimate.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Você">
    <p>A Solenna Energy quer um filme de marca como este para o projeto Brand Film 2027. Dá-me uma primeira estimativa.</p>
    <p><strong>Anexo:</strong> reference_film.mp4</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>O que vejo no vídeo</strong></p>
    <ul>
      <li>Um filme de 60 segundos gravado em três locais: uma rua, um parque eólico filmado com drone e uma casa de família.</li>
      <li>Quatro atores, voz off, música original e um ecrã final animado.</li>
    </ul>
    <p><strong>Uma primeira estimativa para um filme parecido:</strong></p>
    <Walkthrough.DataTable
      columns={['Linha', 'Componente', 'Quantidade', 'Valor']}
      rows={[
        ['Concept and Script · Creative', 'Recursos', '24h', '2.040 €'],
        ['Art Direction and End Card · Design', 'Recursos', '30h', '2.100 €'],
        ['Script and Voice-over Text · Copywriting', 'Recursos', '10h', '650 €'],
        ['Account Management · Accounts', 'Recursos', '20h', '1.200 €'],
        ['Filming Day', 'Terceiros', '2 × 2.800 €', '5.600 €'],
        ['Drone Filming', 'Terceiros', '1 × 1.200 €', '1.200 €'],
        ['Casting and Talent', 'Terceiros', '4 × 450 €', '1.800 €'],
        ['Voice-over', 'Terceiros', '1 × 650 €', '650 €'],
        ['Music Licensing', 'Terceiros', '1 × 1.500 €', '1.500 €'],
        ['Post-production and Colour Grading', 'Terceiros', '1 × 2.400 €', '2.400 €'],
        ['Travel to Filming Location', 'Despesas', '1', '400 €'],
      ]}
      note="Horas com preço da rate card Solenna Energy 2027, coluna Standard. Os valores de terceiros são indicativos. Total 19.540 €."
    />
    <p><strong>A confirmar</strong></p>
    <ul>
      <li>O cliente quer a mesma duração, e versões curtas para redes sociais?</li>
      <li>Que produtora vai filmar?</li>
    </ul>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Compara com uma versão de 30 segundos sem drone.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>A versão mais curta poupa 4.000 € em custos de terceiros:</strong></p>
    <Walkthrough.DataTable
      columns={['Cenário', 'Terceiros', 'Total']}
      rows={[
        ['A · 60 segundos, como a referência', '13.150 €', '19.540 €'],
        ['B · 30 segundos, um dia de filmagem, sem drone', '9.150 €', '15.540 €'],
      ]}
      note="As horas da equipa e a deslocação são iguais nos dois."
    />
    <p><strong>Como interpretei a tua pergunta</strong></p>
    <ul>
      <li>Assumido: um filme de 30 segundos precisa de um dia de filmagem, e o elenco, a voz off, a música e a pós-produção mantêm-se.</li>
    </ul>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Avança com o B. A Lumen Studio orçamentou 6.700 € para filmagem, atores e pós-produção. Mantém a voz off e a música como as tens, e cria o estimate.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.ApprovalCard
      title="Criar este estimate"
      subtitle="Revê estes detalhes antes de eu o criar."
      rows={[
        ['Cliente', 'Solenna Energy'],
        ['Projeto', 'Brand Film 2027'],
        ['Tipo Orçamento', 'Campaign'],
        ['Nome', 'Brand Film 2027 · 30 seconds'],
        ['Rate Card', 'Solenna Energy 2027 · Standard'],
        ['Recursos', '4 linhas, 84h, 5.990 €'],
        ['Terceiros', 'Production, Lumen Studio, 6.700 € · Voice-over, 650 € · Music Licensing, 1.500 €'],
        ['Despesas', 'Travel to Filming Location, 400 €'],
        ['Total', '15.240 €'],
      ]}
      actions={[{ label: 'Negar' }, { label: 'Criar', primary: true }]}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Revi os detalhes e selecionei Criar.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.StatusChip status="Criado" label="2026 - 00431 · Brand Film 2027 · 30 seconds" />
    <p>O estimate foi criado em New, com um total de 15.240 €. A voz off e a música continuam com valores indicativos. Atualiza-os quando tiveres os orçamentos.</p>
  </Walkthrough.Message>
</Walkthrough>

## Artigos relacionados

- [Comparar Cenários de Estimate Antes de Criar um](/docs/ai/use-cases/contracts-estimates-and-purchase-orders/discussing-estimate-scenarios-before-creation)
- [Criar um Estimate a Partir de um Ficheiro](/docs/ai/use-cases/contracts-estimates-and-purchase-orders/creating-an-estimate-from-files)
- [Criar um Orçamento](/docs/product/commercial/estimates/create-estimate)
- [AI Assistant](/docs/ai/ai-assistant)
