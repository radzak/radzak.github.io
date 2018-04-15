import React from 'react';
import classNames from 'classnames/bind';
import { AwesomeButton } from 'react-awesome-button';

import Project from '../Project';
import styles from '../styles/project-details.css';

const cx = classNames.bind(styles);

const PortfolioPage = () => (
  <Project name="Portfolio Page">
    <div className={cx('text')}>
      <section>
        <h2>About</h2>
        <hr />
        <p>
          The idea behind this project was to create a tool making it easy to download videos from
          various Polish video platforms.
        </p>
        <p>
          RTV Downloader is written entirely in Python 3.6, makes use of popular packages such as
          requests and BeautifulSoup to scrape videos data (e.g. date, title).
        </p>
      </section>
    </div>

    <AwesomeButton type="github" href="https://radekkrzak.com" target="_blank">
      Visit
    </AwesomeButton>
  </Project>
);

export default PortfolioPage;
