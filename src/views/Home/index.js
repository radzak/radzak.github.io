import React from 'react';
import classNames from 'classnames/bind';

import styles from './styles.css';

const cx = classNames.bind(styles);

const Home = props => (
  <div className={cx('home-banner')}>
    <div className="animated fadeIn" style={{ animationDuration: '3s' }}>
      <h1
        style={{
          display: 'block',
          fontSize: '7.7vw',
          lineHeight: '7.9vw',
          textAlign: 'center',
          verticalAlign: 'baseline'
        }}
      >
        <span>Not</span> <span>Your</span>
        <br />
        <span>Average</span>
        <br />
        <span>Full Stack</span>
        <br />
        <span>Developer</span>
      </h1>
    </div>
  </div>
);

export default Home;
