import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './styles.css';

const cx = classNames.bind(styles);

const Page = ({ color, children, ...rest }) => (
  <div className={cx('page')} style={{ backgroundColor: color, ...rest }}>
    {children}
  </div>
);

Page.propTypes = {
  color: PropTypes.string,
  children: PropTypes.node.isRequired
};

Page.defaultProps = {
  color: ''
};

export default Page;
