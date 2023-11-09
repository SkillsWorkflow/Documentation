---
id: users
title: Usuários
sidebar_label: Usuários
sidebar_position: 6
---

import ReactPlayer from 'react-player';

Neste artigo, iremos guiá-lo através dos passos simples necessários para importar eficientemente os dados dos seus usuários, garantindo um processo de integração sem problemas.

O processo de importação de usuários irá:

- Criar um usuário
- Associar o usuário à empresa, divisão, departamento e tipologia.

<ReactPlayer controls muted url='/video/Import_Users.mov' />

:::caution
Para importar os dados com sucesso, certifique-se de que não existem entradas duplicadas no sistema.

A seguinte combinação deve ser única:

- Username | Name | IsActive | Company | Division | Department | DepartmentType| Typology
  :::

Preparando seu arquivo de dados:

- Formate corretamente seu arquivo de dados de usuários para uma importação tranquila.
- Certifique-se de que os dados estejam organizados e estruturados em um formato compatível.
- Verifique se todos os campos obrigatórios estão incluídos e preenchidos corretamente.
- Considere quaisquer diretrizes específicas de formatação de dados ou restrições mencionadas na documentação do sistema.
- Verifique cuidadosamente a existência de inconsistências ou erros nos dados para evitar problemas durante o processo de importação.

### FAQ

#### Como faço para verificar entradas duplicadas?

Para verificar usuários duplicados, siga os passos a seguir:

1. Acesse a lista de usuários.
2. Exporte todos os dados para um arquivo .xls.
3. Abra o arquivo .xls e procure por entradas duplicadas.
4. Faça uma nota das entradas duplicadas que precisam ser removidas.
5. Volte para a lista de funcionários.
6. Exclua as entradas duplicadas.
