---
id: ai-connector-copilot-studio
title: Ligar o Microsoft 365 Copilot à Skills Workflow
description: "Configure um agente standard do Copilot Studio com o conector MCP da Skills Workflow e teste a ligação antes de o partilhar."
sidebar_label: Microsoft 365 Copilot
sidebar_position: 2.5
---

Crie um agente Skills Workflow no Copilot Studio para os utilizadores de Microsoft 365 Copilot ou Teams da agência. O agente liga-se ao servidor MCP da Skills Workflow. O GitHub Copilot no Visual Studio Code liga-se diretamente; siga o separador GitHub Copilot em [Ligar a sua ferramenta de AI](/docs/ai/connector/ai-connector-setup).

## Pré-requisitos

Peça à Skills Workflow o endereço da API do tenant, App ID, App key, Tenant ID e as skills `client-portal` e `app-page`. Precisa de acesso ao Copilot Studio e de permissão para criar conectores personalizados no mesmo ambiente Power Platform.

Use um ambiente com Dataverse. Um ambiente Teams não suporta os novos agentes GitHub Copilot; um ambiente Developer sem Dataverse também bloqueia a criação. Reserve a App key aos publicadores autorizados: permite publicar e substituir páginas de todo o tenant como administrador da Skills Workflow.

## Criar o conector personalizado

1. Abra o [Power Apps](https://make.powerapps.com/), selecione o ambiente e abra **Custom connectors → New custom connector → Create from blank**. Dê-lhe o nome `Skills Workflow MCP`.
2. Ative **Swagger editor**. Descarregue o [modelo OpenAPI](/files/skillsworkflow-mcp.openapi.yaml), substitua `YOUR-TENANT-API-HOST` pelo hostname da API do tenant (sem `https://` nem caminho) e cole a definição no editor. O caminho MCP é `/mcp/client-portal`.
3. Desative **Swagger editor** e confirme em **Security**: autenticação **API Key**, nome do parâmetro `x-app-key`, localização **Header**. Selecione **Create connector**.

![img-box-shadow](/img/ai/copilot-studio/security.png)
<figcaption>A App key fica guardada na ligação, não nos dois inputs do agente.</figcaption>


4. Abra **Test → New connection**, introduza a App key no campo protegido `api_key` e selecione **Create**. Isto cria a ligação; o estado Connected, por si só, não valida as ferramentas MCP.

## Criar um agente standard

1. No [Copilot Studio](https://copilotstudio.microsoft.com/), selecione o mesmo ambiente. Abra **Home → Other ways to build → Build with standard orchestration → Agent**. Introduza um nome e selecione **Create**.

![img-box-shadow](/img/ai/copilot-studio/standard.png)
<figcaption>Escolha Agent na secção Standard para seguir esta configuração testada.</figcaption>


2. Abra **Add tool**, pesquise `Skills Workflow` e selecione **Skills Workflow MCP** em **Model Context Protocol**. Selecione a ligação criada e escolha **Add**.
3. Abra a ferramenta adicionada e preencha **Inputs**: `x-app-id` com App ID e `x-tenant-id` com Tenant ID. Selecione **Save**. Ambos são headers enviados com a App key da ligação. Preencha-os em cada agente; não são copiados automaticamente de outro agente.

![img-box-shadow](/img/ai/copilot-studio/inputs.png)
<figcaption>App ID e Tenant ID ficam nos Inputs da ferramenta; a App key fica na ligação protegida.</figcaption>


## Testar a ligação MCP

Inicie uma nova sessão de teste e pergunte quais as ferramentas Skills Workflow disponíveis. Compare a lista com as oito ferramentas em [Verificar a ligação](/docs/ai/connector/ai-connector-setup).

Depois peça ao agente para chamar `get_portal_url` para o cliente hipotético `mcp-connection-check` e o portal `connection-check`, sem criar nem alterar nada. Verifique o registo de atividade: a ferramenta deve terminar com **Completed** e devolver o URL do seu tenant. Esta ferramenta devolve um endereço mesmo que não exista uma página nesse local; não publica nem verifica a página.

![img-box-shadow](/img/ai/copilot-studio/test.png)
<figcaption>Uma chamada real a get_portal_url terminou com sucesso no teste do agente standard.</figcaption>


Uma lista textual de ferramentas não basta para validar a ligação. Se o editor mostrar **Connector request failed**, confirme os três valores dos headers e os inputs guardados. Confirme o comportamento em execução pelo resultado real da ferramenta no registo do teste.

## Preparar o acesso dos key users

Antes de pedir ao agente para publicar conteúdo, obtenha e configure com a Skills Workflow as regras oficiais `client-portal` e `app-page`. A publicação e distribuição a outros utilizadores exigem validação separada; o teste acima valida apenas uma ligação.

Para disponibilizar na organização, siga as [instruções Microsoft de publicação no Teams e Microsoft Copilot](https://learn.microsoft.com/en-us/microsoft-copilot-studio/publication-add-bot-to-microsoft-teams). Peça ao IT para rever o licenciamento, a identidade da ligação e o grupo de publicadores autorizados antes de disponibilizar o agente. Quem abre as páginas publicadas autentica-se com a sua própria identidade.

## Trial e créditos

Um trial do Copilot Studio pode permitir testar na experiência standard. Não garante capacidade de execução na nova experiência GitHub Copilot: a criação e os testes nessa experiência podem consumir Copilot Credits. Se aparecer `EnforcementUsageCredits`, peça ao administrador para verificar **Licensing → Copilot Studio → Manage Copilot Credits**. Consulte as [orientações Microsoft sobre capacidade](https://learn.microsoft.com/en-us/power-platform/admin/manage-usage-github-copilot-harness).

## Artigos relacionados

- [Skills Workflow MCP](/docs/ai/connector/ai-connector-setup)
- [Client Portals](/docs/ai/ai-portals)
