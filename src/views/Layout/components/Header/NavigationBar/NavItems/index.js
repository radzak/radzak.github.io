import React from 'react';
import classNames from 'classnames/bind';

import styles from './styles.css';

import NavItem from './NavItem';

const cx = classNames.bind(styles);

const NavItems = () => (
  <nav className={cx('nav-items')}>
    <NavItem exact to="/about" text="About" icon="fas fa-user-circle" />
    <NavItem exact to="/cv" text="CV" icon="fas fa-address-card" />
  </nav>
);

export default NavItems;
