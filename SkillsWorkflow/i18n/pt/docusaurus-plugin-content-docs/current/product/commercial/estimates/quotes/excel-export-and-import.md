---
id: excel-export-and-import
title: Exportação e importação em Excel
description: "Exportar a cotação de um orçamento para Excel, alterá-la numa folha de cálculo e importá-la de volta com uma pré-visualização do que muda."
sidebar_label: Exportação e importação em Excel
sidebar_position: 7
---

**Exportar para Excel** escreve as linhas da cotação numa folha de cálculo. **Importar do Excel** lê uma folha de cálculo com a mesma estrutura, atualiza as linhas que reconhece e adiciona as novas.

## Exportar

Clique em **Exportar para Excel**. O ficheiro recebe o número do orçamento como nome, ou o nome do orçamento quando este não tem número. Tem uma linha por cada linha da cotação, com estas colunas:

| Coluna | Contém |
|---|---|
| **Entregável** | O nome do entregável |
| **Tipo** | **Recurso**, **Serviço** ou **Despesa** |
| **Tipologia / serviço / tipo de despesa** | O grupo de tipologia, o serviço ou o tipo de despesa |
| **Departamento** | O departamento de um recurso |
| **Descrição** | A descrição da linha |
| **Fornecedor** | O fornecedor de um serviço |
| **Qtd. ou horas** | A quantidade, ou as horas de um recurso |
| **Custo unitário** | O custo unitário |
| **Venda unitária** | O preço unitário de venda |
| **ID (manter para atualizar)** | O identificador da linha |

Um entregável sem linhas fica com uma linha só com o seu nome.

## Importar

1. Clique em **Importar do Excel** e escolha o ficheiro.
2. Verifique a pré-visualização. Mostra quantas linhas vão ser atualizadas, adicionadas ou ficar sem alterações, e as linhas que vão ser ignoradas e porquê.
3. Clique em **Importar**.
4. Verifique o resultado e clique em **Gravar**.

Nada fica gravado enquanto não gravar. Os valores que a página não conseguiu fazer corresponder, como um grupo de tipologia ou um fornecedor que não conhece, são listados depois da importação e ficam como estavam.

![img-box-shadow-popup](/img/quotes/09-import.png)
<figcaption>A pré-visualização da importação antes de as alterações serem aplicadas</figcaption>

## Regras e comportamento

- Uma linha com um **ID (manter para atualizar)** atualiza essa linha da cotação. Só são escritas as células que mudaram.
- Uma linha sem ID passa a ser uma linha nova no entregável cujo nome está em **Entregável**.
- **Tipo** aceita também as palavras em inglês e em espanhol para recurso, serviço e despesa.
- As despesas não recebem a venda unitária do ficheiro. São vendidas ao custo mais a inflação do orçamento.
- Uma primeira linha com os nomes das colunas é ignorada.

## Artigos relacionados

- [Construir uma cotação](/docs/product/commercial/estimates/quotes/build-a-quote)
- [Gravação, rascunhos e versões](/docs/product/commercial/estimates/quotes/saving-drafts-and-versions)
