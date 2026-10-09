---
id: finding-who-has-overdue-hours
title: Encontrar Quem Está Bloqueado por Horas em Falta
description: "Veja como um gestor de projetos pergunta ao AI Assistant quem na equipa está bloqueado por horas em falta, quem vai ficar bloqueado nos próximos dias, que jobs são afetados e onde acompanhar a situação todas as semanas."
sidebar_label: Encontrar Quem Tem Horas em Atraso
sidebar_position: 10
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

## Visão geral

Pergunte ao AI Assistant, por palavras suas, quem na sua equipa tem horas em atraso. O assistente lista as pessoas que estão bloqueadas porque as suas time sheets têm horas em falta, com as horas que cada uma ainda tem de registar. Depois pode perguntar quem vai ficar bloqueado nos próximos dias se não registar o tempo, em que jobs essas pessoas estavam planeadas e registaram menos tempo do que o planeado, e onde acompanhar a situação todas as semanas.

A agência, as pessoas e as horas neste exemplo são ilustrativas. As pessoas que vê dependem dos seus acessos e dos dados que a sua agência disponibiliza ao assistente.

<Walkthrough
  subtitle="Exemplo de conversa entre um gestor de projetos e o AI Assistant."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="Das horas em falta à ação">
        O assistente mostra quem já está bloqueado por horas em falta e quem está prestes a ficar, para que possa agir antes do fecho do mês e antes de o trabalho parar.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Pergunte quem na sua equipa está bloqueado por horas em falta.',
          'Leia as horas em falta de cada pessoa para ver o atraso de cada uma.',
          'Consulte Como interpretei a tua pergunta para ver quem foi incluído e o que foi assumido.',
          'Pergunte quem vai ficar bloqueado nos próximos dias e fale com essas pessoas.',
          'Pergunte em que jobs estavam planeadas para ver onde o tempo registado está atrasado.',
          'Use o workspace Missing Time Hours and Approvals para acompanhar todas as semanas.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'Quem na minha equipa está bloqueado por horas em falta?',
          'Quem vai ficar bloqueado nos próximos dias?',
          'Que projetos meus são afetados?',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'Uma pessoa bloqueada por horas em falta não pode trabalhar na plataforma até registar as horas em falta.',
          'Os dias até ao bloqueio são atualizados uma vez por dia. Quem foi bloqueado depois da última atualização, por exemplo logo após o utilizador ter sido ativado, aparece como bloqueado sem contagem.',
          'Depois de uma pessoa ficar bloqueada, a contagem deixa de mostrar há quanto tempo está bloqueada. Use as horas em falta para ver o atraso.',
          'As horas em falta não estão associadas a nenhum job até serem registadas. O assistente compara o tempo planeado com o registado para mostrar que jobs são provavelmente afetados.',
          'Enquanto as horas em falta não forem registadas, esses jobs mostram menos tempo do que o trabalhado e o burn do contrato fica abaixo do real.',
          'Só são incluídas as pessoas obrigadas a preencher time sheets.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Você">
    <p>Estou a fechar o mês na conta da Northwind Coffee. Quem na minha equipa está bloqueado por horas em falta?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>Três pessoas da sua equipa estão neste momento bloqueadas por horas em falta:</strong></p>
    <Walkthrough.DataTable
      columns={['Pessoa', 'Horas em falta', 'Dias até ao bloqueio']}
      rows={[
        ['Anna Smith', '24h', 'Bloqueada'],
        ['David Brown', '16h', 'Bloqueado'],
        ['Sarah Lee', '40h', 'Ainda não atualizado'],
      ]}
      note="A Sarah Lee foi bloqueada hoje, depois de o utilizador dela ter sido ativado sem horas registadas. Os dias até ao bloqueio aparecem após a próxima atualização diária."
    />
    <p><strong>Como interpretei a tua pergunta</strong></p>
    <ul>
      <li>Incluído: pessoas ativas da sua equipa, obrigadas a preencher time sheets e atualmente bloqueadas por horas em falta.</li>
      <li>Assumido: “horas em falta” são as horas ainda por registar até hoje.</li>
      <li>Não incluído: pessoas bloqueadas por outro motivo, como uma conta de utilizador expirada.</li>
    </ul>
    <Walkthrough.Source label="Horas em falta · 3 linhas" />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>E quem vai ficar bloqueado nos próximos dias se não registar o tempo?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>Duas pessoas vão ficar bloqueadas em breve se não registarem as horas em falta:</strong></p>
    <Walkthrough.DataTable
      columns={['Pessoa', 'Horas em falta', 'Dias até ao bloqueio']}
      rows={[
        ['Mark Evans', '16h', '1'],
        ['Julia Green', '8h', '2'],
      ]}
    />
    <p><strong>Como interpretei a tua pergunta</strong></p>
    <ul>
      <li>Incluído: pessoas da sua equipa que ainda não estão bloqueadas e têm uma contagem de dias até ao bloqueio.</li>
      <li>Assumido: “os próximos dias” abrange todas as pessoas com contagem, definida na atualização diária de hoje.</li>
    </ul>
    <Walkthrough.Source label="Horas em falta · 2 linhas" />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Que projetos meus são afetados?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>As três pessoas bloqueadas estavam planeadas nestes jobs este mês e registaram menos tempo do que o planeado:</strong></p>
    <Walkthrough.DataTable
      columns={['Pessoa', 'Job', 'Planeado', 'Registado']}
      rows={[
        ['Anna Smith', 'Campaign Website', '24h', '0h'],
        ['David Brown', 'Social Media Calendar', '20h', '4h'],
        ['Sarah Lee', 'Christmas Launch Event', '40h', '0h'],
      ]}
      note="Os três jobs pertencem ao projeto Northwind Christmas 2026. O burn do contrato vai ficar abaixo do real até estas horas serem registadas."
    />
    <p><strong>Como interpretei a tua pergunta</strong></p>
    <ul>
      <li>Incluído: os jobs em que as pessoas bloqueadas estavam planeadas de 1 de outubro até hoje, comparados com o tempo que registaram em cada um.</li>
      <li>Assumido: tempo planeado que não foi registado indica trabalho feito mas ainda não registado. As horas em falta não estão associadas a nenhum job até serem registadas.</li>
    </ul>
    <Walkthrough.Source label="Cargas de trabalho · 3 linhas" />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Onde posso acompanhar isto todas as semanas sem ter de perguntar?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>Use o workspace <strong>Missing Time Hours and Approvals</strong>. Abra-o a partir do menu <strong>Timesheet</strong>. Mostra os utilizadores bloqueados e as horas em falta por departamento, e uma lista dos utilizadores bloqueados com as horas em falta e os dias restantes.</p>
  </Walkthrough.Message>
</Walkthrough>

## Artigos relacionados

- [Workspace de aprovações e horas do quadro de horários ausentes](/docs/product/dashboards-and-reporting/timesheet-approvals-dashboard)
- [Preencher Time Sheets](/docs/product/time/timesheets/filling-time-sheets)
- [Consultar o Burn do Contrato](/docs/ai/use-cases/resource-management/checking-contract-burn)
- [AI Assistant](/docs/ai/ai-assistant)
