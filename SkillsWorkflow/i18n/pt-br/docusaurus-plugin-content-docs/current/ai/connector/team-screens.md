---
id: ai-connector-team-screens
title: Adicionar uma Tela ao Skills Workflow
description: "Peça ao Claude Code, ao Codex ou ao GitHub Copilot uma tela própria dentro do Skills Workflow: no menu, como uma aba em cada Atividade ou projeto, como a página inicial da sua equipe ou como um bloco em Maintenance, mostrada apenas aos perfis que você escolher."
sidebar_label: Uma Tela Dentro do Skills Workflow
sidebar_position: 6
---

Quando uma equipe trabalha com uma visão que as telas padrão não oferecem, peça-a à sua ferramenta de IA: a página inicial da equipe, uma aba em cada Atividade, uma entrada no menu. A ferramenta de IA cria a tela e a publica dentro do Skills Workflow, onde a sua equipe já trabalha.

![img-box-shadow](/img/ai/connector/screen-home-page.jpg)
<figcaption>Uma página inicial publicada com o conector em um tenant de demonstração. Ela é a página inicial dos usuários e tem uma entrada no menu; os contadores e os departamentos são dados em tempo real.</figcaption>

## Disponibilidade

Disponível quando as telas estão ativadas para o seu tenant; fale com a equipe do Skills Workflow. A tela é criada como um pequeno projeto de código, então peça-a em uma ferramenta que trabalhe com código, como o Claude Code, o Codex ou o GitHub Copilot, com o [conector do Skills Workflow](/docs/ai/connector/ai-connector-setup) adicionado.

## Onde uma tela pode aparecer

| Lugar | O que o usuário vê |
|---|---|
| Menu | Uma entrada no grupo Pages, ou no grupo de menu de um tipo de documento, como Atividade ou Projeto. Abre como uma tela própria ou em um popup. |
| Documento | Uma aba no detalhe e na preview de todos os documentos de um tipo. A tela sabe em qual documento está. |
| Home | A página inicial do usuário. Ela substitui os workspaces de Home; com várias, vence a de menor ordem. |
| Maintenance | Um bloco em Maintenance, que abre a tela dentro dele. |

Diga à ferramenta de IA onde a tela fica, o título dela em cada idioma que a sua equipe usa e quais perfis a veem. Sem perfis, todos a veem. Os perfis marcados como obrigatórios são todos exigidos; dos outros, basta um.

## Regras e comportamento

- Cada publicação é uma nova versão. Uma versão publicada nunca muda, e uma correção é sempre a versão seguinte.
- Só uma versão fica ativa de cada vez, e os usuários recebem uma versão que acabou de ficar ativa em cerca de um minuto. Tornar ativa de novo uma versão anterior é a forma de voltar atrás.
- As versões publicadas não podem ser excluídas. Para tirar uma tela de todos, peça à sua ferramenta de IA para publicar uma versão marcada como inativa.
- A tela lê os dados com as permissões do usuário que a está vendo.
- Os usuários bloqueados por falta de timesheets não veem a tela, a menos que você peça para ela aparecer para eles.

## Artigos relacionados

- [Conectar o Claude, o Codex ou o GitHub Copilot ao Skills Workflow](/docs/ai/connector/ai-connector-setup)
- [Skills Workflow na Sua Ferramenta de IA](/docs/ai/connector)
- [Criar um Relatório a Partir dos Seus Dados](/docs/ai/connector/ai-connector-reports)
