---
id: document-agent
title: Agente de Documentos
description: "Criar, atualizar, duplicar, encontrar e mover jobs, deliverables e outros documentos descrevendo o que precisa, com um cartão de aprovação antes de qualquer escrita."
sidebar_label: Agente de Documentos
sidebar_position: 2
---

O Agente de Documentos faz o trabalho que de outra forma faria através de formulários: criar um job, escrever o brief, preencher campos personalizados, mudar quem está na equipa, avançar para o stage seguinte. Descreve o resultado; ele descobre que registos isso significa e pede-lhe aprovação antes de escrever.

É o agente a escolher para tudo o que termina com um documento a existir ou a mudar.

## O que consegue fazer

- Criar um job ou deliverable, com o brief escrito a partir do template de briefing do job type
- Atualizar num job existente o título, prioridade, esforço, valor de negócio, datas, job type e os indicadores de planeável, bloqueado e timesheet
- Duplicar um Job, Deliverable, Project, Estimate ou Request, opcionalmente levando a descrição, a equipa e os valores dos campos personalizados
- Ler e reescrever o brief de um documento
- Ler e definir valores de campos personalizados
- Adicionar e remover membros da equipa, em vários papéis numa só alteração
- Mover um documento para outro stage do workflow
- Pesquisar qualquer tipo de documento, e abrir um em popup ou navegar até ele
- Anexar ao brief um ficheiro que largou no chat, ou publicá-lo no feed do documento

Para a lista completa das ferramentas por trás disto, ver [Ferramentas](/docs/ai/ai-tools).

## Como usar

1. Abra o [Assistente de IA](/docs/ai/ai-assistant) e selecione **Agente de Documentos**.
2. Descreva o que quer. Indique o cliente, o projeto ou o job se os souber.
3. Responda aos seletores que ele levantar. Quando um nome corresponde a mais do que um registo, pergunta qual em vez de adivinhar.
4. Leia o cartão de aprovação e aprove, recuse, ou edite antes um valor no próprio cartão.

A trabalhar a partir de um documento já aberto no ecrã, deixe ligado o interruptor de contexto **Document**. O agente passa a saber de que documento fala sem lhe ser dito.

### Criar um job

Descreva o trabalho pelas mesmas palavras que usaria com um colega, e inclua tudo o que o brief deve dizer.

```
Cria um job para a Northwind, campanha de primavera, artwork para o email de lançamento.
Prazo até ao fim da próxima semana.
```

O agente resolve o cliente, o projeto, o departamento e o job type, e pergunta onde um nome for ambíguo. Antes de criar, lê o template de briefing do job type e escreve a sua descrição dentro dessa estrutura, para que o brief siga o formato da agência em vez de chegar como um parágrafo. O cartão de aprovação mostra os campos resolvidos e o brief redigido; corrija aí o título ou a descrição se algum estiver errado.

### Duplicar um documento

Peça uma cópia e diga o que deve ser diferente:

```
Duplica este job, mas este é para YouTube.
```

O agente lê o brief de origem, reescreve o nome e o brief para a diferença indicada, e deixa herdado tudo o resto. Cliente, projeto, departamento e job type vêm sempre do original e não podem ser alterados aqui. Levanta a pergunta sobre levar ou não a descrição, a equipa e os valores dos campos personalizados, a não ser que já o tenha dito.

Uma duplicação cria um documento novo. Para corrigir um título ou um brief num documento que já existe — incluindo a cópia que acabou de fazer — peça a alteração; não peça outra duplicação.

### Mudar de stage

```
Move o SKILLS0059S1492 para Client Approval.
```

O agente lista as transições realmente disponíveis nesse documento naquele momento, escolhe uma e pede aprovação. Se a transição exigir um comentário, um motivo, horas, um ficheiro ou campos adicionais, recolhe-os primeiro.

## Regras e comportamento

- Tudo o que escreve pede aprovação primeiro, e recusar não muda nada.
- O agente trabalha com as suas permissões. Um documento que não consegue ver, não consegue encontrar.
- Não é possível reenquadrar: cliente, projeto, departamento e business object type de um documento ficam fixos assim que ele existe.
- Os campos personalizados são escritos pelo campo configurado, nunca pela etiqueta no ecrã, por isso renomear uma etiqueta não quebra uma alteração.
- O resultado de `Generate from template` depende de o job type ter um template de briefing configurado. Sem ele, o brief é escrito apenas a partir da conversa.

## Artigos relacionados

- [Assistente de IA](/docs/ai/ai-assistant)
- [Ferramentas](/docs/ai/ai-tools)
- [Agente de Workflows](/docs/ai/agents/workflow-agent)
- [Agente de Escrita](/docs/ai/agents/writing-agent)
- [Ações de IA](/docs/ai/ai-actions)
