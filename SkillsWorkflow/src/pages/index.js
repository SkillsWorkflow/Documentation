import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import Translate, { translate } from '@docusaurus/Translate';
import useThemeContext from '@theme/hooks/useThemeContext';

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
    title: 'Integrations',
    imageUrl: 'img/undraw_Image_folder_store.svg',
    description: (
      <>
        An wide variaty of integrations is available for you!
        Check the available Integrations directory.
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
    </div >
  );
}

const Header = () => {
  const { isDarkTheme } = useThemeContext();
  return <header
    className={clsx('hero hero--primary', styles.heroBanner)}
    style={{
      backgroundImage: isDarkTheme ? 'url(/img/home/homepage-dark.jpg)' : 'url(/img/home/homepage-light.jpg)',
      color: '#0172c6',
      position: 'static',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundColor: '#fff',
      backgroundPosition: 'center'
    }}>
    <div className="container text--left"
      style={{
        backdropFilter: 'blur(0px)'
      }}>
      <h1 className="hero__title home-h1"><Translate>Skills Workflow's Documentation</Translate></h1>
      <p className="hero__subtitle home-p"><Translate>We are here to let you shine! Let's get everything done</Translate></p>
      <div className={styles.buttons}>
        <Link
          className={styles.skills}
          to={useBaseUrl('docs/')}>
          <Translate>Get Started</Translate>
        </Link>
      </div>
    </div>
  </header>
    ;
};
function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Documentation | ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <Header />
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className=" left container text--center">
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
