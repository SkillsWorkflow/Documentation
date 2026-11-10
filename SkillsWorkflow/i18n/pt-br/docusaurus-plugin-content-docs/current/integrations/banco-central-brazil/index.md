---
title: 'Banco Central do Brasil'
description: "O Banco Central do Brasil publica as taxas de câmbio oficiais em relação ao real. Esta integração atualiza a taxa de compra e a taxa de venda das moedas cadastradas a partir do seu boletim diário."
sidebar_label: Banco Central do Brasil
sidebar_position: 1
---

### Descrição

Este artigo descreve a integração entre o **Banco Central do Brasil (BCB)** e o `Skills Workflow`.

O BCB publica as taxas de câmbio oficiais em relação ao real (BRL) todos os dias úteis. Esta integração lê esse boletim e atualiza a taxa de compra e a taxa de venda das moedas cadastradas, de modo que as taxas de câmbio não precisam mais ser digitadas manualmente.

O BCB é a fonte de verdade dessas taxas. O Skills Workflow o acompanha.

---

### Tecnologia de Troca de Dados

As taxas vêm do boletim público de fechamento diário do BCB. Não é necessária nenhuma conta, chave ou aplicativo instalado localmente.

A atualização roda automaticamente uma vez por dia às 20:00 UTC, depois que o boletim é publicado. Ela também pode ser iniciada manualmente para uma data específica.

---

### O Que É Trocado

| Recebido do BCB | Gravado na moeda |
| --- | --- |
| Taxa de compra (*taxa de compra*), em BRL por unidade da moeda | Taxa de compra |
| Taxa de venda (*taxa de venda*), em BRL por unidade da moeda | Taxa de venda |

Somente a taxa de compra e a taxa de venda mudam. As demais configurações da moeda permanecem como estão.

---

### Quais Moedas São Atualizadas

Uma moeda é atualizada quando atende a todas estas condições:

- Não é a moeda padrão da sua empresa.
- Tem um código ISO, obtido do campo `IsoCode` ou, quando este está vazio, do campo `ExternalId`.
- Esse código consta no boletim do dia com taxa de compra e taxa de venda.

Qualquer outra moeda é ignorada sem erro. Uma moeda cadastrada em várias empresas é atualizada em todas elas.

---

### Executar para uma Data Específica

Por padrão, a automação lê o boletim da data UTC atual. Para ler o boletim de outro dia, execute a automação manualmente com este corpo de requisição:

```json
{ "date": "20261109" }
```

A data é aceita como `yyyyMMdd` ou `yyyy-MM-dd`. Com o corpo vazio, ou com uma data inválida, a data atual é usada.

A data apenas escolhe o boletim que é lido. As taxas são gravadas como as taxas atuais das moedas, portanto executar uma data anterior as substitui pelos valores daquele dia.

---

### O Que a Agência Precisa Fornecer

- Moedas cadastradas com o seu código ISO, por exemplo `USD` ou `EUR`, no código ISO ou no id externo.
- A automação importada e ativa, com o agendamento habilitado.

---

### Monitoramento e Tratamento de Erros

| Situação | Resultado |
| --- | --- |
| O BCB não tem boletim para a data (fim de semana, feriado ou ainda não publicado) | A execução termina com sucesso e as taxas permanecem inalteradas. |
| O BCB retorna qualquer outro erro | A execução termina com o status 502 e nenhuma taxa é alterada. |
| Não é possível ler as moedas, ou uma atualização é rejeitada | A execução falha e o erro aparece no log de execução da automação. |

O log de execução de cada rodada mostra quais moedas foram atualizadas.

---

### Bom Saber

- O BCB só publica em dias úteis. Em fins de semana e feriados, as moedas mantêm as taxas do último dia útil.
- Uma moeda sem código ISO em nenhum dos dois campos é ignorada sem aviso.
- As taxas são exatamente as publicadas pelo BCB, em BRL por unidade da moeda. Nenhuma margem é acrescentada.
- Cada execução sobrescreve a taxa de compra e a taxa de venda das moedas correspondentes. Uma alteração manual nesses dois valores dura até a próxima execução.

---

Para os componentes, o fluxo e o formato do boletim, consulte a **[Referência Técnica](./reference)**.

### Artigos relacionados

- [Automações](/docs/build-and-extend/automations)
- [Como as automações começam](/docs/build-and-extend/automations/triggers)
