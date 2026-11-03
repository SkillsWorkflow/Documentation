---
id: build-a-quote
title: Montar um orçamento
description: "Adicione entregáveis e seus serviços, despesas e recursos ao orçamento de uma proposta, edite células como em uma planilha e preencha os campos obrigatórios."
sidebar_label: Montar um orçamento
sidebar_position: 1
---

Um orçamento é uma lista de entregáveis. Cada entregável reúne os serviços, despesas e recursos que formam seu custo e sua venda.

## Adicionar entregáveis e linhas

Toda lista termina com uma linha vazia: **Digite para adicionar um entregável…**, **Digite para adicionar um serviço de terceiros…**, **Digite para adicionar uma despesa…** ou **Digite para adicionar um recurso…**. Comece a digitar nessa linha para criar o entregável ou a linha.

Um novo entregável recebe os **Impostos** padrão da proposta. Sua **Data de Início** e sua **Data de Conclusão** são a data e a data de expiração da proposta.

Em **Serviços**, a linha vazia sugere o serviço do próprio entregável. Pressione `Enter` para adicioná-lo. Uma linha com o serviço do entregável recebe a descrição do entregável.

![img-box-shadow](/img/quotes/02-lines.png)
<figcaption>As linhas de um entregável, com o serviço sugerido na linha vazia</figcaption>

## Adicionar várias funções de uma vez

Em **Recursos**, a lista **Grupo de Cargo** pesquisa qualquer parte da função, do departamento ou da empresa. Marque vários grupos de cargo com as caixas de seleção ou com `Ctrl`+`Enter` (`⌘`+`Enter` no macOS) e pressione `Enter` ou clique em **Adicionar**. Cada um vira uma linha de recurso.

## Editar células

Selecione uma célula e digite, ou pressione `Enter` ou `F2`. `Enter` mantém o valor e desce. `Esc` cancela a edição.

`Shift`+`Enter` abre a descrição em uma caixa maior.

Em uma célula de lista, a lista abre enquanto você digita. Use `↑` e `↓` para escolher e `Enter` para selecionar.

## Copiar, colar e preencher

- `Ctrl`+`C` e `Ctrl`+`V` copiam e colam células, inclusive de e para o Excel. Colar nas linhas vazias adiciona linhas.
- `Shift` com as setas, ou `Shift`+clique, seleciona várias células. `Ctrl`+`D` as preenche para baixo a partir da primeira linha selecionada.
- `Alt`+`C` copia as linhas selecionadas e `Alt`+`V` as cola como novas linhas, inclusive em outra proposta. As mesmas opções estão no menu do botão direito.
- `Delete` limpa as células selecionadas.

No macOS, use `⌘` no lugar de `Ctrl`.

## Mover e remover linhas

Arraste um entregável ou uma linha pela alça, ou pressione `Ctrl`+`Shift`+`↑` ou `↓`. Uma linha nova pode ser movida depois de salva. Enquanto uma lista está ordenada ou filtrada, suas linhas ficam no lugar.

`Ctrl`+`Backspace` (`⌘`+`⌫` no macOS) remove a linha, e pressionar de novo a restaura. A linha é excluída quando você salva. Um entregável que tem linhas, ou que já foi faturado, não pode ser removido.

## Campos obrigatórios

Uma célula com fundo amarelo-claro é obrigatória e ainda está vazia.

Quando você salva com um campo obrigatório vazio, o salvamento é interrompido. A página lista o que falta, deixa essas células em vermelho, abre o entregável e a seção e vai até a primeira delas.

![img-box-shadow](/img/quotes/03-required.png)
<figcaption>Um campo obrigatório deixado vazio: a célula fica vermelha quando você salva</figcaption>

## Artigos relacionados

- [Preços e margens](/docs/product/commercial/estimates/quotes/prices-and-margins)
- [Colunas, ordenação e filtros](/docs/product/commercial/estimates/quotes/columns-sorting-and-filters)
- [Atalhos de teclado](/docs/product/commercial/estimates/quotes/keyboard-shortcuts)
