import React from 'react';
import classNames from 'classnames/bind';
import { AwesomeButtonSocial } from 'react-awesome-button';

import Project from '../Project';
import styles from '../styles/project-details.css';

const cx = classNames.bind(styles);

const RtvDownloader = () => (
  <Project name="RTV Downloader">
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

    <AwesomeButtonSocial
      type="github"
      href="https://github.com/radzak/rtv-downloader"
      target="_blank"
    >
      Visit the repo
    </AwesomeButtonSocial>
  </Project>
);

export default RtvDownloader;
