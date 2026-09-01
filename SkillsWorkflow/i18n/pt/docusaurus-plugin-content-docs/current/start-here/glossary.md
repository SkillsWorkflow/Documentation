---
id: glossary
title: 'Glossário'
description: "O que cada termo no Skills Workflow significa, como os conceitos se relacionam, e que palavras a interface e a API usam para a mesma coisa."
sidebar_label: Glossário
---

As palavras abaixo são usadas em toda esta documentação, na interface e na API. Algumas têm
mais do que um significado dependendo de onde as encontra, e algumas coisas têm um nome na
interface e outro na API. Ambos os casos são assinalados explicitamente.

:::note A ler isto a par com a API
Onde a interface e a API discordam num nome, a entrada diz isso mesmo em **Na API**. O nome
da interface é o usado no resto desta documentação.
:::

---

## A forma do trabalho

Estes são os registos sobre os quais a plataforma é construída, de fora para dentro.

### Cliente

A organização para quem o trabalho é feito. Um cliente pode existir sob duas formas,
relacionadas mas não intercambiáveis:

- **Cliente Comercial** — o cliente tal como as equipas comerciais lidam com ele: a marca ou
  organização para quem o trabalho é entregue.
- **Cliente de Faturação** — a entidade legal que é efetivamente faturada. Um cliente
  comercial pode faturar através de entidades diferentes em empresas diferentes.

Os dois estão ligados por empresa, por isso a mesma marca pode ser detida comercialmente num
sítio e faturada a partir de outro.

:::caution Cliente vs Customer
Nestes documentos, **Cliente** significa o cliente da agência. **Customer** significa uma
agência que usa o Skills Workflow — vê-lo-á na secção [Confiança](../trust/), escrita para
elas. Se está a ler um guia de como fazer, a palavra que quer é Cliente.
:::

### Contrato

Um acordo com um cliente sob o qual o trabalho é entregue. Um contrato pode ter **Fees** —
montantes recorrentes ou acordados, como uma mensalidade fixa — e projetos podem estar
associados a um contrato para que as horas entregues sejam descontadas dele.

### Projeto

Um corpo de trabalho para um cliente. Um projeto agrupa as entregas que o realizam, tem a sua
própria etapa, dono e datas, e pode estar associado a um contrato.

### Entrega

A unidade de trabalho a que as pessoas são efetivamente atribuídas e sobre a qual registam
tempo. As entregas ficam dentro de um projeto.

**Na API:** uma Entrega é a entidade `Deliverable` — vê-lo-á como
`Skill.Module.BusinessObjects.Deliverable` em payloads de webhook e configuração de
integração. Os endpoints REST, no entanto, são `/api/jobs`. O mesmo registo, dois nomes,
dependendo da camada que está a ver.

:::caution "Deliverable" significa duas coisas diferentes
Tenha cuidado com esta palavra — é o termo com mais probabilidade de o enviar para a página
errada.

