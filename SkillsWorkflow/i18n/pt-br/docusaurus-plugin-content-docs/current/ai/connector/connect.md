---
id: ai-connector-setup
title: Conectar Claude, Codex, GitHub Copilot ou Microsoft 365 Copilot ao Skills Workflow
description: "Adicione o conector do Skills Workflow ao Claude, ao Claude Code, ao ChatGPT, ao Codex ou ao GitHub Copilot com o endereço do seu tenant e os headers x-app-id, x-app-key e x-tenant-id que a equipe do Skills Workflow envia."
sidebar_label: Conectar Sua Ferramenta de IA
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Para Microsoft 365 Copilot e Teams, siga [Configurar o agente Copilot Studio](/docs/ai/connector/ai-connector-copilot-studio). A aba GitHub Copilot abaixo é para o Visual Studio Code.

Adicione o Skills Workflow à ferramenta de IA que você usa. Depois de conectada, a ferramenta pode criar páginas de status, relatórios e telas para a sua agência e publicá-los no seu tenant. A conexão é a mesma em todas as ferramentas: um endereço e três headers.

## Pré-requisitos

Peça à equipe do Skills Workflow os dados de conexão do seu tenant. Você recebe quatro valores:

| Valor | Onde é usado |
|---|---|
| O endereço da API do seu tenant | O endereço do conector |
| App ID | O header `x-app-id` |
| App key | O header `x-app-key` |
| Tenant ID | O header `x-tenant-id` |

O endereço do conector é o endereço da API do seu tenant seguido de `/mcp/client-portal`. Para um tenant cujo endereço da API é `https://apiv2-demo-test-we.skillsworkflow.com`, ele fica assim:

```
https://apiv2-demo-test-we.skillsworkflow.com/mcp/client-portal
```

Junto com os dados vêm duas skills, `client-portal` e `app-page`. Elas dão à ferramenta de IA as regras do que ela publica: como uma página lê os seus dados, o que ela pode carregar e como é publicada. Adicione-as à sua ferramenta antes de pedir qualquer coisa; no Claude, em **Settings** > **Capabilities** > **Skills**.

## Adicionar o conector

<Tabs groupId="ai-tool" queryString>
<TabItem value="claude" label={<span className="sw-tool-tab"><img src="/img/ai/logos/claude.svg" alt=""/>Claude</span>} default>

O Claude na web e o Claude Desktop compartilham os conectores. Nos planos Team e Enterprise, um owner da organização do Claude adiciona o conector para todos.

1. Abra **Settings** > **Connectors** e selecione **Add custom connector**.
2. No primeiro campo, digite um nome para o conector, por exemplo `Skills Workflow`. Esse é o nome mostrado na lista de conectores.
3. No segundo campo, digite o endereço do conector e selecione **Continue**.
4. O Claude verifica o servidor. **Connecting to the server** responde `401` e as verificações de login respondem `404`: isso é esperado, porque o conector se autentica com headers. Quando aparecer **Server found**, selecione **Continue**.

   ![img-box-shadow-popup](/img/ai/claude/add-custom-connector.png)
   <figcaption>O Claude encontra o servidor do Skills Workflow no endereço do conector.</figcaption>

5. Em **Authentication**, selecione **No sign-in**.
6. Em **Request headers**, selecione **Add header** três vezes e preencha `x-app-key`, `x-app-id` e `x-tenant-id`, cada um com o valor que a equipe do Skills Workflow enviou. Deixe **Required** selecionado em cada um.
7. Selecione **Add**.

   ![img-box-shadow-popup](/img/ai/claude/connector-headers.png)
   <figcaption>No sign-in, com os três request headers do conector do Skills Workflow.</figcaption>

O Claude armazena os valores dos headers e não os mostra novamente. Para alterar um deles, remova o conector e adicione-o de novo.

</TabItem>
<TabItem value="claude-code" label={<span className="sw-tool-tab"><img src="/img/ai/logos/claude.svg" alt=""/>Claude Code</span>}>

Adicione o conector a partir de um terminal:

```bash
claude mcp add --transport http skills-workflow https://apiv2-demo-test-we.skillsworkflow.com/mcp/client-portal \
  --header "x-app-id: <App ID>" \
  --header "x-app-key: <App key>" \
  --header "x-tenant-id: <Tenant ID>"
```

Substitua o endereço pelo do seu tenant e cada `<...>` pelo valor que a equipe do Skills Workflow enviou.

</TabItem>
<TabItem value="codex" label={<span className="sw-tool-tab"><img src="/img/ai/logos/openai.svg" alt="" className="sw-tool-tab__mono" />ChatGPT / Codex</span>}>

No app do ChatGPT:

1. Abra **Plugins** e selecione a aba **MCPs**.
2. Selecione **Add** e adicione um servidor MCP.
3. Em **URL**, digite o endereço do conector.
4. Deixe **Bearer token env var** vazio.
5. Em **Headers**, selecione **Add header** para cada credencial e preencha `x-app-id`, `x-tenant-id` e `x-app-key`, cada um com o valor que a equipe do Skills Workflow enviou.
6. Selecione **Save**.

   ![img-box-shadow-popup](/img/ai/codex/codex-mcp-headers.png)
   <figcaption>O servidor MCP do Skills Workflow no app do ChatGPT, com o endereço do conector e os três headers dele.</figcaption>

