import React, { Component } from 'react';
import classNames from 'classnames/bind';

import styles from './styles.css';

const cx = classNames.bind(styles);

const spanLetters = text =>
  // eslint-disable-next-line react/no-array-index-key
  text.split('').map((letter, index) => <span key={`${letter}@${index}`}>{letter}</span>);

class Home extends Component {
  state = {
    typing: true
  };

  componentDidMount = () => {
    const handleFinishTyping = () => {
      this.setState({ typing: false });
    };

    const TxtRotate = function (el, toRotate, period) {
      this.toRotate = toRotate;
      this.el = el;
      this.loopNum = 0;
      this.period = parseInt(period, 10) || 2000;
      this.txt = '';
      this.tick();
      this.isDeleting = false;
    };

    TxtRotate.prototype.tick = function () {
      const i = this.loopNum % this.toRotate.length;
      const fullTxt = this.toRotate[i];

      if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }

      this.el.innerHTML = `<span class="wrap">${this.txt}</span>`;

      const that = this;
      let delta = 300 - Math.random() * 100;

      if (this.isDeleting) {
        delta /= 2;
      }

      if (!this.isDeleting && this.txt === fullTxt) {
        if (i === this.toRotate.length - 1) {
          // finished one full cycle
          handleFinishTyping();
          return;
        }
        delta = this.period;
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
      }

      setTimeout(() => {
        that.tick();
      }, delta);
    };

    const elements = document.getElementsByClassName('txt-rotate');
    for (let i = 0; i < elements.length; i++) {
      const toRotate = elements[i].getAttribute('data-rotate');
      const period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    const css = document.createElement('style');
    css.type = 'text/css';
    css.innerHTML = '.txt-rotate > .wrap { border-right: 0.08em solid #666 }';
    document.body.appendChild(css);
  };

  // TODO: refactor all this mess, what's more efficient rerendering component
  // or asynchronus js changing inner html of the element

  // words = ['geek?', 'smart?', 'curious?', 'nerd?', 'ingenious?', 'cunning?', "Good job, You found me!"];
  words = ['smart?', 'curious?', 'ingenious?', 'cunning?', 'Good job, You found me!'];

  render() {
    return (
      <div className={cx('home-banner')}>
        <h1>
          {this.state.typing && 'Are you looking for someone '}
          <span
            className="txt-rotate"
            style={{ display: 'block' }}
            data-period="800"
            data-rotate={JSON.stringify(this.words)}
          />
        </h1>
        <br />
        <h2>A single &lt;span&gt; is all you need.</h2>
      </div>
    );
  }
}

// const Home = props => (
//   // TODO: fix pointer events
//   // TODO: scale/breakpoint font-size
//   // TODO: use margins instead of line breaks
//   // TODO: organize styles
//   <div className={cx('home-banner')}>
//     <div
//       className="animated fadeIn"
//       style={{
//         animationDuration: '3s',
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center'
//       }}
//     >
//       <h1 className={cx('bouncy-text')}>{spanLetters('Hi!')}</h1>
//       <br />
//       <div className={cx('typewriter')}>
//         <h1>My name is Radek</h1>
//       </div>
//       <br />
//       <h2>and I&apos;m a Full Stack Developer</h2>
//     </div>
//   </div>
// );

export default Home;
