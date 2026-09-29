---
id: ai-portals
title: Portais de Cliente
description: "Um portal de cliente é uma página própria, gerada com IA, publicada a partir do Skills Workflow por trás da sessão dos seus utilizadores e que lê dados da plataforma em tempo real através das suas próprias permissões."
sidebar_label: Portais de Cliente
sidebar_position: 7
---

Um portal de cliente é uma página web própria, publicada a partir do Skills Workflow em `/portal/{client}/{portal}/`. Com o seu próprio layout, os seus próprios gráficos, as suas próprias palavras. Não é um workspace nem uma dashboard: a interface da plataforma não é carregada à sua volta, pelo que a página pode ter o aspeto que se quiser.

Também funciona **dentro da sua sessão**. Quem abre um portal inicia sessão como si próprio, e a página lê dados em tempo real do Skills Workflow através das suas próprias permissões. Nada é exportado, copiado ou mantido sincronizado.

Os portais são escritos com IA. Descreva a página que pretende, e a plataforma disponibiliza uma skill que indica ao agent tudo o que precisa de saber sobre o ambiente: a que dados pode aceder, como os chamar e o que a sandbox proíbe.

:::note
Os portais são uma funcionalidade recente e ainda estão a ser desenvolvidos. Reveja [O que ainda não existe](#what-is-not-there-yet) antes de planear uma disponibilização a utilizadores clientes.
:::

## Para que serve um portal

- Uma vista para um cliente que não se enquadra em nenhum workspace: a sua própria página de relatórios, nas suas próprias palavras
- Um ecrã moldado à volta de uma única tarefa, num layout que os componentes da plataforma não produzem
- Uma página que entrega a alguém como uma ligação, sem ter de lhe ensinar a plataforma

## Como funciona

Cada portal vive numa pasta, e a estrutura de pastas *é* o registo. Publicar um portal é colocar os seus ficheiros nalgum sítio; removê-lo é eliminá-los. Não existe nenhuma lista para manter sincronizada.

O endereço tem exatamente dois segmentos: o cliente e, depois, o portal. Ambos só podem conter letras minúsculas, números e hífenes, e têm de começar por uma letra ou um número.

```
/portal/{client}/{portal}/
```

Os portais são armazenados no sistema de ficheiros do próprio tenant, numa pasta `Portals`, como `{client}/{portal}/index.html` mais tudo o resto que a página precisar. Aplicam-se as permissões próprias do sistema de ficheiros: quem não pode ler a pasta não tem acesso ao portal.

### Iniciar sessão

Um pedido de portal sem sessão é enviado para um ecrã de início de sessão e devolvido ao portal a seguir. A partir daí, a página passa a ser servida sob essa sessão.

A própria página nunca recebe um token de acesso. Quando faz uma chamada à API, esta é enviada para o próprio endereço do Skills Workflow e o servidor anexa as credenciais. O portal lê os dados como o utilizador com sessão iniciada, e não consegue ler nada que esse utilizador também não conseguisse.

### A que a página tem acesso

A cada portal é atribuído um pequeno SDK. Através dele, a página pode:

- Chamar a API v2 e v3 do Skills Workflow como o utilizador com sessão iniciada
- Ler o perfil do utilizador com sessão iniciada, disponível logo na primeira renderização, sem necessidade de qualquer chamada
- Executar as suas **named queries de extração de dados**, as mesmas que estão por trás dos seus relatórios, e que são o que preenche uma tabela ou um gráfico
- Desenhar os avatares próprios da plataforma para um utilizador, cliente, grupo de clientes ou empresa
- Terminar a sessão

As named queries são filtradas, ordenadas e paginadas na base de dados antes de qualquer linha ser devolvida, e são apenas de leitura. Cada uma é verificada de acordo com a função do utilizador, pelo que um utilizador a quem não foi concedido acesso a um relatório também o vê recusado num portal.

### A sandbox

Um portal é executado sob uma content security policy (política de segurança de conteúdo) deliberadamente restritiva:

- Nenhum script de qualquer outra origem. Tudo o que a página precisa está dentro da pasta do portal.
- Nenhuma chamada para fora do Skills Workflow.
- As imagens têm de vir do Skills Workflow ou estar incorporadas na página.
- O Google Fonts é a única origem externa permitida, para as suas folhas de estilo e ficheiros de tipos de letra.

Por isso, os gráficos são desenhados na própria página.

## Como pedir um portal

1. **Diga para que serve a página e quem a vai abrir.** Um cliente, um público, uma pergunta à qual a página responde.
2. **Identifique os dados.** Que relatório, que valores, que registos. Um portal lê aquilo que as suas queries de extração de dados publicam, pelo que uma pergunta à qual nenhuma query responde precisa primeiro da query.
3. **O portal é gerado.** A skill `client-portal` fornece ao agent todo o contrato: o SDK, a sandbox, a gramática das queries e a regra de que nenhum endpoint ou coluna pode ser inventado. Quando um facto não pode ser confirmado, o agent diz-o.
4. **Reveja o portal em função dos vários estados, e não apenas do caminho feliz.** Um portal tem de apresentar uma resposta vazia, uma resposta recusada e um serviço inacessível como três situações diferentes. Abra-o como um utilizador a quem *não* foi concedido o relatório e verifique o que vê.
5. **Publique-o** na pasta `Portals` do sistema de ficheiros do seu tenant, em `{client}/{portal}/`.

## Regras e comportamento

- Todos os pedidos são autorizados. Não existe nenhum portal anónimo.
- Um portal pertencente a outro tenant é indistinguível de um que nunca existiu. Não é possível enumerar portais nem clientes entre tenants.
- Terminar sessão elimina a cookie de sessão. Tal como no resto da plataforma, isto não invalida o token em si.
- Republicar um ficheiro que já existe tem de o substituir como uma nova versão. Voltar a carregá-lo cria um segundo ficheiro com o mesmo nome, e o portal pode continuar a servir o antigo.
- Um portal é servido apenas em modo de leitura. Não tem armazenamento próprio; tudo o que gravar passa pela API.

## O que ainda não existe

Estes pontos são conhecidos e vale a pena decidir sobre eles antes de disponibilizar os portais a utilizadores clientes:

- **Não existe nenhuma ferramenta de publicação.** Um portal é publicado criando as suas pastas e carregando os seus ficheiros.
- **Um portal não está delimitado ao seu cliente.** Atualmente, o acesso é "tem uma sessão, e a pasta existe". O segmento do cliente no URL não restringe quem o pode abrir, pelo que qualquer utilizador com sessão iniciada pode abrir o portal de qualquer cliente, desde que conheça o seu endereço. Restringir as pastas dos portais por função é, entretanto, o mecanismo a utilizar.
- **Quem pode escrever na pasta `Portals` constitui uma fronteira de segurança.** Um portal executa script no browser de todos os que o abrem. Trate o acesso de escrita a essa pasta como trataria a implementação de código.
- **Um build que gere caminhos absolutos não vai funcionar.** Um portal é servido sob o seu próprio caminho; uma página cujos assets sejam referenciados a partir da raiz do site perde-os todos. Gere caminhos relativos, ou configure o caminho base no momento do build.

## Artigos relacionados

- [Adicionar as suas skills, agents e tools](/docs/ai/ai-extend)
- [Data Extraction API](/docs/build-and-extend/api/data-extraction-api)
- [Assistente de IA](/docs/ai/ai-assistant)
