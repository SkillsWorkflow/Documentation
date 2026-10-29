---
id: workflow-management
title: Workflow Management
description: "O Workflow Management é o editor visual de workflows no Maintenance. Escolha um tipo de documento, abra ou crie um fluxo e edite as etapas, transições, acessos das equipes e ações em um diagrama."
sidebar_label: Workflow Management
sidebar_position: 1.5
---

O Workflow Management é o editor visual de workflows. Lista os fluxos de cada tipo de documento, abre um fluxo como diagrama e grava etapas, transições, acessos das equipes, papéis, ações e motivos de uma só vez. Um fluxo novo pode começar em branco ou a partir de um modelo.

## Disponibilidade

- O Workflow Management é ativado por tenant. Enquanto não estiver ativo, a entrada não aparece no Maintenance e o endereço redireciona para o Maintenance. Veja [Configuração](#configuração).
- Você precisa de acesso ao Maintenance.

## Abrir o Workflow Management

1. Clique no seu avatar de usuário, no canto superior direito do menu principal, e selecione **Maintenance**.
2. Em **Browse by area**, selecione **Workflow**.
3. Selecione **Workflow Management**.

<figure>

![img-box-shadow](/img/workflow-management/maintenance-workflow-area.png)
<figcaption>A área Workflow do catálogo de Maintenance, com a entrada Workflow Management.</figcaption>
</figure>

A entrada **Workflows**, ao lado, é a tela em lista para os mesmos registros.

## Encontrar um fluxo

Em **Escolha um tipo de documento**, selecione o tipo de documento cujos fluxos você quer ver, por exemplo **Jobs** ou **Projects**. O campo **Pesquisar** filtra os tipos de documento.

Em **Fluxos existentes** aparecem todos os fluxos desse tipo de documento. Cada cartão mostra uma pré-visualização da cadeia de etapas e quantas etapas e transições o fluxo tem. Selecione um cartão para abrir o fluxo no diagrama.

<figure>

![img-box-shadow](/img/workflow-management/existing-flows.png)
<figcaption>Jobs selecionado, com os fluxos existentes e o cartão Novo fluxo.</figcaption>
</figure>

## Criar um fluxo

1. Selecione o tipo de documento.
2. Selecione o cartão **Novo fluxo**, no fim dos Fluxos existentes.
3. Escolha como começar:
   - **Começar em branco** cria três etapas, Draft, New e Done. A transição **Iniciar** move o documento de Draft para New e o ativa, e **Concluir** o move de New para Done.
   - Um cartão marcado como **Modelo** copia as etapas, os acessos das equipes, os papéis, as ações e os motivos desse modelo.
4. Edite o fluxo no diagrama e selecione **Salvar fluxo**.

Nada é salvo até você selecionar **Salvar fluxo**.

<figure>

![img-box-shadow](/img/workflow-management/new-flow-templates.png)
<figcaption>Novo fluxo aberto abaixo dos Fluxos existentes, com Começar em branco e os modelos disponíveis.</figcaption>
</figure>

Quando um modelo usa papéis ou equipes que ainda não existem no seu tenant, o editor os lista acima do diagrama. Selecione **Criar o que falta** para criá-los. Um papel de transição que não existe faz o salvamento falhar, e uma equipe faltando deixa de fora o acesso dessa equipe à etapa.

## Editar um fluxo no diagrama

O editor tem três partes:

- o diagrama, com as etapas em caixas e as transições como setas com o nome;
- o painel lateral, com o cartão **Fluxo** e, quando há algo selecionado, o cartão **Etapa** ou **Transição**;
- a lista de **Problemas**, no final do painel lateral.

<figure>

![img-box-shadow](/img/workflow-management/editor-overview.png)
<figcaption>Um fluxo de Jobs aberto no editor. Salvar como modelo e Salvar fluxo estão na barra superior.</figcaption>
</figure>

### Trabalhar no diagrama

| Para | Faça isto |
|---|---|
| Selecionar uma etapa ou transição | Clique nela. O cartão correspondente abre no painel lateral. |
| Adicionar uma transição | Arraste de um ponto de conexão de uma etapa para outra etapa. |
| Adicionar uma etapa e uma transição de uma vez | Arraste de um ponto de conexão para um espaço vazio e escolha a etapa. |
| Renomear uma etapa ou transição | Dê um duplo clique no nome. |
| Excluir uma etapa ou transição | Selecione-a e pressione Delete. |
| Navegar | Use a barra de visualização, no canto inferior esquerdo, para desfazer, refazer, enquadrar o fluxo na tela, ajustar à largura, aplicar zoom e centralizar no que está selecionado. |

As etapas inicial e final não podem ser excluídas. Duas etapas só podem estar conectadas por uma transição em cada sentido, e uma transição não pode começar e terminar na mesma etapa.

### Cartão Fluxo

A aba **Configurações** tem o **Nome do fluxo**, as etapas **Começa em** e **Termina em** e o **Tipo de objeto de negócio**. **Adicionar etapa** adiciona uma etapa nova ou uma que já existe no tipo de documento. **Adicionar transição** pede as etapas **De** e **Para**.

A aba **Automações** move o documento por conta própria quando os documentos dentro dele chegam a uma determinada etapa. Em cada automação, escolha o tipo de documento dos filhos, a etapa a que chegam (**Quando chegarem a**) e a etapa para onde mover este documento (**Mover este documento para**). Em um fluxo novo, salve o fluxo antes de adicionar automações. Veja [Stage Mappings](/docs/administration/workflows/stage-mappings).

<figure>

![img-box-shadow-sm](/img/workflow-management/automations.png)
<figcaption>A aba Automações do cartão Fluxo.</figcaption>
</figure>

### Cartão Etapa

Selecione uma etapa para abrir o cartão dela. Ele tem quatro abas.

**Transições** lista as transições que entram (**Entra de**) e que saem (**Sai para**). Selecione uma para abri-la. **Adicionar uma transição a partir daqui** cria uma transição nova saindo desta etapa.

<figure>

![img-box-shadow](/img/workflow-management/stage-transitions.png)
<figcaption>A etapa Em Produção selecionada, com as transições que entram e que saem.</figcaption>
</figure>

**Acesso das equipes** define, para cada equipe, o que ela pode fazer nesta etapa:

| Coluna | Significado |
|---|---|
| **R** (Ler) | A equipe vê o documento nesta etapa. |
| **W** (Escrever) | A equipe pode usar as transições que saem desta etapa. |
| **P** (Aparece nos pendentes) | O documento aparece na lista de pendentes da equipe. |
| **N** (Notificar) | A equipe é notificada quando o documento chega a esta etapa. |

<figure>

![img-box-shadow-sm](/img/workflow-management/stage-team-access.png)
<figcaption>Acesso das equipes de uma etapa.</figcaption>
</figure>

**Configurações** tem o **Nome**, o **Tipo de etapa**, a **Cor**, a **Posição** e o **Percentual** da etapa, e as opções **Visível ao cliente**, **Aguardando terceiros**, **Aceita horas** e **Sugerir percentual**. **Excluir etapa** fica no final. Veja [Stages](/docs/administration/workflows/stages) e [Stage Types](/docs/administration/workflows/stage-types).

<figure>

![img-box-shadow-sm](/img/workflow-management/stage-settings.png)
<figcaption>A aba Configurações de uma etapa.</figcaption>
</figure>

**Traduções** tem o nome da etapa em cada idioma configurado no tenant. Deixe um idioma vazio para mostrar o nome original.

### Cartão Transição

Selecione uma transição no diagrama, ou na aba Transições de uma etapa, para abrir o cartão dela. O cartão mostra as etapas de origem e de destino e tem estas abas:

- **Configurações**: **Nome**, **Ícone**, **Posição**, **Id no outro sistema**, **Pasta para o arquivo**, **Texto de confirmação**, **Query de validação** e as **Obrigatoriedades**: Confirmação, Horas, Comentário, Arquivo, Notificação, Exige equipe e Padrão. **Excluir passo** fica no final.
- **Papéis**: os papéis que podem usar a transição. Selecione **Verificar alçadas de valor** para limitar um papel a um intervalo de valores, com **De** e **Até**.
- **Ações**: o que é executado quando a transição é usada. A maioria das ações precisa de um valor, e o campo abaixo de cada ação diz o que ele espera.
- **Motivos**: os motivos que o usuário escolhe quando a transição tem a ação RequestMotive. Um motivo inativo continua no fluxo mas deixa de ser oferecido.
- **Ações personalizadas**: ações personalizadas configuradas no seu tenant que são executadas com a transição.
- **Traduções**: o nome da transição em cada idioma do tenant.

O número ao lado de Papéis, Ações, Motivos e Ações personalizadas é quantos a transição tem.

<figure>

![img-box-shadow](/img/workflow-management/transition-selected.png)
<figcaption>Uma transição selecionada no diagrama, com a aba Configurações aberta.</figcaption>
</figure>

<figure>

![img-box-shadow-sm](/img/workflow-management/transition-roles.png)
<figcaption>A aba Papéis de uma transição.</figcaption>
</figure>

<figure>

![img-box-shadow-sm](/img/workflow-management/transition-actions.png)
<figcaption>A aba Ações, com uma ação adicionada.</figcaption>
</figure>

Veja [Transitions](/docs/administration/workflows/transitions) e [Workflow Actions](/docs/administration/workflows/workflow-actions) para o que faz cada definição e cada ação.

## Rever os problemas

A lista de **Problemas** verifica o fluxo enquanto você o edita. Selecione um problema para ir à etapa ou transição que ele refere, na aba onde ele é corrigido. O número ao lado de **Salvar como modelo**, na barra superior, mostra quantos problemas há.

<figure>

![img-box-shadow-sm](/img/workflow-management/problems.png)
<figcaption>Dois problemas que não impedem o salvamento.</figcaption>
</figure>

Alguns problemas bloqueiam o salvamento. **Salvar fluxo** fica desativado até que sejam corrigidos:

- a etapa inicial não é do tipo Draft, ou o fluxo tem mais de uma etapa Draft;
- a primeira transição que sai de Draft não ativa o documento;
- uma transição volta para a etapa Draft;
- a mesma etapa é ao mesmo tempo o início e o fim do fluxo;
- uma etapa não tem nenhuma transição entrando nem saindo.

Os outros problemas são avisos e o fluxo pode ser salvo mesmo assim. Incluem uma etapa sem saída, uma etapa onde não entra nada, uma etapa sem caminho até à etapa final, uma etapa que nenhuma equipe consegue ver ou onde nenhuma pode agir, uma etapa que não está nos pendentes de nenhuma equipe, e uma transição que exige horas para uma etapa que não aceita horas.

## Salvar o fluxo

Selecione **Salvar fluxo** na barra superior. O botão fica ativo quando há alterações e nenhum problema bloqueador. O resultado aparece como mensagem no canto da tela. Quando só parte das alterações foi salva, a mensagem diz quantas falharam. Corrija-as e salve novamente.

Salve antes de sair do fluxo. Voltar ao tipo de documento, pelo breadcrumb, descarta as alterações não salvas.

## Salvar um fluxo como modelo

1. Abra o fluxo.
2. Selecione **Salvar como modelo** na barra superior.
3. Digite o **Nome do modelo** e selecione **Salvar modelo**.

O modelo aparece em Novo fluxo da próxima vez que você criar um fluxo. Salvar um modelo não salva o fluxo.

<figure>

![img-box-shadow](/img/workflow-management/save-as-model.png)
<figcaption>Salvar como modelo, com o nome do modelo acima do diagrama.</figcaption>
</figure>

## Pedir ajuda ao Assistente de IA

Com o Workflow Management aberto, o botão do Assistente de IA abre o [Agente de Workflows](/docs/ai/agents/workflow-agent), que explica e altera workflows a partir de uma descrição.

## Configuração

Um administrador ativa o Workflow Management em **System Settings > Behavior > Enable workflow management**. Ele vem desativado por padrão.

## Artigos relacionados

- [Workflow](/docs/administration/workflows)
- [Stages](/docs/administration/workflows/stages)
- [Stage Types](/docs/administration/workflows/stage-types)
- [Transitions](/docs/administration/workflows/transitions)
- [Stage Mappings](/docs/administration/workflows/stage-mappings)
- [Workflow Actions](/docs/administration/workflows/workflow-actions)
- [Maintenance](/docs/administration/maintenance)
- [Agente de Workflows](/docs/ai/agents/workflow-agent)
