import React from 'react';
import classNames from 'classnames/bind';
import { AwesomeButton } from 'react-awesome-button';

import Page from '@/views/components/Page';

import styles from './styles.css';

const cx = classNames.bind(styles);

const CV = () => (
  <Page>
    <div className={cx('cv')}>
      <AwesomeButton
        type="primary"
        href="https://drive.google.com/file/d/1iydqKXZz2ujI6bceTIR-hbJFS7TQte42/view"
        target="_blank"
      >
        Download CV
      </AwesomeButton>
    </div>
  </Page>
);

export default CV;
