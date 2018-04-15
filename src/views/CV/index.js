import React from 'react';
import classNames from 'classnames/bind';
import { AwesomeButton } from 'react-awesome-button';

import Page from '@/views/components/Page';

import styles from './styles.css';

const cx = classNames.bind(styles);

const CV = props => (
  <Page>
    <div className={cx('cv')}>
      <AwesomeButton
        type="primary"
        href="https://drive.google.com/open?id=1eHNiY5ThFiKbHNA3Zi6Za_gimFWMQVUk"
        target="_blank"
      >
        Download CV
      </AwesomeButton>
    </div>
  </Page>
);

export default CV;
