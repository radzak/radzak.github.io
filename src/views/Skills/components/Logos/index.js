import React from 'react';
import PropTypes from 'prop-types';

import PythonLogo from '@/assets/PythonLogo.svg';
import DjangoLogo from '@/assets/DjangoLogo.svg';
import DrfLogo from '@/assets/DjangoRestFrameworkLogo.jpg';
import ReactLogo from '@/assets/ReactLogo.svg';
import ReduxLogo from '@/assets/ReduxLogo.svg';
import HtmlCssLogo from '@/assets/HtmlCssLogo.svg';
import Logo from './Logo';

const Logos = ({ wrapperClass, logoClass }) => (
  <div className={wrapperClass}>
    <Logo cssClass={logoClass} src={PythonLogo} alt="Python Logo" href="https://www.python.org/" />
    <Logo
      cssClass={logoClass}
      src={DjangoLogo}
      alt="Django Logo"
      href="https://www.djangoproject.com/"
    />
    <Logo
      cssClass={logoClass}
      src={DrfLogo}
      alt="Django Rest Framework Logo"
      href="http://www.django-rest-framework.org/"
    />
    <Logo cssClass={logoClass} src={ReactLogo} alt="React Logo" href="https://reactjs.org/" />
    <Logo cssClass={logoClass} src={ReduxLogo} alt="Redux Logo" href="https://redux.js.org/" />
    <Logo
      cssClass={logoClass}
      src={HtmlCssLogo}
      alt="HTML CSS Logo"
      href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5"
    />
  </div>
);

Logos.propTypes = {
  wrapperClass: PropTypes.string,
  logoClass: PropTypes.string
};

Logos.defaultProps = {
  wrapperClass: undefined,
  logoClass: undefined
};

export default Logos;
