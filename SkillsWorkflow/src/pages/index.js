import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import Translate, { translate } from '@docusaurus/Translate';

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
          position: 'static',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundColor: '#fff',
          backgroundPosition: 'center'
        }}>
        <div className="container text--center"
          style={{
            backdropFilter: 'blur(2px)'
          }}>
          <h1 className="hero__title home-h1"><Translate>Skills Workflow's Documentation</Translate></h1>
          <p className="hero__subtitle home-p"><Translate>We are here to let you shine! Let's get everything done</Translate></p>
          <div className={styles.buttons}>
            <Link
              className={styles.skills}
              to={useBaseUrl('/')}>
              <Translate>Get Started</Translate>
            </Link>
          </div>
        </div>
      </header>
      <section className={styles.section} style={{
        backgroundImage: "url(/img/home/skillsworkflow-homepage.jpg)",
        position: 'static',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundColor: '#fff',
        backgroundPosition: 'center'
      }}></section>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container text--center">
              <div className="row">
                <div className={clsx('col col--4', styles.feature)}>
                  {useBaseUrl('img/undraw_building_websites_crafting.svg') && (
                    <div className="text--center">
                      <img className={styles.featureImage} src={useBaseUrl('img/undraw_building_websites_crafting.svg')} alt={'Crafting'} />
                    </div>
                  )}
                  <h3><a href='https://documentation.skillsworkflow.com/docs'><Translate>Crafting</Translate></a></h3>
                  <p><Translate>Unleash the creativity in you. Why not craft
                    your own workspace?</Translate></p>
                </div>
                <div className={clsx('col col--4', styles.feature)}>
                  {useBaseUrl('img/undraw_Image_folder_store.svg') && (
                    <div className="text--center">
                      <img className={styles.featureImage} src={useBaseUrl('img/undraw_Image_folder_store.svg')} alt={'Store'} />
                    </div>
                  )}
                  <h3><a href='https://documentation.skillsworkflow.com/docs/integrations/hr-link'><Translate>Integrations</Translate></a></h3>
                  <p><Translate>An wide variaty of integrations is available for you!
                    Check the available Integrations directory.</Translate></p>
                </div>
                <div className={clsx('col col--4', styles.feature)}>
                  {useBaseUrl('img/undraw_graduation_university.svg') && (
                    <div className="text--center">
                      <img className={styles.featureImage} src={useBaseUrl('img/undraw_graduation_university.svg')} alt={'University'} />
                    </div>
                  )}
                  <h3><a href='https://documentation.skillsworkflow.com/docs/university/Bills/invoice-authorizations'><Translate>University</Translate></a></h3>
                  <p><Translate>Want to become a system expert? Explore our walkthrough
                    lessons.</Translate></p>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout >
  );
}

export default Home;
