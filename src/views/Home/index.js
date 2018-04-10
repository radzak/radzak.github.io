import React, { Component } from 'react';
import classNames from 'classnames/bind';

import Page from '@/views/components/Page';
import BouncyText from '@/components/BouncyText';
import styles from './styles.css';

const cx = classNames.bind(styles);

// eslint-disable-next-line react/prefer-stateless-function
class Home extends Component {
  render() {
    return (
      <Page>
        <div className={cx('banner')}>
          <h1>
            <BouncyText text="Hi!" />
          </h1>
          <h1>My name is Radek Krzak</h1>
          <h2>and I&apos;m a Full Stack Developer</h2>
        </div>
      </Page>
    );
  }
}

export default Home;
