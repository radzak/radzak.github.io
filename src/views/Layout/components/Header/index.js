import React from 'react';
import classNames from 'classnames/bind';

import NavigationBar from './NavigationBar';
import styles from './styles.css';

const cx = classNames.bind(styles);

const Header = props => (
  <header className={cx('header')}>
    <NavigationBar />
    {/* <Toolbar onDrawerClick={this.sideDrawerToggleHandler} /> */}
    {/* SideDrawer -> TO BE ADDED */}
  </header>
);

export default Header;
