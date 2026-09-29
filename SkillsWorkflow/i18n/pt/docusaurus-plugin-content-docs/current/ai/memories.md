---
id: ai-memories
title: Memórias de IA
description: "O que o Assistente de IA memoriza sobre si, o ecrã onde revê e altera essas memórias, os dois modos de gravação e os limites do arquivo."
sidebar_label: Memórias de IA
sidebar_position: 3
---

O Assistente de IA transporta o que aprendeu sobre si de uma conversa para a seguinte: uma preferência que indicou, uma regra que a sua equipa segue, o client a que pertence a maior parte do seu trabalho. Usa essa informação para preencher pedidos posteriores, em vez de lhe fazer a mesma pergunta todas as vezes.

As memórias são suas. São guardadas no seu utilizador, dentro do seu tenant, e mais ninguém na sua equipa pode lê-las.

Abra **Manage Memories** no menu do painel. O ecrã tem três separadores.

## Saved

Os factos, preferências e regras que o assistente guarda, dos mais recentes para os mais antigos. Uma linha acima da lista conta-os em relação às 100 que o arquivo permite. Use a caixa de pesquisa para encontrar uma numa lista longa.

<figure>

![img-box-shadow](/img/ai/ai-memories-saved-tab.png)
<figcaption>Manage Memories, separador Saved</figcaption>
</figure>

Cada linha apresenta os emblemas que se aplicam: **Pinned**, **Written by you**, **Observed**, e **Off** para uma que tenha desativado. Por baixo, é apresentado *Aprendida em* e a data.

Cada linha tem quatro controlos:

- O interruptor desativa a memória. A linha permanece onde está, mantém a sua proveniência e deixa de ser enviada para o assistente.
- **Pin memory** protege-a. Uma memória fixada nunca expira e nunca é removida automaticamente.
- **Edit memory** abre-a para reescrever.
- **Delete memory** remove-a definitivamente.

**Add** permite escrever uma memória. Escreva o que o assistente deve saber, escolha um **Tipo** de Preferência, Regra ou Facto, e fixe-a se quiser que fique protegida. Uma memória que escreva ou edite é tratada como confirmada: nunca expira e nunca é eliminada para dar lugar a uma mais recente.

## What you usually do

Cada documento que cria através do assistente conta para o client, o project, o department, o job type e o document type utilizados. Este separador é o registo disso, agrupado por campo, mostrando, para cada entidade, quantas criações lhe são atribuídas e quando a utilizou pela última vez.

<figure>

![img-box-shadow](/img/ai/ai-memories-patterns-tab.png)
<figcaption>Manage Memories, What you usually do</figcaption>
</figure>

**Use always** transforma uma entidade no valor assumido para esse campo. A sua linha fica com o emblema **Always**, lidera o seu grupo e é proposta antes de qualquer outra que tenha simplesmente usado mais vezes. **Stop using always** anula isso e mantém a contagem acumulada.

**Forget** elimina a entrada. A contagem desaparece com ela e a entidade deixa de ser proposta.

Uma criação é contabilizada uma única vez. Reabrir uma conversa ou o assistente repetir o que já fez não acrescenta nada.

## Settings

<figure>

![img-box-shadow](/img/ai/ai-memories-settings-tab.png)
<figcaption>Manage Memories, separador Settings</figcaption>
</figure>

| Definição | O que faz |
|---|---|
| Memory on | Interruptor principal. Com a memória desligada, nada do que está guardado chega ao assistente, e nada de novo é guardado. Nada é eliminado. |
| Save automatically and tell me | O assistente grava o que aprende à medida que avança, e nunca esconde que está a memorizar. Esta é a predefinição. Tudo o que gravou está no separador **Saved**, onde pode desativá-lo ou eliminá-lo. |
| Ask before saving | Nada é gravado até concordar com esse ponto específico na conversa. |
| Use what I usually do to suggest values | Permite que as entidades contabilizadas acima proponham o client, o project e o job type enquanto cria um documento. Continua a confirmar cada uma. |

**Clear All** esvazia tanto a lista de memórias guardadas como as contagens. As suas definições ficam como estão.

Com a memória desligada, ainda pode editar e eliminar o que está guardado. Desligá-la nunca deixa **Clear All** como a única forma de alterar o arquivo.

## Como o assistente usa uma memória

Um valor memorizado é uma sugestão, nunca uma decisão que tenha tomado. Quando o assistente preenche um campo com base numa memória, o campo continua aberto: o valor memorizado surge no topo da lista de opções, e o pedido só chega ao cartão de aprovação depois de o escolher.

As memórias guardam nomes, não IDs de registos. O assistente procura o nome nos dados reais antes de o usar.

Um project ou job type memorizado só é proposto depois de o client ou department estar definido. Até lá, obtém a lista completa, devidamente delimitada.

## Regras e comportamento

- A lista de memórias guardadas tem, no máximo, 100 entradas. As memórias fixadas e as que foram escritas por si nunca são removidas para abrir espaço; quando só essas já preenchem a lista, o assistente informa que não foi possível guardar uma nova.
- São contabilizadas até 25 entidades por campo.
- Algo que o assistente inferiu, em vez de lhe ter sido dito, expira ao fim de 90 dias. Fixar, editar ou confirmar mantém-na. As entidades contabilizadas nunca expiram; usar uma novamente atualiza-a.
- As memórias são por utilizador e por tenant. Duas pessoas nunca partilham uma memória, e as memórias da mesma pessoa não viajam entre tenants.
- Todos os agents respeitam as suas memórias, incluindo as que a sua agência cria. Acrescentar ao arquivo é uma tool: só os agents com essa permissão podem escrever. Consulte [Ferramentas](/docs/ai/ai-tools#memory).
- Desligar a memória deixa tudo no lugar. Volte a ligá-la e o assistente retoma onde estava.

## Artigos relacionados

- [Assistente de IA](/docs/ai/ai-assistant)
- [Agentes](/docs/ai/agents)
- [Ferramentas](/docs/ai/ai-tools)
