import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './styles.css';

const cx = classNames.bind(styles);

const SocialLink = ({ icon, link, cssClass }) => (
  <li className={cssClass} style={{ listStyleType: 'none' }}>
    <a className={cx('social-link')} href={link} target="_blank">
      <i className={icon} />
    </a>
  </li>
);

SocialLink.propTypes = {
  cssClass: PropTypes.string,
  icon: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

SocialLink.defaultProps = {
  cssClass: undefined
};

export default SocialLink;
