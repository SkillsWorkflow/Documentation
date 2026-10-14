---
id: comparing-contracted-and-available-hours
title: Verificar Horas Contratadas e Capacidade da Equipe
description: "Veja como um gerente de projetos pergunta ao Assistente de IA quantas das horas contratadas por um cliente ainda restam neste trimestre, se a equipe tem tempo livre suficiente para entregá-las, quais grupos de cargo ficam abaixo do necessário e quem está livre para cobrir a diferença."
sidebar_label: Verificar Horas Contratadas e Capacidade da Equipe
sidebar_position: 1
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

## Visão geral

Pergunte ao Assistente de IA como as horas contratadas de um cliente se comparam com o tempo disponível da sua equipe. Ele mostra as horas vendidas ao cliente no período, quantas já foram registradas e quantas restam, por grupo de cargo. Em seguida, você pode perguntar se a equipe tem tempo livre suficiente para entregar o que falta, ver onde a capacidade não é suficiente e descobrir quem está livre para cobrir a diferença.

A agência, o cliente, as pessoas e as horas deste exemplo são ilustrativos. As Propostas e as pessoas que você vê dependem do seu acesso e dos dados que a sua agência disponibiliza ao assistente.

<Walkthrough
  subtitle="Exemplo de conversa entre um gerente de projetos e o Assistente de IA."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="Das horas contratadas à entrega">
        O assistente compara as horas vendidas a um cliente com as horas registradas e com o tempo livre da sua equipe, para que você saiba antes da reunião com o cliente onde a entrega está em risco.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Indique o cliente e o período que você quer analisar.',
          'Leia as horas contratadas, registradas e restantes de cada grupo de cargo.',
          'Confira Como interpretei sua pergunta para ver quais Propostas foram incluídas.',
          'Pergunte se a equipe tem tempo livre suficiente para entregar as horas restantes.',
          'Pergunte quem no grupo de cargo com falta de capacidade está livre para cobrir a diferença.',
          'Use a aba Burn and Utilization Per Role - Fee e o workspace FTE para acompanhar isso todo mês.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'Quantas horas restam nas nossas Propostas aprovadas da Northwind Coffee neste trimestre?',
          'Mostre por grupo de cargo, com a porcentagem utilizada.',
          'Temos pessoas suficientes para entregar essas horas até o fim de outubro?',
          'Explique as limitações para mim.',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'As horas contratadas vêm do plano de equipe das Propostas aprovadas do cliente. Propostas que não estão aprovadas ficam de fora.',
          'Se você perguntar de dentro de uma Proposta, o assistente pode responder só sobre essa Proposta. Peça todas as Propostas aprovadas do cliente no período para incluir cada uma delas.',
          'As horas registradas são contadas pelos projetos associados ao Contrato. Quando uma Proposta não está vinculada a um projeto ou a uma Atividade, o assistente não consegue atribuir tempo registrado a ela e informa isso.',
          'Horas ainda não registradas nas Time Sheets não são contadas, por isso as horas restantes podem parecer maiores do que realmente são.',
          'Cada grupo de cargo é correspondido exatamente. Um grupo de cargo não é usado para cobrir outro, a menos que você peça.',
          'Ausências aguardando aprovação não são descontadas da capacidade disponível. O assistente as sinaliza separadamente.',
          'Perguntar por departamento ou por grupo de cargo pode retornar pessoas diferentes.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Você">
    <p>Tenho uma reunião trimestral com a Northwind Coffee na semana que vem. Quantas das horas que contratamos com eles para este trimestre ainda restam?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>A Northwind Coffee tem 1.280 horas contratadas de outubro a dezembro de 2026.</strong> Até agora foram registradas 395, restando 885 horas (69%) para entregar:</p>
    <Walkthrough.DataTable
      columns={['Grupo de Cargo', 'Contratadas', 'Registradas', 'Restantes']}
      rows={[
        ['Creative', '480h', '150h (31%)', '330h'],
        ['Design', '360h', '70h (19%)', '290h'],
        ['Copywriting', '240h', '90h (38%)', '150h'],
        ['Accounts', '200h', '85h (43%)', '115h'],
      ]}
      note="Design é o mais atrasado: 19% utilizado, faltando quase dois meses e meio."
    />
    <p><strong>Como interpretei sua pergunta</strong></p>
    <ul>
      <li>Incluído: Propostas aprovadas da Northwind Coffee de 1º de outubro a 31 de dezembro de 2026.</li>
      <li>Assumido: “restam” significa as horas contratadas menos as horas registradas nas Time Sheets.</li>
      <li>Não incluído: Propostas que não estão aprovadas.</li>
    </ul>
    <Walkthrough.Source label="Estimates quotes · 16 linhas" />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Temos pessoas suficientes disponíveis para entregar essas horas até o fim de dezembro?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>Três dos quatro grupos de cargo conseguem cobrir o que falta. Design tem falta de 74 horas:</strong></p>
    <Walkthrough.DataTable
      columns={['Grupo de Cargo', 'A planejar', 'Tempo livre', 'Diferença']}
      rows={[
        ['Creative', '130h', '210h', '—'],
        ['Design', '170h', '96h', 'Faltam 74h'],
        ['Copywriting', '50h', '60h', '—'],
        ['Accounts', '0h', '40h', '—'],
      ]}
      note="Copywriting tem só 10 horas de folga. Um redator tem 24 horas de ausência aguardando aprovação em dezembro. Se ela for aprovada, Copywriting também ficará com falta de horas."
    />
    <p><strong>Como interpretei sua pergunta</strong></p>
    <ul>
      <li>Incluído: pessoas ativas e planejáveis de cada grupo de cargo, de 14 de outubro a 31 de dezembro de 2026.</li>
      <li>Assumido: “a planejar” são as horas restantes ainda não alocadas em trabalho da Northwind Coffee.</li>
      <li>Assumido: o tempo livre é o tempo de trabalho menos as ausências aprovadas e todas as alocações existentes, de qualquer cliente.</li>
      <li>Assumido: cada grupo de cargo é coberto apenas por pessoas desse grupo de cargo.</li>
    </ul>
    <Walkthrough.Source label="Capacidade · 412 linhas" />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Quais designers têm tempo livre daqui até dezembro?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>Três pessoas do grupo de cargo Design têm tempo livre, 96 horas no total:</strong></p>
    <Walkthrough.DataTable
      columns={['Pessoa', 'Departamento', 'Tempo livre']}
      rows={[
        ['Rita Almeida', 'Digital', '48h'],
        ['Ben Carter', 'Digital', '32h'],
        ['Chloe Martin', 'Digital', '16h'],
      ]}
      note="Mesmo com as três alocadas, Design ainda teria falta de 74 horas. Você pode planejar as horas restantes para janeiro, combinar uma nova data com o cliente ou contratar um freelancer."
    />
    <Walkthrough.Source label="Capacidade · 3 linhas" />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Onde posso acompanhar isso todo mês sem precisar perguntar?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>Abra o Contrato do cliente e selecione a aba <strong>Burn and Utilization Per Role - Fee</strong>. Ela compara as horas contratadas, planejadas e reais por grupo de cargo nos projetos associados ao Contrato.</p>
    <p>Para a capacidade, abra o workspace <strong>FTE</strong> no menu <strong>Workspaces</strong>. A seção <strong>Hired</strong> compara as horas vendidas com a capacidade de cada equipe.</p>
  </Walkthrough.Message>
</Walkthrough>

## Artigos relacionados

- [Workspace Burn and Utilization](/docs/product/dashboards-and-reporting/utilization-burn-dashboard)
- [Workspace FTE](/docs/product/dashboards-and-reporting/fte-dashboard)
- [Encontrar Criativos Disponíveis e Atribuir um a uma Atividade](/docs/ai/use-cases/resource-management/checking-resource-availability)
- [Assistente de IA](/docs/ai/ai-assistant)
