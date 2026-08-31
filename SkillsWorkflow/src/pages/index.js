import React, { useEffect, useRef, useState } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Translate, { translate } from '@docusaurus/Translate';
import useIsBrowser from '@docusaurus/useIsBrowser';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useHistory } from '@docusaurus/router';
import { usePluginData } from '@docusaurus/useGlobalData';
import styles from './styles.module.css';

/* Icons and colours are the product's own. The `fal fa-*` classes are exactly
   those in ClientApp/app/common/constants/icon-classes.ts, and each pair of
   colours is a DocumentStyle from ClientApp/app/common/services/business-object/
   document.service.ts — soft background first, accent second. A reader who has
   used the platform meets the same visual language here.

   Font Awesome Pro is loaded through the kit in docusaurus.config.cjs. */

const areas = [
  { to: '/docs/product/briefing-and-requests', title: translate({
      id: 'home.area.briefing.title',
      message: 'Briefing & Requests',
    }),
    icon: 'fal fa-users-class', soft: '#fef4ea', accent: '#f8913c',
    text: translate({
      id: 'home.area.briefing.text',
      message: 'How work arrives: client requests and the templates that shape them.',
    }) },
  { to: '/docs/product/projects-and-jobs', title: translate({
      id: 'home.area.projects.title',
      message: 'Projects & Jobs',
    }),
    icon: 'fal fa-clipboard-list', soft: '#f5f3fd', accent: '#9a8be7',
    text: translate({
      id: 'home.area.projects.text',
      message: 'Create projects, break them into jobs, and follow them in the list view.',
    }) },
  { to: '/docs/product/planning-and-scheduling', title: translate({
      id: 'home.area.planning.title',
      message: 'Planning & Scheduling',
    }),
    icon: 'fal fa-poll-people', soft: '#fefae8', accent: '#f4cd0d',
    text: translate({
      id: 'home.area.planning.text',
      message: 'The Gantt, the resource scheduler and planned time.',
    }) },
  { to: '/docs/product/time', title: translate({
      id: 'home.area.time.title',
      message: 'Time',
    }),
    icon: 'fal fa-hourglass-start', soft: '#eefafb', accent: '#58d0da',
    text: translate({
      id: 'home.area.time.text',
      message: 'Filling in, approving and transferring timesheets.',
    }) },
  { to: '/docs/product/people', title: translate({
      id: 'home.area.people.title',
      message: 'People',
    }),
    icon: 'fal fa-user-friends', soft: '#f2f6fd', accent: '#8bb4e7',
    text: translate({
      id: 'home.area.people.text',
      message: 'Teams and groups, assignments, leave scheduling and approval.',
    }) },
  { to: '/docs/product/commercial', title: translate({
      id: 'home.area.commercial.title',
      message: 'Commercial',
    }),
    icon: 'fal fa-calculator', soft: '#faf9f8', accent: '#a0867d',
    text: translate({
      id: 'home.area.commercial.text',
      message: 'CRM, rate cards, estimates and fees.',
    }) },
  { to: '/docs/product/billing-and-costs', title: translate({
      id: 'home.area.billing.title',
      message: 'Billing & Costs',
    }),
    icon: 'fal fa-file-invoice-dollar', soft: '#f4faf4', accent: '#91cc91',
    text: translate({
      id: 'home.area.billing.text',
      message: 'Invoice authorizations, credit notes and expenses.',
    }) },
  { to: '/docs/product/files-and-collaboration', title: translate({
      id: 'home.area.files.title',
      message: 'Files & Collaboration',
    }),
    icon: 'fal fa-folders', soft: '#fef8ec', accent: '#f7bd55',
    text: translate({
      id: 'home.area.files.text',
      message: 'Annotations on files, and the feed where the conversation happens.',
    }) },
  { to: '/docs/product/dashboards-and-reporting', title: translate({
      id: 'home.area.workspaces.title',
      message: 'Workspaces & Reporting',
    }),
    icon: 'fal fa-chart-pie', soft: '#fdf3f3', accent: '#f0868e',
    text: translate({
      id: 'home.area.workspaces.text',
      message: 'The workspaces that ship with the platform, and how to read them.',
    }) },
  { to: '/docs/product/notifications', title: translate({
      id: 'home.area.notifications.title',
      message: 'Notifications',
    }),
    icon: 'fal fa-bell', soft: '#edf8fd', accent: '#51beeb',
    text: translate({
      id: 'home.area.notifications.text',
      message: 'What the platform notifies people about, and through which channel.',
    }) },
  { to: '/docs/product/mobile', title: translate({
      id: 'home.area.mobile.title',
      message: 'Mobile',
    }),
    icon: 'fal fa-mobile', soft: '#f5fae8', accent: '#9ACD32',
    text: translate({
      id: 'home.area.mobile.text',
      message: 'The iOS and Android apps, and how users configure them.',
    }) },
];
const routes = [
  {
    to: '/docs/learning-paths',
    icon: 'fal fa-graduation-cap',
    eyebrow: translate({
      id: 'home.route.learn.eyebrow',
      message: 'For everyone using the platform',
    }),
    title: translate({
      id: 'home.route.learn.title',
      message: 'Learn the product',
    }),
    text: translate({
      id: 'home.route.learn.text',
      message: 'Ordered paths through the documentation, from your first project to closing a month.',
    }),
  },
  {
    to: '/docs/administration',
    icon: 'fal fa-sliders-h',
    eyebrow: translate({
      id: 'home.route.setup.eyebrow',
      message: 'For administrators',
    }),
    title: translate({
      id: 'home.route.setup.title',
      message: 'Set up a client',
    }),
    text: translate({
      id: 'home.route.setup.text',
      message: 'Users and profiles, workflows, custom tables, calendars and data imports.',
    }),
  },
  {
    to: '/docs/build-and-extend',
    icon: 'fal fa-code',
    eyebrow: translate({
      id: 'home.route.build.eyebrow',
      message: 'For consultants and developers',
    }),
    title: translate({
      id: 'home.route.build.title',
      message: 'Build & extend',
    }),
    text: translate({
      id: 'home.route.build.text',
      message: 'Workspaces and panels, automations, the SDK and the API.',
    }),
  },
];