O Codex CLI e a extensão do Codex para IDE leem os mesmos servidores de `~/.codex/config.toml`. Para adicionar o conector lá:

```toml
[mcp_servers.skills-workflow]
url = "https://apiv2-demo-test-we.skillsworkflow.com/mcp/client-portal"
http_headers = { "x-app-id" = "<App ID>", "x-tenant-id" = "<Tenant ID>" }
env_http_headers = { "x-app-key" = "SW_APP_KEY" }
```

Substitua o endereço pelo do seu tenant e cada `<...>` pelo valor que a equipe do Skills Workflow enviou. A app key é lida da variável de ambiente `SW_APP_KEY`; defina-a com a app key antes de iniciar o Codex.

</TabItem>
<TabItem value="copilot" label={<span className="sw-tool-tab"><img src="/img/ai/logos/githubcopilot.svg" alt="" className="sw-tool-tab__mono" />GitHub Copilot</span>}>

No Visual Studio Code, adicione o conector ao `mcp.json`, no seu perfil de usuário ou em `.vscode/mcp.json` de um projeto. Para o arquivo do usuário, execute **MCP: Open User Configuration** a partir da Command Palette.

```json
{
  "inputs": [
    { "type": "promptString", "id": "sw-app-id", "description": "App ID do Skills Workflow" },
    { "type": "promptString", "id": "sw-app-key", "description": "App key do Skills Workflow", "password": true },
    { "type": "promptString", "id": "sw-tenant-id", "description": "Tenant ID do Skills Workflow" }
  ],
  "servers": {
    "skills-workflow": {
      "type": "http",
      "url": "https://apiv2-demo-test-we.skillsworkflow.com/mcp/client-portal",
      "headers": {
        "x-app-id": "${input:sw-app-id}",
        "x-app-key": "${input:sw-app-key}",
        "x-tenant-id": "${input:sw-tenant-id}"
      }
    }
  }
}
```

Substitua o endereço pelo do seu tenant. Na primeira vez que o servidor inicia, o Visual Studio Code pede os três valores e os armazena. Não escreva os valores no arquivo de um projeto do qual você faz commit.

</TabItem>
<TabItem value="microsoft-365-copilot" label="Microsoft 365 Copilot">

Crie um agente Skills Workflow no Copilot Studio para os usuários de Microsoft 365 Copilot ou Teams da agência. O agente liga-se ao servidor MCP da Skills Workflow. O GitHub Copilot no Visual Studio Code liga-se diretamente; siga o separador GitHub Copilot em Conectar sua ferramenta de AI.

### Pré-requisitos

Peça à Skills Workflow o endereço da API do tenant, App ID, App key, Tenant ID e as skills `client-portal` e `app-page`. Precisa de acesso ao Copilot Studio e de permissão para criar conectores personalizados no mesmo ambiente Power Platform.

Use um ambiente com Dataverse. Um ambiente Teams não suporta os novos agentes GitHub Copilot; um ambiente Developer sem Dataverse também bloqueia a criação. Reserve a App key aos publicadores autorizados: permite publicar e substituir páginas de todo o tenant como administrador da Skills Workflow.

### Criar o conector personalizado

