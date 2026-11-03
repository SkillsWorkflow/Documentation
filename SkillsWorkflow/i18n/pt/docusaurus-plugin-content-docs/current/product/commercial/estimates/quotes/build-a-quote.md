---
id: build-a-quote
title: Construir uma cotação
description: "Adicionar entregáveis e os respetivos serviços, despesas e recursos à cotação de um orçamento, editar células como numa folha de cálculo e preencher os campos obrigatórios."
sidebar_label: Construir uma cotação
sidebar_position: 1
---

Uma cotação é uma lista de entregáveis. Cada entregável contém os serviços, as despesas e os recursos que formam o seu custo e a sua venda.

## Adicionar entregáveis e linhas

Cada lista termina numa linha vazia: **Escreva para adicionar um entregável…**, **Escreva para adicionar um serviço de terceiros…**, **Escreva para adicionar uma despesa…** ou **Escreva para adicionar um recurso…**. Comece a escrever nessa linha para criar o entregável ou a linha.

Um entregável novo recebe o **IVA** predefinido do orçamento. A sua **Data de Início** e a sua **Data de Conclusão** são a data e a data de validade do orçamento.

Em **Serviços**, a linha vazia sugere o serviço do próprio entregável. Prima `Enter` para o adicionar. Uma linha com o serviço do entregável recebe a descrição do entregável.

![img-box-shadow](/img/quotes/02-lines.png)
<figcaption>As linhas de um entregável, com o serviço sugerido na linha vazia</figcaption>

## Adicionar várias funções de uma vez

Em **Recursos**, a lista **Grupo de Cargo** pesquisa qualquer parte da função, do departamento ou da empresa. Marque vários grupos de tipologia nas respetivas caixas ou com `Ctrl`+`Enter` (`⌘`+`Enter` no macOS) e depois prima `Enter` ou clique em **Adicionar**. Cada um passa a ser uma linha de recurso.

## Editar células

Selecione uma célula e escreva, ou prima `Enter` ou `F2`. `Enter` mantém o valor e desce. `Esc` cancela a edição.

`Shift`+`Enter` abre a descrição numa caixa maior.

Numa célula de lista, a lista abre enquanto escreve. Use `↑` e `↓` para escolher e `Enter` para selecionar.

## Copiar, colar e preencher

- `Ctrl`+`C` e `Ctrl`+`V` copiam e colam células, também de e para o Excel. Colar nas linhas vazias adiciona linhas.
- `Shift` com as setas, ou `Shift`+clique, seleciona várias células. `Ctrl`+`D` preenche-as para baixo a partir da primeira linha selecionada.
- `Alt`+`C` copia as linhas selecionadas e `Alt`+`V` cola-as como linhas novas, também noutro orçamento. As mesmas opções estão no menu do botão direito.
- `Delete` limpa as células selecionadas.

No macOS, use `⌘` em vez de `Ctrl`.

## Mover e remover linhas

Arraste um entregável ou uma linha pela pega, ou prima `Ctrl`+`Shift`+`↑` ou `↓`. Uma linha nova só pode ser movida depois de gravada. Enquanto uma lista está ordenada ou filtrada, as suas linhas ficam no lugar.

`Ctrl`+`Backspace` (`⌘`+`⌫` no macOS) remove a linha, e premir de novo repõe-na. A linha é eliminada quando grava. Um entregável que tenha linhas, ou que já tenha sido faturado, não pode ser removido.

## Campos obrigatórios

Uma célula com fundo amarelo-claro é obrigatória e ainda está vazia.

Se gravar com um campo obrigatório vazio, a gravação para. A página lista o que falta, põe essas células a vermelho, abre o entregável e a secção, e passa para a primeira.

![img-box-shadow](/img/quotes/03-required.png)
<figcaption>Um campo obrigatório deixado vazio: a célula fica vermelha ao gravar</figcaption>

## Artigos relacionados

- [Preços e margens](/docs/product/commercial/estimates/quotes/prices-and-margins)
- [Colunas, ordenação e filtros](/docs/product/commercial/estimates/quotes/columns-sorting-and-filters)
- [Atalhos de teclado](/docs/product/commercial/estimates/quotes/keyboard-shortcuts)
