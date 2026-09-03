import React from 'react';
import {
  useDocById,
  findFirstSidebarItemLink,
} from '@docusaurus/plugin-content-docs/client';
import {useLocation} from '@docusaurus/router';
import {
  extractLeadingEmoji,
  useDocCardDescriptionCategoryItemsPlural,
} from '@docusaurus/theme-common/internal';
import isInternalUrl from '@docusaurus/isInternalUrl';
import Layout from '@theme/DocCard/Layout';

function getFallbackEmojiIcon(item) {
  if (item.type === 'category') {
    return '🗃';
  }
  return isInternalUrl(item.href) ? '📄️' : '🔗';
}

function getIconTitleProps(item) {
  const extracted = extractLeadingEmoji(item.label);
  const emoji = extracted.emoji ?? getFallbackEmojiIcon(item);
  return {
    icon: emoji,
    title: extracted.rest.trim(),
  };
}

function normalizePath(href) {
  return String(href ?? '')
    .replace(/^\/docs/, '')
    .replace(/\/$/, '');
}

function categoryArticleCount(item, href) {
  const categoryPath = normalizePath(href);
  const articles = (item.items ?? []).filter((child) =>
    normalizePath(child.href) !== categoryPath,
  );
  return `${articles.length} ${articles.length === 1 ? 'item' : 'items'}`;
}

function isProductIndex(pathname) {
  return /\/docs\/product\/?$/.test(pathname);
}

function CardCategory({item}) {
  const href = findFirstSidebarItemLink(item);
  const categoryItemsPlural = useDocCardDescriptionCategoryItemsPlural();
  const {pathname} = useLocation();

  if (!href) {
    return null;
  }

  return (
    <Layout
      item={item}
      className={item.className}
      href={href}
      description={
        isProductIndex(pathname)
          ? categoryArticleCount(item, href)
          : item.description ?? categoryItemsPlural(item.items.length)
      }
      {...getIconTitleProps(item)}
    />
  );
}

function CardLink({item}) {
  const doc = useDocById(item.docId ?? undefined);
  return (
    <Layout
      item={item}
      className={item.className}
      href={item.href}
      description={item.description ?? doc?.description}
      {...getIconTitleProps(item)}
    />
  );
}

export default function DocCard({item}) {
  switch (item.type) {
    case 'link':
      return <CardLink item={item} />;
    case 'category':
      return <CardCategory item={item} />;
    default:
      throw new Error(`unknown item type ${JSON.stringify(item)}`);
  }
}
