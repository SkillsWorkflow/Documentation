import React from 'react';
import { CATEGORIES } from './catalogData';
import styles from './ActionCatalog.module.css';

/**
 * A browsable, categorised grid of automation action types.
 * Each card links to the action's full reference section on the same page.
 */
export default function ActionCatalog() {
  return (
    <div className={styles.catalog}>
      {CATEGORIES.map((category) => (
        <section key={category.title} className={styles.category}>
          <div className={styles.categoryHead}>
            <h3 className={styles.categoryTitle}>{category.title}</h3>
            <p className={styles.categoryBlurb}>{category.blurb}</p>
          </div>
          <div className={styles.grid}>
            {category.actions.map((action) => (
              <a key={action.name} href={`#${action.anchor}`} className={styles.card}>
                <span className={styles.cardName}>{action.name}</span>
                <p className={styles.cardDesc}>{action.desc}</p>
              </a>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
