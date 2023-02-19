import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '大手のスタイルをベース',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        GoogleやMicrosoftなどの大手IT企業が提供し、広く利用されている英語スタイルガイドをベースにしています。
      </>
    ),
  },
  {
    title: '日本語母語話者向けに説明',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        日本語母語話者に分かりやすいよう説明しています。
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
