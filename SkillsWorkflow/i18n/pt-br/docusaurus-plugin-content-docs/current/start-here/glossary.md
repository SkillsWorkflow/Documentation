---
id: glossary
title: 'Glossário'
description: "O que cada termo no Skills Workflow significa, como os conceitos se relacionam, e quais palavras a interface e a API usam para a mesma coisa."
sidebar_label: Glossário
---

As palavras abaixo são usadas em toda esta documentação, na interface e na API. Algumas têm
mais de um significado dependendo de onde você as encontra, e algumas coisas têm um nome na
interface e outro na API. Ambos os casos são sinalizados explicitamente.

:::note Lendo isso junto com a API
Onde a interface e a API discordam num nome, a entrada diz isso em **Na API**. O nome da
interface é o usado no resto desta documentação.
:::

---

## A forma do trabalho

Estes são os registros sobre os quais a plataforma é construída, de fora para dentro.

### Cliente

A organização para quem o trabalho é feito. Um cliente pode existir sob duas formas,
relacionadas mas não intercambiáveis:

- **Cliente Comercial** — o cliente tal como as equipes comerciais lidam com ele: a marca ou
  organização para quem o trabalho é entregue.
- **Cliente de Faturamento** — a entidade legal que é efetivamente faturada. Um cliente
  comercial pode faturar através de entidades diferentes em empresas diferentes.

Os dois estão ligados por empresa, por isso a mesma marca pode ser detida comercialmente em
um lugar e faturada a partir de outro.

:::caution Cliente vs Customer
Nestes documentos, **Cliente** significa o cliente da agência. **Customer** significa uma
agência que usa o Skills Workflow — você verá isso na seção [Confiança](../trust/), escrita
para elas. Se você está lendo um guia de como fazer, a palavra que você quer é Cliente.
:::

### Contrato

Um acordo com um cliente sob o qual o trabalho é entregue. Um contrato pode ter **Fees** —
valores recorrentes ou acordados, como uma mensalidade fixa — e projetos podem estar
associados a um contrato para que as horas entregues sejam descontadas dele.

### Projeto

Um corpo de trabalho para um cliente. Um projeto agrupa as atividades que o realizam, tem sua
própria etapa, dono e datas, e pode estar associado a um contrato.

### Atividade

A unidade de trabalho à qual as pessoas são efetivamente atribuídas e sobre a qual registram
tempo. As atividades ficam dentro de um projeto.

**Na API:** uma Atividade é a entidade `Deliverable` — você a verá como
`Skill.Module.BusinessObjects.Deliverable` em payloads de webhook e configuração de
integração. Os endpoints REST, no entanto, são `/api/jobs`. O mesmo registro, dois nomes,
dependendo da camada que você está vendo.

:::caution "Deliverable" significa duas coisas diferentes
Tenha cuidado com esta palavra — é o termo com mais chance de te enviar para a página errada.

