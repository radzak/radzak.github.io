import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './styles.css';

const cx = classNames.bind(styles);

const SocialLink = ({ icon, link }) => (
  <a className={cx('social-link')} href={link} target="_blank">
    <i className={icon} />
  </a>
);

SocialLink.propTypes = {
  icon: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

export default SocialLink;
