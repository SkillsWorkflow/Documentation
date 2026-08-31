import React from 'react';
import MDXComponents from '@theme-original/MDXComponents';

/**
 * Markdown tables ship as a bare <table>, which Infima renders as a
 * shrink-to-fit block — it hugs the left edge and never fills the measure.
 * Wrapping it lets the table be a real `display: table` at 100% width while
 * the wrapper takes the horizontal scroll on narrow screens.
 */
function Table(props) {
  return (
    <div className="sw-table-wrapper">
      <table {...props} />
    </div>
  );
}

export default {
  ...MDXComponents,
  table: Table,
};
