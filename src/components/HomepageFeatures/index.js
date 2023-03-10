import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '大手ITスタイルガイドがベース',
    Svg: require('@site/static/img/building.svg').default,
    description: (
      <>
        GoogleやMicrosoftなど大手IT企業の英語スタイルガイドがベース。各項目は大手ITスタイルガイドにリンクし、必要に応じて参照しやすい。
      </>
    ),
  },
  {
    title: '日本語で説明',
    Svg: require('@site/static/img/shishimai.svg').default,
    description: (
      <>
        大手ITスタイルガイドは主に英語ネイティブ向けなので読むのに一苦労。本スタイルガイドは、文法用語も含めて日本語で説明。
      </>
    ),
  },
  {
    title: '間違いやすいポイントも解説',
    Svg: require('@site/static/img/dart.svg').default,
    description: (
      <>
        日本語ネイティブが間違えやすいポイントは少なくない。本スタイルガイドは、日本語ネイティブ向けの解説も追加。
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
