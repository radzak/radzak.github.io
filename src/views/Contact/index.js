import React from 'react';
import classNames from 'classnames/bind';

import Page from '@/views/components/Page';
import GoogleMap from './components/GoogleMap';
import styles from './styles.css';

const cx = classNames.bind(styles);

const Contact = props => (
  <Page color="#252627">
    <div className={cx('contact-container')}>
      <div className={cx('info')}>
        <p>radek.krzak@gmail.com</p>
      </div>
      <div className={cx('map')}>
        <GoogleMap />
      </div>
    </div>
  </Page>
);

export default Contact;
