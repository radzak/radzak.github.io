import React from 'react';
import classNames from 'classnames/bind';

import Page from '@/views/components/Page';
import Logos from './components/Logos';

import styles from './styles.css';

const cx = classNames.bind(styles);

const About = () => (
  <Page pointerEvents="auto">
    <div className={cx('wrapper')}>
      <div className={cx('text-section')}>
        <div className={cx('content')}>
          <h1>About me</h1>
          <p>
            I&apos;m 21 years old self-taught programmer based in Poland. My
            main field of expertise is Python, I’ve been fascinated by this
            language, ever since I started coding.
          </p>
          <p>
            However, not long time ago I decided to broaden my horizons and
            expand my knowledge by learning React and other related web
            technologies.
          </p>
          <p>
            In my free time I like to contribute to Stack Overflow by answering
            questions related to my interests such as web scraping.
          </p>
        </div>
      </div>
      <div className={cx('media-section')}>
        <Logos wrapperClass={cx('logo-grid')} logoClass={cx('logo')} />
      </div>
    </div>
  </Page>
);

export default About;
