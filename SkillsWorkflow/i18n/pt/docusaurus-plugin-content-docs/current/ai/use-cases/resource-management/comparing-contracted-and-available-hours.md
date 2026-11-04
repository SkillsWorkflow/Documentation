---
id: comparing-contracted-and-available-hours
title: Consultar Horas Contratadas e Capacidade da Equipa
description: "Veja como um gestor de projetos pergunta ao AI Assistant quantas das horas contratadas com um cliente ainda faltam neste trimestre, se a equipa tem tempo livre suficiente para as entregar, que typology groups ficam aquém e quem está livre para cobrir a diferença."
sidebar_label: Consultar Horas Contratadas e Capacidade da Equipa
sidebar_position: 1
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

## Visão geral

Pergunte ao AI Assistant como as horas contratadas com um cliente se comparam com o tempo que a sua equipa tem disponível. O assistente mostra as horas vendidas ao cliente no período, quantas já foram registadas e quantas faltam, por typology group. Depois pode perguntar se a equipa tem tempo livre suficiente para entregar o que falta, ver onde a capacidade não chega e encontrar quem está livre para cobrir a diferença.

A agência, o cliente, as pessoas e as horas neste exemplo são ilustrativos. Os estimates e as pessoas que vê dependem dos seus acessos e dos dados que a sua agência disponibiliza ao assistente.

