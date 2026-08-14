---
id: how-feed-works
title: Como Funciona o Feed
description: "Utilize o Feed para consultar o contexto do documento, colaborar com a equipa e controlar o que os utilizadores cliente podem ver."
sidebar_label: Como Funciona o Feed
sidebar_position: 1
---

O Feed é a área de colaboração de um documento. Reúne num único local o contexto do documento, as mensagens, a atividade do workflow, os ficheiros, as notificações e as conversas.

## Consultar o contexto do documento

<!-- IMAGE: Contexto do documento no Feed. Capture o topo do Feed de um documento com a área de descrição/brief e eventuais ficheiros anexados. Não inclua dados de clientes nem informação confidencial. -->

No topo do Feed pode consultar a descrição do documento e a respetiva informação de apoio antes de analisar a atividade abaixo. Consoante o tipo e a configuração do documento, esta área pode também apresentar outros campos descritivos e ficheiros anexados ao documento.

Utilize esta informação para compreender o pedido ou brief antes de criar uma publicação. O contexto do documento é separado da cronologia do Feed: atualize a descrição quando a informação principal do documento mudar e utilize as publicações para registar a colaboração e as decisões.

## Adicionar uma publicação ou uma ação de workflow

<!-- IMAGE: Compositor do Feed. Capture o campo da mensagem e as ações disponíveis abaixo, incluindo um exemplo da opção para avançar o documento. -->

Utilize o compositor abaixo do contexto do documento para escrever uma mensagem. Pode também utilizar as ações disponíveis para adicionar ficheiros, atribuir ou notificar pessoas e avançar o documento no respetivo workflow.

Ao publicar, o Feed regista a publicação juntamente com as ações executadas. Por exemplo, uma única entrada no Feed pode incluir uma mensagem, ficheiros, uma alteração de fase do workflow e pessoas notificadas ou mencionadas. As ações disponíveis dependem do documento, do workflow e das suas permissões.

## Acompanhar a atividade e as conversas

<!-- IMAGE: Cronologia do Feed. Capture uma publicação com autor, mensagem, atividade de workflow, pessoas notificadas ou mencionadas e ficheiros anexados. -->

A cronologia apresenta primeiro a atividade mais recente. Cada entrada pode incluir o autor, a data e hora de publicação, a mensagem, os ficheiros, a atividade do workflow e as pessoas notificadas ou mencionadas. Utilize comentários e respostas numa publicação para manter a conversa e o respetivo contexto juntos.

Utilize a pesquisa do Feed para encontrar atividade anterior quando esta estiver disponível no seu workspace. Também podem estar disponíveis reações e outras opções da publicação, consoante a configuração.

## Visibilidade para utilizadores cliente

<!-- IMAGE: Visibilidade para clientes. Capture uma publicação visível para clientes com o indicador “Cliente pode ver”. Se possível, adicione uma segunda captura de uma publicação interna, sem este indicador, para comparação. -->

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
