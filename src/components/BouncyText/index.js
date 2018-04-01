import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './styles.css';

const cx = classNames.bind(styles);

const BouncyText = ({
  cssClass, wrapperCssClass, text, color
}) => {
  const spannedLetters = text.split('').map((letter, index) => (
    <span
      className={cx(cssClass, { color })}
      style={{ animationDelay: `${0.05 * index}s` }}
      key={`${letter}@${index}`} // eslint-disable-line react/no-array-index-key
    >
      {letter}
    </span>
  ));

  return <span className={cx('bouncy-text', wrapperCssClass)}>{spannedLetters}</span>;
};

BouncyText.propTypes = {
  wrapperCssClass: PropTypes.string,
  cssClass: PropTypes.string,
  text: PropTypes.string.isRequired,
  color: PropTypes.bool
};

BouncyText.defaultProps = {
  wrapperCssClass: '',
  cssClass: '',
  color: false
};

export default BouncyText;