const quick = [
  { to: '/docs/start-here/glossary', label: translate({ id: 'home.quick.glossary', message: 'Glossary' }) },
  { to: '/docs/product/planning-and-scheduling/gantt', label: translate({ id: 'home.quick.gantt', message: 'Gantt' }) },
  { to: '/docs/administration/workflows', label: translate({ id: 'home.quick.workflows', message: 'Workflows' }) },
  { to: '/docs/build-and-extend/automations', label: translate({ id: 'home.quick.automations', message: 'Automations' }) },
  { to: '/docs/integrations', label: translate({ id: 'home.quick.integrations', message: 'Integrations' }) },
  { to: '/docs/build-and-extend/api/client-api', label: translate({ id: 'home.quick.clientApi', message: 'Client API' }) },
];

/* The hero field is a real search input, not a proxy for the navbar one.
   docusaurus-lunr-search's own SearchBar hard-codes `id="search_input_react"`,
   so rendering a second SearchBar would collide — but its DocSearch class takes
   `inputSelector` as an argument, so binding a second instance to this input is
   not a collision. Both read the same index and the same JSON the plugin
   already publishes; the results drop below the field the reader actually
   clicked, rather than under the navbar in the far corner. */
const HERO_INPUT_ID = 'hero_search_input';

function HeroSearch() {
  const isBrowser = useIsBrowser();
  const history = useHistory();
  const { siteConfig = {} } = useDocusaurusContext();
  const pluginData = usePluginData('docusaurus-lunr-search');
  const initialized = useRef(false);
  const [ready, setReady] = useState(false);

  const { baseUrl } = siteConfig;
  const pluginConfig = (siteConfig.plugins || []).find(
    (plugin) =>
      Array.isArray(plugin) &&
      typeof plugin[0] === 'string' &&
      plugin[0].includes('docusaurus-lunr-search')
  );
  const assetUrl = (pluginConfig && pluginConfig[1]?.assetUrl) || baseUrl;

  useEffect(() => {
    // The index only exists in a production build; `docusaurus start` never
    // writes it. Leave the field enabled but inert there rather than hanging.
    if (!isBrowser || initialized.current || process.env.NODE_ENV !== 'production') {
      return;
    }
    initialized.current = true;

    Promise.all([
      fetch(`${assetUrl}${pluginData.fileNames.searchDoc}`).then((r) => r.json()),
      fetch(`${assetUrl}${pluginData.fileNames.lunrIndex}`).then((r) => r.json()),
      import('docusaurus-lunr-search/src/theme/SearchBar/DocSearch'),
      import('docusaurus-lunr-search/src/theme/SearchBar/algolia.css')
    ])
      .then(([searchDocFile, searchIndex, { default: DocSearch }]) => {
        const { searchDocs, options } = searchDocFile;
        if (!searchDocs || searchDocs.length === 0) return;

        new DocSearch({
          searchDocs,
          searchIndex,
          baseUrl,
          inputSelector: `#${HERO_INPUT_ID}`,
          // Client-side navigation, matching the navbar field's behaviour so a
          // result opens the same way from either search.
          handleSelected: (input, event, suggestion) => {
            const url = suggestion.url || '/';
            input.setVal('');
            event.target.blur();
            history.push(url);
          },
          maxHits: options?.maxHits
        });
        setReady(true);
      })
      .catch(() => {
        /* Index missing or malformed: the field stays inert rather than throwing. */
      });
  }, [isBrowser, assetUrl, baseUrl, history, pluginData]);

  const isMac = isBrowser && /Mac|iPhone|iPad/.test(window.navigator.platform);

  return (
    <div className={styles.search} role="search">
      <div className={styles.searchField}>
        <i className={`fal fa-search ${styles.searchIcon}`} aria-hidden="true" />
        <input
          id={HERO_INPUT_ID}
          type="search"
          className={styles.searchInput}
          placeholder={translate({
            id: 'home.search.placeholder',
            message: 'Search Skills Workflow documentation...'
          })}
          aria-label={translate({
            id: 'home.search.label',
            message: 'Search Skills Workflow documentation'
          })}
        />
        {isBrowser && ready && (
          <kbd className={styles.searchKbd} aria-hidden="true">
            {isMac ? '⌘' : 'Ctrl'} K
          </kbd>
        )}
      </div>
    </div>
  );
}

