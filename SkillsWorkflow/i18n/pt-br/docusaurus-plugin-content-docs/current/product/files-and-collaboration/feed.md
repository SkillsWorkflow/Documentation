---
id: using-feed
title: Usando o Feed
description: "Use o Feed para consultar o contexto do documento, colaborar com a equipe e controlar o que os usuários clientes podem ver."
sidebar_label: Usando o Feed
sidebar_position: 1
---

O Feed é a área de colaboração de um documento. Ele reúne em um só lugar o contexto do documento, as mensagens, a atividade do workflow, os arquivos, as notificações e as conversas.

## Consultar o contexto do documento

<figure>

![img-box-shadow-feed](/img/university/feed/feed-document-context.png)
<figcaption>Contexto do documento no Feed.</figcaption>

</figure>

No topo do Feed, você pode consultar a descrição do documento e suas informações de apoio antes de analisar a atividade abaixo. Dependendo do tipo e da configuração do documento, essa área também pode mostrar outros campos descritivos e arquivos anexados ao documento.

Use essas informações para entender a solicitação ou o brief antes de criar uma publicação. O contexto do documento é separado da linha do tempo do Feed: atualize a descrição quando as informações principais do documento mudarem e use as publicações para registrar a colaboração e as decisões.

## Adicionar uma publicação ou uma ação de workflow

<figure>

![img-box-shadow-feed](/img/university/feed/feed-composer.png)
<figcaption>Compositor e ações do Feed.</figcaption>

</figure>

Use o compositor abaixo do contexto do documento para escrever uma mensagem. Você também pode usar as ações disponíveis para adicionar arquivos, atribuir ou notificar pessoas e avançar o documento no workflow.

Ao publicar, o Feed registra a publicação junto com as ações realizadas. Por exemplo, uma única entrada no Feed pode incluir uma mensagem, arquivos, uma alteração de etapa do workflow e pessoas notificadas ou mencionadas. As ações disponíveis dependem do documento, do workflow e das suas permissões.

## Usar ações do Feed

<figure>

![img-box-shadow-feed](/img/university/feed/feed-actions.jpeg)
<figcaption>Ações disponíveis abaixo do compositor do Feed.</figcaption>

</figure>

Selecione uma ação abaixo do compositor, preencha as informações solicitadas e publique a entrada para registrar a alteração no Feed. As ações a seguir estavam disponíveis na WebApp atual:

| Ação | O que faz |
| --- | --- |
| **Move stage** | Seleciona uma transição de workflow disponível e move o documento para sua etapa de destino. As transições mostradas dependem da etapa atual e do workflow do documento. |
| **Items** | Cria um item a partir do Feed. Informe o nome, selecione o tipo e defina a data. Os tipos de item disponíveis dependem da configuração. |
| **Add file** | Anexa um arquivo à publicação. Você também pode arrastar um arquivo para o compositor. |
| **Add assignment** | Abre as atribuições de equipe do documento, agrupadas por tipo de atribuição. Use os controles disponíveis para adicionar, atualizar ou remover uma atribuição. |
| **Change end date** | Altera a data e a hora de término do documento. |
| **Additional information** | Abre os campos adicionais configurados para o documento para que possam ser preenchidos ou atualizados. Os campos variam conforme o tipo e a configuração do documento. |
| **Notifications** | Permite escolher um usuário para notificar quando a publicação for enviada. |

:::caution
Não use Notifications para incluir usuários clientes em uma discussão interna. Notificar ou fazer `@mention` a um cliente pode tornar uma publicação visível para esse cliente.
:::

## Acompanhar a atividade e as conversas

<figure>

![img-box-shadow-feed](/img/university/feed/feed-activity-timeline.png)
<figcaption>Atividade e conversas na linha do tempo do Feed.</figcaption>

</figure>

A linha do tempo mostra primeiro a atividade mais recente. Cada entrada pode incluir o autor, a data e hora de publicação, a mensagem, os arquivos, a atividade do workflow e as pessoas notificadas ou mencionadas. Use comentários e respostas em uma publicação para manter a conversa e seu contexto juntos.

Use a pesquisa do Feed para encontrar atividades anteriores quando ela estiver disponível no seu workspace. Reações e outras opções da publicação também podem estar disponíveis, dependendo da configuração.

## Visibilidade para usuários clientes

<figure>

![img-box-shadow-feed](/img/university/feed/feed-client-visibility.png)
<figcaption>Publicações visíveis para clientes e publicações internas.</figcaption>

</figure>

Um usuário é tratado como cliente quando a flag `IsClient` está ativa. A visibilidade de uma discussão é definida na publicação principal por meio de `IsVisibleToClient`; ela não é configurada separadamente em um comentário ou resposta.

O sistema determina automaticamente a visibilidade da publicação a partir do workflow: a configuração `IsVisibleToClient` da etapa atual ou da etapa de destino determina se a publicação fica visível para os clientes. Comentários e respostas em uma publicação que não é visível para clientes são internos, pois o cliente não vê essa publicação principal no Feed normal.

### Criar uma discussão interna

Para manter uma discussão interna:

1. Confirme que o usuário externo está marcado como cliente (`IsClient`).
2. Crie a publicação enquanto o documento estiver em uma etapa do workflow que não seja visível para clientes.
3. Adicione os comentários e as respostas a essa publicação.
4. Não inclua clientes nas notificações nem faça `@mention` a clientes, pois isso pode tornar a publicação visível para o cliente.

## Boas práticas

- Consulte a descrição e as informações de apoio antes de publicar, para manter a conversa alinhada ao contexto do documento.
- Mantenha mensagens, decisões e acompanhamentos relacionados na mesma publicação e nas respectivas respostas.
- Use uma etapa do workflow que não seja visível para clientes antes de iniciar uma conversa interna.
- Valide uma publicação como usuário interno: uma publicação visível para clientes exibe o indicador **Cliente pode ver**. Se o indicador não estiver presente, a publicação não está visível para clientes.

## Limitações e atenções

- Um cliente continua vendo as publicações que criou. Não use uma publicação criada pelo cliente para uma discussão interna.
- Na WebApp atual, não há um controle funcional visível para alterar manualmente a privacidade de uma publicação depois de criada. Coloque o documento na etapa adequada do workflow antes de criar a publicação.
- Os campos, as ações e as opções mostrados no Feed podem variar de acordo com o tipo de documento, a configuração do workflow e as permissões do usuário.
