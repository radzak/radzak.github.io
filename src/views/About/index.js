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
            I am a 23 years old self-taught programmer, based in London. I work
            for Revolut in FinCrime department. I aim to deliver good quality
            code and well-designed solutions. I am the kind of person that never
            settles and keeps working hard on improvements.
          </p>
          <p>
            I am most proficient in Python, I’ve been fascinated by this
            language, ever since I started coding. Sometimes I play around with
            React and other related web technologies. Back in the day, I used to
            contribute to Stack Overflow by answering questions related to my
            interests such as web scraping.
          </p>
          <p>
            I really enjoy working from the office, but nowadays, I am looking
            for remote opportunities, that would let me travel and see more
            beautiful places in the world. Currently, I am staying on Tenerife
            and really enjoy it so far.
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
