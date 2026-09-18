---
id: chat
title: Chat
description: "Envie mensagens diretas e de grupo para colegas a partir de qualquer tela do Skills Workflow."
sidebar_label: Chat
sidebar_position: 4
---

O Chat é o painel de mensagens dentro do Skills Workflow. Ele abre sobre a tela em que você está trabalhando e reúne suas conversas diretas e de grupo, as pessoas para quem você pode enviar mensagens e quem está online.

## Disponibilidade

O ícone do Chat fica no menu superior. Ele aparece quando o chat está ativo na sua empresa e o seu perfil inclui a role **ChatNavigate**. Um contador sobre o ícone indica quantas conversas têm mensagens não lidas.

Se o chat estiver ativo mas o serviço não puder ser contatado, o painel mostra **Chat indisponível** no lugar das suas conversas.

## Encontrar uma conversa ou uma pessoa

<figure>

![img-box-shadow](/img/chat/01-chat-panel-conversations-PLACEHOLDER.png)
<figcaption>Painel do Chat na aba Conversas.</figcaption>

</figure>

O painel tem duas abas.

**Conversas** lista as conversas das quais você participa, começando pela atividade mais recente. Cada linha mostra a foto dos participantes, o nome da conversa, quando a última mensagem chegou, uma prévia dela e quantas mensagens você ainda não leu. A caixa de busca pesquisa nomes de conversas.

**Usuários** lista as pessoas para quem você pode enviar mensagens, com o grupo de tipologia de cada uma e um ponto verde enquanto estiverem online. Selecionar uma pessoa abre a conversa com ela.

Você também pode iniciar uma conversa a partir da foto de uma pessoa sempre que a opção de chat aparecer sobre ela — por exemplo, em um post do Feed, em uma resposta ou em uma associação de equipe.

## Iniciar uma conversa

Para enviar mensagem para uma pessoa, abra a aba **Usuários** e selecione-a. Se vocês já conversaram antes, a conversa existente abre com o histórico. Duas pessoas sempre compartilham uma única conversa.

Para criar um grupo, use o botão de nova conversa ao lado das abas:

1. Selecione pelo menos duas pessoas. Cada uma aparece como etiqueta acima da lista e pode ser removida ali.
2. Escreva um nome, se quiser.
3. Selecione **Iniciar conversa**.

<figure>

![img-box-shadow](/img/chat/03-new-conversation-PLACEHOLDER.png)
<figcaption>Iniciando uma conversa de grupo.</figcaption>

</figure>

O nome é opcional e pode ser alterado depois. Um grupo sem nome é listado com os nomes dos três primeiros membros em ordem alfabética, seguidos do número de membros restantes.

## Escrever e enviar

<figure>

![img-box-shadow](/img/chat/02-conversation-PLACEHOLDER.png)
<figcaption>Uma conversa aberta.</figcaption>

</figure>

Escreva na caixa de mensagem no rodapé da conversa. **Enter** envia a mensagem e **Shift+Enter** cria uma nova linha. Qualquer link que você cole fica clicável e abre em uma nova aba.

Se você começar a escrever uma mensagem e não enviá-la, ela continua ali na próxima vez que você abrir essa conversa — mas só neste dispositivo.

Enquanto a mensagem é entregue, ela mostra **Enviando...**. Se não chegar ao serviço, permanece na tela com **Não foi possível enviar a mensagem.** e a ação **Tentar novamente**.

As mensagens seguidas da mesma pessoa são agrupadas, com o horário mostrado uma vez ao final do grupo. Os dias são separados por uma data e uma linha vermelha marca a primeira mensagem que você ainda não leu. Role até o topo de uma conversa para carregar mensagens mais antigas.

### Copiar ou editar uma mensagem

Faça hover em uma mensagem para ver as ações disponíveis.

**Copiar mensagem** coloca o texto da mensagem na área de transferência.

**Editar mensagem** aparece nas suas próprias mensagens. Ela abre o texto em uma caixa editável, onde **Enter** salva a alteração e **Esc** cancela. Todos passam a ver a mensagem marcada como **Editada**. As mensagens de sistema, como a nota que registra uma mudança de nome, não podem ser editadas, e nenhuma mensagem pode ser excluída.

### Enquanto alguém escreve

Uma linha abaixo da última mensagem nomeia as pessoas que estão digitando e empilha as fotos delas. A partir de três pessoas, passa a contá-las.

## Gerenciar uma conversa de grupo

<figure>

![img-box-shadow-popup](/img/chat/04-group-menu-PLACEHOLDER.png)
<figcaption>O menu da conversa de grupo.</figcaption>

</figure>

O cabeçalho do grupo mostra o nome da conversa e quantos membros estão online. Selecione **Gerenciar membros** (o botão **...**) para abrir o menu do grupo.

**Mudar o nome da conversa** pede o novo nome, que é obrigatório. A conversa passa a ter esse nome para todos e a alteração fica registrada como mensagem no histórico.

**Adicionar membro** abre a lista de pessoas que você pode acrescentar. As pessoas adicionadas são anunciadas na conversa.

**Sair** registra que você saiu e tira a conversa da sua lista.

Para remover alguém, use a ação de remover ao lado do nome dessa pessoa, na lista de membros abaixo do menu. Confirme a remoção e essa pessoa deixa de receber as mensagens da conversa. Você só pode remover um membro enquanto o grupo tiver mais de duas pessoas.

## Notificações

Com o painel do Chat fechado, uma mensagem recebida aparece como aviso no canto da aplicação. Selecione o aviso para abrir aquela conversa.

Enquanto a aba do navegador estiver em segundo plano, a mensagem também é lançada como notificação da área de trabalho. Uma mensagem direta mostra o nome de quem a enviou. Uma mensagem de grupo mostra o nome da conversa, com o nome de quem enviou no texto.

As notificações da área de trabalho exigem **Enable browser notifications**, em **Notificações** na sua configuração, e a permissão do próprio navegador, solicitada na primeira vez que você abre o chat ou as notificações depois de ativar a opção. Elas estão disponíveis no Modern Layout. Os demais layouts ficam com o aviso dentro da aplicação.

## Regras e comportamento

- A aba **Usuários** nunca lista você, usuários inativos nem administradores de sistema.
- A busca em **Conversas** pesquisa nomes de conversas. Ela não pesquisa o texto das mensagens.
- O Chat só envia mensagens de texto. Não é possível anexar arquivos.
- Se você usar o Chat em mais de uma aba do navegador ou em mais de um dispositivo ao mesmo tempo, suas conversas ficam sincronizadas em todos eles.

## Configuração

O chat é ativado no seu tenant pela equipe de suporte da Skills Workflow.

O acesso é concedido por usuário através das roles de chat. **ChatNavigate** é a role que coloca o ícone no menu superior.

Quem cada pessoa pode contatar é controlado por **Chat Visibility Restriction Enabled**, na aba **Segurança** da Configuração:

- Com a opção desligada, todos veem todos os usuários ativos, exceto os administradores de sistema.
- Com a opção ligada, um usuário que tenha pessoas na sua lista de visibilidade de chat vê apenas essas pessoas, mais quem o tenha colocado na própria lista. Um usuário com a lista vazia continua vendo todos.

Essas listas não são editáveis no WebApp. Peça à equipe de suporte da Skills Workflow para configurá-las.

## Artigos relacionados

- [Usando o Feed](/docs/product/files-and-collaboration/using-feed)
- [Roles e Perfis](/docs/administration/system-roles-profiles)
- [Tipos de Notificação](/docs/product/notifications/notification-types)
