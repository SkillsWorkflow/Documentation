---
id: excel-export-and-import
title: Exportação e importação em Excel
description: "Exporte o orçamento de uma proposta para o Excel, altere-o em uma planilha e importe-o de volta com uma prévia do que muda."
sidebar_label: Exportação e importação em Excel
sidebar_position: 7
---

**Exportar para Excel** grava as linhas do orçamento em uma planilha. **Importar do Excel** lê uma planilha com o mesmo layout, atualiza as linhas que reconhece e adiciona as novas.

## Exportar

Clique em **Exportar para Excel**. O arquivo recebe o número da proposta como nome, ou o nome dela quando não tem número. Cada linha do orçamento ocupa uma linha da planilha, com estas colunas:

| Coluna | Contém |
|---|---|
| **Entregável** | O nome do entregável |
| **Tipo** | **Recurso**, **Serviço** ou **Despesa** |
| **Tipologia / serviço / tipo de despesa** | O grupo de cargo, o serviço ou o tipo de despesa |
| **Departamento** | O departamento de um recurso |
| **Descrição** | A descrição da linha |
| **Fornecedor** | O fornecedor de um serviço |
| **Qtd. ou horas** | A quantidade, ou as horas de um recurso |
| **Custo unitário** | O custo unitário |
| **Venda unitária** | O preço unitário de venda |
| **ID (manter para atualizar)** | O identificador da linha |

Um entregável sem linhas ocupa uma linha da planilha só com o nome dele.

## Importar

1. Clique em **Importar do Excel** e escolha o arquivo.
2. Confira a prévia. Ela mostra quantas linhas serão atualizadas, adicionadas ou mantidas sem alterações, e as linhas que serão ignoradas e por quê.
3. Clique em **Importar**.
4. Confira o resultado e clique em **Salvar**.

Nada é gravado até você salvar. Valores que a página não conseguiu associar, como um grupo de cargo ou um fornecedor que ela não conhece, são listados após a importação e ficam como estavam.

![img-box-shadow-popup](/img/quotes/09-import.png)
<figcaption>A prévia da importação antes de as alterações serem aplicadas</figcaption>

## Regras e comportamento

- Uma linha com **ID (manter para atualizar)** atualiza essa linha do orçamento. Só as células alteradas são gravadas.
- Uma linha sem ID vira uma nova linha no entregável cujo nome está em **Entregável**.
- **Tipo** também aceita as palavras em inglês e em espanhol para recurso, serviço e despesa.
- As despesas não recebem venda unitária do arquivo. Elas são vendidas pelo custo mais a inflação da proposta.
- Uma primeira linha com nomes de colunas é ignorada.

## Artigos relacionados

- [Montar um orçamento](/docs/product/commercial/estimates/quotes/build-a-quote)
- [Salvamento, rascunhos e versões](/docs/product/commercial/estimates/quotes/saving-drafts-and-versions)
