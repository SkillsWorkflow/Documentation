---
id: brief-validator
title: Validador de Briefs
description: "Verifique se um brief de marketing tem a informação necessária para preparar um deliverable para o cliente, usando as regras de briefing do próprio cliente."
sidebar_label: Validador de Briefs
sidebar_position: 6
---

O Validador de Briefs revê um brief de marketing antes de o trabalho começar. Identifica informação em falta ou pouco clara e verifica o brief face às instruções que a agência mantém para esse cliente. Dá apenas feedback; não cria nem altera um deliverable.

## Disponibilidade

Um administrador da agência tem de adicionar o Validador de Briefs ao Assistente de IA e ativar a tool `get_client_brief_instructions`. Para validar segundo regras específicas de um cliente, disponibilize o contexto do cliente com o brief. Sem esse contexto, o agente pode dar feedback geral, mas não consegue obter as instruções desse cliente.

## Como usar

1. Abra o [Assistente de IA](/docs/ai/ai-assistant) e selecione **Validador de Briefs**.
2. Cole o brief e identifique o cliente, ou mantenha disponível o contexto do cliente relevante.
3. Peça ao agente para validar o brief.
4. Acrescente os detalhes que o agente identificar e peça-lhe para validar novamente o brief.

O resultado deve concentrar-se no que está em falta ou pouco claro. Não deve inventar requisitos nem começar a criar o asset de marketing.

## Adicionar regras de briefing por cliente

Crie o ficheiro de instruções na área de ficheiros do cliente comercial selecionado. A pasta `ai-instructions` fica diretamente na pasta raiz desse cliente; coloque nela o ficheiro `brief-instructions.md`.

![img](/img/ai/brief-validator-client-instructions-location.png)
<figcaption>Substitua este placeholder por um screenshot que mostre a árvore de ficheiros do cliente, a pasta <code>ai-instructions</code> e o ficheiro <code>brief-instructions.md</code>.</figcaption>

Use os nomes da pasta e do ficheiro apresentados na imagem. Este é um ficheiro do cliente, não uma skill partilhada pelo tenant nem um anexo no chat.

Mantenha as instruções focadas na informação necessária para que o brief seja utilizável. Indique explicitamente quando um valor pode estar ausente, como `No call to action` ou `No specific client rules`, para o agente não o pedir sem necessidade.

## Como a validação é montada

1. O utilizador seleciona **Validador de Briefs** e disponibiliza um brief com o contexto do cliente.
2. O agente chama `get_client_brief_instructions` para esse cliente.
3. A tool abre a área de ficheiros do cliente, encontra a pasta `ai-instructions` e lê `brief-instructions.md`.
4. A tool devolve o conteúdo do ficheiro ao agente. O agente usa essas regras para rever o brief e devolve o feedback de validação.

A tool procura apenas nesta localização. Não procura noutros ficheiros do cliente, anexos no chat nem na pasta `$ai-agents/skills` do tenant. Se a pasta ou o ficheiro não existir, estiver vazio ou não puder ser lido, as regras específicas do cliente não estão disponíveis e o agente só pode dar feedback geral sobre a qualidade do brief.

## O que o utilizador recebe

Com a política de exemplo abaixo, um brief completo devolve `passed` com um resumo. Um brief com informação em falta ou pouco clara devolve `failed` e pede apenas os detalhes necessários. Em ambos os casos, o agente não cria o deliverable.

## Exemplo de ficheiro de instruções do cliente

O exemplo seguinte é um standard de brief de marketing que uma agência pode adaptar para um cliente. Não é um template universal: acrescente os requisitos próprios de marca, legais e de aprovação do cliente quando se aplicarem.

```md
# Instruções do brief

Valide se o brief contém informação suficiente para preparar um deliverable de
marketing claro. Não crie o deliverable até o brief passar.

Um brief deve identificar:

1. **Deliverable** — por exemplo, um post de feed para Instagram, um email ou texto para uma landing page.
2. **Objetivo** — o resultado que o deliverable deve atingir.
3. **Público** — a quem se destina.
4. **Mensagem principal** — a ideia que deve comunicar.
5. **Call to action** — o que o público deve fazer a seguir, ou `No call to action`.
6. **Regras do cliente** — tom, texto obrigatório, restrições ou `No specific client rules`.
7. **Prazo** — uma data ou momento específico.

Devolva `failed` quando faltar um item obrigatório ou ele for pouco claro. Liste
apenas esses itens e peça a informação necessária. Devolva `passed` quando o
brief estiver completo e resuma o brief aprovado. Não invente detalhes em falta.
```

Por exemplo, `We need some content` não descreve um deliverable utilizável. `We need one Instagram feed post` é suficientemente específico para a validação continuar.

## Artigos relacionados

- [Assistente de IA](/docs/ai/ai-assistant)
- [Agente de Documentos](/docs/ai/agents/document-agent)
- [Adicionar as suas skills, agents e tools](/docs/ai/ai-extend)
