import React from 'react';
import PropTypes from 'prop-types';

const Logo = ({
  src, alt, href, cssClass
}) => (
  <a className={cssClass} href={href} target="_blank">
    <img src={src} alt={alt} />
  </a>
);

Logo.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  cssClass: PropTypes.string
};

Logo.defaultProps = {
  cssClass: undefined
};

export default Logo;