1. Abra o [Power Apps](https://make.powerapps.com/), selecione o ambiente e abra **Custom connectors → New custom connector → Create from blank**. Dê-lhe o nome `Skills Workflow MCP`.
2. Ative **Swagger editor**. Baixe o [modelo OpenAPI](/files/skillsworkflow-mcp.openapi.yaml), substitua `YOUR-TENANT-API-HOST` pelo hostname da API do tenant (sem `https://` nem caminho) e cole a definição no editor. O caminho MCP é `/mcp/client-portal`.
3. Desative **Swagger editor** e confirme em **Security**: autenticação **API Key**, nome do parâmetro `x-app-key`, localização **Header**. Selecione **Create connector**.

![img-box-shadow](/img/ai/copilot-studio/security.png)
<figcaption>A App key fica armazenada na conexão, não nos dois inputs do agente.</figcaption>


4. Abra **Test → New connection**, introduza a App key no campo protegido `api_key` e selecione **Create**. Isto cria a conexão; o estado Connected, por si só, não valida as ferramentas MCP.

### Criar um agente standard

1. No [Copilot Studio](https://copilotstudio.microsoft.com/), selecione o mesmo ambiente. Abra **Home → Other ways to build → Build with standard orchestration → Agent**. Introduza um nome e selecione **Create**.

![img-box-shadow](/img/ai/copilot-studio/standard.png)
<figcaption>Escolha Agent na secção Standard para seguir esta configuração testada.</figcaption>


2. Abra **Add tool**, pesquise `Skills Workflow` e selecione **Skills Workflow MCP** em **Model Context Protocol**. Selecione a conexão criada e escolha **Add**.
3. Abra a ferramenta adicionada e preencha **Inputs**: `x-app-id` com App ID e `x-tenant-id` com Tenant ID. Selecione **Save**. Ambos são headers enviados com a App key da conexão. Preencha-os em cada agente; não são copiados automaticamente de outro agente.

![img-box-shadow](/img/ai/copilot-studio/inputs.png)
<figcaption>App ID e Tenant ID ficam nos Inputs da ferramenta; a App key fica na conexão protegida.</figcaption>


### Testar a conexão MCP

Inicie uma nova sessão de teste e pergunte quais as ferramentas Skills Workflow disponíveis. Compare a lista com as oito ferramentas em Verificar a conexão.

Depois peça ao agente para chamar `get_portal_url` para o cliente hipotético `mcp-connection-check` e o portal `connection-check`, sem criar nem alterar nada. Verifique o registro de atividade: a ferramenta deve terminar com **Completed** e devolver o URL do seu tenant. Esta ferramenta devolve um endereço mesmo que não exista uma página nesse local; não publica nem verifica a página.

![img-box-shadow](/img/ai/copilot-studio/test.png)
<figcaption>Uma chamada real a get_portal_url terminou com sucesso no teste do agente standard.</figcaption>


Uma lista textual de ferramentas não basta para validar a conexão. Se o editor mostrar **Connector request failed**, confirme os três valores dos headers e os inputs salvos. Confirme o comportamento em execução pelo resultado real da ferramenta no registro do teste.

### Preparar o acesso dos key users

Antes de pedir ao agente para publicar conteúdo, obtenha e configure com a Skills Workflow as regras oficiais `client-portal` e `app-page`. A publicação e distribuição a outros usuários exigem validação separada; o teste acima valida apenas uma conexão.

Para disponibilizar na organização, siga as [instruções Microsoft de publicação no Teams e Microsoft Copilot](https://learn.microsoft.com/en-us/microsoft-copilot-studio/publication-add-bot-to-microsoft-teams). Peça ao IT para rever o licenciamento, a identidade da conexão e o grupo de publicadores autorizados antes de disponibilizar o agente. Quem abre as páginas publicadas autentica-se com a sua própria identidade.

### Trial e créditos

Um trial do Copilot Studio pode permitir testar na experiência standard. Não garante capacidade de execução na nova experiência GitHub Copilot: a criação e os testes nessa experiência podem consumir Copilot Credits. Se aparecer `EnforcementUsageCredits`, peça ao administrador para verificar **Licensing → Copilot Studio → Manage Copilot Credits**. Consulte as [orientações Microsoft sobre capacidade](https://learn.microsoft.com/en-us/power-platform/admin/manage-usage-github-copilot-harness).


</TabItem>
</Tabs>

As telas dentro do Skills Workflow são criadas como um pequeno projeto de código. Crie-as em uma ferramenta que trabalhe com código: Claude Code, Codex ou GitHub Copilot.

## Verificar a conexão

Inicie uma nova conversa e pergunte:

```
Which Skills Workflow tools do you have?
```

A resposta lista as oito ferramentas do conector:

| Ferramenta | O que faz |
|---|---|
| `get_client_portal` | Lê uma página de cliente publicada |
| `create_client_portal` | Publica uma nova página de cliente |
| `update_client_portal` | Substitui uma página de cliente publicada |
| `get_portal_url` | Informa o endereço de uma página de cliente |
| `get_app_page` | Lê uma tela dentro do Skills Workflow e as versões dela |
| `publish_app_page_version` | Publica uma nova versão de uma tela |
| `set_app_page_live_version` | Escolhe a versão de uma tela que os usuários recebem |
| `get_app_page_url` | Informa o endereço de uma tela |

![img-box-shadow-popup](/img/ai/codex/codex-tools-check.png)
<figcaption>O app do ChatGPT respondendo à pergunta com as oito ferramentas do conector.</figcaption>

Essa pergunta não lê nem escreve nada no seu tenant. Se a ferramenta disser que não tem ferramentas do Skills Workflow, ou informar um erro, um dos valores está errado; compare o endereço e cada header com o que a equipe do Skills Workflow enviou.

## Regras e comportamento

- As credenciais funcionam apenas no endereço da API do seu próprio tenant. Qualquer outro endereço as recusa.
- O conector publica como o administrador do Skills Workflow do seu tenant. Qualquer pessoa com a app key pode criar e substituir páginas de todos os clientes do seu tenant, então deixe-a apenas com as poucas pessoas que publicam. Se a chave chegar a alguém que não deveria tê-la, avise a equipe do Skills Workflow.
- O conector acessa apenas o file system do seu tenant. Ele publica, lê de volta e informa o endereço do que publica; não altera Atividades, projetos nem qualquer outro registro.
- Quem abre o que foi publicado faz login com o próprio usuário. A identidade de administrador é usada para publicar, nunca para mostrar dados.

## Artigos relacionados

- [Skills Workflow na Sua Ferramenta de IA](/docs/ai/connector)
- [Portais de Clientes](/docs/ai/ai-portals)
- [A IA Pode Cometer Erros](/docs/ai/ai-can-make-mistakes)
