import React from 'react';
import classNames from 'classnames/bind';

import styles from './styles.css';

const cx = classNames.bind(styles);

const NavHeader = props => <div className={cx('nav-header')} />;

export default NavHeader;
