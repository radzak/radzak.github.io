import React, { Component, Fragment } from 'react';
import classNames from 'classnames/bind';

import Page from '@/views/components/Page';
import Typewriter from '@/components/Typewriter';
import BouncyText from '@/components/BouncyText';
import styles from './styles.css';

const cx = classNames.bind(styles);

class Home extends Component {
  state = {
    typing: true
  };

  handleTypingFinish = () => {
    this.setState({ typing: false });
  };

  words = [
    'Hey!',
    'Are you looking for someone',
    'smart?',
    'curious?',
    'ingenious?',
    'cunning?',
    'Good job, You found me!'
  ];

  render() {
    return (
      <Page color="#252627">
        <div className={cx('banner')}>
          {this.state.typing ? (
            <h1>
              <Typewriter words={this.words} period={800} onFinish={this.handleTypingFinish} />
            </h1>
          ) : (
            <Fragment>
              <h1>
                <BouncyText text="Hi!" />
                <br />
                My name is Radek Krzak
              </h1>
              <br />
              <h2>and I&apos;m a Full Stack Developer</h2>
            </Fragment>
          )}
        </div>
      </Page>
    );
  }
}

export default Home;
