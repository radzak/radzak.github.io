import React, { Component } from 'react';
import classNames from 'classnames/bind';
import TagCloud from 'react-tag-cloud';
import randomColor from 'randomcolor';

import styles from './styles.css';

const cx = classNames.bind(styles);

// eslint-disable-next-line react/prefer-stateless-function
class MyCloud extends Component {
  componentDidMount() {
    setInterval(() => {
      this.forceUpdate();
    }, 3800);
  }

  render() {
    return (
      <div className={cx('cloud-wrapper')}>
        <TagCloud
          className={cx('tag-cloud')}
          style={{
            fontFamily: 'Lato',
            fontSize: 20,
            // fontWeight: 'bold',
            // fontStyle: 'italic',
            color: () => randomColor({ hue: 'monochrome', luminosity: 'light' }),
            padding: 10
          }}
        >
          <div style={{ fontSize: 30 }}>React.js</div>
          <div>HTML5</div>
          <div>SCSS</div>
          <div>Redux</div>
          <div>Redux-Saga</div>
          <div>Git</div>
          <div>DRF</div>
          <div>Linux</div>
          <div style={{ fontSize: 30 }}>Django</div>
          <div>BeautifulSoup</div>
          <div>Docker</div>
          <div>TDD</div>
          <div>REST</div>
          <div>Web scraping</div>
          <div>JavaScript</div>
          <div>ES6</div>
          <div>Jest</div>
          <div>Enzyme</div>
          <div>Pytest</div>
          <div style={{ fontSize: 30 }}>Python</div>
        </TagCloud>
      </div>
    );
  }
}

export default MyCloud;
