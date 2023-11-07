---
id: employees
title: Funcionários
sidebar_label: Funcionários
sidebar_position: 2
---

import ReactPlayer from 'react-player';

Neste artigo, iremos guiá-lo através dos passos simples necessários para importar eficientemente os dados dos seus funcionários, garantindo um processo de integração sem problemas.

O processo de importação de funcionários irá:

- Criar um funcionário
- Associar o funcionário ao usuário e à empresa

<ReactPlayer controls muted url='/video/import-employee.mp4' />

:::caution
Para importar os dados com sucesso, certifique-se de que não existem entradas duplicadas no sistema.

A seguinte combinação deve ser única:

- Nome | Empresa | Usuário | ID Externo | Valor Máximo | Ativo
  :::

Preparando seu arquivo de dados:

- Formate corretamente seu arquivo de dados de funcionários para uma importação tranquila.
- Certifique-se de que os dados estejam organizados e estruturados em um formato compatível.
- Verifique se todos os campos obrigatórios estão incluídos e preenchidos corretamente.
- Considere quaisquer diretrizes específicas de formatação de dados ou restrições mencionadas na documentação do sistema.
- Verifique cuidadosamente a existência de inconsistências ou erros nos dados para evitar problemas durante o processo de importação.

:::danger IMPORTAÇÃO DE FUNCIONÁRIOS PARA USUÁRIOS EXISTENTES
Ao importar um funcionário para um usuário que já está vinculado a um recurso, uma nova entrada de funcionário será criada.

No entanto, observe o seguinte:

- A antiga ligação entre o usuário e o funcionário será removida - visível na lista de funcionários.
- O novo funcionário será vinculado ao usuário na lista de funcionários.
- O novo funcionário importado não será atualizado automaticamente no perfil do usuário - campo denominado "Recurso".
  :::

### FAQ

#### Como faço para verificar entradas duplicadas?

Para verificar funcionários duplicados, siga os passos a seguir:

1. Acesse a lista de funcionários.
2. Exporte todos os dados para um arquivo .xls.
3. Abra o arquivo .xls e procure por entradas duplicadas.
4. Faça uma nota das entradas duplicadas que precisam ser removidas.
5. Volte para a lista de funcionários.
6. Exclua as entradas duplicadas.
