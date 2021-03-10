import React from 'react';
import classNames from 'classnames/bind';

import Page from '@/views/components/Page';
import WordCloud from './components/WordCloud';

import styles from './styles.css';

const cx = classNames.bind(styles);

const Skills = props => (
  <Page pointerEvents="auto">
    <div className={cx('wrapper')}>
      <div className={cx('text-section')}>
        <div className={cx('content')}>
          <h1>Skills</h1>
          <p>
            My main field of expertise is API development in microservice
            architecture. At Revolut I got some DevOps experience performing
            infrastructure migrations between different setups and Google Cloud
            projects. I used to be responsible for full lifecycle of projects,
            i.e. design, implementation, monitoring and maintenance.
          </p>
          <p>
            I gained some experience at MLOps after facing a challenge of
            productionizing training of ML models in Revolut. I also enjoy
            web-scraping and web automations using Python
            (BeautifulSoup/Selenium).
          </p>
          <p>
            Besides that I&apos;m a great fan of code review, pair programming
            and other collaboration techniques. I find them very stimulating and
            helpful in improving one&apos;s skills and habits.
          </p>
        </div>
      </div>
      <div className={cx('media-section')}>
        <WordCloud />
      </div>
    </div>
  </Page>
);

export default Skills;
