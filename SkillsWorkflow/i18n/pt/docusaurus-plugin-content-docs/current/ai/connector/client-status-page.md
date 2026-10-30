---
id: ai-connector-client-status-page
title: Partilhar uma Página de Estado em Tempo Real com um Cliente
description: "Peça ao Claude uma página que mostre a um cliente o estado da sua campanha, os seus deliverables e o que está à espera dele, publicada num só endereço que mostra sempre os dados de hoje."
sidebar_label: Uma Página de Estado para um Cliente
sidebar_position: 3
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

Dê a um cliente um só endereço onde vê como está a correr o trabalho: o progresso da campanha, os deliverables a entregar e as aprovações que estão à espera dele. Peça a página ao Claude, reveja-a e envie o endereço ao cliente. A página lê o Skills Workflow sempre que é aberta, por isso ninguém a atualiza à mão e ninguém envia um deck de estado por email à sexta-feira.

## Disponibilidade

Disponível. Precisa do [conector do Skills Workflow no Claude](/docs/ai/connector/ai-connector-setup). O cliente inicia sessão com o seu próprio utilizador do Skills Workflow e vê apenas os projetos e jobs que esse utilizador pode ver.

## Como pedir

1. Indique o cliente, o projeto ou a campanha, e o que o cliente deve ver na página.
2. Confira o que o Claude propõe para cada secção e os dados por trás dela. Peça alterações antes de publicar.
3. O Claude publica a página com o nome do cliente e dá-lhe o endereço.
4. Abra o endereço como um utilizador com as permissões do cliente e só depois envie-o.

A agência, o cliente, os números e o endereço neste exemplo são ilustrativos.

<Walkthrough
  title="Claude"
  subtitle="Exemplo de conversa entre um account manager e o Claude."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="Um ponto de situação que se mantém atualizado">
        O Claude constrói a página a partir dos seus projetos e jobs. Sempre que o cliente a abre, mostra os dados de hoje.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Indique o cliente e a campanha.',
          'Diga o que o cliente deve e não deve ver.',
          'Reveja as secções antes de o Claude publicar.',
          'Abra o endereço como o cliente antes de o enviar.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'Cria uma página de estado para a campanha de Natal da Northwind Coffee.',
          'Põe no topo as aprovações que estão à espera do cliente.',
          'Esconde as horas, o cliente não as deve ver.',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'O cliente precisa de um utilizador do Skills Workflow para abrir a página.',
          'Qualquer utilizador com sessão iniciada que conheça o endereço pode abri-la. Restrinja a pasta por perfil quando isso importar.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Você">
    <p>Cria uma página de estado para a campanha Christmas 2026 da Northwind Coffee. Devem ver o progresso, o que tem entrega nas próximas duas semanas e tudo o que está à espera da aprovação deles. Sem horas nem custos.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Claude">
    <p>Esta é a página que vou publicar para a Northwind Coffee:</p>
    <Walkthrough.FieldTable
      rows={[
        ['Cabeçalho', 'Nome da campanha, responsável e progresso geral'],
        ['À espera de si', 'Jobs numa etapa de aprovação do cliente, os mais antigos primeiro'],
        ['A entregar nas próximas duas semanas', 'Deliverables com a data de entrega e a etapa'],
        ['Entregue', 'Jobs fechados este mês'],
        ['Fica de fora', 'Horas, rates e custos'],
      ]}
    />
    <p>O endereço será <code>/portal/northwind-coffee/christmas-2026/</code>. Posso publicar?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Sim, publica.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Claude">
    <Walkthrough.StatusChip status="Publicado" label="northwind-coffee/christmas-2026" />
    <p>Está publicada. Abra-a com um utilizador que tenha as permissões da Northwind Coffee antes de enviar o endereço: é exatamente isso que o cliente vai ver.</p>
  </Walkthrough.Message>
</Walkthrough>

## Regras e comportamento

- O endereço tem duas partes, o cliente e a página: `/portal/{client}/{page}/`. Ambas usam apenas letras minúsculas, números e hífenes.
- Pedir uma alteração volta a publicar a página inteira no mesmo endereço. O cliente mantém a mesma ligação.
- A página não tem imagens próprias para além das que o Claude incorpora nela. Os logótipos e as fotografias de pessoas e clientes vêm do Skills Workflow.
- Abrir a página sem sessão mostra o início de sessão do Skills Workflow e volta à página a seguir.

## Artigos relacionados

- [Um Endereço para Tudo o que um Cliente Abre](/docs/ai/connector/ai-connector-client-hub)
- [Construir um Relatório a Partir dos Seus Dados](/docs/ai/connector/ai-connector-reports)
- [Portais de Cliente](/docs/ai/ai-portals)
- [Ligar o Claude, o Codex ou o GitHub Copilot ao Skills Workflow](/docs/ai/connector/ai-connector-setup)
