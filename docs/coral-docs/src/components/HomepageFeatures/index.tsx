import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  // Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Freedom by Default',
    // Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Coral is built with Vinxi. This means that there's zero vendor coupling when building fullstack apps. We stay out of your way. No forced hosting, no opinionated data layers, no hidden magic.
      </>
    ),
  },
  {
    title: 'Built on Battle Tested Internals',
    // Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Built on proven primitives like React, TypeScript, TanStack Router, and Vinxi. Coral offers file-based routing, static asset support, server functions, primitive api routes and full control over your rendering pipeline.
      </>
    ),
  },
  {
    title: ' Lightweight React Core',
    // Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Coral keeps things lean by building directly on React. No runtime patching, no heavy abstractions, and no unnecessary layers between you and the platform.
      </>
    ),
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {/* <Svg className={styles.featureSvg} role="img" /> */}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
