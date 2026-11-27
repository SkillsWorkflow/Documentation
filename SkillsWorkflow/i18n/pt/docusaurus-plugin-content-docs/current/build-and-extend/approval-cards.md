---
id: approval-cards
title: Cartões de Aprovação (A2UI)
description: "O contrato por trás dos cartões de aprovação do Assistente de IA: as mensagens A2UI v0.9.1 que o agent server envia, o catálogo Skills Workflow que usam e como um cliente devolve as edições e a decisão do utilizador."
sidebar_label: Cartões de Aprovação
sidebar_position: 5
---

Quando um agente vai executar uma ação que precisa de aprovação, o agent server descreve o cartão de aprovação em mensagens [A2UI v0.9.1](https://a2ui.org/specification/v0.9.1-a2ui/), o formato aberto da Google para interfaces geradas por agentes. O cliente desenha-as a partir de um catálogo de componentes conhecidos. O agente nunca envia HTML, e as mesmas mensagens podem ser desenhadas pela WebApp, por uma app móvel ou por qualquer outro cliente que implemente o catálogo.

O utilizador vê isto como o **cartão de aprovação** descrito em [Assistente de IA](/docs/ai/ai-assistant#aprovar-o-que-faz).

## Por onde viaja o cartão

O cartão segue no run AG-UI que para à espera de aprovação. O run termina com um evento `RUN_FINISHED` cujo `outcome.type` é `interrupt`, e cada entrada de `outcome.interrupts` descreve uma ação pendente:

| Campo | Contém |
|---|---|
| `id` | O id do interrupt, devolvido com a decisão |
| `toolCallId` | A chamada de tool à espera de aprovação |
| `metadata.toolName` | A tool que vai ser executada |
| `metadata.arguments` | Os argumentos com que vai ser executada |
| `metadata.a2ui` | O cartão: a lista de mensagens A2UI |

O cartão nunca faz parte do histórico da conversa e nunca chega ao modelo.

## Pedir os cartões

Um cliente só recebe cartões quando declara os catálogos que sabe desenhar. Envie este objeto em `forwardedProps` em todos os runs, incluindo o run que retoma depois de uma decisão:

```json
{
  "a2uiClientCapabilities": {
    "v0.9": {
      "supportedCatalogIds": [
        "https://skillsworkflow.com/a2ui/v0_9/catalogs/approval/catalog.json",
        "https://a2ui.org/specification/v0_9/catalogs/basic/catalog.json"
      ]
    }
  }
}
```

A chave continua a ser `v0.9` na v0.9.1.

Um cliente que não o envie não recebe `metadata.a2ui` e desenha a aprovação por si, a partir de `metadata.toolName` e `metadata.arguments`.

## As mensagens

`metadata.a2ui` contém três mensagens, aplicadas por ordem. Cada uma leva `"version": "v0.9.1"`.

| Mensagem | O que faz |
|---|---|
| `createSurface` | Abre o cartão. `surfaceId` é `approval-` seguido do id do interrupt. `catalogId` indica o catálogo Skills Workflow. |
| `updateComponents` | Os componentes, numa lista plana. Cada um tem um `id` e um tipo em `component`, e os contentores indicam os filhos pelo id. |
| `updateDataModel` | Os valores que os campos editam, em `/args`. |

Há dois ids de componente fixos:

- `root` é o topo do cartão.
- `title` é o cabeçalho do cartão. Um cliente com um cabeçalho próprio pode mostrá-lo aí e deixá-lo fora do corpo.

## O catálogo

Os cartões usam o catálogo de aprovação Skills Workflow, `https://skillsworkflow.com/a2ui/v0_9/catalogs/approval/catalog.json`. É o catálogo básico A2UI, sem alterações, mais um componente e uma função. [Descarregar o catálogo](/files/a2ui-approval-catalog.json) (JSON Schema).

### Componentes

Todos os componentes do catálogo básico: `Text`, `Image`, `Icon`, `Video`, `AudioPlayer`, `Row`, `Column`, `List`, `Card`, `Tabs`, `Modal`, `Divider`, `Button`, `TextField`, `CheckBox`, `ChoicePicker`, `Slider` e `DateTimeInput`.

`EntityPicker` escolhe registos da plataforma numa lista demasiado longa para enviar. O servidor indica a entidade, e o cliente pesquisa na plataforma como já faz.

| Propriedade | Contém |
|---|---|
| `label` | O que está a ser escolhido |
| `entity` | `user`, `client`, `project`, `department`, `jobType`, `company`, `role`, `documentType` ou `typology` |
| `filter` | Parâmetros que restringem a pesquisa, como `companyId` |
| `multiple` | `true` para uma lista de registos, `false` para um só |
| `value` | Os ids escolhidos, ligados ao argumento que editam |
| `display` | Os nomes desses ids, pela mesma ordem |

Os cartões usam `client`, `department`, `role` e `typology`. A WebApp pesquisa-os com estes lookups:

| Entidade | Lookup |
|---|---|
| `client` | `commercialclients/lookup` com `getAllClients=true` |
| `department` | `departments/lookup` com `filterByCurrentUser=false` e `filterByPlannable=false` |
| `role` | `v3/roles/lookup` |
| `typology` | `v3/user-typologies/lookup`, com o `companyId` que o cartão envia em `filter` |

### Funções

As funções do catálogo básico (`formatDate`, `formatNumber`, `formatString`, `and`, `or`, `not` e as restantes), mais `translate`.

`translate` devolve um texto na língua do utilizador. Os seus argumentos:

- `key`: uma chave de tradução Skills Workflow.
- `fallback`: o texto em inglês, mostrado quando o cliente não tem tradução para a chave.
- `params`: valores para os marcadores `{{name}}` da chave e do fallback.

Um cliente sem as traduções Skills Workflow continua a mostrar texto legível através de `fallback`.

## Organização dos cartões

Os cartões seguem alguns padrões do catálogo básico:

- Uma `Row` cujo primeiro filho é um `Text` `caption` é um campo: esse texto é a etiqueta, o filho seguinte é o valor.
- Uma `Row` de `Column`s, cada uma com uma etiqueta e um valor, põe dois campos curtos na mesma linha.
- Um `Text` com a variante `h5` é o título de uma secção.
- Um `Text` `caption` diretamente debaixo de `root` é uma nota, como a origem dos valores propostos.

## Devolver a decisão

Cada campo que o utilizador pode corrigir está ligado a `/args/<argumento>`, o argumento da tool que edita, e `updateDataModel` preenche-o com o valor que o agente propôs. O `EntityPicker` do cartão liga `value` ao argumento dos ids e `display` ao argumento dos nomes, e o cliente escreve os dois quando o utilizador escolhe.

Para decidir, retome o run com uma entrada por interrupt:

```json
{
  "interruptId": "<id do interrupt>",
  "status": "resolved",
  "payload": {
    "approved": true,
    "toolCall": {
      "callId": "<toolCallId>",
      "name": "<metadata.toolName>",
      "arguments": { }
    }
  }
}
```

- `arguments` é `metadata.arguments`, com os valores que o utilizador alterou em `/args` escritos por cima. Envie todos os outros argumentos sem alterações.
- Uma lista editada linha a linha tem uma marca `include` em cada linha. Envie só as linhas com `include` a `true`, sem a marca.
- Para recusar, ponha `approved` a `false`. Acrescente `reason` para dizer ao agente porquê.

## Exemplo

O cartão para alterar a data de admissão de um utilizador, tal como o agent server o envia. Os componentes estão reduzidos ao cabeçalho, a um campo e a uma entrada:

```json
[
  {
    "version": "v0.9.1",
    "createSurface": {
      "surfaceId": "approval-8b1e",
      "catalogId": "https://skillsworkflow.com/a2ui/v0_9/catalogs/approval/catalog.json"
    }
  },
  {
    "version": "v0.9.1",
    "updateComponents": {
      "surfaceId": "approval-8b1e",
      "components": [
        { "id": "root", "component": "Column", "children": ["title", "c3", "c6"] },
        {
          "id": "title", "component": "Text", "variant": "h4",
          "text": {
            "call": "translate",
            "args": {
              "key": "AiChatApprovalUserDetailsTitle",
              "fallback": "Change {{name}}'s dates and hours",
              "params": { "name": "Joana Reis" }
            }
          }
        },
        { "id": "c1", "component": "Text", "variant": "body", "text": "Joana Reis" },
        {
          "id": "c2", "component": "Text", "variant": "caption",
          "text": { "call": "translate", "args": { "key": "AiChatApprovalUserRolesUser", "fallback": "User" } }
        },
        { "id": "c3", "component": "Row", "children": ["c2", "c1"] },
        {
          "id": "c4", "component": "DateTimeInput", "enableDate": true, "enableTime": false,
          "label": { "call": "translate", "args": { "key": "AiChatApprovalUserDetailsHireDate", "fallback": "Hire date" } },
          "value": { "path": "/args/hireDate" }
        },
        {
          "id": "c5", "component": "Text", "variant": "caption",
          "text": { "call": "translate", "args": { "key": "AiChatApprovalUserDetailsHireDate", "fallback": "Hire date" } }
        },
        { "id": "c6", "component": "Row", "children": ["c5", "c4"] }
      ]
    }
  },
  {
    "version": "v0.9.1",
    "updateDataModel": {
      "surfaceId": "approval-8b1e",
      "path": "/",
      "value": { "args": { "hireDate": "2026-03-01" } }
    }
  }
]
```

Se o utilizador mudar a data para 15 de março antes de aprovar, o resume envia `"hireDate": "2026-03-15"` em `toolCall.arguments`.

## Regras e limitações

- Os botões que aprovam ou recusam não são componentes. O cliente desenha-os e envia a decisão com o resume acima.
- Os cartões não contêm `Button`, `Modal`, `Video` nem `AudioPlayer`. Um cliente que não saiba desenhar um componente deve mostrar o seu `text` ou `label`.
- Um briefing ou um comentário aparece como texto e não pode ser editado no cartão. O utilizador pede a alteração ao agente na conversa.
- Uma ação sem cartão descrito pelo servidor chega sem `metadata.a2ui`.
- Os agentes ligados por um endpoint externo devolvem apenas texto e ainda não podem enviar cartões de aprovação.

## Artigos relacionados

- [Assistente de IA](/docs/ai/ai-assistant)
- [Ferramentas](/docs/ai/ai-tools)
- [Adicionar as Suas Skills, Agents e Tools](/docs/ai/ai-extend)
