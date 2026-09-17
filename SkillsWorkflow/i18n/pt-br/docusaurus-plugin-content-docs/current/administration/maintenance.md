---
id: maintenance
title: Maintenance
sidebar_label: Maintenance
sidebar_position: 0
---

## Visão geral

Maintenance é o módulo de back-office onde administradores e consultores configuram o Skills Workflow: estrutura organizacional, permissões, preços, estágios de workflow, telas, integrações e outros dados de referência. O **catálogo de Maintenance** organiza todas as entradas de configuração em áreas, para que uma tela específica possa ser encontrada navegando pela sua área ou pesquisando diretamente por ela, em vez de percorrer um único menu longo.

## Acessando o Maintenance

1. Clique no seu avatar de usuário, no canto superior direito do menu principal.
2. Selecione **Maintenance**.

<figure>

![img-box-shadow](/img/maintenance/catalogue-browse-by-area.png)
<figcaption>Placeholder — substituir por uma captura de tela da página inicial do catálogo de Maintenance, mostrando o painel "Browse by area" e a grade "Configuration entries" de uma área selecionada.</figcaption>
</figure>

## Como usar o catálogo

### Browse by area

O painel **Browse by area**, à esquerda, lista todas as categorias de maintenance, cada uma com a contagem de entradas de configuração que contém. Selecionar uma categoria carrega suas entradas em **Configuration entries**. Consulte a tabela de áreas abaixo para a lista completa.

### Pesquisar todas as entradas

O campo **Search all Maintenance entries** pesquisa em todas as áreas ao mesmo tempo, não apenas na selecionada. Cada resultado mostra a área a que pertence, para que uma entrada possa ser aberta sem saber previamente sua categoria.

### Abrir um workspace de configuração

Selecionar um cartão em Configuration entries abre o workspace de configuração dessa entrada:

<figure>

![img-box-shadow](/img/maintenance/configuration-workspace-grid.png)
<figcaption>Placeholder — substituir por uma captura de tela da grade de dados de um workspace de configuração (por exemplo, Job Classifications), mostrando os controles de adicionar, filtrar e pesquisar, e a contagem de linhas.</figcaption>
</figure>

- Uma grade de dados lista os registros da entrada, com controles para adicionar um registro, filtrar, pesquisar dentro da grade e agrupar linhas por uma coluna.
- A contagem de linhas é exibida na parte inferior da grade.
- Selecionar uma linha abre um painel de registro com os campos desse registro.

<figure>

![img-box-shadow](/img/maintenance/configuration-workspace-record.png)
<figcaption>Placeholder — substituir por uma captura de tela do painel de registro de um workspace de configuração, mostrando seus campos e os controles de salvar, anterior/próximo e expandir.</figcaption>
</figure>

- As alterações são salvas a partir do painel de registro.
- Os controles anterior e próximo do painel percorrem os registros da grade sem fechar o painel.

## Áreas do catálogo de Maintenance

| Área | Entradas | Entradas de configuração |
|---|---|---|
| Organisation & locations | 9 | Cities, Companies, Countries, Departments, Disciplines, Divisions, Idiom Groups, Idioms, Languages |
| People & permissions | 12 | Achievements, Employees, [Roles](/docs/administration/system-roles-profiles), Teams, [Typologies](/docs/administration/create-typologies), Typology Groups, User Types, User Typology History, [Users](/docs/administration/users/create-user), Users and Clients, Users Last Login, Users Responsibility Chain |
| Clients, suppliers & markets | 10 | Billing Clients, Brands, Client Classification, Client Groups, [Clients](/docs/product/commercial/crm/create-commercial-client), Commercial Product Companies, Market Groups, Markets, Sectors, Suppliers |
| Pricing, products & finance | 10 | Accounts, Billing Products, Commercial Payment Conditions, Currencies, Payment Conditions, [Price Table Columns](/docs/product/commercial/rates/price-tables), [Price Tables](/docs/product/commercial/rates/price-tables), Products, Rate Card Columns, [Rate Cards](/docs/product/commercial/rates/rate-cards) |
| Projects, work & delivery | 16 | Additional Information, Business Object Types, [Description Templates](/docs/administration/description-templates), Document Members, Document Teams, Documents, Expense Types, Job Classifications, Job Types, Link Types, Project Classifications, Project Types, Service Groups, Services, Tags, Templates |
| Workflow | 6 | Custom Actions, [Stage Types](/docs/administration/workflows/stage-types), [Stages](/docs/administration/workflows/stages), [Transitions](/docs/administration/workflows/transitions), Workflow Management, [Workflows](/docs/administration/workflows) |
| Time, schedules & leave | 6 | [Holiday](/docs/administration/calendars/create-holidays), Leave Infos, [Leave Types](/docs/administration/calendars/create-leave-type), Schedules, Shifts, Work Types |
| Reports & output | 4 | Printing Layouts, Queries, Query Preview, Reports |
| Screens, lists & workspaces | 4 | List Definitions, Panels, Views, [Workspaces](/docs/build-and-extend/workspaces) |
| Media & print production | 4 | Print Size Units, Print Sizes, Publications, Publishers |
| System & integrations | 12 | AI Skills, [Automations](/docs/build-and-extend/automations), Configuration, [Custom Tables](/docs/administration/custom-tables), Environment, Integration Logs, Integrators, Marketplace, Notification Types, [SSO](/docs/integrations/single-sign-on-sso), System Parameters, [Webhooks](/docs/build-and-extend/api/webhooks) |
| Other | 7 | Chat GPT, Copilot Chat, File System, Marketplace v2, Projects with Inactive Products, Usage Metrics, e outras entradas não agrupadas em outra área |

As entradas sem link ainda não são cobertas por um artigo dedicado. A área "Other" também pode conter entradas específicas de um tenant.

## Related articles

- [Custom Tables](/docs/administration/custom-tables)
- [Description Templates](/docs/administration/description-templates)
- [Roles and Profiles](/docs/administration/system-roles-profiles)
- [Workflow](/docs/administration/workflows)
