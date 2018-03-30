import React from 'react';
import classNames from 'classnames/bind';

import styles from './styles.css';

import NavItem from '../NavItems/NavItem';

const cx = classNames.bind(styles);

const NavHeader = props => (
  <div className={cx('nav-header')}>
    <NavItem exact to="/" icon="fas fa-home" />
  </div>
);

export default NavHeader;
