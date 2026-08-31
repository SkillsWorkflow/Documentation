---
id: workspace-agent
title: Agente de Workspaces
description: "Construir e alterar workspaces e dashboards descrevendo o que quer — componentes, layout, filtros e fontes de dados — e editar os ficheiros por trás deles quando a alteração precisa de código."
sidebar_label: Agente de Workspaces
sidebar_position: 4
---

O Agente de Workspaces constrói e altera workspaces e dashboards. Descreve a vista que quer e ele produz uma alteração que revê antes de ser aplicada — um painel novo, outro filtro, um gráfico a ler de outro sítio, um workspace inteiro de raiz.

Trabalha a dois níveis, e passa de um para o outro sozinho:

- **A definição do workspace** — componentes, layout, fontes de dados, filtros, e como os componentes reagem uns aos outros. É a maior parte do trabalho.
- **Os ficheiros por trás de um workspace** — as funções JavaScript e a configuração JSON de que um workspace é feito. É aqui que uma alteração vai parar quando nenhuma definição a exprime: um formatador de coluna à medida, uma função que filtra por estado, um erro na configuração de um componente.

## O que consegue fazer

- Criar um workspace, ou acrescentar-lhe um componente — grelhas, formulários, gráficos, indicadores, quadros
- Alterar a configuração de um componente, os seus filtros e o seu layout
- Ligar um componente a uma fonte de dados, e ligar componentes entre si
- Ler o esquema de uma custom table ou um integration workflow, e validar uma alteração a qualquer um deles
- Ler e editar os ficheiros JavaScript e JSON por trás de um workspace
- Mostrar-lhe exatamente o que mudou antes de guardar

## Como usar

1. Abra o workspace que quer alterar, para que o agente o tenha em contexto.
2. Abra o [Assistente de IA](/docs/ai/ai-assistant), selecione **Agente de Workspaces**, e deixe ligado o interruptor de contexto **Workspace**.
3. Descreva uma alteração.
4. Reveja a proposta e aplique-a. Pode reverter uma pré-visualização que não seja o que queria.

Mantenha os pedidos a um painel, widget ou área de layout de cada vez. Um pedido amplo volta como sugestão para começar por algo concreto.

```
Adiciona um painel kanban com os deliverables desta semana, agrupados por stage.
```

```
Muda esta grelha para mostrar linha de filtros, e por omissão filtra pelo meu departamento.
```

Para uma alteração em código, indique o componente e o comportamento:

```
Corrige a configuração de colunas na grelha de estimates — a coluna de total aparece vazia nas linhas sem linhas de detalhe.
```

O agente lê primeiro os ficheiros relevantes, diz-lhe o que tenciona alterar, e só depois altera.

## Regras e comportamento

- Nada é guardado até o aplicar. Uma proposta pode ser revertida enquanto está a olhar para ela.
- O agente valida uma alteração ao workspace antes de a aplicar e reporta uma recusa em vez de a aplicar pela metade.
- Editar os ficheiros por trás de um workspace é trabalhar perto do código. Serve studio leads e administradores técnicos; para layout, filtros e definições de widgets, fique pelo caminho em linguagem corrente acima.
- O agente trabalha com as suas permissões, por isso só alcança workspaces que já consegue abrir.

## Artigos relacionados

- [Assistente de IA](/docs/ai/ai-assistant)
- [Ferramentas](/docs/ai/ai-tools)
- [Workspaces](/docs/build-and-extend/workspaces)
