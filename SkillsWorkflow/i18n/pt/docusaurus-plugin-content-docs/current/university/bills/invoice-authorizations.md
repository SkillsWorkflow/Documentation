---
id:  invoice-authorizations
title: Autorizações de fatura
sidebar_label: Lição 1 - Como criar autorizações de fatura
---

## Lição 1 - Como criar autorizações de fatura

Pode criar pedidos de faturas no sistema, e desta forma informar a equipa financeira para avançar com a criação/sincronização do documento para o sistema financeiro externo, e gerar a fatura definitiva.

O que o sistema gera é um pedido de faturação, e não uma fatura definitiva, essa deverá ser sempre gerada no sistema financeiro (Primavera, Sage, NAV, SAP, etc).

Definição das condições de faturação:



### Condições gerais

Para emitir um pedido de faturação, dentro do orçamento aprovado pelo cliente, deverá navegar para a opção "condições de faturação".

Se o cliente comercial, tiver o cliente financeiro associado, o sistema automaticamente vai sugerir o cliente e condições de pagamento pre-definidos.

Poderá definir percentagem de faturação, referencia (PO cliente) e datas.

Note que se para a generalidade do orçamento tiver mais que uma condição de faturação pode adicionar quantas linhas quiser e, inclusivamente ter clientes diferentes.

Depois de estabelecer as condições de faturação que pretende aplicar, navegue para o feed, e mude o estado do workflow para faturar, gerando a(s) autorização(ões) de faturas necessárias.

<figure>

![img-box-shadow](/img/university/bills/bills-lesson1-1.png)
<figcaption></figcaption>
</figure>

### Condições ao entregável

Pode definir condições de faturação diferentes para as linhas de entregáveis ao cliente.

Assim sendo, se tiver por exemplo um orçamento anual de fee, em que mensalmente gera uma fatura, pode fazer o plano de faturação anual, caso tenha a PO do cliente.

Nas condições de faturação gerais, deverá clicar em aplicar a todas. O sistema vai aplicar as condições definidas na opção geral a todos os entregáveis ao cliente.

Pode ir a cada uma das linhas, pressionar a opção detalhes, e manipular a informação de cada uma das linhas caso seja necessário, acertando por exemplo as datas ou PO.

No exemplo mencionado acima dos planos anuais de faturação, deverá manipular datas e PO's

Pode definir condições nas linhas quer por percentagem, quer por valor.

<figure>

![img-box-shadow](/img/university/bills/bills-lesson1-2.png)
<figcaption></figcaption>
</figure>


:::important
Se as condições de facturação forem iguais para mais que uma linha aprovada, quando for ao feed e ajustar o fluxo para "faturar" o sistema gera uma factura com duas linhas.

Se as condições de faturação forem diferentes para todas as linhas o sistema vai gerar tantas faturas quantas condições definidas
:::

Ao navegar para o feed e alterar o estado do workflow para "faturar" o sistema ira emitir tantas faturas quantas estiverem definidas nas condições de faturação. Para as consultar poderá navegar para a zona de faturas.


<figure>

![img-box-shadow](/img/university/bills/bills-lesson1-3.png)
<figcaption></figcaption>
</figure>

Note que a autorização de fatura será enviada para o sistema financeiro externo emitindo os documentos finais.

Caso esteja ativada a integração com o sistema financeiro, o campo do número externo será atualizado com o número definitivo. Pode importar o PDF da fatura, para ficar com acesso rápido ao documento enviado ao cliente.
Para validar qual o documento final que a sua autorização de fatura gerou, deverá validar o estado do documento (integrado) e o campo com o número externo.

Para imprimir deverá navegar para o documento autorização fatura, clicando na linha que pretende validar.

O sistema vai mostrar o detalhe do documento, valores, serviço contratado, etc

Para imprimir basta carregar na opção pdf no canto superior direito, e será gerado um documento em PDF que poderá fazer download e enviar por email se necessário.

<figure>

![img-box-shadow](/img/university/bills/bills-lesson1-4.png)
<figcaption>Detalhe autorização fatura</figcaption>
</figure>

### Detalhe autorização fatura

Pode igualmente consultar a lista de todas as suas autorizações de fatura navegando pelos módulos no navegador à sua esquerda.

Na listagem de autorizações factura pode aplicar diversos filtros, tais como: cliente, projecto, orçamento

<figure>

![img-box-shadow](/img/university/bills/bills-lesson1-5.png)
<figcaption>Lista de autorizações fatura</figcaption>
</figure>
