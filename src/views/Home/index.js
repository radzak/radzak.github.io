import React from 'react';
import classNames from 'classnames/bind';

import styles from './styles.css';

const cx = classNames.bind(styles);

const Home = props => (
  <div className={cx('home-banner')}>
    <div className="animated zoomIn">
      <p style={{ textAlign: 'center' }}>
        Lorizzle ipsizzle dolor sit amizzle, fizzle adipiscing pizzle. Nullizzle ma nizzle velit,
        aliquet volutpizzle, gangsta boofron, gravida pot, go to hizzle. Go to hizzle ass tortizzle.
        Sed erizzle. Pimpin my shizz fo shizzle my nizzle dapibus gangster tempizzle gangsta.
        Maurizzle doggy izzle turpis. Vestibulum in tortizzle. Pellentesque get down get down
        rhoncus nisi. In hizzle sure platea dictumst. Donec dapibizzle. Brizzle da bomb dizzle,
        pretium yo mamma, mattizzle izzle
      </p>
    </div>
  </div>
);

export default Home;
