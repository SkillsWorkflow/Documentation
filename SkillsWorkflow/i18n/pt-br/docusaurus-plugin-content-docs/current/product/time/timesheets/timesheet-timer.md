---
id: timesheet-timer
title: Cronômetro de Timesheet
sidebar_label: 5. Cronômetro de Timesheet
sidebar_position: 5
---

O Cronômetro de Timesheet permite que você registre em tempo real o tempo que dedica a um documento. Inicie um cronômetro quando começar a trabalhar, pause-o quando fizer uma pausa e pare-o quando terminar. O tempo registrado pode então ser enviado como uma entrada de timesheet.

:::note
O Cronômetro de Timesheet deve ser habilitado pelo seu administrador em **System Settings > Behavior > Enable Timesheet Timer**.
:::

## Iniciar o Cronômetro

1. Procure o **ícone de timesheet** na barra do menu superior.
2. Passe o cursor sobre o ícone para revelar as opções do cronômetro.

<figure>

![img-box-shadow](/img/university/timesheets/timer-menu-hover.png)
<figcaption>Popover do cronômetro com opções disponíveis</figcaption>
</figure>

3. Você verá duas opções:
   - **Start Current Document** — inicia o registro do tempo para o documento que você está visualizando. Esta opção só está disponível quando você está dentro de um documento compatível (Projeto, Job, Entregável, Cliente ou Contrato).
   - **Search Document to Start** — abre um popup de pesquisa para que você possa encontrar e selecionar qualquer documento para registrar.

4. Clique em uma das opções para iniciar o cronômetro.

## Cronômetro em Funcionamento

Assim que o cronômetro é iniciado, a barra do menu superior mostra uma **pílula do cronômetro** exibindo o tempo decorrido no formato `HH:MM:SS`.

<figure>

![img-box-shadow](/img/university/timesheets/timer-running.png)
<figcaption>Cronômetro em funcionamento com o tempo decorrido</figcaption>
</figure>

A pílula do cronômetro contém:

| Elemento | Descrição |
|---|---|
| **Botão de parar** (vermelho) | Para o cronômetro e abre o formulário de envio |
| **Botão de reproduzir** (verde) | Visível apenas quando o cronômetro está pausado — retoma o cronômetro |
| **Botão de ir para** | Navega para o documento que está sendo registrado |
| **Exibição do tempo** | Mostra o tempo decorrido. Clique para pausar o cronômetro |

Enquanto o cronômetro está em funcionamento, o **título da aba do navegador** também se atualiza para mostrar o tempo decorrido e o nome do documento (por exemplo, `⏱ 01:23:45 - Meu Projeto`).

:::tip
Passe o cursor sobre a pílula do cronômetro para ver uma tooltip com o nome e tipo do documento.
:::

## Pausar e Retomar

- Para **pausar** o cronômetro, clique na exibição do tempo. O texto do tempo ficará esmaecido e aparecerá um indicador de pausa.
- Para **retomar**, clique no botão verde de reproduzir que aparece quando está pausado.

<figure>

![img-box-shadow](/img/university/timesheets/timer-paused.png)
<figcaption>Cronômetro em estado de pausa</figcaption>
</figure>

Você pode pausar e retomar quantas vezes precisar. Cada segmento de sessão é registrado separadamente.

## Parar o Cronômetro

1. Clique no **botão vermelho de parar** na pílula do cronômetro.
2. Um **formulário pop-up** será aberto onde você pode revisar e enviar o tempo registrado.

<figure>

![img-box-shadow](/img/university/timesheets/timer-stop-popup.png)
<figcaption>Formulário de envio de timesheet após parar o cronômetro</figcaption>
</figure>

3. Revise o tempo registrado, ajuste se necessário e envie a entrada para sua timesheet.

## Trocar de Documento

Se você iniciar um cronômetro enquanto outro já está em funcionamento, aparecerá um diálogo de confirmação pedindo que você escolha:

- **Start New** — para o cronômetro atual e inicia um novo no documento selecionado.
- **Continue Timer** — mantém o cronômetro atual em funcionamento e fecha o diálogo.

<figure>

![img-box-shadow](/img/university/timesheets/timer-already-running.png)
<figcaption>Confirmação ao iniciar um novo cronômetro enquanto um está ativo</figcaption>
</figure>

## Alerta de Hora Extra

Se o seu cronômetro atingir **8 horas**, o sistema notificará você com uma notificação do navegador e um diálogo de confirmação no aplicativo. Você pode optar por continuar o registro ou parar o cronômetro.

## Persistência do Cronômetro

O estado do seu cronômetro é **salvo automaticamente** no servidor. Se você fechar o navegador, atualizar a página ou trocar de dispositivo, seu cronômetro retomará de onde parou quando você fizer login novamente.

## Tipos de Documento Compatíveis

A opção "Start Current Document" está disponível ao visualizar qualquer um dos seguintes tipos de documento:

- Projetos
- Jobs
- Entregáveis
- Clientes
- Contratos

Para registrar tempo em outros documentos, use a opção **Search Document to Start**.
