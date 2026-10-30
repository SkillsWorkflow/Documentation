---
id: ai-connector
title: Skills Workflow na Sua Ferramenta de IA
description: "Ligue o Claude, o Codex ou o GitHub Copilot ao Skills Workflow e crie o que a sua agência entrega a clientes e equipas: páginas de estado, relatórios e ecrãs dentro da plataforma, todos com dados em tempo real."
sidebar_label: Visão geral
sidebar_position: 1
---

Ligue a sua ferramenta de IA ao tenant do Skills Workflow e descreva o que precisa em linguagem simples. A ferramenta constrói-o, publica-o no seu tenant e dá-lhe o endereço. O que constrói lê dados do Skills Workflow em tempo real, e cada pessoa que o abre vê apenas o que as suas próprias permissões permitem.

A ligação é um conector que adiciona uma única vez, com as credenciais que a equipa do Skills Workflow lhe envia. O mesmo conector funciona no Claude, no Claude Code, no Codex e no GitHub Copilot. Leia [Ligar o Claude, o Codex ou o GitHub Copilot ao Skills Workflow](/docs/ai/connector/ai-connector-setup) para o configurar.

## O que pode criar

| O que a sua agência precisa | O exemplo na sua página |
|---|---|
| [Uma página de estado em tempo real para um cliente](/docs/ai/connector/ai-connector-client-status-page) | O progresso de uma campanha, os seus deliverables e o que está à espera da aprovação do cliente |
| [Um endereço para tudo o que um cliente abre](/docs/ai/connector/ai-connector-client-hub) | A página inicial de um cliente com ligações para a sua página de estado e o seu relatório, com um valor em tempo real ao lado de cada uma |
| [Um relatório a partir dos seus dados](/docs/ai/connector/ai-connector-reports) | Os deliverables de uma campanha por etapa e a entregar por semana, a partir da query DE-Jobs |
| [Um ecrã dentro do Skills Workflow](/docs/ai/connector/ai-connector-team-screens) | A página inicial da equipa com contadores em tempo real, que também tem uma entrada no menu |

## Planeado {#planned}

Estes ainda não estão disponíveis e não têm data. O comportamento abaixo é o esperado, e pode mudar.

| O que a sua agência precisa | Comportamento esperado |
|---|---|
| Um relatório para imprimir ou enviar | Um relatório formatado para papel. Abre-o, imprime-o ou guarda-o em PDF, e a cópia mantém os valores e a data desse momento, pronta a enviar por email a alguém fora do Skills Workflow. |
| Um formulário que cria trabalho | Um formulário que um cliente ou um colega preenche, e que cria o job no Skills Workflow com as respostas nos seus campos, em nome de quem o enviou. |
| Números num ecrã no estúdio | Uma vista feita para uma TV: poucos valores em letra grande, como os prazos do dia e os jobs à espera dos clientes, que se atualiza sozinha. |

### Trabalhar no Skills Workflow a partir da sua ferramenta de IA

Hoje o conector cria e publica. Está planeado um segundo conector para trabalhar diretamente nos seus dados a partir da sua ferramenta de IA: encontrar documentos, mover um job para a etapa seguinte, atualizar registos. Ainda não está disponível e não tem data.

## Regras e comportamento

- Tudo o que a sua ferramenta de IA publica fica guardado no sistema de ficheiros do seu tenant e é servido a partir do endereço do próprio tenant.
- Ninguém abre o que a sua ferramenta de IA publica sem iniciar sessão no Skills Workflow. Os clientes que vão abrir uma página precisam de um utilizador do Skills Workflow.
- O que a sua ferramenta de IA publica lê os dados com as permissões de quem o está a ver, e nunca mostra a alguém dados que essa pessoa não pudesse ver no Skills Workflow.
- As ferramentas de IA podem cometer erros. Abra o que a ferramenta publica como as pessoas que o vão usar antes de partilhar o endereço. Veja [A IA Pode Cometer Erros](/docs/ai/ai-can-make-mistakes).

## Artigos relacionados

- [Ligar o Claude, o Codex ou o GitHub Copilot ao Skills Workflow](/docs/ai/connector/ai-connector-setup)
- [Portais de Cliente](/docs/ai/ai-portals)
- [Data Extraction API](/docs/build-and-extend/api/data-extraction-api)
- [A IA Pode Cometer Erros](/docs/ai/ai-can-make-mistakes)
