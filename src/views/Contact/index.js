import React from 'react';
import classNames from 'classnames/bind';

import Page from '@/views/components/Page';
import SocialButtons from './components/SocialButtons';
import GoogleMap from './components/GoogleMap';

import styles from './styles.css';

const cx = classNames.bind(styles);

const Contact = props => (
  <Page pointerEvents="auto">
    <div className={cx('wrapper')}>
      <div className={cx('info-section')}>
        <div className={cx('heading')}>
          <h2>Let&apos;s talk</h2>
        </div>
        <div className={cx('content')}>
          <p>
            I am available both in <strong>Poznan</strong> and <strong>Krakow</strong>.<br />
            Wanna get in touch or talk about a project?<br />
            Feel free to contact me via email at{' '}
            <span className={cx('fancy')}>
              <a href="mailto:radek.krzak@gmail.com">radek.krzak@gmail.com</a>
            </span>
          </p>
        </div>
        <div className={cx('social')}>
          <SocialButtons />
        </div>
      </div>
      <div className={cx('map-section')}>
        <GoogleMap />
      </div>
    </div>
  </Page>
);

export default Contact;
