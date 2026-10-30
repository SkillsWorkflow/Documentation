---
id: ai-claude-connect
title: Conectar o Claude ao Skills Workflow
description: "Adicione o conector do Skills Workflow ao Claude com o endereço do seu tenant e os headers x-app-id, x-app-key e x-tenant-id que a equipe do Skills Workflow envia."
sidebar_label: Conectar o Claude
sidebar_position: 2
---

Adicione o Skills Workflow ao Claude como um conector personalizado. Depois de adicioná-lo, o Claude pode criar páginas de status, relatórios e telas para a sua agência e publicá-los no seu tenant.

## Pré-requisitos

Peça à equipe do Skills Workflow os dados de conexão do seu tenant. Você recebe quatro valores:

| Valor | Onde é usado |
|---|---|
| O endereço da API do seu tenant | O endereço do conector |
| App ID | O header `x-app-id` |
| App key | O header `x-app-key` |
| Tenant ID | O header `x-tenant-id` |

Junto com os dados vêm duas skills, `client-portal` e `app-page`. Elas dão ao Claude as regras do que ele publica: como uma página lê os seus dados, o que ela pode carregar e como é publicada. Adicione-as ao Claude em **Settings** > **Capabilities** > **Skills** antes de pedir qualquer coisa.

Você também precisa de um plano do Claude que permita adicionar conectores personalizados. Nos planos Team e Enterprise, um owner da organização do Claude adiciona o conector para todos.

## Adicionar o conector no Claude

1. No Claude, abra **Settings** > **Connectors** e selecione **Add custom connector**.
2. Em **Name**, digite `Skills Workflow`. Esse é o nome mostrado na lista de conectores.
3. Em **MCP server URL**, digite o endereço da API do seu tenant seguido de `/mcp/client-portal`:

   ```
   https://<your tenant's API address>/mcp/client-portal
   ```

   ![img-box-shadow-popup](/img/ai/claude/add-custom-connector.png)
   <figcaption>A caixa de diálogo Add custom connector no Claude, com os campos Name e MCP server URL.</figcaption>

4. Adicione um header para cada credencial: `x-app-id`, `x-app-key` e `x-tenant-id`, cada um com o valor que a equipe do Skills Workflow enviou.

   ![img-box-shadow-sm](/img/ai/claude/connector-headers.png)
   <figcaption>Os três headers do conector do Skills Workflow.</figcaption>

5. Selecione **Continue**.

## Adicionar o conector no Claude Code {#add-the-connector-in-claude-code}

As telas dentro do Skills Workflow são criadas como um pequeno projeto de código, e o Claude Code é o lugar para criá-las. Adicione o conector a partir de um terminal:

```bash
claude mcp add --transport http skills-workflow https://<your tenant's API address>/mcp/client-portal \
  --header "x-app-id: <App ID>" \
  --header "x-app-key: <App key>" \
  --header "x-tenant-id: <Tenant ID>"
```

## Verificar a conexão

Inicie uma nova conversa e pergunte:

```
Using Skills Workflow, give me the address of a page named "status" for the client "test".
```

O Claude responde com um endereço no domínio do seu próprio tenant. Nada é criado: a pergunta só determina onde essa página seria servida. Um erro em vez de um endereço significa que um dos valores está errado; compare cada header com o que a equipe do Skills Workflow enviou.

## Regras e comportamento

- As credenciais funcionam apenas no endereço da API do seu próprio tenant. Qualquer outro endereço as recusa.
- O conector publica como o administrador do Skills Workflow do seu tenant. Qualquer pessoa com a app key pode criar e substituir páginas de todos os clientes do seu tenant, então deixe-a apenas com as poucas pessoas que publicam. Se a chave chegar a alguém que não deveria tê-la, avise a equipe do Skills Workflow.
- O conector acessa apenas o file system do seu tenant. Ele publica, lê de volta e informa o endereço do que publica; não altera Atividades, projetos nem qualquer outro registro.
- Quem abre o que o Claude publicou faz login com o próprio usuário. A identidade de administrador é usada para publicar, nunca para mostrar dados.

## Artigos relacionados

- [Skills Workflow no Claude](/docs/ai/claude)
- [Portais de Clientes](/docs/ai/ai-portals)
- [A IA Pode Cometer Erros](/docs/ai/ai-can-make-mistakes)
