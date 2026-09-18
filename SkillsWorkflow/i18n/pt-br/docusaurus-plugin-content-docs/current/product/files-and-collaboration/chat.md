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

A foto de uma pessoa também inicia a conversa. Onde a ação de chat estiver disponível sobre a foto, como em um post do Feed, em uma resposta ou em uma associação de equipe, clique na foto e a conversa abre.

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

Escreva na caixa de mensagem no rodapé da conversa. **Enter** envia a mensagem e **Shift+Enter** cria uma nova linha. Os endereços iniciados por `http://` ou `https://` viram links que abrem em uma nova aba.

O texto que você ainda não enviou fica guardado naquela conversa, no seu navegador, e espera por você na caixa de mensagem quando voltar.

Enquanto a mensagem é entregue, ela mostra **Enviando...**. Se não chegar ao serviço, permanece na tela com **Não foi possível enviar a mensagem.** e a ação **Tentar novamente**.

O histórico agrupa mensagens seguidas da mesma pessoa e escreve o horário uma vez ao final de cada grupo. Os dias são separados por uma data e uma linha vermelha marca a primeira mensagem que você ainda não leu. Role até o topo de uma conversa para carregar mensagens mais antigas.

### Copiar ou editar uma mensagem

Aponte para uma mensagem para revelar suas ações.

**Copiar mensagem** coloca o texto da mensagem na área de transferência.

**Editar mensagem** aparece nas suas próprias mensagens. Ela abre o texto em uma caixa editável com as regras da caixa de mensagem: **Enter** salva, **Esc** cancela. Todos passam a ver a mensagem marcada como **Editada**. As mensagens de sistema, como a nota que registra uma mudança de nome, não podem ser editadas, e nenhuma mensagem pode ser excluída.

### Enquanto alguém escreve

Uma linha abaixo da última mensagem nomeia as pessoas que estão digitando e empilha as fotos delas. A partir de três pessoas, passa a contá-las.

## Gerenciar uma conversa de grupo

<figure>

![img-box-shadow-popup](/img/chat/04-group-menu-PLACEHOLDER.png)
<figcaption>O menu da conversa de grupo.</figcaption>

</figure>

O cabeçalho de um grupo mostra o nome da conversa e quantos membros estão online. **Gerenciar membros**, o botão **...**, abre o menu do grupo.

**Mudar o nome da conversa** pede o novo nome, que é obrigatório. A conversa passa a ter esse nome para todos e a alteração fica registrada como mensagem no histórico.

**Adicionar membro** abre a lista de pessoas que você pode acrescentar. As pessoas adicionadas são anunciadas na conversa.

**Sair** registra que você saiu e tira a conversa da sua lista.

A lista de membros abaixo do menu remove alguém pela ação na linha correspondente. Confirme a remoção e essa pessoa deixa de receber as mensagens da conversa. A remoção é oferecida enquanto o grupo tiver mais de dois membros.

## Notificações

Com o painel do Chat fechado, uma mensagem recebida aparece como aviso no canto da aplicação. Selecione o aviso para abrir aquela conversa.

Enquanto a aba do navegador estiver em segundo plano, a mensagem também é lançada como notificação da área de trabalho. As mensagens diretas têm como título o nome de quem enviou. Uma mensagem de grupo tem como título o nome da conversa e nomeia o remetente no corpo.

As notificações da área de trabalho exigem **Enable browser notifications**, em **Notificações** na sua configuração, e a permissão do próprio navegador, solicitada na primeira vez que você abre o chat ou as notificações depois de ativar a opção. Elas estão disponíveis no Modern Layout. Os demais layouts ficam com o aviso dentro da aplicação.

## Regras e comportamento

- A aba **Usuários** nunca lista você, usuários inativos nem administradores de sistema.
- A busca em **Conversas** pesquisa nomes de conversas. Ela não pesquisa o texto das mensagens.
- A caixa de mensagem envia texto. O painel do Chat não tem ação para anexar arquivos.
- As mensagens que você envia em outra aba ou em outro dispositivo aparecem na conversa sem notificar você duas vezes.

## Configuração

O chat é ativado no seu tenant pela equipe de suporte da Skills Workflow.

O acesso é concedido por usuário através das roles de chat. **ChatNavigate** é a role que coloca o ícone no menu superior.

Quem cada pessoa pode contatar é controlado por **Chat Visibility Restriction Enabled**, na aba **Segurança** da Configuração:

- Com a opção desligada, todos veem todos os usuários ativos, exceto os administradores de sistema.
- Com a opção ligada, um usuário que tenha pessoas na sua lista de visibilidade de chat vê apenas essas pessoas, mais quem o tenha colocado na própria lista. Um usuário com a lista vazia continua vendo todos.

As listas de visibilidade de chat ficam no cadastro do usuário e não são editáveis no WebApp. Peça à equipe de suporte da Skills Workflow para defini-las.

## Artigos relacionados

- [Usando o Feed](/docs/product/files-and-collaboration/using-feed)
- [Roles e Perfis](/docs/administration/system-roles-profiles)
- [Tipos de Notificação](/docs/product/notifications/notification-types)
