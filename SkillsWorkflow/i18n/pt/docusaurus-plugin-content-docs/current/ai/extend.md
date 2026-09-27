---
id: ai-extend
title: Adicionar as Suas Skills, Agents e Tools
description: "Amplie a IA com o conhecimento da sua própria forma de trabalhar: skills que ensinam a um agent as suas regras, agents construídos para os seus processos, e tools que alcançam os seus próprios sistemas e relatórios."
sidebar_label: Adicionar as Suas
sidebar_position: 6
---

Os quatro agents que o Skills Workflow disponibiliza conhecem a plataforma. Não conhecem a sua agência: a estrutura dos seus briefs, a sua nomenclatura, os seus hábitos de aprovação, o sistema onde guarda os orçamentos.

Três coisas permitem-lhe adicionar isso, e combinam-se entre si. Uma **skill** é conhecimento, um **agent** é uma tarefa a fazer com esse conhecimento, e uma **tool** é algo que o agent consegue alcançar.

| Quer | Adicione |
|---|---|
| Ensinar a um agent uma regra, um formato ou um processo seu | Uma **skill** |
| Ter um agent para uma tarefa sua, com as suas próprias instruções e o seu próprio conjunto de tools | Um **agent** |
| Permitir que um agent alcance um dos seus relatórios, ou um sistema fora do Skills Workflow | Uma **tool** |

Trabalhe com o seu consultor Skills Workflow na primeira vez. Nada aqui é difícil, mas um agent é tão bom quanto as tools que lhe são concedidas, e conceder as erradas é como um agent se torna inútil ou demasiado livre.

## Skills

Uma skill é um conjunto de instruções escritas que um agent pode ler quando precisa delas. É a forma de deixar de se repetir: *"os nossos briefs começam sempre com o objetivo de negócio"*, escrito uma vez, passa a ser verdade para todos.

Uma skill é uma pasta que contém um ficheiro `SKILL.md`: um cabeçalho curto que dá o nome à skill e descreve quando a usar, seguido das instruções em Markdown simples. Material mais longo — uma especificação de formato completa, uma tabela dos seus códigos, um exemplo trabalhado — fica numa pasta `references/` ao lado, e só é lido quando o agent precisa desse nível de detalhe.

```
$ai-agents/skills/
  brief-house-style/
    SKILL.md
    references/
      SECTIONS.md
```

As skills residem no sistema de ficheiros do seu próprio tenant, em `$ai-agents/skills/`. É isso que as torna suas: as skills de uma agência nunca são visíveis para outra, e pode alterar uma sem esperar por um lançamento.

**Uma skill só é usada pelos agents que a listam.** Cada definição de agent contém os nomes das skills que pode ler; uma skill que ninguém lista nunca é anunciada, e um agent que lista uma skill que não existe simplesmente não a recebe. Quando uma skill deixa de fazer efeito, o nome na definição do agent é a primeira coisa a verificar.

Os agents são informados do nome e da descrição de cada skill em cada pedido, e só obtêm o corpo quando um pedido o exige. As descrições importam, por isso: uma skill descrita vagamente é uma skill que nunca é lida.

## Agentes

Um agent é uma definição, não código. Contém:

- **Nome e descrição**, que é o que o utilizador vê no seletor de agents do painel.
- **Instruções**: como se comporta, o que faz sempre, o que recusa.
- **Skills** que pode ler.
- **Tools**, que são o que efetivamente consegue fazer. Veja [Ferramentas](/docs/ai/ai-tools).
- **Tools que requerem aprovação**, as que param e pedem confirmação ao utilizador primeiro.
- **Sugestões de prompts** mostradas numa conversa vazia.
- **Um ícone** que o identifica na lista.
- **Um modelo**, indicado apenas quando este agent precisa de um diferente do predefinido da plataforma.

Depois de guardado, aparece no seletor de agents junto aos quatro que são disponibilizados. Não há etapa de implementação.

Indicar um modelo vale a pena quando a tarefa o exige: um modelo de raciocínio para um agent que tem de resolver algo, um mais económico para um agent que apenas classifica ou reescreve. Sem indicação, o agent funciona com o que estiver configurado na plataforma, o que é o pretendido para a maioria dos agents.

