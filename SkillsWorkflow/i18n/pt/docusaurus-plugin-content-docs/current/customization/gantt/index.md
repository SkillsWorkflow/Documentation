---
id: index
title: Gantt
description: "Selecionar linhas no Gantt do Skills Workflow, duplicar jobs e editar vários jobs de uma só vez com a Ação em massa."
sidebar_label: Gantt
sidebar_position: 1
---

# Gantt

O Gantt mostra os jobs de um projeto numa linha temporal, com a hierarquia dos jobs numa grelha à esquerda. Esta página explica como trabalhar com as linhas dessa grelha: selecioná-las, duplicar jobs e alterar vários jobs numa só operação.

Para o percurso completo de construção de um planeamento — criar jobs pai e filho, dependências, datas e % concluída — consulte [Gantt Chart](../../university/projects%20management/gantt-chart.md) na University.

## Disponibilidade

O Gantt é disponibilizado por um workspace. O que aqui se descreve aplica-se à vista de Gantt configurada num workspace, e os botões da barra de ferramentas só aparecem quando esse workspace ativa a barra de ferramentas do Gantt.

Cada uma das duas ações sobre linhas tem os seus próprios requisitos:

- **Duplicate** exige permissão para criar jobs.
- **Bulk action** exige permissão para editar jobs, e o job tem de estar configurado para edição em massa — a mesma configuração que disponibiliza o botão de ação em massa nas listas.

Quando um requisito não é cumprido, o botão não é apresentado, em vez de aparecer desativado.

## Selecionar linhas

A primeira coluna da grelha do Gantt é uma coluna de seleção, igual à coluna de seleção usada nas listas do Skills Workflow. As suas caixas de seleção aparecem quando passa o rato sobre uma linha e mantêm-se visíveis enquanto a linha estiver selecionada.

- Marque a caixa de seleção de uma linha para a selecionar.
- Marque a caixa de seleção no cabeçalho da coluna para selecionar todas as linhas.
- Marcar uma linha pai seleciona também tudo o que está por baixo dela.
- Clicar na célula WBS de uma linha seleciona a linha inteira. Mantenha **Ctrl** (**Cmd** no macOS) para adicionar ou remover uma linha da seleção, ou **Shift** para estender a seleção a partir da última linha em que clicou.

Clicar em qualquer outra célula seleciona essa célula em vez da linha, para que copiar e colar valores entre células continue a funcionar como numa folha de cálculo.

![img-box-shadow](/img/gantt/01-row-selection.png)
<figcaption>Coluna de seleção com uma linha pai e os seus filhos selecionados</figcaption>

## Duplicar jobs

**Duplicate** cria uma cópia de cada linha selecionada.

1. Selecione as linhas que quer copiar.
2. Clique em **Duplicate** na barra de ferramentas.
3. Reveja as cópias e clique em **Save**.

As cópias são colocadas junto das linhas de onde foram copiadas e começam em Rascunho. Só existem na vista até gravar: é o clique em **Save** que as cria como jobs.

Um pai duplicado leva consigo toda a sua estrutura, por isso selecionar um pai juntamente com os seus filhos continua a produzir uma cópia desse ramo, e não uma cópia por linha.

O **Duplicate** não afeta o que tiver copiado com **Copy row**, pelo que pode duplicar linhas sem perder a área de transferência.

![img-box-shadow](/img/gantt/02-duplicate.png)
<figcaption>Linhas duplicadas criadas em Rascunho por baixo das originais</figcaption>

## Editar vários jobs de uma só vez

**Bulk action** abre a mesma caixa de diálogo de edição em massa usada nas listas, aplicada às linhas selecionadas no Gantt.

1. Grave as alterações pendentes no Gantt.
2. Selecione as linhas que quer alterar.
3. Clique em **Bulk action** na barra de ferramentas.
4. Escolha o campo e o valor a aplicar e execute a operação.

A ação em massa escreve diretamente nos jobs selecionados. Quando termina, o Gantt é recarregado para que a grelha mostre o resultado gravado.

![img-box-shadow-popup](/img/gantt/03-bulk-action.png)
<figcaption>Ação em massa aplicada às linhas selecionadas no Gantt</figcaption>

## Regras e comportamento

- **Grave o seu trabalho antes de uma ação em massa.** Como a ação em massa recarrega o Gantt ao fechar, não pode ser executada enquanto existirem alterações por gravar. O Skills Workflow apresenta uma mensagem a pedir que grave primeiro.
- **Só jobs gravados podem ser editados em massa.** As linhas criadas no Gantt mas ainda não gravadas não têm ainda um job por trás, por isso ficam de fora da operação e uma mensagem indica que foram ignoradas. Grave primeiro se as quiser incluir.
- **As ações em massa estão limitadas a um número máximo de jobs de cada vez.** Selecionar mais do que o limite configurado mostra uma mensagem em vez de executar a operação.
- **As linhas duplicadas só são jobs depois de gravar.** Sair do Gantt sem gravar descarta-as, e o Skills Workflow avisa quando sai da página com alterações por gravar.
- **O Save só fica ativo quando há algo para gravar**, para que não possa ser premido sem efeito.

## Configuração

A barra de ferramentas do Gantt e as suas ações sobre linhas são configuradas no componente Gantt do workspace:

- A barra de ferramentas, incluindo **Duplicate** e **Bulk action**, só é apresentada quando o componente Gantt está configurado para a mostrar.
- O número máximo de jobs abrangidos por uma única ação em massa é configurável no componente. Quando não está definido, o limite é de 100 jobs.
- A permissão para criar e para editar em massa segue a configuração do próprio job, e cada uma pode também ser desativada num Gantt específico através dos parâmetros do componente.

## Artigos relacionados

- [Gantt Chart](../../university/projects%20management/gantt-chart.md) — construir o planeamento de um projeto no Gantt.
