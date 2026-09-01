---
id: brief-validator
title: Validador de Briefs
description: "Comprueba si un brief de marketing tiene la información necesaria para preparar un entregable para el cliente, usando las reglas de briefing del propio cliente."
sidebar_label: Validador de Briefs
sidebar_position: 6
---

El Validador de Briefs revisa un brief de marketing antes de que empiece el trabajo. Identifica la información que falta o no está clara y comprueba el brief con las instrucciones que la agencia mantiene para ese cliente. Solo da feedback; no crea ni modifica un entregable.

## Disponibilidad

Un administrador de la agencia debe añadir el Validador de Briefs al Asistente de IA y habilitar la herramienta `get_client_brief_instructions`. Para validar con reglas específicas de un cliente, proporciona el contexto del cliente junto con el brief. Sin ese contexto, el agente puede dar feedback general, pero no puede recuperar las instrucciones de ese cliente.

## Cómo usarlo

1. Abre el [Asistente de IA](/docs/ai/ai-assistant) y selecciona **Validador de Briefs**.
2. Pega el brief e identifica al cliente, o mantén disponible el contexto del cliente correspondiente.
3. Pide al agente que valide el brief.
4. Añade los detalles que identifique y pídele que vuelva a validar el brief.

El resultado debe centrarse en lo que falta o no está claro. No debe inventar requisitos ni empezar a crear el asset de marketing.

## Añadir reglas de briefing por cliente

Crea el archivo de instrucciones en el área de archivos del cliente comercial seleccionado. La carpeta `ai-instructions` se encuentra directamente en la carpeta raíz de ese cliente; coloca allí el archivo `brief-instructions.md`.

![img](/img/ai/brief-validator-client-instructions-location.png)
<figcaption>Sustituye este placeholder por una captura que muestre el árbol de archivos del cliente, la carpeta <code>ai-instructions</code> y el archivo <code>brief-instructions.md</code>.</figcaption>

Usa los nombres de carpeta y archivo que muestra la imagen. Es un archivo del cliente, no una skill compartida por el tenant ni un adjunto del chat.

Mantén las instrucciones centradas en la información que necesita un brief utilizable. Indica de forma explícita cuándo un valor puede faltar, como `No call to action` o `No specific client rules`, para que el agente no lo pida sin necesidad.

## Cómo se compone la validación

1. El usuario selecciona **Validador de Briefs** y proporciona un brief con el contexto del cliente.
2. El agente llama a `get_client_brief_instructions` para ese cliente.
3. La herramienta abre el área de archivos del cliente, encuentra la carpeta `ai-instructions` y lee `brief-instructions.md`.
4. La herramienta devuelve el contenido del archivo al agente. El agente usa esas reglas para revisar el brief y devuelve el feedback de validación.

La herramienta busca solo en esta ubicación. No busca en otros archivos del cliente, adjuntos del chat ni en la carpeta `$ai-agents/skills` del tenant. Si la carpeta o el archivo no existen, están vacíos o no se pueden leer, las reglas específicas del cliente no están disponibles y el agente solo puede dar feedback general sobre la calidad del brief.

## Lo que recibe el usuario

Con la política de ejemplo siguiente, un brief completo devuelve `passed` con un resumen. Un brief con información que falta o no está clara devuelve `failed` y pide solo los detalles necesarios. En ambos casos, el agente no crea el entregable.

## Ejemplo de archivo de instrucciones del cliente

El siguiente ejemplo es un estándar de brief de marketing que una agencia puede adaptar para un cliente. No es una plantilla universal: añade los requisitos de marca, legales y de aprobación propios del cliente cuando correspondan.

```md
# Instrucciones del brief

Valida si el brief contiene información suficiente para preparar un entregable
de marketing claro. No crees el entregable hasta que el brief pase.

Un brief debe identificar:

1. **Entregable** — por ejemplo, una publicación de feed para Instagram, un correo o texto para una landing page.
2. **Objetivo** — el resultado que debe lograr el entregable.
3. **Audiencia** — a quién va dirigido.
4. **Mensaje principal** — la idea que debe comunicar.
5. **Llamada a la acción** — lo que la audiencia debe hacer después, o `No call to action`.
6. **Reglas del cliente** — tono, texto obligatorio, restricciones o `No specific client rules`.
7. **Fecha límite** — una fecha o momento específico.

Devuelve `failed` cuando falte un elemento obligatorio o no esté claro. Enumera
solo esos elementos y pide la información necesaria. Devuelve `passed` cuando
el brief esté completo y resume el brief aprobado. No inventes detalles que faltan.
```

Por ejemplo, `We need some content` no describe un entregable utilizable. `We need one Instagram feed post` es lo bastante específico para que la validación continúe.

## Artículos relacionados

- [Asistente de IA](/docs/ai/ai-assistant)
- [Agente de Documentos](/docs/ai/agents/document-agent)
- [Añadir tus propias skills, agents y tools](/docs/ai/ai-extend)
