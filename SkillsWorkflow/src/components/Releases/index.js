import React, { useMemo, useState } from 'react';
import data from '@site/src/data/releases.json';
import styles from './styles.module.css';

/* Rendered from src/data/releases.json, produced at build time by
   scripts/fetch-releases.mjs. That script keeps only title, description and
   category — the endpoint's internal fields (client codes, ticket numbers,
   effort) never reach the browser. */

const LABELS = {
  improvement: 'Improvement',
  change: 'Change request',
  fix: 'Fix',
};

/* The newest few versions are open; everything older starts collapsed, because
   the full list is 630-odd entries over 115 versions. */
const OPEN_BY_DEFAULT = 3;

function Entry({ entry }) {
  return (
    <li className={styles.entry}>
      <div className={styles.entryHead}>
        <span className={`${styles.tag} ${styles[entry.category]}`}>{LABELS[entry.category]}</span>
        <h3 className={styles.entryTitle}>{entry.title}</h3>
      </div>
      {entry.description ? (
        <div
          className={styles.entryBody}
          /* The source is a rich-text field. It only ever contains p, ul, li,
             strong, br, span, em, code and a — verified across all entries —
             and it is fetched at build time from an internal service, not from
             user input in the browser. */
          dangerouslySetInnerHTML={{ __html: entry.description }}
        />
      ) : null}
    </li>
  );
}

function Version({ release, index, query, category }) {
  const entries = useMemo(() => {
    const q = query.trim().toLowerCase();
    return release.entries.filter((e) => {
      if (category !== 'all' && e.category !== category) return false;
      if (!q) return true;
      return (
        e.title.toLowerCase().includes(q) ||
        e.description.replace(/<[^>]+>/g, ' ').toLowerCase().includes(q)
      );
    });
  }, [release, query, category]);

  if (entries.length === 0) return null;

  const filtering = query.trim() !== '' || category !== 'all';
  const open = filtering || index < OPEN_BY_DEFAULT;

  return (
    <details className={styles.version} open={open}>
      <summary className={styles.summary}>
        <span className={styles.versionName}>{release.version || 'Unversioned'}</span>
        <span className={styles.count}>
          {entries.length} {entries.length === 1 ? 'entry' : 'entries'}
        </span>
      </summary>
      <ul className={styles.entries}>
        {entries.map((e, i) => (
          <Entry key={`${release.version}-${i}`} entry={e} />
        ))}
      </ul>
    </details>
  );
}

export default function Releases() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');

  const versions = data.versions || [];
  const total = versions.reduce((n, v) => n + v.entries.length, 0);

  const counts = useMemo(() => {
    const c = { all: total, improvement: 0, change: 0, fix: 0 };
    for (const v of versions) for (const e of v.entries) c[e.category]++;
    return c;
  }, [versions, total]);

  if (total === 0) {
    return (
      <p className={styles.empty}>
        The release list could not be loaded when this page was built. It is refreshed on every
        deployment.
      </p>
    );
  }

  const visible = versions.filter((v) =>
    v.entries.some(
      (e) =>
        (category === 'all' || e.category === category) &&
        (query.trim() === '' ||
          e.title.toLowerCase().includes(query.trim().toLowerCase()) ||
          e.description.replace(/<[^>]+>/g, ' ').toLowerCase().includes(query.trim().toLowerCase()))
    )
  );

  return (
    <div className={styles.root}>
      <div className={styles.controls}>
        <input
          className={styles.search}
          type="search"
          value={query}
          placeholder="Search the releases"
          aria-label="Search the releases"
          onChange={(e) => setQuery(e.target.value)}
        />
        <div className={styles.filters} role="group" aria-label="Filter by type">
          {['all', 'improvement', 'change', 'fix'].map((c) => (
            <button
              key={c}
              type="button"
              className={`${styles.filter} ${category === c ? styles.filterOn : ''}`}
              aria-pressed={category === c}
              onClick={() => setCategory(c)}
            >
              {c === 'all' ? 'All' : LABELS[c]}
              <span className={styles.filterCount}>{counts[c]}</span>
            </button>
          ))}
        </div>
      </div>

      {visible.length === 0 ? (
        <p className={styles.empty}>Nothing matches that search.</p>
      ) : (
        visible.map((release, i) => (
          <Version
            key={release.version || 'unversioned'}
            release={release}
            index={versions.indexOf(release)}
            query={query}
            category={category}
          />
        ))
      )}
    </div>
  );
}
