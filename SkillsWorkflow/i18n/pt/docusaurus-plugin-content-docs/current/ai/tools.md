---
id: ai-tools
title: Ferramentas
description: "O catálogo de tools que podem ser atribuídas a um agent: o que cada uma permite ao agent ler ou alterar, quais escrevem na sua conta, e como as tools são concedidas a cada agent."
sidebar_label: Ferramentas
sidebar_position: 5
---

Um agent, por si só, só consegue falar. O que lhe permite pesquisar algo, criar um job ou mover um documento é uma **tool**. As tools de um agent são tudo aquilo que ele consegue fazer: um agent sem `create_job` não consegue criar um job, por mais que peça.

Esta página é o catálogo. Leia-a para saber do que um agent existente é capaz, e para decidir o que conceder a um agent que esteja a criar em [Adicionar as suas skills, agents e tools](/docs/ai/ai-extend).

## Como as tools são concedidas

Cada definição de agent tem uma allow-list de `tools`. Indicar nomes de tools restringe o agent a essas; deixar a lista vazia dá-lhe todo o catálogo da plataforma abaixo.

`get_current_time` é adicionada a todos os agents e não precisa de entrada.

Existem mais dois conjuntos opt-in que não fazem parte de `tools`:

- **As suas queries de extração de dados**: defina `useAnalyticsTools`, e restrinja com `analyticsTools`.
- **Os seus próprios MCP servers**: liste-os em `mcpServers`.

Ambos são abordados em [Adicionar as suas skills, agents e tools](/docs/ai/ai-extend).

## Tools que escrevem

