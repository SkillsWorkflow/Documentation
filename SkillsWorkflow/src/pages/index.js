import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Crafting',
    imageUrl: 'img/undraw_building_websites_crafting.svg',
    description: (
      <>
        Unleash the creativity in you. Why not craft
        your own workspace?
      </>
    ),
  },
  {
    title: 'Store',
    imageUrl: 'img/undraw_Image_folder_store.svg',
    description: (
      <>
        An wide library is available for you!
        Check the available <code>Workspaces</code> directory.
      </>
    ),
  },
  {
    title: 'University',
    imageUrl: 'img/undraw_graduation_university.svg',
    description: (
      <>
        Want to become a system expert? Explore our walkthrough
        lessons.
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Documentation | ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header
        className={clsx('hero hero--primary', styles.heroBanner)}
        style={{
          color: '#0172c6',
          // backgroundImage: useBaseUrl('img/home.png'),
          backgroundImage: "url(https://uploads-ssl.webflow.com/5bf3f119b7c4f5aa8040c8c5/5da5ca17bf24e401676c9fac_alex-azabache-UeX_qw9lnzc-unsplash.jpg)",
          position: 'static',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundColor: '#f3f8ff',
          backgroundPosition: 'left'
        }}>
        <div className="container text--center"
          style={{
            backdropFilter: 'blur(2px)'
          }}>
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              style={{ backgroundColor: '#f3f8ff' }}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container text--center">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout >
  );
}

export default Home;
