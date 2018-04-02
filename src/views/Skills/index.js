import React from 'react';
import classNames from 'classnames/bind';

import Page from '@/views/components/Page';
import styles from './styles.css';

const cx = classNames.bind(styles);

const Skills = props => (
  <Page color="#252627">
    <div className={cx('banner')}>
      <h1>Skills</h1>
    </div>
  </Page>
);

export default Skills;
