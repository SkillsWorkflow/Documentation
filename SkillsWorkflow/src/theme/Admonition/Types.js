import React from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import AdmonitionLayout from '@theme/Admonition/Layout';
import DefaultAdmonitionTypes from '@theme-original/Admonition/Types';

function IconPreview() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 3h6M10 3v6.2L4.6 18.4A1.7 1.7 0 0 0 6.1 21h11.8a1.7 1.7 0 0 0 1.5-2.6L14 9.2V3" />
      <path d="M7.2 14h9.6" />
    </svg>
  );
}

// :::preview marks a capability that is described but not released yet.
function AdmonitionTypePreview(props) {
  return (
    <AdmonitionLayout
      icon={<IconPreview />}
      title={<Translate id="theme.admonition.preview" description="The label used for the Preview admonition (:::preview)">Preview</Translate>}
      {...props}
      className={clsx('alert alert--preview', props.className)}>
      {props.children}
    </AdmonitionLayout>
  );
}

export default {
  ...DefaultAdmonitionTypes,
  preview: AdmonitionTypePreview,
};
