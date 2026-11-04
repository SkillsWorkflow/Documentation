---
id: gantt
title: Gantt
description: "O Gantt mostra os jobs em uma linha do tempo, para um projeto inteiro ou para um job e os jobs abaixo dele: montar o planejamento, copiar linhas, duplicar jobs e editar vários de uma vez."
sidebar_label: Gantt
sidebar_position: 1
---
O Gantt mostra os jobs em uma linha do tempo, com a hierarquia dos jobs em uma grade à esquerda e as barras à direita. Abra-o na aba **GANTT** de um projeto para planejar o projeto inteiro, ou na aba **GANTT** de um job para planejar esse job e os jobs abaixo dele.

![img-box-shadow](/img/product/planning-and-scheduling/gantt/gantt-project.png)
<figcaption>O Gantt de um projeto</figcaption>

## Disponibilidade

O Gantt vem de um workspace. A aba **GANTT** aparece nos projetos e nos jobs onde esse workspace está instalado, e a barra de ferramentas fica desligada a menos que o workspace a ligue.

O **Duplicar** exige permissão para criar jobs. A **Ação em massa** exige permissão para editar jobs, e o job precisa estar preparado para edição em massa, como está nas listas. Um botão cujo requisito não é cumprido fica oculto.

## A barra de ferramentas

![img-box-shadow-sm](/img/product/planning-and-scheduling/gantt/gantt-toolbar.png)
<figcaption>A barra de ferramentas do Gantt</figcaption>

Da esquerda para a direita:

| Controle | O que faz |
|---|---|
| **Select job type...** | O departamento e o tipo do próximo job que você adicionar. |
| **Adicionar** e **Remover** | Adiciona um job, ou remove o selecionado. |
| **Outdent selected** e **Indent selected** | Sobem ou descem as linhas selecionadas um nível na hierarquia. |
| **Duplicar** e **Ação em massa** | Atuam sobre as linhas selecionadas. Veja as seções abaixo. |
| **Desfazer** e **Refazer** | Voltam ou avançam nas alterações não salvas. |
| **Salvar** | Salva todas as alterações. Fica desativado até haver algo para salvar. |
| **Column chooser** | Mostra ou oculta colunas. |
| **Filtros** | Mostra um campo de filtro abaixo de cada cabeçalho de coluna. |
| **Expand tasks** e **Collapse tasks** | Abrem ou fecham todas as linhas pai. |
| **Critical path** | Destaca o caminho crítico. |
| **Previous period**, **Hoje** e **Next period** | Deslocam a linha do tempo. |
| **Zoom out**, **Zoom in** e **Zoom to fit** | Mudam a escala da linha do tempo. O **Zoom to fit** mostra todos os jobs de uma vez. |
| **Reset layout** | Restaura as colunas e larguras padrão. |

## Adicionar jobs

1. Escolha o departamento e o tipo de job em **Select job type...**.
2. Clique em **Adicionar**.
3. Dê nome à nova linha e defina as datas na grade, ou arraste a barra.
4. Clique em **Salvar**.

As linhas novas são salvas como jobs em Rascunho.

Para adicionar um job abaixo de uma linha específica, clique com o botão direito na linha e escolha **Adicionar...** > **Subtarefa**.

## Planejar os jobs

Altere as datas na grade, ou arraste uma barra pela linha do tempo para movê-la e arraste as pontas para aumentá-la ou diminuí-la. Uma linha pai abrange os jobs abaixo dela.

A cor da barra acompanha a etapa do job. Preencha **Antecessor** ou **Successor** para ligar jobs que dependem uns dos outros.

Clicar na célula WBS de uma linha abre a pré-visualização do job.

## Selecionar linhas

A primeira coluna da grade tem as caixas de seleção. Elas aparecem quando você passa o mouse sobre uma linha, e ficam visíveis enquanto a linha estiver selecionada.

Marque a caixa no cabeçalho da coluna para selecionar todas as linhas. Marcar um pai seleciona tudo o que está abaixo dele.

Clicar na célula WBS de uma linha também seleciona a linha inteira. Ctrl (Cmd no macOS) adiciona ou remove uma linha. Shift estende a partir da última linha em que você clicou. Clicar em qualquer outra célula seleciona a célula, não a linha.

