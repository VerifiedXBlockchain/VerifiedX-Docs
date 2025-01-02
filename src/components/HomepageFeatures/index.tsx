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
    title: 'Core CLI Docs',
    url: "/docs/core/",
    description: (
      <>
        Use the Core CLI on Windows, MacOS, or Linux to interact with the network through the command line interface.
      </>
    ),
  },
  {
    title: 'Switchblade GUI Docs',
    url: "/docs/gui/",

    description: (
      <>
        Use the Switchblade GUI on Windows, MacOS, and web to interact with the network through a graphical user interface.

      </>
    ),
  },
  {
    title: 'Integration Documentation',
    url: "/docs/integration/",

    description: (
      <>
        Learn about integrating with the VFX network.
        <br /> &nbsp;

      </>
    ),
  },
  {
    title: 'Video Tutorials',
    url: "/docs/video-tutorials/",

    description: (
      <>
        Learn more about installing and operating the RBX GUI and CLI through a collection of video tutorials.

      </>
    ),
  },
  {
    title: 'Network Assets',
    url: "docs/network-assets/",

    description: (
      <>
        Read the ReserveBlock Whitepaper v2.

      </>
    ),
  },
  {
    title: 'Documents',
    url: "/docs/documents/",

    description: (
      <>
        Download and read the whitepaper and other documents.

      </>
    ),
  },

];

function Feature({ title, description, url }: FeatureItem) {
  return (
    <div className={clsx('col col--6')}>
      <div style={{ height: 32 }} />

      <div style={{ backgroundColor: "rgba(21, 22, 24, 0.9)", borderRadius: 12, border: '1px solid #192835', boxShadow: '0px 0px 10px #192834', }}>
        <div style={{ height: 32 }} />


        <div className="text--center padding-horiz--md">
          <h2>{title}</h2>
          <p style={{ fontSize: 18, lineHeight: 1.2, paddingLeft: 42, paddingRight: 42, minHeight: 66 }}>{description}</p>
        </div>
        <div className="text--center">
          <a className="button" href={url}>Launch</a>
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
