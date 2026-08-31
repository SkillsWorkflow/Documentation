---
id: resource-scheduler
title: Planejamento de Equipes
description: "Planeje sua equipe em uma linha do tempo: atribua tarefas arrastando-as para uma pessoa, reserve horas por dia, leia a capacidade e veja férias, feriados e reservas junto ao trabalho."
sidebar_label: Planejamento de Equipes
sidebar_position: 3
---

O Planejamento de Equipes coloca sua equipe em uma linha do tempo. Cada linha é uma pessoa, cada barra é o trabalho reservado para ela, e o painel à direita reúne as tarefas que ainda esperam por alguém. Você atribui trabalho arrastando-o para uma linha, ajusta-o arrastando ou redimensionando a barra, e lê a carga de cada pessoa pelos indicadores de capacidade ao lado do nome.

![img](/img/product/planning-and-scheduling/resource-scheduler/board.png)
<figcaption>O Planejamento de Equipes, com a coluna de recursos, a linha do tempo e o painel de tarefas</figcaption>

## Lendo o quadro

A coluna de recursos à esquerda traz a foto, o nome e a tipologia de cada pessoa, uma barra de utilização e um percentual. O quadro abre agrupado por tipologia; o botão **Group By** muda isso.

As colunas de fim de semana e de dias não úteis aparecem sombreadas, e continuam assim em qualquer zoom.

Uma barra é colorida pelo estágio da sua tarefa, em tom esmaecido, com a cor cheia do estágio na borda esquerda. A entrada **Color** no menu ⋮ repinta as barras por usuário, responsável pelo projeto ou criador.

O que uma barra pode trazer:

| Marca | Significado |
|---|---|
| Logo do cliente | O cliente ao qual a tarefa pertence. |
| `NEST0018CR001 - Storyboard` | O número e o nome da tarefa. |
| Ícone de medidor colorido | Prioridade: verde baixa, laranja normal, vermelho alta. |
| Ícone de repetição no cabeçalho | Pelo menos um dia da barra faz parte de uma série recorrente. |
| Ícone de repetição dentro de uma célula de dia | Aquele dia é uma ocorrência recorrente. |
| Ícone de camadas dentro de uma célula de dia | Aquele dia tem mais de uma marcação. |
| `03:00` numa célula de dia | Horas reservadas naquele dia. |
| Faixa fina acima de cada dia | O quanto aquele dia está cheio em relação às horas requeridas da pessoa. |
| Pílula roxa | O projeto. |
| Pílula cinza | O work type. |

As barras também carregam estado. Uma barra **esmaecida** é trabalho cujas horas continuam reservadas em alguém que já não está atribuído a ele. Uma barra **hachurada** foi excluída por um filtro baseado no trabalho. Uma **barra cinza com spinner** está sendo criada, e uma barra atenuada está sendo salva.

### Tipos de barra

Nem toda barra é uma tarefa.

As **barras administrativas** trazem um ícone de maleta, um nome e um work type, e nenhum número de tarefa. São tempo reservado contra um work type em vez de contra trabalho de cliente, para coisas como produção ou treinamento. Crie uma arrastando sobre um espaço vazio e escolhendo **Workload** sem selecionar uma tarefa.

As **reservas** são barras planas com um ícone de marcador, coloridas por prioridade. Elas seguram dias para uma pessoa sem apontar para nenhuma tarefa.

**Férias, feriados e dias não úteis** são desenhados junto ao trabalho, deixando as ausências visíveis durante o planejamento.

## Quem e o que aparece

As linhas são os usuários ativos pelos quais você está definido como Responsável, mais a sua própria. Quem não tem equipe própria continua vendo a sua linha e as suas reservas.

Só é possível planejar aqui os deliverables marcados como **Plannable**. Essa marcação é definida no próprio deliverable.

O trabalho nos estágios excluídos pelo workspace nunca chega ao quadro. Por padrão, esses estágios são `Cancelled`, `Draft` e `Closed`.

## Modo Tasks e modo Workloads

A entrada **Mode** no menu ⋮ muda a forma como as barras são desenhadas.

No modo **Tasks**, uma barra é uma tarefa inteira naquela pessoa, do primeiro ao último dia, com uma célula por dia para as horas reservadas. No modo **Workloads**, uma barra é uma única reserva, e movê-la move apenas aquela reserva.

Os dois modos aceitam os mesmos gestos. Use o modo Tasks quando estiver posicionando o trabalho e definindo sua duração; use Workloads quando estiver reequilibrando horas já reservadas.

