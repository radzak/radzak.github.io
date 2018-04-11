import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './styles.css';

const cx = classNames.bind(styles);

const NavItem = ({
  cssClass, text, icon, to, transition, ...rest
}) => (
  <li>
    <NavLink
      {...rest}
      className={cx('nav-link', cssClass)}
      activeClassName={cx('nav-link--active')}
      to={{
        pathname: to,
        state: transition
      }}
    >
      <i className={classNames(icon, 'hvr-icon')} />
      {/* <span className={cx('nav-link-caption')}>{text}</span> */}
    </NavLink>
  </li>
);

NavItem.propTypes = {
  cssClass: PropTypes.string,
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  transition: PropTypes.shape({
    transitionName: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired
  }).isRequired
};

NavItem.defaultProps = {
  cssClass: ''
};

export default NavItem;
