---
id: chat
title: Chat
description: "Envie mensagens diretas e de grupo a colegas a partir de qualquer ecrã do Skills Workflow."
sidebar_label: Chat
sidebar_position: 4
---

O Chat é o painel de mensagens dentro do Skills Workflow. Abre por cima do ecrã onde está a trabalhar e reúne as suas conversas diretas e de grupo, as pessoas a quem pode enviar mensagens e quem está online.

## Disponibilidade

O ícone do Chat está no menu de topo. Aparece quando o chat está ativo na sua empresa e o seu perfil inclui a role **ChatNavigate**. Um contador sobre o ícone indica quantas conversas têm mensagens por ler.

Se o chat estiver ativo mas o serviço não puder ser contactado, o painel mostra **Chat indisponível** em vez das suas conversas.

## Encontrar uma conversa ou uma pessoa

<figure>

![img-box-shadow](/img/chat/01-chat-panel-conversations-PLACEHOLDER.png)
<figcaption>Painel do Chat no separador Conversas.</figcaption>

</figure>

O painel tem dois separadores.

**Conversas** lista as conversas de que faz parte, começando pela atividade mais recente. Cada linha mostra a fotografia dos participantes, o nome da conversa, quando chegou a última mensagem, uma pré-visualização dela e quantas mensagens ainda não leu. A caixa de procura pesquisa nomes de conversas.

**Utilizadores** lista as pessoas a quem pode enviar mensagens, com o respetivo grupo de tipologia e um ponto verde enquanto estiverem online. Selecionar uma pessoa abre a conversa com ela.

A fotografia de uma pessoa também inicia a conversa. Onde a ação de chat estiver disponível sobre a fotografia, como num post do Feed, numa resposta ou numa associação de equipa, clique na fotografia e a conversa abre.

## Iniciar uma conversa

Para enviar mensagem a uma pessoa, abra o separador **Utilizadores** e selecione-a. Se já falaram antes, abre a conversa existente com o respetivo histórico. Duas pessoas partilham sempre uma única conversa.

Para criar um grupo, use o botão de nova conversa ao lado dos separadores:

1. Selecione pelo menos duas pessoas. Cada uma aparece como etiqueta por cima da lista e pode ser removida aí.
2. Escreva um nome, se quiser.
3. Selecione **Iniciar conversa**.

<figure>

![img-box-shadow](/img/chat/03-new-conversation-PLACEHOLDER.png)
<figcaption>Iniciar uma conversa de grupo.</figcaption>

</figure>

O nome é opcional e pode ser alterado mais tarde. Um grupo sem nome é listado com os nomes dos três primeiros membros por ordem alfabética, seguidos do número de membros restantes.

## Escrever e enviar

<figure>

![img-box-shadow](/img/chat/02-conversation-PLACEHOLDER.png)
<figcaption>Uma conversa aberta.</figcaption>

</figure>

Escreva na caixa de mensagem no fundo da conversa. **Enter** envia a mensagem e **Shift+Enter** muda de linha. Os endereços começados por `http://` ou `https://` passam a ligações que abrem num novo separador.

O texto que ainda não enviou fica guardado nessa conversa, no seu browser, e está à sua espera na caixa de mensagem quando voltar.

Enquanto a mensagem segue, mostra **A enviar...**. Se não chegar ao serviço, fica no ecrã com **Não foi possível enviar a mensagem.** e a ação **Tentar novamente**.

O histórico agrupa mensagens seguidas da mesma pessoa e escreve a hora uma vez no fim de cada grupo. Os dias são separados por uma data e uma linha vermelha marca a primeira mensagem que ainda não leu. Faça scroll até ao topo de uma conversa para carregar mensagens mais antigas.

### Copiar ou editar uma mensagem

Aponte para uma mensagem para revelar as suas ações.

**Copiar mensagem** coloca o texto da mensagem na área de transferência.

**Editar mensagem** aparece nas suas próprias mensagens. Abre o texto numa caixa editável com as regras da caixa de mensagem: **Enter** grava, **Esc** cancela. Todos passam a ver a mensagem marcada como **Editada**. As mensagens de sistema, como a nota que regista uma mudança de nome, não podem ser editadas, e nenhuma mensagem pode ser apagada.

### Enquanto alguém escreve

Uma linha por baixo da última mensagem nomeia as pessoas que estão a escrever e empilha as suas fotografias. A partir de três pessoas, passa a contá-las.

## Gerir uma conversa de grupo

<figure>

![img-box-shadow-popup](/img/chat/04-group-menu-PLACEHOLDER.png)
<figcaption>O menu da conversa de grupo.</figcaption>

</figure>

O cabeçalho de um grupo mostra o nome da conversa e quantos membros estão online. **Gerir membros**, o botão **...**, abre o menu do grupo.

**Mudar o nome da conversa** pede o novo nome, que é obrigatório. A conversa passa a ter esse nome para todos e a alteração fica registada como mensagem no histórico.

**Adicionar membro** abre a lista de pessoas que pode acrescentar. As pessoas adicionadas são anunciadas na conversa.

**Sair** regista que saiu e retira a conversa da sua lista.

A lista de membros por baixo do menu remove alguém através da ação na respetiva linha. Confirme a remoção e essa pessoa deixa de receber as mensagens da conversa. A remoção é oferecida enquanto o grupo tiver mais de dois membros.

## Notificações

Com o painel do Chat fechado, uma mensagem recebida aparece como aviso no canto da aplicação. Selecione o aviso para abrir essa conversa.

Enquanto o separador do browser estiver em segundo plano, a mensagem é também lançada como notificação de ambiente de trabalho. As mensagens diretas têm como título o nome de quem as enviou. Uma mensagem de grupo tem como título o nome da conversa e nomeia quem a enviou no corpo.

As notificações de ambiente de trabalho exigem **Enable browser notifications**, em **Notificações** na sua configuração, e a permissão do próprio browser, pedida da primeira vez que abre o chat ou as notificações depois de ativar a definição. Estão disponíveis no Modern Layout. Os restantes layouts ficam com o aviso dentro da aplicação.

## Regras e comportamento

- O separador **Utilizadores** nunca lista o próprio utilizador, utilizadores inativos nem administradores de sistema.
- A procura em **Conversas** pesquisa nomes de conversas. Não pesquisa o texto das mensagens.
- A caixa de mensagem envia texto. O painel do Chat não tem ação para anexar ficheiros.
- As mensagens que envia noutro separador ou noutro dispositivo aparecem na conversa sem o notificarem duas vezes.

## Configuração

O chat é ativado no seu tenant pela equipa de suporte da Skills Workflow.

O acesso é dado por utilizador através das roles de chat. **ChatNavigate** é a role que coloca o ícone no menu de topo.

Quem cada pessoa pode contactar é controlado por **Chat Visibility Restriction Enabled**, no separador **Segurança** da Configuração:

- Com a definição desligada, todos veem todos os utilizadores ativos, exceto os administradores de sistema.
- Com a definição ligada, um utilizador que tenha pessoas na sua lista de visibilidade de chat vê apenas essas pessoas, mais quem o tenha colocado na própria lista. Um utilizador com a lista vazia continua a ver todos.

As listas de visibilidade de chat ficam no registo do utilizador e não são editáveis na WebApp. Peça à equipa de suporte da Skills Workflow para as definir.

## Artigos relacionados

- [Utilizar o Feed](/docs/product/files-and-collaboration/using-feed)
- [Roles e Perfis](/docs/administration/system-roles-profiles)
- [Tipos de Notificação](/docs/product/notifications/notification-types)
