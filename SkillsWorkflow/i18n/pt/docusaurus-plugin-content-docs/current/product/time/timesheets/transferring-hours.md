---
id: transferring-hours-between-projects
title: Transferir horas entre projetos ou jobs
description: Mova entradas de timesheet selecionadas para outro projeto ou job.
sidebar_label: Transferir horas entre projetos ou jobs
sidebar_position: 6
---

Utilize **Transfer Hours** para corrigir timesheets registadas no projeto ou job errado. A transferência move cada entrada selecionada, na totalidade, para um único destino; não copia horas nem divide uma entrada entre vários destinos.

## Antes de começar

- Precisa de acesso à ação **Transfer Hours**. Se o ícone de lápis não estiver disponível no workspace Time Sheets, peça ao administrador para confirmar que o seu perfil tem a role `TransferWrite`.
- Confirme as datas, os utilizadores e o destino antes de gravar. Uma transferência altera o projeto ou job das entradas selecionadas.
- O destino tem de ser válido durante todo o período das timesheets selecionadas. Por exemplo, se as entradas selecionadas decorrerem de 3 a 7 de junho, a data de início do projeto ou job de destino deve ser 3 de junho ou anterior e a data de fim deve ser 7 de junho ou posterior.

## Transferir as horas

1. Abra o **Project** ou **Job** de origem e, em seguida, o respetivo workspace **Time Sheets**.
2. Filtre a grelha até mostrar as timesheets que pretende mover. Filtre por **Date** e **User**, conforme necessário.

<figure>
  <img src="/img/university/timesheets/transfer-hours-timesheets-list.png" alt="Workspace Time Sheets com linhas selecionadas para transferência" />
  <figcaption>Selecione as timesheets a transferir.</figcaption>
</figure>

3. Selecione as linhas de timesheet relevantes.
4. Selecione o ícone de lápis, **Transfer Hours**.
5. Na janela pop-up, pesquise e selecione um único destino. Pode selecionar um **Project** ou um **Job**. Os resultados mostram a empresa, o cliente, a fee, o projeto, o job e as datas de início e fim, para ajudar a confirmar o destino.

<figure>
  <img src="/img/university/timesheets/transfer-hours-popup.png" alt="Janela Transfer Hours com um projeto ou job de destino selecionado" />
  <figcaption>Escolha o destino e grave a transferência.</figcaption>
</figure>

6. Selecione **Save**.

A grelha Time Sheets é atualizada quando a janela pop-up fecha. Confirme que as entradas selecionadas apresentam agora o projeto ou job pretendido.

:::tip
Quando transferir mais do que uma timesheet, selecione entradas que tenham o mesmo destino e cujo intervalo completo de datas seja abrangido por esse destino. Faça transferências separadas quando as entradas tiverem destinos ou intervalos de datas diferentes.
:::

## Porque é que um destino pode não aparecer

A janela de transferência apenas devolve destinos elegíveis cujo período cubra a data mais antiga e a mais recente das timesheets selecionadas. Se não encontrar um projeto ou job, confirme primeiro as datas de início e fim e, depois, reduza o intervalo de datas selecionado ou escolha um destino que o abranja.

## Artigos relacionados

- [Preencher Time Sheets](/docs/product/time/timesheets/filling-time-sheets)
