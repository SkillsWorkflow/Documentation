---
id: discussing-a-project-delay-notification
title: Discutir uma Notificação de Atraso de Projeto
description: "Veja como um gerente de contas pergunta ao Assistente de IA por que uma Atividade está atrasada, lê um resumo do Feed, dos comentários e dos arquivos, verifica o impacto no projeto e pede à equipe, no Feed, que confirme uma nova data."
sidebar_label: Discutir uma Notificação de Atraso de Projeto
sidebar_position: 5
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

:::preview
Este caso de uso está em preview, a conversa mostra como se espera que o Assistente de IA lide com ele, e o que ele responde ou faz hoje pode ser diferente deste exemplo.
:::

## Visão geral

Quando o Assistente de IA avisar que uma Atividade está atrasada, pergunte o motivo. O assistente lê o Feed da Atividade, os comentários e as respostas, a descrição e os arquivos anexados, e resume o que travou o trabalho. Pergunte o que mais no projeto depende dela e, em seguida, peça ao assistente que publique um comentário no Feed da Atividade para que a equipe confirme a causa e uma nova data. Você revisa o comentário antes de ele ser publicado.

A agência, o cliente, as pessoas, as Atividades, os comentários e as datas deste exemplo são ilustrativos. O assistente só lê documentos e comentários aos quais você tem acesso.

<Walkthrough
  subtitle="Exemplo de conversa entre um gerente de contas e o Assistente de IA."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="De uma Atividade atrasada a uma nova data">
        O assistente explica o atraso a partir do que a equipe escreveu na Atividade, mostra o que ele afeta no projeto e inicia a discussão no Feed da Atividade.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Pergunte por que a Atividade está atrasada.',
          'Leia o resumo e confira os comentários e os arquivos em que ele se baseia.',
          'Pergunte quais outras Atividades do projeto dependem dela.',
          'Peça ao assistente que publique um comentário no Feed da Atividade e diga quem mencionar.',
          'Revise o comentário e selecione Publicar.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'Por que o estande do Christmas Launch Event está atrasado?',
          'O que este atraso afeta no projeto?',
          'Peça ao produtor, no Feed, uma nova data de entrega.',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'O resumo se baseia no que foi escrito na Atividade. Quando ninguém registrou o motivo, o assistente avisa.',
          'O comentário é publicado no Feed da Atividade com o seu nome, e as pessoas mencionadas são notificadas.',
          'Alterar as datas da Atividade é um pedido à parte. O assistente pede a sua aprovação antes de alterá-las.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>A Christmas Launch Event – Stand Design está 4 dias atrasada.</strong> Ela vencia em 26 de outubro e ainda está em In Progress. Pertence ao projeto Northwind Christmas 2026.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>O que aconteceu?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>O design do estande ficou esperando as novas diretrizes de marca do cliente:</strong></p>
    <ul>
      <li>Em 14 de outubro, a Sarah Lee pediu ao cliente o logo e a paleta de cores atualizados. A resposta no Feed diz que eles chegariam até 18 de outubro.</li>
      <li>As diretrizes, <strong>Northwind_Brand_Guidelines_2027.pdf</strong>, foram anexadas em 24 de outubro, seis dias depois do prometido.</li>
      <li>Em 25 de outubro, a Sarah escreveu que o estande precisa de mais três dias úteis depois da chegada das diretrizes.</li>
    </ul>
    <p>Ninguém definiu uma nova data de entrega na Atividade.</p>
    <Walkthrough.Source label="Feed · 5 publicações · 1 arquivo" />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>O que isso afeta no projeto?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>Duas Atividades do projeto precisam do design do estande antes de começar:</strong></p>
    <Walkthrough.DataTable
      columns={['Atividade', 'Etapa', 'Início', 'Entrega']}
      rows={[
        ['Christmas Launch Event – Stand Production', 'New', '2 de novembro', '13 de novembro'],
        ['Christmas Launch Event – Signage', 'New', '4 de novembro', '11 de novembro'],
      ]}
      note="O evento é em 20 de novembro. Se o design for aprovado até 3 de novembro, as duas Atividades ainda podem terminar antes dele."
    />
    <p><strong>Como interpretei sua pergunta</strong></p>
    <ul>
      <li>Incluído: Atividades do projeto Northwind Christmas 2026 cuja descrição ou cujo Feed se refere ao design do estande.</li>
      <li>Assumido: uma Atividade que ainda não começou depende da atrasada quando usa o resultado dela.</li>
    </ul>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Peça à Sarah, no Feed, que confirme quando o design vai estar pronto para aprovação.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.ApprovalCard
      title="Publicar um comentário"
      subtitle="Revise o comentário antes de eu publicá-lo."
      rows={[
        ['Atividade', 'Christmas Launch Event – Stand Design'],
        ['Menções', 'Sarah Lee'],
        ['Comentário', 'As diretrizes chegaram em 24 de outubro. Você pode confirmar quando o design do estande vai estar pronto para a aprovação do cliente? A Stand Production começa em 2 de novembro e o evento é em 20 de novembro.'],
      ]}
      actions={[{ label: 'Negar' }, { label: 'Publicar', primary: true }]}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Revisei o comentário e selecionei Publicar.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.StatusChip status="Publicado" label="Christmas Launch Event – Stand Design" />
    <p>O comentário está no Feed da Atividade. A Sarah foi notificada.</p>
  </Walkthrough.Message>
</Walkthrough>

## Artigos relacionados

- [Verificar os Projetos Atrasados que Precisam da Sua Atenção](/docs/ai/use-cases/projects-and-jobs/identifying-project-delays)
- [Perguntar sobre o Status de um Projeto](/docs/ai/use-cases/client-dashboards-and-forms/asking-questions-about-project-status)
- [Usando o Feed](/docs/product/files-and-collaboration/using-feed)
- [Assistente de IA](/docs/ai/ai-assistant)
