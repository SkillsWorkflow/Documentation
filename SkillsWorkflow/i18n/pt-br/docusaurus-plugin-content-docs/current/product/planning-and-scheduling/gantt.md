---
id: gantt
title: Gantt
description: "Planeje um projeto ou um job em uma linha do tempo: adicione jobs, organize-os em fases, ligue-os com dependências, copie, duplique e edite vários de uma vez."
sidebar_label: Gantt
sidebar_position: 1
---
O Gantt coloca os seus jobs em uma linha do tempo. A grade à esquerda mostra a hierarquia dos jobs, e as barras à direita mostram quando cada job acontece e quais jobs esperam por outros.

Ele funciona do mesmo jeito em um projeto e em um job. Abra a aba **GANTT** de um projeto para planejar o projeto inteiro, ou a aba **GANTT** de um job para planejar esse job e os jobs abaixo dele.

![img-box-shadow](/img/product/planning-and-scheduling/gantt/gantt-project.png)
<figcaption>Um projeto planejado em três fases, com dependências entre os jobs</figcaption>

## Disponibilidade

O Gantt vem de um workspace. A aba **GANTT** aparece nos projetos e nos jobs onde esse workspace está instalado, e a barra de ferramentas fica desligada a menos que o workspace a ligue.

O **Duplicar** exige permissão para criar jobs. A **Ação em massa** exige permissão para editar jobs, e o job precisa estar preparado para edição em massa, como está nas listas. Um botão cujo requisito não é cumprido fica oculto.

## A barra de ferramentas

O lado esquerdo da barra é onde você altera o planejamento:

![img-box-shadow](/img/product/planning-and-scheduling/gantt/gantt-toolbar-left.png)
<figcaption>O lado esquerdo da barra de ferramentas do Gantt</figcaption>

| Controle | O que faz |
|---|---|
| **Select job type...** | O departamento e o tipo do próximo job que você adicionar. |
| **Adicionar** e **Remover** | Adiciona um job, ou remove o selecionado. |
| **Outdent selected** e **Indent selected** | Sobem ou descem as linhas selecionadas um nível na hierarquia. |
| **Duplicar** e **Ação em massa** | Atuam sobre as linhas selecionadas. Veja as seções abaixo. |
| **Desfazer** e **Refazer** | Voltam ou avançam nas alterações não salvas. |
| **Salvar** | Salva todas as alterações. Fica desativado até haver algo para salvar. |

O lado direito muda o que você vê:

![img-box-shadow](/img/product/planning-and-scheduling/gantt/gantt-toolbar-right.png)
<figcaption>O lado direito da barra de ferramentas do Gantt</figcaption>

| Controle | O que faz |
|---|---|
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

O **Adicionar** coloca o job novo logo abaixo da linha que você selecionou, no mesmo nível. Sem nada selecionado, ele vai para o fim da lista.

Para mudar um job de lugar, arraste a linha pela alça (os pontos à esquerda) e solte-a onde ela deve ficar. Uma linha laranja mostra onde ela vai ficar. Solte-a entre as linhas de uma fase para colocá-la nessa fase.

![img-box-shadow](/img/product/planning-and-scheduling/gantt/gantt-drag-under-job.png)
<figcaption>Arrastando um job novo para a fase Creative Production</figcaption>

Você também pode clicar com o botão direito em um job e escolher **Adicionar...** > **Subtarefa** para adicionar um job abaixo dele.

As linhas novas são salvas como jobs em Rascunho.

## Planejar os jobs

Altere as datas na grade, ou arraste uma barra pela linha do tempo para movê-la e arraste as pontas para aumentá-la ou diminuí-la. Uma linha pai abrange os jobs abaixo dela, e a sua **%Done** acompanha a deles.

Use **Antecessor** ou **Successor** para indicar qual job precisa terminar antes de outro começar. As setas na linha do tempo mostram essas ligações.

Clicar na célula WBS de uma linha abre a pré-visualização do job.

## Selecionar linhas

A primeira coluna da grade tem as caixas de seleção. Elas aparecem quando você passa o mouse sobre uma linha, e ficam visíveis enquanto a linha estiver selecionada.

Marque a caixa no cabeçalho da coluna para selecionar todas as linhas. Marcar um pai seleciona tudo o que está abaixo dele.

