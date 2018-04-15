import React from 'react';
import classNames from 'classnames/bind';

import NavigationBar from './NavigationBar';
import styles from './styles.css';

const cx = classNames.bind(styles);

const Header = props => (
  <div className={cx('header')}>
    <NavigationBar />
  </div>
);

export default Header;
