---
id: using-feed
title: Utilizar o Feed
description: "Utilize o Feed para consultar o contexto do documento, colaborar com a equipa e controlar o que os utilizadores cliente podem ver."
sidebar_label: Utilizar o Feed
sidebar_position: 1
---

O Feed é a área de colaboração de um documento. Reúne num único local o contexto do documento, as mensagens, a atividade do workflow, os ficheiros, as notificações e as conversas.

## Consultar o contexto do documento

<figure>

![img-box-shadow-feed](/img/university/feed/feed-document-context.png)
<figcaption>Contexto do documento no Feed.</figcaption>

</figure>

No topo do Feed pode consultar a descrição do documento e a respetiva informação de apoio antes de analisar a atividade abaixo. Consoante o tipo e a configuração do documento, esta área pode também apresentar outros campos descritivos e ficheiros anexados ao documento.

Utilize esta informação para compreender o pedido ou brief antes de criar uma publicação. O contexto do documento é separado da cronologia do Feed: atualize a descrição quando a informação principal do documento mudar e utilize as publicações para registar a colaboração e as decisões.

## Adicionar uma publicação ou uma ação de workflow

<figure>

![img-box-shadow-feed](/img/university/feed/feed-composer.png)
<figcaption>Compositor e ações do Feed.</figcaption>

</figure>

Utilize o compositor abaixo do contexto do documento para escrever uma mensagem. Pode também utilizar as ações disponíveis para adicionar ficheiros, atribuir ou notificar pessoas e avançar o documento no respetivo workflow.

Ao publicar, o Feed regista a publicação juntamente com as ações executadas. Por exemplo, uma única entrada no Feed pode incluir uma mensagem, ficheiros, uma alteração de fase do workflow e pessoas notificadas ou mencionadas. As ações disponíveis dependem do documento, do workflow e das suas permissões.

## Utilizar ações do Feed

<figure>

![img-box-shadow-feed](/img/university/feed/feed-actions.jpeg)
<figcaption>Ações disponíveis abaixo do compositor do Feed.</figcaption>

</figure>

Selecione uma ação abaixo do compositor, preencha a informação pedida e publique a entrada para registar a alteração no Feed. As ações seguintes estavam disponíveis na WebApp atual:

| Ação | O que faz |
| --- | --- |
| **Move stage** | Seleciona uma transição de workflow disponível e move o documento para a respetiva fase de destino. As transições apresentadas dependem da fase atual e do workflow do documento. |
| **Items** | Cria um item a partir do Feed. Introduza o nome, selecione o tipo e defina a data. Os tipos de item disponíveis dependem da configuração. |
| **Add file** | Anexa um ficheiro à publicação. Também pode arrastar um ficheiro para o compositor. |
| **Add assignment** | Abre as atribuições de equipa do documento, agrupadas por tipo de atribuição. Utilize os controlos disponíveis para adicionar, atualizar ou remover uma atribuição. |
| **Change end date** | Altera a data e a hora de fim do documento. |
| **Additional information** | Abre os campos adicionais configurados para o documento, para que possam ser preenchidos ou atualizados. Os campos variam conforme o tipo e a configuração do documento. |
| **Notifications** | Permite escolher um utilizador a notificar quando a publicação for efetuada. |

:::caution
Não utilize Notifications para incluir utilizadores cliente numa discussão interna. Notificar ou fazer `@mention` a um cliente pode tornar uma publicação visível para esse cliente.
:::

## Acompanhar a atividade e as conversas

<figure>

![img-box-shadow-feed](/img/university/feed/feed-activity-timeline.png)
<figcaption>Atividade e conversas na cronologia do Feed.</figcaption>

</figure>

A cronologia apresenta primeiro a atividade mais recente. Cada entrada pode incluir o autor, a data e hora de publicação, a mensagem, os ficheiros, a atividade do workflow e as pessoas notificadas ou mencionadas. Utilize comentários e respostas numa publicação para manter a conversa e o respetivo contexto juntos.

Utilize a pesquisa do Feed para encontrar atividade anterior quando esta estiver disponível no seu workspace. Também podem estar disponíveis reações e outras opções da publicação, consoante a configuração.

## Visibilidade para utilizadores cliente

<figure>

![img-box-shadow-feed](/img/university/feed/feed-client-visibility.png)
<figcaption>Publicações visíveis para clientes e publicações internas.</figcaption>

</figure>

Um utilizador é tratado como cliente quando tem a flag `IsClient` ativa. A visibilidade de uma discussão é definida na publicação-pai através de `IsVisibleToClient`; não é configurada separadamente num comentário ou numa resposta.

O sistema determina automaticamente a visibilidade da publicação a partir do workflow: a definição `IsVisibleToClient` da fase atual ou da fase de destino determina se a publicação é visível para os clientes. Os comentários e as respostas de uma publicação que não está visível para clientes são internos, porque o cliente não vê essa publicação-pai no Feed normal.

### Criar uma discussão interna

Para manter uma discussão interna:

1. Confirme que o utilizador externo está marcado como cliente (`IsClient`).
2. Crie a publicação quando o documento estiver numa fase do workflow que não seja visível para clientes.
3. Adicione os comentários e as respostas a essa publicação.
4. Não inclua clientes nas notificações nem faça `@mention` a clientes, porque isso pode tornar a publicação visível para o cliente.

## Boas práticas

- Consulte a descrição e a informação de apoio antes de publicar, para manter a conversa alinhada com o contexto do documento.
- Mantenha mensagens, decisões e seguimentos relacionados na mesma publicação e nas respetivas respostas.
- Utilize uma fase do workflow que não seja visível para clientes antes de iniciar uma conversa interna.
- Valide uma publicação como utilizador interno: uma publicação visível para clientes apresenta o indicador **Cliente pode ver**. Se o indicador não estiver presente, a publicação não está visível para clientes.

## Limitações e atenções

- Um cliente continua a ver as publicações que criou. Não utilize uma publicação criada pelo cliente para uma discussão interna.
- Na WebApp atual, não existe um controlo funcional visível para alterar manualmente a privacidade de uma publicação depois de criada. Coloque o documento na fase de workflow adequada antes de criar a publicação.
- Os campos, as ações e as opções apresentados no Feed podem variar conforme o tipo de documento, a configuração do workflow e as permissões do utilizador.

## Artigos relacionados

- [Anotações](/docs/product/files-and-collaboration/annotations)
- [Como criar atividades](/docs/product/projects-and-jobs/create-jobs)
