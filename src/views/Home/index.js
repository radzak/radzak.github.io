import React from 'react';
import classNames from 'classnames/bind';

import styles from './styles.css';

const cx = classNames.bind(styles);

const spanLetters = text =>
  // eslint-disable-next-line react/no-array-index-key
  text.split('').map((letter, index) => <span key={`${letter}@${index}`}>{letter}</span>);

const Home = props => (
  // TODO: fix pointer events
  // TODO: scale/breakpoint font-size
  <div className={cx('home-banner')}>
    <div className="animated fadeIn" style={{ animationDuration: '3s' }}>
      <h1 className={cx('bouncy-text')}>{spanLetters('Hi!')}</h1>
      <br />
      <h1>My name is Radek</h1>
      <br />
      <h2>and I&apos;m a Full Stack Developer</h2>
    </div>
  </div>
);

export default Home;
