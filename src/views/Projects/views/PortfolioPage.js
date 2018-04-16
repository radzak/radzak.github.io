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
          My personal website, built with React.
        </p>
      </section>
    </div>

    <AwesomeButton type="github" href="https://radekkrzak.com" target="_blank">
      Visit
    </AwesomeButton>
  </Project>
);

export default PortfolioPage;
