import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './styles.css';

const cx = classNames.bind(styles);

const NavItem = ({ text, icon, ...rest }) => (
  <li>
    <NavLink {...rest} className={cx('navLink')} activeClassName={cx('navLink--active')}>
      <i className={icon} />
      {text}
    </NavLink>
  </li>
);

NavItem.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default NavItem;
