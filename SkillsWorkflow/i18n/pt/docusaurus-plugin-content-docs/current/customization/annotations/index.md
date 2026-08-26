---
id: index
title: Anotações
description: "Funcionalidades de anotações no preview de ficheiros do Skills Workflow."
sidebar_label: Anotações
sidebar_position: 1
---

# Anotações

As anotações permitem colocar feedback visual diretamente no preview de ficheiros. No Skills Workflow, as anotações estão disponíveis para imagens, vídeos e PDFs quando a feature está ativa.

## Anotações no preview de ficheiros

As anotações aparecem no painel lateral do preview de ficheiros, no módulo **Annotations**. O módulo só aparece quando as anotações estão ativas e o ficheiro atual pode ser anotado.

O botão **+** no módulo **Annotations** inicia uma nova anotação. Clicar no título/header do módulo não abre o editor.

Em vídeos, o botão **+** fica disponível depois de os metadados do preview carregarem. Em PDFs, fica disponível depois de uma página PDF ser renderizada.

Previews suportados:

- Imagens.
- Vídeos.
- PDFs.

![img-box-shadow-popup](/img/annotations/01-native-preview-sidebar.png)
<figcaption>Módulo Annotations no preview de ficheiros</figcaption>

## Toolbar de anotações

A toolbar de anotações aparece dentro do módulo **Annotations** enquanto o editor de anotações está ativo.

A toolbar disponibiliza undo/redo, Frame, Ellipse, Arrow, Line, Freehand, Highlight e um dropdown de cor. Save e Cancel aparecem no cartão da anotação ao editar um comentário ou abaixo da toolbar quando não está a ser editado nenhum cartão de anotação.

![img-box-shadow-sm](/img/annotations/02-annotation-toolbar.png)
<figcaption>Toolbar de anotações dentro do módulo Annotations</figcaption>

## Comentários e painel lateral

Cada cartão de anotação mostra autor, data/hora, texto, timestamp de vídeo quando aplicável, número de página de PDF quando aplicável e indicador de histórico quando existem versões anteriores do texto.

No preview, as anotações com comentário também apresentam uma etiqueta curta com o comentário junto ao respetivo marker.

Selecionar uma anotação no painel lateral abre-a no preview. Selecionar uma anotação de outro utilizador mostra-a, mas não apresenta o editor inline.

Quando uma anotação é selecionada ou está em hover, o Skills Workflow liga visualmente o cartão da anotação ao marker no preview com uma linha conectora. Fazer hover num cartão destaca o marker relacionado sem alterar a seleção atual. Se já existir outra anotação selecionada, o conector selecionado continua visível mas com menos destaque.

![img-box-shadow-sm](/img/annotations/03-annotation-card.png)
<figcaption>Cartão de anotação no painel lateral</figcaption>

## Regras de edição

A regra de edição é por anotação:

- Os utilizadores podem editar/apagar as suas próprias anotações.
- Os utilizadores não podem editar/apagar anotações criadas por outro utilizador.
- Uma anotação nova pertence ao utilizador que a desenhou.
- Editar o texto de uma anotação grava o texto anterior no histórico da anotação.
- Guardar um comentário fecha o editor de anotações.
- Cancelar recarrega o último estado guardado e descarta o trabalho em progresso.

## Alterações por guardar

Ao fechar o preview enquanto o editor de anotações está ativo, o utilizador escolhe entre Save and close, Discard annotations ou Keep editing.

![img-box-shadow-popup](/img/annotations/05-unsaved-annotations-dialog.png)
<figcaption>Aviso de alterações de anotações por guardar</figcaption>

## Comportamento de vídeo

As anotações de vídeo ficam associadas a um timestamp. As anotações existentes aparecem sobre o vídeo quando a reprodução está perto do timestamp guardado, as marcas na timeline mostram onde existem anotações e clicar numa marca move o vídeo para esse timestamp. Abrir o editor congela o frame de vídeo para desenhar a anotação numa imagem estável.

![img-box-shadow-popup](/img/annotations/06-video-annotation-timeline.png)
<figcaption>Timeline de anotações em vídeo</figcaption>

## Comportamento de PDF

As anotações de PDF ficam associadas à página onde foram criadas. Quando os utilizadores mudam de página PDF, as anotações continuam associadas à página correta.

![img-box-shadow-popup](/img/annotations/07-pdf-page-annotation.png)
<figcaption>Anotação numa página PDF</figcaption>

## Colaboração e feed

Os utilizadores que não são donos do ficheiro podem adicionar anotações ao ficheiro original. As anotações de diferentes revisores ficam guardadas juntas nesse ficheiro.

Quando um revisor fecha o preview depois de guardar anotações, o Skills Workflow cria um post no feed que referencia o ficheiro revisto e inclui os comentários da revisão.

![img-box-shadow-popup](/img/annotations/08-annotation-feed-post.png)
<figcaption>Post no feed criado depois de guardar anotações</figcaption>

## Configuração

Para ativar anotações para um cliente:

1. Abrir **Maintenance**.
2. Ir a **Configurations**.
3. Abrir o tab **Settings**.
4. Na zona **Features**, ativar **Enable annotations**.
5. Guardar a configuração.

![img-box-shadow-popup](/img/annotations/09-enable-annotations.png)
<figcaption>Setting Enable annotations</figcaption>

Notas de configuração:

- A aprovação de páginas PDF é uma feature separada e não é obrigatória para usar anotações.
- Se os utilizadores não virem o painel de anotações depois da ativação, confirmar que **Enable annotations** está ativo e que o ficheiro é mostrado num preview suportado.
