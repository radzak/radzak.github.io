import React from 'react';
import classNames from 'classnames/bind';

import { scale } from '@/views/components/Transitions';
import NavItem from './NavItem';

import styles from './styles.css';

const cx = classNames.bind(styles);

const NavItems = () => (
  <nav className={cx('nav-items')}>
    <NavItem
      exact
      to="/home"
      transition={scale}
      text="Home"
      icon="fas fa-home"
      cssClass="hvr-icon-push"
    />
    <NavItem
      exact
      to="/about"
      transition={scale}
      text="About"
      icon="fas fa-user"
      cssClass="hvr-icon-push"
    />
    <NavItem
      exact
      to="/skills"
      transition={scale}
      text="Skills"
      icon="fas fa-terminal"
      cssClass="hvr-icon-push"
    />
    <NavItem
      exact
      to="/projects"
      transition={scale}
      text="Projects"
      icon="fas fa-briefcase"
      cssClass="hvr-icon-push"
    />
    <NavItem
      exact
      to="/contact"
      transition={scale}
      text="Contact"
      icon="fas fa-envelope"
      cssClass="hvr-icon-push"
    />
    <NavItem
      exact
      to="/cv"
      transition={scale}
      text="CV"
      icon="fas fa-address-card"
      cssClass="hvr-icon-push"
    />
  </nav>
);

export default NavItems;
