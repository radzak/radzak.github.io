import React from 'react';
import PropTypes from 'prop-types';

import PythonLogo from '@/assets/PythonLogo.svg';
import KubernetesLogo from '@/assets/KubernetesLogo.svg';
import ReactLogo from '@/assets/ReactLogo.svg';
import AirflowLogo from '@/assets/AirflowLogo.png';
import HtmlCssLogo from '@/assets/HtmlCssLogo.svg';
import TerraformLogo from '@/assets/TerraformLogo.svg';

import Logo from './Logo';

const Logos = ({ wrapperClass, logoClass }) => (
  <div className={wrapperClass}>
    <Logo
      cssClass={logoClass}
      src={PythonLogo}
      alt="Python Logo"
      href="https://www.python.org/"
    />
    <Logo
      cssClass={logoClass}
      src={AirflowLogo}
      alt="Apache Airflow Logo"
      href="https://airflow.apache.org/"
    />
    <Logo
      cssClass={logoClass}
      src={KubernetesLogo}
      alt="Kubernetes Logo"
      href="https://kubernetes.io/"
    />
    <Logo
      cssClass={logoClass}
      src={TerraformLogo}
      alt="Terraform Logo"
      href="https://www.terraform.io/"
    />
    <Logo
      cssClass={logoClass}
      src={ReactLogo}
      alt="React Logo"
      href="https://reactjs.org/"
    />
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
