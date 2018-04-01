import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './styles.css';

const cx = classNames.bind(styles);

// eslint-disable-next-line react/prefer-stateless-function
class NavItem extends Component {
  render() {
    const {
      cssClass, text, icon, ...rest
    } = this.props;

    return (
      <li>
        <NavLink
          {...rest}
          className={classNames(cx('nav-link'), cssClass)}
          activeClassName={cx('nav-link--active')}
        >
          <i className={classNames(icon, 'hvr-icon')} />
          <span className={cx('nav-link-caption')}>{text}</span>
        </NavLink>
      </li>
    );
  }
}

NavItem.propTypes = {
  cssClass: PropTypes.string,
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

NavItem.defaultProps = {
  cssClass: ''
};

export default NavItem;
