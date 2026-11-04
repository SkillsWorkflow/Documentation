---
id: gantt
title: Gantt
description: "Planeie um projeto ou um job numa linha temporal: adicione jobs, organize-os em fases, ligue-os com dependências, copie, duplique e edite vários de uma vez."
sidebar_label: Gantt
sidebar_position: 1
---
O Gantt põe os seus jobs numa linha temporal. A grelha à esquerda mostra a hierarquia dos jobs, e as barras à direita mostram quando cada job decorre e que jobs esperam por outros.

Funciona da mesma forma num projeto e num job. Abra o separador **GANTT** de um projeto para planear o projeto inteiro, ou o separador **GANTT** de um job para planear esse job e os jobs abaixo dele.

![img-box-shadow](/img/product/planning-and-scheduling/gantt/gantt-project.png)
<figcaption>Um projeto planeado em três fases, com dependências entre os jobs</figcaption>

## Disponibilidade

O Gantt vem de um workspace. O separador **GANTT** aparece nos projetos e nos jobs onde esse workspace está instalado, e a barra de ferramentas está desligada a menos que o workspace a ligue.

O **Duplicar** exige permissão para criar jobs. A **Ação em massa** exige permissão para editar jobs, e o job tem de estar preparado para edição em massa, como está nas listas. Um botão cujo requisito não é cumprido fica escondido.

## A barra de ferramentas

O lado esquerdo da barra é onde altera o planeamento:

![img-box-shadow](/img/product/planning-and-scheduling/gantt/gantt-toolbar-left.png)
<figcaption>O lado esquerdo da barra de ferramentas do Gantt</figcaption>

| Controlo | O que faz |
|---|---|
| **Select job type...** | O departamento e o tipo do próximo job que adicionar. |
| **Adicionar** e **Remover** | Adiciona um job, ou remove o selecionado. |
| **Outdent selected** e **Indent selected** | Sobem ou descem as linhas selecionadas um nível na hierarquia. |
| **Duplicar** e **Ação em massa** | Atuam sobre as linhas selecionadas. Veja as secções abaixo. |
| **Desfazer** e **Refazer** | Andam para trás ou para a frente nas alterações por gravar. |
| **Gravar** | Grava todas as alterações. Fica desativado até haver algo para gravar. |

O lado direito muda o que vê:

![img-box-shadow](/img/product/planning-and-scheduling/gantt/gantt-toolbar-right.png)
<figcaption>O lado direito da barra de ferramentas do Gantt</figcaption>

| Controlo | O que faz |
|---|---|
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

O **Adicionar** põe o job novo logo abaixo da linha que tem selecionada, ao mesmo nível. Sem nada selecionado, vai para o fim da lista.

Para mudar um job de sítio, arraste a linha pela pega (os pontos à esquerda) e largue-a onde ela pertence. Uma linha laranja mostra onde vai ficar. Largue-a entre as linhas de uma fase para a pôr nessa fase.

![img-box-shadow](/img/product/planning-and-scheduling/gantt/gantt-drag-under-job.png)
<figcaption>Arrastar um job novo para a fase Creative Production</figcaption>

Também pode clicar com o botão direito num job e escolher **Adicionar...** > **Subtarefa** para adicionar um job abaixo dele.

As linhas novas são gravadas como jobs em Rascunho.

## Planear os jobs

Altere as datas na grelha, ou arraste uma barra ao longo da linha temporal para a mover e arraste as pontas para a alongar ou encurtar. Uma linha pai abrange os jobs abaixo dela, e a sua **%Done** acompanha a deles.

Use **Antecessor** ou **Successor** para indicar que job tem de terminar antes de outro começar. As setas na linha temporal mostram essas ligações.

Clicar na célula WBS de uma linha abre a pré-visualização do job.

## Selecionar linhas

A primeira coluna da grelha tem as caixas de seleção. Aparecem quando passa o rato sobre uma linha, e ficam visíveis enquanto a linha estiver selecionada.

Marque a caixa no cabeçalho da coluna para selecionar todas as linhas. Marcar um pai seleciona tudo o que está por baixo dele.

