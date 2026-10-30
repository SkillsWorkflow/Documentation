---
id: ai-connector-team-screens
title: Acrescentar um Ecrã ao Skills Workflow
description: "Peça ao Claude Code, ao Codex ou ao GitHub Copilot um ecrã próprio dentro do Skills Workflow: no menu, como separador em cada job ou projeto, como página inicial da sua equipa ou como mosaico em Maintenance, visível apenas para os perfis que escolher."
sidebar_label: Um Ecrã Dentro do Skills Workflow
sidebar_position: 6
---

Quando uma equipa trabalha a partir de uma vista que os ecrãs standard não lhe dão, peça-a à sua ferramenta de IA: a página inicial da equipa, um separador em cada job, uma entrada no menu. A ferramenta de IA constrói o ecrã e publica-o dentro do Skills Workflow, onde a sua equipa já trabalha.

![img-box-shadow](/img/ai/connector/screen-home-page.jpg)
<figcaption>Uma página inicial publicada com o conector num tenant de demonstração. É a página inicial dos utilizadores e tem uma entrada no menu; os contadores e os departamentos são dados em tempo real.</figcaption>

## Disponibilidade

Disponível quando os ecrãs estão ativos no seu tenant; peça-o à equipa do Skills Workflow. O ecrã é construído como um pequeno projeto de código, por isso peça-o numa ferramenta que trabalhe sobre código, como o Claude Code, o Codex ou o GitHub Copilot, com o [conector do Skills Workflow](/docs/ai/connector/ai-connector-setup) adicionado.

## Onde um ecrã pode aparecer

| Local | O que o utilizador vê |
|---|---|
| Menu | Uma entrada no grupo Pages, ou no grupo de menu de um tipo de documento como Job ou Project. Abre como ecrã próprio ou num popup. |
| Documento | Um separador no detalhe e na pré-visualização de todos os documentos de um tipo. O ecrã sabe em que documento está. |
| Home | A página inicial do utilizador. Toma o lugar dos workspaces da Home; havendo vários, ganha o de ordem mais baixa. |
| Maintenance | Um mosaico em Maintenance, que abre o ecrã dentro dela. |

Diga à ferramenta de IA onde fica o ecrã, o seu título em cada língua que a sua equipa usa e que perfis o veem. Sem perfis, todos o veem. Os perfis marcados como obrigatórios são todos necessários; dos restantes, basta um.

## Regras e comportamento

- Cada publicação é uma nova versão. Uma versão publicada nunca muda, e uma correção é sempre a versão seguinte.
- Só há uma versão em produção de cada vez, e os utilizadores recebem uma nova versão em produção em cerca de um minuto. Voltar a pôr em produção uma versão anterior é a forma de voltar atrás.
- As versões publicadas não podem ser eliminadas. Para tirar um ecrã a toda a gente, peça à sua ferramenta de IA para publicar uma versão marcada como inativa.
- O ecrã lê os dados com as permissões do utilizador que o está a ver.
- Os utilizadores bloqueados por timesheets em falta não veem o ecrã, a não ser que peça para lhes ser mostrado.

## Artigos relacionados

- [Ligar o Claude, o Codex ou o GitHub Copilot ao Skills Workflow](/docs/ai/connector/ai-connector-setup)
- [Skills Workflow na Sua Ferramenta de IA](/docs/ai/connector)
- [Construir um Relatório a Partir dos Seus Dados](/docs/ai/connector/ai-connector-reports)
