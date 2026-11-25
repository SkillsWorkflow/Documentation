---
id: setting-up-a-new-joiner-as-a-copy-of-a-colleague
title: Configurar uma Pessoa Nova como Cópia de um Colega
description: "Veja como um gerente de operações pede ao Assistente de IA que crie o usuário de alguém que está entrando na agência como cópia de um colega, completa o novo usuário em um cartão antes de ele ser criado e compara os perfis de acesso com os de colegas que têm a mesma tipologia."
sidebar_label: Configurar uma Pessoa Nova
sidebar_position: 1
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

## Visão geral

Diga ao Assistente de IA quem está entrando, quando a pessoa começa e com qual colega ela deve ser configurada. O assistente prepara uma cópia do usuário desse colega com o nome da pessoa nova, um nome de usuário e a data de início, e mantém a tipologia, as horas, os perfis de acesso, os clientes e o departamento do colega. Você revisa tudo em um cartão, adiciona o que é pessoal da pessoa nova, escolhe os tipos de ausência dela e cria o usuário.

Depois que o usuário existe, o assistente mostra como a pessoa foi configurada. Em seguida, você pode pedir que ele compare os perfis de acesso da pessoa com os de colegas que têm a mesma tipologia.

A agência, as pessoas, os clientes e os perfis de acesso deste exemplo são ilustrativos.

<Walkthrough
  subtitle="Exemplo de conversa entre um gerente de operações e o Assistente de IA."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="De “o Tom começa na segunda” a um usuário pronto">
        O assistente copia o que a pessoa nova tem em comum com um colega e deixa você revisar e completar tudo em um só cartão antes de qualquer coisa ser criada.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Informe o nome completo da pessoa nova, a data de início e o colega a ser copiado.',
          'Se você mencionar um cargo, diga se quer manter a tipologia do colega.',
          'Em Conta, confira o usuário e adicione o e-mail e o usuário SSO. Eles começam vazios.',
          'Em Trabalho, confira a data de início, as horas, a tipologia e os perfis de acesso copiados do colega.',
          'Em Férias, selecione os tipos de ausência que a pessoa deve ter e altere os dias deste ano.',
          'Selecione Criar usuário e leia como a pessoa foi configurada.',
          'Peça ao assistente que compare os perfis de acesso da pessoa com os de colegas que têm a mesma tipologia.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'O Tom Carter entra na segunda como Senior Designer. Configure o Tom igual à Ana Lopes.',
          'Duplique a Ana Lopes para o Tom Carter, começando em 7 de dezembro.',
          'Compare os perfis de acesso do Tom Carter com os dos outros Art Directors de Design.',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'Você precisa de permissão para criar e editar usuários.',
          'O assistente sempre pede o nome completo e a data de início da pessoa nova. As timesheets dela começam nesse dia.',
          'Não existe um campo de cargo. A tipologia vem do colega que você copia, a menos que você a altere no cartão.',
          'As horas são copiadas exatamente como estão no usuário do colega. Se aparecerem como 0, altere-as no cartão.',
          'Em Férias aparecem todos os tipos de ausência do colega, inclusive os expirados. Só os que você selecionar são dados à pessoa nova.',
          'O usuário precisa ser único. Se já estiver em uso, o assistente pede outro. Ele não avisa se já existe alguém com o mesmo nome.',
          'Nada é criado até você selecionar Criar usuário. Selecione Cancelar para parar.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Você">
    <p>O Tom Carter vai entrar na equipe de Design na segunda-feira, 7 de dezembro, como Senior Designer. Configure o Tom igual à Ana Lopes.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>A tipologia registrada da Ana é Art Director. Mantenho essa tipologia para o Tom ou uso como modelo um colega Senior Designer?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Mantenha a tipologia da Ana.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>Vou criar o Tom Carter como cópia da Ana Lopes, com timesheets a partir de 7 dez 2026. Vou manter a tipologia da Ana, como você confirmou, além dos perfis de acesso, dos clientes, do departamento e das horas registradas da Ana.</p>
    <Walkthrough.ApprovalCard
      title="Configurar Tom Carter"
      sections={[
        { title: 'Origem', rows: [
            ['Cópia de', 'Ana Lopes'],
        ] },
        { title: 'Detalhes', tabs: [
          { label: 'Conta', rows: [
              ['Nome', 'Tom Carter'],
              ['Usuário', 'tom.carter'],
              ['E-mail', '—'],
              ['Usuário SSO', '—'],
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
      actions={[{ label: 'Editar detalhes', link: true }, { label: 'Cancelar' }, { label: 'Criar usuário', primary: true }]}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Selecionei Editar detalhes, adicionei o e-mail do Tom, selecionei Vacation e Training em Férias, mudei Vacation para 2 dias este ano e selecionei Criar usuário.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>A conta do Tom Carter foi criada como <strong>tom.carter</strong>, com base na configuração da Ana Lopes.</p>
    <ul>
      <li><strong>Empresa:</strong> Brightlane Lisbon</li>
      <li><strong>Departamento / divisão:</strong> Design / Lisbon</li>
      <li><strong>Tipologia:</strong> Art Director, como você confirmou</li>
      <li><strong>Timesheets a partir de:</strong> 7 dez 2026</li>
      <li><strong>Horas mínimas:</strong> 8 por dia / 40 por semana</li>
      <li><strong>Perfis de acesso:</strong> Designer, Timesheets, Leaves</li>
      <li><strong>Acesso a clientes:</strong> <span style={{whiteSpace: 'nowrap'}}><img src="/img/ai/clients/contoso-foods.svg" alt="" width="18" height="18" style={{verticalAlign: '-3px', marginRight: '4px'}} /><span style={{borderBottom: '1px dotted currentColor'}}>Contoso Foods</span></span>, <span style={{whiteSpace: 'nowrap'}}><img src="/img/ai/clients/northwind-coffee.svg" alt="" width="18" height="18" style={{verticalAlign: '-3px', marginRight: '4px'}} /><span style={{borderBottom: '1px dotted currentColor'}}>Northwind Coffee</span></span></li>
      <li><strong>Feriados:</strong> 14 em 2026, iguais aos da Ana</li>
      <li><strong>Ausências em 2026:</strong> Vacation 2 dias, Training 3 dias</li>
      <li><strong>Responsável por:</strong> Ninguém</li>
      <li><strong>SSO:</strong> Não configurado</li>
    </ul>
    <p>A conta e as etapas de configuração foram concluídas, sem pendências.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Compare os perfis de acesso do Tom com os dos outros Art Directors de Design. Está faltando algum perfil?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>O Tom tem os mesmos perfis de acesso que os outros 4 Art Directors de Design. Não falta nenhum.</p>
  </Walkthrough.Message>
</Walkthrough>

## Artigos relacionados

- [Criar Usuário](/docs/administration/users/create-user)
- [Roles e Perfis do Sistema](/docs/administration/system-roles-profiles)
- [Criar Cargos](/docs/administration/create-typologies)
- [Criar Tipos de Ausências](/docs/administration/calendars/create-leave-type)
- [Feriados](/docs/administration/calendars/create-holidays)
- [Assistente de IA](/docs/ai/ai-assistant)
