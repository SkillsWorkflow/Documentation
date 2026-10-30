---
id: ai-claude
title: Skills Workflow no Claude
description: "Ligue o Claude ao Skills Workflow e crie o que a sua agência entrega a clientes e equipas: páginas de estado, relatórios, ecrãs dentro da plataforma, relatórios para imprimir, formulários e ecrãs de parede, todos com dados em tempo real."
sidebar_label: Visão geral
sidebar_position: 1
---

Ligue o Claude ao tenant do Skills Workflow e descreva o que precisa em linguagem simples. O Claude constrói-o, publica-o no seu tenant e dá-lhe o endereço. O que constrói lê dados do Skills Workflow em tempo real, e cada pessoa que o abre vê apenas o que as suas próprias permissões permitem.

A ligação é um conector que adiciona uma única vez, com as credenciais que a equipa do Skills Workflow lhe envia. O mesmo conector funciona no Claude Code, no Codex e no GitHub Copilot. Leia [Ligar o Claude, o Codex ou o GitHub Copilot ao Skills Workflow](/docs/ai/claude/ai-claude-connect) para o configurar.

## O que pode criar

| O que a sua agência precisa | Exemplo típico | Estado |
|---|---|---|
| [Uma página de estado em tempo real para um cliente](/docs/ai/claude/ai-claude-client-status-page) | O estado de uma campanha, os seus deliverables e o que está à espera do cliente, num só endereço | Disponível |
| [Um endereço para tudo o que um cliente abre](/docs/ai/claude/ai-claude-client-hub) | A página inicial de um cliente com ligações para cada uma das suas páginas de estado e relatórios | Disponível |
| [Um relatório a partir dos seus dados](/docs/ai/claude/ai-claude-reports) | Horas e burn de um retainer, faturação por mês, jobs por etapa | Disponível |
| [Um ecrã dentro do Skills Workflow](/docs/ai/claude/ai-claude-team-screens) | Um quadro de tráfego no menu, um separador em cada job, a página inicial da equipa | Disponível |
| [Um relatório para imprimir ou enviar](/docs/ai/claude/ai-claude-printable-reports) | O relatório de estado mensal tal como está hoje, guardado em PDF e enviado por email | Preview |
| [Um formulário que cria trabalho](/docs/ai/claude/ai-claude-forms) | Um formulário de pedido que abre um job, um formulário curto de feedback depois de uma entrega | Preview |
| [Números num ecrã no estúdio](/docs/ai/claude/ai-claude-wall-displays) | Os prazos do dia e a capacidade da semana numa TV no estúdio | Preview |

**Disponível** significa que a plataforma o suporta hoje. **Preview** significa que pode ser construído com o que a plataforma oferece hoje, mas ainda não foi testado de ponta a ponta; confira o resultado antes de o entregar a alguém.

Outras coisas que as agências pedem, construídas da mesma forma:

- Um tracker de new business com os pitches em curso e os estimates à espera de aprovação
- Uma página de boas-vindas para um cliente novo, com a equipa, os contactos e a forma de pedir trabalho
- O resumo de fim de campanha: o que foi entregue, as horas gastas face ao estimate e as aprovações registadas
- Uma página por account director com os seus clientes, ordenados pelo que precisa de atenção

## Planeado: trabalhar no Skills Workflow a partir do Claude

Hoje o conector cria e publica. Está planeado um segundo conector para trabalhar diretamente nos seus dados a partir do Claude: encontrar documentos, mover um job para a etapa seguinte, atualizar registos. Ainda não está disponível e não tem data.

## Regras e comportamento

- Tudo o que o Claude publica fica guardado no sistema de ficheiros do seu tenant e é servido a partir do endereço do próprio tenant.
- Ninguém abre o que o Claude publica sem iniciar sessão no Skills Workflow. Os clientes que vão abrir uma página precisam de um utilizador do Skills Workflow.
- O que o Claude publica lê os dados com as permissões de quem o está a ver, e nunca mostra a alguém dados que essa pessoa não pudesse ver no Skills Workflow.
- O Claude pode cometer erros. Abra o que publica como as pessoas que o vão usar antes de partilhar o endereço. Veja [A IA Pode Cometer Erros](/docs/ai/ai-can-make-mistakes).

## Artigos relacionados

- [Ligar o Claude, o Codex ou o GitHub Copilot ao Skills Workflow](/docs/ai/claude/ai-claude-connect)
- [Portais de Cliente](/docs/ai/ai-portals)
- [Data Extraction API](/docs/build-and-extend/api/data-extraction-api)
- [A IA Pode Cometer Erros](/docs/ai/ai-can-make-mistakes)
