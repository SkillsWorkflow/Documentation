---
id: gantt
title: Gantt
description: "O Gantt mostra os jobs numa linha temporal, para um projeto inteiro ou para um job e os jobs abaixo dele: construir o planeamento, copiar linhas, duplicar jobs e editar vários de uma vez."
sidebar_label: Gantt
sidebar_position: 1
---
O Gantt mostra os jobs numa linha temporal, com a hierarquia dos jobs numa grelha à esquerda e as barras à direita. Abra-o no separador **GANTT** de um projeto para planear o projeto inteiro, ou no separador **GANTT** de um job para planear esse job e os jobs abaixo dele.

![img-box-shadow](/img/product/planning-and-scheduling/gantt/gantt-project.png)
<figcaption>O Gantt de um projeto</figcaption>

## Disponibilidade

O Gantt vem de um workspace. O separador **GANTT** aparece nos projetos e nos jobs onde esse workspace está instalado, e a barra de ferramentas está desligada a menos que o workspace a ligue.

O **Duplicar** exige permissão para criar jobs. A **Ação em massa** exige permissão para editar jobs, e o job tem de estar preparado para edição em massa, como está nas listas. Um botão cujo requisito não é cumprido fica escondido.

## A barra de ferramentas

![img-box-shadow-sm](/img/product/planning-and-scheduling/gantt/gantt-toolbar.png)
<figcaption>A barra de ferramentas do Gantt</figcaption>

Da esquerda para a direita:

| Controlo | O que faz |
|---|---|
| **Select job type...** | O departamento e o tipo do próximo job que adicionar. |
| **Adicionar** e **Remover** | Adiciona um job, ou remove o selecionado. |
| **Outdent selected** e **Indent selected** | Sobem ou descem as linhas selecionadas um nível na hierarquia. |
| **Duplicar** e **Ação em massa** | Atuam sobre as linhas selecionadas. Veja as secções abaixo. |
| **Desfazer** e **Refazer** | Andam para trás ou para a frente nas alterações por gravar. |
| **Gravar** | Grava todas as alterações. Fica desativado até haver algo para gravar. |
| **Column chooser** | Mostra ou esconde colunas. |
| **Filtros** | Mostra um campo de filtro por baixo de cada cabeçalho de coluna. |
| **Expand tasks** e **Collapse tasks** | Abrem ou fecham todas as linhas pai. |
| **Critical path** | Destaca o caminho crítico. |
| **Previous period**, **Hoje** e **Next period** | Deslocam a linha temporal. |
| **Zoom out**, **Zoom in** e **Zoom to fit** | Mudam a escala da linha temporal. O **Zoom to fit** mostra todos os jobs de uma vez. |
| **Reset layout** | Repõe as colunas e larguras por omissão. |

## Adicionar jobs

1. Escolha o departamento e o tipo de job em **Select job type...**.
2. Clique em **Adicionar**.
3. Dê nome à nova linha e defina as datas na grelha, ou arraste a barra.
4. Clique em **Gravar**.

As linhas novas são gravadas como jobs em Rascunho.

Para adicionar um job por baixo de uma linha específica, clique com o botão direito na linha e escolha **Adicionar...** > **Subtarefa**.

## Planear os jobs

Altere as datas na grelha, ou arraste uma barra ao longo da linha temporal para a mover e arraste as pontas para a alongar ou encurtar. Uma linha pai abrange os jobs abaixo dela.

A cor da barra acompanha a etapa do job. Preencha **Antecessor** ou **Successor** para ligar jobs que dependem uns dos outros.

Clicar na célula WBS de uma linha abre a pré-visualização do job.

## Selecionar linhas

A primeira coluna da grelha tem as caixas de seleção. Aparecem quando passa o rato sobre uma linha, e ficam visíveis enquanto a linha estiver selecionada.

Marque a caixa no cabeçalho da coluna para selecionar todas as linhas. Marcar um pai seleciona tudo o que está por baixo dele.

Clicar na célula WBS de uma linha também seleciona a linha inteira. Ctrl (Cmd no macOS) adiciona ou remove uma linha. Shift estende a partir da última linha em que clicou. Clicar em qualquer outra célula seleciona a célula, não a linha.

