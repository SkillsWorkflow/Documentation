---
title: 'Banco Central do Brasil'
description: "O Banco Central do Brasil publica as taxas de câmbio oficiais face ao real brasileiro. Esta integração atualiza a taxa de compra e a taxa de venda das moedas registadas a partir do seu boletim diário."
sidebar_label: Banco Central do Brasil
sidebar_position: 1
---

### Descrição

Este artigo descreve a integração entre o **Banco Central do Brasil (BCB)** e o `Skills Workflow`.

O BCB publica as taxas de câmbio oficiais face ao real brasileiro (BRL) em todos os dias úteis. Esta integração lê esse boletim e atualiza a taxa de compra e a taxa de venda das moedas registadas, pelo que as taxas de câmbio deixam de ser introduzidas à mão.

O BCB é a fonte de verdade destas taxas. O Skills Workflow segue-o.

---

### Tecnologia de Troca de Dados

As taxas vêm do boletim público de fecho diário do BCB. Não é necessária nenhuma conta, chave ou aplicação instalada localmente.

A atualização corre automaticamente uma vez por dia às 20:00 UTC, depois de o boletim ser publicado. Também pode ser iniciada manualmente para uma data específica.

---

### O Que É Trocado

| Recebido do BCB | Escrito na moeda |
| --- | --- |
| Taxa de compra (*taxa de compra*), em BRL por unidade da moeda | Taxa de compra |
| Taxa de venda (*taxa de venda*), em BRL por unidade da moeda | Taxa de venda |

Só a taxa de compra e a taxa de venda são alteradas. As restantes definições da moeda ficam como estão.

---

### Que Moedas São Atualizadas

Uma moeda é atualizada quando cumpre todas estas condições:

- Não é a moeda por defeito da sua empresa.
- Tem um código ISO, obtido do campo `IsoCode` ou, quando este está vazio, do campo `ExternalId`.
- Esse código consta do boletim do dia com taxa de compra e taxa de venda.

Qualquer outra moeda é ignorada sem erro. Uma moeda registada em várias empresas é atualizada em todas elas.

---

### Executar para uma Data Específica

Por defeito, a automação lê o boletim da data UTC atual. Para ler o boletim de outro dia, execute a automação manualmente com este corpo do pedido:

```json
{ "date": "20261109" }
```

A data é aceite como `yyyyMMdd` ou `yyyy-MM-dd`. Com o corpo vazio, ou com uma data inválida, é usada a data atual.

A data só escolhe o boletim que é lido. As taxas são escritas como as taxas atuais das moedas, pelo que executar uma data anterior substitui-as pelos valores desse dia.

---

### O Que a Agência Tem de Fornecer

- Moedas registadas com o seu código ISO, por exemplo `USD` ou `EUR`, no código ISO ou no id externo.
- A automação importada e ativa, com a calendarização ativada.

---

### Monitorização e Tratamento de Erros

| Situação | Resultado |
| --- | --- |
| O BCB não tem boletim para a data (fim de semana, feriado ou ainda não publicado) | A execução termina com sucesso e as taxas ficam inalteradas. |
| O BCB devolve qualquer outro erro | A execução termina com o estado 502 e nenhuma taxa é alterada. |
| Não é possível ler as moedas, ou uma atualização é rejeitada | A execução falha e o erro aparece no registo de execução da automação. |

O registo de execução de cada execução mostra que moedas foram atualizadas.

---

### Bom Saber

- O BCB só publica em dias úteis. Aos fins de semana e feriados, as moedas mantêm as taxas do último dia útil.
- Uma moeda sem código ISO em nenhum dos dois campos é ignorada sem aviso.
- As taxas são exatamente as publicadas pelo BCB, em BRL por unidade da moeda. Não é acrescentada nenhuma margem.
- Cada execução substitui a taxa de compra e a taxa de venda das moedas correspondentes. Uma alteração manual a esses dois valores dura até à execução seguinte.

---

Para os componentes, o fluxo e o formato do boletim, consulte a **[Referência Técnica](./reference)**.

### Artigos relacionados

- [Automações](/docs/build-and-extend/automations)
- [Como as automações começam](/docs/build-and-extend/automations/triggers)