Clicar na célula WBS de uma linha também seleciona a linha inteira. Ctrl (Cmd no macOS) adiciona ou remove uma linha. Shift estende a partir da última linha em que clicou. Clicar em qualquer outra célula seleciona a célula, não a linha.

![img-box-shadow](/img/product/planning-and-scheduling/gantt/01-row-selection.png)
<figcaption>Marcar Creative Production seleciona também os jobs abaixo dele</figcaption>

## Copiar e colar

Clique com o botão direito numa linha selecionada para ter **Copiar linha** e **Colar linha**. O **Colar linha** insere as linhas copiadas a seguir à linha em que clicou, ao mesmo nível, em Rascunho. Clique em **Gravar** para as criar.

![img-box-shadow](/img/product/planning-and-scheduling/gantt/gantt-row-menu.png)
<figcaption>Copiar linha e Colar linha num job selecionado</figcaption>

Clique com o botão direito numa célula fora de uma seleção de linhas para ter **Copiar** e **Colar**, que copiam o valor da célula.

## Duplicar jobs

Selecione as linhas e clique em **Duplicar**. As cópias aparecem junto das originais em Rascunho, e passam a jobs quando clica em **Gravar**.

Um pai duplicado leva o seu ramo consigo, por isso selecionar um pai juntamente com os filhos continua a produzir uma cópia do ramo.

O **Duplicar** não mexe na área de transferência do **Copiar linha**.

![img-box-shadow](/img/product/planning-and-scheduling/gantt/02-duplicate.png)
<figcaption>Uma cópia de Social media carousel, em Rascunho, logo abaixo da original</figcaption>

## Editar vários jobs de uma só vez

A **Ação em massa** abre a caixa de diálogo de edição em massa sobre as linhas selecionadas. É a mesma caixa de diálogo usada nas listas.

Grave o Gantt primeiro. A caixa de diálogo escreve diretamente nos jobs, e o Gantt recarrega quando fecha.

![img-box-shadow-popup](/img/product/planning-and-scheduling/gantt/03-bulk-action.png)
<figcaption>Ação em massa sobre dois jobs selecionados</figcaption>

## Filtrar

Clique em **Filtros** e escreva no campo por baixo de um cabeçalho de coluna. A grelha mantém as linhas que correspondem e os pais acima delas.

![img-box-shadow](/img/product/planning-and-scheduling/gantt/gantt-filter-bar.png)
<figcaption>Filtrar a coluna do nome por "launch"</figcaption>

## Regras e comportamento

Com alterações por gravar no Gantt, a ação em massa para e o Skills Workflow pede que grave.

As linhas que ainda não gravou não têm um job por trás. A ação em massa ignora-as e informa-o do resultado.

Uma ação em massa abrange no máximo 100 jobs. Selecionar mais mostra uma mensagem.

As linhas por gravar perdem-se se sair do Gantt sem gravar. O Skills Workflow avisa antes de sair da página.

No Gantt de um job, o job que abriu fica no topo e tudo fica dentro dele:

- Os jobs que adicionar ou colar ficam sempre dentro dele.
- O job do topo não pode ser eliminado nem descer de nível a partir do seu próprio Gantt.
- As linhas diretamente abaixo dele não podem subir de nível. Tentá-lo mostra *As tarefas diretamente abaixo desta entrega não podem subir de nível.*
- O que grava aí aparece também no Gantt do projeto.

![img-box-shadow](/img/product/planning-and-scheduling/gantt/gantt-job.png)
<figcaption>O Gantt do job Creative Production</figcaption>

## Configuração

No componente Gantt do workspace:

- `showToolbar` mostra a barra de ferramentas, incluindo o Duplicar e a Ação em massa.
- `bulkCapLimit` define quantos jobs uma ação em massa pode abranger. Sem ele o limite é 100.
- `allowCreate` e `allowBulk` desligam qualquer uma das ações neste Gantt. De outro modo seguem as permissões do próprio job.

## Artigos relacionados

- [Criar um Projeto](/docs/product/projects-and-jobs/create-projects)
- [Como criar atividades](/docs/product/projects-and-jobs/create-jobs)
- [Tempo Planeado](/docs/product/planning-and-scheduling/resourcing/planned-hours)
