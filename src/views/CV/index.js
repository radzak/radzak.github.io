import React from 'react';
import classNames from 'classnames/bind';

import CvPDF from "@/assets/Radek's Resume.png";
import Page from '@/views/components/Page';

import styles from './styles.css';

const cx = classNames.bind(styles);

const CV = props => (
  <Page>
    <div className={cx('cv')}>
      <img src={CvPDF} alt="Radek's Resume" />
    </div>
  </Page>
);

export default CV;
