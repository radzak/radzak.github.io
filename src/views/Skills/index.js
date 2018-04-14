import React from 'react';
import classNames from 'classnames/bind';

import Page from '@/views/components/Page';
import Logos from './components/Logos';

import styles from './styles.css';

const cx = classNames.bind(styles);

const Skills = props => (
  <Page pointerEvents="auto">
    <div className={cx('wrapper')}>
      <div className={cx('text-section')}>
        <div className={cx('content')}>
          <h1>Skills</h1>
          <p>
            Lorizzle ipsizzle dolizzle mammasay mammasa mamma oo sa ghetto, dope adipiscing bizzle.
            Phat mammasay mammasa mamma oo sa velizzle, boofron volutpizzle, suscipizzle we gonna
            chung, brizzle my shizz, daahng dawg. Pellentesque egizzle cool. Sed erizzle. Away away
            bling bling dapibus turpis tempizzle bizzle. Maurizzle i'm in the shizzle nibh izzle
            turpizzle. Fo shizzle in tortizzle. Pellentesque eleifend rhoncus nisi. nizzle shiznit
            the bizzle dictumst. Rizzle dapibus. Phat tellus dope, pretizzle eu, mattis brizzle,
            eleifend vitae, nunc. Pizzle suscipizzle. Integer sempizzle velit mammasay mammasa mamma
            oo sa purizzle.
          </p>
        </div>
      </div>
      <div className={cx('media-section')}>
        <Logos wrapperClass={cx('logo-grid')} logoClass={cx('logo')} />
      </div>
    </div>
  </Page>
);

export default Skills;
