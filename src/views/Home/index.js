import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
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
          <h1>
            Hello, I&apos;m <span>Radek Krzak</span>.
          </h1>
          <br />
          <h1>I&apos;m a full-stack developer.</h1>
          <div className={cx('contact-button')}>
            <NavLink
              to={{
                pathname: '/contact',
                state: scale
              }}
            >
              <AwesomeButton type="primary">
                <i className="far fa-address-card" /> Contact me
              </AwesomeButton>
            </NavLink>
          </div>
        </div>
      </Page>
    );
  }
}

export default Home;
