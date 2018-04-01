import React, { Component } from 'react';
import classNames from 'classnames/bind';

import Typewriter from '@/components/Typewriter';
import BouncyText from '@/components/BouncyText';
import styles from './styles.css';

const cx = classNames.bind(styles);

class Home extends Component {
  words = ['smart?', 'curious?', 'ingenious?', 'cunning?', 'Good job, You found me!'];

  render() {
    return (
      <div className={cx('home-banner')}>
        <h1>
          <BouncyText text="Hi!" />
          <br />
          <Typewriter words={this.words} period={800} onFinish={() => console.log('Finished')} />
        </h1>
        <br />
        <h2>A single &lt;span&gt; is all you need.</h2>
      </div>
    );
  }
}

export default Home;

//     <div
//       className="animated fadeIn"
//       style={{
//         animationDuration: '3s',
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center'
//       }}
//     >
