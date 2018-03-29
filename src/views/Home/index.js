import React from 'react';
import classNames from 'classnames/bind';

import styles from './styles.css';

const cx = classNames.bind(styles);

const Home = props => (
  <div className={cx('home-banner')}>
    <div className="animated fadeIn" style={{ animationDuration: '3s' }}>
      <p style={{ textAlign: 'center', fontSize: '4em' }}>Hey,</p>
      <p style={{ textAlign: 'center', fontSize: '4em' }}>I&apos;m Radek</p>
    </div>
  </div>
);

export default Home;
