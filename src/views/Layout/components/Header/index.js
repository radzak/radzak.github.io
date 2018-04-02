import React from 'react';
import classNames from 'classnames/bind';

import NavigationBar from './NavigationBar';
import styles from './styles.css';

const cx = classNames.bind(styles);

const Header = props => (
  // TODO: fade from the right direction
  <div className={cx('header', 'animated', 'fadeInDown')}>
    <NavigationBar />
  </div>
);

export default Header;
