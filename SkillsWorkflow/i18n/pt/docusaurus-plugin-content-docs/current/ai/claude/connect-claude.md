---
id: ai-claude-connect
title: Ligar o Claude ao Skills Workflow
description: "Adicione o conector do Skills Workflow ao Claude com o endereço do seu tenant e os headers x-app-id, x-app-key e x-tenant-id que a equipa do Skills Workflow lhe envia."
sidebar_label: Ligar o Claude
sidebar_position: 2
---

Adicione o Skills Workflow ao Claude como um conector personalizado. Depois de adicionado, o Claude pode criar páginas de estado, relatórios e ecrãs para a sua agência e publicá-los no seu tenant.

## Pré-requisitos

Peça à equipa do Skills Workflow os dados de ligação do seu tenant. Recebe quatro valores:

| Valor | Onde é usado |
|---|---|
| O endereço da API do seu tenant | O endereço do conector |
| App ID | O header `x-app-id` |
| App key | O header `x-app-key` |
| Tenant ID | O header `x-tenant-id` |

Com os dados vêm duas skills, `client-portal` e `app-page`. Dão ao Claude as regras do que publica: como uma página lê os seus dados, o que pode carregar e como é publicada. Adicione-as ao Claude em **Settings** > **Capabilities** > **Skills** antes de pedir o que quer que seja.

Também precisa de um plano do Claude que permita adicionar conectores personalizados. Nos planos Team e Enterprise, é um owner da organização no Claude que adiciona o conector para todos.

## Adicionar o conector no Claude

1. No Claude, abra **Settings** > **Connectors** e selecione **Add custom connector**.
2. Em **Name**, escreva `Skills Workflow`. É o nome que aparece na lista de conectores.
3. Em **MCP server URL**, escreva o endereço da API do seu tenant seguido de `/mcp/client-portal`:

   ```
   https://<your tenant's API address>/mcp/client-portal
   ```

   ![img-box-shadow-popup](/img/ai/claude/add-custom-connector.png)
   <figcaption>A janela Add custom connector no Claude, com os campos Name e MCP server URL.</figcaption>

4. Adicione um header para cada credencial: `x-app-id`, `x-app-key` e `x-tenant-id`, cada um com o valor que a equipa do Skills Workflow enviou.

   ![img-box-shadow-sm](/img/ai/claude/connector-headers.png)
   <figcaption>Os três headers do conector do Skills Workflow.</figcaption>

5. Selecione **Continue**.

## Adicionar o conector no Claude Code {#add-the-connector-in-claude-code}

Os ecrãs dentro do Skills Workflow são construídos como um pequeno projeto de código, e o Claude Code é o sítio para os construir. Adicione o conector a partir de um terminal:

```bash
claude mcp add --transport http skills-workflow https://<your tenant's API address>/mcp/client-portal \
  --header "x-app-id: <App ID>" \
  --header "x-app-key: <App key>" \
  --header "x-tenant-id: <Tenant ID>"
```

## Confirmar a ligação

Comece uma nova conversa e pergunte:

```
Using Skills Workflow, give me the address of a page named "status" for the client "test".
```

O Claude responde com um endereço no domínio do seu tenant. Nada é criado: a pergunta apenas resolve onde uma página assim seria servida. Um erro em vez de um endereço significa que um dos valores está errado; compare cada header com o que a equipa do Skills Workflow enviou.

## Regras e comportamento

- As credenciais só funcionam no endereço da API do seu próprio tenant. Qualquer outro endereço recusa-as.
- O conector publica como o administrador do Skills Workflow do seu tenant. Quem tiver a app key pode criar e substituir páginas para todos os clientes do seu tenant, por isso mantenha-a com as poucas pessoas que publicam. Se a key chegar a alguém que não a deveria ter, avise a equipa do Skills Workflow.
- O conector só acede ao sistema de ficheiros do seu tenant. Publica, lê de volta e dá o endereço do que publica; não altera jobs, projetos nem nenhum outro registo.
- Quem abre o que o Claude publicou inicia sessão como si próprio. A identidade de administrador é usada para publicar, nunca para mostrar dados.

## Artigos relacionados

- [Skills Workflow no Claude](/docs/ai/claude)
- [Portais de Cliente](/docs/ai/ai-portals)
- [A IA Pode Cometer Erros](/docs/ai/ai-can-make-mistakes)
