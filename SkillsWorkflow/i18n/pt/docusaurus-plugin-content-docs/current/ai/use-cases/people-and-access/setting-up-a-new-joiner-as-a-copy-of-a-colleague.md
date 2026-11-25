---
id: setting-up-a-new-joiner-as-a-copy-of-a-colleague
title: Configurar Uma Pessoa Nova Como Cópia de Um Colega
description: "Veja como um gestor de operações pede ao AI Assistant para criar o utilizador de alguém que entra na agência como cópia de um colega, completa o novo utilizador num cartão antes de ser criado e compara os perfis de acesso com os dos colegas com a mesma tipologia."
sidebar_label: Configurar Uma Pessoa Nova
sidebar_position: 1
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

## Visão geral

Diga ao AI Assistant quem vai entrar, em que dia começa e como que colega deve ser configurado. O assistente prepara uma cópia do utilizador desse colega com o nome da pessoa nova, um username e a data de entrada, e mantém a tipologia, as horas, os perfis de acesso, os clientes e o departamento do colega. Revê tudo num cartão, acrescenta o que é pessoal da pessoa nova, escolhe os tipos de férias dela e cria o utilizador.

Depois de o utilizador existir, o assistente mostra como a pessoa ficou configurada. A seguir pode pedir-lhe para comparar os perfis de acesso da pessoa com os dos colegas com a mesma tipologia.

A agência, as pessoas, os clientes e os perfis de acesso neste exemplo são ilustrativos.