Todos os agents que constrói respeitam as memórias do utilizador que os invoca. Isso não é uma tool que se concede e não pode ser desativada por agent; é uma definição do próprio utilizador. Conceder as tools de memória decide apenas se o seu agent pode adicionar a esse arquivo. Veja [Memórias de IA](/docs/ai/ai-memories).

Quatro coisas que vale a pena acertar:

- **Conceda o conjunto mínimo de tools que cumpre a tarefa.** Deixar a lista de tools vazia dá ao agent todo o catálogo da plataforma, incluindo tudo o que escreve.
- **Coloque todas as tools de escrita na lista de aprovação.** Um agent que cria jobs sem perguntar acabará por criar um que não queria.
- **Escreva as instruções como regras, não como incentivos.** "Nunca criar um job sem cliente" mantém-se. "Tentar ter cuidado com o cliente" não.
- **Um agent, uma tarefa.** Um agent a quem se pede tudo escolhe a tool errada.

### Agentes que não são nossos

Um agent pode ser direcionado para um serviço de IA que já opere, em vez do modelo próprio da plataforma. A conversa é retransmitida para o seu endpoint e a resposta regressa ao mesmo painel de chat, com o mesmo histórico, os mesmos anexos e o mesmo seletor de agents.

Este é o caminho para um modelo de briefing que a sua agência tenha treinado, ou um serviço que um cliente exija. A configuração do agent contém o endereço, como o pedido é formado, onde na resposta se encontra a resposta, e o tempo limite. Os anexos são passados como links; nada é enviado inline. Um agent destes não usa quaisquer skills ou tools da plataforma: é o seu serviço a responder.

## Tools

Duas formas de dar aos agents capacidades além do catálogo incorporado.

### Os seus próprios relatórios

As suas named queries de data extraction podem ser expostas como tools, uma tool por query. Este é o caminho mais curto para um agent que responde a perguntas sobre os seus próprios números: a query já existe, já tem os joins corretos, e já está verificada por perfil.

Ative as analytics tools para o agent, e liste que queries pode alcançar. Se não forem listadas, obtém todas as queries que o seu tenant publica — normalmente mais do que um agent precisa.

Cada chamada é executada como o utilizador que a solicita, por isso um utilizador a quem é recusado um relatório na plataforma também o vê recusado aqui. As queries são apenas de leitura.

Veja [Data Extraction API](/docs/build-and-extend/api/data-extraction-api) para saber o que o seu tenant publica.

### Os seus próprios sistemas

Um agent pode ser ligado a um **servidor MCP**, uma forma padronizada de expor as operações de um sistema como tools. Se um sistema que usa já o suporta, ou pode colocar um pequeno serviço à frente de um que não suporta, as suas tools aparecem ao agent junto às da própria plataforma.

Um servidor MCP é registado uma vez para o seu tenant, com o seu endereço, e depois indicado em cada agent que deva usá-lo. A ligação é por agent e explícita: um agent que não indica um servidor não obtém nada dele. As ligações nunca são partilhadas entre tenants.

## Regras e comportamento

- Tudo aqui é por tenant. As suas skills, agents, servidores MCP e as suas tools são só suas.
- As tools da plataforma e as queries de data extraction executam-se sempre como o utilizador com sessão iniciada, por isso concedê-las nunca amplia o que um utilizador consegue alcançar.
- Um servidor MCP é o seu próprio serviço e tem o seu próprio acesso. Tudo o que consiga alcançar, cada agent a que o ligar consegue alcançar em nome de cada utilizador desse agent.
- Uma skill ou um agent é conteúdo, não um lançamento. Altere um e o pedido seguinte já o usa.
- Faça o versionamento das suas skills e agents à medida que os altera. Nada o obriga, e sem isso uma alteração má é difícil de rastrear.

## Artigos relacionados

- [Ferramentas](/docs/ai/ai-tools)
- [Agentes](/docs/ai/agents)
- [Memórias de IA](/docs/ai/ai-memories)
- [Ações de IA](/docs/ai/ai-actions)
- [Portais de Cliente](/docs/ai/ai-portals)
- [Data Extraction API](/docs/build-and-extend/api/data-extraction-api)