## Atribuir uma tarefa

1. Abra o painel de tarefas à direita.
2. Encontre a tarefa em **Unassigned** ou **All Tasks**.
3. Arraste-a para a pessoa e o dia desejados.

O editor **Add Workload** abre com a tarefa, a pessoa e o dia já preenchidos. Informe as horas e salve.

**Unassigned** lista as tarefas planejáveis da janela visível em que ninguém está reservado. **All Tasks** pesquisa todo o conjunto planejável, incluindo o trabalho já atribuído a alguém. O número ao lado do seletor conta as linhas listadas no momento, e a caixa de pesquisa filtra a lista que estiver aberta.

Cada linha mostra o número e o nome da tarefa, com o projeto e o cliente logo abaixo.

A lista é dividida conforme o prazo do trabalho:

| Grupo | Contém |
|---|---|
| **Delayed** | Tarefas cuja agreed date é anterior à janela visível. |
| A data de uma semana | Tarefas com prazo naquela semana. |
| **Next** | Tarefas com prazo posterior à janela visível. |
| **No Date** | Tarefas sem agreed date. |

Um duplo clique em uma linha do painel abre a pré-visualização da tarefa em vez de atribuí-la.

![img-box-shadow-sm](/img/product/planning-and-scheduling/resource-scheduler/tasks-panel.png)
<figcaption>O painel de tarefas</figcaption>

## Mover, estender e copiar trabalho

Arraste uma barra na horizontal para movê-la para outras datas. Arraste-a para outra linha para passar o trabalho àquela pessoa. Arraste a borda esquerda ou direita para alongá-la ou encurtá-la.

Mantenha **Shift** pressionado ao arrastar para uma segunda pessoa para copiar a reserva para ela e manter a original.

Se uma movimentação ou um redimensionamento levar o trabalho para fora das datas atuais da tarefa, o sistema pergunta *Do you want to add the Task to the dragged date?* antes de estender essas datas.

Reduzir a duração de uma tarefa pergunta antes de apagar as horas que outras pessoas reservaram fora do novo intervalo, e nomeia essas pessoas.

Mover uma carga de trabalho compartilhada por várias pessoas pergunta se a alteração vale apenas para aquela pessoa ou para todo o grupo.

## Reservar horas por dia

Toda barra de tarefa traz uma célula por dia coberto. Clique em uma célula para abrir o editor de carga de trabalho daquele dia e informe as horas. Os dias com horas reservadas as exibem como `hh:mm`.

Uma célula marcada com um ícone de camadas já tem mais de uma marcação naquele dia. O número exibido é o total delas, e o hover lista cada uma com suas horas, seu work type e seu horário de início.

## Criar trabalho no quadro

Arraste sobre um espaço vazio na linha de uma pessoa. Quando há mais de um tipo disponível, o sistema pergunta qual criar:

![img](/img/product/planning-and-scheduling/resource-scheduler/new-event.png)
<figcaption>Escolher o que criar</figcaption>

**Workload** abre o editor Add Workload no dia arrastado, já com aquela pessoa. Escolha uma tarefa para reservar tempo contra trabalho de cliente. Deixe a tarefa vazia e escolha um work type para reservar tempo administrativo, que é o que desenha as barras com ícone de maleta.

**Task** abre o formulário de criação de job com as datas arrastadas já preenchidas. Depois de a tarefa ser criada, o editor de carga de trabalho abre sobre ela, e é aí que as horas são reservadas e a pessoa é atribuída. Se cancelar nesse segundo passo, a tarefa continua existindo, à espera na lista Unassigned.

**Reservation** pede uma descrição e depois uma prioridade entre **Low**, **Medium** e **High**. Bloqueia os dias arrastados para aquela pessoa sem apontar para nenhuma tarefa.

Com apenas um tipo disponível, o gesto vai direto para ele e nada é perguntado. Quais tipos são oferecidos depende dos parâmetros do workspace e das suas roles.

## O editor Add Workload

Todos os caminhos que reservam tempo abrem o mesmo editor: o arraste vindo do painel de tarefas, o clique numa célula de dia e o drag-create **Workload**.

![img](/img/product/planning-and-scheduling/resource-scheduler/add-workload.png)
<figcaption>Atribuir cargas de trabalho</figcaption>

Ele faz mais do que receber um número de horas:

