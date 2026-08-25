---
id: index
title: Annotations
description: "Annotation features in the Skills Workflow file preview."
sidebar_label: Annotations
sidebar_position: 1
---

# Annotations

Annotations let users place visual feedback directly on file previews. In Skills Workflow, annotations are available for images, videos, and PDFs when the feature is enabled.

## File preview annotations

Annotations appear in the file preview side panel under the **Annotations** module. The module is only shown when annotations are enabled and the current file can be annotated.

The **+** button in the **Annotations** module starts a new annotation. Clicking the module title/header does not start the editor.

Supported file previews:

- Images.
- Videos.
- PDFs.

![img-box-shadow-popup](/img/annotations/01-native-preview-sidebar.png)
<figcaption>Annotations module in the file preview</figcaption>

## Annotation toolbar

The annotation toolbar is shown inside the **Annotations** module while the annotation editor is active. It no longer floats over the preview.

The toolbar provides undo/redo, Frame, Ellipse, Arrow, Line, Freehand, Highlight, and a color dropdown. Save and Cancel are shown below the annotation being edited.

![img-box-shadow-sm](/img/annotations/02-annotation-toolbar.png)
<figcaption>Annotation toolbar inside the Annotations module</figcaption>

## Comments and side panel

Each annotation card shows the author, date/time, comment text, video timestamp when applicable, PDF page number when applicable, and a history indicator when previous text versions exist.

Selecting an annotation in the side panel opens it on the preview. Selecting another user's annotation shows it, but does not show the inline editor.

When an annotation is selected or hovered, Skills Workflow visually links the annotation card to the marker on the preview with a connector line. Hovering a card highlights the related marker without changing the current selection. If another annotation is already selected, the selected connector remains visible but muted.

![img-box-shadow-sm](/img/annotations/03-annotation-card.png)
<figcaption>Annotation card in the side panel</figcaption>

## Editing rules

The edit rule is per annotation:

- Users can edit/delete their own annotations.
- Users cannot edit/delete annotations created by another user.
- A new annotation belongs to the user who drew it.
- Editing annotation text records the previous text in the annotation history.
- Saving a comment closes the annotation editor.
- Cancelling reloads the last saved annotation state and discards work in progress.

## Unsaved changes

When closing the preview while the annotation editor is active, the user chooses between Save and close, Discard annotations, or Keep editing.

![img-box-shadow-popup](/img/annotations/05-unsaved-annotations-dialog.png)
<figcaption>Unsaved annotations dialog</figcaption>

## Video behavior

Video annotations are tied to a timestamp. Existing annotations appear over the video when playback is near the stored timestamp, timeline ticks show where annotations exist, and clicking a tick seeks the video to that timestamp. Opening the editor freezes the video frame so the annotation is drawn on a stable image.

![img-box-shadow-popup](/img/annotations/06-video-annotation-timeline.png)
<figcaption>Video annotation timeline</figcaption>

## PDF behavior

PDF annotations are associated with the page where they were created. When users move between PDF pages, the annotations remain linked to the correct page.

![img-box-shadow-popup](/img/annotations/07-pdf-page-annotation.png)
<figcaption>PDF page annotation</figcaption>

## Collaboration and feed

Annotations made by users who do not own the file are saved on the original file, not on a duplicated temporary copy. When those changes are saved on preview close, Skills Workflow creates a feed post that references the reviewed original file.

Multiple reviewers can add annotations to the same original file.

![img-box-shadow-popup](/img/annotations/08-annotation-feed-post.png)
<figcaption>Feed post created after annotations are saved</figcaption>

## Configuration

To enable annotations for a client:

1. Open **Maintenance**.
2. Go to **Configurations**.
3. Open the **Settings** tab.
4. In the **Features** area, enable **Enable annotations**.
5. Save the configuration.

![img-box-shadow-popup](/img/annotations/09-enable-annotations.png)
<figcaption>Enable annotations setting</figcaption>

Configuration notes:

- PDF page approval is a separate feature and is not required to use annotations.
- If users cannot see the annotation panel after activation, confirm that the file type is supported and that the configuration was saved for the correct environment/client.
