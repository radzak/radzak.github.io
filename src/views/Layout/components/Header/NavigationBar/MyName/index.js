import React from 'react';
import classNames from 'classnames/bind';

import styles from './styles.css';

const cx = classNames.bind(styles);

const NavHeader = props => (
  <div className={cx('my-name-container')}>
    <h3 className={cx('my-name')}>Radek Krzak</h3>
  </div>
);

export default NavHeader;
