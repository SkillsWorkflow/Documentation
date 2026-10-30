---
id: ai-connector-team-screens
title: Acrescentar um Ecrã ao Skills Workflow
description: "Peça ao Claude Code, ao Codex ou ao GitHub Copilot um ecrã próprio dentro do Skills Workflow: no menu, como separador em cada job ou projeto, como página inicial da sua equipa ou como mosaico em Maintenance, visível apenas para os perfis que escolher."
sidebar_label: Um Ecrã Dentro do Skills Workflow
sidebar_position: 6
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

Quando uma equipa trabalha a partir de uma vista que os ecrãs standard não lhe dão, peça-a ao Claude. Um quadro de tráfego para o estúdio, um separador em cada job com o que o cliente aprovou, uma página inicial para os account managers com as prioridades do dia. O Claude constrói o ecrã e publica-o dentro do Skills Workflow, onde a sua equipa já trabalha.

## Disponibilidade

Disponível quando os ecrãs estão ativos no seu tenant; peça-o à equipa do Skills Workflow. O ecrã é construído como um pequeno projeto de código, por isso peça-o numa ferramenta que trabalhe sobre código, como o Claude Code, o Codex ou o GitHub Copilot, com o [conector do Skills Workflow](/docs/ai/connector/ai-connector-setup) adicionado.

## Onde um ecrã pode aparecer

| Local | O que o utilizador vê |
|---|---|
| Menu | Uma entrada no grupo Pages, ou no grupo de menu de um tipo de documento como Job ou Project. Abre como ecrã próprio ou num popup. |
| Documento | Um separador no detalhe e na pré-visualização de todos os documentos de um tipo. O ecrã sabe em que documento está. |
| Home | A página inicial do utilizador. Toma o lugar dos workspaces da Home; havendo vários, ganha o de ordem mais baixa. |
| Maintenance | Um mosaico em Maintenance, que abre o ecrã dentro dela. |

Diga ao Claude onde fica o ecrã, o seu título em cada língua que a sua equipa usa e que perfis o veem. Sem perfis, todos o veem. Os perfis marcados como obrigatórios são todos necessários; dos restantes, basta um.

A agência, os nomes e os números neste exemplo são ilustrativos.

<Walkthrough
  title="Claude"
  subtitle="Exemplo de conversa entre um gestor de estúdio e o Claude Code."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="O seu ecrã, onde a equipa já trabalha">
        O Claude constrói o ecrã, publica-o como uma nova versão e torna-a a versão que a sua equipa recebe.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Diga onde fica o ecrã e quem o vê.',
          'Dê o seu título nas línguas da sua equipa.',
          'Confira o ecrã no Skills Workflow antes de avisar a equipa.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'Acrescenta ao menu um quadro de tráfego para o perfil Studio.',
          'Põe um separador em cada job com as aprovações do cliente.',
          'Volta à versão anterior do quadro de tráfego.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Você">
    <p>Constrói um quadro de tráfego para o estúdio: os jobs com entrega esta semana, agrupados por quem está atribuído, com os atrasados primeiro. Põe-no no menu, só para o perfil Studio, com o título “Traffic board” em inglês e “Quadro de tráfego” em português.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Claude">
    <p>O quadro está construído. Publiquei-o como versão 1.0.0 e pu-lo em produção:</p>
    <Walkthrough.FieldTable
      rows={[
        ['Aparece em', 'Menu, grupo Pages'],
        ['Visto por', 'Perfil Studio'],
        ['Título', 'Traffic board · Quadro de tráfego'],
        ['Versão em produção', '1.0.0'],
      ]}
    />
    <p>Abra o Skills Workflow com um utilizador do Studio e vai encontrá-lo no menu.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Os jobs atrasados deviam estar a vermelho. Muda isso.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Claude">
    <Walkthrough.StatusChip status="Em produção" label="traffic-board 1.0.1" />
    <p>A versão 1.0.1 está em produção com os jobs atrasados a vermelho. A versão 1.0.0 continua disponível se quiser voltar atrás.</p>
  </Walkthrough.Message>
</Walkthrough>

## Regras e comportamento

- Cada publicação é uma nova versão. Uma versão publicada nunca muda, e uma correção é sempre a versão seguinte.
- Só há uma versão em produção de cada vez. Voltar a pôr em produção uma versão anterior é a forma de voltar atrás.
- As versões publicadas não podem ser eliminadas. Para tirar um ecrã a toda a gente, peça ao Claude para publicar uma versão marcada como inativa.
- O ecrã lê os dados com as permissões do utilizador que o está a ver.
- Os utilizadores bloqueados por timesheets em falta não veem o ecrã, a não ser que peça para lhes ser mostrado.

## Artigos relacionados

- [Ligar o Claude, o Codex ou o GitHub Copilot ao Skills Workflow](/docs/ai/connector/ai-connector-setup)
- [Skills Workflow no Claude](/docs/ai/connector)
- [Construir um Relatório a Partir dos Seus Dados](/docs/ai/connector/ai-connector-reports)
