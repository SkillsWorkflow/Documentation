---
id: ai-connector
title: Skills Workflow na Sua Ferramenta de IA
description: "Conecte o Claude, o Codex ou o GitHub Copilot ao Skills Workflow e crie o que a sua agência entrega a clientes e equipes: páginas de status, relatórios e telas dentro da plataforma, todos lendo dados em tempo real."
sidebar_label: Visão geral
sidebar_position: 1
---

Conecte a sua ferramenta de IA ao seu tenant do Skills Workflow e descreva o que você precisa em linguagem simples. Ela cria, publica no seu tenant e informa o endereço. O que ela cria lê dados do Skills Workflow em tempo real, e cada pessoa que abre vê apenas o que as suas próprias permissões permitem.

A conexão é um conector que você adiciona uma única vez, com as credenciais que a equipe do Skills Workflow envia. O mesmo conector funciona no Claude, no Claude Code, no Codex e no GitHub Copilot. Leia [Conectar o Claude, o Codex ou o GitHub Copilot ao Skills Workflow](/docs/ai/connector/ai-connector-setup) para configurá-lo.

## O que você pode criar

| O que a sua agência precisa | O exemplo na página |
|---|---|
| [Uma página de status em tempo real para um cliente](/docs/ai/connector/ai-connector-client-status-page) | O progresso de uma campanha, as entregas e o que aguarda a aprovação do cliente |
| [Um endereço para tudo o que um cliente abre](/docs/ai/connector/ai-connector-client-hub) | A página inicial de um cliente com links para a página de status e o relatório dele, com um número em tempo real ao lado de cada um |
| [Um relatório a partir dos seus dados](/docs/ai/connector/ai-connector-reports) | As entregas de uma campanha por etapa e previstas por semana, a partir da consulta DE-Jobs |
| [Uma tela dentro do Skills Workflow](/docs/ai/connector/ai-connector-team-screens) | A página inicial da equipe com contadores em tempo real, que também tem uma entrada no menu |

## Planejado {#planned}

Estes itens ainda não estão disponíveis e não têm data. O comportamento abaixo é o esperado e pode mudar.

| O que a sua agência precisa | Comportamento esperado |
|---|---|
| Um relatório para imprimir ou enviar | Um relatório diagramado para papel. Você o abre, imprime ou salva como PDF, e a cópia guarda os números e a data daquele momento, pronta para enviar por e-mail a alguém de fora do Skills Workflow. |
| Um formulário que cria trabalho | Um formulário que um cliente ou um colega preenche e que cria a Atividade no Skills Workflow com as respostas nos campos dela, como a pessoa que o enviou. |
| Números em uma tela no estúdio | Uma visão feita para uma TV: poucos números em letras grandes, como os prazos do dia e as Atividades que aguardam os clientes, atualizando sozinha. |

### Trabalhar no Skills Workflow a partir da sua ferramenta de IA

Hoje o conector cria e publica. Está planejado um segundo conector para trabalhar nos seus dados diretamente a partir da sua ferramenta de IA: encontrar documentos, mover uma Atividade para a próxima etapa, atualizar registros. Ele ainda não está disponível e não tem data.

## Regras e comportamento

- Tudo o que a sua ferramenta de IA publica fica armazenado no file system do seu tenant e é servido a partir do endereço do próprio tenant.
- Ninguém abre o que a sua ferramenta de IA publica sem fazer login no Skills Workflow. Clientes que vão abrir uma página precisam de um usuário do Skills Workflow.
- O que a sua ferramenta de IA publica lê os dados com as permissões da pessoa que o está vendo, e nunca mostra a alguém dados que essa pessoa não poderia ver no Skills Workflow.
- As ferramentas de IA podem cometer erros. Abra o que ela publica como as pessoas que vão usá-lo antes de compartilhar o endereço. Veja [A IA Pode Cometer Erros](/docs/ai/ai-can-make-mistakes).

## Artigos relacionados

- [Conectar o Claude, o Codex ou o GitHub Copilot ao Skills Workflow](/docs/ai/connector/ai-connector-setup)
- [Portais de Clientes](/docs/ai/ai-portals)
- [Data Extraction API](/docs/build-and-extend/api/data-extraction-api)
- [A IA Pode Cometer Erros](/docs/ai/ai-can-make-mistakes)
