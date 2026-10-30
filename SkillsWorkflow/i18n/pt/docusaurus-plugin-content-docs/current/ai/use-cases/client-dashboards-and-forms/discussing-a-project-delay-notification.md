---
id: discussing-a-project-delay-notification
title: Discutir uma Notificação de Atraso de Projeto
description: "Veja como um account manager pergunta ao AI Assistant porque é que um job está atrasado, lê um resumo do Feed, dos comentários e dos ficheiros, confirma o impacto no projeto e pede à equipa no Feed que confirme uma nova data."
sidebar_label: Discutir uma Notificação de Atraso de Projeto
sidebar_position: 5
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

## Visão geral

Quando o AI Assistant lhe disser que um job está atrasado, pergunte-lhe porquê. O assistente lê o Feed do job, os comentários e as respostas, a descrição e os ficheiros anexados, e resume o que travou o trabalho. Pergunte o que mais no projeto depende dele e, depois, peça ao assistente para publicar um comentário no Feed do job para que a equipa confirme a causa e uma nova data. Revê o comentário antes de ser publicado.

:::note Preview
Este caso de uso está em preview e ainda não foi testado de ponta a ponta. A conversa mostra como se espera que o AI Assistant o trate, e o que hoje responde ou faz pode ser diferente deste exemplo.
:::

A agência, o cliente, as pessoas, os jobs, os comentários e as datas neste exemplo são ilustrativos. O assistente só lê documentos e comentários a que tem acesso.

<Walkthrough
  subtitle="Exemplo de conversa entre um account manager e o AI Assistant."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="De um job atrasado a uma nova data">
        O assistente explica o atraso a partir do que a equipa escreveu no job, mostra o que afeta no projeto e inicia a discussão no Feed do job.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Pergunte porque é que o job está atrasado.',
          'Leia o resumo e confira os comentários e os ficheiros em que se baseia.',
          'Pergunte que outros jobs do projeto dependem dele.',
          'Peça ao assistente para publicar um comentário no Feed do job e diga quem mencionar.',
          'Reveja o comentário e selecione Publicar.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'Porque é que o stand do Christmas Launch Event está atrasado?',
          'O que é que este atraso afeta no projeto?',
          'Pede ao produtor no Feed uma nova data de entrega.',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'O resumo baseia-se no que foi escrito no job. Quando ninguém registou o motivo, o assistente di-lo.',
          'O comentário é publicado no Feed do job com o seu nome, e as pessoas que mencionar são notificadas.',
          'Alterar as datas do job é um pedido à parte. O assistente pede a sua aprovação antes de as alterar.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>O Christmas Launch Event – Stand Design tem 4 dias de atraso.</strong> Tinha conclusão prevista para 26 de outubro e continua em In Progress. Pertence ao projeto Northwind Christmas 2026.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>O que aconteceu?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>O design do stand esteve à espera das novas normas de marca do cliente:</strong></p>
    <ul>
      <li>A 14 de outubro, a Sarah Lee pediu ao cliente o logótipo e a paleta de cores atualizados. A resposta no Feed diz que chegariam até 18 de outubro.</li>
      <li>As normas, <strong>Northwind_Brand_Guidelines_2027.pdf</strong>, foram anexadas a 24 de outubro, seis dias depois do prometido.</li>
      <li>A 25 de outubro, a Sarah escreveu que o stand precisa de mais três dias úteis depois da chegada das normas.</li>
    </ul>
    <p>Ninguém definiu uma nova data de conclusão no job.</p>
    <Walkthrough.Source label="Feed · 5 publicações · 1 ficheiro" />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>O que é que isto afeta no projeto?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>Dois jobs do projeto precisam do design do stand antes de poderem começar:</strong></p>
    <Walkthrough.DataTable
      columns={['Job', 'Etapa', 'Início', 'Conclusão']}
      rows={[
        ['Christmas Launch Event – Stand Production', 'New', '2 de novembro', '13 de novembro'],
        ['Christmas Launch Event – Signage', 'New', '4 de novembro', '11 de novembro'],
      ]}
      note="O evento é a 20 de novembro. Se o design for aprovado até 3 de novembro, os dois jobs ainda podem terminar antes dele."
    />
    <p><strong>Como interpretei a tua pergunta</strong></p>
    <ul>
      <li>Incluído: jobs do projeto Northwind Christmas 2026 cuja descrição ou Feed refere o design do stand.</li>
      <li>Assumido: um job que ainda não começou depende do job atrasado quando usa o resultado dele.</li>
    </ul>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Pede à Sarah no Feed que confirme quando é que o design vai estar pronto para aprovação.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.ApprovalCard
      title="Publicar um comentário"
      subtitle="Revê o comentário antes de eu o publicar."
      rows={[
        ['Job', 'Christmas Launch Event – Stand Design'],
        ['Menções', 'Sarah Lee'],
        ['Comentário', 'As normas chegaram a 24 de outubro. Podes confirmar quando é que o design do stand vai estar pronto para aprovação do cliente? A Stand Production começa a 2 de novembro e o evento é a 20 de novembro.'],
      ]}
      actions={[{ label: 'Negar' }, { label: 'Publicar', primary: true }]}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Revi o comentário e selecionei Publicar.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.StatusChip status="Publicado" label="Christmas Launch Event – Stand Design" />
    <p>O comentário está no Feed do job. A Sarah foi notificada.</p>
  </Walkthrough.Message>
</Walkthrough>

## Artigos relacionados

- [Ver os Projetos Atrasados que Precisam da Sua Atenção](/docs/ai/use-cases/projects-and-jobs/identifying-project-delays)
- [Perguntar pelo Estado de um Projeto](/docs/ai/use-cases/client-dashboards-and-forms/asking-questions-about-project-status)
- [Utilizar o Feed](/docs/product/files-and-collaboration/using-feed)
- [AI Assistant](/docs/ai/ai-assistant)
