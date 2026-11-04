---
id: setting-up-a-new-joiner-as-a-copy-of-a-colleague
title: Configurar Uma Pessoa Nova Como Cópia de Um Colega
description: "Veja como um gestor de operações pede ao AI Assistant para criar o utilizador de alguém que entra na agência como cópia de um colega, revê o novo utilizador antes de ser criado e define os clientes e perfis de acesso de que a pessoa precisa."
sidebar_label: Configurar Uma Pessoa Nova
sidebar_position: 1
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

## Visão geral

Diga ao AI Assistant quem vai entrar, em que dia começa e como que colega deve ser configurado. O assistente duplica o utilizador desse colega e termina a configuração no mesmo passo: o nome, o username, o email e a data de entrada da pessoa nova, e a tipologia, as horas, os perfis de acesso, os feriados e os tipos de férias deste ano do colega. Revê tudo num cartão antes de o utilizador ser criado.

Depois de o utilizador existir, o assistente mostra como a pessoa ficou configurada e pede-lhe para confirmar os clientes e departamentos em que vai trabalhar. A seguir compara os perfis de acesso com os dos colegas na mesma função e sugere os que faltam.

A agência, as pessoas, os clientes e os perfis de acesso neste exemplo são ilustrativos.

<Walkthrough
  subtitle="Exemplo de conversa entre um gestor de operações e o AI Assistant."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="De “o Tom entra na segunda” a um utilizador pronto">
        O assistente copia o que a pessoa nova partilha com um colega, corrige o que é pessoal do colega e deixa-o rever tudo antes de criar o que quer que seja.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Indique o nome completo da pessoa nova, a data de entrada e o colega a copiar.',
          'Confirme o username, o email e o username SSO que o assistente sugere a partir dos do colega.',
          'Confirme as horas, a tipologia e os perfis de acesso, e altere os que forem diferentes para esta pessoa.',
          'Altere os dias em Tipos de férias se a pessoa tiver menos dias este ano.',
          'Selecione Criar utilizador e depois confirme os clientes e departamentos em que a pessoa trabalha.',
          'Leia a comparação com os colegas e aprove ou negue o perfil de acesso sugerido.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'O Tom Carter entra na segunda como Senior Designer. Configura-o igual à Ana Lopes.',
          'Duplica a Ana Lopes para o Tom Carter, a começar a 2 de novembro, em part-time.',
          'Cria um utilizador para o Tom Carter como a Ana Lopes, com o perfil Tráfego e sem Account.',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'Precisa de permissão para criar e editar utilizadores.',
          'O assistente pede sempre o nome completo e a data de entrada da pessoa nova. As timesheets começam nesse dia.',
          'Os tipos de férias começam com os dias que o colega tem este ano. Altere-os no cartão antes de criar o utilizador.',
          'A data de nascimento e o telefone não são copiados. O fuso horário, os valores mensais de custo e rate e as tags também não: defina-os na ficha do novo utilizador.',
          'Se a pessoa nova entrar com password, é-lhe pedido que a altere no primeiro acesso.',
          'Nada é criado até selecionar Criar utilizador. Selecione Negar para parar e diga ao assistente o que mudar.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Você">
    <p>O Tom Carter entra na equipa de Design na segunda-feira, 2 de novembro, como Senior Designer. Configura-o igual à Ana Lopes.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>Vou criar o Tom Carter como cópia da Ana Lopes, com entrada a 2 nov 2026. As timesheets do Tom começam nesse dia, com as horas, a tipologia e os perfis de acesso da Ana. Confirma os detalhes abaixo.</p>
    <Walkthrough.ApprovalCard
      title="Configurar Tom Carter"
      subtitle="Confirma o novo utilizador antes de eu o criar."
      rows={[
        ['Cópia de:', 'Ana Lopes'],
        ['Nome', 'Tom Carter'],
        ['Username', 'tom.carter'],
        ['Email', 'tom.carter@brightlane.com'],
        ['Username SSO', 'tom.carter@brightlane.com'],
        ['Entra (timesheets a partir de)', '2 nov 2026'],
        ['Horas mínimas por dia', '8'],
        ['Horas mínimas por semana', '40'],
        ['Grupo de tipologia', 'Creative'],
        ['Tipologia', 'Senior Designer'],
        ['Perfis de acesso', 'Designer, Timesheets, Leaves'],
        ['Tipos de férias', 'Vacation 25, Training 3'],
        ['Configurado como o colega', 'Perfis de acesso, empresa, departamento, divisão, acesso a clientes, responsável, horário e feriados'],
      ]}
      actions={[{ label: 'Editar detalhes' }, { label: 'Negar' }, { label: 'Criar utilizador', primary: true }]}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Selecionei Editar detalhes, mudei Vacation para 4 dias este ano e selecionei Criar utilizador.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>Como o Tom Carter ficou configurado</strong></p>
    <Walkthrough.FieldTable
      rows={[
        ['Empresa', 'Brightlane Lisbon'],
        ['Departamento', 'Design'],
        ['Tipologia', 'Senior Designer (Creative)'],
        ['Responsável', 'Marta Silva'],
        ['Timesheets a partir de', '2 nov 2026'],
        ['Horas mínimas', '8 por dia, 40 por semana'],
        ['SSO', 'tom.carter@brightlane.com'],
        ['Perfis de acesso', 'Designer, Timesheets, Leaves'],
        ['Clientes', 'Contoso Foods, Northwind Coffee'],
        ['Feriados', '14 em 2026, iguais aos da Ana'],
        ['Tipos de férias em 2026', 'Vacation 4 dias, Training 3 dias'],
      ]}
    />
    <p>Confirma abaixo os clientes e departamentos do Tom.</p>
    <Walkthrough.ApprovalCard
      title="Acessos de Tom Carter"
      subtitle="Revê isto antes de continuar."
      rows={[
        ['Utilizador', 'Tom Carter'],
        ['Adicionar clientes', 'Nenhum'],
        ['Remover clientes', 'Nenhum'],
        ['Adicionar departamentos', 'Nenhum'],
        ['Remover departamentos', 'Nenhum'],
      ]}
      actions={[{ label: 'Editar detalhes' }, { label: 'Negar' }, { label: 'Aprovar', primary: true }]}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>O Tom vai trabalhar na Fabrikam Retail e não na Contoso Foods. Adicionei a Fabrikam Retail, removi a Contoso Foods no cartão e selecionei Aprovar.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>O Tom tem agora acesso à Fabrikam Retail e deixou de ter acesso à Contoso Foods. O resto fica como foi copiado da Ana.</p>
    <p>Comparei os perfis de acesso do Tom com os dos outros Senior Designers de Design. <strong>8 de 9 têm Creative Review</strong> e o Tom não. Sugiro adicioná-lo.</p>
    <Walkthrough.ApprovalCard
      title="Alterar perfis de Tom Carter"
      subtitle="Confirma a alteração de acessos antes de eu a aplicar."
      rows={[
        ['Utilizador', 'Tom Carter'],
        ['Adicionar', 'Creative Review'],
      ]}
      actions={[{ label: 'Negar' }, { label: 'Aprovar', primary: true }]}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Selecionei Aprovar.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>O Tom Carter tem agora o perfil de acesso Creative Review e está pronto para começar a 2 nov 2026.</p>
    <Walkthrough.Choices
      options={['Comparar os acessos do Tom com a equipa de Design', 'Configurar outra pessoa']}
    />
  </Walkthrough.Message>
</Walkthrough>

## Artigos relacionados

- [Criar Utilizador](/docs/administration/users/create-user)
- [System Roles and Profiles](/docs/administration/system-roles-profiles)
- [Criar Tipologias](/docs/administration/create-typologies)
- [Criar Tipos de Ausências](/docs/administration/calendars/create-leave-type)
- [Feriados](/docs/administration/calendars/create-holidays)
- [Assistente de IA](/docs/ai/ai-assistant)