![img-box-shadow](/img/product/planning-and-scheduling/gantt/01-row-selection.png)
<figcaption>Uma linha pai marcada, com as linhas abaixo dela também selecionadas</figcaption>

## Copiar e colar

Clique com o botão direito em uma linha selecionada para ter **Copiar linha** e **Colar linha**. O **Colar linha** insere as linhas copiadas logo depois da linha em que você clicou, no mesmo nível, em Rascunho. Clique em **Salvar** para criá-las.

![img-box-shadow-sm](/img/product/planning-and-scheduling/gantt/gantt-row-menu.png)
<figcaption>Copiar linha e Colar linha em uma linha selecionada</figcaption>

Clique com o botão direito em uma célula fora de uma seleção de linhas para ter **Copiar** e **Colar**, que copiam o valor da célula.

## Duplicar jobs

Selecione as linhas e clique em **Duplicar**. As cópias aparecem junto das originais em Rascunho, e viram jobs quando você clica em **Salvar**.

Um pai duplicado leva o seu ramo junto, então selecionar um pai junto com os filhos continua produzindo uma cópia do ramo.

O **Duplicar** não mexe na área de transferência do **Copiar linha**.

![img-box-shadow](/img/product/planning-and-scheduling/gantt/02-duplicate.png)
<figcaption>Uma linha duplicada criada em Rascunho abaixo da original</figcaption>

## Editar vários jobs de uma vez

A **Ação em massa** abre a caixa de diálogo de edição em massa sobre as linhas selecionadas. É a mesma caixa de diálogo usada nas listas.

Salve o Gantt primeiro. A caixa de diálogo grava diretamente nos jobs, e o Gantt recarrega quando ela fecha.

![img-box-shadow-popup](/img/product/planning-and-scheduling/gantt/03-bulk-action.png)
<figcaption>Ação em massa aplicada às linhas selecionadas no Gantt</figcaption>

## Filtrar

Clique em **Filtros** e digite no campo abaixo de um cabeçalho de coluna. A grade mantém as linhas que correspondem e os pais acima delas.

![img-box-shadow](/img/product/planning-and-scheduling/gantt/gantt-filter-bar.png)
<figcaption>O filtro do Nome mostrando só o job que corresponde</figcaption>

## O Gantt de um job

A aba **GANTT** de um job mostra esse job no topo, com todos os jobs abaixo dele. Ela tem a mesma barra de ferramentas, os mesmos menus e as mesmas colunas que o Gantt de um projeto.

![img-box-shadow](/img/product/planning-and-scheduling/gantt/gantt-job.png)
<figcaption>O Gantt aberto em um job</figcaption>

Os jobs que você adicionar ou colar aqui ficam dentro desse job. O job do topo fica no lugar:

- Ele não pode ser excluído nem descer de nível a partir do seu próprio Gantt.
- As linhas diretamente abaixo dele não podem subir de nível. Tentar isso mostra *As tarefas diretamente abaixo desta atividade não podem subir de nível.*

As alterações salvas aparecem também no Gantt do projeto.

## Regras e comportamento

Com alterações não salvas no Gantt, a ação em massa para e o Skills Workflow pede que você salve.

As linhas que você ainda não salvou não têm um job por trás. A ação em massa ignora essas linhas e informa o resultado.

Uma ação em massa abrange no máximo 100 jobs. Selecionar mais mostra uma mensagem.

As linhas não salvas se perdem se você sair do Gantt sem salvar. O Skills Workflow avisa antes de você sair da página.

## Configuração

No componente Gantt do workspace:

- `showToolbar` mostra a barra de ferramentas, incluindo o Duplicar e a Ação em massa.
- `bulkCapLimit` define quantos jobs uma ação em massa pode abranger. Sem ele o limite é 100.
- `allowCreate` e `allowBulk` desligam qualquer uma das ações neste Gantt. Caso contrário seguem as permissões do próprio job.

## Artigos relacionados

- [Criar um Projeto](/docs/product/projects-and-jobs/create-projects)
- [Como criar atividades](/docs/product/projects-and-jobs/create-jobs)
- [Tempo Planejado](/docs/product/planning-and-scheduling/resourcing/planned-hours)