| Consegue | Efeito |
|---|---|
| Reservar várias pessoas de uma vez | A marcação passa a ser um grupo compartilhado. Movê-la depois pergunta se a alteração vale para uma pessoa ou para todo o grupo. |
| Reservar um intervalo de dias | As horas são distribuídas por todos os dias do intervalo, e não apenas pelo dia de origem. |
| Repetir a marcação | Uma série recorrente com sua própria data de fim. Os dias de uma série trazem um ícone de repetição, e são editados e excluídos como série. |
| Definir um work type | Obrigatório quando não há tarefa. Opcional numa tarefa, onde aparece como pílula cinza na barra. |
| Definir horas por dia, ou um horário de início e fim | Os horários só se aplicam na visão Day. Nas restantes, a marcação são horas contra o dia. |
| Levar uma descrição | Exibida ao passar o mouse sobre a marcação. |
| Mover a tarefa para outro estágio | A transição é executada ao salvar, e a barra é repintada com a cor do novo estágio. |

Ao editar uma marcação que cobre vários dias, **Apply changes to** decide se a edição atinge o dia que você abriu ou todos os dias da barra.

## Clique com o botão direito em uma barra

O clique com o botão direito oferece as ações aplicáveis ao que foi clicado.

| Ação | Efeito |
|---|---|
| **Open** | Abre a pré-visualização da tarefa. |
| **Delete this day** | Remove as horas reservadas no dia sob o ponteiro. |
| **Delete all days** | Remove todas as reservas da barra. |
| **Delete** | Remove a carga de trabalho ou, quando é recorrente, toda a série. |
| **Unassign** | Remove a pessoa da tarefa. |

Ao desatribuir alguém com horas reservadas de hoje em diante, o sistema pergunta se elas devem ser removidas. Responda **No** e as horas permanecem no quadro, desenhadas esmaecidas e sem ninguém atribuído.

Um duplo clique em uma barra abre a pré-visualização da tarefa. Uma reserva abre o seu próprio menu, no qual é possível alterar a descrição ou a prioridade, ou excluí-la.

## A barra de ferramentas

![img-box-shadow](/img/product/planning-and-scheduling/resource-scheduler/toolbar.png)
<figcaption>A barra de ferramentas do scheduler</figcaption>

**Filter resources...** restringe o quadro. As opções são agrupadas por categoria. Resource, Company, Department, Typology, Responsible e Tags vêm das pessoas. Deliverable Tags, Stage, Project, Client e Task vêm do trabalho. Um filtro baseado em pessoas oculta linhas; um filtro baseado no trabalho mantém a linha e hachura as barras que não correspondem.

O botão de funil filtra por carga: **All Users**, **Overbooked Only** (acima de 100%) ou **Available Only** (100% ou menos).

**Group By** empilha as linhas sob cabeçalhos. As opções são None, Company, Department, Typology, Project, Task (by Date), Client, Stage, Agreed Date e Task (by Priority).

O seletor de data define a âncora da janela visível. Suas setas avançam ou recuam um período, e seu calendário escolhe qualquer dia em qualquer zoom.

Quatro botões definem a amplitude:

| Zoom | Janela |
|---|---|
| **Day** | Um dia, em um eixo de horas. |
| **Week** | Sete dias a partir do primeiro dia da semana. |
| **Work week** | A mesma semana, com o fim de semana fora do eixo. |
| **Month** | 28 dias, começando uma semana antes da data escolhida. |

### Mais opções

O menu ⋮ reúne:

- **Mode**, alternando entre Tasks e Workloads.
- **Color**, pintando as barras por **Stage**, **User**, **Project Owner** ou **Created By**.
- **Time format (12h / 24h)**, que muda o eixo de horas e os tooltips. As durações nunca são reformatadas: 8,5 horas continua sendo `08:30`.
- **Role**, que escolhe o tipo de atribuição gravado nas atribuições e cargas de trabalho criadas aqui. Não muda o que o quadro exibe.
- **Show approved Leaves only.**, ocultando as férias e ausências que ainda aguardam aprovação.
- **Contracted Time**, sobrepondo as horas contratadas vindas dos orçamentos. Essa entrada só é oferecida a usuários com a role `EstimateRead`.
- **Show Tasks Panel** / **Hide Tasks Panel**, **Refresh** e **Export to Excel**.

Quando a janela é estreita demais para a barra de ferramentas inteira, os botões de zoom e de capacidade passam para esse menu.

## Capacidade e disponibilidade

Ao lado de cada nome há uma barra de utilização e um percentual, verde até 100% e vermelho acima disso. A capacidade diária vem das horas definidas em cada usuário.

