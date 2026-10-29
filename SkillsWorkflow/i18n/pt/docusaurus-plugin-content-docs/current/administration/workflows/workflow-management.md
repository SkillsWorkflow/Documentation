---
id: workflow-management
title: Workflow Management
description: "O Workflow Management é o editor visual de workflows no Maintenance. Escolha um tipo de documento, abra ou crie um fluxo e edite as etapas, transições, acessos das equipas e ações num diagrama."
sidebar_label: Workflow Management
sidebar_position: 1.5
---

O Workflow Management é o editor visual de workflows. Lista os fluxos de cada tipo de documento, abre um fluxo como diagrama e grava etapas, transições, acessos das equipas, papéis, ações e motivos de uma só vez. Um fluxo novo pode começar em branco ou a partir de um modelo.

## Disponibilidade

- O Workflow Management é ativado por tenant. Enquanto não estiver ativo, a entrada não aparece no Maintenance e o endereço volta para o Maintenance. Ver [Configuração](#configuração).
- Precisa de acesso ao Maintenance.

## Abrir o Workflow Management

1. Clique no seu avatar de utilizador, no canto superior direito do menu principal, e selecione **Maintenance**.
2. Em **Browse by area**, selecione **Workflow**.
3. Selecione **Workflow Management**.

<figure>

![img-box-shadow](/img/workflow-management/maintenance-workflow-area.png)
<figcaption>A área Workflow do catálogo de Maintenance, com a entrada Workflow Management.</figcaption>
</figure>

A entrada **Workflows**, ao lado, é o ecrã em lista para os mesmos registos.

## Encontrar um fluxo

Em **Escolher um tipo de documento**, selecione o tipo de documento cujos fluxos quer ver, por exemplo **Jobs** ou **Projects**. O campo **Pesquisa** filtra os tipos de documento.

Em **Fluxos existentes** aparecem todos os fluxos desse tipo de documento. Cada cartão mostra uma pré-visualização da cadeia de etapas e quantas etapas e transições o fluxo tem. Selecione um cartão para abrir o fluxo no diagrama.

<figure>

![img-box-shadow](/img/workflow-management/existing-flows.png)
<figcaption>Jobs selecionado, com os fluxos existentes e o cartão Novo fluxo.</figcaption>
</figure>

## Criar um fluxo

1. Selecione o tipo de documento.
2. Selecione o cartão **Novo fluxo**, no fim dos Fluxos existentes.
3. Escolha como começar:
   - **Começar em branco** cria três etapas, Draft, New e Done. A transição **Iniciar** passa o documento de Draft para New e ativa-o, e **Concluir** passa-o de New para Done.
   - Um cartão marcado como **Modelo** copia as etapas, os acessos das equipas, os papéis, as ações e os motivos desse modelo.
4. Edite o fluxo no diagrama e selecione **Guardar fluxo**.

Nada fica gravado até selecionar **Guardar fluxo**.

<figure>

![img-box-shadow](/img/workflow-management/new-flow-templates.png)
<figcaption>Novo fluxo aberto por baixo dos Fluxos existentes, com Começar em branco e os modelos disponíveis.</figcaption>
</figure>

Quando um modelo usa papéis ou equipas que ainda não existem no seu tenant, o editor lista-os por cima do diagrama. Selecione **Criar o que falta** para os criar. Um papel de transição que não existe faz falhar a gravação, e uma equipa em falta deixa de fora o acesso dessa equipa à etapa.

## Editar um fluxo no diagrama

O editor tem três partes:

- o diagrama, com as etapas em caixas e as transições como setas com o nome;
- o painel lateral, com o cartão **Fluxo** e, quando há algo selecionado, o cartão **Etapa** ou **Transição**;
- a lista de **Problemas**, no fundo do painel lateral.

<figure>

![img-box-shadow](/img/workflow-management/editor-overview.png)
<figcaption>Um fluxo de Jobs aberto no editor. Guardar como modelo e Guardar fluxo estão na barra de cima.</figcaption>
</figure>

### Trabalhar no diagrama

| Para | Faça isto |
|---|---|
| Selecionar uma etapa ou transição | Clique nela. O cartão correspondente abre no painel lateral. |
| Acrescentar uma transição | Arraste de um ponto de ligação de uma etapa para outra etapa. |
| Acrescentar uma etapa e uma transição de uma vez | Arraste de um ponto de ligação para um espaço vazio e escolha a etapa. |
| Mudar o nome de uma etapa ou transição | Faça duplo clique no nome. |
| Apagar uma etapa ou transição | Selecione-a e carregue em Delete. |
| Navegar | Use a barra de vista, no canto inferior esquerdo, para anular, refazer, enquadrar o fluxo no ecrã, ajustar à largura, fazer zoom e centrar no que está selecionado. |

As etapas inicial e final não podem ser apagadas. Duas etapas só podem estar ligadas por uma transição em cada sentido, e uma transição não pode começar e acabar na mesma etapa.

### Cartão Fluxo

O separador **Definições** tem o **Nome do fluxo**, as etapas **Começa em** e **Acaba em** e o **Tipo de objeto de negócio**. **Adicionar etapa** acrescenta uma etapa nova ou uma que já existe no tipo de documento. **Adicionar transição** pede as etapas **De** e **Para**.

O separador **Automações** move o documento por si só quando os documentos dentro dele chegam a uma determinada etapa. Em cada automação, escolha o tipo de documento dos filhos, a etapa a que chegam (**Quando chegarem a**) e a etapa para onde mover este documento (**Mover este documento para**). Num fluxo novo, grave o fluxo antes de acrescentar automações. Ver [Stage Mappings](/docs/administration/workflows/stage-mappings).

<figure>

![img-box-shadow-sm](/img/workflow-management/automations.png)
<figcaption>O separador Automações do cartão Fluxo.</figcaption>
</figure>

### Cartão Etapa

Selecione uma etapa para abrir o cartão dela. Tem quatro separadores.

**Transições** lista as transições que entram (**Entra de**) e que saem (**Sai para**). Selecione uma para a abrir. **Adicionar uma transição a partir daqui** cria uma transição nova a sair desta etapa.

<figure>

![img-box-shadow](/img/workflow-management/stage-transitions.png)
<figcaption>A etapa Em Produção selecionada, com as transições que entram e que saem.</figcaption>
</figure>

**Acesso das equipas** define, para cada equipa, o que pode fazer nesta etapa:

| Coluna | Significado |
|---|---|
| **R** (Ler) | A equipa vê o documento nesta etapa. |
| **W** (Escrever) | A equipa pode usar as transições que saem desta etapa. |
| **P** (Aparece nos pendentes) | O documento aparece na lista de pendentes da equipa. |
| **N** (Notificar) | A equipa é notificada quando o documento chega a esta etapa. |

<figure>

![img-box-shadow-sm](/img/workflow-management/stage-team-access.png)
<figcaption>Acesso das equipas de uma etapa.</figcaption>
</figure>

**Definições** tem o **Nome**, o **Tipo de etapa**, a **Cor**, a **Posição** e a **Percentagem** da etapa, e as opções **Visível ao cliente**, **À espera de terceiros**, **Aceita horas** e **Sugerir percentagem**. **Eliminar etapa** está no fundo. Ver [Stages](/docs/administration/workflows/stages) e [Stage Types](/docs/administration/workflows/stage-types).

<figure>

![img-box-shadow-sm](/img/workflow-management/stage-settings.png)
<figcaption>O separador Definições de uma etapa.</figcaption>
</figure>

**Traduções** tem o nome da etapa em cada idioma configurado no tenant. Deixe um idioma vazio para mostrar o nome original.

### Cartão Transição

Selecione uma transição no diagrama, ou no separador Transições de uma etapa, para abrir o cartão dela. O cartão mostra as etapas de origem e de destino e tem estes separadores:

- **Definições**: **Nome**, **Ícone**, **Posição**, **Id no outro sistema**, **Pasta para o ficheiro**, **Texto de confirmação**, **Query de validação** e as **Obrigatoriedades**: Confirmação, Horas, Comentário, Ficheiro, Notificação, Exige equipa e Por omissão. **Eliminar passo** está no fundo.
- **Papéis**: os papéis que podem usar a transição. Selecione **Verificar alçadas de valor** para limitar um papel a um intervalo de valores, com **De** e **Até**.
- **Ações**: o que corre quando a transição é usada. A maioria das ações precisa de um valor, e o campo por baixo de cada ação diz o que espera.
- **Motivos**: as razões que o utilizador escolhe quando a transição tem a ação RequestMotive. Um motivo inativo continua no fluxo mas deixa de ser oferecido.
- **Ações custom**: ações personalizadas configuradas no seu tenant que correm com a transição.
- **Traduções**: o nome da transição em cada idioma do tenant.

O número ao lado de Papéis, Ações, Motivos e Ações custom é quantos a transição tem.

<figure>

![img-box-shadow](/img/workflow-management/transition-selected.png)
<figcaption>Uma transição selecionada no diagrama, com o separador Definições aberto.</figcaption>
</figure>

<figure>

![img-box-shadow-sm](/img/workflow-management/transition-roles.png)
<figcaption>O separador Papéis de uma transição.</figcaption>
</figure>

<figure>

![img-box-shadow-sm](/img/workflow-management/transition-actions.png)
<figcaption>O separador Ações, com uma ação acrescentada.</figcaption>
</figure>

Ver [Transitions](/docs/administration/workflows/transitions) e [Workflow Actions](/docs/administration/workflows/workflow-actions) para o que faz cada definição e cada ação.

## Rever os problemas

A lista de **Problemas** verifica o fluxo enquanto o edita. Selecione um problema para ir à etapa ou transição que ele refere, no separador onde se corrige. O número ao lado de **Guardar como modelo**, na barra de cima, mostra quantos problemas há.

<figure>

![img-box-shadow-sm](/img/workflow-management/problems.png)
<figcaption>Dois problemas que não impedem a gravação.</figcaption>
</figure>

Alguns problemas bloqueiam a gravação. **Guardar fluxo** fica desativado até serem corrigidos:

- a etapa inicial não é do tipo Draft, ou o fluxo tem mais do que uma etapa Draft;
- a primeira transição a sair de Draft não ativa o documento;
- uma transição volta para a etapa Draft;
- a mesma etapa é ao mesmo tempo o início e o fim do fluxo;
- uma etapa não tem nenhuma transição a entrar nem a sair.

Os outros problemas são avisos e o fluxo pode ser gravado na mesma. Incluem uma etapa sem saída, uma etapa onde não entra nada, uma etapa sem caminho até à etapa final, uma etapa que nenhuma equipa consegue ver ou onde nenhuma pode agir, uma etapa que não está nos pendentes de nenhuma equipa, e uma transição que exige horas para uma etapa que não aceita horas.

## Gravar o fluxo

Selecione **Guardar fluxo** na barra de cima. O botão fica ativo quando há alterações e nenhum problema bloqueador. O resultado aparece como mensagem no canto do ecrã. Quando só parte das alterações foi gravada, a mensagem diz quantas falharam. Corrija-as e grave outra vez.

Grave antes de sair do fluxo. Voltar ao tipo de documento, pelo breadcrumb, descarta as alterações não gravadas.

## Gravar um fluxo como modelo

1. Abra o fluxo.
2. Selecione **Guardar como modelo** na barra de cima.
3. Escreva o **Nome do modelo** e selecione **Guardar modelo**.

O modelo aparece em Novo fluxo da próxima vez que criar um fluxo. Gravar um modelo não grava o fluxo.

<figure>

![img-box-shadow](/img/workflow-management/save-as-model.png)
<figcaption>Guardar como modelo, com o nome do modelo por cima do diagrama.</figcaption>
</figure>

## Pedir ajuda ao Assistente de IA

Com o Workflow Management aberto, o botão do Assistente de IA abre o [Agente de Workflows](/docs/ai/agents/workflow-agent), que explica e altera workflows a partir de uma descrição.

## Configuração

Um administrador ativa o Workflow Management em **System Settings > Behavior > Enable workflow management**. Vem desativado por omissão.

## Artigos relacionados

- [Workflow](/docs/administration/workflows)
- [Stages](/docs/administration/workflows/stages)
- [Stage Types](/docs/administration/workflows/stage-types)
- [Transitions](/docs/administration/workflows/transitions)
- [Stage Mappings](/docs/administration/workflows/stage-mappings)
- [Workflow Actions](/docs/administration/workflows/workflow-actions)
- [Maintenance](/docs/administration/maintenance)
- [Agente de Workflows](/docs/ai/agents/workflow-agent)
