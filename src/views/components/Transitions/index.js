import React from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const wrapperStyles = {
  perspective: '1200px',
  width: '100%',
  height: '100%',
  pointerEvents: 'none'
};

// the childFactory allows to change the transition of the leaving component
// https://github.com/reactjs/react-transition-group/issues/182
const childFactoryCreator = props => child => React.cloneElement(child, props);

const Transitions = ({
  transitionName, duration, pageKey, children
}) => (
  <div style={wrapperStyles}>
    <TransitionGroup
      childFactory={childFactoryCreator({ classNames: transitionName, timeout: duration })}
      component={null} // https://reactcommunity.org/react-transition-group/transition-group#TransitionGroup-prop-component
    >
      <CSSTransition key={pageKey} timeout={duration}>
        {/* you should wrap CSSTransition child in a div in case it could be null
      see https://github.com/reactjs/react-transition-group/issues/208 */}
        {children}
      </CSSTransition>
    </TransitionGroup>
  </div>
);

Transitions.propTypes = {
  transitionName: PropTypes.string,
  duration: PropTypes.number,
  pageKey: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

Transitions.defaultProps = {
  transitionName: '',
  duration: 0
};

export default Transitions;
export { default as scale } from './scale';
export { default as slide } from './slide';