Clicar na célula WBS de uma linha também seleciona a linha inteira. Ctrl (Cmd no macOS) adiciona ou remove uma linha. Shift estende a partir da última linha em que você clicou. Clicar em qualquer outra célula seleciona a célula, não a linha.

![img-box-shadow](/img/product/planning-and-scheduling/gantt/01-row-selection.png)
<figcaption>Marcar Creative Production seleciona também os jobs abaixo dele</figcaption>

## Copiar e colar

Clique com o botão direito em uma linha selecionada para ter **Copiar linha** e **Colar linha**. O **Colar linha** insere as linhas copiadas logo depois da linha em que você clicou, no mesmo nível, em Rascunho. Clique em **Salvar** para criá-las.

![img-box-shadow](/img/product/planning-and-scheduling/gantt/gantt-row-menu.png)
<figcaption>Copiar linha e Colar linha em um job selecionado</figcaption>

Clique com o botão direito em uma célula fora de uma seleção de linhas para ter **Copiar** e **Colar**, que copiam o valor da célula.

## Duplicar jobs

Selecione as linhas e clique em **Duplicar**. As cópias aparecem junto das originais em Rascunho, e viram jobs quando você clica em **Salvar**.

Um pai duplicado leva o seu ramo junto, então selecionar um pai junto com os filhos continua produzindo uma cópia do ramo.

O **Duplicar** não mexe na área de transferência do **Copiar linha**.

![img-box-shadow](/img/product/planning-and-scheduling/gantt/02-duplicate.png)
<figcaption>Uma cópia de Social media carousel, em Rascunho, logo abaixo da original</figcaption>

## Editar vários jobs de uma vez

A **Ação em massa** abre a caixa de diálogo de edição em massa sobre as linhas selecionadas. É a mesma caixa de diálogo usada nas listas.

Salve o Gantt primeiro. A caixa de diálogo grava diretamente nos jobs, e o Gantt recarrega quando ela fecha.

![img-box-shadow-popup](/img/product/planning-and-scheduling/gantt/03-bulk-action.png)
<figcaption>Ação em massa sobre dois jobs selecionados</figcaption>

## Filtrar

Clique em **Filtros** e digite no campo abaixo de um cabeçalho de coluna. A grade mantém as linhas que correspondem e os pais acima delas.

![img-box-shadow](/img/product/planning-and-scheduling/gantt/gantt-filter-bar.png)
<figcaption>Filtrando a coluna do nome por "launch"</figcaption>

## Regras e comportamento

Com alterações não salvas no Gantt, a ação em massa para e o Skills Workflow pede que você salve.

As linhas que você ainda não salvou não têm um job por trás. A ação em massa ignora essas linhas e informa o resultado.

Uma ação em massa abrange no máximo 100 jobs. Selecionar mais mostra uma mensagem.

As linhas não salvas se perdem se você sair do Gantt sem salvar. O Skills Workflow avisa antes de você sair da página.

No Gantt de um job, o job que você abriu fica no topo e tudo fica dentro dele:

- Os jobs que você adicionar ou colar ficam sempre dentro dele.
- O job do topo não pode ser excluído nem descer de nível a partir do seu próprio Gantt.
- As linhas diretamente abaixo dele não podem subir de nível. Tentar isso mostra *As tarefas diretamente abaixo desta atividade não podem subir de nível.*
- O que você salva ali aparece também no Gantt do projeto.

![img-box-shadow](/img/product/planning-and-scheduling/gantt/gantt-job.png)
<figcaption>O Gantt do job Creative Production</figcaption>

## Configuração

No componente Gantt do workspace:

- `showToolbar` mostra a barra de ferramentas, incluindo o Duplicar e a Ação em massa.
- `bulkCapLimit` define quantos jobs uma ação em massa pode abranger. Sem ele o limite é 100.
- `allowCreate` e `allowBulk` desligam qualquer uma das ações neste Gantt. Caso contrário seguem as permissões do próprio job.

## Artigos relacionados

- [Criar um Projeto](/docs/product/projects-and-jobs/create-projects)
- [Como criar atividades](/docs/product/projects-and-jobs/create-jobs)
- [Tempo Planejado](/docs/product/planning-and-scheduling/resourcing/planned-hours)
