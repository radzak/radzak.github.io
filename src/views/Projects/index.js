import React from 'react';
import classNames from 'classnames/bind';

import Page from '@/views/components/Page';
import RtvDownloader from './views/RtvDownloader';
import TeamUp from './views/TeamUp';
import PortfolioPage from './views/PortfolioPage';

import styles from './styles.css';

const cx = classNames.bind(styles);

const Projects = props => (
  <Page pointerEvents="auto">
    <div className={cx('wrapper')}>
      <header className={cx('heading')}>
        <h1>Personal Projects</h1>
        <h3>Check out what I&apos;ve been working on over the last months.</h3>
      </header>

      <ul className={cx('projects-grid')}>
        <li className={cx('grid-item')}>
          <RtvDownloader />
        </li>
        <li className={cx('grid-item')}>
          <TeamUp />
        </li>
        <li className={cx('grid-item')}>
          <PortfolioPage />
        </li>
      </ul>
    </div>
  </Page>
);

export default Projects;
