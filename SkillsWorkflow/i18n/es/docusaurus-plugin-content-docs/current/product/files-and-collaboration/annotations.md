---
id: annotations
title: Anotaciones
description: "Funcionalidades de anotaciones en el preview de archivos de Skills Workflow."
sidebar_label: Anotaciones
sidebar_position: 1
---

# Anotaciones

Las anotaciones permiten colocar feedback visual directamente en el preview de archivos. En Skills Workflow, las anotaciones están disponibles para imágenes, vídeos y PDFs cuando la feature está activa.

## Anotaciones en el preview de archivos

Las anotaciones aparecen en el panel lateral del preview, en el módulo **Annotations**. El módulo solo aparece cuando las anotaciones están activas y el archivo actual se puede anotar.

El botón **+** del módulo **Annotations** inicia una nueva anotación. Hacer clic en el título/header del módulo no abre el editor.

En vídeos, el botón **+** está disponible después de que se carguen los metadatos del preview. En PDFs, está disponible después de que se haya renderizado una página PDF.

Previews soportados:

- Imágenes.
- Vídeos.
- PDFs.

![img-box-shadow-popup](/img/annotations/01-native-preview-sidebar.png)
<figcaption>Módulo Annotations en el preview de archivos</figcaption>

## Toolbar de anotaciones

La toolbar de anotaciones aparece dentro del módulo **Annotations** mientras el editor de anotaciones está activo.

La toolbar incluye undo/redo, Frame, Ellipse, Arrow, Line, Freehand, Highlight y un dropdown de color. Save y Cancel aparecen en la tarjeta de anotación al editar un comentario, o debajo de la toolbar cuando no se está editando ninguna tarjeta de anotación.

![img-box-shadow-sm](/img/annotations/02-annotation-toolbar.png)
<figcaption>Toolbar de anotaciones dentro del módulo Annotations</figcaption>

## Comentarios y panel lateral

Cada tarjeta de anotación muestra autor, fecha/hora, texto, timestamp de vídeo cuando aplica, número de página PDF cuando aplica e indicador de histórico cuando existen versiones anteriores del texto.

En el preview, las anotaciones con un comentario también muestran una etiqueta corta con el comentario junto a su marker.

Seleccionar una anotación en el panel lateral la abre en el preview. Seleccionar una anotación de otro usuario la muestra, pero no presenta el editor inline.

Cuando una anotación se selecciona o está en hover, Skills Workflow enlaza visualmente la tarjeta de anotación con el marker del preview mediante una línea conectora. Hacer hover en una tarjeta destaca el marker relacionado sin cambiar la selección actual. Si ya hay otra anotación seleccionada, el conector seleccionado sigue visible, pero con menor énfasis.

![img-box-shadow](/img/annotations/03-annotation-card.png)
<figcaption>Tarjeta de anotación en el panel lateral</figcaption>

## Reglas de edición

La regla de edición es por anotación:

- Los usuarios pueden editar/eliminar sus propias anotaciones.
- Los usuarios no pueden editar/eliminar anotaciones creadas por otro usuario.
- Una anotación nueva pertenece al usuario que la dibujó.
- Editar el texto de una anotación guarda el texto anterior en el histórico de la anotación.
- Guardar un comentario cierra el editor de anotaciones.
- Cancelar recarga el último estado guardado y descarta el trabajo en curso.

## Cambios sin guardar

Al cerrar el preview mientras el editor de anotaciones está activo, el usuario elige entre Save and close, Discard annotations o Keep editing.

![img-box-shadow-popup](/img/annotations/05-unsaved-annotations-dialog.png)
<figcaption>Aviso de cambios de anotaciones sin guardar</figcaption>

## Comportamiento de vídeo

Las anotaciones de vídeo se asocian a un timestamp. Las anotaciones existentes aparecen sobre el vídeo cuando la reproducción está cerca del timestamp guardado, las marcas de la timeline muestran dónde existen anotaciones y hacer clic en una marca mueve el vídeo a ese timestamp. Abrir el editor congela el frame de vídeo para dibujar la anotación sobre una imagen estable.

![img-box-shadow-popup](/img/annotations/06-video-annotation-timeline.png)
<figcaption>Timeline de anotaciones en vídeo</figcaption>

## Comportamiento de PDF

Las anotaciones de PDF se asocian a la página donde se crearon. Cuando los usuarios cambian de página PDF, las anotaciones permanecen vinculadas a la página correcta.

![img-box-shadow-popup](/img/annotations/07-pdf-page-annotation.png)
<figcaption>Anotación en una página PDF</figcaption>

## Colaboración y feed

Los usuarios que no son propietarios del archivo pueden añadir anotaciones al archivo original. Las anotaciones de distintos revisores se conservan juntas en ese archivo.

Cuando un revisor cierra el preview después de guardar anotaciones, Skills Workflow crea un post en el feed que hace referencia al archivo revisado e incluye los comentarios de la revisión.

![img-box-shadow-popup](/img/annotations/08-annotation-feed-post.png)
<figcaption>Post en el feed creado después de guardar anotaciones</figcaption>

## Configuración

Para activar anotaciones para un cliente:

1. Abrir **Maintenance**.
2. Ir a **Configurations**.
3. Abrir la pestaña **Settings**.
4. En la zona **Features**, activar **Enable annotations**.
5. Guardar la configuración.

![img-box-shadow-popup](/img/annotations/09-enable-annotations.png)
<figcaption>Setting Enable annotations</figcaption>

Notas de configuración:

- La aprobación de páginas PDF es una feature separada y no es obligatoria para usar anotaciones.
- Si los usuarios no ven el panel de anotaciones después de la activación, confirmar que **Enable annotations** está activado y que el archivo se muestra en un preview soportado.
