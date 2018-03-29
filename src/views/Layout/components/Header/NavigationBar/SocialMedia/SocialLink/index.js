import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './styles.css';

const cx = classNames.bind(styles);

const SocialLink = ({ icon, link, cssClass }) => (
  <a className={`${cx('social-link')} ${cssClass}`} href={link} target="_blank">
    <i className={icon} />
  </a>
);

SocialLink.propTypes = {
  cssClass: PropTypes.string,
  icon: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

SocialLink.defaultProps = {
  cssClass: ''
};

export default SocialLink;
