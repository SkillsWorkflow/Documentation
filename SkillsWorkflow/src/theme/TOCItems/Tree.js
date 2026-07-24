/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, {useState} from 'react';
import Link from '@docusaurus/Link';

function toTextLabel(value) {
  return value
    .replace(/<[^>]*>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

// Recursive component rendering the toc tree
function TOCItemTree({toc, className, linkClassName, isChild}) {
  const [collapsedIds, setCollapsedIds] = useState(() => new Set());

  if (!toc.length) {
    return null;
  }

  function toggleCollapsed(id) {
    setCollapsedIds((current) => {
      const next = new Set(current);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }

  return (
    <ul className={isChild ? undefined : className}>
      {toc.map((heading) => {
        const hasChildren = heading.children.length > 0;
        const canCollapse = !isChild && hasChildren;
        const isCollapsed = collapsedIds.has(heading.id);
        const label = toTextLabel(heading.value);
        const link = (
          <Link
            to={`#${heading.id}`}
            className={linkClassName ?? undefined}
            // Developer provided the HTML, so assume it's safe.
            dangerouslySetInnerHTML={{__html: heading.value}}
          />
        );

        return (
          <li
            key={heading.id}
            className={canCollapse ? 'toc-collapsible-group' : undefined}>
            {canCollapse ? (
              <div className="toc-collapsible-heading">
                <button
                  type="button"
                  className="toc-collapsible-toggle"
                  aria-label={`${isCollapsed ? 'Expand' : 'Collapse'} ${label}`}
                  aria-expanded={!isCollapsed}
                  onClick={() => toggleCollapsed(heading.id)}>
                  <span aria-hidden="true" className="toc-collapsible-icon">
                    ▾
                  </span>
                </button>
                {link}
              </div>
            ) : (
              link
            )}
            {(!canCollapse || !isCollapsed) && (
              <TOCItemTree
                isChild
                toc={heading.children}
                className={className}
                linkClassName={linkClassName}
              />
            )}
          </li>
        );
      })}
    </ul>
  );
}
// Memo only the tree root is enough
export default React.memo(TOCItemTree);
