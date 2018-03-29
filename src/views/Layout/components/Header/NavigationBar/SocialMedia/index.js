import React from 'react';
import classNames from 'classnames/bind';

import styles from './styles.css';

import SocialLink from './SocialLink';

const cx = classNames.bind(styles);

const SocialMedia = props => (
  <ul className={cx('social-media')}>
    <SocialLink
      cssClass="animated bounceInDown"
      link="https://github.com/radzak"
      icon="fab fa-github"
    />
    <SocialLink
      cssClass="animated bounceInDown"
      link="https://www.linkedin.com/in/radek-krzak-13127511b/"
      icon="fab fa-linkedin-in"
    />
  </ul>
);

export default SocialMedia;
