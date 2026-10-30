---
id: ai-connector-team-screens
title: Adicionar uma Tela ao Skills Workflow
description: "Peça ao Claude Code, ao Codex ou ao GitHub Copilot uma tela própria dentro do Skills Workflow: no menu, como uma aba em cada Atividade ou projeto, como a página inicial da sua equipe ou como um bloco em Maintenance, mostrada apenas aos perfis que você escolher."
sidebar_label: Uma Tela Dentro do Skills Workflow
sidebar_position: 6
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

Quando uma equipe trabalha com uma visão que as telas padrão não oferecem, peça-a ao Claude. Um quadro de tráfego para o estúdio, uma aba em cada Atividade com o que o cliente aprovou, uma página inicial para os gerentes de contas com as prioridades do dia. O Claude cria a tela e a publica dentro do Skills Workflow, onde a sua equipe já trabalha.

## Disponibilidade

Disponível quando as telas estão ativadas para o seu tenant; fale com a equipe do Skills Workflow. A tela é criada como um pequeno projeto de código, então peça-a em uma ferramenta que trabalhe com código, como o Claude Code, o Codex ou o GitHub Copilot, com o [conector do Skills Workflow](/docs/ai/connector/ai-connector-setup) adicionado.

## Onde uma tela pode aparecer

| Lugar | O que o usuário vê |
|---|---|
| Menu | Uma entrada no grupo Pages, ou no grupo de menu de um tipo de documento, como Atividade ou Projeto. Abre como uma tela própria ou em um popup. |
| Documento | Uma aba no detalhe e na preview de todos os documentos de um tipo. A tela sabe em qual documento está. |
| Home | A página inicial do usuário. Ela substitui os workspaces de Home; com várias, vence a de menor ordem. |
| Maintenance | Um bloco em Maintenance, que abre a tela dentro dele. |

Diga ao Claude onde a tela fica, o título dela em cada idioma que a sua equipe usa e quais perfis a veem. Sem perfis, todos a veem. Os perfis marcados como obrigatórios são todos exigidos; dos outros, basta um.

A agência, os nomes e os números deste exemplo são ilustrativos.

<Walkthrough
  title="Claude"
  subtitle="Exemplo de conversa entre um gerente de estúdio e o Claude Code."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="A sua tela, onde a equipe já trabalha">
        O Claude cria a tela, publica-a como uma nova versão e a torna a versão que a sua equipe recebe.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Diga onde a tela fica e quem a vê.',
          'Informe o título dela nos idiomas da sua equipe.',
          'Confira a tela no Skills Workflow antes de avisar a equipe.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'Adicione um quadro de tráfego ao menu para o perfil Studio.',
          'Coloque uma aba em cada Atividade com as aprovações do cliente.',
          'Volte para a versão anterior do quadro de tráfego.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Você">
    <p>Crie um quadro de tráfego para o estúdio: as Atividades com entrega nesta semana, agrupadas por quem está atribuído, com as atrasadas primeiro. Coloque-o no menu, só para o perfil Studio, com o título “Traffic board” em inglês e “Quadro de tráfego” em português.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Claude">
    <p>O quadro está pronto. Publiquei-o como versão 1.0.0 e o tornei a versão ativa:</p>
    <Walkthrough.FieldTable
      rows={[
        ['Aparece em', 'Menu, grupo Pages'],
        ['Visto por', 'Perfil Studio'],
        ['Título', 'Traffic board · Quadro de tráfego'],
        ['Versão ativa', '1.0.0'],
      ]}
    />
    <p>Abra o Skills Workflow com um usuário do perfil Studio e você o encontrará no menu.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>As Atividades atrasadas deveriam ficar em vermelho. Altere isso.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Claude">
    <Walkthrough.StatusChip status="Ativa" label="traffic-board 1.0.1" />
    <p>A versão 1.0.1 está ativa, com as Atividades atrasadas em vermelho. A versão 1.0.0 continua disponível se você quiser voltar.</p>
  </Walkthrough.Message>
</Walkthrough>

## Regras e comportamento

- Cada publicação é uma nova versão. Uma versão publicada nunca muda, e uma correção é sempre a versão seguinte.
- Só uma versão fica ativa de cada vez. Tornar ativa de novo uma versão anterior é a forma de voltar atrás.
- As versões publicadas não podem ser excluídas. Para tirar uma tela de todos, peça ao Claude para publicar uma versão marcada como inativa.
- A tela lê os dados com as permissões do usuário que a está vendo.
- Os usuários bloqueados por falta de timesheets não veem a tela, a menos que você peça para ela aparecer para eles.

## Artigos relacionados

- [Conectar o Claude, o Codex ou o GitHub Copilot ao Skills Workflow](/docs/ai/connector/ai-connector-setup)
- [Skills Workflow no Claude](/docs/ai/connector)
- [Criar um Relatório a Partir dos Seus Dados](/docs/ai/connector/ai-connector-reports)
