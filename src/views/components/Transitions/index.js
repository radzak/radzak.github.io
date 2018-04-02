import React from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import './scale/styles.css';
import './slide/styles.css';
// TODO: export transitions as an object to avoid mistyping duration

// the childFactory allows to change the transition of the leaving component
// https://github.com/reactjs/react-transition-group/issues/182
const childFactoryCreator = props => child => React.cloneElement(child, props);

const Transitions = ({
  transition, duration, pageKey, children
}) => (
  <div style={{ perspective: '1200px', width: '100%', height: '100%' }}>
    <TransitionGroup
      childFactory={childFactoryCreator({ classNames: transition, timeout: duration })}
    >
      <CSSTransition key={pageKey} timeout={duration}>
        {/* you should wrap CSSTransition child in a div in case it could be null
      see https://github.com/reactjs/react-transition-group/issues/208 */}
        <div>{children}</div>
      </CSSTransition>
    </TransitionGroup>
  </div>
);

Transitions.propTypes = {
  transition: PropTypes.string,
  duration: PropTypes.number,
  pageKey: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

Transitions.defaultProps = {
  transition: '',
  duration: 0
};

export default Transitions;
