---
id: index
title: Gantt
description: "Selecionar linhas no Gantt do Skills Workflow, duplicar jobs e editar vários jobs de uma só vez com a Ação em massa."
sidebar_label: Gantt
sidebar_position: 1
---

# Gantt

O Gantt mostra os jobs de um projeto em uma linha do tempo, com a hierarquia dos jobs em uma grade à esquerda. Esta página explica como trabalhar com as linhas dessa grade: selecioná-las, duplicar jobs e alterar vários jobs em uma única operação.

Para o passo a passo completo de construção de um cronograma — criar jobs pai e filho, dependências, datas e % concluída — consulte [Gantt Chart](../../university/projects%20management/gantt-chart.md) na University.

## Disponibilidade

O Gantt é disponibilizado por um workspace. O que é descrito aqui se aplica à visão de Gantt configurada em um workspace, e os botões da barra de ferramentas só aparecem quando esse workspace ativa a barra de ferramentas do Gantt.

Cada uma das duas ações sobre linhas tem seus próprios requisitos:

- **Duplicate** exige permissão para criar jobs.
- **Bulk action** exige permissão para editar jobs, e o job precisa estar configurado para edição em massa — a mesma configuração que disponibiliza o botão de ação em massa nas listas.

Quando um requisito não é atendido, o botão não é exibido, em vez de aparecer desabilitado.

## Selecionar linhas

A primeira coluna da grade do Gantt é uma coluna de seleção, igual à coluna de seleção usada nas listas do Skills Workflow. Suas caixas de seleção aparecem quando você passa o mouse sobre uma linha e permanecem visíveis enquanto a linha estiver selecionada.

- Marque a caixa de seleção de uma linha para selecioná-la.
- Marque a caixa de seleção no cabeçalho da coluna para selecionar todas as linhas.
- Marcar uma linha pai também seleciona tudo o que está abaixo dela.
- Clicar na célula WBS de uma linha seleciona a linha inteira. Mantenha **Ctrl** (**Cmd** no macOS) para adicionar ou remover uma linha da seleção, ou **Shift** para estender a seleção a partir da última linha clicada.

Clicar em qualquer outra célula seleciona essa célula em vez da linha, de modo que copiar e colar valores entre células continue funcionando como em uma planilha.

![img-box-shadow](/img/gantt/01-row-selection.png)
<figcaption>Coluna de seleção com uma linha pai e seus filhos selecionados</figcaption>

## Duplicar jobs

**Duplicate** cria uma cópia de cada linha selecionada.

1. Selecione as linhas que deseja copiar.
2. Clique em **Duplicate** na barra de ferramentas.
3. Revise as cópias e clique em **Save**.

As cópias são colocadas ao lado das linhas de onde foram copiadas e começam em Rascunho. Elas existem apenas na visão até você salvar: é o clique em **Save** que as cria como jobs.

Um pai duplicado leva junto toda a sua estrutura, portanto selecionar um pai junto com seus filhos ainda produz uma cópia desse ramo, e não uma cópia por linha.

O **Duplicate** não afeta o que você copiou com **Copy row**, então é possível duplicar linhas sem perder a área de transferência.

![img-box-shadow](/img/gantt/02-duplicate.png)
<figcaption>Linhas duplicadas criadas em Rascunho abaixo das originais</figcaption>

## Editar vários jobs de uma só vez

**Bulk action** abre a mesma caixa de diálogo de edição em massa usada nas listas, aplicada às linhas selecionadas no Gantt.

1. Salve as alterações pendentes no Gantt.
2. Selecione as linhas que deseja alterar.
3. Clique em **Bulk action** na barra de ferramentas.
4. Escolha o campo e o valor a aplicar e execute a operação.

A ação em massa grava diretamente nos jobs selecionados. Quando termina, o Gantt é recarregado para que a grade mostre o resultado salvo.

![img-box-shadow-popup](/img/gantt/03-bulk-action.png)
<figcaption>Ação em massa aplicada às linhas selecionadas no Gantt</figcaption>

## Regras e comportamento

- **Salve seu trabalho antes de uma ação em massa.** Como a ação em massa recarrega o Gantt ao fechar, ela não pode ser executada enquanto houver alterações não salvas. O Skills Workflow exibe uma mensagem pedindo que você salve primeiro.
- **Somente jobs salvos podem ser editados em massa.** As linhas criadas no Gantt mas ainda não salvas não têm um job por trás, portanto ficam de fora da operação e uma mensagem informa que foram ignoradas. Salve primeiro se quiser incluí-las.
- **As ações em massa são limitadas a um número máximo de jobs por vez.** Selecionar mais do que o limite configurado exibe uma mensagem em vez de executar a operação.
- **As linhas duplicadas só se tornam jobs depois de salvar.** Sair do Gantt sem salvar as descarta, e o Skills Workflow avisa quando você sai da página com alterações não salvas.
- **O Save só fica ativo quando há algo para salvar**, para que não possa ser pressionado sem efeito.

## Configuração

A barra de ferramentas do Gantt e suas ações sobre linhas são configuradas no componente Gantt do workspace:

- A barra de ferramentas, incluindo **Duplicate** e **Bulk action**, só é exibida quando o componente Gantt está configurado para mostrá-la.
- O número máximo de jobs abrangidos por uma única ação em massa é configurável no componente. Quando não está definido, o limite é de 100 jobs.
- A permissão para criar e para editar em massa segue a configuração do próprio job, e cada uma também pode ser desativada em um Gantt específico por meio dos parâmetros do componente.

## Artigos relacionados

- [Gantt Chart](../../university/projects%20management/gantt-chart.md) — construir o cronograma de um projeto no Gantt.
