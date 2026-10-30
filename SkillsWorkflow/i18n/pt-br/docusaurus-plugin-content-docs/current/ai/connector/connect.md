---
id: ai-connector-setup
title: Conectar o Claude, o Codex ou o GitHub Copilot ao Skills Workflow
description: "Adicione o conector do Skills Workflow ao Claude, ao Claude Code, ao Codex ou ao GitHub Copilot com o endereço do seu tenant e os headers x-app-id, x-app-key e x-tenant-id que a equipe do Skills Workflow envia."
sidebar_label: Conectar Sua Ferramenta de IA
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

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
<TabItem value="claude" label="Claude" default>

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
<TabItem value="claude-code" label="Claude Code">

Adicione o conector a partir de um terminal:

```bash
claude mcp add --transport http skills-workflow https://apiv2-demo-test-we.skillsworkflow.com/mcp/client-portal \
  --header "x-app-id: <App ID>" \
  --header "x-app-key: <App key>" \
  --header "x-tenant-id: <Tenant ID>"
```

Substitua o endereço pelo do seu tenant e cada `<...>` pelo valor que a equipe do Skills Workflow enviou.

</TabItem>
<TabItem value="codex" label="Codex">

:::preview
Esta configuração segue a documentação do próprio Codex e ainda não foi testada com o Skills Workflow.
:::

O Codex CLI, a extensão do Codex para IDE e o app de desktop do ChatGPT compartilham um único arquivo de configuração, `~/.codex/config.toml`. Adicione o conector a ele:

```toml
[mcp_servers.skills-workflow]
url = "https://apiv2-demo-test-we.skillsworkflow.com/mcp/client-portal"
http_headers = { "x-app-id" = "<App ID>", "x-tenant-id" = "<Tenant ID>" }
env_http_headers = { "x-app-key" = "SW_APP_KEY" }
```

Substitua o endereço pelo do seu tenant e cada `<...>` pelo valor que a equipe do Skills Workflow enviou. A app key é lida da variável de ambiente `SW_APP_KEY`, o que a mantém fora do arquivo; defina essa variável com a app key antes de iniciar o Codex.

</TabItem>
<TabItem value="copilot" label="GitHub Copilot">

:::preview
Esta configuração segue a documentação do Visual Studio Code e ainda não foi testada com o Skills Workflow.
:::

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

Substitua o endereço pelo do seu tenant. Na primeira vez que o servidor inicia, o Visual Studio Code pede os três valores e os armazena. Não escreva os valores no arquivo de um projeto que você faz commit.

</TabItem>
</Tabs>

As telas dentro do Skills Workflow são criadas como um pequeno projeto de código. Crie-as em uma ferramenta que trabalhe com código: Claude Code, Codex ou GitHub Copilot.

## Verificar a conexão

Inicie uma nova conversa e pergunte:

```
Using Skills Workflow, give me the address of a page named "status" for the client "test".
```

A ferramenta responde com um endereço no domínio do seu próprio tenant. Nada é criado: a pergunta só determina onde essa página seria servida. Um erro em vez de um endereço significa que um dos valores está errado; compare cada header com o que a equipe do Skills Workflow enviou.

## Regras e comportamento

- As credenciais funcionam apenas no endereço da API do seu próprio tenant. Qualquer outro endereço as recusa.
- O conector publica como o administrador do Skills Workflow do seu tenant. Qualquer pessoa com a app key pode criar e substituir páginas de todos os clientes do seu tenant, então deixe-a apenas com as poucas pessoas que publicam. Se a chave chegar a alguém que não deveria tê-la, avise a equipe do Skills Workflow.
- O conector acessa apenas o file system do seu tenant. Ele publica, lê de volta e informa o endereço do que publica; não altera Atividades, projetos nem qualquer outro registro.
- Quem abre o que foi publicado faz login com o próprio usuário. A identidade de administrador é usada para publicar, nunca para mostrar dados.

## Artigos relacionados

- [Skills Workflow no Claude](/docs/ai/connector)
- [Portais de Clientes](/docs/ai/ai-portals)
- [A IA Pode Cometer Erros](/docs/ai/ai-can-make-mistakes)
