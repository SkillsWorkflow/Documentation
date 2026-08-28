---
id: index
title: Gantt
description: "Selecionar linhas no Gantt do Skills Workflow, duplicar jobs e editar vários jobs de uma só vez com a Ação em massa."
sidebar_label: Gantt
sidebar_position: 1
---

# Gantt

O Gantt mostra os jobs de um projeto em uma linha do tempo, com a hierarquia dos jobs em uma grade à esquerda. As linhas dessa grade podem ser selecionadas e tratadas em conjunto: duplicadas, ou editadas de uma vez com uma ação em massa.

Para montar um cronograma do zero, consulte [Gantt Chart](../../university/projects%20management/gantt-chart.md) na University.

## Disponibilidade

O Gantt vem de um workspace, e sua barra de ferramentas fica desligada a menos que o workspace a ligue.

O Duplicate exige permissão para criar jobs. A Bulk action exige permissão para editar jobs, e o job precisa estar preparado para edição em massa, como está nas listas. Um botão cujo requisito não é atendido fica oculto.

## Selecionar linhas

A primeira coluna da grade tem as caixas de seleção. Elas aparecem quando você passa o mouse sobre uma linha, e permanecem visíveis enquanto a linha estiver selecionada.

Marque a caixa no cabeçalho da coluna para selecionar todas as linhas. Marcar um pai seleciona tudo o que está abaixo dele.

Clicar na célula WBS de uma linha seleciona a linha inteira. Ctrl (Cmd no macOS) adiciona ou remove uma linha. Shift estende a partir da última linha clicada. Clicar em qualquer outra célula seleciona a célula, não a linha.

![img-box-shadow](/img/gantt/01-row-selection.png)
<figcaption>Coluna de seleção com uma linha pai e seus filhos selecionados</figcaption>

## Duplicar jobs

Selecione as linhas e clique em **Duplicate**. As cópias aparecem ao lado das originais em Rascunho, e viram jobs quando você clica em **Save**.

Um pai duplicado leva seu ramo junto, por isso selecionar um pai com os filhos ainda produz uma cópia do ramo.

O Duplicate não mexe na área de transferência do **Copy row**.

![img-box-shadow](/img/gantt/02-duplicate.png)
<figcaption>Linhas duplicadas criadas em Rascunho abaixo das originais</figcaption>

## Editar vários jobs de uma só vez

A **Bulk action** abre a caixa de diálogo de edição em massa sobre as linhas selecionadas. É a mesma caixa de diálogo usada nas listas.

Salve o Gantt primeiro. A caixa de diálogo grava diretamente nos jobs, e o Gantt recarrega ao fechar.

![img-box-shadow-popup](/img/gantt/03-bulk-action.png)
<figcaption>Ação em massa aplicada às linhas selecionadas no Gantt</figcaption>

## Regras e comportamento

Com alterações não salvas no Gantt, a ação em massa para e o Skills Workflow pede que você salve.

As linhas que você ainda não salvou não têm um job por trás. A ação em massa as ignora e informa o resultado.

Uma ação em massa abrange no máximo 100 jobs. Selecionar mais exibe uma mensagem.

As linhas duplicadas se perdem se você sair do Gantt sem salvar. O Skills Workflow avisa antes de sair da página.

O Save fica desativado até haver algo para salvar.

## Configuração

No componente Gantt do workspace:

- `showToolbar` mostra a barra de ferramentas, incluindo o Duplicate e a Bulk action.
- `bulkCapLimit` define quantos jobs uma ação em massa pode abranger. Sem ele o limite é 100.
- `allowCreate` e `allowBulk` desligam qualquer uma das ações neste Gantt. Caso contrário seguem as permissões do próprio job.

## Artigos relacionados

- [Gantt Chart](../../university/projects%20management/gantt-chart.md), montar o cronograma de um projeto no Gantt.
