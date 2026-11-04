---
id: finding-who-has-overdue-hours
title: Encontrar Quem Está Bloqueado por Pendência de Time Sheet
description: "Veja como um gerente de projetos pergunta ao Assistente de IA quem da equipe está bloqueado por pendência de time sheet, quem será bloqueado nos próximos dias, quais Atividades são afetadas e onde acompanhar isso toda semana."
sidebar_label: Encontrar Quem Tem Pendência de Time Sheet
sidebar_position: 10
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

## Visão geral

Pergunte ao Assistente de IA, com suas próprias palavras, quem da sua equipe tem pendência de time sheet. Ele lista as pessoas que estão bloqueadas porque faltam horas nas Time Sheets delas, com quantas horas cada uma ainda precisa registrar. Em seguida, você pode perguntar quem será bloqueado nos próximos dias se não registrar o tempo, em quais Atividades essas pessoas estavam planejadas e registraram menos tempo do que o planejado, e onde acompanhar a situação toda semana.

A agência, as pessoas e as horas deste exemplo são ilustrativas. As pessoas que você vê dependem do seu acesso e dos dados que a sua agência disponibiliza ao assistente.

<Walkthrough
  subtitle="Exemplo de conversa entre um gerente de projetos e o Assistente de IA."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="Da pendência de time sheet à ação">
        O assistente mostra quem já está bloqueado por pendência de time sheet e quem está prestes a ficar, para que você possa cobrar as pessoas antes do fechamento do mês e antes que o trabalho pare.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Pergunte quem da sua equipe está bloqueado por pendência de time sheet.',
          'Leia a pendência de time sheet de cada pessoa para ver o tamanho do atraso.',
          'Confira Como interpretei sua pergunta para ver quem foi incluído e o que foi assumido.',
          'Pergunte quem será bloqueado nos próximos dias e fale com essas pessoas.',
          'Pergunte em quais Atividades elas estavam planejadas para ver onde o tempo registrado está atrasado.',
          'Use o workspace Missing Time Hours and Approvals para acompanhar isso toda semana.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'Quem da minha equipe está bloqueado por pendência de time sheet?',
          'Quem será bloqueado nos próximos dias?',
          'Quais dos meus projetos são afetados?',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'Uma pessoa bloqueada por pendência de time sheet não pode trabalhar na plataforma até regularizá-la.',
          'Os dias até o bloqueio são atualizados uma vez por dia. Quem foi bloqueado depois da última atualização, por exemplo logo após a ativação do usuário, aparece como bloqueado sem contagem.',
          'Depois que alguém é bloqueado, a contagem deixa de mostrar há quanto tempo a pessoa está bloqueada. Use a pendência de time sheet para ver o tamanho do atraso.',
          'A pendência de time sheet não fica vinculada a nenhuma Atividade até as horas serem registradas. O assistente compara o tempo planejado com o registrado para mostrar quais Atividades provavelmente são afetadas.',
          'Até que a pendência de time sheet seja regularizada, essas Atividades mostram menos tempo do que foi trabalhado, e o burn do Contrato fica abaixo do real.',
          'Só são incluídas as pessoas obrigadas a preencher Time Sheets.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Você">
    <p>Estou fechando o mês da conta Northwind Coffee. Quem da minha equipe está bloqueado por causa de pendência de time sheet?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>Três pessoas da sua equipe estão bloqueadas no momento por pendência de time sheet:</strong></p>
    <Walkthrough.DataTable
      columns={['Pessoa', 'Pendência de Time Sheet', 'Dias até o bloqueio']}
      rows={[
        ['Anna Smith', '24h', 'Bloqueada'],
        ['David Brown', '16h', 'Bloqueado'],
        ['Sarah Lee', '40h', 'Ainda não atualizado'],
      ]}
      note="Sarah Lee foi bloqueada hoje, depois que o usuário dela foi ativado sem nenhuma hora registrada. Os dias até o bloqueio dela vão aparecer após a próxima atualização diária."
    />
    <p><strong>Como interpretei sua pergunta</strong></p>
    <ul>
      <li>Incluído: pessoas ativas da sua equipe que são obrigadas a preencher Time Sheets e que estão bloqueadas no momento por pendência de time sheet.</li>
      <li>Assumido: “pendência de time sheet” significa as horas que ainda faltam registrar até hoje.</li>
      <li>Não incluído: pessoas bloqueadas por outro motivo, como uma conta de usuário expirada.</li>
    </ul>
    <Walkthrough.Source label="Pendência de Time Sheet · 3 linhas" />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>E quem será bloqueado nos próximos dias se não registrar o tempo?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>Duas pessoas serão bloqueadas em breve se não regularizarem a pendência de time sheet:</strong></p>
    <Walkthrough.DataTable
      columns={['Pessoa', 'Pendência de Time Sheet', 'Dias até o bloqueio']}
      rows={[
        ['Mark Evans', '16h', '1'],
        ['Julia Green', '8h', '2'],
      ]}
    />
    <p><strong>Como interpretei sua pergunta</strong></p>
    <ul>
      <li>Incluído: pessoas da sua equipe que ainda não estão bloqueadas e têm uma contagem de dias até o bloqueio.</li>
      <li>Assumido: “os próximos dias” significa qualquer pessoa com contagem, que é definida pela atualização diária de hoje.</li>
    </ul>
    <Walkthrough.Source label="Pendência de Time Sheet · 2 linhas" />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Quais dos meus projetos são afetados?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>As três pessoas bloqueadas estavam planejadas nestas Atividades neste mês e registraram menos tempo do que o planejado:</strong></p>
    <Walkthrough.DataTable
      columns={['Pessoa', 'Atividade', 'Planejado', 'Registrado']}
      rows={[
        ['Anna Smith', 'Campaign Website', '24h', '0h'],
        ['David Brown', 'Social Media Calendar', '20h', '4h'],
        ['Sarah Lee', 'Christmas Launch Event', '40h', '0h'],
      ]}
      note="As três Atividades pertencem ao projeto Northwind Christmas 2026. O burn do Contrato desse projeto vai ficar abaixo do real até que essas horas sejam registradas."
    />
    <p><strong>Como interpretei sua pergunta</strong></p>
    <ul>
      <li>Incluído: as Atividades em que as pessoas bloqueadas estavam planejadas de 1º de outubro até hoje, comparadas com o tempo que registraram em cada uma.</li>
      <li>Assumido: tempo planejado que não foi registrado indica trabalho feito, mas ainda não registrado. A pendência de time sheet não fica vinculada a nenhuma Atividade até as horas serem registradas.</li>
    </ul>
    <Walkthrough.Source label="Workloads · 3 linhas" />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Onde posso acompanhar isso toda semana sem precisar perguntar?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>Use o workspace <strong>Missing Time Hours and Approvals</strong>. Abra-o pelo menu <strong>Time Sheet</strong>. Ele mostra os usuários bloqueados e a pendência de time sheet por departamento, e uma lista dos usuários bloqueados com as horas ausentes e os dias restantes.</p>
  </Walkthrough.Message>
</Walkthrough>

## Artigos relacionados

- [Workspace Missing Time Hours and Approvals](/docs/product/dashboards-and-reporting/timesheet-approvals-dashboard)
- [Preencher Time Sheets](/docs/product/time/timesheets/filling-time-sheets)
- [Verificar Horas Contratadas e Capacidade da Equipe](/docs/ai/use-cases/resource-management/comparing-contracted-and-available-hours)
- [Assistente de IA](/docs/ai/ai-assistant)
