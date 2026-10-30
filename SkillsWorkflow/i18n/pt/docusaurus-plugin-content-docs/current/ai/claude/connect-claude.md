---
id: ai-claude-connect
title: Ligar o Claude, o Codex ou o GitHub Copilot ao Skills Workflow
description: "Adicione o conector do Skills Workflow ao Claude, ao Claude Code, ao Codex ou ao GitHub Copilot com o endereço do seu tenant e os headers x-app-id, x-app-key e x-tenant-id que a equipa do Skills Workflow lhe envia."
sidebar_label: Ligar a Sua Ferramenta de IA
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Adicione o Skills Workflow à ferramenta de IA com que trabalha. Depois de ligada, a ferramenta pode criar páginas de estado, relatórios e ecrãs para a sua agência e publicá-los no seu tenant. A ligação é igual em todas as ferramentas: um endereço e três headers.

## Pré-requisitos

Peça à equipa do Skills Workflow os dados de ligação do seu tenant. Recebe quatro valores:

| Valor | Onde é usado |
|---|---|
| O endereço da API do seu tenant | O endereço do conector |
| App ID | O header `x-app-id` |
| App key | O header `x-app-key` |
| Tenant ID | O header `x-tenant-id` |

O endereço do conector é o endereço da API do seu tenant seguido de `/mcp/client-portal`. Para um tenant cujo endereço da API é `https://apiv2-demo-test-we.skillsworkflow.com`, é:

```
https://apiv2-demo-test-we.skillsworkflow.com/mcp/client-portal
```

Com os dados vêm duas skills, `client-portal` e `app-page`. Dão à ferramenta de IA as regras do que publica: como uma página lê os seus dados, o que pode carregar e como é publicada. Adicione-as à sua ferramenta antes de pedir o que quer que seja; no Claude, em **Settings** > **Capabilities** > **Skills**.

## Adicionar o conector

<Tabs groupId="ai-tool" queryString>
<TabItem value="claude" label="Claude" default>

O Claude na web e o Claude Desktop partilham os conectores. Nos planos Team e Enterprise, é um owner da organização no Claude que adiciona o conector para todos.

1. Abra **Settings** > **Connectors** e selecione **Add custom connector**.
2. No primeiro campo, escreva um nome para o conector, por exemplo `Skills Workflow`. É o nome que aparece na lista de conectores.
3. No segundo campo, escreva o endereço do conector e selecione **Continue**.
4. O Claude verifica o servidor. **Connecting to the server** responde `401` e as verificações de início de sessão respondem `404`: é o esperado, porque o conector se autentica com headers. Quando aparecer **Server found**, selecione **Continue**.

   ![img-box-shadow-popup](/img/ai/claude/add-custom-connector.png)
   <figcaption>O Claude encontra o servidor do Skills Workflow no endereço do conector.</figcaption>

5. Em **Authentication**, selecione **No sign-in**.
6. Em **Request headers**, selecione **Add header** três vezes e preencha `x-app-key`, `x-app-id` e `x-tenant-id`, cada um com o valor que a equipa do Skills Workflow enviou. Deixe **Required** selecionado em cada um.
7. Selecione **Add**.

   ![img-box-shadow-popup](/img/ai/claude/connector-headers.png)
   <figcaption>No sign-in, com os três request headers do conector do Skills Workflow.</figcaption>

O Claude guarda os valores dos headers e não volta a mostrá-los. Para alterar um, remova o conector e adicione-o de novo.

</TabItem>
<TabItem value="claude-code" label="Claude Code">

Adicione o conector a partir de um terminal:

```bash
claude mcp add --transport http skills-workflow https://apiv2-demo-test-we.skillsworkflow.com/mcp/client-portal \
  --header "x-app-id: <App ID>" \
  --header "x-app-key: <App key>" \
  --header "x-tenant-id: <Tenant ID>"
```

Substitua o endereço pelo do seu tenant e cada `<...>` pelo valor que a equipa do Skills Workflow enviou.

</TabItem>
<TabItem value="codex" label="Codex">

:::preview
Esta configuração segue a documentação do próprio Codex e ainda não foi testada com o Skills Workflow.
:::

O Codex CLI, a extensão do Codex para IDE e a app de desktop do ChatGPT partilham um único ficheiro de configuração, `~/.codex/config.toml`. Adicione-lhe o conector:

```toml
[mcp_servers.skills-workflow]
url = "https://apiv2-demo-test-we.skillsworkflow.com/mcp/client-portal"
http_headers = { "x-app-id" = "<App ID>", "x-tenant-id" = "<Tenant ID>" }
env_http_headers = { "x-app-key" = "SW_APP_KEY" }
```

Substitua o endereço pelo do seu tenant e cada `<...>` pelo valor que a equipa do Skills Workflow enviou. A app key é lida da variável de ambiente `SW_APP_KEY`, o que a mantém fora do ficheiro; defina essa variável com a app key antes de iniciar o Codex.

</TabItem>
<TabItem value="copilot" label="GitHub Copilot">

:::preview
Esta configuração segue a documentação do Visual Studio Code e ainda não foi testada com o Skills Workflow.
:::

No Visual Studio Code, adicione o conector ao `mcp.json`, no seu perfil de utilizador ou em `.vscode/mcp.json` de um projeto. Para o ficheiro do utilizador, execute **MCP: Open User Configuration** a partir da Command Palette.

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

Substitua o endereço pelo do seu tenant. Na primeira vez que o servidor arranca, o Visual Studio Code pede os três valores e guarda-os. Não escreva os valores no ficheiro de um projeto que faz commit.

</TabItem>
</Tabs>

Os ecrãs dentro do Skills Workflow são construídos como um pequeno projeto de código. Construa-os numa ferramenta que trabalhe sobre código: Claude Code, Codex ou GitHub Copilot.

## Confirmar a ligação

Comece uma nova conversa e pergunte:

```
Using Skills Workflow, give me the address of a page named "status" for the client "test".
```

A ferramenta responde com um endereço no domínio do seu tenant. Nada é criado: a pergunta apenas resolve onde uma página assim seria servida. Um erro em vez de um endereço significa que um dos valores está errado; compare cada header com o que a equipa do Skills Workflow enviou.

## Regras e comportamento

- As credenciais só funcionam no endereço da API do seu próprio tenant. Qualquer outro endereço recusa-as.
- O conector publica como o administrador do Skills Workflow do seu tenant. Quem tiver a app key pode criar e substituir páginas para todos os clientes do seu tenant, por isso mantenha-a com as poucas pessoas que publicam. Se a key chegar a alguém que não a deveria ter, avise a equipa do Skills Workflow.
- O conector só acede ao sistema de ficheiros do seu tenant. Publica, lê de volta e dá o endereço do que publica; não altera jobs, projetos nem nenhum outro registo.
- Quem abre o que foi publicado inicia sessão como si próprio. A identidade de administrador é usada para publicar, nunca para mostrar dados.

## Artigos relacionados

- [Skills Workflow no Claude](/docs/ai/claude)
- [Portais de Cliente](/docs/ai/ai-portals)
- [A IA Pode Cometer Erros](/docs/ai/ai-can-make-mistakes)
