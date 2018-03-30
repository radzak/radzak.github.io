import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './styles.css';

const cx = classNames.bind(styles);

class NavItem extends Component {
  state = {
    showCaption: false
  };

  render() {
    const {
      cssClass, text, icon, ...rest
    } = this.props;

    return (
      <li
        style={{ position: 'relative' }}
        onMouseEnter={() => this.setState({ showCaption: true })}
        onClick={() => this.setState({ showCaption: false })}
        onMouseLeave={() => this.setState({ showCaption: false })}
      >
        <NavLink
          {...rest}
          className={`${cx('navLink')} ${cssClass}`}
          activeClassName={cx('navLink--active')}
        >
          <i className={icon} />
        </NavLink>
        {text &&
          this.state.showCaption && (
            <div
              className="animated fadeIn"
              style={{ position: 'absolute', left: '80px', bottom: '15px' }}
            >
              {text}
            </div>
          )}
      </li>
    );
  }
}

NavItem.propTypes = {
  cssClass: PropTypes.string,
  text: PropTypes.string,
  icon: PropTypes.string.isRequired
};

NavItem.defaultProps = {
  cssClass: '',
  text: ''
};

export default NavItem;
