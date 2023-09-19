---
id:  create-estimate
title: Criar um orçamento 
sidebar_label: 6. Criar um orçamento 
sidebar_position: 6
---

Orçamentos podem estar vinculadas a Taxas ou criadas diretamente em um Fee, Projetos ou Atividades.

Se você desejar criar um orçamento associado a uma Taxa específica, consulte nossa lição 3 na seção de contratos.

Para gerar uma orçamento em uma Empresa ou Atividade, você deve navegar até o documento no qual deseja criar a estimativa, clicar na opção + e escolher "orçamento".

<figure>

![img-box-shadow](/img/university/estimates/estimates-lesson1-1.png)
<figcaption></figcaption>
</figure>

Preencha os seguintes campos:

- **Departamento** - TO sistema sugerirá o departamento do usuário por padrão, mas você pode selecionar outros departamentos planejáveis e configurar fluxos de trabalho diferentes, se necessário.
- **Tipo de Orçamento** - Você pode ter vários tipos de Orçamentos que permitirão diferentes configurações, como fluxos de trabalho, relatórios, etc.
- Clique na marca de seleção para enviar o post. O sistema mostrará uma mensagem pop-up confirmando que o orçamento foi criado com sucesso.


<figure>

![img-box-shadow](/img/university/estimates/estimates-lesson1-2.png)
<figcaption></figcaption>
</figure>

Na guia "Informações", você pode preencher os seguintes campos:

- **Condição de Pagamento** - Pode ser herdada do Cliente ou escolhida manualmente.
- **Moeda** - Pode ser herdada da moeda padrão definida na Empresa ou escolhida manualmente.
- **Tabela de Taxas** e **Coluna da Tabela de Taxas** - Pode ser herdada do Cliente ou escolhida manualmente.
- **Despesas Gerais** e **Margens** - Definidas manualmente para cado orçamento (opcional).

## Criar Cotações

Para começar a criar os detalhes da suo orçamento, navegue até a guia "Cotações", onde você encontrará 4 seções diferentes:

- **Entregáveis** - São os serviços vendidos ao cliente (cada linha pode representar entregáveis reais, ou seja, projetos/trabalhos; uma taxa mensal ou qualquer outra estrutura que você queira usar para detalhar suo orçamento).
- **Custos de Terceiros** - Este é o primeiro componente do orçamento. Isso se refere a fornecedores externos.
- **Despesas** - Este é o segundo componente do orçamento. Transporte, refeições, hotel, são apenas alguns exemplos de despesas que podem ser estimadas aqui.
- **Recursos** - Este é o componente final do orçamento. Representa recursos internos/horas de trabalho sendo planejados.

<figure>

![img-box-shadow](/img/university/estimates/estimates-lesson1-3.png)
<figcaption></figcaption>
</figure>

Para criar novas Cotações, siga estas etapas:

1. Clique em "+" para criar um entregável para estimar.
2. Cada entregável pode representar um mês na taxa de retenção; um serviço, etc.

<figure>

![img-box-shadow](/img/university/estimates/estimates-lesson1-4.png)
<figcaption></figcaption>
</figure>

3. Para cada Entregável, você deve incluir:

- **Descrição** - Preencha um nome que descreva o que você está vendendo ao Cliente.
- **Serviço** - Escolha o tipo de serviço que você está cotando.
- **Imposto**- Pode vir diretamente do Cliente ou ser inserido manualmente.

### Cotação de Terceiros

Para começar a cotar Terceiros, clique na palavra "Terceiros" e a seção se abrirá.

1. Selecione o entregável que deseja cotar no menu suspenso.
2. Clique em "+" para adicionar detalhes do orçamento.
3. A descrição e o serviço serão herdados da linha do entregável.
4. Selecione o fornecedor (custos externos), condições de pagamento do fornecedor.
5. Custo unitário e custo de quantidade (#).
6. Preencha a taxa % ou o valor para obter o valor de venda.
7. Clique no ícone Salvar.
8. Repita o processo se precisar adicionar vários custos externos.
   
:::note
Observe que você pode ter vários custos externos sob uma única linha de cliente. Isso dependerá de como você deseja mostrar os detalhes do orçamento aos clientes.
:::

<figure>

![img-box-shadow](/img/university/estimates/estimates-lesson1-5.png)
<figcaption></figcaption>
</figure>

### Cotação de Despesas

Para começar a cotar despesas, clique na palavra "Despesas" e a seção se abrirá.

1. Selecione o entregável que deseja cotar no menu suspenso.
2. Clique em "+" para adicionar Detalhes do orçamento.
3. Selecione o tipo de despesa que você precisa cotar (por exemplo, Refeições, Hotel).
4. Preencha o custo unitário e a quantidade #.
5. Clique no ícone Salvar
6. Repita o processo se precisar adicionar vários custos externos.

<figure>

![img-box-shadow](/img/university/estimates/estimates-lesson1-6.png)
<figcaption></figcaption>
</figure>

### Cotação de Recursos

Para começar a cotar recursos, clique na palavra "Recursos" e a seção se abrirá.

1. Selecione o entregável que deseja cotar no menu suspenso.
2. Clique em "+" para adicionar Detalhes do orçamento ou adicione várias Tipologias de uma vez clicando no ícone de Tipologias.
3. Você pode definir com base em tipologias (ou seja, cargos) e/ou Usuários específicos.


<figure>

![img-box-shadow](/img/university/estimates/estimates-lesson1-7.png)
<figcaption></figcaption>
</figure>

Para cada Tipologia, você terá que preencher os seguintes campos obrigatórios:

- **Tabela de Taxas** - Herdada automaticamente da Tabela de Taxas escolhida anteriormente na guia de Informações.
- **Custo Unitário** - Automaticamente o mesmo que a taxa da tabela, mas pode ser alterado manualmente. Usado apenas se você deseja usar uma taxa diferente da escolhida na Tabela de Taxas (taxa da tabela).
- **Horas** - Número de horas vendidas ao Cliente.
- **Custo Total** - Horas x Custo Unitário.
- **Receita Unitária** - Custo Unitário + Margem*.
- **Venda Total** - Custo Total + Margem* ou Receita Unitária x Horas.
  
* A Margem sugerida é a definida na guia de Informações do orçamento.

<figure>

![img-box-shadow](/img/university/estimates/estimates-lesson1-8.png)
<figcaption></figcaption>
</figure>

À medida que você preenche os valores, o total por Entrega na seção de Entregas no topo será atualizado automaticamente.

Lembre-se de que cada coluna individual na estimativa é controlada por funções de acesso.

Por favor, note que você pode ter vários custos externos, despesas e recursos sob uma linha de cliente. Isso dependerá de como você deseja apresentar os detalhes da estimativa aos clientes.
