import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import Particles from './components/Particles';
import Header from './components/Header';
import styles from './styles.css';

const cx = classNames.bind(styles);

const Layout = props => (
  <div className={cx('container')}>
    {/* <div className={cx('overlay')}>
      <Particles />
    </div> */}
    <div className={cx('header')}>
      <Header />
    </div>
    <main className={cx('main')}>{props.children}</main>
  </div>
);

Layout.propTypes = {
  children: PropTypes.element.isRequired
};

export default Layout;
