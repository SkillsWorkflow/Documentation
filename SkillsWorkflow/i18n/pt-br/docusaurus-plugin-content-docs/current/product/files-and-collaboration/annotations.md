---
id: annotations
title: Anotações
description: "Funcionalidades de anotações no preview de arquivos do Skills Workflow."
sidebar_label: Anotações
sidebar_position: 1
---

# Anotações

As anotações permitem colocar feedback visual diretamente no preview de arquivos. No Skills Workflow, as anotações estão disponíveis para imagens, vídeos e PDFs quando a feature está ativa.

## Anotações no preview de arquivos

As anotações aparecem no painel lateral do preview de arquivos, no módulo **Annotations**. O módulo só aparece quando as anotações estão ativas e o arquivo atual pode ser anotado.

O botão **+** no módulo **Annotations** inicia uma nova anotação. Clicar no título/header do módulo não abre o editor.

Em vídeos, o botão **+** fica disponível depois que os metadados do preview são carregados. Em PDFs, fica disponível depois que uma página PDF é renderizada.

Previews suportados:

- Imagens.
- Vídeos.
- PDFs.

![img-box-shadow-popup](/img/annotations/01-native-preview-sidebar.png)
<figcaption>Módulo Annotations no preview de arquivos</figcaption>

## Toolbar de anotações

A toolbar de anotações aparece dentro do módulo **Annotations** enquanto o editor de anotações está ativo.

A toolbar disponibiliza undo/redo, Frame, Ellipse, Arrow, Line, Freehand, Highlight e um dropdown de cor. Save e Cancel aparecem no cartão da anotação ao editar um comentário ou abaixo da toolbar quando nenhum cartão de anotação está sendo editado.

![img-box-shadow-sm](/img/annotations/02-annotation-toolbar.png)
<figcaption>Toolbar de anotações dentro do módulo Annotations</figcaption>

## Comentários e painel lateral

Cada cartão de anotação mostra autor, data/hora, texto, timestamp de vídeo quando aplicável, número de página de PDF quando aplicável e indicador de histórico quando existem versões anteriores do texto.

No preview, as anotações com comentário também exibem uma etiqueta curta com o comentário ao lado do respectivo marker.

Selecionar uma anotação no painel lateral abre a anotação no preview. Selecionar uma anotação de outro usuário a mostra, mas não apresenta o editor inline.

Quando uma anotação é selecionada ou está em hover, o Skills Workflow liga visualmente o cartão da anotação ao marker no preview com uma linha conectora. Fazer hover em um cartão destaca o marker relacionado sem alterar a seleção atual. Se já existir outra anotação selecionada, o conector selecionado continua visível mas com menos destaque.

![img-box-shadow](/img/annotations/03-annotation-card.png)
<figcaption>Cartão de anotação no painel lateral</figcaption>

## Regras de edição

A regra de edição é por anotação:

- Os usuários podem editar/apagar suas próprias anotações.
- Os usuários não podem editar/apagar anotações criadas por outro usuário.
- Uma anotação nova pertence ao usuário que a desenhou.
- Editar o texto de uma anotação grava o texto anterior no histórico da anotação.
- Salvar um comentário fecha o editor de anotações.
- Cancelar recarrega o último estado salvo e descarta o trabalho em progresso.

## Alterações por salvar

Ao fechar o preview enquanto o editor de anotações está ativo, o usuário escolhe entre Save and close, Discard annotations ou Keep editing.

![img-box-shadow-popup](/img/annotations/05-unsaved-annotations-dialog.png)
<figcaption>Aviso de alterações de anotações por salvar</figcaption>

## Comportamento de vídeo

As anotações de vídeo ficam associadas a um timestamp. As anotações existentes aparecem sobre o vídeo quando a reprodução está perto do timestamp salvo, as marcas na timeline mostram onde existem anotações e clicar em uma marca move o vídeo para esse timestamp. Abrir o editor congela o frame de vídeo para desenhar a anotação em uma imagem estável.

![img-box-shadow-popup](/img/annotations/06-video-annotation-timeline.png)
<figcaption>Timeline de anotações em vídeo</figcaption>

## Comportamento de PDF

As anotações de PDF ficam associadas à página onde foram criadas. Quando os usuários mudam de página PDF, as anotações continuam associadas à página correta.

![img-box-shadow-popup](/img/annotations/07-pdf-page-annotation.png)
<figcaption>Anotação em uma página PDF</figcaption>

## Colaboração e feed

Os usuários que não são donos do arquivo podem adicionar anotações ao arquivo original. As anotações de diferentes revisores ficam salvas juntas nesse arquivo.

Quando um revisor fecha o preview depois de salvar anotações, o Skills Workflow cria um post no feed que referencia o arquivo revisado e inclui os comentários da revisão.

![img-box-shadow-popup](/img/annotations/08-annotation-feed-post.png)
<figcaption>Post no feed criado depois de salvar anotações</figcaption>

## Configuração

Para ativar anotações para um cliente:

1. Abrir **Maintenance**.
2. Ir para **Configurations**.
3. Abrir a aba **Settings**.
4. Na área **Features**, ativar **Enable annotations**.
5. Salvar a configuração.

![img-box-shadow-popup](/img/annotations/09-enable-annotations.png)
<figcaption>Setting Enable annotations</figcaption>

Notas de configuração:

- A aprovação de páginas PDF é uma feature separada e não é obrigatória para usar anotações.
- Se os usuários não virem o painel de anotações depois da ativação, confirmar que **Enable annotations** está ativado e que o arquivo é exibido em um preview suportado.

## Artigos relacionados

- [Usando o Feed](/docs/product/files-and-collaboration/using-feed)
