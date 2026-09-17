---
id: maintenance
title: Maintenance
sidebar_label: Maintenance
sidebar_position: 0
---

## Resumen

Maintenance es el módulo de back-office donde administradores y consultores configuran Skills Workflow: estructura organizativa, permisos, precios, etapas de workflow, pantallas, integraciones y otros datos de referencia. El **catálogo de Maintenance** organiza todas las entradas de configuración en áreas, de modo que una pantalla concreta pueda encontrarse navegando por su área o buscándola directamente, en lugar de recorrer un único menú extenso.

## Acceder a Maintenance

1. Haga clic en su avatar de usuario, en la esquina superior derecha del menú principal.
2. Seleccione **Maintenance**.

<figure>

![img-box-shadow](/img/maintenance/catalogue-browse-by-area.png)
<figcaption>El catálogo de Maintenance, con Organisation & locations seleccionada en Browse by area.</figcaption>
</figure>

## Cómo usar el catálogo

### Browse by area

El panel **Browse by area**, a la izquierda, lista todas las categorías de maintenance, cada una con el recuento de entradas de configuración que contiene. Seleccionar una categoría carga sus entradas en **Configuration entries**. Consulte la tabla de áreas más abajo para ver la lista completa.

<figure>

![img-box-shadow](/img/maintenance/catalogue-projects-work-delivery.png)
<figcaption>El mismo catálogo con Projects, work & delivery seleccionada, mostrando sus 16 entradas de configuración.</figcaption>
</figure>

### Buscar en todas las entradas

El campo **Search all Maintenance entries** busca en todas las áreas a la vez, no solo en la seleccionada. Cada resultado muestra el área a la que pertenece, de modo que una entrada pueda abrirse sin conocer antes su categoría.

### Abrir un workspace de configuración

Seleccionar una tarjeta en Configuration entries abre el workspace de configuración de esa entrada:

- Una cuadrícula de datos lista los registros de la entrada, con controles para añadir un registro, filtrar, buscar dentro de la cuadrícula y agrupar filas por una columna.
- El recuento de filas se muestra en la parte inferior de la cuadrícula.
- Seleccionar una fila abre un panel de registro con los campos de ese registro.
- Los cambios se guardan desde el panel de registro.
- Los controles anterior y siguiente del panel recorren los registros de la cuadrícula sin cerrar el panel.

## Áreas del catálogo de Maintenance

| Área | Entradas | Entradas de configuración |
|---|---|---|
| Organisation & locations | 9 | Cities, Companies, Countries, Departments, Disciplines, Divisions, Idiom Groups, Idioms, Languages |
| People & permissions | 12 | Achievements, Employees, [Roles](/docs/administration/system-roles-profiles), Teams, [Typologies](/docs/administration/create-typologies), Typology Groups, User Types, User Typology History, [Users](/docs/administration/users/create-user), Users and Clients, Users Last Login, Users Responsibility Chain |
| Clients, suppliers & markets | 10 | Billing Clients, Brands, Client Classification, Client Groups, [Clients](/docs/product/commercial/crm/create-commercial-client), Commercial Product Companies, Market Groups, Markets, Sectors, Suppliers |
| Pricing, products & finance | 10 | Accounts, Billing Products, Commercial Payment Conditions, Currencies, Payment Conditions, [Price Table Columns](/docs/product/commercial/rates/price-tables), [Price Tables](/docs/product/commercial/rates/price-tables), Products, Rate Card Columns, [Rate Cards](/docs/product/commercial/rates/rate-cards) |
| Projects, work & delivery | 16 | Additional Information, Business Object Types, [Description Templates](/docs/administration/description-templates), Document Members, Document Teams, Documents, Expense Types, Job Classifications, Job Types, Link Types, Project Classifications, Project Types, Service Groups, Services, Tags, Templates |
| Workflow | 6 | Custom Actions, [Stage Types](/docs/administration/workflows/stage-types), [Stages](/docs/administration/workflows/stages), [Transitions](/docs/administration/workflows/transitions), Workflow Management, [Workflows](/docs/administration/workflows) |
| Time, schedules & leave | 6 | [Holiday](/docs/administration/calendars/create-holidays), Leave Infos, [Leave Types](/docs/administration/calendars/create-leave-type), Schedules, Shifts, Work Types |
| Reports & output | 4 | Printing Layouts, Queries, Query Preview, Reports |
| Screens, lists & workspaces | 4 | List Definitions, Panels, Views, [Workspaces](/docs/build-and-extend/workspaces) |
| Media & print production | 4 | Print Size Units, Print Sizes, Publications, Publishers |
| System & integrations | 12 | AI Skills, [Automations](/docs/build-and-extend/automations), Configuration, [Custom Tables](/docs/administration/custom-tables), Environment, Integration Logs, Integrators, Marketplace, Notification Types, [SSO](/docs/integrations/single-sign-on-sso), System Parameters, [Webhooks](/docs/build-and-extend/api/webhooks) |
| Other | 7 | Chat GPT, Copilot Chat, File System, Marketplace v2, Projects with Inactive Products, Usage Metrics, y otras entradas no agrupadas en otra área |

Las entradas sin enlace todavía no están cubiertas por un artículo específico. El área "Other" también puede contener entradas propias de un tenant.

## Related articles

- [Custom Tables](/docs/administration/custom-tables)
- [Description Templates](/docs/administration/description-templates)
- [Roles and Profiles](/docs/administration/system-roles-profiles)
- [Workflow](/docs/administration/workflows)