1. **Num Orçamento**, um *Deliverable* é um item de linha — um serviço a ser vendido ao
   cliente. Ver [Item de Orçamento](#item-de-orcamento) abaixo.
2. **Na API e na documentação de integrações**, `Deliverable` é o nome de entidade para uma
   **Entrega**.

Não estão relacionados. Se está a orçamentar algo, quer o sentido 1. Se está a ler sobre
webhooks, mudanças de etapa ou integrações, quer o sentido 2 — e o resto desta documentação
chama a isso uma Entrega.
:::

### Brief

Um pedido de trabalho, tipicamente levantado por um cliente. Os briefs têm os seus próprios
itens e podem tornar-se entregas.

**Na API:** a entidade `Request`. "Brief" é o nome que a interface usa para este registo.

### Brief (descrição)

A descrição escrita anexada a um documento, explicando o que é pretendido. Um brief está
anexado *a* um registo (uma entrega, um projeto, um pedido) em vez de ser um registo por
direito próprio.

**Na API:** a entidade `DocumentBrief`.

:::caution "Brief" também significa duas coisas diferentes
Em português, as duas entradas acima colidem no mesmo nome — em inglês são palavras
diferentes, **Request** e **Brief**.

1. **O pedido de trabalho em si** (o registo que um cliente levanta e que pode tornar-se uma
   entrega) — em inglês, *Request*.
2. **O campo de descrição escrita anexado a qualquer documento** (`DocumentBrief` na API) —
   em inglês, *Brief*.

Se está a ler sobre a chegada de trabalho de um cliente, quer o sentido 1. Se está a ler
sobre preencher ou reescrever a descrição de uma entrega, projeto ou orçamento, quer o
sentido 2.
:::

---

## Dinheiro

### Orçamento

Uma repartição de preços do trabalho, apresentada ao cliente. Um orçamento pode ser criado
diretamente sob um projeto ou entrega, ou associado a um **Contrato**.

Um orçamento é construído no seu separador **Cotações**, que tem quatro secções:

| Secção | O que contém |
| --- | --- |
| **Deliverables** | Os serviços a serem vendidos — cada linha é um deliverable (ver abaixo) |
| **Custos de Terceiros** | Custos de fornecedores externos |
| **Despesas** | Transporte, refeições, hotéis e semelhantes |
| **Recursos** | Pessoas internas e as horas a serem orçamentadas |

### Item de Orçamento {#item-de-orcamento}

Uma única linha num orçamento que representa algo vendido ao cliente. Um item de orçamento
pode ser um trabalho concreto, um mês de uma mensalidade fixa, um serviço, ou qualquer outra
forma que a agência queira usar para repartir o orçamento. Custos de terceiros, despesas e
recursos são cada um orçamentados *contra* um item de orçamento.

Isto **não** é o mesmo que uma Entrega — ver o aviso em [Entrega](#entrega).

### Cotação

O separador num Orçamento onde o seu detalhe é construído, e por extensão o ato de
apreçar uma linha ("orçamentar este item"). Uma cotação é parte de um orçamento, não um
documento separado.

### Rate Card

Os preços e custos usados ao orçamentar recursos, definidos por grupo de tipologia e/ou por
utilizador. Uma rate card tem colunas, por isso o mesmo cartão pode ter taxas diferentes para
situações diferentes. Um cliente pode ter uma rate card por defeito, que um orçamento herda.

**Na interface:** o campo num Orçamento que seleciona a taxa chama-se **Tabela**. Refere-se à
taxa retirada da Rate Card escolhida.

### Fatura

O documento levantado no Skills Workflow para cobrar a um cliente. Uma fatura é o que a
agência aprova internamente.

### Invoice

O documento que o sistema financeiro ou de contabilidade emite a partir de uma fatura
aprovada. A maioria das [integrações](/docs/integrations) funciona enviando uma **Fatura**
aprovada para fora e escrevendo de volta nela a referência do **Invoice** resultante — por
isso uma fatura no Skills Workflow tem o número do invoice que produziu.

### Nota de Crédito

Um documento que reduz um montante já faturado, emitido quando o valor de um orçamento
faturado desce.

### Nota de Encomenda / Fatura de Fornecedor

**Nota de Encomenda** — o que a agência encomenda a um fornecedor. **Fatura de Fornecedor** —
o que o fornecedor fatura à agência. Ambas seguem para o sistema financeiro da mesma forma
que as faturas.

### Despesa

Um custo incorrido por uma pessoa e reclamado — viagens, refeições e semelhantes. As despesas
são agrupadas numa **Folha de Despesas** para aprovação.

---

## Pessoas e estrutura

### Utilizador

Alguém que pode iniciar sessão e usar o Skills Workflow.

### Empregado

O registo de emprego por trás de uma pessoa. Mantido separadamente da conta de utilizador,
para que os dados de RH possam ser mantidos independentemente do acesso à plataforma.

**Na API:** `/api/users` e `/api/employees` são endpoints separados, e um utilizador pode
estar associado a um registo de empregado.

### Tipologia

A posição de uma pessoa — o que faz, e portanto quanto custa e para que pode ser orçamentada.
As tipologias são aquilo contra o qual os recursos são orçamentados e planeados.

### Grupo de Tipologia

Um agrupamento de tipologias, usado para rate cards, planeamento e relatórios. As rate cards
são normalmente definidas por grupo de tipologia em vez de por tipologia individual.

:::note Tipologia não é Role
**Tipologia** é o que alguém faz, para custeio e planeamento. **Role** é o que alguém tem
permissão para ver e fazer na plataforma. Alterar uma tipologia afeta taxas e alocação de
recursos; alterar uma role afeta permissões.
:::

### Role

Um perfil de acesso que controla o que um utilizador pode ver e fazer. As roles governam
permissões — incluindo, em alguns sítios, quais colunas individuais de um documento são
visíveis.

### Empresa, Divisão, Departamento

A hierarquia organizacional, da maior para a menor. Uma **Empresa** é uma entidade legal com
as suas próprias definições, moeda e ligação financeira. Uma **Divisão** agrupa departamentos
dentro dela. Um **Departamento** é onde as pessoas se situam, e é usado para planeamento e
workflow.

Um único tenant do Skills Workflow pode conter várias empresas, cada uma com a sua própria
configuração e as suas próprias credenciais de integração.

---

## Workflow

### Etapa

Onde um documento se encontra atualmente no seu processo — por exemplo uma fatura que está
Em Aprovação, ou uma entrega que está Em Progresso. Cada tipo de documento tem o seu próprio
conjunto de etapas.

**Na API:** uma etapa é um `workflowState` — vê-lo-á como `workflowState` em payloads e
`/api/jobs/{id}/workflowstate` como endpoint. "Etapa" e "workflow state" são a mesma coisa.

:::note Etapa vs Estado
Esta documentação usa **Etapa** para onde um documento está no seu workflow. Onde vir
**estado**, normalmente significa outra coisa — por exemplo se uma execução de integração
teve sucesso. Se uma página usar "estado" para significar a etapa do workflow, leia-o como
Etapa.
:::

### Transição

A passagem de uma etapa para a seguinte, e a permissão para a fazer. Tem de existir uma
transição entre duas etapas para um documento poder passar entre elas — o que explica por
que uma [integração](/docs/integrations) pode reportar que não conseguiu aplicar uma mudança
de etapa mesmo quando a etapa de destino existe.

### Workflow

O conjunto completo de etapas e transições para um tipo de documento, incluindo quem pode
fazer cada passagem e o que acontece quando o faz.

### Ação de Workflow

Algo que a plataforma executa automaticamente como parte de uma transição — criar uma versão,
atribuir alguém, pedir confirmação, enviar um e-mail, gerar um orçamento, e assim por diante.

---

## Automatização e integração

### Automatização

Uma sequência configurada de passos que a plataforma executa por si própria — chamar um
sistema externo, correr uma query, criar ou atualizar registos. A maioria das
[integrações](/docs/integrations) é construída a partir de automatizações.

### Webhook

Um gatilho que dispara quando algo acontece a um documento — criado, atualizado, etapa
alterada, eliminado — e inicia uma automatização. Os webhooks podem ser filtrados, por isso
só disparam para etapas ou tipos de documento específicos.

### Named Query

Uma query guardada, usada por automatizações e workspaces para procurar ou compor dados.

### Workspace

Um ecrã configurável — um dashboard ou um painel num registo — construído a partir de
componentes e fontes de dados. Algumas integrações incluem workspaces que incorporam
diretamente um sistema externo num registo.

### Parâmetro de Sistema / Chave de Configuração

Onde as definições de ligação e credenciais de uma integração são guardadas, mantidas fora da
própria automatização para que possam diferir por ambiente.

### Campo Personalizado

Um campo adicional acrescentado a um tipo de documento além dos campos padrão. As integrações
usam normalmente um campo personalizado para guardar o identificador do registo
correspondente no sistema externo.

### Tabela Personalizada

Uma tabela de dados guardada no Skills Workflow fora do modelo padrão — usada para dados de
referência, e por algumas integrações para a sua própria contabilidade interna.

---

## Tempo

### Time Sheet

Um registo do tempo trabalhado, introduzido contra uma entrega por um utilizador, e aprovado.

### Ausência

Tempo fora — férias, doença e semelhantes. A ausência é o que torna alguém indisponível no
planeamento e alocação de recursos, e é por isso que existem
[integrações de RH](/docs/integrations) para a manter atualizada.

### Planeamento por tipologia

Orçamentar trabalho por **tipologia** em vez de por pessoa nomeada, para que um plano possa
ser construído antes de se saber quem o vai fazer.

### FTE

Full-Time Equivalent — uma unidade que expressa a carga de trabalho como uma proporção de uma
pessoa a tempo inteiro.

### Utilização

Quanto do tempo disponível de alguém é gasto em trabalho faturável.

### Burn

Quanto de um montante orçamentado ou contratado foi consumido por horas reais.
