import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { AwesomeButton } from 'react-awesome-button';

import { scale } from '@/views/components/Transitions';
import Page from '@/views/components/Page';
import styles from './styles.css';

const cx = classNames.bind(styles);

// eslint-disable-next-line react/prefer-stateless-function
class Home extends Component {
  render() {
    return (
      <Page>
        <div className={cx('banner')}>
          <h1>Radosław Krzak</h1>
          <br />
          <h2>Software Engineer</h2>
          <div className={cx('contact-button')}>
            <Link
              to={{
                pathname: '/contact',
                state: scale
              }}
            >
              <AwesomeButton type="primary">Contact me</AwesomeButton>
            </Link>
          </div>
        </div>
      </Page>
    );
  }
}

export default Home;
