import React from 'react';
import clsx from 'clsx';
import { ThemeClassNames } from '@docusaurus/theme-common';
import { iconForHref } from '@site/src/data/icons';
import styles from './styles.module.css';

/**
 * Swizzled from @docusaurus/theme-classic.
 *
 * Docusaurus renders a 🗂️ emoji on every category card and 📄 on every link
 * card. This replaces both with the product's own Font Awesome icons, resolved
 * from the card's href through the shared map in src/data/icons.js, so a card
 * in the documentation carries the same icon as the corresponding area of the
 * platform.
 *
 * Falls back to a folder or a document glyph when a path has no mapping, so a
 * new section never renders without an icon.
 */
export default function DocCardHeadingIcon({ item, icon }) {
  const isCategory = item?.type === 'category';
  const className = iconForHref(item?.href, isCategory);

  return (
    <span
      className={clsx(ThemeClassNames.docs.docCard.icon, styles.cardTitleIcon, 'sw-doccard-icon')}
      aria-hidden="true"
    >
      <i className={className} />
    </span>
  );
}
