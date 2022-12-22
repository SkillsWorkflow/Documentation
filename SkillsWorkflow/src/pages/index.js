import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import Translate, { translate } from '@docusaurus/Translate';
import url from 'https://fonts.googleapis.com/css2?family=Varela+Round&display=swap';

import {
  useThemeConfig,
  useColorMode,
  useHideableNavbar,
  useLockBodyScroll,
  useWindowSize,
} from '@docusaurus/theme-common';
const features = [
  {
    title: 'Crafting',
    imageUrl: 'img/homefeat01.svg',
    description: (
      <>
        Unleash the creativity in you. Why not craft
        your own workspace?
      </>
    ),
  },
  {
    title: 'Integrations',
    imageUrl: 'img/homefeat02.svg',
    description: (
      <>
        An wide variaty of integrations is available for you!
        Check the available Integrations directory.
      </>
    ),
  },
  {
    title: 'University',
    imageUrl: 'img/homefeat03.svg',
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
    <div className={clsx('col col--4', styles.feature)}
    style={{
      color: '#333',
      backgroundColor: '',
    }} 
    >
      {imgUrl && (
        <div className="text--center" 
        style={{
          color: '#333',
          backgroundColor: '#F3F8FF',
          borderRadius: '5px',
          marginBottom: '20px',
         
        }}>
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <div style={{
          backgroundColor: '',
          borderRadius: '5px',
          paddingLeft: '40px',
          paddingRight: '40px'
        }}>
      <h3 style={{
          fontfamily: 'Varela Round',
          color: '#333',
        }}> {title}</h3>
      <p>{description}</p>
      </div>
    </div >
  );
}

const Header = () => {
  const { isDarkTheme } = useThemeConfig();
  return <header
    className={clsx('hero hero--primary', styles.heroBanner, 'home-page-image')}
    style={{
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
