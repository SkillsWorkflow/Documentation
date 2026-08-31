---
id: transferring-hours-between-projects
title: Transferir horas entre projetos ou jobs
description: Mova lançamentos de timesheet selecionados para outro projeto ou job.
sidebar_label: Transferir horas entre projetos ou jobs
sidebar_position: 6
---

Use **Transfer Hours** para corrigir timesheets lançados no projeto ou job incorreto. A transferência move cada lançamento selecionado por completo para um único destino; ela não copia as horas nem divide um lançamento entre vários destinos.

## Antes de começar

- Você precisa ter acesso à ação **Transfer Hours**. Se o ícone de lápis não estiver disponível no workspace Time Sheets, peça ao administrador para confirmar se o seu perfil tem a role `TransferWrite`.
- Confira as datas, os usuários e o destino antes de salvar. Uma transferência altera o projeto ou job dos lançamentos selecionados.
- O destino precisa ser válido durante todo o período dos timesheets selecionados. Por exemplo, se os lançamentos selecionados forem de 3 a 7 de junho, a data de início do projeto ou job de destino deve ser 3 de junho ou anterior e a data de término deve ser 7 de junho ou posterior.

## Transferir as horas

1. Abra o **Project** ou **Job** de origem e, em seguida, o workspace **Time Sheets**.
2. Filtre a grade para mostrar os timesheets que você precisa mover. Filtre por **Date** e **User**, conforme necessário.

<figure>
  <img src="/img/university/timesheets/transfer-hours-timesheets-list.png" alt="Workspace Time Sheets com linhas selecionadas para transferência" />
  <figcaption>Selecione os timesheets que deseja transferir.</figcaption>
</figure>

3. Selecione as linhas de timesheet relevantes.
4. Selecione o ícone de lápis, **Transfer Hours**.
5. Na janela pop-up, pesquise e selecione um único destino. Você pode selecionar um **Project** ou um **Job**. Os resultados mostram a empresa, o cliente, o fee, o projeto, o job e as datas de início e término para ajudar a confirmar o destino.

<figure>
  <img src="/img/university/timesheets/transfer-hours-popup.png" alt="Janela Transfer Hours com um projeto ou job de destino selecionado" />
  <figcaption>Escolha o destino e salve a transferência.</figcaption>
</figure>

6. Selecione **Save**.

A grade Time Sheets é atualizada quando a janela pop-up é fechada. Confirme que os lançamentos selecionados agora mostram o projeto ou job pretendido.

:::tip
Ao transferir mais de um timesheet, selecione lançamentos que tenham o mesmo destino e cujo intervalo completo de datas seja coberto por esse destino. Faça transferências separadas quando os lançamentos precisarem de destinos ou intervalos de datas diferentes.
:::

## Por que um destino pode não aparecer

A janela de transferência retorna apenas destinos elegíveis cujo período cubra a data mais antiga e a mais recente dos timesheets selecionados. Se não encontrar um projeto ou job, confira primeiro as datas de início e término e, depois, reduza o intervalo de datas selecionado ou escolha um destino que o cubra.

## Artigos relacionados

- [Preencher Time Sheets](/docs/product/time/timesheets/filling-time-sheets)
