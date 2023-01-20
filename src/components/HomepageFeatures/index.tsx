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
    title: 'CLI Documenation',
    url: "/docs/category/cli",
    description: (
      <>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, natus. Consequatur excepturi quas fuga blanditiis laboriosam ab, aliquid odit reiciendis doloremque voluptatibus.
      </>
    ),
  },
  {
    title: 'GUI Documentation',
    url: "/docs/category/gui",

    description: (
      <>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, natus. Consequatur excepturi quas fuga blanditiis laboriosam ab, aliquid odit reiciendis doloremque voluptatibus.

      </>
    ),
  },
  {
    title: 'Integration Documentation',
    url: "/docs/category/integration",

    description: (
      <>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, natus. Consequatur excepturi quas fuga blanditiis laboriosam ab, aliquid odit reiciendis doloremque voluptatibus.

      </>
    ),
  },
];

function Feature({ title, description, url }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>

      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="text--center">
        <a className="button button--secondary button--lg" href={url}>Launch</a>
      </div>
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