function Home() {
  return (
    <Layout
      description={translate({
        id: 'home.meta.description',
        message:
          'Official Skills Workflow documentation: product guides, administration, workspaces, automations, integrations, API and SDK references.',
      })}
    >
      <header className={styles.hero}>
        <div className={styles.heroWash} aria-hidden="true" />
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>
            <Translate id="home.hero.eyebrow">Skills Workflow documentation</Translate>
          </p>
          <h1 className={styles.heroTitle}>
            <Translate id="home.hero.title">Everything the platform does, from briefing to billing</Translate>
          </h1>
          <p className={styles.heroText}>
            <Translate id="home.hero.text">
              Product guides for the people doing the work, configuration for the people setting it
              up, and references for the people building on top.
            </Translate>
          </p>
          <HeroSearch />
          <div className={styles.heroActions}>
            <Link className={styles.btnPrimary} to="/docs/learning-paths">
              <Translate id="home.hero.ctaPrimary">Start learning</Translate>
            </Link>
            <Link className={styles.btnGhost} to="/docs/product/projects-and-jobs">
              <Translate id="home.hero.ctaSecondary">Browse the product</Translate>
            </Link>
          </div>
          <div className={styles.quick}>
            <span className={styles.quickLabel}><Translate id="home.quick.label">Popular</Translate></span>
            {quick.map((q) => (
              <Link key={q.to} className={styles.chip} to={q.to}>{q.label}</Link>
            ))}
          </div>
        </div>
      </header>

      <main>
        <section className={styles.section}>
          <div className={styles.wrap}>
            <div className={styles.routes}>
              {routes.map((r) => (
                <Link key={r.to} className={styles.route} to={r.to}>
                  <span className={styles.routeIcon}><i className={r.icon} aria-hidden="true" /></span>
                  <span className={styles.routeEyebrow}>{r.eyebrow}</span>
                  <span className={styles.routeTitle}>{r.title}</span>
                  <span className={styles.routeText}>{r.text}</span>
                  <span className={styles.routeGo} aria-hidden="true">→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.sectionAlt}>
          <div className={styles.wrap}>
            <h2 className={styles.sectionTitle}><Translate id="home.areas.title">By product area</Translate></h2>
            <p className={styles.sectionText}>
              <Translate id="home.areas.text">
                Each area covers what the capability does, how it is used, and how it is configured.
              </Translate>
            </p>
            <div className={styles.grid}>
              {areas.map((a) => (
                <Link key={a.to} className={styles.card} to={a.to}>
                  <span
                    className={styles.cardIcon}
                    style={{ '--doc-soft': a.soft, '--doc-accent': a.accent }}
                  >
                    <i className={a.icon} aria-hidden="true" />
                  </span>
                  <span className={styles.cardTitle}>{a.title}</span>
                  <span className={styles.cardText}>{a.text}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.wrap}>
            <div className={styles.strip}>
              <div className={styles.stripCopy}>
                <h2 className={styles.stripTitle}><Translate id="home.integrations.title">Connect your stack</Translate></h2>
                <p className={styles.stripText}>
                  <Translate id="home.integrations.text">
                    Finance, HR, time, creative and identity systems, each with its own setup guide
                    and the rules that say which system owns which data.
                  </Translate>
                </p>
              </div>
              <Link className={styles.btnPrimary} to="/docs/integrations">
                <Translate id="home.integrations.cta">See integrations</Translate>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
