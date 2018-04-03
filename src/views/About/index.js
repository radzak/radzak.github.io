import React from 'react';
import classNames from 'classnames/bind';

import Page from '@/views/components/Page';
import styles from './styles.css';

const cx = classNames.bind(styles);

const About = props => (
  <Page>
    <div className={cx('banner')}>
      <p style={{ textAlign: 'center' }}>About me (:</p>
    </div>
  </Page>
);

export default About;
