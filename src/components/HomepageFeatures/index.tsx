import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: JSX.Element;
  url: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'GUI Documentation',
    url: "/docs/GUI/",

    description: (
      <>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, natus. Consequatur excepturi quas fuga blanditiis laboriosam ab, aliquid odit reiciendis doloremque voluptatibus.

      </>
    ),
  },
  {
    title: 'CLI Documenation',
    url: "/docs/CLI/",
    description: (
      <>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, natus. Consequatur excepturi quas fuga blanditiis laboriosam ab, aliquid odit reiciendis doloremque voluptatibus.
      </>
    ),
  },

  {
    title: 'Integration Documentation',
    url: "/docs/integration/",

    description: (
      <>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, natus. Consequatur excepturi quas fuga blanditiis laboriosam ab, aliquid odit reiciendis doloremque voluptatibus.

      </>
    ),
  },
  {
    title: 'Frequently Asked Questions',
    url: "/docs/faqs/",

    description: (
      <>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, natus. Consequatur excepturi quas fuga blanditiis laboriosam ab, aliquid odit reiciendis doloremque voluptatibus.

      </>
    ),
  },
];

function Feature({ title, description, url }: FeatureItem) {
  return (
    <div className={clsx('col col--6')}>
      <div style={{ height: 32 }} />

      <div style={{ backgroundColor: "rgba(0,0,0,.7)", borderRadius: 8 }}>
        <div style={{ height: 32 }} />


        <div className="text--center padding-horiz--md">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="text--center">
          <a className="button button--secondary button--lg" href={url}>Launch</a>
        </div>
        <div style={{ height: 32 }} />

      </div>
      <div style={{ height: 32 }} />
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
