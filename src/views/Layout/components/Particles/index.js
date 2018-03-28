import React, { Component } from 'react';
import classNames from 'classnames/bind';
import 'particles.js';

import particlesSettings from './particles.json';
import styles from './styles.css';

const cx = classNames.bind(styles);

class Particles extends Component {
  componentDidMount = () => {
    window.particlesJS('particles-js', particlesSettings, () => {});
  };

  render() {
    return <div className={cx('particles')} id="particles-js" />;
  }
}

export default Particles;
