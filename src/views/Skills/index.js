import React from 'react';
import classNames from 'classnames/bind';

import Page from '@/views/components/Page';
import MyCloud from './components/MyCloud';

import styles from './styles.css';

const cx = classNames.bind(styles);

const Skills = props => (
  <Page pointerEvents="auto">
    <div className={cx('wrapper')}>
      <div className={cx('text-section')}>
        <div className={cx('content')}>
          <h1>Skills</h1>
          <p>
            My current backend toolset includes Python, Django & Django Rest Framework. As for
            frontend I use React along with Redux and Jest, Enzyme for testing.
          </p>
          <p>I also have experience with web-scraping using Python (mainly BeautifulSoup).</p>
          <p>
            Besides that I&apos;m a great fan of code review, pair programming and other
            collaboration techniques. I find them very stimulating and helpful in refactoring
            one&apos;s skills and habits.
          </p>
        </div>
      </div>
      <div className={cx('media-section')}>
        <MyCloud />
      </div>
    </div>
  </Page>
);

export default Skills;
