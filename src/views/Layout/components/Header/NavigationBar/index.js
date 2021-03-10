import React from 'react';
import classNames from 'classnames/bind';

import styles from './styles.css';

import NavItems from './NavItems';
import SocialMedia from './SocialMedia';

const cx = classNames.bind(styles);

const NavigationBar = () => (
  <div className={cx('navbar')}>
    <div className={cx('nav-header')} />
    <div className={cx('nav-items')}>
      <NavItems />
    </div>
    <div className={cx('nav-social')}>
      <SocialMedia />
    </div>
  </div>
);

export default NavigationBar;
