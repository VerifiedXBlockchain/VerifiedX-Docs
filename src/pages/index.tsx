import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';


function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (

    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className={clsx('hero__title', styles.heroTitle)}>
          <div className={clsx(styles.cube)}>
            <img src="/img/cube.gif" className={clsx(styles.cubeImg)} />
          </div>
          <div className={clsx(styles.wordmark)}>
            <img src="/img/vfx-docs.png" className={clsx(styles.wordmarkImg)} />
          </div>
        </h1>
        <p className={clsx('hero__subtitle', styles.heroSubtitle)}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <a
            className="button"
            href="/docs/introduction/what-is-rbx/">
            Get Started
          </a>
        </div>
      </div>
    </header >
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Home`}
      description="Tokenized Commerce and Self-Custody for Everyone.">

      <div className={clsx(styles.main)}>

        <HomepageHeader />
        <main>
          <HomepageFeatures />
        </main>
      </div>


    </Layout>
  );
}
