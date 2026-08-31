---
id: ai-actions
title: Ações de IA
description: "As Ações de IA colocam assistência de texto na barra de ferramentas de todos os editores de texto enriquecido. Este artigo cobre como as usar e como configurar a lista que a sua agência vê."
sidebar_label: Ações de IA
sidebar_position: 3
---

As Ações de IA são o botão de IA na barra de ferramentas de um editor de texto enriquecido. Em vez de abrir o painel de chat, escolhe uma ação na barra de ferramentas e o texto do editor é reescrito no lugar.

As ações desse menu não são fixas. **É a sua agência que as define.** Um tenant novo tem a lista vazia e não mostra nenhum menu até alguém configurá-la — que é também o que permite disponibilizar ações escritas para o trabalho de vocês, em vez de ações genéricas.

## Disponibilidade

Ambas as definições estão em **Maintenance > Configuration > System > Artificial Intelligence (AI)**:

| Definição | O que faz |
|---|---|
| Enable AI | Interruptor principal de todas as funcionalidades de IA |
| Enable AI Actions | Mostra o botão de Ações de IA nos editores de texto enriquecido |

Com ambas ativas, o botão aparece em:

- **Briefs e descrições de documentos** — o brief de um Job, Deliverable, Estimate, Contract, Request ou qualquer outro tipo de documento.
- **Publicações no feed** — o editor onde escreve uma publicação.

<figure>

![img](/img/ai/ai-actions-toolbar-button.png)
<figcaption>O botão de Ações de IA na barra de ferramentas do editor, com o menu aberto</figcaption>
</figure>

## Como usar

1. Escreva alguma coisa, ou abra um documento que já tenha brief. Uma ação com o editor vazio responde *Add content to the editor before running this action.*
2. Clique no botão de Ações de IA na barra de ferramentas.
3. Escolha uma ação, ou use **Ask AI** e escreva com suas palavras a alteração que quer.
4. O editor fica somente leitura enquanto processa.
5. O resultado substitui o que lá estava. Uma notificação diz *Text replaced. Click to undo.*

`Ctrl+Z` / `⌘+Z` também restaura o original, e as ações podem ser encadeadas — reescrever, depois encurtar, depois ajustar o tom.

Algumas ações abrem o painel do [Assistente de IA](/docs/ai/ai-assistant) em vez de aplicarem logo, para que você possa iterar sobre o resultado e escolher onde inseri-lo. Qual das duas coisas uma ação faz é parte da sua configuração.

## Trabalhar a partir de um template de briefing

Uma ação pode receber também o **template de briefing** do job type, além do texto do editor. É isso que transforma anotações soltas num brief estruturado: a ação lê o que escreveu, lê o template configurado no job type do documento, e preenche as secções do template a partir dsuas anotações.

<figure>

![img](/img/university/ai/writing-tools-description-template.png)
<figcaption>Um description template, em Maintenance &gt; Configuration &gt; Description Templates. Uma ação preenche essas seções a partir do que você escreveu.</figcaption>
</figure>

Isto só funciona quando o job type tem um template de briefing configurado. Sem ele, a ação escreve apenas a partir do seu texto.

## Configuração

A lista é a grelha **AI Actions** em **Maintenance > Configuration > System > Artificial Intelligence (AI)**. Cada linha é uma entrada do menu da barra de ferramentas.

| Coluna | O que faz |
|---|---|
| ID | Identifica a ação |
| Label Key | A chave de tradução usada como rótulo do menu. Use uma chave existente para que o rótulo apareça traduzido em todos os idiomas em que seus usuários trabalham |
| System Prompt | A instrução que define como a ação se comporta |
| User Prompt Template | O que é enviado nesta ação. `{{content}}` é o texto do editor; `{{template}}` é o template de briefing do job type |
| Order | Posição no menu, por ordem crescente |
| Entities | Restringe a ação a certos tipos de documento. Deixe vazio para mostrá-la em todos os lugares |
| Custom Prompt | Faz desta a ação que pergunta ao usuário o que fazer, em vez de agir sozinha |
| Execution Mode | `popup` aplica o resultado no lugar; `panel` continua no Assistente de IA |
| Auto Send | Corre imediatamente, sem esperar pela confirmação do usuário |
| Server Tools | Ferramentas que a ação pode usar. Ver [Ferramentas](/docs/ai/ai-tools) |
| Content Labels | Restringe a ação a um editor em particular |

As ações correm no [Agente de Escrita](/docs/ai/agents/writing-agent), a não ser que a linha indique outro agente, que é a forma de apontar uma ação para um agente de vocês. Ver [Adicionar as suas skills, agents e tools](/docs/ai/ai-extend).

As chaves de tradução já disponíveis para ações comuns incluem `Rewrite`, `MakeFriendly`, `MakeProfessional`, `MakeConcise`, `Summarize`, `FixGrammar`, `Compose`, `FillBriefTemplate` e `GenerateFromTemplate`. Referenciar uma destas em **Label Key** dá um rótulo traduzido sem acrescentar nenhuma tradução.

## Regras e comportamento

- O resultado **substitui** o conteúdo do editor. Nada é fundido.
- As ações respondem no idioma do texto que lhes deu.
- Uma ação que falhe diz *Unable to generate text right now. Please try again.* e deixa seu texto intacto.
- Nada fica gravado até guardar o documento, portanto um resultado indesejado não custa nada.

## Artigos relacionados

- [Agente de Escrita](/docs/ai/agents/writing-agent)
- [Assistente de IA](/docs/ai/ai-assistant)
- [Ferramentas](/docs/ai/ai-tools)
- [Adicionar as suas skills, agents e tools](/docs/ai/ai-extend)
