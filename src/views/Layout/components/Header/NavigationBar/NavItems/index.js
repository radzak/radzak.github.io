import React from 'react';
import classNames from 'classnames/bind';

import HomeIcon from 'react-icons/lib/io/home';
import PersonIcon from 'react-icons/lib/io/android-person';
import SkillsIcon from 'react-icons/lib/io/settings';
import ProjectsIcon from 'react-icons/lib/io/android-laptop';
import ContactIcon from 'react-icons/lib/io/ios-email';
import CvIcon from 'react-icons/lib/io/document-text';

import { scale } from '@/views/components/Transitions';
import NavItem from './NavItem';

import styles from './styles.css';

const cx = classNames.bind(styles);

const NavItems = () => (
  <nav className={cx('nav-items')}>
    {/* <NavItem
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
    /> */}
    <NavItem
      exact
      to="/home"
      transition={scale}
      text="Home"
      icon={HomeIcon}
      cssClass="hvr-icon-push"
    />
    <NavItem
      exact
      to="/about"
      transition={scale}
      text="About"
      icon={PersonIcon}
      cssClass="hvr-icon-push"
    />
    <NavItem
      exact
      to="/skills"
      transition={scale}
      text="Skills"
      icon={SkillsIcon}
      cssClass="hvr-icon-push"
    />
    <NavItem
      exact
      to="/projects"
      transition={scale}
      text="Projects"
      icon={ProjectsIcon}
      cssClass="hvr-icon-push"
    />
    <NavItem
      exact
      to="/contact"
      transition={scale}
      text="Contact"
      icon={ContactIcon}
      cssClass="hvr-icon-push"
    />
    <NavItem exact to="/cv" transition={scale} text="CV" icon={CvIcon} cssClass="hvr-icon-push" />
  </nav>
);

export default NavItems;
