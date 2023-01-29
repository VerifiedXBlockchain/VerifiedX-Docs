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
        Use the GUI on Windows or MacOS to interact with the network through a graphical user interface.

      </>
    ),
  },
  {
    title: 'CLI Documenation',
    url: "/docs/CLI/",
    description: (
      <>
        Use the CLI on Windows, MacOS, or Linux to interact with the network through the command line interface.
      </>
    ),
  },

  {
    title: 'Integration Documentation',
    url: "/docs/integration/",

    description: (
      <>
        Learn about integrating with the RBX network.
        <br /> &nbsp;

      </>
    ),
  },
  {
    title: 'Video Tutorials',
    url: "/docs/FAQs/video-tutorials/",

    description: (
      <>
        Learn more about installing and operating the RBX GUI and CLI through a collection of video tutorials.

      </>
    ),
  },
  {
    title: 'Whitepaper v2',
    url: "docs/documents/whitepaper-v2/",

    description: (
      <>
        Read the ReserveBlock Whitepaper v2.

      </>
    ),
  },
  {
    title: 'FAQs',
    url: "/docs/faqs/",

    description: (
      <>
        Read the network's frequently asked questions.

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
          <p style={{ fontSize: 18, lineHeight: 1.2, paddingLeft: 42, paddingRight: 42, minHeight: 66 }}>{description}</p>
        </div>
        <div className="text--center">
          <a className="button button-3d-white" href={url}>Launch</a>
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