1. **Em uma Proposta**, um *Deliverable* é um item de linha — um serviço a ser vendido ao
   cliente. Ver [Item de Proposta](#item-de-proposta) abaixo.
2. **Na API e na documentação de integrações**, `Deliverable` é o nome de entidade para uma
   **Atividade**.

Eles não estão relacionados. Se você está precificando algo, quer o sentido 1. Se está lendo
sobre webhooks, mudanças de etapa ou integrações, quer o sentido 2 — e o resto desta
documentação chama isso de Atividade.
:::

### Brief

Um trabalho solicitado, tipicamente levantado por um cliente. Os briefs têm seus próprios
itens e podem se tornar atividades.

**Na API:** a entidade `Request`. "Brief" é o nome que a interface usa para este registro.

### Brief (descrição)

A descrição escrita anexada a um documento, explicando o que é pretendido. Um brief está
anexado *a* um registro (uma atividade, um projeto, uma solicitação) em vez de ser um
registro por direito próprio.

**Na API:** a entidade `DocumentBrief`.

:::caution "Brief" também significa duas coisas diferentes
Em português, as duas entradas acima colidem no mesmo nome — em inglês são palavras
diferentes, **Request** e **Brief**.

1. **A solicitação de trabalho em si** (o registro que um cliente levanta e que pode se
   tornar uma atividade) — em inglês, *Request*.
2. **O campo de descrição escrita anexado a qualquer documento** (`DocumentBrief` na API) —
   em inglês, *Brief*.

Se você está lendo sobre a chegada de trabalho de um cliente, quer o sentido 1. Se está
lendo sobre preencher ou reescrever a descrição de uma atividade, projeto ou proposta, quer o
sentido 2.
:::

---

## Dinheiro

### Proposta

Uma repartição de preços do trabalho, apresentada ao cliente. Uma proposta pode ser criada
diretamente sob um projeto ou atividade, ou vinculada a um **Contrato**.

Uma proposta é construída na sua aba **Cotações**, que tem quatro seções:

| Seção | O que contém |
| --- | --- |
| **Deliverables** | Os serviços a serem vendidos — cada linha é um deliverable (ver abaixo) |
| **Custos de Terceiros** | Custos de fornecedores externos |
| **Despesas** | Transporte, refeições, hotéis e semelhantes |
| **Recursos** | Pessoas internas e as horas sendo orçadas |

### Item de Proposta {#item-de-proposta}

Uma única linha em uma proposta que representa algo vendido ao cliente. Um item de proposta
pode ser um trabalho concreto, um mês de uma mensalidade fixa, um serviço, ou qualquer outra
forma que a agência queira usar para repartir a proposta. Custos de terceiros, despesas e
recursos são cada um orçados *contra* um item de proposta.

Isso **não** é o mesmo que uma Atividade — ver o aviso em [Atividade](#atividade).

### Cotação

A aba em uma Proposta onde seu detalhe é construído, e por extensão o ato de precificar uma
linha ("cotar este item"). Uma cotação é parte de uma proposta, não um documento separado.

### Rate Card

Os preços e custos usados ao orçar recursos, definidos por grupo de tipologia e/ou por
usuário. Uma rate card tem colunas, por isso o mesmo cartão pode ter taxas diferentes para
situações diferentes. Um cliente pode ter uma rate card padrão, que uma proposta herda.

**Na interface:** o campo em uma Proposta que seleciona a taxa se chama **Tabela**. Refere-se
à taxa retirada da Rate Card escolhida.

### Fatura

O documento levantado no Skills Workflow para cobrar de um cliente. Uma fatura é o que a
agência aprova internamente.

### Invoice

O documento que o sistema financeiro ou de contabilidade emite a partir de uma fatura
aprovada. A maioria das [integrações](/docs/integrations) funciona enviando uma **Fatura**
aprovada para fora e escrevendo de volta nela a referência do **Invoice** resultante — por
isso uma fatura no Skills Workflow carrega o número do invoice que produziu.

### Nota de Crédito

Um documento que reduz um valor já faturado, emitido quando o valor de uma proposta faturada
diminui.

### Ordem de Compra / Fatura de Fornecedor

**Ordem de Compra** — o que a agência encomenda de um fornecedor. **Fatura de Fornecedor** —
o que o fornecedor fatura à agência. Ambas seguem para o sistema financeiro da mesma forma
que as faturas.

### Despesa

Um custo incorrido por uma pessoa e reembolsado — viagens, refeições e semelhantes. As
despesas são agrupadas em uma **Folha de Despesas** para aprovação.

---

## Pessoas e estrutura

### Usuário

Alguém que pode fazer login e usar o Skills Workflow.

### Empregado

O registro de emprego por trás de uma pessoa. Mantido separadamente da conta de usuário,
para que os dados de RH possam ser mantidos independentemente do acesso à plataforma.

**Na API:** `/api/users` e `/api/employees` são endpoints separados, e um usuário pode estar
vinculado a um registro de empregado.

### Tipologia

A posição de uma pessoa — o que ela faz, e portanto quanto custa e para que pode ser orçada.
As tipologias são aquilo contra o qual os recursos são orçados e planejados.

### Grupo de Tipologia

Um agrupamento de tipologias, usado para rate cards, planejamento e relatórios. As rate
cards normalmente são definidas por grupo de tipologia em vez de por tipologia individual.

:::note Tipologia não é Role
**Tipologia** é o que alguém faz, para custeio e planejamento. **Role** é o que alguém tem
permissão para ver e fazer na plataforma. Alterar uma tipologia afeta taxas e alocação de
recursos; alterar uma role afeta permissões.
:::

### Role

Um perfil de acesso que controla o que um usuário pode ver e fazer. As roles governam
permissões — incluindo, em alguns lugares, quais colunas individuais de um documento são
visíveis.

### Empresa, Divisão, Departamento

A hierarquia organizacional, da maior para a menor. Uma **Empresa** é uma entidade legal com
suas próprias configurações, moeda e conexão financeira. Uma **Divisão** agrupa
departamentos dentro dela. Um **Departamento** é onde as pessoas se situam, e é usado para
planejamento e workflow.

Um único tenant do Skills Workflow pode conter várias empresas, cada uma com sua própria
configuração e suas próprias credenciais de integração.

---

## Workflow

### Etapa

Onde um documento se encontra atualmente no seu processo — por exemplo uma fatura que está
Em Aprovação, ou uma atividade que está Em Andamento. Cada tipo de documento tem seu próprio
conjunto de etapas.

**Na API:** uma etapa é um `workflowState` — você a verá como `workflowState` em payloads e
`/api/jobs/{id}/workflowstate` como endpoint. "Etapa" e "workflow state" são a mesma coisa.

:::note Etapa vs Status
Esta documentação usa **Etapa** para onde um documento está no seu workflow. Onde você vir
**status**, normalmente significa outra coisa — por exemplo se uma execução de integração
teve sucesso. Se uma página usar "status" para significar a etapa do workflow, leia como
Etapa.
:::

### Transição

A passagem de uma etapa para a seguinte, e a permissão para fazê-la. Precisa existir uma
transição entre duas etapas para um documento poder passar entre elas — o que explica por
que uma [integração](/docs/integrations) pode reportar que não conseguiu aplicar uma mudança
de etapa mesmo quando a etapa de destino existe.

### Workflow

O conjunto completo de etapas e transições para um tipo de documento, incluindo quem pode
fazer cada passagem e o que acontece quando faz.

### Ação de Workflow

Algo que a plataforma executa automaticamente como parte de uma transição — criar uma
versão, atribuir alguém, pedir confirmação, enviar um e-mail, gerar uma proposta, e assim por
diante.

---

## Automatização e integração

### Automatização

Uma sequência configurada de passos que a plataforma executa por conta própria — chamar um
sistema externo, rodar uma query, criar ou atualizar registros. A maioria das
[integrações](/docs/integrations) é construída a partir de automatizações.

### Webhook

Um gatilho que dispara quando algo acontece a um documento — criado, atualizado, etapa
alterada, excluído — e inicia uma automatização. Os webhooks podem ser filtrados, por isso
só disparam para etapas ou tipos de documento específicos.

### Named Query

Uma query salva, usada por automatizações e workspaces para buscar ou montar dados.

### Workspace

Uma tela configurável — um dashboard ou um painel em um registro — construída a partir de
componentes e fontes de dados. Algumas integrações trazem workspaces que incorporam
diretamente um sistema externo em um registro.

### Parâmetro de Sistema / Chave de Configuração

Onde as configurações de conexão e credenciais de uma integração são guardadas, mantidas
fora da própria automatização para que possam diferir por ambiente.

### Campo Personalizado

Um campo adicional acrescentado a um tipo de documento além dos padrão. As integrações
costumam usar um campo personalizado para guardar o identificador do registro
correspondente no sistema externo.

### Tabela Personalizada

Uma tabela de dados guardada no Skills Workflow fora do modelo padrão — usada para dados de
referência, e por algumas integrações para sua própria contabilidade interna.

---

## Tempo

### Time Sheet

Um registro do tempo trabalhado, lançado contra uma atividade por um usuário, e aprovado.

### Ausência

Tempo fora — férias, doença e semelhantes. A ausência é o que torna alguém indisponível no
planejamento e alocação de recursos, e é por isso que existem
[integrações de RH](/docs/integrations) para mantê-la atualizada.

### Planejamento por tipologia

Orçar trabalho por **tipologia** em vez de por pessoa nomeada, para que um plano possa ser
construído antes de se saber quem vai fazê-lo.

### FTE

Full-Time Equivalent — uma unidade que expressa a carga de trabalho como uma proporção de
uma pessoa em tempo integral.

### Utilização

Quanto do tempo disponível de alguém é gasto em trabalho faturável.

### Burn

Quanto de um valor orçado ou contratado foi consumido por horas reais.
