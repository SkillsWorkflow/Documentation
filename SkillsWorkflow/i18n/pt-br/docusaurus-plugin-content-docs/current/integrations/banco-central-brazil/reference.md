---
title: "Banco Central do Brasil: Referência Técnica"
description: "Componentes, fluxo, formato do boletim e configuração da automação BancoCentralBrazil-ExchangeRates."
sidebar_label: Referência Técnica
sidebar_position: 2
---

:::info Referência técnica
Esta página é a especificação de interface da integração com o Banco Central do Brasil: componentes, fluxo, formato do boletim e configuração. Destina-se à equipe que implementa a troca de dados.

Para saber o que esta integração faz e como ela é configurada, consulte **[Banco Central do Brasil](./)**.
:::

### Componentes

| Nome | Tipo | Versão | Status | Função |
| --- | --- | --- | --- | --- |
| BancoCentralBrazil-ExchangeRates | Automação | 4 | Ativa | Diariamente às 20:00 UTC: baixa o boletim de fechamento do BCB e atualiza a taxa de compra e a taxa de venda de cada moeda correspondente |

A automação tem um subfluxo, `UpdateCurrencyRateSW`, executado uma vez para cada moeda correspondente.

Origem: `BancoCentralBrazil-ExchangeRates - (Automation v4).json`.

---

### Como Funciona

1. `RateDate` lê o `date` opcional do corpo da requisição (`#HttpRequest`), remove os hífens e o usa quando tem 8 caracteres. Caso contrário, usa a data UTC atual no formato `yyyyMMdd`.
2. `GetBcbRates` baixa do BCB o boletim dessa data, um arquivo CSV com o nome da data (`yyyyMMdd`). É uma chamada externa sem autenticação.
3. `BcbBulletinAvailable` ramifica pelo status HTTP. `200` continua. `404` segue para `ExitNoBulletin`, que retorna `200` e deixa as taxas inalteradas. Qualquer outro status segue para `ExitBcbUnavailable`, que retorna `502`.
4. `ParseBcbRates` (`CsvMap`) lê o arquivo com `;` como delimitador e sem linha de cabeçalho.
5. `GetCurrencies` chama `GET /api/v3/currencies`.
6. `BuildUpdates` (`ApplyTemplate`) percorre as moedas, ignora a moeda padrão, obtém o código ISO de `IsoCode` ou de `ExternalId` e procura uma linha do boletim com o mesmo código. As vírgulas decimais viram pontos. O resultado é um array JSON de `{ id, isoCode, buy, sell }`.
7. `UpdateCurrencies` percorre esse array e executa `UpdateCurrencyRateSW` para cada item. Chama `PATCH /api/v3/currencies/{id}` com `{"buy":{"value":…},"sell":{"value":…}}`.

---

### Formato do Boletim

O arquivo CSV não tem linha de cabeçalho e usa `;` como separador de campos. A automação lê estas colunas:

| Coluna | Conteúdo | Usada para |
| --- | --- | --- |
| `Field4` | Símbolo da moeda (código ISO) | Correspondência com o código ISO da moeda |
| `Field5` | Taxa de compra (*taxa de compra*), em BRL | Taxa de compra da moeda |
| `Field6` | Taxa de venda (*taxa de venda*), em BRL | Taxa de venda da moeda |

As demais colunas (data, código de moeda do BCB, tipo e as duas paridades) não são usadas.

---

### Pontos de Contato com Sistemas Externos

- BCB: o download público do boletim de fechamento, um CSV por data. O conjunto de dados é publicado como dados abertos com o nome *Taxas de câmbio - todos os boletins diários*.
- API do Skills Workflow: `GET /api/v3/currencies` e `PATCH /api/v3/currencies/{id}`.

---

### Configuração

- Agendamento: `Daily`, a cada 1 dia, às 20:00 UTC.
- Corpo da requisição, apenas em execuções manuais: `date` opcional, como `yyyyMMdd` ou `yyyy-MM-dd`.
- Não são usadas chaves de configuração, parâmetros de sistema, queries nomeadas nem webhooks.
- Ao importar a automação para um ambiente, defina o `tenantId` da definição com o tenant desse ambiente e atribua ao agendador um `userId` válido nesse tenant.