<Walkthrough
  subtitle="Exemplo de conversa entre um gestor de operações e o AI Assistant."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="De “o Tom entra na segunda” a um utilizador pronto">
        O assistente copia o que a pessoa nova partilha com um colega e deixa-o rever e completar tudo num só cartão antes de criar o que quer que seja.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Indique o nome completo da pessoa nova, a data de entrada e o colega a copiar.',
          'Se mencionar um cargo, diga se mantém a tipologia do colega.',
          'Em Conta, confirme o username e acrescente o email e o username SSO. Começam vazios.',
          'Em Trabalho, confirme a data de entrada, as horas, a tipologia e os perfis de acesso copiados do colega.',
          'Em Férias, selecione os tipos de férias que a pessoa deve ter e altere os dias deste ano.',
          'Selecione Criar utilizador e leia como a pessoa ficou configurada.',
          'Peça ao assistente para comparar os perfis de acesso da pessoa com os dos colegas com a mesma tipologia.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'O Tom Carter entra na segunda como Senior Designer. Configura-o igual à Ana Lopes.',
          'Duplica a Ana Lopes para o Tom Carter, a começar a 7 de dezembro.',
          'Compara os perfis de acesso do Tom Carter com os dos outros Art Directors de Design.',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'Precisa de permissão para criar e editar utilizadores.',
          'O assistente pede sempre o nome completo e a data de entrada da pessoa nova. As timesheets começam nesse dia.',
          'Não existe um campo de cargo. A tipologia vem do colega que copia, a não ser que a altere no cartão.',
          'As horas são copiadas tal como estão no utilizador do colega. Se aparecerem a 0, altere-as no cartão.',
          'Em Férias aparecem todos os tipos de férias do colega, incluindo os expirados. Só os que selecionar são dados à pessoa nova.',
          'O username tem de ser único. Se já estiver em uso, o assistente pede outro. Não avisa se já existe alguém com o mesmo nome.',
          'Nada é criado até selecionar Criar utilizador. Selecione Descartar para parar.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Você">
    <p>O Tom Carter entra na equipa de Design na segunda-feira, 7 de dezembro, como Senior Designer. Configura-o igual à Ana Lopes.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>A tipologia registada da Ana é Art Director. Mantenho essa tipologia para o Tom, ou uso como modelo um colega Senior Designer?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Mantém a tipologia da Ana.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>Vou criar o Tom Carter como cópia da Ana Lopes, com timesheets a partir de 7 dez 2026. Mantenho a tipologia da Ana, como confirmou, e também os perfis de acesso, os clientes, o departamento e as horas registadas da Ana.</p>
    <Walkthrough.ApprovalCard
      title="Configurar Tom Carter"
      sections={[
        { title: 'Origem', rows: [
            ['Cópia de', 'Ana Lopes'],
        ] },
        { title: 'Detalhes', tabs: [
          { label: 'Conta', rows: [
              ['Nome', 'Tom Carter'],
              ['Username', 'tom.carter'],
              ['Email', '—'],
              ['Username SSO', '—'],
          ] },
          { label: 'Trabalho', rows: [
              ['Entra (timesheets a partir de)', '07/dez/2026'],
              ['Horas mínimas por dia', '8'],
              ['Horas mínimas por semana', '40'],
              ['Tipologia', 'Art Director'],
              ['Perfis de acesso', 'Designer, Timesheets, Leaves'],
          ] },
          { label: 'Clientes', rows: [
              ['Clientes', 'Contoso Foods, Northwind Coffee'],
          ] },
          { label: 'Departamentos', rows: [
              ['Departamentos', 'Design'],
          ] },
          { label: 'Férias', rows: [
              ['Tipos de férias', 'Vacation 25 (até 31/dez/2026), Training 3, Special day off 1 (até 01/out/2025)'],
          ] },
        ] },
        { title: 'Inclui', rows: [
            ['Configurado como o colega', 'Perfis de acesso, empresa, departamento, divisão, acesso a clientes, responsável, horário e feriados'],
        ] },
      ]}
      actions={[{ label: 'Editar detalhes', link: true }, { label: 'Descartar' }, { label: 'Criar utilizador', primary: true }]}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Selecionei Editar detalhes, acrescentei o email do Tom, selecionei Vacation e Training em Férias, mudei Vacation para 2 dias este ano e selecionei Criar utilizador.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>A conta do Tom Carter foi criada como <strong>tom.carter</strong>, com base na configuração da Ana Lopes.</p>
    <ul>
      <li><strong>Empresa:</strong> Brightlane Lisbon</li>
      <li><strong>Departamento / divisão:</strong> Design / Lisbon</li>
      <li><strong>Tipologia:</strong> Art Director, como confirmou</li>
      <li><strong>Timesheets a partir de:</strong> 7 dez 2026</li>
      <li><strong>Horas mínimas:</strong> 8 por dia / 40 por semana</li>
      <li><strong>Perfis de acesso:</strong> Designer, Timesheets, Leaves</li>
      <li><strong>Acesso a clientes:</strong> <span style={{whiteSpace: 'nowrap'}}><img src="/img/ai/clients/contoso-foods.svg" alt="" width="18" height="18" style={{verticalAlign: '-3px', marginRight: '4px'}} /><span style={{borderBottom: '1px dotted currentColor'}}>Contoso Foods</span></span>, <span style={{whiteSpace: 'nowrap'}}><img src="/img/ai/clients/northwind-coffee.svg" alt="" width="18" height="18" style={{verticalAlign: '-3px', marginRight: '4px'}} /><span style={{borderBottom: '1px dotted currentColor'}}>Northwind Coffee</span></span></li>
      <li><strong>Feriados:</strong> 14 em 2026, iguais aos da Ana</li>
      <li><strong>Férias em 2026:</strong> Vacation 2 dias, Training 3 dias</li>
      <li><strong>Responsável por:</strong> Ninguém</li>
      <li><strong>SSO:</strong> Não configurado</li>
    </ul>
    <p>A conta e os passos de configuração ficaram concluídos, sem nada pendente.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Compara os perfis de acesso do Tom com os dos outros Art Directors de Design. Falta algum perfil?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>O Tom tem os mesmos perfis de acesso que os outros 4 Art Directors de Design. Não falta nenhum.</p>
  </Walkthrough.Message>
</Walkthrough>

## Artigos relacionados

- [Criar Utilizador](/docs/administration/users/create-user)
- [System Roles and Profiles](/docs/administration/system-roles-profiles)
- [Criar Tipologias](/docs/administration/create-typologies)
- [Criar Tipos de Ausências](/docs/administration/calendars/create-leave-type)
- [Feriados](/docs/administration/calendars/create-holidays)
- [Assistente de IA](/docs/ai/ai-assistant)