<Walkthrough
  subtitle="Exemplo de conversa entre um gestor de projetos e o AI Assistant."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="Das horas contratadas à entrega">
        O assistente compara as horas vendidas a um cliente com as horas registadas e com o tempo livre da sua equipa, para que saiba antes da reunião com o cliente onde a entrega está em risco.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Indique o cliente e o período que quer rever.',
          'Leia as horas contratadas, registadas e em falta de cada typology group.',
          'Consulte Como interpretei a tua pergunta para ver que estimates foram incluídos.',
          'Pergunte se a equipa tem tempo livre suficiente para entregar as horas em falta.',
          'Pergunte quem no typology group em falta está livre para cobrir a diferença.',
          'Use o separador Burn and Utilization Per Role - Fee e o workspace FTE para acompanhar todos os meses.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'Quantas horas faltam nos estimates aprovados da Northwind Coffee neste trimestre?',
          'Mostra por typology group, com a percentagem usada.',
          'Temos pessoas suficientes para entregar essas horas até ao fim de outubro?',
          'Explica-me as limitações.',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'As horas contratadas vêm do staff plan dos estimates aprovados do cliente. Os estimates que não estão aprovados ficam de fora.',
          'Se perguntar a partir de um estimate, o assistente pode responder só para esse estimate. Peça todos os estimates aprovados do cliente no período para os incluir a todos.',
          'As horas registadas são contadas através dos projetos associados ao fee. Quando um estimate não está ligado a um projeto ou job, o assistente não consegue atribuir-lhe o tempo registado e indica-o.',
          'As horas ainda não registadas nas time sheets não são contadas, por isso as horas em falta podem parecer mais do que realmente são.',
          'Cada typology group é comparado de forma exata. Um typology group não é usado para cobrir outro, a menos que o peça.',
          'As ausências a aguardar aprovação não são descontadas da capacidade disponível. O assistente assinala-as à parte.',
          'Perguntar por departamento ou por typology group pode devolver pessoas diferentes.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Você">
    <p>Tenho uma reunião trimestral com a Northwind Coffee na próxima semana. Quantas das horas que contratámos com eles para este trimestre ainda faltam?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>A Northwind Coffee tem 1280 horas contratadas de outubro a dezembro de 2026.</strong> Já foram registadas 395, faltam entregar 885 horas (69%):</p>
    <Walkthrough.DataTable
      columns={['Typology group', 'Contratadas', 'Registadas', 'Em falta']}
      rows={[
        ['Creative', '480h', '150h (31%)', '330h'],
        ['Design', '360h', '70h (19%)', '290h'],
        ['Copywriting', '240h', '90h (38%)', '150h'],
        ['Accounts', '200h', '85h (43%)', '115h'],
      ]}
      note="Design é o que está mais atrasado: 19% usado, com quase dois meses e meio pela frente."
    />
    <p><strong>Como interpretei a tua pergunta</strong></p>
    <ul>
      <li>Incluído: estimates aprovados da Northwind Coffee de 1 de outubro a 31 de dezembro de 2026.</li>
      <li>Assumido: “faltam” significa as horas contratadas menos as horas registadas nas time sheets.</li>
      <li>Não incluído: estimates que não estão aprovados.</li>
    </ul>
    <Walkthrough.Source label="Estimates quotes · 16 linhas" />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Temos pessoas disponíveis suficientes para entregar essas horas até ao fim de dezembro?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>Três dos quatro typology groups conseguem cobrir o que falta. Faltam 74 horas em Design:</strong></p>
    <Walkthrough.DataTable
      columns={['Typology group', 'Por planear', 'Tempo livre', 'Diferença']}
      rows={[
        ['Creative', '130h', '210h', '—'],
        ['Design', '170h', '96h', 'Faltam 74h'],
        ['Copywriting', '50h', '60h', '—'],
        ['Accounts', '0h', '40h', '—'],
      ]}
      note="Copywriting tem apenas 10 horas de margem. Um copywriter tem 24 horas de ausência a aguardar aprovação em dezembro. Se for aprovada, também vão faltar horas em Copywriting."
    />
    <p><strong>Como interpretei a tua pergunta</strong></p>
    <ul>
      <li>Incluído: pessoas ativas e planeáveis de cada typology group, de 14 de outubro a 31 de dezembro de 2026.</li>
      <li>Assumido: “por planear” são as horas em falta que ainda não estão agendadas em trabalho da Northwind Coffee.</li>
      <li>Assumido: o tempo livre é o tempo de trabalho menos as ausências aprovadas e todo o trabalho já agendado, em qualquer cliente.</li>
      <li>Assumido: cada typology group só é coberto por pessoas desse typology group.</li>
    </ul>
    <Walkthrough.Source label="Capacidade · 412 linhas" />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Que designers têm tempo livre daqui até dezembro?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>Três pessoas do typology group Design têm tempo livre, 96 horas no total:</strong></p>
    <Walkthrough.DataTable
      columns={['Pessoa', 'Departamento', 'Tempo livre']}
      rows={[
        ['Rita Almeida', 'Digital', '48h'],
        ['Ben Carter', 'Digital', '32h'],
        ['Chloe Martin', 'Digital', '16h'],
      ]}
      note="Mesmo com as três pessoas agendadas, continuam a faltar 74 horas em Design. Pode planear as horas restantes para janeiro, combinar uma nova data com o cliente ou recorrer a um freelancer."
    />
    <Walkthrough.Source label="Capacidade · 3 linhas" />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Onde posso acompanhar isto todos os meses sem ter de perguntar?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>Abra o fee do cliente e selecione o separador <strong>Burn and Utilization Per Role - Fee</strong>. Compara as horas contratadas, planeadas e reais por typology group para os projetos associados ao fee.</p>
    <p>Para a capacidade, abra o workspace <strong>FTE</strong> a partir do menu <strong>Workspaces</strong>. A secção <strong>Hired</strong> compara as horas vendidas com a capacidade de cada equipa.</p>
  </Walkthrough.Message>
</Walkthrough>

## Artigos relacionados

- [Burn e Workspaces de Utilização](/docs/product/dashboards-and-reporting/utilization-burn-dashboard)
- [FTE](/docs/product/dashboards-and-reporting/fte-dashboard)
- [Encontrar Criativos Disponíveis e Atribuir um a um Job](/docs/ai/use-cases/resource-management/checking-resource-availability)
- [AI Assistant](/docs/ai/ai-assistant)
