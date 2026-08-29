import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import styles from './styles.module.css';

/* Icons and colours are the product's own. The `fal fa-*` classes are exactly
   those in ClientApp/app/common/constants/icon-classes.ts, and each pair of
   colours is a DocumentStyle from ClientApp/app/common/services/business-object/
   document.service.ts — soft background first, accent second. A reader who has
   used the platform meets the same visual language here.

   Font Awesome Pro is loaded through the kit in docusaurus.config.cjs. */

const areas = [
  { to: '/docs/product/briefing-and-requests', title: 'Briefing & Requests',
    icon: 'fal fa-users-class', soft: '#fef4ea', accent: '#f8913c',
    text: 'How work arrives: client requests and the templates that shape them.' },
  { to: '/docs/product/projects-and-jobs', title: 'Projects & Jobs',
    icon: 'fal fa-clipboard-list', soft: '#f5f3fd', accent: '#9a8be7',
    text: 'Create projects, break them into jobs, and follow them in the list view.' },
  { to: '/docs/product/planning-and-scheduling', title: 'Planning & Scheduling',
    icon: 'fal fa-poll-people', soft: '#fefae8', accent: '#f4cd0d',
    text: 'The Gantt, the resource scheduler, allocation and planned hours.' },
  { to: '/docs/product/time', title: 'Time',
    icon: 'fal fa-hourglass-start', soft: '#eefafb', accent: '#58d0da',
    text: 'Filling in, approving and transferring timesheets.' },
  { to: '/docs/product/people', title: 'People',
    icon: 'fal fa-user-friends', soft: '#f2f6fd', accent: '#8bb4e7',
    text: 'Teams and groups, assignments, leave scheduling and approval.' },
  { to: '/docs/product/commercial', title: 'Commercial',
    icon: 'fal fa-calculator', soft: '#faf9f8', accent: '#a0867d',
    text: 'CRM, rate cards, estimates, contracts and proposals.' },
  { to: '/docs/product/billing-and-costs', title: 'Billing & Costs',
    icon: 'fal fa-file-invoice-dollar', soft: '#f4faf4', accent: '#91cc91',
    text: 'Invoice authorizations, credit notes and expenses.' },
  { to: '/docs/product/files-and-collaboration', title: 'Files & Collaboration',
    icon: 'fal fa-folders', soft: '#fef8ec', accent: '#f7bd55',
    text: 'Annotations on files, and the feed where the conversation happens.' },
  { to: '/docs/product/dashboards-and-reporting', title: 'Dashboards & Reporting',
    icon: 'fal fa-chart-pie', soft: '#fdf3f3', accent: '#f0868e',
    text: 'The dashboards that ship with the platform, and how to read them.' },
  { to: '/docs/product/notifications', title: 'Notifications',
    icon: 'fal fa-bell', soft: '#edf8fd', accent: '#51beeb',
    text: 'What the platform notifies people about, and through which channel.' },
  { to: '/docs/product/mobile', title: 'Mobile',
    icon: 'fal fa-mobile', soft: '#f5fae8', accent: '#9ACD32',
    text: 'The iOS and Android apps, and how users configure them.' },
];
const routes = [
  {
    to: '/docs/university',
    icon: 'fal fa-graduation-cap',
    eyebrow: 'For everyone using the platform',
    title: 'Learn the product',
    text: 'Ordered paths through the documentation, from your first project to closing a month.',
  },
  {
    to: '/docs/administration',
    icon: 'fal fa-sliders-h',
    eyebrow: 'For administrators',
    title: 'Set up a client',
    text: 'Users and profiles, workflows, custom tables, calendars and data imports.',
  },
  {
    to: '/docs/build-and-extend',
    icon: 'fal fa-code',
    eyebrow: 'For consultants and developers',
    title: 'Build & extend',
    text: 'Workspaces and panels, automations, the SDK and the API.',
  },
];

const quick = [
  { to: '/docs/start-here/glossary', label: 'Glossary' },
  { to: '/docs/product/planning-and-scheduling/gantt/gantt-chart', label: 'Gantt' },
  { to: '/docs/administration/workflows', label: 'Workflows' },
  { to: '/docs/build-and-extend/automations', label: 'Automations' },
  { to: '/docs/integrations', label: 'Integrations' },
  { to: '/docs/build-and-extend/api/client-api', label: 'Client API' },
];

function Home() {
  return (
    <Layout description="Official Skills Workflow documentation: product guides, administration, workspaces, automations, integrations, API and SDK references.">
      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>
            <Translate>Skills Workflow documentation</Translate>
          </p>
          <h1 className={styles.heroTitle}>
            <Translate>Everything the platform does, from briefing to billing</Translate>
          </h1>
          <p className={styles.heroText}>
            <Translate>
              Product guides for the people doing the work, configuration for the people setting it
              up, and references for the people building on top.
            </Translate>
          </p>
          <div className={styles.heroActions}>
            <Link className={styles.btnPrimary} to="/docs/university">
              <Translate>Start learning</Translate>
            </Link>
            <Link className={styles.btnGhost} to="/docs/product/projects-and-jobs">
              <Translate>Browse the product</Translate>
            </Link>
          </div>
          <div className={styles.quick}>
            <span className={styles.quickLabel}><Translate>Popular</Translate></span>
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
            <h2 className={styles.sectionTitle}><Translate>By product area</Translate></h2>
            <p className={styles.sectionText}>
              <Translate>
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
                <h2 className={styles.stripTitle}><Translate>Connect your stack</Translate></h2>
                <p className={styles.stripText}>
                  <Translate>
                    Finance, HR, time, creative and identity systems, each with its own setup guide
                    and the rules that say which system owns which data.
                  </Translate>
                </p>
              </div>
              <Link className={styles.btnPrimary} to="/docs/integrations">
                <Translate>See integrations</Translate>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
