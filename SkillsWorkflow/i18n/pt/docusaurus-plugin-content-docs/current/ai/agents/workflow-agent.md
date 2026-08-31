---
id: workflow-agent
title: Agente de Workflows
description: "Consultar e configurar workflows — stages, transições, ações, papéis, motivos, equipas e mapeamentos — descrevendo a alteração que quer."
sidebar_label: Agente de Workflows
sidebar_position: 3
---

O Agente de Workflows trata do ciclo de vida em si: como um documento passa de um stage para o seguinte, quem o pode mover, e o que tem de acontecer pelo caminho. Use-o para perceber um workflow que herdou, ou para alterar um sem passar pelos ecrãs de configuração.

Ele configura workflows. Mover um documento concreto pelos seus stages é o [Agente de Documentos](/docs/ai/agents/document-agent).

## O que consegue fazer

- Explicar um workflow existente — os stages, as transições entre eles, e o que cada transição exige
- Acrescentar, alterar ou reordenar stages
- Criar transições entre stages, e definir o que cada transição pede
- Ajustar caminhos de aprovação e quem pode executar uma transição
- Alterar os motivos e as ações associados a uma transição
- Ler e definir as equipas e os mapeamentos que um workflow usa

## Como usar

1. Abra o [Assistente de IA](/docs/ai/ai-assistant) e selecione **Agente de Workflows**.
2. Indique o workflow, ou o tipo de documento a que pertence.
3. Peça-lhe primeiro para lhe mostrar o workflow quando estiver a alterar um que não construiu.
4. Descreva a alteração como resultado — *"ninguém fora do Jurídico pode aprovar isto"* em vez de uma lista de campos.

Comece por ler antes de escrever:

```
Mostra-me o workflow dos Deliverables.
```

Depois altere uma coisa de cada vez:

```
Acrescenta um passo de revisão jurídica antes de Approved, e só o Jurídico o pode tirar de lá.
```

## Regras e comportamento

- Peça uma alteração de cada vez. Um pedido amplo volta como uma proposta a trabalhar, não como um conjunto de edições já aplicadas.
- O agente valida a alteração antes de a aplicar, e diz-lhe quando uma alteração é recusada em vez de aplicar parte dela.
- Uma alteração ao workflow afeta todos os documentos que já estão nele. Leia o que ele propõe antes de aprovar.
- Os tipos de stage são definidos pelo sistema. Ver [Stage Types](/docs/administration/workflows/stage-types) para o significado de cada um.

## Artigos relacionados

- [Assistente de IA](/docs/ai/ai-assistant)
- [Agente de Documentos](/docs/ai/agents/document-agent)
- [Ferramentas](/docs/ai/ai-tools)
