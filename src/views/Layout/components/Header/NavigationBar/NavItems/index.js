import React from 'react';
import classNames from 'classnames/bind';

import styles from './styles.css';

import NavItem from './NavItem';

const cx = classNames.bind(styles);

const NavItems = () => (
  <nav className={cx('nav-items')}>
    <NavItem exact to="/" icon="fas fa-home" cssClass="hvr-icon-push" />
    <NavItem exact to="/about" text="About" icon="fas fa-user" cssClass="hvr-icon-push" />
    <NavItem exact to="/cv" text="CV" icon="fas fa-address-card" cssClass="hvr-icon-push" />
  </nav>
);

export default NavItems;