Os botões de capacidade escolhem a sobreposição desenhada ao longo da linha do tempo:

| Sobreposição | Mostra |
|---|---|
| **No capacity overlay** | Apenas as barras. |
| **Capacity bar** | Uma barra de utilização por dia. |
| **Heatmap (%)** | Cada dia sombreado conforme o quanto está ocupado. |
| **Hours** | As horas reservadas em cada dia. |

Heatmap e Hours acrescentam uma linha de resumo acima das barras de cada pessoa. Enquanto uma delas está ativa, **Expand all users** e **Collapse all users** aparecem na barra de ferramentas, e clicar em uma linha de resumo recolhe apenas aquela pessoa.

Ao passar o mouse sobre uma célula de capacidade, o sistema informa as horas reservadas e livres naquele dia e as horas ainda livres naquela semana.

![img](/img/product/planning-and-scheduling/resource-scheduler/capacity.png)
<figcaption>A sobreposição de heatmap, com um tooltip de capacidade aberto</figcaption>

## Férias e feriados

Ao passar o mouse sobre uma ausência ou um feriado, aparecem o tipo e a data, e a duração como **Half Day**, **Full Day** ou em horas quando o tipo de ausência é registrado em horas. Qualquer descrição ou motivo aparece logo abaixo.

## Regras e comportamento

Barras de ausência, feriado e dia não útil não podem ser movidas nem redimensionadas.

Cargas de trabalho recorrentes não podem ser arrastadas nem redimensionadas. Edite-as pelo editor de carga de trabalho.

Uma carga de trabalho não pode passar de 24 horas em um dia, e um dia que já atingiu o máximo de horas diárias da pessoa recusa novas.

Não é possível adicionar cargas de trabalho a uma tarefa à qual você não está atribuído.

Quando a sua empresa não permite planejamento em fins de semana, sábado e domingo recusam novas cargas de trabalho.

Copiar uma tarefa para alguém que já está atribuído a ela é recusado.

As permissões valem tanto para os gestos quanto para as telas:

| Ação | Role necessária |
|---|---|
| Alterar a quem uma tarefa está atribuída | `ExecutorAssignmentSave` |
| Alterar as datas de uma tarefa arrastando ou redimensionando | `DeliverableWrite` |
| Criar uma tarefa a partir de um arraste | `DeliverableCreate` |
| Criar uma reserva | `ReservationCreate` |
| Editar ou excluir uma reserva | `ReservationWrite` |
| Ver a sobreposição Contracted Time | `EstimateRead` |

## Configuração

O scheduler é um workspace, e seu comportamento é definido pelos parâmetros desse workspace. Os valores abaixo são os que ele traz de fábrica.

| Parâmetro | Efeito |
|---|---|
| `DefaultMode` | Modo inicial, `tasks` ou `workloads`. Vem como `workloads`. |
| `DefaultGroupBy` | Agrupamento aplicado antes de o usuário escolher um. Vem como `typologyGroupName`. |
| `DefaultTeam` | Tipo de atribuição com que o menu Role começa. Vem como `Executor`. |
| `WeekStartDay` | Primeiro dia da semana, `0` para domingo. Vem como `1`. |
| `HourFormat` | Relógio inicial, `12` ou `24`. Vem como `24`. |
| `EntryTime` | Hora gravada em uma carga de trabalho quando o editor não envia nenhuma. Vem como `09:00`. |
| `StagesToExclude` | Estágios mantidos fora do quadro. Vem como `Cancelled,Draft,Closed`. |
| `BusinessObjectTypes` | Tipos a partir dos quais é possível planejar. Vem como `Job,Task,Deliverable`. |
| `ConfirmJobDateExtension` | Defina como `0` para estender as datas da tarefa sem perguntar. |
| `DragCreateWorkload`, `DragCreateTask`, `DragCreateReservation` | Defina um deles como `0` para retirar essa opção da pergunta de criação por arraste. |
| `WorkloadEditorWorkspaceId` | O workspace aberto como editor de carga de trabalho. |

As escolhas que o usuário faz na barra de ferramentas são lembradas e prevalecem sobre esses padrões na visita seguinte.

## Related articles

- [Planned Time](/docs/product/planning-and-scheduling/resourcing/planned-hours)
- [Gantt](/docs/product/planning-and-scheduling/gantt)
- [Roles and Profiles](/docs/administration/system-roles-profiles)
- [Utilization Dashboard](/docs/product/dashboards-and-reporting/utilization-dashboard)
