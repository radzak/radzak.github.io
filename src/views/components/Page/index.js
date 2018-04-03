import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './styles.css';

const cx = classNames.bind(styles);

const Page = ({
  color, children, pointerEvents, ...rest
}) => (
  <div className={cx('page')} style={{ pointerEvents, backgroundColor: color, ...rest }}>
    {children}
  </div>
);

Page.propTypes = {
  color: PropTypes.string,
  children: PropTypes.node.isRequired,
  pointerEvents: PropTypes.oneOf(['none', 'auto'])
};

Page.defaultProps = {
  color: '',
  pointerEvents: 'none'
};

export default Page;
