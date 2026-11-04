---
id: setting-up-a-new-joiner-as-a-copy-of-a-colleague
title: Configurar uma Pessoa Nova como Cópia de um Colega
description: "Veja como um gerente de operações pede ao Assistente de IA que crie o usuário de alguém que está entrando na agência como cópia de um colega, revisa o novo usuário antes de ele ser criado e define os clientes e perfis de acesso de que a pessoa precisa."
sidebar_label: Configurar uma Pessoa Nova
sidebar_position: 1
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

## Visão geral

Diga ao Assistente de IA quem está entrando, quando a pessoa começa e com qual colega ela deve ser configurada. O assistente duplica o usuário desse colega e conclui a configuração de uma só vez: o nome, o nome de usuário, o email e a data de início da pessoa nova, e o cargo, as horas, os perfis de acesso, os feriados e os tipos de ausência deste ano do colega. Você revisa tudo em um cartão antes de o usuário ser criado.

Depois que o usuário existe, o assistente mostra como a pessoa foi configurada e pede que você confirme os clientes e departamentos em que ela trabalha. Em seguida, compara os perfis de acesso dela com os de colegas na mesma função e sugere os que estão faltando.

A agência, as pessoas, os clientes e os perfis de acesso deste exemplo são ilustrativos.

<Walkthrough
  subtitle="Exemplo de conversa entre um gerente de operações e o Assistente de IA."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="De “o Tom começa na segunda” a um usuário pronto">
        O assistente copia o que a pessoa nova tem em comum com um colega, corrige o que é pessoal do colega e deixa você revisar tudo antes de qualquer coisa ser criada.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Informe o nome completo da pessoa nova, a data de início e o colega a ser copiado.',
          'Confira o nome de usuário, o email e o nome de usuário SSO que o assistente sugere a partir dos do colega.',
          'Confira as horas, o cargo e os perfis de acesso, e altere os que forem diferentes para essa pessoa.',
          'Altere os dias em Tipos de Ausências se a pessoa tiver menos dias este ano.',
          'Selecione Create user e depois confirme os clientes e departamentos em que a pessoa trabalha.',
          'Leia a comparação com os colegas e aprove ou negue o perfil de acesso sugerido.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'O Tom Carter entra na segunda como Senior Designer. Configure o Tom igual à Ana Lopes.',
          'Duplique a Ana Lopes para o Tom Carter, começando em 2 de novembro, em meio período.',
          'Crie um usuário para o Tom Carter igual à Ana Lopes, com o perfil Traffic e sem Account.',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'Você precisa de permissão para criar e editar usuários.',
          'O assistente sempre pede o nome completo e a data de início da pessoa nova. As time sheets dela começam nesse dia.',
          'Os tipos de ausência começam com os dias que o colega tem este ano. Altere-os no cartão antes de criar o usuário.',
          'A data de nascimento e o telefone não são copiados. O fuso horário, os valores mensais de custo e de rate e as tags também não: defina-os no cadastro do novo usuário.',
          'Se a pessoa nova entrar com senha, ela precisará alterá-la no primeiro acesso.',
          'Nada é criado até você selecionar Create user. Selecione Negar para parar e diga ao assistente o que mudar.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Você">
    <p>O Tom Carter vai entrar na equipe de Design na segunda-feira, 2 de novembro, como Senior Designer. Configure o Tom igual à Ana Lopes.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>Vou criar o Tom Carter como cópia da Ana Lopes, com início em 2 nov 2026. As time sheets do Tom começam nesse dia, com as horas, o cargo e os perfis de acesso da Ana. Revise os detalhes abaixo.</p>
    <Walkthrough.ApprovalCard
      title="Configurar Tom Carter"
      subtitle="Revise o novo usuário antes de eu criá-lo."
      rows={[
        ['Cópia de:', 'Ana Lopes'],
        ['Nome', 'Tom Carter'],
        ['Nome de Usuário', 'tom.carter'],
        ['Email', 'tom.carter@brightlane.com'],
        ['Nome de Usuário SSO', 'tom.carter@brightlane.com'],
        ['Início (time sheets a partir de)', '2 nov 2026'],
        ['Horas mínimas por dia', '8'],
        ['Horas mínimas por semana', '40'],
        ['Grupo de Cargo', 'Creative'],
        ['Cargo', 'Senior Designer'],
        ['Perfis de acesso', 'Designer, Timesheets, Leaves'],
        ['Tipos de Ausências', 'Vacation 25, Training 3'],
        ['Configurado como o colega', 'Perfis de acesso, empresa, departamento, divisão, acesso a clientes, líder, horário de trabalho e feriados'],
      ]}
      actions={[{ label: 'Editar detalhes' }, { label: 'Negar' }, { label: 'Create user', primary: true }]}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Selecionei Editar detalhes, mudei Vacation para 4 dias este ano e selecionei Create user.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>Como o Tom Carter foi configurado</strong></p>
    <Walkthrough.FieldTable
      rows={[
        ['Empresa', 'Brightlane Lisbon'],
        ['Departamento', 'Design'],
        ['Cargo', 'Senior Designer (Creative)'],
        ['Líder', 'Marta Silva'],
        ['Time sheets a partir de', '2 nov 2026'],
        ['Horas mínimas', '8 por dia, 40 por semana'],
        ['SSO', 'tom.carter@brightlane.com'],
        ['Perfis de acesso', 'Designer, Timesheets, Leaves'],
        ['Clientes', 'Contoso Foods, Northwind Coffee'],
        ['Feriados', '14 em 2026, iguais aos da Ana'],
        ['Tipos de Ausências em 2026', 'Vacation 4 dias, Training 3 dias'],
      ]}
    />
    <p>Confirme abaixo os clientes e departamentos do Tom.</p>
    <Walkthrough.ApprovalCard
      title="Acessos de Tom Carter"
      subtitle="Revise isto antes de eu continuar."
      rows={[
        ['Usuário', 'Tom Carter'],
        ['Adicionar clientes', 'Nenhum'],
        ['Remover clientes', 'Nenhum'],
        ['Adicionar departamentos', 'Nenhum'],
        ['Remover departamentos', 'Nenhum'],
      ]}
      actions={[{ label: 'Editar detalhes' }, { label: 'Negar' }, { label: 'Aprovar', primary: true }]}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>O Tom vai trabalhar na Fabrikam Retail, não na Contoso Foods. Adicionei a Fabrikam Retail, removi a Contoso Foods no cartão e selecionei Aprovar.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>O Tom agora tem acesso à Fabrikam Retail e não tem mais acesso à Contoso Foods. Todo o resto continua como foi copiado da Ana.</p>
    <p>Comparei os perfis de acesso do Tom com os dos outros Senior Designers de Design. <strong>8 de 9 têm Creative Review</strong>, e o Tom não tem. Sugiro adicioná-lo.</p>
    <Walkthrough.ApprovalCard
      title="Alterar os perfis de acesso de Tom Carter"
      subtitle="Revise a alteração de acesso antes de eu aplicá-la."
      rows={[
        ['Usuário', 'Tom Carter'],
        ['Adicionar', 'Creative Review'],
      ]}
      actions={[{ label: 'Negar' }, { label: 'Aprovar', primary: true }]}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Selecionei Aprovar.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>O Tom Carter agora tem o perfil de acesso Creative Review e está pronto para começar em 2 nov 2026.</p>
    <Walkthrough.Choices
      options={['Comparar os acessos do Tom com a equipe de Design', 'Configurar outra pessoa']}
    />
  </Walkthrough.Message>
</Walkthrough>

## Artigos relacionados

- [Criar Usuário](/docs/administration/users/create-user)
- [Roles e Perfis do Sistema](/docs/administration/system-roles-profiles)
- [Criar Cargos](/docs/administration/create-typologies)
- [Criar Tipos de Ausências](/docs/administration/calendars/create-leave-type)
- [Feriados](/docs/administration/calendars/create-holidays)
- [Assistente de IA](/docs/ai/ai-assistant)
