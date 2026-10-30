---
id: ai-claude
title: Skills Workflow no Claude
description: "Conecte o Claude ao Skills Workflow e crie o que a sua agência entrega a clientes e equipes: páginas de status, relatórios, telas dentro da plataforma, relatórios para imprimir, formulários e painéis de parede, todos lendo dados em tempo real."
sidebar_label: Visão geral
sidebar_position: 1
---

Conecte o Claude ao tenant do Skills Workflow e descreva o que você precisa em linguagem simples. O Claude cria, publica no seu tenant e informa o endereço. O que ele cria lê dados do Skills Workflow em tempo real, e cada pessoa que abre vê apenas o que as suas próprias permissões permitem.

A conexão é um conector que você adiciona uma única vez, com as credenciais que a equipe do Skills Workflow envia. O mesmo conector funciona no Claude Code, no Codex e no GitHub Copilot. Leia [Conectar o Claude, o Codex ou o GitHub Copilot ao Skills Workflow](/docs/ai/claude/ai-claude-connect) para configurá-lo.

## O que você pode criar

| O que a sua agência precisa | Exemplo típico | Status |
|---|---|---|
| [Uma página de status em tempo real para um cliente](/docs/ai/claude/ai-claude-client-status-page) | O andamento de uma campanha, as entregas e o que aguarda o cliente, em um único endereço | Disponível |
| [Um endereço para tudo o que um cliente abre](/docs/ai/claude/ai-claude-client-hub) | A página inicial de um cliente, com links para cada uma das páginas de status e relatórios dele | Disponível |
| [Um relatório a partir dos seus dados](/docs/ai/claude/ai-claude-reports) | Horas e burn de um retainer, faturamento por mês, Atividades por etapa | Disponível |
| [Uma tela dentro do Skills Workflow](/docs/ai/claude/ai-claude-team-screens) | Um quadro de tráfego no menu, uma aba em cada Atividade, a página inicial da equipe | Disponível |
| [Um relatório para imprimir ou enviar](/docs/ai/claude/ai-claude-printable-reports) | O relatório de status mensal como está hoje, salvo em PDF e enviado por e-mail | Preview |
| [Um formulário que cria trabalho](/docs/ai/claude/ai-claude-forms) | Um formulário de pedido que abre uma Atividade, um formulário curto de feedback depois de uma entrega | Preview |
| [Números em uma tela no estúdio](/docs/ai/claude/ai-claude-wall-displays) | Os prazos de hoje e a capacidade da semana em uma TV no estúdio | Preview |

**Disponível** significa que a plataforma oferece suporte hoje. **Preview** significa que pode ser criado com o que a plataforma oferece hoje, mas ainda não foi testado de ponta a ponta; confira o resultado antes de entregá-lo a alguém.

Outras coisas que as agências pedem, criadas da mesma forma:

- Um acompanhamento de novos negócios com os pitches em andamento e as Propostas aguardando aprovação
- Uma página de boas-vindas para um novo cliente, com a equipe, os contatos e como pedir trabalho
- O resumo de fim de campanha: o que foi entregue, as horas gastas em relação à Proposta e as aprovações registradas
- Uma página por diretor de contas, com os clientes dele, ordenados pelo que precisa de atenção

## Planejado: trabalhar no Skills Workflow a partir do Claude

Hoje o conector cria e publica. Está planejado um segundo conector para trabalhar nos seus dados diretamente a partir do Claude: encontrar documentos, mover uma Atividade para a próxima etapa, atualizar registros. Ele ainda não está disponível e não tem data.

## Regras e comportamento

- Tudo o que o Claude publica fica armazenado no file system do seu tenant e é servido a partir do endereço do próprio tenant.
- Ninguém abre o que o Claude publica sem fazer login no Skills Workflow. Clientes que vão abrir uma página precisam de um usuário do Skills Workflow.
- O que o Claude publica lê os dados com as permissões da pessoa que o está vendo, e nunca mostra a alguém dados que essa pessoa não poderia ver no Skills Workflow.
- O Claude pode cometer erros. Abra o que ele publica como as pessoas que vão usá-lo antes de compartilhar o endereço. Veja [A IA Pode Cometer Erros](/docs/ai/ai-can-make-mistakes).

## Artigos relacionados

- [Conectar o Claude, o Codex ou o GitHub Copilot ao Skills Workflow](/docs/ai/claude/ai-claude-connect)
- [Portais de Clientes](/docs/ai/ai-portals)
- [Data Extraction API](/docs/build-and-extend/api/data-extraction-api)
- [A IA Pode Cometer Erros](/docs/ai/ai-can-make-mistakes)
