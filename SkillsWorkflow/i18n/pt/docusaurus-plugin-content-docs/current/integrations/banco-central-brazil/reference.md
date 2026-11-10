---
title: "Banco Central do Brasil: Referência Técnica"
description: "Componentes, fluxo, formato do boletim e configuração da automação BancoCentralBrazil-ExchangeRates."
sidebar_label: Referência Técnica
sidebar_position: 2
---

:::info Referência técnica
Esta página é a especificação de interface da integração com o Banco Central do Brasil: componentes, fluxo, formato do boletim e configuração. Destina-se à equipa que implementa a troca de dados.

Para saber o que esta integração faz e como é configurada, consulte **[Banco Central do Brasil](./)**.
:::

### Componentes

| Nome | Tipo | Versão | Estado | Função |
| --- | --- | --- | --- | --- |
| BancoCentralBrazil-ExchangeRates | Automação | 4 | Ativa | Diariamente às 20:00 UTC: descarrega o boletim de fecho do BCB e atualiza a taxa de compra e a taxa de venda de cada moeda correspondente |

A automação tem um subfluxo, `UpdateCurrencyRateSW`, executado uma vez por cada moeda correspondente.

Origem: `BancoCentralBrazil-ExchangeRates - (Automation v4).json`.

---

### Como Funciona

1. `RateDate` lê o `date` opcional do corpo do pedido (`#HttpRequest`), remove os hífenes e usa-o quando tem 8 carateres. Caso contrário, usa a data UTC atual no formato `yyyyMMdd`.
2. `GetBcbRates` descarrega do BCB o boletim dessa data, um ficheiro CSV com o nome da data (`yyyyMMdd`). É uma chamada externa sem autenticação.
3. `BcbBulletinAvailable` ramifica pelo estado HTTP. `200` continua. `404` segue para `ExitNoBulletin`, que devolve `200` e deixa as taxas inalteradas. Qualquer outro estado segue para `ExitBcbUnavailable`, que devolve `502`.
4. `ParseBcbRates` (`CsvMap`) lê o ficheiro com `;` como delimitador e sem linha de cabeçalho.
5. `GetCurrencies` chama `GET /api/v3/currencies`.
6. `BuildUpdates` (`ApplyTemplate`) percorre as moedas, ignora a moeda por defeito, obtém o código ISO de `IsoCode` ou de `ExternalId` e procura uma linha do boletim com o mesmo código. As vírgulas decimais passam a pontos. O resultado é um array JSON de `{ id, isoCode, buy, sell }`.
7. `UpdateCurrencies` percorre esse array e executa `UpdateCurrencyRateSW` para cada item. Chama `PATCH /api/v3/currencies/{id}` com `{"buy":{"value":…},"sell":{"value":…}}`.

---

### Formato do Boletim

O ficheiro CSV não tem linha de cabeçalho e usa `;` como separador de campos. A automação lê estas colunas:

| Coluna | Conteúdo | Utilizada para |
| --- | --- | --- |
| `Field4` | Símbolo da moeda (código ISO) | Correspondência com o código ISO da moeda |
| `Field5` | Taxa de compra (*taxa de compra*), em BRL | Taxa de compra da moeda |
| `Field6` | Taxa de venda (*taxa de venda*), em BRL | Taxa de venda da moeda |

As restantes colunas (data, código de moeda do BCB, tipo e as duas paridades) não são utilizadas.

---

### Pontos de Contacto com Sistemas Externos

- BCB: a descarga pública do boletim de fecho, um CSV por data. O conjunto de dados é publicado como dados abertos com o nome *Taxas de câmbio - todos os boletins diários*.
- API do Skills Workflow: `GET /api/v3/currencies` e `PATCH /api/v3/currencies/{id}`.

---

### Configuração

- Calendarização: `Daily`, a cada 1 dia, às 20:00 UTC.
- Corpo do pedido, apenas em execuções manuais: `date` opcional, como `yyyyMMdd` ou `yyyy-MM-dd`.
- Não são usadas chaves de configuração, parâmetros de sistema, queries nomeadas nem webhooks.
- Ao importar a automação para um ambiente, defina o `tenantId` da definição com o tenant desse ambiente e atribua ao agendador um `userId` válido nesse tenant.
