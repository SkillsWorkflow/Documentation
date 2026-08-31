/**
 * One icon map for the whole site, so the homepage cards, the sidebar category
 * cards and anything added later cannot drift apart.
 *
 * Every class is the product's own, from
 * ClientApp/app/common/constants/icon-classes.ts. The colour pairs are the
 * matching DocumentStyle values from
 * ClientApp/app/common/services/business-object/document.service.ts — soft
 * background first, accent second.
 */

export const AREAS = {
  '/product/briefing-and-requests': {
    icon: 'fal fa-users-class', soft: '#fef4ea', accent: '#f8913c',
  },
  '/product/projects-and-jobs': {
    icon: 'fal fa-clipboard-list', soft: '#f5f3fd', accent: '#9a8be7',
  },
  '/product/planning-and-scheduling': {
    icon: 'fal fa-poll-people', soft: '#fefae8', accent: '#f4cd0d',
  },
  '/product/time': {
    icon: 'fal fa-hourglass-start', soft: '#eefafb', accent: '#58d0da',
  },
  '/product/people': {
    icon: 'fal fa-user-friends', soft: '#f2f6fd', accent: '#8bb4e7',
  },
  '/product/commercial': {
    icon: 'fal fa-calculator', soft: '#faf9f8', accent: '#a0867d',
  },
  '/product/billing-and-costs': {
    icon: 'fal fa-file-invoice-dollar', soft: '#f4faf4', accent: '#91cc91',
  },
  '/product/files-and-collaboration': {
    icon: 'fal fa-folders', soft: '#fef8ec', accent: '#f7bd55',
  },
  '/product/dashboards-and-reporting': {
    icon: 'fal fa-chart-pie', soft: '#fdf3f3', accent: '#f0868e',
  },
  '/product/notifications': {
    icon: 'fal fa-bell', soft: '#edf8fd', accent: '#51beeb',
  },
  '/product/mobile': {
    icon: 'fal fa-mobile', soft: '#f5fae8', accent: '#9ACD32',
  },
};

/** Sections and the sub-areas a category card can land on. */
export const SECTIONS = {
  '/start-here': 'fal fa-compass',
  '/product': 'fal fa-cubes',
  '/administration': 'fal fa-sliders-h',
  '/administration/users': 'fal fa-user',
  '/administration/calendars': 'fal fa-calendar-alt',
  '/administration/workflows': 'fal fa-project-diagram',
  '/administration/system': 'fal fa-cog',
  '/administration/importing-data': 'fal fa-file-import',
  '/build-and-extend': 'fal fa-code',
  '/build-and-extend/workspaces': 'fal fa-th-large',
  '/build-and-extend/workspaces/panels': 'fal fa-table',
  '/build-and-extend/automations': 'fal fa-bolt',
  '/build-and-extend/automations/recipes': 'fal fa-book',
  '/build-and-extend/sdk': 'fal fa-cubes',
  '/build-and-extend/api': 'fal fa-plug',
  '/build-and-extend/api/data-extraction': 'fal fa-database',
  '/integrations': 'fal fa-plug',
  '/ai': 'fal fa-sparkles',
  '/trust': 'fal fa-shield-check',
  '/university': 'fal fa-graduation-cap',
  '/product/commercial/crm': 'fal fa-users',
  '/product/commercial/estimates': 'fal fa-calculator',
  '/product/commercial/contracts': 'fal fa-briefcase',
  '/product/commercial/rates': 'fal fa-user-chart',
  '/product/planning-and-scheduling/gantt': 'fal fa-chart-gantt',
  '/product/planning-and-scheduling/resourcing': 'fal fa-user-friends',
  '/product/time/timesheets': 'fal fa-hourglass-start',
  '/product/people/leaves': 'fal fa-umbrella-beach',
  '/product/people/teams': 'fal fa-users',
  '/product/billing-and-costs/billing': 'fal fa-file-invoice-dollar',
  '/product/billing-and-costs/expenses': 'fal fa-receipt',
};

const CATEGORY_FALLBACK = 'fal fa-folder-open';
const LINK_FALLBACK = 'fal fa-file-alt';

/**
 * Resolves a doc href to an icon class. Matches the longest path that is a
 * prefix of the href, so a nested category picks up its own icon when it has
 * one and its section's otherwise.
 */
export function iconForHref(href, isCategory = true) {
  if (!href) return isCategory ? CATEGORY_FALLBACK : LINK_FALLBACK;

  const path = String(href).replace(/^\/docs/, '').replace(/\/$/, '');
  const candidates = { ...SECTIONS };
  for (const [key, value] of Object.entries(AREAS)) candidates[key] = value.icon;

  let best = null;
  for (const key of Object.keys(candidates)) {
    if ((path === key || path.startsWith(`${key}/`)) && (!best || key.length > best.length)) {
      best = key;
    }
  }

  if (best) return candidates[best];
  return isCategory ? CATEGORY_FALLBACK : LINK_FALLBACK;
}