Estas alteram dados. Coloque todas na lista `toolsRequiringApproval` do agent, para que o utilizador veja um cartão de aprovação antes de a tool ser executada. Veja [Assistente de IA](/docs/ai/ai-assistant#approve-what-it-does).

`create_job` · `update_job` · `duplicate_document` · `update_document_brief` · `update_document_custom_fields` · `update_team_members` · `execute_workflow_transition` · `create_timesheet_entry`

Tudo o resto nesta página lê, à exceção das três tools de memória, que apenas escrevem no repositório de memória do próprio utilizador que faz o pedido.

## Tools da plataforma

Estas são executadas no servidor, contra a Skills Workflow API, como o utilizador com sessão iniciada.

### Encontrar um registo

| Ferramenta | O que o agente consegue fazer |
|---|---|
| `resolve_client` | Encontrar um client a partir de um nome introduzido pelo utilizador, ordenado por relevância |
| `resolve_project` | Encontrar um project a partir de um nome |
| `resolve_department` | Encontrar um department, delimitado por project, client e business object type |
| `resolve_job_type` | Encontrar um job type dentro de um department |
| `list_clients` | Listar clients, opcionalmente filtrado por nome |
| `list_projects` | Listar projects, filtrado por nome, client, produto, contract ou request |
| `list_departments` | Listar departments que o utilizador consegue ver, opcionalmente restringido por project |
| `list_job_types` | Listar job types, filtrado por department, client, project ou document type |
| `list_document_types` | Listar document types |
| `list_assignment_types` | Listar as funções de team que um document type aceita |
| `get_project_by_id` | Ler os detalhes completos de um project |
| `search_users` | Encontrar utilizadores por nome, email ou username |
| `get_current_user` | Ler quem está a perguntar |
| `get_current_time` | Ler a data e hora atuais |

As tools `resolve_*` são o que transforma *"o retainer da Northwind"* num registo. Quando há mais do que um candidato correspondente, o assistente pede-lhe para escolher.

### Documentos e jobs

| Ferramenta | O que o agente consegue fazer |
|---|---|
| `get_job_by_number` | Abrir um job pelo respetivo número |
| `search_documents` | Pesquisar qualquer document type — projects, jobs, estimates, contracts, despesas, bills, purchase orders, requests, credit notes, supplier invoices |
| `create_job` | Criar um job ou deliverable a partir de project, business object type, department, job type, datas e título |
| `update_job` | Editar o título, prioridade, esforço, valor de negócio, datas, job type e as flags plannable, blocked e timesheet de um job existente |
| `duplicate_document` | Copiar um Job, Deliverable, Project, Estimate ou Request, transportando opcionalmente a respetiva descrição, team e valores de custom fields |

`update_job` altera apenas os campos passados. Não pode redefinir o âmbito de um documento: client, project, department e business object type ficam fixos assim que o documento existe.

### Briefs

| Ferramenta | O que o agente consegue fazer |
|---|---|
| `get_document_brief` | Ler o brief de um documento |
| `update_document_brief` | Escrever o brief de um documento |
| `get_job_type_brief_template` | Ler o modelo de briefing configurado num job type, para que um brief siga a sua estrutura |
| `get_client_brief_instructions` | Ler as instruções de redação de brief do próprio client |

Juntas, são estas que produzem um brief estruturado em vez de um parágrafo. O agent lê primeiro o modelo do job type e as instruções do client, e só depois escreve nesse esqueleto.

#### Instruções de brief do cliente

`get_client_brief_instructions` é apenas de leitura. Recebe o ID do client comercial selecionado, abre a área de ficheiros desse client e segue este caminho:

```text
Client root folder → ai-instructions folder → brief-instructions.md
```

Devolve o conteúdo em Markdown desse ficheiro ao agent. A tool não pesquisa o resto dos ficheiros do client, os anexos de chat, nem a pasta `$ai-agents/skills` do tenant.

A pasta e o ficheiro têm de existir na área de ficheiros do client, e o ficheiro tem de conter texto. Se qualquer um deles estiver em falta, vazio ou não puder ser lido, a tool não tem instruções do client para devolver. Um agent pode então usar as suas orientações gerais de briefing, mas não consegue validar face a regras específicas do client.

Veja [Validador de Briefs](/docs/ai/agents/brief-validator) para a configuração, um exemplo de ficheiro de instruções e o resultado de validação esperado.

### Custom fields

| Ferramenta | O que o agente consegue fazer |
|---|---|
| `get_document_custom_fields` | Listar os custom fields de um documento com os respetivos rótulos e valores atuais |
| `update_document_custom_fields` | Definir um ou mais valores de custom fields |

### Equipas

| Ferramenta | O que o agente consegue fazer |
|---|---|
| `get_document_team` | Ler quem está na team de um documento |
| `update_team_members` | Adicionar e remover membros da team |

Uma única chamada a `update_team_members` transporta todas as alterações pedidas pelo utilizador, em quantas funções ele tiver indicado, e fica registada no feed do documento como uma única entrada.

### Workflow

| Ferramenta | O que o agente consegue fazer |
|---|---|
| `list_workflow_transitions` | Listar as transitions disponíveis num documento neste momento |
| `execute_workflow_transition` | Mover um documento para outra stage |

Não existe uma transition predefinida. O agent lista o que está disponível, você escolhe e, depois, ele pede aprovação.

### Tempo

| Ferramenta | O que o agente consegue fazer |
|---|---|
| `create_timesheet_entry` | Registar tempo. Sem um utilizador definido, regista em nome de quem está a perguntar |

### Os seus dados

| Ferramenta | O que o agente consegue fazer |
|---|---|
| `execute_named_query` | Executar uma das suas named queries de extração de dados e devolver linhas |
| `analytics_{query}` | Uma tool por cada named query que o seu tenant publica, concedida através de `useAnalyticsTools` |

São estas que respondem a *"como está este client a evoluir este mês"* sem um dashboard. Cada query é filtrada, ordenada e paginada em SQL antes de qualquer linha ser devolvida, é apenas de leitura, e está limitada às permissões do utilizador que pergunta — um utilizador a quem seja recusado um relatório na plataforma também o vê recusado aqui.

Ambas as tools recebem os parâmetros próprios da query, mais um `queryBuilder`, e é aí que acontecem a filtragem, ordenação, paginação e seleção de colunas: `filters`, `orderBy`, `fields`, `skip` e `take`. Não existe agregação. Um total ou um breakdown vem de uma query escrita para isso, não do agent a pedi-lo.

Cada chamada tem um limite. Um agent que não indica um número de linhas recebe 50, e 500 é o teto para qualquer número que peça. O limite de linhas definido pelo autor da query reduz ambos os valores. O painel apresenta o que é devolvido como uma lista, um gráfico ou ambos. Veja [Assistente de IA](/docs/ai/ai-assistant#read-an-answer-from-your-data).

O catálogo de queries é por tenant. Veja [Data Extraction API](/docs/build-and-extend/api/data-extraction-api) para saber que queries existem e o que cada uma transporta.

### Memória

| Ferramenta | O que o agente consegue fazer |
|---|---|
| `save_memory` | Guardar uma preferência, facto ou registo indicado pelo utilizador |
| `update_memory` | Corrigir algo memorizado anteriormente |
| `delete_memory` | Esquecer algo |

Estas escrevem apenas no repositório do próprio utilizador que pergunta, e em mais lado nenhum. Se chegam sequer a escrever é decisão do utilizador: com **Memory on** desativado, uma gravação é recusada e o agent é informado disso. Com **Ask before saving**, o agent tem primeiro de obter a concordância do utilizador na conversa. Esquecer funciona sempre.

Todos os agents respeitam as memórias de um utilizador, tenham ou não estas tools concedidas, porque lê-las não é uma tool. Os utilizadores gerem o repositório em **Manage Memories** — veja [Memórias de IA](/docs/ai/ai-memories).

### Interface de chat

| Ferramenta | O que o agente consegue fazer |
|---|---|
| `gen-ui.emit_custom_event` | Enviar um cartão ou um payload personalizado para o chat |
| `gen-ui.emit_custom_prompt` | Oferecer um prompt de seguimento em que o utilizador pode tocar |

Nenhuma delas altera dados.

## Tools do browser

Estas são executadas no browser do utilizador em vez de no servidor, porque precisam do ecrã que o utilizador está a ver. São concedidas por agent e não podem ser listadas em `tools`.

| Ferramenta | O que o agente consegue fazer |
|---|---|
| `OpenDocument` | Abrir um documento num popup de pré-visualização, ou navegar até ele |
| `AttachFileToDocument` | Anexar ao brief de um documento um ficheiro que o utilizador largou no chat |
| `PostFileToFeed` | Publicar no feed de um documento, com um ficheiro |
| `SDK_List` | Listar os métodos do SDK disponíveis |
| `SDK_Invoke` | Chamar um deles |
| `Workspace_Get`, `Workspace_List` | Ler uma definição de workspace |
| `Workspace_Validate`, `Workspace_Apply` | Verificar uma alteração de workspace e depois aplicá-la |
| `CustomTable_List`, `CustomTable_Get`, `CustomTable_Validate` | Ler e verificar definições de custom tables |
| `Integration_Get`, `Integration_List`, `Integration_Validate` | Ler e verificar workflows de integração |
| `GetBriefingTemplates`, `GetBriefingTemplateContent`, `ResolveJobTypeBriefingTemplate` | Ler modelos de briefing a partir do editor |
| `GetTransitionRequirements` | Ler o que uma transition necessita antes de ser executada: um comentário, um motivo, horas, um ficheiro, campos de utilizador |
| `GetJobByNumber`, `SearchDocuments` | Procurar um job ou pesquisar documentos a partir do ecrã em que o utilizador se encontra |
| `SearchWorkflowStageTransitions` | Listar as transitions disponíveis num documento neste momento |
| `ExecuteWorkflowTransition` | Mover um documento para outra stage. Escreve |
| `GetDocumentBrief`, `UpdateDocumentBrief` | Ler e escrever um brief a partir de dentro do editor. `UpdateDocumentBrief` escreve |

## O que as tools não conseguem fazer

- **Nunca excedem as suas permissões.** Cada chamada transporta a identidade do utilizador com sessão iniciada. Um agent a quem seja pedido um relatório que o utilizador não tem permissão para ver é recusado, tal como o próprio utilizador seria.
- **Nunca atuam como outra pessoa.** O utilizador em nome de quem uma tool atua é obtido a partir da sessão, nunca de algo decidido pelo agent.
- **A extração de dados é apenas de leitura.** Nenhuma named query escreve.

## Artigos relacionados

- [Agentes](/docs/ai/agents)
- [Assistente de IA](/docs/ai/ai-assistant)
- [Memórias de IA](/docs/ai/ai-memories)
- [Adicionar as suas skills, agents e tools](/docs/ai/ai-extend)
- [Data Extraction API](/docs/build-and-extend/api/data-extraction-api)
