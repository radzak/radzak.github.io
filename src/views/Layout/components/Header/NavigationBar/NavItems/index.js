import React from 'react';
import classNames from 'classnames/bind';

import { slide } from '@/views/components/Transitions';
import NavItem from './NavItem';

import styles from './styles.css';

const cx = classNames.bind(styles);

const NavItems = () => (
  <nav className={cx('nav-items')}>
    <NavItem
      exact
      to="/"
      transition={slide}
      text="Home"
      icon="fas fa-home"
      cssClass="hvr-icon-push"
    />
    <NavItem
      exact
      to="about"
      transition={slide}
      text="About"
      icon="fas fa-user"
      cssClass="hvr-icon-push"
    />
    <NavItem
      exact
      to="/skills"
      transition={slide}
      text="Skills"
      icon="fas fa-terminal"
      cssClass="hvr-icon-push"
    />
    <NavItem
      exact
      to="/projects"
      transition={slide}
      text="Projects"
      icon="fas fa-briefcase"
      cssClass="hvr-icon-push"
    />
    <NavItem
      exact
      to="/contact"
      transition={slide}
      text="Contact"
      icon="fas fa-envelope"
      cssClass="hvr-icon-push"
    />
    <NavItem
      exact
      to="/cv"
      transition={slide}
      text="CV"
      icon="fas fa-address-card"
      cssClass="hvr-icon-push"
    />
  </nav>
);

export default NavItems;
