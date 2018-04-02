import React from 'react';
import classNames from 'classnames/bind';

import Page from '@/views/components/Page';
import styles from './styles.css';

const cx = classNames.bind(styles);

const Contact = props => (
  <Page color="#252627">
    <div className={cx('banner')}>
      <h1>Contact</h1>
    </div>
  </Page>
);

export default Contact;
