import React from 'react';
import classNames from 'classnames/bind';

import styles from './styles.css';

const cx = classNames.bind(styles);

const Footer = props => (
  <footer className={cx('footer')}>Made by radzak © {new Date().getFullYear()}</footer>
);

export default Footer;
