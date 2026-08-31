---
id: timesheet-timer
title: Cronómetro de Time Sheet
sidebar_label: Cronómetro de Time Sheet
sidebar_position: 5
---

O Cronómetro de Timesheet permite-lhe registar em tempo real o tempo que dedica a um documento. Inicie um cronómetro quando começar a trabalhar, pause-o quando fizer uma pausa e pare-o quando terminar. O tempo registado pode então ser submetido como uma entrada de timesheet.

:::note
O Cronómetro de Timesheet deve ser ativado pelo seu administrador em **System Settings > Behavior > Enable Timesheet Timer**.
:::

## Iniciar o Cronómetro

1. Procure o **ícone de timesheet** na barra do menu superior.
2. Passe o cursor sobre o ícone para revelar as opções do cronómetro.

<figure>

![img-box-shadow](/img/university/timesheets/timer-menu-hover.png)
<figcaption>Popover do cronómetro com opções disponíveis</figcaption>
</figure>

3. Verá duas opções:
   - **Start Current Document** — inicia o registo do tempo para o documento que está a visualizar. Esta opção só está disponível quando se encontra dentro de um documento compatível (Projeto, Trabalho, Entregável, Cliente ou Contrato).
   - **Search Document to Start** — abre um popup de pesquisa para que possa encontrar e selecionar qualquer documento para registar.

4. Clique numa das opções para iniciar o cronómetro.

## Cronómetro em Funcionamento

Assim que o cronómetro é iniciado, a barra do menu superior mostra uma **pílula do cronómetro** que apresenta o tempo decorrido no formato `HH:MM:SS`.

<figure>

![img-box-shadow](/img/university/timesheets/timer-running.png)
<figcaption>Cronómetro em funcionamento com o tempo decorrido</figcaption>
</figure>

A pílula do cronómetro contém:

| Elemento | Descrição |
|---|---|
| **Botão de parar** (vermelho) | Para o cronómetro e abre o formulário de submissão |
| **Botão de reproduzir** (verde) | Apenas visível quando o cronómetro está em pausa — retoma o cronómetro |
| **Botão de ir para** | Navega para o documento que está a ser registado |
| **Apresentação do tempo** | Mostra o tempo decorrido. Clique para pausar o cronómetro |

Enquanto o cronómetro está em funcionamento, o **título do separador do navegador** também se atualiza para mostrar o tempo decorrido e o nome do documento (por exemplo, `⏱ 01:23:45 - O Meu Projeto`).

:::tip
Passe o cursor sobre a pílula do cronómetro para ver uma tooltip com o nome e tipo do documento.
:::

## Pausar e Retomar

- Para **pausar** o cronómetro, clique na apresentação do tempo. O texto do tempo ficará esbatido e aparecerá um indicador de pausa.
- Para **retomar**, clique no botão verde de reproduzir que aparece quando está em pausa.

<figure>

![img-box-shadow](/img/university/timesheets/timer-paused.png)
<figcaption>Cronómetro em estado de pausa</figcaption>
</figure>

Pode pausar e retomar tantas vezes quantas necessitar. Cada segmento de sessão é registado separadamente.

## Parar o Cronómetro

1. Clique no **botão vermelho de parar** na pílula do cronómetro.
2. Abrir-se-á um **formulário emergente** onde pode rever e submeter o tempo registado.

<figure>

![img-box-shadow](/img/university/timesheets/timer-stop-popup.png)
<figcaption>Formulário de submissão de timesheet após parar o cronómetro</figcaption>
</figure>

3. Reveja o tempo registado, ajuste se necessário e submeta a entrada na sua timesheet.

## Mudar de Documento

Se iniciar um cronómetro enquanto outro já está em funcionamento, aparecerá um diálogo de confirmação pedindo-lhe que escolha:

- **Start New** — para o cronómetro atual e inicia um novo no documento selecionado.
- **Continue Timer** — mantém o cronómetro atual em funcionamento e fecha o diálogo.

<figure>

![img-box-shadow](/img/university/timesheets/timer-already-running.png)
<figcaption>Confirmação ao iniciar um novo cronómetro enquanto um está ativo</figcaption>
</figure>

## Alerta de Horas Extra

Se o seu cronómetro atingir as **8 horas**, o sistema notificá-lo-á com uma notificação do navegador e um diálogo de confirmação na aplicação. Pode optar por continuar o registo ou parar o cronómetro.

## Persistência do Cronómetro

O estado do seu cronómetro é **guardado automaticamente** no servidor. Se fechar o navegador, atualizar a página ou mudar de dispositivo, o seu cronómetro retomará de onde ficou quando voltar a iniciar sessão.

## Tipos de Documento Compatíveis

A opção "Start Current Document" está disponível ao visualizar qualquer um dos seguintes tipos de documento:

- Projetos
- Trabalhos
- Entregáveis
- Clientes
- Contratos

Para registar tempo noutros documentos, use a opção **Search Document to Start**.

## Artigos relacionados

- [Preencher Time Sheets](/docs/product/time/timesheets/filling-time-sheets)
