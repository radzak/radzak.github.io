import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Typewriter extends Component {
  state = {
    loopNum: 0,
    txt: '',
    isDeleting: false
  };

  componentDidMount() {
    this.tick();
  }

  componentWillUnmount() {
    clearTimeout(this.nextTick);
  }

  nextTick = null;

  tick() {
    const { words, period, infinite } = this.props;
    const { loopNum, txt, isDeleting } = this.state;

    const i = loopNum % words.length;
    const fullTxt = words[i];
    let delta = 300 - Math.random() * 100;
    let newTxt;

    if (isDeleting) {
      delta /= 2;
      newTxt = fullTxt.substring(0, txt.length - 1);
    } else {
      newTxt = fullTxt.substring(0, txt.length + 1);
    }

    this.setState({ txt: newTxt });

    if (!isDeleting && newTxt === fullTxt) {
      if (i === words.length - 1 && !infinite) {
        // finished one full cycle
        this.props.onFinish();
        return;
      }
      delta = period;
      this.setState({ isDeleting: true });
    } else if (isDeleting && newTxt === '') {
      this.setState(state => ({ isDeleting: false, loopNum: state.loopNum + 1 }));
      delta = 500;
    }

    this.nextTick = setTimeout(() => {
      this.tick();
    }, delta);
  }

  render() {
    const { txt } = this.state;
    const { cssClass } = this.props;

    return (
      <span className={cssClass} style={{ borderRight: '0.08em solid #666' }}>
        {txt}
      </span>
    );
  }
}

Typewriter.propTypes = {
  cssClass: PropTypes.string,
  onFinish: PropTypes.func.isRequired,
  period: PropTypes.number,
  words: PropTypes.arrayOf(PropTypes.string).isRequired,
  infinite: PropTypes.bool
};

Typewriter.defaultProps = {
  cssClass: undefined,
  period: 2000,
  infinite: false
};

export default Typewriter;