![img-box-shadow](/img/product/planning-and-scheduling/gantt/01-row-selection.png)
<figcaption>Uma linha pai marcada, com as linhas abaixo dela também selecionadas</figcaption>

## Copiar e colar

Clique com o botão direito numa linha selecionada para ter **Copiar linha** e **Colar linha**. O **Colar linha** insere as linhas copiadas a seguir à linha em que clicou, ao mesmo nível, em Rascunho. Clique em **Gravar** para as criar.

![img-box-shadow-sm](/img/product/planning-and-scheduling/gantt/gantt-row-menu.png)
<figcaption>Copiar linha e Colar linha numa linha selecionada</figcaption>

Clique com o botão direito numa célula fora de uma seleção de linhas para ter **Copiar** e **Colar**, que copiam o valor da célula.

## Duplicar jobs

Selecione as linhas e clique em **Duplicar**. As cópias aparecem junto das originais em Rascunho, e passam a jobs quando clica em **Gravar**.

Um pai duplicado leva o seu ramo consigo, por isso selecionar um pai juntamente com os filhos continua a produzir uma cópia do ramo.

O **Duplicar** não mexe na área de transferência do **Copiar linha**.

![img-box-shadow](/img/product/planning-and-scheduling/gantt/02-duplicate.png)
<figcaption>Uma linha duplicada criada em Rascunho por baixo da original</figcaption>

## Editar vários jobs de uma só vez

A **Ação em massa** abre a caixa de diálogo de edição em massa sobre as linhas selecionadas. É a mesma caixa de diálogo usada nas listas.

Grave o Gantt primeiro. A caixa de diálogo escreve diretamente nos jobs, e o Gantt recarrega quando fecha.

![img-box-shadow-popup](/img/product/planning-and-scheduling/gantt/03-bulk-action.png)
<figcaption>Ação em massa aplicada às linhas selecionadas no Gantt</figcaption>

## Filtrar

Clique em **Filtros** e escreva no campo por baixo de um cabeçalho de coluna. A grelha mantém as linhas que correspondem e os pais acima delas.

![img-box-shadow](/img/product/planning-and-scheduling/gantt/gantt-filter-bar.png)
<figcaption>O filtro do Nome a mostrar só o job que corresponde</figcaption>

## O Gantt de um job

O separador **GANTT** de um job mostra esse job no topo, com todos os jobs abaixo dele. Tem a mesma barra de ferramentas, os mesmos menus e as mesmas colunas que o Gantt de um projeto.

![img-box-shadow](/img/product/planning-and-scheduling/gantt/gantt-job.png)
<figcaption>O Gantt aberto num job</figcaption>

Os jobs que adicionar ou colar aqui ficam dentro desse job. O job do topo fica no lugar:

- Não pode ser eliminado nem descer de nível a partir do seu próprio Gantt.
- As linhas diretamente abaixo dele não podem subir de nível. Tentá-lo mostra *As tarefas diretamente abaixo desta entrega não podem subir de nível.*

As alterações gravadas aparecem também no Gantt do projeto.

## Regras e comportamento

Com alterações por gravar no Gantt, a ação em massa para e o Skills Workflow pede que grave.

As linhas que ainda não gravou não têm um job por trás. A ação em massa ignora-as e informa-o do resultado.

Uma ação em massa abrange no máximo 100 jobs. Selecionar mais mostra uma mensagem.

As linhas por gravar perdem-se se sair do Gantt sem gravar. O Skills Workflow avisa antes de sair da página.

## Configuração

No componente Gantt do workspace:

- `showToolbar` mostra a barra de ferramentas, incluindo o Duplicar e a Ação em massa.
- `bulkCapLimit` define quantos jobs uma ação em massa pode abranger. Sem ele o limite é 100.
- `allowCreate` e `allowBulk` desligam qualquer uma das ações neste Gantt. De outro modo seguem as permissões do próprio job.

## Artigos relacionados

- [Criar um Projeto](/docs/product/projects-and-jobs/create-projects)
- [Como criar atividades](/docs/product/projects-and-jobs/create-jobs)
- [Tempo Planeado](/docs/product/planning-and-scheduling/resourcing/planned-hours)
