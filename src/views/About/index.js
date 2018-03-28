import React from 'react';
import classNames from 'classnames/bind';

import styles from './styles.css';

const cx = classNames.bind(styles);

const About = props => (
  <div className={cx('home-banner')}>
    <p style={{ textAlign: 'center' }}>About me (:</p>
  </div>
);

export default About;
