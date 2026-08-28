---
id: index
title: Gantt
description: "Selecionar linhas no Gantt do Skills Workflow, duplicar jobs e editar vários jobs de uma só vez com a Ação em massa."
sidebar_label: Gantt
sidebar_position: 1
---

# Gantt

O Gantt mostra os jobs de um projeto numa linha temporal, com a hierarquia dos jobs numa grelha à esquerda. As linhas dessa grelha podem ser selecionadas e tratadas em conjunto: duplicadas, ou editadas de uma só vez com uma ação em massa.

Para construir um planeamento de raiz, consulte [Gantt Chart](../../university/projects%20management/gantt-chart.md) na University.

## Disponibilidade

O Gantt vem de um workspace, e a sua barra de ferramentas está desligada a menos que o workspace a ligue.

O Duplicate exige permissão para criar jobs. A Bulk action exige permissão para editar jobs, e o job tem de estar preparado para edição em massa, como está nas listas. Um botão cujo requisito não é cumprido fica escondido.

## Selecionar linhas

A primeira coluna da grelha tem as caixas de seleção. Aparecem quando passa o rato sobre uma linha, e ficam visíveis enquanto a linha estiver selecionada.

Marque a caixa no cabeçalho da coluna para selecionar todas as linhas. Marcar um pai seleciona tudo o que está por baixo dele.

Clicar na célula WBS de uma linha seleciona a linha inteira. Ctrl (Cmd no macOS) adiciona ou remove uma linha. Shift estende a partir da última linha em que clicou. Clicar em qualquer outra célula seleciona a célula, não a linha.

![img-box-shadow](/img/gantt/01-row-selection.png)
<figcaption>Coluna de seleção com uma linha pai e os seus filhos selecionados</figcaption>

## Duplicar jobs

Selecione as linhas e clique em **Duplicate**. As cópias aparecem junto das originais em Rascunho, e passam a jobs quando clica em **Save**.

Um pai duplicado leva o seu ramo consigo, por isso selecionar um pai juntamente com os filhos continua a produzir uma cópia do ramo.

O Duplicate não mexe na área de transferência do **Copy row**.

![img-box-shadow](/img/gantt/02-duplicate.png)
<figcaption>Linhas duplicadas criadas em Rascunho por baixo das originais</figcaption>

## Editar vários jobs de uma só vez

A **Bulk action** abre a caixa de diálogo de edição em massa sobre as linhas selecionadas. É a mesma caixa de diálogo usada nas listas.

Grave o Gantt primeiro. A caixa de diálogo escreve diretamente nos jobs, e o Gantt recarrega quando fecha.

![img-box-shadow-popup](/img/gantt/03-bulk-action.png)
<figcaption>Ação em massa aplicada às linhas selecionadas no Gantt</figcaption>

## Regras e comportamento

Com alterações por gravar no Gantt, a ação em massa para e o Skills Workflow pede que grave.

As linhas que ainda não gravou não têm um job por trás. A ação em massa ignora-as e informa-o do resultado.

Uma ação em massa abrange no máximo 100 jobs. Selecionar mais mostra uma mensagem.

As linhas duplicadas perdem-se se sair do Gantt sem gravar. O Skills Workflow avisa antes de sair da página.

O Save fica desativado até haver algo para gravar.

## Configuração

No componente Gantt do workspace:

- `showToolbar` mostra a barra de ferramentas, incluindo o Duplicate e a Bulk action.
- `bulkCapLimit` define quantos jobs uma ação em massa pode abranger. Sem ele o limite é 100.
- `allowCreate` e `allowBulk` desligam qualquer uma das ações neste Gantt. De outro modo seguem as permissões do próprio job.

## Artigos relacionados

- [Gantt Chart](../../university/projects%20management/gantt-chart.md), construir o planeamento de um projeto no Gantt.
